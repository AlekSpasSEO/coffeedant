import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { digest, policyHash, root, validateTranslation, parseHtml, jsonSlots, slots, attr, walk } from '../core.mjs';
import { createReviewWorker } from '../review-worker.mjs';

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
