import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const json = async path => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const catalog = await json('dist/coffee-finder.json');
const manifest = await json('src/data/review-batch-manifest.json');
const expected = new Set(manifest.filter(r => r.slug.startsWith('/espresso-machine/')).map(r => r.slug));
expected.add('/espresso-machine/breville-bambino/');
assert.equal(catalog.machineCount, catalog.items.length, 'reported count');
assert.deepEqual(new Set(catalog.items.map(r => r.path)), expected, 'eligible canonical reviews');
assert.equal(new Set(catalog.items.map(r => r.path)).size, catalog.items.length, 'duplicate routes');
const base = process.env.CF_PAGES === '1' ? '/' : '/coffeedant/';
for (const item of catalog.items) {
  const html = await readFile(new URL(`dist${item.path}index.html`, root), 'utf8');
  assert.ok(html.includes(`https://coffeedant.com${item.path}`), `${item.path}: canonical`);
  const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(m => { const s = JSON.parse(m[1]); return s['@graph'] ?? [s]; });
  const product = graphs.find(s => [s['@type']].flat().includes('Product'));
  assert.ok(product, `${item.path}: Product schema`);
  const rating = product.review?.reviewRating?.ratingValue ?? product.aggregateRating?.ratingValue;
  if (rating !== undefined) assert.equal(item.rating, Number(rating), `${item.path}: editorial score`);
  assert.ok(item.priceCurrency === 'USD' || item.priceUsd === null, `${item.path}: no silent currency conversion`);
  assert.ok(item.priceUsd === null || (Number.isFinite(item.priceUsd) && item.priceUsd > 0), `${item.path}: price`);
  assert.ok(item.rating === null || item.rating > 0 && item.rating <= 5, `${item.path}: score bounds`);
  assert.ok(item.image && item.imageAlt && item.model, `${item.path}: identity and media`);
  assert.ok(!['guided', 'one-touch'].includes(item.workflow) || item.grinder === 'built-in', `${item.path}: integrated workflow`);
}
// Hardware fixtures catch comparison-copy contamination, rather than asserting a fixed catalog size.
for (const slug of ['delonghi-dedica', 'gaggia-classic-evo-pro', 'gaggia-espresso-evolution-eg2115', 'krups-opio-xp320840', 'la-pavoni-mini-cellini', 'lelit-grace-pl81t', 'quick-mill-vetrano-2b-evo', 'turin-legato-v2']) {
  const item = catalog.items.find(r => r.path === `/espresso-machine/${slug}/`);
  assert.equal(item?.workflow, 'hands-on', slug);
  assert.equal(item?.grinder, 'separate', slug);
}
for (const slug of ['ecm-puristika', 'quick-mill-carola-evo']) {
  assert.equal(catalog.items.find(r => r.path === `/espresso-machine/${slug}/`)?.drink, 'espresso', slug);
}
assert.equal(catalog.items.find(r => r.path === '/espresso-machine/9barista-mk2/')?.grinder, 'separate');
for (const slug of ['melitta-cafina-ct8', 'melitta-cafina-xt6-bes870', 'melitta-cafina-xt7']) {
  assert.equal(catalog.items.find(r => r.path === `/espresso-machine/${slug}/`)?.grinder, 'built-in', slug);
}
const hologram = await readFile(new URL('dist/coffee-beans/counter-culture-hologram/index.html', root), 'utf8');
for (const route of ['coffee-beans/counter-culture-big-trouble/', 'coffee-beans/counter-culture-apollo/', 'coffee-beans/best-coffee-beans-for-espresso-and-drip/', 'grinder/baratza-encore-esp/']) {
  assert.ok(hologram.includes(`href="${base}${route}"`), `Hologram link: ${route}`);
}
console.log(`Coffee Finder: ${catalog.machineCount} canonical reviews, unique routes, currency/score/media parity and hardware fixtures passed; Hologram links passed.`);
const grinderHtml = await readFile(new URL('dist/grinder/index.html', root), 'utf8');
const grinderCards = [...grinderHtml.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*data-tags="[^"]*"/g)].map(m => m[1]);
const expectedGrinders = manifest.filter(r => r.slug.startsWith('/grinder/')).map(r => `${base}${r.slug.slice(1)}`);
assert.deepEqual(new Set(grinderCards), new Set(expectedGrinders), 'grinder finder covers every registered grinder');
assert.equal(grinderCards.length, expectedGrinders.length, 'no duplicate grinder cards');
console.log(`Grinder finder: ${grinderCards.length} canonical reviews represented once.`);
