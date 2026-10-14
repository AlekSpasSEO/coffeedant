import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { config, getEdition, parseHtml, slots, walk, attr, textContent, segmentId, policyHash,
  validateTranslation, safeRoute, normalizeGeneratedRoute, emptyCache, interfaceSource, jsonSlots, root } from '../core.mjs';
import { collectSource, prepareRegionalDocument } from '../source.mjs';
import { validatedRoutes, rewriteInternalUrl, verifiedOffer, regionalFinder, buildRegional } from '../build.mjs';
import { createRegionalRouter } from '../router.mjs';
import { requestTranslations } from '../translate.mjs';

test('15 unique editions use regional subdomains, never regional directories', () => {
  assert.equal(config.editions.length, 15);
  assert.equal(new Set(config.editions.map(({ host }) => host)).size, 15);
  for (const id of ['br', 'ca', 'at', 'ch', 'uk', 'au', 'nz']) assert.equal(getEdition(id).host, `${id}.coffeedant.com`);
  assert.equal(getEdition('latam').hreflang, 'es');
  assert.equal(getEdition('latam').locale, 'es-419');
  assert.equal(getEdition('latam').currency, null);
  assert.throws(() => getEdition('../secret'));
});

test('DOM extraction preserves executable scripts, markup, icons, numbers, and identifiers', () => {
  const document = parseHtml('<html><head><title>A review</title><script>window.x="Do not translate"</script></head><body><p>Machine <strong>PID</strong> costs $500.</p><span class="material-symbols-rounded">search</span><img alt="Machine photo" src="/photo.jpg"><a href="/review/">Read review</a></body></html>');
  const result = slots(document);
  assert(result.some(({ source }) => source === 'A review'));
  assert(result.some(({ source }) => source === 'Machine photo'));
  assert(!result.some(({ source }) => source.includes('window.x') || source === 'search' || source === '/review/'));
  assert.throws(() => validateTranslation('PID BES500 $500', 'PID BES500 €450'));
  assert.throws(() => validateTranslation('Breville BES500 {count}', 'Breville BES501 {count}'));
  assert.throws(() => validateTranslation('Read review', '<script>evil()</script>'));
  assert.throws(() => validateTranslation('Breville machine', 'Other machine'));
  assert.equal(validateTranslation('PID 9 bar {count}', 'PID 9 bar {count}'), 'PID 9 bar {count}');
  assert.equal(validateTranslation('<p>Read review</p>', '<p>Test lesen</p>'), '<p>Test lesen</p>');
  assert.throws(() => validateTranslation('<p>Read review</p>', '<script>Test lesen</script>'));
});

test('unsafe routes and translated route collisions are rejected', () => {
  for (const value of ['https://evil.test/', '/../secret/', '/a?b/', '//evil/', '/a/../../']) assert.throws(() => safeRoute(value));
  assert.equal(safeRoute('/espressomaschine-reinigen/'), '/espressomaschine-reinigen/');
  const source = { pages: [{ id: '1', sourcePath: '/a/' }, { id: '2', sourcePath: '/b/' }] };
  assert.throws(() => validatedRoutes(source, { routes: { 1: { sourcePath: '/a/', path: '/same/' }, 2: { sourcePath: '/b/', path: '/same/' } } }));
});

test('SVG labels, journal search text and noscript fallback translate while CSS and story keys stay fixed', () => {
  const document = parseHtml('<html><body><svg viewBox="0 0 100 100"><text>Water flow</text><path d="M0 0 L100 100"/></svg><button data-story="story-id" data-search="Coffee history">Coffee history</button><noscript><style>.story{display:block!important}</style><p>All stories follow below.</p></noscript></body></html>');
  const extracted = slots(document);
  assert(extracted.some(({ source }) => source === 'Water flow'));
  assert(extracted.some(({ source, kind }) => source === 'Coffee history' && kind === 'attribute'));
  assert(extracted.some(({ source }) => source === 'All stories follow below.'));
  assert(!extracted.some(({ source }) => source.includes('display:block') || source === 'story-id'));
});

test('model URL formatting is normalized without accepting external destinations, queries or traversal', () => {
  assert.equal(normalizeGeneratedRoute('/Testbericht/Breville-BES500/'), '/testbericht/breville-bes500/');
  assert.equal(normalizeGeneratedRoute('  Avaliação da Máquina  '), '/avaliação-da-máquina/');
  assert.equal(normalizeGeneratedRoute('/caf%C3%A9/'), '/café/');
  assert.equal(normalizeGeneratedRoute('`/De’Longhi/`'), '/delonghi/');
  for (const value of ['https://evil.test/', '//evil.test/', '/../secret/', '/%2e%2e/secret/', '/a?b/', '/a#b/', '/a\\b/', '/<script>/']) assert.throws(() => normalizeGeneratedRoute(value));
});

test('internal URLs preserve fragments and external sources are not rewritten', () => {
  const routes = new Map([['/review/', '/testbericht/']]);
  const edition = getEdition('de');
  assert.equal(rewriteInternalUrl('/review/#ratings', routes, edition), 'https://de.coffeedant.com/testbericht/#ratings');
  assert.equal(rewriteInternalUrl('https://coffeedant.com/review/?a=1#ratings', routes, edition), 'https://de.coffeedant.com/testbericht/?a=1#ratings');
  assert.equal(rewriteInternalUrl('https://manufacturer.test/manual', routes, edition), 'https://manufacturer.test/manual');
  assert.equal(rewriteInternalUrl('/brand/logo.png', routes, edition), '/brand/logo.png');
});

test('regional preprocessing removes US buying offers, affiliate links and recommendation banners', () => {
  const document = prepareRegionalDocument(parseHtml('<body><aside data-amazon-recommendation="machine">$500 US offer</aside><div class="review-price">$500</div><a href="https://www.amazon.com/dp/B000000001" rel="sponsored">Buy</a><a href="https://manufacturer.test/manual">Manual</a><p>Historical US MSRP: $500</p></body>'));
  const nodes = walk(document);
  assert(!nodes.some((node) => attr(node, 'data-amazon-recommendation') !== undefined));
  assert(!nodes.some((node) => attr(node, 'href')?.includes('amazon.com')));
  assert(nodes.some((node) => attr(node, 'href') === 'https://manufacturer.test/manual'));
  assert(textContent(document).includes('Historical US MSRP: $500'));
});

const now = Date.parse('2026-10-13T12:00:00Z');
const product = { asin: 'B000000001', identityVerified: true, regionalSpecificationVerified: true, deliveryVerified: true };
const market = { marketplace: 'www.amazon.de', partnerTag: 'example-21', apiAccessVerified: true, products: { '/review/': product } };
const offer = { asin: product.asin, currency: 'EUR', amount: 499, price: '499,00 €', availabilityType: 'IN_STOCK', availabilityMessage: 'Auf Lager', checkedAt: '2026-10-13T11:00:00Z', detailPageUrl: 'https://www.amazon.de/dp/B000000001' };
test('local offers require verified identity/specification/delivery, correct currency/market, fresh API data', () => {
  assert(verifiedOffer(product, offer, market, getEdition('de'), now));
  assert.equal(verifiedOffer({ ...product, deliveryVerified: false }, offer, market, getEdition('de'), now), null);
  assert.equal(verifiedOffer(product, { ...offer, currency: 'USD' }, market, getEdition('de'), now), null);
  assert.equal(verifiedOffer(product, { ...offer, asin: 'B000000002' }, market, getEdition('de'), now), null);
  assert.equal(verifiedOffer(product, { ...offer, checkedAt: '2026-10-11T11:00:00Z' }, market, getEdition('de'), now), null);
  assert.equal(verifiedOffer(product, { ...offer, detailPageUrl: 'https://evil.test/dp/B000000001' }, market, getEdition('de'), now), null);
  assert.equal(verifiedOffer(product, offer, market, getEdition('ch'), now), null);
});

const fixtureCache = (edition, source) => {
  const cache = emptyCache(edition);
  for (const segment of source.segments) cache.segments[segment.id] = { source: segment.source, text: `DE ${segment.source}`, policyHash };
  for (const page of source.pages) cache.routes[page.id] = { sourcePath: page.sourcePath, path: page.sourcePath === '/review/' ? '/testbericht/' : page.sourcePath };
  return cache;
};

test('structured API request uses official endpoint; missing, duplicate, altered and incomplete items fail', async () => {
  const items = [{ id: 'a', source: 'PID 9 bar', context: 'specification' }];
  const fetchMock = (entries, status = 'completed') => async (url, options) => {
    assert.equal(url, 'https://api.openai.com/v1/responses');
    const body = JSON.parse(options.body);
    assert.equal(body.store, false);
    assert.equal(body.text.format.type, 'json_schema');
    assert.equal(body.text.format.strict, true);
    return { ok: true, json: async () => ({ status, output: [{ content: [{ type: 'output_text', text: JSON.stringify({ items: entries }) }] }] }) };
  };
  const options = { provider: 'openai', apiKey: 'test-only' };
  assert.equal((await requestTranslations(getEdition('de'), items, 'segments', fetchMock([{ id: 'a', text: 'PID 9 bar' }]), options)).result.get('a'), 'PID 9 bar');
  await assert.rejects(requestTranslations(getEdition('de'), items, 'segments', fetchMock([]), options));
  await assert.rejects(requestTranslations(getEdition('de'), items, 'segments', fetchMock([{ id: 'b', text: 'PID 9 bar' }]), options));
  await assert.rejects(requestTranslations(getEdition('de'), items, 'segments', fetchMock([{ id: 'a', text: 'PID 10 bar' }]), options));
  await assert.rejects(requestTranslations(getEdition('de'), items, 'segments', fetchMock([{ id: 'a', text: 'PID 9 bar' }], 'incomplete'), options));
});

test('Cloudflare translation uses a short-lived identity token and the same factual validation', async () => {
  const items = [{ id: 'a', source: 'PID 9 bar', context: 'specification' }];
  const mock = async (url, options) => {
    assert.equal(url, 'https://coffeedant-localization.alek-spas-seo.workers.dev/translate');
    assert.equal(options.headers.authorization, 'Bearer short-lived-test-identity');
    assert(JSON.parse(options.body).instructions.includes('German'));
    return { ok: true, json: async () => ({ items: [{ id: 'a', text: 'PID 9 bar' }], usage: {} }) };
  };
  assert.equal((await requestTranslations(getEdition('de'), items, 'segments', mock, { provider: 'cloudflare', identityToken: 'short-lived-test-identity' })).result.get('a'), 'PID 9 bar');
});

test('daily free quota pauses after one request instead of repeatedly retrying or upgrading', async () => {
  let calls = 0;
  const mock = async () => { calls++; return { ok: false, status: 429, json: async () => ({ code: 'DAILY_QUOTA_EXHAUSTED' }) }; };
  await assert.rejects(requestTranslations(getEdition('br'), [{ id: 'a', source: 'Review', context: '' }], 'segments', mock, { provider: 'cloudflare', identityToken: 'test-only' }), (error) => error.code === 'DAILY_QUOTA_EXHAUSTED');
  assert.equal(calls, 1);
});

test('hostname router isolates editions and keeps internal asset prefixes out of public URLs', async () => {
  const router = createRegionalRouter({ 'br.coffeedant.com': 'br', 'ca.coffeedant.com': 'ca' }, { br: { '/old/': '/novo/' } });
  const seen = [];
  const env = { ASSETS: { fetch: async (request) => { seen.push(request.url); return new Response('asset'); } } };
  assert.equal((await router.fetch(new Request('https://br.coffeedant.com/review/'), env)).status, 200);
  assert.equal(seen[0], 'https://br.coffeedant.com/__editions/br/review/');
  assert.equal((await router.fetch(new Request('https://ca.coffeedant.com/review/'), env)).status, 200);
  assert(seen[1].includes('/__editions/ca/'));
  const redirect = await router.fetch(new Request('https://br.coffeedant.com/old/?x=1'), env);
  assert.equal(redirect.status, 301); assert.equal(redirect.headers.get('Location'), 'https://br.coffeedant.com/novo/?x=1');
  assert.equal((await router.fetch(new Request('https://unknown.coffeedant.com/'), env)).status, 404);
  assert.equal((await router.fetch(new Request('https://br.coffeedant.com/__editions/ca/'), env)).status, 404);
  assert.equal((await router.fetch(new Request('https://br.coffeedant.com/%2F__editions/ca/'), env)).status, 404);
  assert.equal((await router.fetch(new Request('https://br.coffeedant.com/%zz'), env)).status, 400);
  assert.equal((await router.fetch(new Request('https://br.coffeedant.com/', { method: 'POST' }), env)).status, 405);
  const missing = await router.fetch(new Request('https://br.coffeedant.com/missing/'), { ASSETS: { fetch: async (request) => request.url.endsWith('/404.html') ? new Response('Localized 404') : new Response('missing', { status: 404 }) } });
  assert.equal(missing.status, 404); assert.equal(await missing.text(), 'Localized 404');
});

test('complete preview build translates metadata, JSON, finder, canonical URLs and links without US offers', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'coffeedant-localization-test-'));
  const finder = { generatedAt: '2026-10-13T10:00:00Z', cadenceDays: 14, machineCount: 1, brands: ['Breville'], items: [{ brand: 'Breville', model: 'Bambino', path: '/review/', image: '/photo.jpg', imageAlt: 'Breville machine photo', description: 'A compact Breville machine.', bestFor: 'Small kitchens', priceUsd: 500, priceCurrency: 'USD', priceLabel: '$500', amazonHref: 'https://www.amazon.com/dp/B000000001', amazonLabel: 'Shop Amazon', availability: 'current', availabilityLabel: 'In stock' }] };
  try {
    await mkdir(path.join(directory, 'review'));
    await writeFile(path.join(directory, 'index.html'), '<html lang="en"><head><title>Coffeedant homepage</title><meta name="description" content="Find a machine"><link rel="canonical" href="https://coffeedant.com/"></head><body><a href="/review/#ratings">Read review</a></body></html>');
    await writeFile(path.join(directory, 'review/index.html'), '<html lang="en"><head><title>Breville review</title><link rel="canonical" href="https://coffeedant.com/review/"><script type="application/ld+json">{"@type":"Article","headline":"Breville review","inLanguage":"en-US","url":"https://coffeedant.com/review/","offers":{"price":500,"priceCurrency":"USD"}}</script></head><body><h1>Breville review</h1><p>PID 9 bar.</p><time datetime="2026-10-13">Published 13 October 2026</time><time datetime="2026-10-13">Updated 13 October 2026</time><time datetime="2026-10-13">October 13, 2026</time><div class="review-price">$500</div><a rel="sponsored" href="https://www.amazon.com/dp/B000000001">Buy Amazon</a><section data-coffee-finder data-exclude-path="/review/"></section></body></html>');
    await writeFile(path.join(directory, 'coffee-finder.json'), JSON.stringify(finder));
    await writeFile(path.join(directory, 'photo.jpg'), 'fixture');
    const source = await collectSource(directory);
    const cache = fixtureCache('de', source);
    for (const segment of source.segments) {
      if (segment.source === 'Published 13 October 2026') cache.segments[segment.id].text = 'Veröffentlicht am 13. Oktober 2026';
      if (segment.source === 'Updated 13 October 2026') cache.segments[segment.id].text = 'Aktualisiert am 13. Oktober 2026';
    }
    assert(source.pages.length === 2 && source.segments.length > 10);
    const localized = regionalFinder(finder, cache, validatedRoutes(source, cache), getEdition('de'), undefined, { offers: {} }, now);
    assert.equal(localized.items[0].amazonHref, ''); assert.equal(localized.items[0].priceUsd, null);
    assert.equal(localized.items[0].priceAmount, null); assert.equal(localized.items[0].availability, 'limited');
    const output = await buildRegional('de', { preview: true, sourceDirectory: directory, source, cache, markets: { markets: {} }, releases: { editions: {} }, offers: { offers: {} } });
    const html = await readFile(path.join(output, 'testbericht/index.html'), 'utf8');
    assert(html.includes('lang="de-DE"')); assert(html.includes('https://de.coffeedant.com/testbericht/'));
    assert(html.includes('DE Breville review')); assert(!html.includes('"priceCurrency":"USD"'));
    assert(!html.includes('https://www.amazon.com/dp/')); assert(html.includes('noindex, nofollow'));
    assert(html.includes('data-exclude-path="/testbericht/"'));
    assert(html.includes('<time datetime="2026-10-13">Veröffentlicht am 13. Oktober 2026</time>'));
    assert(html.includes('<time datetime="2026-10-13">Aktualisiert am 13. Oktober 2026</time>'));
    assert(html.includes('<time datetime="2026-10-13">13. Oktober 2026</time>'));
    assert((await readFile(path.join(output, 'index.html'), 'utf8')).includes('https://de.coffeedant.com/testbericht/#ratings'));
    assert(!(await readFile(path.join(output, 'sitemap.xml'), 'utf8')).includes('coffeedant.com/review/'));
    await assert.rejects(buildRegional('de', { source, cache }), /not approved/);
    delete cache.segments[source.segments[0].id];
    await assert.rejects(buildRegional('de', { preview: true, sourceDirectory: directory, source, cache }), /Missing/);
  } finally {
    await rm(directory, { recursive: true, force: true });
    await rm(path.join(root, 'dist-regional/de'), { recursive: true, force: true });
  }
});
