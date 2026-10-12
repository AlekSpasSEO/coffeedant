import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
const catalog = await readJson('../src/data/amazon-products.json');
const offerData = await readJson('../src/data/amazon-offers.json');
const finder = await readJson('../dist/coffee-finder.json');
const manifest = await readJson('../src/data/review-batch-manifest.json');
const reviewPaths = new Set([...manifest.map(({ slug }) => slug), '/espresso-machine/breville-bambino/']);
const items = new Map(finder.items.map((item) => [item.path, item]));

assert.equal(finder.items.length, finder.machineCount, 'Finder count does not match its items');
assert.equal(new Set(finder.items.map(({ description }) => description.toLowerCase().trim())).size, finder.machineCount, 'Finder descriptions repeat');
for (const [path, product] of Object.entries(catalog.products)) {
  assert(reviewPaths.has(path), `Unrecognized review mapping: ${path}`);
  assert.match(product.asin, /^[A-Z0-9]{10}$/, `Invalid ASIN: ${path}`);
  assert.equal(new URL(product.sourceUrl).protocol, 'https:', `Insecure source URL: ${path}`);
  const offer = offerData.offers[path];
  assert(offer, `No refresh record: ${path}`);
  assert.equal(offer.asin, product.asin, `Offer belongs to a different ASIN: ${path}`);
  assert.equal(new URL(offer.detailPageUrl).pathname, `/dp/${product.asin}`, `Offer URL points to another product: ${path}`);
  const item = items.get(path);
  if (!path.startsWith('/espresso-machine/')) continue;
  assert(item, `Mapped machine missing from Finder: ${path}`);
  const url = new URL(item.amazonHref);
  assert.equal(url.hostname, catalog.marketplace, `Wrong Amazon marketplace: ${path}`);
  assert.equal(url.pathname, `/dp/${product.asin}`, `Finder points to another ASIN: ${path}`);
  assert.equal(url.searchParams.get('tag'), catalog.partnerTag, `Missing affiliate attribution: ${path}`);
  assert.equal(item.amazonNote, product.purchaseNote, `Purchase distinction missing: ${path}`);
  if (product.conditionLabel === 'Amazon Renewed') {
    assert.match(item.amazonLabel, /Renewed/, `Renewed link is not labeled: ${path}`);
    const fresh = Date.now() - Date.parse(offer.checkedAt) <= 24 * 60 * 60 * 1000;
    if (fresh && offer.price) assert.match(item.priceLabel, /Renewed/, `Renewed price is not labeled: ${path}`);
  }
}
for (const item of finder.items) {
  assert(item.description && item.description.length <= 300, `Invalid card excerpt: ${item.path}`);
  const url = new URL(item.amazonHref);
  assert.equal(url.hostname, catalog.marketplace);
  assert.equal(url.searchParams.get('tag'), catalog.partnerTag);
}
console.log(`Verified ${Object.keys(catalog.products).length} Amazon mappings, ${finder.machineCount} distinct descriptions, and purchase-condition labels.`);
