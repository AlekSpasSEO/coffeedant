import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'parse5';
import { walk, attr, text, graph } from './build-seo.mjs';
import { isCurrentDeal } from './lib/amazon-deals.mjs';

const document = parse(readFileSync(new URL('../dist/deals/index.html', import.meta.url), 'utf8'));
const nodes = walk(document);
const tagged = key => nodes.filter(node => attr(node, key) !== undefined);
const deals = tagged('data-deal-card'), catalog = tagged('data-catalog-card');
assert.ok(catalog.length > 0, 'Deals fallback must contain editorial products before any deployment.');
const fallback = attr(tagged('data-catalog-grid')[0], 'hidden') === undefined;
const active = fallback ? catalog : deals;
assert.ok(active.length > 0, 'Deals page must never publish an empty shopping collection.');
assert.equal(Number(text(tagged('data-total')[0])), active.length);
const collection = graph(document).find(schema => schema['@type'] === 'CollectionPage');
assert.equal(collection.mainEntity.numberOfItems, active.length);
assert.equal(collection.mainEntity.itemListElement.length, active.length);
for (const card of deals) assert.ok(isCurrentDeal({ checkedAt: attr(card, 'data-checked'), endsAt: attr(card, 'data-ends') }), 'Expired API content cannot be deployed.');
for (const card of catalog) {
  assert.equal(attr(card, 'data-price'), undefined, 'Fallback cannot claim a price.');
  assert.equal(attr(card, 'data-savings'), undefined, 'Fallback cannot claim a discount.');
  const children = walk(card);
  const link = children.find(node => attr(node, 'class') === 'deal-cta');
  assert.match(attr(link, 'href'), /^https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10}\?tag=coffeedant03-20$/);
  assert.equal(attr(link, 'rel'), 'sponsored nofollow noopener');
  for (const image of children.filter(node => node.tagName === 'img')) {
    assert.ok(!/^\/(?:coffeedant\/)?https?:/.test(attr(image, 'src')), 'External editorial images must not receive the site base prefix.');
  }
}
console.log(`Deals page passed: ${active.length} ${fallback ? 'catalog products' : 'current deals'}, ${catalog.length} fallback products, count/schema/link parity.`);
