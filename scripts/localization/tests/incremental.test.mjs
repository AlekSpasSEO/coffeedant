import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { collectSource, prepareRegionalDocument } from '../source.mjs';
import { readySource } from '../ready.mjs';
import { buildRegional, rewriteInternalUrl } from '../build.mjs';
import { emptyCache, policyHash, root, getEdition, parseHtml, walk, attr, slots } from '../core.mjs';

test('generated US language chooser is not reindexed as authored regional copy', () => {
  const document = prepareRegionalDocument(parseHtml('<html><body><nav data-language-region><a href="https://nl.coffeedant.com/">Dutch · Netherlands</a></nav><nav aria-label="Editorial navigation"><a href="/journal/">Journal library</a></nav><main><p>Complete source article.</p></main></body></html>'));
  const nodes = walk(document);
  assert(!nodes.some(node => attr(node, 'data-language-region') !== undefined));
  assert(nodes.some(node => node.tagName === 'nav' && attr(node, 'aria-label') === 'Editorial navigation'));
  const extracted = slots(document).map(slot => slot.source);
  assert(!extracted.includes('Dutch · Netherlands'));
  assert(extracted.includes('Journal library'));
  assert(extracted.includes('Complete source article.'));
});

test('incremental editions publish complete pages, add finished translations and exclude invalidated pages', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'coffeedant-incremental-'));
  const html = (title, body) => `<html lang="en"><head><title>${title}</title><meta name="description" content="${title}"></head><body><h1>${title}</h1>${body}</body></html>`;
  try {
    await mkdir(path.join(directory, 'unfinished'));
    await writeFile(path.join(directory, 'index.html'), html('Coffee home', '<a href="/unfinished/?a=1#section">More articles</a><img src="/brand/logo.png" alt="Coffeedant">'));
    await writeFile(path.join(directory, '404.html'), html('Page unavailable', '<a href="/">Home</a>'));
    await writeFile(path.join(directory, 'unfinished/index.html'), html('Coffee article', '<p>This article is still awaiting translation.</p>'));
    await writeFile(path.join(directory, 'coffee-finder.json'), JSON.stringify({ items: [] }));
    const source = await collectSource(directory);
    const cache = emptyCache('nl');
    for (const page of source.pages) cache.routes[page.id] = { sourcePath: page.sourcePath, path: page.sourcePath === '/unfinished/' ? '/artikel/' : page.sourcePath };
    const pending = source.segments.find(({ source }) => source === 'This article is still awaiting translation.');
    for (const segment of source.segments) cache.segments[segment.id] = { source: segment.source, text: `NL ${segment.source}`, policyHash };
    delete cache.segments[pending.id];
    const options = { source, cache, sourceDirectory: directory, markets: { markets: {} }, offers: { offers: {} }, releases: { editions: {} } };
    const selected = await readySource(source, cache, directory);
    assert.deepEqual(selected.pages.map(({ sourcePath }) => sourcePath).sort(), ['/', '/404/']);
    const output = await buildRegional('nl', options);
    const manifest = JSON.parse(await readFile(path.join(output, 'localization-manifest.json')));
    assert.equal(manifest.scope, 'ready-pages'); assert.equal(manifest.preview, false);
    assert.equal(manifest.pages.length, 2);
    const home = await readFile(path.join(output, 'index.html'), 'utf8');
    assert(home.includes('https://coffeedant.com/unfinished/?a=1#section'));
    assert(home.includes('src="/brand/logo.png"'));
    assert(home.includes('data-incremental-edition')); assert(!home.includes('noindex'));
    assert(!(await readFile(path.join(output, 'sitemap.xml'), 'utf8')).includes('/artikel/'));
    await assert.rejects(readFile(path.join(output, 'artikel/index.html')), /ENOENT/);
    cache.segments[pending.id] = { source: pending.source, text: 'Dit artikel wacht nog op vertaling.', policyHash };
    await buildRegional('nl', options);
    assert((await readFile(path.join(output, 'sitemap.xml'), 'utf8')).includes('https://nl.coffeedant.com/artikel/'));
    assert((await readFile(path.join(output, 'index.html'), 'utf8')).includes('https://nl.coffeedant.com/artikel/?a=1#section'));
    cache.segments[pending.id].policyHash = 'outdated';
    assert.equal((await readySource(source, cache, directory)).pages.length, 2);
    const homeSegment = source.segments.find(({ source }) => source === 'Coffee home');
    delete cache.segments[homeSegment.id];
    await assert.rejects(buildRegional('nl', options), /required translated page \/ is incomplete/);
    assert((await readFile(path.join(output, 'artikel/index.html'), 'utf8')).includes('Dit artikel'));
  } finally {
    await rm(directory, { recursive: true, force: true });
    await rm(path.join(root, 'dist-regional/nl'), { recursive: true, force: true });
  }
});

test('partial routes send unpublished articles to English and retain local assets and external links', () => {
  const routes = new Map([['/', '/'], ['/ready/', '/fertig/']]);
  const edition = getEdition('de');
  assert.equal(rewriteInternalUrl('/ready/#faq', routes, edition, true), 'https://de.coffeedant.com/fertig/#faq');
  assert.equal(rewriteInternalUrl('/pending/?a=1#faq', routes, edition, true), 'https://coffeedant.com/pending/?a=1#faq');
  assert.equal(rewriteInternalUrl('/brand/logo.png', routes, edition, true), '/brand/logo.png');
  assert.equal(rewriteInternalUrl('https://example.com/', routes, edition, true), 'https://example.com/');
});
