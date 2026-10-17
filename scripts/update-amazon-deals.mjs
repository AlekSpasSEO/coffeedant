import { readFile, writeFile } from 'node:fs/promises';
import { categories, normalizeDeal } from './lib/amazon-deals.mjs';
import { getDealSeason, seasonalQueries } from '../src/lib/deal-season.mjs';
import { amazonApiError } from './lib/amazon-api-error.mjs';

const root = new URL('../', import.meta.url);
const dataPath = new URL('src/data/amazon-deals.json', root);
const selectionPath = new URL('src/data/amazon-deal-selection.json', root);
const refresh = process.argv.includes('--refresh');
const season = getDealSeason();
const argument = key => { const at = process.argv.indexOf(key); return at < 0 ? null : process.argv[at + 1]; };
const parseCsv = line => {
  const cells = []; let cell = '', quoted = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') { if (quoted && line[i + 1] === '"') { cell += '"'; i++; } else quoted = !quoted; }
    else if (line[i] === ',' && !quoted) { cells.push(cell); cell = ''; } else cell += line[i];
  }
  return [...cells, cell];
};
let csv = {};
if (argument('--credentials')) {
  const rows = (await readFile(argument('--credentials'), 'utf8')).replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
  const headers = parseCsv(rows[0]); const values = parseCsv(rows[1]);
  csv = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
}
const credentialId = process.env.AMAZON_CREATORS_CREDENTIAL_ID || csv['Credential Id'];
const credentialSecret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET || csv.Secret;
const version = process.env.AMAZON_CREATORS_CREDENTIAL_VERSION || csv.Version;
if (!credentialId || !credentialSecret || !version) throw new Error('Amazon Creators API credentials are missing. Use the existing AMAZON_CREATORS_* secrets or --credentials <csv>.');
const catalog = JSON.parse(await readFile(new URL('src/data/amazon-products.json', root), 'utf8'));
const partnerTag = process.env.AMAZON_ASSOCIATE_TAG || catalog.partnerTag;
const marketplace = 'www.amazon.com';
const endpoint = version.startsWith('3.2') ? 'https://api.amazon.co.uk/auth/o2/token' : version.startsWith('3.3') ? 'https://api.amazon.co.jp/auth/o2/token' : 'https://api.amazon.com/auth/o2/token';
const tokenResponse = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ grant_type: 'client_credentials', client_id: credentialId, client_secret: credentialSecret, scope: 'creatorsapi::default' }) });
if (!tokenResponse.ok) throw new Error(`Amazon authentication failed: HTTP ${tokenResponse.status}.`);
const { access_token: token } = await tokenResponse.json();
if (!token) throw new Error('Amazon did not return an access token.');
const resources = ['images.primary.medium', 'itemInfo.title', 'itemInfo.byLineInfo', 'offersV2.listings.price', 'offersV2.listings.availability', 'offersV2.listings.condition', 'offersV2.listings.dealDetails', 'offersV2.listings.isBuyBoxWinner', 'offersV2.listings.merchantInfo', 'offersV2.listings.type'];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const request = async (operation, parameters) => {
  for (let attempt = 0; attempt < 5; attempt++) {
    await sleep(attempt ? 2 ** attempt * 1200 : 1200);
    const response = await fetch(`https://creatorsapi.amazon/catalog/v1/${operation}`, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', 'x-marketplace': marketplace }, body: JSON.stringify({ partnerTag, marketplace, condition: 'New', resources, ...parameters }) });
    const payload = await response.json().catch(() => ({}));
    const errors = payload.errors ?? [];
    const noResults = errors.length && errors.every(error => /NoResults|ItemNotFound|NoItems/i.test(error.code ?? ''));
    if (response.ok || (operation === 'searchItems' && noResults)) {
      if (errors.length && !noResults) throw new Error(`Amazon ${operation} returned partial errors: ${errors.map(error => error.code).join(', ')}.`);
      return payload;
    }
    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 4) throw new Error(amazonApiError(operation, response.status, payload));
  }
};
const found = new Map();
let selection;
if (refresh) {
  selection = JSON.parse(await readFile(selectionPath, 'utf8'));
  const categoryByAsin = new Map(selection.products.map(product => [product.asin, product.category]));
  for (let index = 0; index < selection.products.length; index += 10) {
    const payload = await request('getItems', { itemIds: selection.products.slice(index, index + 10).map(product => product.asin), itemIdType: 'ASIN' });
    for (const item of payload.itemsResult?.items ?? []) {
      const category = categories.find(category => category.id === categoryByAsin.get(item.asin));
      const deal = (category && normalizeDeal(item, category, partnerTag)) || categories.map(candidate => normalizeDeal(item, candidate, partnerTag)).find(Boolean);
      if (deal) found.set(deal.asin, deal);
    }
  }
} else {
  const searches = [];
  for (const category of categories) {
    for (const keywords of [...new Set([...category.queries, ...seasonalQueries(category.id, season)])]) {
      // Search discounted products, then a separate unfiltered page for deals
      // whose API response has DealDetails but no comparison-price savings.
      for (const discounted of [true, false]) {
        for (let page = 1; page <= (discounted ? 3 : 1); page++) {
          const payload = await request('searchItems', { keywords, searchIndex: 'All', availability: 'Available', itemCount: 10, itemPage: page, ...(discounted ? { minSavingPercent: 1 } : {}) });
          const items = payload.searchResult?.items ?? [];
          searches.push({ category: category.id, keywords, page, discounted, returned: items.length });
          for (const item of items) {
            const deal = normalizeDeal(item, category, partnerTag);
            if (deal && (!found.has(deal.asin) || Date.parse(deal.checkedAt) > Date.parse(found.get(deal.asin).checkedAt))) found.set(deal.asin, deal);
          }
          if (items.length < 10 || (payload.searchResult?.totalResultCount ?? Infinity) <= page * 10) break;
        }
      }
    }
    console.log(`Searched ${category.label}: ${[...found.values()].filter(product => product.category === category.id).length} verified deals.`);
  }
  const selectedAt = new Date().toISOString();
  selection = { schemaVersion: 1, selectedAt, marketplace, campaign: season.campaign?.id ?? null, phase: season.phase, products: [...found.values()].map(({ asin, category }) => ({ asin, category })), searches };
}
const products = [...found.values()].sort((a, b) => (b.savingsPercent ?? 0) - (a.savingsPercent ?? 0) || a.asin.localeCompare(b.asin));
const output = { schemaVersion: 1, source: 'Amazon Creators API', marketplace, selectedAt: selection.selectedAt, refreshedAt: new Date().toISOString(), categories: categories.map(({ id, label }) => ({ id, label })), products };
// Only publish a complete successful run. API/authentication failures leave the
// prior data intact; the page independently hides content older than 24 hours.
await writeFile(dataPath, `${JSON.stringify(output, null, 2)}\n`);
if (!refresh) await writeFile(selectionPath, `${JSON.stringify(selection, null, 2)}\n`);
console.log(`${refresh ? 'Refreshed' : 'Selected'} ${products.length} Amazon coffee deals at ${output.refreshedAt}.`);
