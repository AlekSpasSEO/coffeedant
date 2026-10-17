import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { amazonApiError } from './lib/amazon-api-error.mjs';

const root = new URL('../', import.meta.url);
const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index < 0 ? null : process.argv[index + 1];
};
const catalogPath = argument('--catalog') ?? new URL('src/data/amazon-products.json', root);
const offersPath = argument('--output') ?? new URL('src/data/amazon-offers.json', root);
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

if (!credentialId || !credentialSecret || !credentialVersion) {
  throw new Error('Amazon Creators API credentials are missing. Set the three AMAZON_CREATORS_* variables or pass --credentials <csv>.');
}

const tokenEndpoint = credentialVersion.startsWith('3.2')
  ? 'https://api.amazon.co.uk/auth/o2/token'
  : credentialVersion.startsWith('3.3')
    ? 'https://api.amazon.co.jp/auth/o2/token'
    : 'https://api.amazon.com/auth/o2/token';
const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
const partnerTag = process.env.AMAZON_ASSOCIATE_TAG || catalog.partnerTag;
const marketplace = catalog.marketplace;
const products = Object.entries(catalog.products);
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

const getItems = async (itemIds, condition = 'New') => {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch('https://creatorsapi.amazon/catalog/v1/getItems', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
        'x-marketplace': marketplace,
      },
      body: JSON.stringify({
        itemIds,
        itemIdType: 'ASIN',
        marketplace,
        partnerTag,
        condition,
        resources: [
          'itemInfo.title',
          'offersV2.listings.price',
          'offersV2.listings.availability',
          'offersV2.listings.isBuyBoxWinner',
        ],
      }),
    });
    if (response.ok) return response.json();
    if (response.status !== 429 || attempt === 3) {
      throw new Error(amazonApiError('GetItems', response.status, await response.json().catch(() => ({}))));
    }
    await sleep(2 ** attempt * 1500);
  }
  throw new Error('Amazon GetItems exhausted its retry budget.');
};

const chunks = [];
for (const condition of ['New', 'Any']) {
  const asins = [...new Set(products.filter(([, product]) => (
    (product.conditionLabel === 'Amazon Renewed' ? 'Any' : 'New') === condition
  )).map(([, product]) => product.asin))];
  for (let index = 0; index < asins.length; index += 10) chunks.push({ itemIds: asins.slice(index, index + 10), condition });
}

const apiItems = [];
await sleep(1200);
for (let index = 0; index < chunks.length; index += 1) {
  const response = await getItems(chunks[index].itemIds, chunks[index].condition);
  apiItems.push(...(response.itemsResult?.items ?? response.itemResults?.items ?? []));
  if (index < chunks.length - 1) await sleep(1200);
}

const byAsin = new Map(apiItems.map((item) => [item.asin, item]));
const checkedAt = new Date().toISOString();
const offers = {};
for (const [slug, product] of products) {
  const item = byAsin.get(product.asin);
  const listings = item?.offersV2?.listings ?? [];
  const listing = listings.find((candidate) => candidate.isBuyBoxWinner) ?? listings[0];
  offers[slug] = {
    asin: product.asin,
    title: item?.itemInfo?.title?.displayValue ?? product.productName,
    detailPageUrl: item?.detailPageURL ?? `https://www.amazon.com/dp/${product.asin}?tag=${encodeURIComponent(partnerTag)}`,
    price: listing?.price?.money?.displayAmount ?? null,
    amount: listing?.price?.money?.amount ?? null,
    currency: listing?.price?.money?.currency ?? null,
    availabilityType: listing?.availability?.type ?? 'UNKNOWN',
    availabilityMessage: listing?.availability?.message ?? 'Check current availability on Amazon',
    checkedAt,
  };
}

const output = {
  schemaVersion: 1,
  generatedAt: checkedAt,
  marketplace,
  offers,
};
await writeFile(offersPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(`Updated ${Object.keys(offers).length} verified Amazon offers at ${checkedAt}.`);
