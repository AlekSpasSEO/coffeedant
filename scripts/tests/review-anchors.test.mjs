import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getReviewAnchorAliases, legacyAnchorCategory } from '../../src/lib/review-anchors.mjs';

const historical = JSON.parse(fs.readFileSync(new URL('../../src/data/legacy-review-anchors.json', import.meta.url), 'utf8'));
const fixture = (ids = ['orientation', 'setup', 'espresso', 'milk', 'workflow', 'build', 'features', 'value', 'comparisons', 'faq']) => ({
  article: { sections: ids.map(id => ({ id, html: '<p>Useful review content.</p>' })), sources: [], methodology: '<p>Research evidence.</p>' },
  evaluation: { dimensions: ['espresso', 'milk', 'workflow', 'build', 'features', 'value'].map(id => ({ id })) },
});

test('historical Elizabeth links arrive at the corresponding rewritten content', () => {
  const aliases = getReviewAnchorAliases(fixture(), historical['/espresso-machine/lelit-elizabeth/']);
  assert.ok(aliases.orientation.includes('overview'));
  assert.ok(aliases.specifications.includes('specs'));
  assert.ok(aliases.espresso.includes('espresso-quality'));
  assert.ok(aliases.milk.includes('milk-steam'));
  assert.ok(aliases.features.includes('dual-boilers'));
  assert.ok(aliases.setup.includes('accessories'));
  assert.ok(aliases.comparisons.includes('elizabeth-comparison-matrix'));
  assert.ok(aliases.build.includes('cleaning-maintenance'));
});

test('does not duplicate section, source, inline content or fixed component IDs', () => {
  const review = fixture(['overview', 'setup', 'espresso', 'milk', 'workflow', 'build', 'features', 'value', 'comparisons', 'faq']);
  review.article.sections[1].html = '<p id="accessories">Included equipment.</p>';
  review.article.sources.push({ id: 'used-refurb-guide' });
  const aliases = getReviewAnchorAliases(review, { testing: 'methodology', resources: 'ownership', 'build-title': 'build' });
  const ids = Object.values(aliases).flat();
  for (const id of ['overview', 'accessories', 'used-refurb-guide', 'testing', 'resources', 'build-title']) assert.ok(!ids.includes(id), id);
  assert.equal(new Set(ids).size, ids.length);
});

test('uses actual care and comparison sections rather than a missing generic target', () => {
  const aliases = getReviewAnchorAliases(fixture(['orientation', 'espresso', 'milk', 'workflow', 'design', 'ownership', 'compare', 'faq']));
  assert.ok(aliases.ownership.includes('used-refurb-guide'));
  assert.ok(aliases.ownership.includes('accessories'));
  assert.ok(aliases.design.includes('hardware-essentials'));
  assert.ok(aliases.compare.includes('decision-map'));
  assert.equal(aliases.build, undefined);
  assert.equal(aliases.comparisons, undefined);
});

test('rejects unsafe IDs and skips unavailable content rather than pointing to the page top', () => {
  const aliases = getReviewAnchorAliases(fixture(['orientation']), { 'bad"id': 'overview', 'old-milk-review': 'milk' });
  assert.ok(!Object.values(aliases).flat().includes('bad"id'));
  assert.ok(!Object.values(aliases).flat().includes('old-milk-review'));
});

test('resolves product-prefixed sections and editorial dimension destinations', () => {
  const review = fixture(['encore-orientation', 'encore-setup', 'encore-espresso', 'encore-filter', 'encore-workflow', 'encore-build', 'encore-features', 'encore-value', 'encore-comparison', 'encore-ownership', 'encore-faq']);
  const aliases = getReviewAnchorAliases(review, historical['/grinder/baratza-encore-esp/']);
  assert.ok(aliases['encore-espresso'].includes('espresso-quality'));
  assert.ok(aliases['encore-filter'].includes('brew-performance'));
  assert.ok(aliases['encore-comparison'].includes('comparisons'));
  assert.ok(aliases['encore-ownership'].includes('maintenance'));
  const bambino = fixture(['orientation', 'ownership', 'workflow', 'cost']);
  bambino.evaluation.dimensions.find(dimension => dimension.id === 'features').deepDiveId = 'workflow';
  assert.ok(getReviewAnchorAliases(bambino)['workflow'].includes('hardware-essentials'));
});

test('source manifest covers indexed version and comparison fragment names', () => {
  assert.equal(historical['/espresso-machine/bosch-500-series-verocafe-tpu40109/']['bosch-500-lineup'], 'features');
  assert.equal(historical['/espresso-machine/profitec-pro-800/']['pro-800-comparison-matrix'], 'comparisons');
  assert.equal(legacyAnchorCategory('milk-steam'), 'milk');
  assert.equal(legacyAnchorCategory('espresso-quality'), 'espresso');
  assert.equal(legacyAnchorCategory('independent-specialist-review'), null);
});

test('all saved product summary containers map to the summary even when their IDs include feature words', () => {
  for (const [path, id] of [
    ['/espresso-machine/ascaso-steel-uno/', 'ascaso-steel-uno-pid'],
    ['/espresso-machine/breville-dual-boiler-bes920xl/', 'breville-dual-boiler'],
    ['/espresso-machine/gaggia-espresso-evolution-eg2115/', 'gaggia-espresso-evolution'],
    ['/espresso-machine/krups-evidence-eco-design-ea897b40/', 'krups-evidence-eco-design'],
    ['/espresso-machine/rok-espresso-gc/', 'rok-espressogc'],
  ]) assert.equal(historical[path]?.[id], 'summary', `${path}#${id}`);
  const pages = ['pages-a.json', 'pages-b.json'].flatMap(name => JSON.parse(fs.readFileSync(new URL(`../../src/data/${name}`, import.meta.url), 'utf8')));
  let checked = 0;
  for (const page of pages.filter(page => historical[page.path])) {
    for (const match of page.html.matchAll(/<(?:section|article|div)\b[^>]*\sid\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
      const classes = (match[0].match(/\sclass\s*=\s*(["'])([\s\S]*?)\1/i)?.[2] ?? '').split(/\s+/);
      const product = classes.includes('cd-merged-box') || /\sitemtype\s*=\s*["']https?:\/\/schema\.org\/Product["']/i.test(match[0]);
      if (!product) continue;
      const expected = /verdict|conclusion/i.test(match[1]) ? 'verdict' : 'summary';
      assert.equal(historical[page.path][match[1]], expected, `${page.path}#${match[1]}`);
      checked++;
    }
  }
  assert.ok(checked > 100, 'audit must include the saved review summary containers');
});

test('explicit final-verdict IDs override a reused product-summary class', () => {
  for (const [path, id] of [
    ['/espresso-machine/bosch-300-series-verocafe-tiu20307/', 'bosch-300-final-verdict'],
    ['/espresso-machine/bosch-500-series-verocafe-tpu40109/', 'bosch-500-final-verdict'],
    ['/espresso-machine/breville-bambino/', 'bambino-series-verdict'],
    ['/espresso-machine/delonghi-la-specialista-arte/', 'delonghi-la-specialista-arte-final-verdict'],
    ['/espresso-machine/rancilio-silvia-pro-x/', 'rancilio-silvia-pro-x-final-verdict'],
  ]) assert.equal(historical[path]?.[id], 'verdict', `${path}#${id}`);
});
