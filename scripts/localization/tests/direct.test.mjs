import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { digest, policyHash, root, validateTranslation, parseHtml, jsonSlots, slots, attr, walk, textContent } from '../core.mjs';
import { prepareRegionalDocument } from '../source.mjs';
import { createReviewWorker } from '../review-worker.mjs';
import { formatTechniqueYield } from '../../../src/lib/technique-ui.mjs';

test('Dutch direct translation covers every frozen source slot without changing protected facts', async () => {
  const task = JSON.parse(await readFile(path.join(root, 'localization/authored/espresso-dosing.source.json'), 'utf8'));
  const authored = JSON.parse(await readFile(path.join(root, 'localization/authored/nl-espresso-dosing.json'), 'utf8'));
  assert.equal(authored.snapshotHash, digest(JSON.stringify(task.segments)));
  assert.equal(task.policyHash, policyHash);
  const texts = new Map(Object.entries(authored.translations).map(([index, text]) => [task.segments[index].source, text]));
  for (const index of authored.preserveSource) texts.set(task.segments[index].source, task.segments[index].source);
  for (const segment of task.segments) assert.equal(validateTranslation(segment.source, texts.get(segment.source)), texts.get(segment.source));
  const answers = task.segments.filter(({ kind, source }) => kind === 'json' && source.startsWith('For the most direct measurement'));
  assert.equal(answers.length, 1);
  assert(texts.get(answers[0].source).startsWith('Weeg voor de meest directe meting'));
  assert.equal(authored.route, '/journal/espresso-doseren/');
});

test('FAQ structured-data answers are included, not only visible questions', () => {
  const value = { '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Which dose?', acceptedAnswer: { '@type': 'Answer', text: 'Use the basket range.' } }] };
  assert.deepEqual(jsonSlots(value).map(({ source }) => source), ['Which dose?', 'Use the basket range.']);
});

test('review summaries and article section/keyword arrays are localized structured-data text', () => {
  const value = { '@type': 'Review', reviewBody: 'A compact machine.', articleSection: ['Buying guides', 'Espresso'], keywords: 'Coffee equipment' };
  assert.deepEqual(jsonSlots(value).map(({ source }) => source), ['A compact machine.', 'Buying guides', 'Espresso', 'Coffee equipment']);
});

test('review worker is noindex, limits public content to translated pages, and supports HEAD', async () => {
  const page = '<html lang="nl-NL"><h1>Espresso doseren</h1></html>';
  const manifest = { preview: true, scope: 'editorial-review' };
  const worker = createReviewWorker({ '/journal/espresso-doseren/': page }, { '/_astro/test.js': 'console.log(1)', '/_astro/test.css': { body: 'h1{color:red}', type: 'text/css; charset=utf-8' }, '/brand/logo.png': { body: 'AQID', encoding: 'base64', type: 'image/png' } }, manifest);
  const get = await worker.fetch(new Request('https://nl.coffeedant.com/journal/espresso-doseren/'));
  assert.equal(get.status, 200);
  assert.equal(get.headers.get('X-Robots-Tag'), 'noindex, nofollow');
  assert.equal(await get.text(), page);
  const css = await worker.fetch(new Request('https://nl.coffeedant.com/_astro/test.css'));
  assert.equal(css.headers.get('Content-Type'), 'text/css; charset=utf-8');
  assert.equal(await css.text(), 'h1{color:red}');
  const image = await worker.fetch(new Request('https://nl.coffeedant.com/brand/logo.png'));
  assert.equal(image.headers.get('Content-Type'), 'image/png');
  assert.deepEqual([...new Uint8Array(await image.arrayBuffer())], [1, 2, 3]);
  assert.equal(await (await worker.fetch(new Request('https://nl.coffeedant.com/journal/espresso-doseren/', { method: 'HEAD' }))).text(), '');
  assert.equal((await worker.fetch(new Request('https://nl.coffeedant.com/missing/'))).status, 404);
  assert.equal((await worker.fetch(new Request('https://nl.coffeedant.com/', { method: 'POST' }))).status, 405);
  assert.equal((await worker.fetch(new Request('https://nl.coffeedant.com/'))).headers.get('Location'), '/journal/espresso-doseren/');
  assert((await (await worker.fetch(new Request('https://nl.coffeedant.com/robots.txt'))).text()).includes('Disallow: /'));
});

test('policy inline negations translate as complete units while tags and link destinations stay fixed', () => {
  const document = prepareRegionalDocument(parseHtml('<html><head><link rel="canonical" href="https://coffeedant.com/privacy-policy/"></head><body><p>We do <strong>not</strong> use tracking pixels.</p><p>Contact <a href="mailto:example@example.test">the editor</a>.</p></body></html>'));
  const units = slots(document).filter(({ kind }) => kind === 'inline-html');
  assert.equal(units.length, 2);
  units[0].set('We gebruiken <strong>geen</strong> trackingpixels.');
  assert(textContent(document).includes('We gebruiken geen trackingpixels.'));
  assert.throws(() => units[1].set('Contact <a href="https://evil.test">the editor</a>.'));
  assert.throws(() => units[0].set('We gebruiken <strong>geen</strong> trackingpixels.<script>evil()</script>'));
});

test('mobile table and interactive count labels are translation slots, filter keys are not', () => {
  const document = parseHtml('<body><table><tbody><tr><td data-label="Main compromise">Noise</td></tr></tbody></table><strong data-label-one="brand" data-label-many="brands">19 brands</strong><a data-workflow="hands-on">Review</a></body>');
  const extracted = slots(document);
  for (const label of ['Main compromise', 'brand', 'brands']) assert(extracted.some(({ source, kind }) => source === label && kind === 'attribute'));
  assert(!extracted.some(({ source }) => source === 'hands-on'));
});

test('interactive ratio output keeps the same arithmetic and uses translated labels/number formatting', () => {
  assert.equal(formatTechniqueYield(18 * 1.7, '{yield} g drank', 'nl-NL'), '30,6 g drank');
  assert.equal(formatTechniqueYield(18 * 1.7, '{yield} g Getränk', 'de-DE'), '30,6 g Getränk');
  assert.equal(formatTechniqueYield(18 * 1.7, '{yield} g de boisson', 'fr-FR'), '30,6 g de boisson');
  assert.equal(formatTechniqueYield(18 * 1.7), '30.6 g beverage');
  assert(slots(parseHtml('<body><span data-yield-template="{yield} g beverage">36 g beverage</span></body>')).some(({ source }) => source === '{yield} g beverage'));
});

test('foundation batches cover their frozen sources in all three languages without altered facts or markup', async () => {
  const task = JSON.parse(await readFile(path.join(root, 'localization/authored/nl-foundation.source.json'), 'utf8'));
  const nl = JSON.parse(await readFile(path.join(root, 'localization/authored/nl-foundation.json'), 'utf8'));
  const group = JSON.parse(await readFile(path.join(root, 'localization/authored/de-fr-foundation.json'), 'utf8'));
  assert.equal(task.snapshotHash, digest(JSON.stringify(task.segments)));
  for (const [edition, authored] of [['nl', nl], ['de', group], ['fr', group]]) {
    assert.equal(authored.snapshotHash, task.snapshotHash);
    const texts = new Map(Object.entries(authored.translations).map(([index, value]) => [task.segments[index].source, edition === 'nl' ? value : value[edition]]));
    for (const index of authored.preserveSource) texts.set(task.segments[index].source, task.segments[index].source);
    for (const segment of task.segments) assert.equal(validateTranslation(segment.source, texts.get(segment.source)), texts.get(segment.source));
  }
});
