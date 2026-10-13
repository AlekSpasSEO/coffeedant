import { readFile, writeFile, mkdir, mkdtemp, cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, config, getEdition, sourceOrigin, interfaceSource, readJson, loadCache, safeRoute,
  translatedText, translateDom, parseHtml, serializeHtml, walk, attr, setAttr, detach,
  appendHtml, jsonSlots, textContent, contentId, writeJson, policyHash } from './core.mjs';
import { collectSource, prepareRegionalDocument, documentJson } from './source.mjs';

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
export const validatedRoutes = (source, cache) => {
  const result = new Map(); const used = new Set();
  for (const page of source.pages) {
    const record = cache.routes[page.id];
    if (!record || record.sourcePath !== page.sourcePath) throw new Error(`Missing route for ${page.sourcePath}`);
    const target = safeRoute(record.path);
    if (used.has(target)) throw new Error(`Localized route collision: ${target}`);
    if (page.sourcePath === '/' && target !== '/') throw new Error('Homepage must remain at /');
    if (page.sourcePath === '/404/' && target !== '/404/') throw new Error('404 route must remain stable');
    used.add(target); result.set(page.sourcePath, target);
  }
  return result;
};
export const rewriteInternalUrl = (value, routes, edition) => {
  if (!value || /^(?:#|mailto:|tel:|data:|javascript:)/i.test(value)) return value;
  const url = new URL(value, sourceOrigin);
  if (![sourceOrigin, 'https://www.coffeedant.com'].includes(url.origin)) return value;
  // Assets remain on the current host, editorial links use the stable route registry.
  if (!routes.has(url.pathname)) return value.startsWith('/') && !value.startsWith('//') ? value : url.href;
  return `https://${edition.host}${routes.get(url.pathname)}${url.search}${url.hash}`;
};
const rewriteJson = (value, routes, edition) => {
  if (!value || typeof value !== 'object') return;
  delete value.offers; // A US offer must not become a regional structured-data offer.
  for (const [key, entry] of Object.entries(value)) {
    if (key === 'inLanguage') value[key] = edition.locale;
    else if (typeof entry === 'string' && ['url', '@id', 'mainEntityOfPage', 'item'].includes(key)) value[key] = rewriteInternalUrl(entry, routes, edition);
    else if (entry && typeof entry === 'object') rewriteJson(entry, routes, edition);
  }
};
const localizedInterface = (cache) => Object.fromEntries(Object.entries(interfaceSource).map(([key, source]) => [key, translatedText(cache, source, 'interface')]));
export const verifiedOffer = (product, offer, market, edition, now = Date.now()) => {
  if (!product?.identityVerified || !product?.regionalSpecificationVerified || !product?.deliveryVerified
    || !market?.partnerTag || !market?.apiAccessVerified || market.marketplace !== edition.amazonMarketplace
    || !offer || offer.asin !== product.asin || offer.currency !== edition.currency
    || !Number.isFinite(Date.parse(offer.checkedAt)) || now < Date.parse(offer.checkedAt)
    || now - Date.parse(offer.checkedAt) > 24 * 60 * 60 * 1000) return null;
  let url;
  try { url = new URL(offer.detailPageUrl); } catch { return null; }
  if (!/^[A-Z0-9]{10}$/.test(product.asin) || url.protocol !== 'https:' || url.hostname !== market.marketplace
    || url.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:\/|$)/)?.[1] !== product.asin) return null;
  url.searchParams.set('tag', market.partnerTag);
  return { ...offer, detailPageUrl: url.href };
};

export const regionalFinder = (finder, cache, routes, edition, market, offers, now) => {
  const ui = localizedInterface(cache);
  return { ...finder, locale: edition.locale, currency: edition.currency, ui,
    items: finder.items.map((item) => {
      const offer = verifiedOffer(market?.products?.[item.path], offers?.offers?.[item.path], market, edition, now);
      const inStock = offer?.availabilityType?.startsWith('IN_STOCK');
      return { ...item, path: routes.get(item.path) ?? `${sourceOrigin}${item.path}`,
        description: translatedText(cache, item.description, 'finder'), bestFor: translatedText(cache, item.bestFor, 'finder'),
        imageAlt: translatedText(cache, item.imageAlt, 'finder'),
        priceUsd: null, priceAmount: inStock && Number.isFinite(offer.amount) ? offer.amount : null,
        priceCurrency: offer?.currency ?? edition.currency ?? '', priceLabel: offer?.price ?? ui.regionalPricePending,
        amazonHref: offer?.detailPageUrl ?? '', amazonLabel: offer ? 'Amazon ↗' : '',
        amazonNote: offer ? market.products[item.path].purchaseNote ?? '' : ui.regionalBuyingPending,
        availability: inStock ? 'current' : 'limited',
        availabilityLabel: offer?.availabilityMessage ?? ui.regionalStockPending };
    }) };
};

const addAlternates = (document, page, releases) => {
  const head = walk(document).find((node) => node.tagName === 'head');
  for (const node of walk(head)) if (node.tagName === 'link' && attr(node, 'hreflang')) detach(node);
  const variants = config.editions.filter(({ id, published }) => id !== 'us' && published
    && releases.editions[id]?.verifiedPaths?.[page.id]);
  if (!variants.length) return;
  appendHtml(head, `<link rel="alternate" hreflang="en-US" href="${sourceOrigin}${escape(page.sourcePath)}"><link rel="alternate" hreflang="en" href="${sourceOrigin}${escape(page.sourcePath)}"><link rel="alternate" hreflang="x-default" href="${sourceOrigin}${escape(page.sourcePath)}">`);
  for (const variant of variants) appendHtml(head,
    `<link rel="alternate" hreflang="${variant.hreflang}" href="https://${variant.host}${escape(safeRoute(releases.editions[variant.id].verifiedPaths[page.id]))}">`);
};

const addSelector = (document, page, releases, edition, ui) => {
  const variants = config.editions.filter(({ id, published }) => id !== 'us' && published && releases.editions[id]?.verifiedPaths?.[page.id]);
  if (!variants.length) return;
  const languages = new Intl.DisplayNames(edition.locale, { type: 'language' });
  const regions = new Intl.DisplayNames(edition.locale, { type: 'region' });
  const links = [{ edition: getEdition('us'), route: page.sourcePath }, ...variants.map((variant) => ({ edition: variant, route: safeRoute(releases.editions[variant.id].verifiedPaths[page.id]) }))];
  const html = `<nav data-language-region aria-label="${escape(ui.languageRegion)}" style="padding:12px 20px;border-bottom:1px solid #ddd;display:flex;flex-wrap:wrap;gap:12px">${links.map(({ edition: target, route }) => {
    const country = target.locale.split('-')[1];
    const label = `${languages.of(target.locale.split('-')[0])} · ${country === '419' ? 'Latin America' : regions.of(country)}`;
    return `<a href="https://${target.host}${escape(route)}" hreflang="${target.hreflang}" lang="${target.locale}">${escape(label)}</a>`;
  }).join('')}</nav>`;
  const body = walk(document).find((node) => node.tagName === 'body');
  appendHtml(body, html);
  const selector = body.childNodes.pop(); body.childNodes.unshift(selector);
};

export const buildRegional = async (editionId, options = {}) => {
  const edition = getEdition(editionId);
  if (edition.id === 'us') throw new Error('Use the normal build for US');
  if (!edition.published && !options.preview) throw new Error(`${edition.host} is not approved for public release; build with --preview for QA`);
  const directory = options.sourceDirectory ?? path.join(root, 'dist');
  const source = options.source ?? await collectSource(directory);
  const cache = options.cache ?? await loadCache(edition.id);
  const routes = validatedRoutes(source, cache);
  const ui = localizedInterface(cache);
  // Verify complete current coverage before modifying any generated deployment output.
  for (const segment of source.segments) translatedText(cache, segment.source, segment.kind);
  const markets = options.markets ?? await readJson(path.join(root, 'localization/markets.json'));
  const market = markets.markets[edition.id];
  const offers = options.offers ?? await readJson(path.join(root, `localization/offers/${edition.id}.json`), { offers: {} });
  const releases = options.releases ?? await readJson(path.join(root, 'localization/releases.json'));
  await mkdir(path.join(root, '.localization'), { recursive: true });
  const temporary = await mkdtemp(path.join(root, '.localization/build-'));
  await cp(directory, temporary, { recursive: true, filter: (file) => !/\.(?:html|xml)$/.test(file)
    && !['robots.txt', '_redirects', '_headers', 'coffee-finder.json'].includes(path.basename(file)) });
  const rendered = [];
  for (const page of source.pages) {
    const document = prepareRegionalDocument(parseHtml(await readFile(path.join(directory, page.file), 'utf8')));
    translateDom(document, cache);
    setAttr(walk(document).find((node) => node.tagName === 'html'), 'lang', edition.locale);
    for (const node of walk(document)) {
      for (const entry of node.attrs ?? []) {
        if (entry.name === 'href') entry.value = rewriteInternalUrl(entry.value, routes, edition);
        if (entry.name === 'data-exclude-path') entry.value = routes.get(entry.value) ?? entry.value;
        if (node.tagName === 'link' && attr(node, 'rel') === 'canonical' && entry.name === 'href') entry.value = `https://${edition.host}${routes.get(page.sourcePath)}`;
        if (node.tagName === 'meta' && attr(node, 'property') === 'og:url' && entry.name === 'content') entry.value = `https://${edition.host}${routes.get(page.sourcePath)}`;
      }
      if (node.tagName === 'time' && attr(node, 'datetime')) {
        const date = new Date(attr(node, 'datetime'));
        if (!Number.isNaN(date.valueOf())) node.childNodes = [{ nodeName: '#text', value: new Intl.DateTimeFormat(edition.locale, { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(date), parentNode: node }];
      }
      if (node.tagName === 'select' && attr(node, 'name') === 'budget') {
        setAttr(node, 'disabled', ''); // Until region-specific budget bands and offers are configured.
        node.childNodes = [];
        appendHtml(node, `<option value="any">${escape(ui.regionalPricePending)}</option>`);
      }
      if ((attr(node, 'class') ?? '').split(/\s+/).includes('coffee-finder-help')) {
        node.childNodes = []; appendHtml(node, escape(ui.budgetPending));
      }
    }
    for (const { node, value } of documentJson(document)) {
      for (const slot of jsonSlots(value)) slot.set(translatedText(cache, slot.source, slot.kind));
      rewriteJson(value, routes, edition);
      node.childNodes = [{ nodeName: '#text', value: JSON.stringify(value).replaceAll('<', '\\u003c'), parentNode: node }];
    }
    const body = walk(document).find((node) => node.tagName === 'body');
    appendHtml(body, `<aside data-regional-context lang="${edition.locale}" style="margin:24px auto;padding:20px;max-width:1100px;border:1px solid #ddd"><p>${escape(ui.regionalContext)}</p><p>${escape(ui.regionalBuyingPending)}</p><a href="${sourceOrigin}${escape(page.sourcePath)}" lang="en-US">${escape(ui.sourceVersion)}</a></aside>`);
    const context = body.childNodes.pop(); body.childNodes.unshift(context);
    const primaryOffer = verifiedOffer(market?.products?.[page.sourcePath], offers?.offers?.[page.sourcePath], market, edition);
    if (primaryOffer) appendHtml(body, `<aside data-regional-offer style="margin:24px auto;padding:20px;max-width:1100px"><a href="${escape(primaryOffer.detailPageUrl)}" rel="nofollow sponsored noopener" target="_blank">Amazon ↗</a><p>${escape(primaryOffer.price ?? ui.regionalPricePending)} · ${escape(primaryOffer.availabilityMessage)}</p></aside>`);
    addAlternates(document, page, releases);
    addSelector(document, page, releases, edition, ui);
    if (options.preview) appendHtml(walk(document).find((node) => node.tagName === 'head'), '<meta name="robots" content="noindex, nofollow">');
    const relative = page.sourcePath === '/404/' ? '404.html' : `${routes.get(page.sourcePath).slice(1)}index.html`;
    rendered.push({ relative, html: serializeHtml(document) });
  }
  for (const { relative, html } of rendered) {
    const file = path.join(temporary, relative); await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, html);
  }
  const finder = await readJson(path.join(directory, 'coffee-finder.json'));
  await writeJson(path.join(temporary, 'coffee-finder.json'), regionalFinder(finder, cache, routes, edition, market, offers));
  const urls = source.pages.filter(({ sourcePath }) => sourcePath !== '/404/').map(({ sourcePath }) => `https://${edition.host}${routes.get(sourcePath)}`);
  await writeFile(path.join(temporary, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${escape(url)}</loc></url>`).join('')}</urlset>`);
  await writeFile(path.join(temporary, 'robots.txt'), options.preview ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: https://${edition.host}/sitemap.xml\n`);
  const redirectLines = source.pages.filter(({ sourcePath }) => sourcePath !== routes.get(sourcePath) && ![...routes.values()].includes(sourcePath))
    .map(({ sourcePath }) => `${sourcePath} ${routes.get(sourcePath)} 301`);
  await writeFile(path.join(temporary, '_redirects'), `${redirectLines.join('\n')}\n`);
  await writeJson(path.join(temporary, 'localization-manifest.json'), { edition: edition.id, host: edition.host, locale: edition.locale, policyHash,
    pages: source.pages.map((page) => ({ id: page.id, sourcePath: page.sourcePath, path: routes.get(page.sourcePath), sourceHash: page.sourceHash })) });
  const output = path.join(root, 'dist-regional', edition.id);
  if (path.dirname(output) !== path.join(root, 'dist-regional')) throw new Error('Output escaped generated build directory');
  await rm(output, { recursive: true, force: true });
  await mkdir(path.dirname(output), { recursive: true }); await cp(temporary, output, { recursive: true });
  await rm(temporary, { recursive: true, force: true });
  console.log(`Built ${rendered.length} validated pages for ${edition.host}${options.preview ? ' (noindex preview)' : ''}.`);
  return output;
};

if (process.argv[1] && path.resolve(process.argv[1]) === path.join(root, 'scripts/localization/build.mjs')) {
  const id = process.env.COFFEEDANT_EDITION || 'us';
  const edition = getEdition(id);
  if (process.argv.includes('--astro')) {
    const build = spawnSync(process.execPath, [path.join(root, 'node_modules/astro/astro.js'), 'build'], {
      cwd: root, stdio: 'inherit', env: { ...process.env, CF_PAGES: '1' } });
    if (build.status !== 0) process.exit(build.status ?? 1);
  }
  if (id !== 'us') await buildRegional(id, { preview: process.argv.includes('--preview') });
  else if (process.env.CF_PAGES === '1') {
    const releases = await readJson(path.join(root, 'localization/releases.json'));
    if (config.editions.some(({ id, published }) => id !== 'us' && published && releases.editions[id])) {
      const directory = path.join(root, 'dist');
      const source = await collectSource(directory);
      for (const page of source.pages) {
        if (page.sourcePath === '/404/') continue;
        const file = path.join(directory, page.file);
        const document = parseHtml(await readFile(file, 'utf8'));
        addAlternates(document, page, releases);
        addSelector(document, page, releases, edition, interfaceSource);
        await writeFile(file, serializeHtml(document));
      }
    }
  }
}
