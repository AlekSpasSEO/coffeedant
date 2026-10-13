import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, normalizeDeal, isCurrentDeal } from '../lib/amazon-deals.mjs';
const now = Date.parse('2026-10-13T12:00:00Z');
const category = categories.find(category => category.id === 'grinders');
const fixture = () => ({ asin: 'B012345678', detailPageURL: 'https://www.amazon.com/dp/B012345678?tag=api-tag&th=1', itemInfo: { title: { displayValue: 'Burr coffee grinder' } }, offersV2: { listings: [{ isBuyBoxWinner: true, condition: { value: 'New' }, availability: { type: 'IN_STOCK' }, price: { money: { amount: 80, currency: 'USD', displayAmount: '$80.00' }, savingBasis: { money: { amount: 100, currency: 'USD', displayAmount: '$100.00' }, savingBasisTypeLabel: 'List Price' }, savings: { money: { amount: 20, currency: 'USD', displayAmount: '$20.00' }, percentage: 20 } } }] } });

test('discount uses Amazon savings and labelled basis, preserving API link parameters', () => {
  const deal = normalizeDeal(fixture(), category, 'coffeedant03-20', now);
  assert.equal(deal.savingsPercent, 20); assert.equal(deal.referenceLabel, 'List Price');
  const link = new URL(deal.detailPageUrl); assert.equal(link.searchParams.get('tag'), 'coffeedant03-20'); assert.equal(link.searchParams.get('th'), '1');
});
test('ordinary prices and inconsistent reference currencies are not advertised as discounts', () => {
  const item = fixture(); delete item.offersV2.listings[0].price.savings;
  assert.equal(normalizeDeal(item, category, 'tag', now), null);
  const other = fixture(); other.offersV2.listings[0].price.savingBasis.money.currency = 'EUR';
  assert.equal(normalizeDeal(other, category, 'tag', now), null);
});
test('expired and future deals are omitted, including malformed dates', () => {
  for (const dealDetails of [{ endTime: '2026-10-13T11:59:59Z' }, { startTime: '2026-10-14T12:00:00Z' }, { endTime: 'not-a-date' }]) {
    const item = fixture(); item.offersV2.listings[0].dealDetails = dealDetails;
    assert.equal(normalizeDeal(item, category, 'tag', now), null);
  }
});
test('an active API deal can lack a comparison price and preserves Prime restrictions', () => {
  const item = fixture(); delete item.offersV2.listings[0].price.savings;
  item.offersV2.listings[0].dealDetails = { accessType: 'PRIME_EXCLUSIVE', endTime: '2026-10-14T12:00:00Z' };
  const deal = normalizeDeal(item, category, 'tag', now); assert.equal(deal.accessType, 'PRIME_EXCLUSIVE'); assert.equal(deal.savingsPercent, null);
});
test('a non-discounted featured offer cannot inherit another seller discount', () => {
  const item = fixture(); item.offersV2.listings.unshift({ ...structuredClone(item.offersV2.listings[0]), price: { money: { amount: 110, currency: 'USD', displayAmount: '$110' } } });
  assert.equal(normalizeDeal(item, category, 'tag', now), null);
});
test('out of stock, used, subscription and MAP restricted offers are omitted', () => {
  for (const change of [{ availability: { type: 'OUT_OF_STOCK' } }, { condition: { value: 'Used' } }, { type: 'SUBSCRIBE_AND_SAVE' }, { violatesMAP: true }]) {
    const item = fixture(); Object.assign(item.offersV2.listings[0], change); assert.equal(normalizeDeal(item, category, 'tag', now), null);
  }
});
test('unsafe links and unrelated replacement parts are rejected', () => {
  const item = fixture(); item.detailPageURL = 'https://example.com/dp/B012345678'; assert.equal(normalizeDeal(item, category, 'tag', now), null);
  const part = fixture(); part.itemInfo.title.displayValue = 'Replacement coffee grinder brush'; assert.equal(normalizeDeal(part, category, 'tag', now), null);
});
test('French roast coffee is not a French press brewer', () => {
  const item = fixture(); item.itemInfo.title.displayValue = 'Starbucks Ground Coffee French Roast, 18 oz Bag';
  assert.equal(normalizeDeal(item, categories.find(category => category.id === 'brewers'), 'tag', now), null);
  assert.equal(normalizeDeal(item, categories.find(category => category.id === 'coffee'), 'tag', now)?.category, 'coffee');
});
test('24 hour data age, end times, future checks and invalid timestamps hide deals', () => {
  assert.equal(isCurrentDeal({ checkedAt: '2026-10-12T12:00:01Z' }, now), true);
  assert.equal(isCurrentDeal({ checkedAt: '2026-10-12T12:00:00Z' }, now), false);
  assert.equal(isCurrentDeal({ checkedAt: '2026-10-14T12:00:00Z' }, now), false);
  assert.equal(isCurrentDeal({ checkedAt: 'garbage' }, now), false);
  assert.equal(isCurrentDeal({ checkedAt: '2026-10-13T11:00:00Z', endsAt: '2026-10-13T12:00:00Z' }, now), false);
});
