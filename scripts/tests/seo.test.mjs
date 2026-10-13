import test from 'node:test';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { enhancePage, graph, faqQuestions, sitemapXml, walk, attr } from '../build-seo.mjs';

const page = '<!doctype html><html lang="en"><head><title>Test coffee review | Coffeedant</title></head><body><main><h1>Test coffee review</h1><p>Our evidence-led coffee review explains identity, ownership and practical buying decisions for a home espresso setup.</p><img src="/images/coffee.jpg" alt="Coffee in a white cup" width="1200" height="800"><section id="faq"><article><h3>Does it need a grinder?</h3><p>Yes, use a suitable espresso grinder.</p></article></section></main></body></html>';
test('uses visible FAQs and absolute page images without fabricating products or prices', () => {
  const result = enhancePage(page, '/journal/test/'); const doc = parse(result.html); const schemas = graph(doc);
  assert.equal(faqQuestions(doc).length, 1);
  assert.equal(schemas.find(n => n['@type'] === 'FAQPage').mainEntity[0].acceptedAnswer.text, 'Yes, use a suitable espresso grinder.');
  assert.ok(schemas.some(n => n['@type'] === 'ImageObject' && n.contentUrl === 'https://coffeedant.com/images/coffee.jpg'));
  assert.ok(!schemas.some(n => n['@type'] === 'Product'));
  assert.equal(attr(walk(doc).find(n => attr(n, 'property') === 'og:image'), 'content'), 'https://coffeedant.com/images/coffee.jpg');
});
test('does not mark up hidden FAQs, and keeps decorative empty alt', () => {
  const result = enhancePage(page.replace('<section id="faq">', '<section hidden id="faq">').replace('alt="Coffee in a white cup"', 'alt=""'), '/about/');
  assert.ok(!graph(parse(result.html)).some(n => n['@type'] === 'FAQPage'));
  assert.equal(attr(walk(parse(result.html)).find(n => n.tagName === 'img'), 'alt'), '');
});
test('keeps SEO output stable on repeated builds and does not advance dates with the build clock', () => {
  const first = enhancePage(page, '/journal/test/'); const second = enhancePage(first.html, '/journal/test/');
  assert.equal(second.html, first.html);
  assert.equal(first.lastmod, '2026-10-13');
  assert.equal(second.lastmod, first.lastmod);
});
test('404 is noindex and deliberate noindex pages remain excluded', () => {
  assert.match(enhancePage(page, '/404/').html, /noindex, follow/);
  assert.match(enhancePage(page.replace('</head>', '<meta name="robots" content="noindex, follow"></head>'), '/draft/').html, /noindex, follow/);
});
test('escapes sitemap URLs and image query strings as XML', () => {
  const xml = sitemapXml([{ url: 'https://coffeedant.com/journal/a/', lastmod: '2026-10-13', images: [{ src: 'https://example.com/photo.jpg?a=1&b=2' }] }]);
  assert.match(xml, /a=1&amp;b=2/); assert.match(xml, /<image:image>/);
});
test('region metadata and schema keep the correct host and locale', () => {
  const result = enhancePage(page, '/koffie/', { origin: 'https://nl.coffeedant.com', locale: 'nl-NL' });
  assert.equal(result.url, 'https://nl.coffeedant.com/koffie/');
  assert.ok(graph(parse(result.html)).some(n => n.inLanguage === 'nl-NL'));
  assert.match(result.html, /content="nl_NL"/);
});
