import test from 'node:test';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { enhancePage, graph, faqQuestions, sitemapXml, walk, attr, isPostSitemapPage, isVideoSitemapPage, videoSitemapXml, videoDurationSeconds } from '../build-seo.mjs';
import { creatorSlug, videoWatchPath } from '../../src/lib/video-routes.mjs';

const page = '<!doctype html><html lang="en"><head><title>Test coffee review | Coffeedant</title></head><body><main><h1>Test coffee review</h1><p>Our evidence-led coffee review explains identity, ownership and practical buying decisions for a home espresso setup.</p><img src="/images/coffee.jpg" alt="Coffee in a white cup" width="1200" height="800"><section id="faq"><article><h3>Does it need a grinder?</h3><p>Yes, use a suitable espresso grinder.</p></article></section></main></body></html>';

test('post sitemap includes only Blog/Journal articles, including translated routes by source identity', () => {
  const entries = ['/blog/coffee-history/', '/journal/water-hidden-ingredient/', '/espresso-machine/ninja-luxe-cafe-premier-es601/', '/grinder/baratza-encore-esp-pro/', '/coffee-beans/counter-culture-hologram/', '/espresso-machine/beginners/', '/journal/', '/about/'].map(route => ({ url: `https://coffeedant.com${route}`, post: true }));
  assert.deepEqual(entries.filter(isPostSitemapPage).map(p => new URL(p.url).pathname), ['/blog/coffee-history/', '/journal/water-hidden-ingredient/']);
  assert.equal(isPostSitemapPage({ url: 'https://nl.coffeedant.com/dagboek/water/', sourcePath: '/journal/water-hidden-ingredient/' }), true);
});
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

test('watch URLs normalize creator names and disambiguate repeated creators independently of selection order', () => {
  const first = { creator: "Tom’s Coffee & Café", id: 'abCDEfGh123', channelUrl: 'https://www.youtube.com/channel/UC123' };
  const second = { ...first, id: 'zyXWVuTs987' };
  assert.equal(creatorSlug(first), 'toms-coffee-and-cafe');
  assert.equal(videoWatchPath('/espresso-machine/example/', first, [first]), '/espresso-machine/example/video/toms-coffee-and-cafe/');
  const path = videoWatchPath('/espresso-machine/example/', first, [first, second]);
  assert.equal(path, '/espresso-machine/example/video/toms-coffee-and-cafe-6162434445664768313233/');
  assert.match(videoWatchPath('/espresso-machine/example/', { ...first, id: 'ab_CDE-Gh12' }, [second]), /^\/[a-z0-9/-]+\/$/);
  assert.equal(videoWatchPath('/espresso-machine/example/', first, [second, first]), path);
  assert.notEqual(videoWatchPath('/espresso-machine/example/', second, [first, second]), path);
  assert.equal(creatorSlug({ ...first, creator: '☕' }), 'channel-uc123');
});

test('video sitemap includes only watch pages and escapes verified metadata', () => {
  const video = { name: 'Review & setup <demo>', description: 'Coffee & milk.', embedUrl: 'https://www.youtube-nocookie.com/embed/abc?rel=0&start=0', thumbnailUrl: 'https://i.ytimg.com/vi/abc/hqdefault.jpg', uploadDate: '2026-10-16T09:00:00Z', duration: 'PT1H2M3S', creator: { name: 'Coffee & Co.', url: 'https://www.youtube.com/channel/UC123' } };
  const pages = ['/espresso-machine/example/video/coffee-and-co/', '/espresso-machine/example/', '/videos/'].map(route => ({ url: `https://coffeedant.com${route}`, lastmod: '2026-10-21', videos: [video] }));
  const xml = videoSitemapXml(pages);
  assert.equal((xml.match(/<url>/g) ?? []).length, 1);
  assert.match(xml, /xmlns:video="http:\/\/www.google.com\/schemas\/sitemap-video\/1.1"/);
  assert.match(xml, /<video:title>Review &amp; setup &lt;demo&gt;<\/video:title>/);
  assert.match(xml, /rel=0&amp;start=0/);
  assert.match(xml, /<video:duration>3723<\/video:duration>/);
  assert.match(xml, /<video:publication_date>2026-10-16T09:00:00Z<\/video:publication_date>/);
  assert.ok(!xml.includes('video:content_loc'));
  assert.equal(videoDurationSeconds('PT98S'), 98);
  assert.equal(videoDurationSeconds('invalid'), 0);
  assert.equal(isVideoSitemapPage({ url: 'https://nl.coffeedant.com/espresso/voorbeeld/video/koffie/', sourcePath: '/espresso-machine/example/video/coffee/' }), true);
});
