import test from 'node:test';
import assert from 'node:assert/strict';
import { initialFinderSnapshot, renderFinderCard } from '../../../src/lib/finder-initial-render.mjs';
import { prepareRegionalDocument } from '../source.mjs';
import { regionalFinder, restoreInitialFinder } from '../build.mjs';
import { parseHtml, serializeHtml, slots, walk, attr, textContent, interfaceSource, emptyCache, segmentId, policyHash, getEdition } from '../core.mjs';

const machine = (model, extra = {}) => ({ brand: 'Example', model, path: `/espresso-machine/${model}/`, image: '/photo.jpg', imageAlt: `${model} product`, description: 'A documented machine.', bestFor: 'A repeatable routine.', amazonHref: 'https://www.amazon.com/dp/B000000001', amazonLabel: 'Shop Amazon', priceLabel: '$500', priceUsd: 500, priceCurrency: 'USD', rating: 4, workflow: 'hands-on', availability: 'current', availabilityLabel: 'In stock', ...extra });
const catalog = { generatedAt: '2026-10-26T00:00:00Z', cadenceDays: 14, machineCount: 4, brands: ['Example', 'Other'], locale: 'en-US', ui: interfaceSource, items: [machine('low', { rating: 3 }), machine('top', { rating: 5 }), machine('next', { rating: 4.5 }), machine('last', { brand: 'Other', availability: 'limited', rating: 5 })] };
const html = (snapshot, marker = true) => `<html><head></head><body><section data-coffee-finder data-variant="banner" data-brand="Example" data-exclude-path="/espresso-machine/top/"><strong data-finder-count${marker ? ' data-finder-initial-count' : ''}>${snapshot.countText}</strong><span data-finder-sync${marker ? ' data-finder-initial-sync' : ''}>${snapshot.syncText}</span><div data-finder-results${marker ? ' data-finder-initial' : ''} aria-busy="${marker ? 'false' : 'true'}">${snapshot.html}</div><p data-finder-empty${marker ? '' : ' hidden'}>No exact match. Clear one filter to widen the shortlist.</p><button data-finder-more${marker ? '' : ' hidden'}>Show 12 more machines</button></section></body></html>`;
const find = (document, attribute) => walk(document).find(node => attr(node, attribute) !== undefined);

test('initial Finder results honor context/exclusion and keep the same cards used by client filtering', () => {
  const snapshot = initialFinderSnapshot(catalog, { brand: 'Example', excludePath: '/espresso-machine/top/', base: '/coffeedant/' });
  assert.equal(snapshot.count, 2);
  assert.match(snapshot.html, /\/coffeedant\/espresso-machine\/next\//);
  assert.ok(!snapshot.html.includes('/espresso-machine/top/'));
  assert.ok(!snapshot.html.includes('/espresso-machine/last/'));
  assert.equal(snapshot.html, ['next', 'low'].map(name => renderFinderCard(catalog.items.find(item => item.model === name), '/coffeedant/', true, catalog.ui, catalog.locale)).join(''));
  assert.equal(snapshot.countText, '2 matching machines');
  assert.ok(!snapshot.syncText.includes('Loading'));
});

test('full Finder cards reserve image dimensions and treat catalog content as text', () => {
  const snapshot = initialFinderSnapshot({ ...catalog, items: [machine('<img src=x onerror=alert(1)>', { description: 'Coffee & <script>bad</script>' })] }, { variant: 'full' });
  const doc = parseHtml(snapshot.html);
  assert.equal(walk(doc).filter(node => node.tagName === 'img').length, 1);
  assert.equal(walk(doc).filter(node => node.tagName === 'script').length, 0);
  const image = walk(doc).find(node => node.tagName === 'img');
  assert.equal(attr(image, 'width'), '320'); assert.equal(attr(image, 'height'), '260');
  assert.match(textContent(doc), /Coffee & <script>bad<\/script>/);
});

test('generated Finder snapshots preserve the pre-SSR translation source fingerprint and loading visibility', () => {
  const snapshot = initialFinderSnapshot(catalog);
  const prepared = prepareRegionalDocument(parseHtml(html(snapshot)));
  const baseline = prepareRegionalDocument(parseHtml(html({ countText: 'Loading the catalog…', syncText: 'Re-indexed every two weeks', html: '' }, false)));
  assert.deepEqual(slots(prepared).map(({ id, source, kind }) => ({ id, source, kind })), slots(baseline).map(({ id, source, kind }) => ({ id, source, kind })));
  assert.equal(textContent(find(prepared, 'data-finder-results')), '');
  assert.equal(attr(find(prepared, 'data-finder-results'), 'aria-busy'), 'true');
  assert.equal(attr(find(prepared, 'data-finder-empty'), 'hidden'), '');
  assert.equal(attr(find(prepared, 'data-finder-more'), 'hidden'), '');
  assert.ok(!serializeHtml(prepared).includes('$500'));
});

test('regional first-paint cards use translated catalog data and offer safeguards before hydration', () => {
  const cache = emptyCache('de');
  for (const source of Object.values(interfaceSource)) cache.segments[segmentId(source, 'interface')] = { source, text: `DE ${source}`, policyHash };
  for (const item of catalog.items) for (const key of ['description', 'bestFor', 'imageAlt']) {
    const source = item[key]; cache.segments[segmentId(source, 'finder')] = { source, text: `DE ${source}`, policyHash };
  }
  const routes = new Map(catalog.items.map(item => [item.path, item.path.replace('/espresso-machine/', '/maschine/')]));
  const localized = regionalFinder(catalog, cache, routes, getEdition('de'), undefined, { offers: {} });
  const document = prepareRegionalDocument(parseHtml(html(initialFinderSnapshot(catalog))));
  const root = find(document, 'data-coffee-finder');
  root.attrs.find(entry => entry.name === 'data-exclude-path').value = '/maschine/top/';
  restoreInitialFinder(document, localized);
  const results = find(document, 'data-finder-results');
  const snapshot = initialFinderSnapshot(localized, { brand: 'Example', excludePath: '/maschine/top/' });
  const expected = parseHtml(snapshot.html);
  const actualText = textContent(results);
  assert.equal(actualText, textContent(expected));
  assert.ok(actualText.includes('DE A documented machine.'));
  assert.ok(actualText.includes('DE Local price not verified'));
  assert.ok(!actualText.includes('$500'));
  assert.ok(!serializeHtml(document).includes('https://www.amazon.com/dp/'));
  assert.ok(serializeHtml(results).includes('/maschine/next/'));
  assert.ok(!serializeHtml(results).includes('/maschine/top/'));
  assert.equal(attr(results, 'aria-busy'), 'false');
  assert.equal(textContent(find(document, 'data-finder-count')), snapshot.countText);
  assert.equal(textContent(find(document, 'data-finder-sync')), snapshot.syncText);
});
