import test from 'node:test';
import assert from 'node:assert/strict';
import { buildDealCatalog, dealDisplay } from '../../src/lib/deal-catalog.mjs';
import { amazonApiError } from '../lib/amazon-api-error.mjs';

const now = Date.parse('2026-10-17T12:00:00Z');
const fallback = [{ title: 'Editorial product', detailPageUrl: 'https://www.amazon.com/dp/B012345678?tag=coffeedant03-20' }];
test('expired, empty, future and malformed feeds always retain shopping options without prices', () => {
  for (const products of [[], [{ checkedAt: '2026-10-16T12:00:00Z', price: '$50', imageUrl: 'old-api-image' }], [{ checkedAt: '2026-10-17T13:00:00Z' }], [{ checkedAt: 'bad' }], [{ checkedAt: '2026-10-17T11:00:00Z', endsAt: '2026-10-17T12:00:00Z' }]]) {
    const display = dealDisplay(products, fallback, now);
    assert.equal(display.mode, 'catalog'); assert.deepEqual(display.products, fallback);
    assert.equal(JSON.stringify(display).includes('old-api-image'), false);
    assert.equal(display.products.some(product => product.price || product.savingsPercent), false);
  }
});
test('live discounts resume automatically after recovery and expire at the shared deadline', () => {
  const products = [{ checkedAt: '2026-10-17T11:00:00Z', endsAt: '2026-10-17T12:30:00Z', price: '$50' }];
  assert.deepEqual(dealDisplay(products, fallback, now), { mode: 'deals', products });
  assert.equal(dealDisplay(products, fallback, now + 1800000).mode, 'catalog');
});
test('fallback keeps catalog variant and condition notes, editorial images and affiliate links', () => {
  const products = { '/espresso-machine/a/': { asin: 'B012345678', productName: 'Different color, renewed', conditionLabel: 'Amazon Renewed', purchaseNote: 'Verify voltage' }, '/espresso-machine/duplicate/': { asin: 'B012345678' }, '/grinder/missing/': { asin: 'INVALID' } };
  const reviews = Object.keys(products).map(slug => ({ slug, brand: 'Brand', image: 'images/editorial.png', imageAlt: 'Editorial photo' }));
  const result = buildDealCatalog({ partnerTag: 'coffeedant03-20', products }, reviews);
  assert.equal(result.length, 1); assert.equal(result[0].conditionLabel, 'Amazon Renewed');
  assert.equal(result[0].purchaseNote, 'Verify voltage'); assert.equal(result[0].image, 'images/editorial.png');
  assert.equal(new URL(result[0].detailPageUrl).searchParams.get('tag'), 'coffeedant03-20');
});
test('eligibility failures are actionable and never log arbitrary response content', () => {
  const text = amazonApiError('GetItems', 403, { type: 'AccessDeniedException', reason: 'AssociateNotEligible', message: 'sensitive response', token: 'secret' });
  assert.match(text, /AssociateNotEligible/); assert.match(text, /eligibility must be restored/);
  assert.doesNotMatch(text, /secret|sensitive response/);
});
