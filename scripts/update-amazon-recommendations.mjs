import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const outputPath = new URL('src/data/amazon-recommendations.json', root);
const credentialsFlag = process.argv.indexOf('--credentials');
const credentialsPath = credentialsFlag >= 0 ? process.argv[credentialsFlag + 1] : null;

const parseCsvRow = (line) => {
  const cells = [];
  let cell = '';
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === ',' && !quoted) {
      cells.push(cell);
      cell = '';
    } else {
      cell += character;
    }
  }
  cells.push(cell);
  return cells;
};

const readCredentialCsv = async (path) => {
  const lines = (await readFile(path, 'utf8')).replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) throw new Error('The Amazon credential CSV does not contain a data row.');
  const headers = parseCsvRow(lines[0]);
  const values = parseCsvRow(lines[1]);
  return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']));
};

const csvCredentials = credentialsPath ? await readCredentialCsv(credentialsPath) : {};
const credentialId = process.env.AMAZON_CREATORS_CREDENTIAL_ID || csvCredentials['Credential Id'];
const credentialSecret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET || csvCredentials.Secret;
const credentialVersion = process.env.AMAZON_CREATORS_CREDENTIAL_VERSION || csvCredentials.Version;
const partnerTag = process.env.AMAZON_ASSOCIATE_TAG || 'coffeedant03-20';
const marketplace = 'www.amazon.com';

if (!credentialId || !credentialSecret || !credentialVersion) {
  throw new Error('Amazon Creators API credentials are missing. Set the three AMAZON_CREATORS_* variables or pass --credentials <csv>.');
}

const tokenEndpoint = credentialVersion.startsWith('3.2')
  ? 'https://api.amazon.co.uk/auth/o2/token'
  : credentialVersion.startsWith('3.3')
    ? 'https://api.amazon.co.jp/auth/o2/token'
    : 'https://api.amazon.com/auth/o2/token';
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const tokenResponse = await fetch(tokenEndpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'client_credentials',
    client_id: credentialId,
    client_secret: credentialSecret,
    scope: 'creatorsapi::default',
  }),
});
if (!tokenResponse.ok) throw new Error(`Amazon authentication failed with HTTP ${tokenResponse.status}.`);
const { access_token: accessToken } = await tokenResponse.json();
if (!accessToken) throw new Error('Amazon authentication succeeded without returning an access token.');

const searches = [
  {
    id: 'machine',
    category: 'Espresso machine',
    keywords: 'espresso machine',
    include: /\b(?:espresso|coffee)\b.*\b(?:maker|machine)\b|\b(?:maker|machine)\b.*\b(?:espresso|coffee)\b/i,
    exclude: /(?:cleaner|cleaning|tablet|filter|replacement|part|cover|capsule|pod|grinder)/i,
  },
  {
    id: 'grinder',
    category: 'Coffee grinder',
    keywords: 'burr coffee grinder',
    include: /\bburr\b.*\bgrinder\b|\bgrinder\b.*\bburr\b/i,
    exclude: /(?:cleaner|cleaning|replacement|part|brush|bellows|hopper)/i,
  },
  {
    id: 'accessory',
    category: 'Espresso accessory',
    keywords: 'espresso coffee scale',
    include: /(?:coffee|espresso).*scale|scale.*(?:coffee|espresso)/i,
    exclude: /(?:replacement|part|battery|cover)/i,
  },
  {
    id: 'beans',
    category: 'Whole-bean coffee',
    keywords: 'whole bean espresso coffee',
    include: /(?:whole bean|coffee beans|espresso beans)/i,
    exclude: /(?:ground|pod|capsule|machine|maker|grinder)/i,
  },
];

const resources = [
  'images.primary.medium',
  'itemInfo.title',
  'itemInfo.byLineInfo',
  'offersV2.listings.price',
  'offersV2.listings.availability',
  'offersV2.listings.isBuyBoxWinner',
  'browseNodeInfo.browseNodes.salesRank',
  'browseNodeInfo.websiteSalesRank',
];

const searchItems = async (search) => {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch('https://creatorsapi.amazon/catalog/v1/searchItems', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
        'x-marketplace': marketplace,
      },
      body: JSON.stringify({
        partnerTag,
        marketplace,
        keywords: search.keywords,
        searchIndex: 'All',
        itemCount: 10,
        minReviewsRating: 4,
        sortBy: 'Relevance',
        resources,
      }),
    });
    if (response.ok) return response.json();
    const errorBody = await response.text();
    if (response.status !== 429 || attempt === 3) {
      throw new Error(`Amazon SearchItems failed for ${search.id} with HTTP ${response.status}: ${errorBody.slice(0, 500)}`);
    }
    await sleep(2 ** attempt * 1500);
  }
  throw new Error(`Amazon SearchItems exhausted its retry budget for ${search.id}.`);
};

const salesRank = (item) => {
  const ranks = [
    item?.browseNodeInfo?.websiteSalesRank?.salesRank,
    ...(item?.browseNodeInfo?.browseNodes ?? []).map((node) => node.salesRank),
  ].filter((rank) => Number.isFinite(rank) && rank > 0);
  return ranks.length ? Math.min(...ranks) : null;
};

const rankedNode = (item) => (item?.browseNodeInfo?.browseNodes ?? [])
  .filter((node) => Number.isFinite(node.salesRank) && node.salesRank > 0)
  .sort((a, b) => a.salesRank - b.salesRank)[0] ?? null;

const checkedAt = new Date().toISOString();
const products = [];
for (const search of searches) {
  const payload = await searchItems(search);
  const items = payload.searchResult?.items ?? payload.itemsResult?.items ?? [];
  const relevant = items.filter((item) => {
    const title = item?.itemInfo?.title?.displayValue ?? '';
    return search.include.test(title) && !search.exclude.test(title);
  });
  if (!relevant.length) {
    throw new Error(`Amazon returned no relevant candidates for ${search.id}: ${items.map((item) => item?.itemInfo?.title?.displayValue).filter(Boolean).join(' | ')}`);
  }
  const candidates = relevant
    .map((item, position) => ({ item, position, rank: salesRank(item) }))
    .sort((a, b) => {
      if (a.rank === null && b.rank !== null) return 1;
      if (a.rank !== null && b.rank === null) return -1;
      if (a.rank !== null && b.rank !== null && a.rank !== b.rank) return a.rank - b.rank;
      return a.position - b.position;
    });
  const selected = candidates[0]?.item;
  if (!selected) throw new Error(`Amazon returned no candidates for ${search.id}.`);

  const listing = (selected.offersV2?.listings ?? []).find((offer) => offer.isBuyBoxWinner)
    ?? selected.offersV2?.listings?.[0];
  const node = rankedNode(selected);
  const url = new URL(selected.detailPageURL ?? `https://www.amazon.com/dp/${selected.asin}`);
  url.searchParams.set('tag', partnerTag);
  products.push({
    id: search.id,
    category: search.category,
    asin: selected.asin,
    title: selected.itemInfo?.title?.displayValue ?? `${search.category} on Amazon`,
    brand: selected.itemInfo?.byLineInfo?.brand?.displayValue ?? null,
    detailPageUrl: url.toString(),
    imageUrl: selected.images?.primary?.medium?.url ?? null,
    imageWidth: selected.images?.primary?.medium?.width ?? null,
    imageHeight: selected.images?.primary?.medium?.height ?? null,
    price: listing?.price?.money?.displayAmount ?? null,
    availability: listing?.availability?.message ?? 'Check current availability on Amazon',
    salesRank: salesRank(selected),
    salesRankCategory: node?.contextFreeName ?? node?.displayName ?? selected.browseNodeInfo?.websiteSalesRank?.contextFreeName ?? null,
    ratingLabel: '4★+ Amazon customer rating',
    ratingNote: 'Selected from Amazon results filtered to products rated at least 4 stars. Amazon does not return the exact average rating through Creators API.',
  });
  await sleep(1200);
}

const output = {
  schemaVersion: 1,
  generatedAt: checkedAt,
  marketplace,
  selectionMethod: 'Amazon Creators API SearchItems with a 4-star minimum, product relevance checks, and current sales-rank signals.',
  products,
};
await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(`Updated ${products.length} Amazon recommendation products at ${checkedAt}.`);
for (const product of products) {
  console.log(`${product.id}: ${product.asin} · rank ${product.salesRank ?? 'unavailable'} · ${product.title}`);
}
