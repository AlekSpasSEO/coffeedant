import { readFile, writeFile } from 'node:fs/promises';

const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index < 0 ? null : process.argv[index + 1];
};
if (process.argv.includes('--export-identities')) {
  if (!argument('--output')) throw new Error('Pass --output <path>.');
  const { createServer } = await import('vite');
  const server = await createServer({ configFile: false, server: { middlewareMode: true }, define: { 'import.meta.env.BASE_URL': JSON.stringify('/') } });
  try {
    const { modernReviews } = await server.ssrLoadModule('/src/data/review-registry.ts');
    const { bambinoReview } = await server.ssrLoadModule('/src/data/reviews.ts');
    await writeFile(argument('--output'), JSON.stringify([...modernReviews, bambinoReview].map(({ slug, brand, model, sku, category, facts, quickAnswers }) => ({ slug, brand, model, sku, category, facts, quickAnswers })), null, 2));
    console.log('Exported review identities for candidate verification.');
  } finally { await server.close(); }
  process.exit(0);
}
if (process.argv.includes('--resolve-legacy')) {
  if (!argument('--output')) throw new Error('Pass --output <path>.');
  const pages = [...JSON.parse(await readFile(new URL('../src/data/pages-a.json', import.meta.url), 'utf8')),
    ...JSON.parse(await readFile(new URL('../src/data/pages-b.json', import.meta.url), 'utf8'))];
  const finder = JSON.parse(await readFile(new URL('../dist/coffee-finder.json', import.meta.url), 'utf8'));
  const paths = new Set(finder.items.map(({ path }) => path));
  const resolved = {};
  const links = [];
  for (const page of pages.filter(({ path }) => paths.has(path))) {
    for (const match of page.html.matchAll(/href=["'](https:\/\/(?:www\.)?(?:amazon\.[^/]+|amzn\.to)\/[^"'<>]+)/g)) {
      const url = match[1].replace(/&amp;/g, '&');
      if (!(url in resolved)) {
        resolved[url] = url;
        if (new URL(url).hostname === 'amzn.to') {
          const response = await fetch(url, { method: 'HEAD', redirect: 'manual' });
          const location = response.headers.get('location');
          if (location) resolved[url] = new URL(location, url).href;
        }
      }
      const destination = resolved[url];
      const asin = destination.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?]|$)/)?.[1] ?? null;
      links.push({ path: page.path, sourceUrl: url, destination, asin });
    }
  }
  await writeFile(argument('--output'), JSON.stringify(links, null, 2));
  console.log(`Resolved ${Object.keys(resolved).length} distinct legacy links; ${links.filter(({ asin }) => asin).length} article links expose an ASIN.`);
  process.exit(0);
}
const parseCsvRow = (line) => {
  const cells = [];
  let cell = '', quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') { cell += '"'; index += 1; }
      else quoted = !quoted;
    } else if (character === ',' && !quoted) { cells.push(cell); cell = ''; }
    else cell += character;
  }
  cells.push(cell);
  return cells;
};
let credentials = {};
if (argument('--credentials')) {
  const lines = (await readFile(argument('--credentials'), 'utf8')).replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
  const headers = parseCsvRow(lines[0]);
  const values = parseCsvRow(lines[1]);
  credentials = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
}
const credentialId = process.env.AMAZON_CREATORS_CREDENTIAL_ID || credentials['Credential Id'];
const credentialSecret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET || credentials.Secret;
const credentialVersion = process.env.AMAZON_CREATORS_CREDENTIAL_VERSION || credentials.Version;
if (!credentialId || !credentialSecret || !credentialVersion) throw new Error('Amazon Creators API credentials are missing.');
const tokenEndpoint = credentialVersion.startsWith('3.2') ? 'https://api.amazon.co.uk/auth/o2/token'
  : credentialVersion.startsWith('3.3') ? 'https://api.amazon.co.jp/auth/o2/token' : 'https://api.amazon.com/auth/o2/token';
const products = JSON.parse(await readFile(new URL('../src/data/amazon-products.json', import.meta.url), 'utf8'));
const finder = JSON.parse(await readFile(new URL('../dist/coffee-finder.json', import.meta.url), 'utf8'));
const outputPath = argument('--output');
if (!outputPath) throw new Error('Pass --output <path> to save candidate evidence outside the published catalog.');
let output = { checkedAt: new Date().toISOString(), marketplace: products.marketplace, searches: {} };
if (process.argv.includes('--resume')) {
  try { output = JSON.parse(await readFile(outputPath, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
const tokenResponse = await fetch(tokenEndpoint, {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ grant_type: 'client_credentials', client_id: credentialId, client_secret: credentialSecret, scope: 'creatorsapi::default' }),
});
if (!tokenResponse.ok) throw new Error(`Amazon authentication failed with HTTP ${tokenResponse.status}.`);
const { access_token: accessToken } = await tokenResponse.json();
if (!accessToken) throw new Error('Amazon did not return an access token.');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const resources = ['itemInfo.title', 'itemInfo.byLineInfo', 'itemInfo.features', 'itemInfo.manufactureInfo', 'offersV2.listings.price', 'offersV2.listings.availability', 'offersV2.listings.condition'];
const apiRequest = async (operation, input) => {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    await sleep(attempt ? 2 ** attempt * 1500 : 1300);
    const response = await fetch(`https://creatorsapi.amazon/catalog/v1/${operation}`, {
      method: 'POST',
      headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json', 'x-marketplace': products.marketplace },
      body: JSON.stringify({ marketplace: products.marketplace, partnerTag: products.partnerTag, resources, ...input }),
    });
    if (response.ok) return response.json();
    if (response.status === 429 && attempt < 4) continue;
    throw new Error(`Amazon ${operation} failed with HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
  }
};
if (process.argv.includes('--verify-catalog') || argument('--asins')) {
  const asins = [...new Set(argument('--asins')?.split(',') ?? Object.values(products.products).map(({ asin }) => asin))];
  const items = [];
  const errors = [];
  for (let index = 0; index < asins.length; index += 10) {
    const payload = await apiRequest('getItems', { itemIds: asins.slice(index, index + 10), itemIdType: 'ASIN' });
    items.push(...(payload.itemsResult?.items ?? payload.itemResults?.items ?? []));
    errors.push(...(payload.errors ?? []));
  }
  await writeFile(outputPath, JSON.stringify({ checkedAt: new Date().toISOString(), marketplace: products.marketplace, items, errors }, null, 2));
  console.log(`Verified ${items.length}/${asins.length} ASINs through GetItems.`);
  process.exit(0);
}
const queries = argument('--queries') ? JSON.parse(await readFile(argument('--queries'), 'utf8')) : null;
const selected = finder.items.filter((item) => !products.products[item.path]
  && (!queries || queries[item.path])
  && (!argument('--only') || item.path.includes(argument('--only')))
  && !(process.argv.includes('--resume') && output.searches[item.path]));
const limit = Number(argument('--limit')) || selected.length;
for (const [index, item] of selected.slice(0, limit).entries()) {
  const broadModel = item.model.split(',')[0]
    .replace(/\b(?:ECAM|ESAM|EC|EP|RI|EA|XP|TIU|TPU|TQ|TI|PL)\d\S*/g, '')
    .replace(/original generation|final generation|current walnut generation|Quick Steam Plus|Dark Inox NAC|Midnight Silver NAD|Aluminum NAA|Aluminium Black NAB|Reservoir Standard|Black Pour-Over/gi, '')
    .replace(/\s+/g, ' ').trim();
  const keywords = queries?.[item.path] || argument('--keywords') || `${item.brand} ${process.argv.includes('--broad') ? broadModel : item.model}`;
  const payload = await apiRequest('searchItems', { keywords, searchIndex: 'All', itemCount: 10, sortBy: 'Relevance', availability: 'IncludeOutOfStock' });
  const items = payload?.searchResult?.items ?? payload?.itemsResult?.items ?? [];
  output.searches[item.path] = { brand: item.brand, model: item.model, keywords, checkedAt: new Date().toISOString(), errors: payload?.errors ?? [],
    candidates: items.map((candidate) => ({ asin: candidate.asin, title: candidate.itemInfo?.title?.displayValue,
      url: candidate.detailPageURL, brand: candidate.itemInfo?.byLineInfo?.brand?.displayValue,
      model: candidate.itemInfo?.manufactureInfo?.model?.displayValue,
      features: candidate.itemInfo?.features?.displayValues ?? [], listings: candidate.offersV2?.listings ?? [] })) };
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`${index + 1}/${Math.min(limit, selected.length)} ${item.brand} ${item.model}: ${items.length} candidates`);
}
console.log(`Saved ${Object.keys(output.searches).length} searches. Candidate matches require review before publication.`);
