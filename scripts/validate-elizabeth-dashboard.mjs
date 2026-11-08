import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment } from 'parse5';
import { attr, faqQuestions, graph, text, visible, walk } from './build-seo.mjs';
import { schemaNodesOfType } from './lib/structured-data-audit.mjs';

// Offline checks of the built editorial contract. External source availability
// is verified during research; this script checks their rendered attribution.
const route = '/espresso-machine/lelit-elizabeth/';
const canonical = `https://coffeedant.com${route}`;
const productId = `${canonical}#product`;
export const validateElizabethDashboard = ({ html, projectRoot = fileURLToPath(new URL('../', import.meta.url)) } = {}) => {
const read = relative => fs.readFileSync(path.join(projectRoot, relative), 'utf8');
html ??= read(`dist${route}index.html`);
const document = parse(html);
const nodes = walk(document);
const schema = graph(document);
const clean = value => String(value ?? '').replace(/\s+/g, ' ').trim();
const normalizedHtml = value => clean(text(parseFragment(String(value ?? ''))));
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
const type = (entity, name) => [entity?.['@type']].flat().includes(name);
const children = node => walk(node).slice(1);
const main = nodes.find(node => attr(node, 'data-elizabeth-dashboard') !== undefined);
assert.ok(main, 'Elizabeth dashboard is rendered');
assert.equal(nodes.filter(node => node.tagName === 'main').length, 1, 'one main landmark');
assert.equal(main.tagName, 'main', 'dashboard is the main landmark');
assert.equal(attr(main, 'id'), 'main-content', 'skip-link target is retained');
assert.equal(attr(main, 'tabindex'), '-1', 'main landmark can receive skip-link focus');
assert.equal(attr(main, 'data-product-id'), 'CD-EM-000001', 'dashboard identifies the registry product');
const dashboardNodes = walk(main);
const dashboardText = clean(text(main));
const idNodes = new Map();
for (const node of nodes) {
  const id = attr(node, 'id');
  if (!id) continue;
  assert.ok(!idNodes.has(id), `unique HTML id: ${id}`);
  idNodes.set(id, node);
}
assert.equal(nodes.filter(node => node.tagName === 'h1').length, 1, 'one page heading');
const h1 = idNodes.get('review-title');
assert.match(text(h1), /Lelit.*Elizabeth/i, 'heading identifies the reviewed machine');
const headerElements = h1.parentNode.childNodes.filter(node => node.tagName);
const metadataRow = headerElements[headerElements.indexOf(h1) + 1];
assert.ok(hasClass(metadataRow, 'ed-review-meta') && children(metadataRow).some(node => attr(node, 'aria-label') === 'Breadcrumb'), 'breadcrumb sits in the metadata below the headline');
const dates = children(metadataRow).find(node => hasClass(node, 'ed-dates'));
const readingTime = children(dates).find(node => hasClass(node, 'ed-read-time'));
const readingMinutes = attr(readingTime, 'datetime')?.match(/^PT([1-9]\d*)M$/)?.[1];
assert.ok(readingMinutes && clean(text(readingTime)) === `${readingMinutes} min read`, 'the dates row includes a visible reading-time estimate');
const method = dashboardNodes.find(node => node.tagName === 'details' && hasClass(node, 'ed-method'));
assert.ok(method?.childNodes.some(node => node.tagName === 'summary'), 'byline exposes the review method in a native disclosure');

const metadata = (key, attribute = 'name') => nodes.filter(node => node.tagName === 'meta' && attr(node, attribute) === key);
const metaValue = (key, attribute) => attr(metadata(key, attribute)[0], 'content');
const canonicalLinks = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
assert.equal(canonicalLinks.length, 1, 'one canonical URL');
assert.equal(attr(canonicalLinks[0], 'href'), canonical, 'canonical retains the established review route');
const title = clean(text(nodes.find(node => node.tagName === 'title')));
assert.ok(title && /Lelit.*Elizabeth/.test(title), 'useful title metadata');
for (const [key, attribute] of [
  ['description', 'name'], ['author', 'name'], ['robots', 'name'],
  ['og:title', 'property'], ['og:description', 'property'], ['og:image', 'property'],
  ['og:image:alt', 'property'], ['og:url', 'property'],
  ['twitter:title', 'name'], ['twitter:description', 'name'], ['twitter:image', 'name'],
  ['article:published_time', 'property'], ['article:modified_time', 'property'],
]) {
  assert.equal(metadata(key, attribute).length, 1, `unique ${key}`);
  assert.ok(metaValue(key, attribute), `populated ${key}`);
}
assert.equal(metaValue('og:url', 'property'), canonical, 'social URL matches canonical');
assert.equal(metaValue('og:title', 'property'), title, 'social title matches the page title');
assert.equal(metaValue('twitter:title', 'name'), title, 'Twitter title matches the page title');

const products = schemaNodesOfType(schema, 'Product');
assert.equal(products.length, 1, 'one complete JSON-LD Product; topic references must not duplicate it');
const product = products[0];
assert.equal(product['@id'], productId, 'stable Product identity');
assert.equal(product.url, canonical, 'Product URL matches canonical');
assert.equal(product.identifier, 'CD-EM-000001', 'permanent product registry ID');
assert.equal(product.sku, 'PL92T-120', 'North American PL92T electrical variant');
assert.match(product.name, /Elizabeth.*PL92T/, 'Product name identifies the established generation');
assert.ok(product.image && product.description && product.brand?.name === 'Lelit', 'complete Product metadata');
assert.ok(type(product.review, 'Review'), 'editorial Review belongs to Product');
assert.ok(product.review.author?.name && product.review.reviewBody, 'review has an author and assessment');
assert.ok(Number(product.review.reviewRating?.ratingValue) >= 1 && Number(product.review.reviewRating?.ratingValue) <= 5, 'editorial rating lies on its declared scale');
assert.equal(Number(product.review.reviewRating.bestRating), 5, 'editorial rating uses the existing five-point scale');
const verdict = dashboardNodes.find(node => hasClass(node, 'ed-verdict'));
assert.equal(clean(text(verdict)), product.review.reviewBody, 'visible summary matches the editorial Review');
const decisionOrder = verdict.parentNode.childNodes.filter(node => node.tagName);
assert.ok(hasClass(decisionOrder[decisionOrder.indexOf(verdict) + 1], 'ed-fit-grid'), 'buyer fit follows the summary');
assert.ok(hasClass(decisionOrder[decisionOrder.indexOf(verdict) + 2], 'ed-verdict-row'), 'ratings and Amazon action follow buyer fit');

const articles = schema.filter(entity => type(entity, 'Article'));
assert.equal(articles.length, 1, 'one authoritative Article');
const article = articles[0];
assert.equal(article.about?.['@id'], productId, 'Article references the authoritative Product');
assert.equal(article.mainEntityOfPage, canonical, 'Article belongs to the canonical review');
assert.ok(article.author?.name && article.publisher?.name === 'Coffeedant', 'Article authorship and publisher');
assert.equal(article.datePublished, metaValue('article:published_time', 'property'), 'published date metadata parity');
assert.equal(article.dateModified, metaValue('article:modified_time', 'property'), 'updated date metadata parity');
for (const date of [article.datePublished, article.dateModified]) {
  assert.match(date, /^\d{4}-\d{2}-\d{2}$/, 'editorial dates are complete ISO dates');
  assert.ok(Number.isFinite(Date.parse(date)) && Date.parse(date) <= Date.now(), 'editorial dates are valid and not in the future');
}
assert.match(dashboardText, /research[- ]led/i, 'research basis is visible');
assert.match(dashboardText, /(?:not|haven.t|hasn.t|have not|has not|did not)[^.]{0,70}(?:physically tested|hands[- ]on|tested this|tested the|test the|measured)/i, 'absence of Coffeedant physical testing is disclosed');

const productScopes = dashboardNodes.filter(node => attr(node, 'itemscope') !== undefined && /(?:^|\s)https?:\/\/schema\.org\/Product(?:\s|$)/.test(attr(node, 'itemtype') ?? ''));
assert.equal(productScopes.length, 1, 'one Product microdata scope');
assert.equal(attr(productScopes[0], 'itemid'), productId, 'microdata references the same Product identity');
const property = name => children(productScopes[0]).filter(node => (attr(node, 'itemprop') ?? '').split(/\s+/).includes(name));
const propertyValue = node => attr(node, 'content') ?? attr(node, 'href') ?? attr(node, 'src') ?? clean(text(node));
assert.ok(property('name').some(node => /Elizabeth/.test(propertyValue(node))), 'visible/machine-readable Product name');
assert.ok(property('sku').some(node => propertyValue(node) === product.sku), 'microdata SKU agrees with JSON-LD');
assert.ok(property('url').some(node => propertyValue(node) === canonical), 'microdata URL agrees with JSON-LD');
assert.ok(property('image').length, 'microdata has a Product image');

const breadcrumbs = schema.filter(entity => type(entity, 'BreadcrumbList'));
assert.equal(breadcrumbs.length, 1, 'one breadcrumb entity');
assert.equal(breadcrumbs[0].itemListElement?.at(-1)?.item, canonical, 'breadcrumb ends at the reviewed machine');

const questionIds = ['espresso', 'milk', 'workflow', 'setup', 'features', 'build', 'value', 'identity'];
for (const id of questionIds) {
  const section = idNodes.get(id);
  assert.ok(section && section.tagName === 'section', `answer section exists: ${id}`);
  const heading = children(section).find(node => node.tagName === 'h2');
  assert.ok(heading && /\?/.test(clean(text(heading))), `answer section has a question heading: ${id}`);
  assert.ok(children(section).some(node => node.tagName === 'p' && clean(text(node)).length > 40), `answer section has substantive visible content: ${id}`);
}
for (const node of dashboardNodes.filter(node => node.tagName === 'a')) {
  const href = attr(node, 'href') ?? '';
  if (!href.startsWith('#') || href === '#') continue;
  assert.ok(idNodes.has(decodeURIComponent(href.slice(1))), `in-page link resolves: ${href}`);
}
for (const node of dashboardNodes) {
  for (const name of ['aria-labelledby', 'aria-describedby', 'aria-controls']) {
    for (const id of (attr(node, name) ?? '').split(/\s+/).filter(Boolean)) assert.ok(idNodes.has(id), `${name} resolves: ${id}`);
  }
}
const dist = path.join(projectRoot, 'dist');
const fileForUrl = url => {
  const localPath = decodeURIComponent(url.pathname).replace(/^\/coffeedant(?=\/|$)/, '').replace(/^\//, '');
  const relative = !localPath || localPath.endsWith('/') ? `${localPath}index.html` : localPath;
  const file = path.resolve(dist, relative);
  assert.ok(file.startsWith(`${dist}${path.sep}`), `internal URL remains inside the build: ${url.href}`);
  return file;
};
const linkedDocuments = new Map();
for (const node of dashboardNodes.filter(node => node.tagName === 'a')) {
  const href = attr(node, 'href') ?? '';
  if (!href || href.startsWith('#') || /^(?:mailto:|tel:)/i.test(href)) continue;
  const url = new URL(href, canonical);
  if (!['coffeedant.com', 'alekspasseo.github.io'].includes(url.hostname)) continue;
  const file = fileForUrl(url);
  assert.ok(fs.existsSync(file), `internal link has a built target: ${href}`);
  if (url.hash && file.endsWith('.html')) {
    if (!linkedDocuments.has(file)) linkedDocuments.set(file, walk(parse(fs.readFileSync(file, 'utf8'))));
    assert.ok(linkedDocuments.get(file).some(target => attr(target, 'id') === decodeURIComponent(url.hash.slice(1))), `cross-page anchor resolves: ${href}`);
  }
}
for (const image of dashboardNodes.filter(node => node.tagName === 'img')) {
  assert.ok(attr(image, 'alt') !== undefined, 'every image has an alt attribute');
  assert.ok(Number(attr(image, 'width')) > 0 && Number(attr(image, 'height')) > 0, 'every image reserves intrinsic dimensions');
  const url = new URL(attr(image, 'src'), canonical);
  if (['coffeedant.com', 'alekspasseo.github.io'].includes(url.hostname)) assert.ok(fs.existsSync(fileForUrl(url)), `local image exists: ${url.pathname}`);
}
for (const figure of dashboardNodes.filter(node => node.tagName === 'figure' && hasClass(node, 'review-inline-media'))) {
  assert.ok(['manufacturer', 'product-listing', 'community', 'reddit'].includes(attr(figure, 'data-source-type')), 'inline image identifies its source type');
  assert.match(attr(figure, 'data-usage-record') ?? '', /^https:\/\//, 'inline image retains its provenance record');
  assert.ok(children(figure).some(node => node.tagName === 'a' && hasClass(node, 'review-media-credit') && /^https:\/\//.test(attr(node, 'href') ?? '') && clean(text(node))), 'inline image has a visible linked credit');
}

const sourceList = dashboardNodes.find(node => node.tagName === 'ol' && hasClass(node, 'review-source-list'));
assert.ok(sourceList, 'attributable source ledger is rendered');
const sourceEntries = children(sourceList).filter(node => node.tagName === 'li' && attr(node, 'id'));
assert.ok(sourceEntries.length >= 10, 'research ledger includes at least ten annotated sources');
const articleCitations = [article.citation ?? []].flat();
let citedSources = 0;
for (const entry of sourceEntries) {
  const id = attr(entry, 'id');
  const external = children(entry).filter(node => node.tagName === 'a' && /^https:\/\//.test(attr(node, 'href') ?? ''));
  assert.ok(external.length, `source ${id} links to the original record`);
  assert.ok(clean(text(entry)).length > 40, `source ${id} carries an explanatory annotation`);
  for (const node of external) {
    const url = new URL(attr(node, 'href'));
    assert.equal(url.protocol, 'https:', `source ${id} uses HTTPS`);
    assert.ok(articleCitations.includes(url.href), `Article citation includes source ${id}: ${url.href}`);
  }
  if (dashboardNodes.some(node => node.tagName === 'a' && attr(node, 'href') === `#${id}`)) citedSources++;
}
assert.ok(citedSources >= 5, 'answers link back to their source records');

const visibleQuestions = faqQuestions(document);
const faqs = schema.filter(entity => type(entity, 'FAQPage'));
assert.equal(faqs.length, 1, 'one FAQPage');
assert.equal(visibleQuestions.length, 6, 'six visible FAQ answers');
assert.equal(faqs[0].mainEntity?.length, 6, 'six FAQ schema questions');
for (const question of faqs[0].mainEntity) {
  const rendered = visibleQuestions.find(item => normalizedHtml(item.name) === normalizedHtml(question.name));
  assert.ok(rendered, `FAQ question is visible: ${question.name}`);
  assert.equal(normalizedHtml(rendered.acceptedAnswer.text), normalizedHtml(question.acceptedAnswer?.text), `FAQ answer matches schema: ${question.name}`);
}

const catalog = JSON.parse(read('src/data/product-videos.json'))[route];
const videoRoom = idNodes.get('video');
const shoppingTools = idNodes.get('where-to-buy').parentNode;
assert.equal(videoRoom.parentNode, shoppingTools.parentNode, 'the video room is a standalone section beside the shopping-tools group');
assert.ok(children(shoppingTools).some(node => attr(node, 'id') === 'ed-routine-title'), 'routine and retailer panels share a section');
const videos = dashboardNodes.filter(node => attr(node, 'data-product-video') !== undefined);
const videoSchemas = schema.filter(entity => type(entity, 'VideoObject'));
assert.equal(videos.length, catalog.length, 'selector exposes every curated video');
assert.equal(videoSchemas.length, catalog.length, 'every video has a schema entity');
assert.deepEqual([article.video ?? []].flat().map(item => item['@id']), catalog.map(video => `${canonical}#video-${video.id}`), 'Article references all video perspectives');
const selector = dashboardNodes.find(node => node.tagName === 'select' && attr(node, 'data-video-selector') !== undefined);
assert.ok(selector && attr(selector, 'id'), 'native video selector has an ID');
assert.ok(dashboardNodes.some(node => node.tagName === 'label' && attr(node, 'for') === attr(selector, 'id') && clean(text(node))), 'video selector has a visible label');
assert.deepEqual(children(selector).filter(node => node.tagName === 'option').map(node => attr(node, 'value')), catalog.map(video => video.id), 'selector values match the curated video order');
assert.equal(videos.filter(visible).length, catalog.length ? 1 : 0, 'exactly one perspective is initially visible');
if (videos.length) assert.equal(attr(videos.find(visible), 'data-product-video'), catalog[0].id, 'initial perspective matches the selector');
assert.ok(!dashboardNodes.some(node => node.tagName === 'iframe'), 'third-party players load only after a visitor asks');

const offers = dashboardNodes.filter(node => attr(node, 'data-vendor-offer') !== undefined);
assert.ok(offers.length >= 2, 'retailer comparison includes multiple vendors');
for (const offer of offers) {
  const dated = children(offer).filter(node => node.tagName === 'time' && attr(node, 'datetime'));
  assert.ok(dated.length, 'every vendor observation has a machine-readable check date');
  assert.ok(dated.every(node => Number.isFinite(Date.parse(attr(node, 'datetime'))) && Date.parse(attr(node, 'datetime')) <= Date.now()), 'vendor observation dates are valid and not in the future');
  assert.ok(children(offer).some(node => node.tagName === 'a' && /^https:\/\//.test(attr(node, 'href') ?? '')), 'each vendor has a direct HTTPS link');
}
const aggregateRatings = value => Array.isArray(value) ? value.flatMap(aggregateRatings) : !value || typeof value !== 'object' ? [] : [...(Object.hasOwn(value, 'aggregateRating') ? [value] : []), ...Object.values(value).flatMap(aggregateRatings)];
assert.equal(aggregateRatings(schema).length, 0, 'external retailer ratings stay out of review structured data');
assert.ok(!dashboardNodes.some(node => attr(node, 'itemprop') === 'aggregateRating'), 'external retailer ratings stay out of microdata');
const ownerScore = dashboardNodes.find(node => attr(node, 'data-retailer-rating') !== undefined);
const storeScores = dashboardNodes.filter(node => attr(node, 'data-retailer-rating-source') !== undefined);
assert.equal(attr(ownerScore, 'href'), '#retailer-ratings', 'retailer average links to its sources');
assert.ok(storeScores.length >= 2, 'retailer average uses multiple stores');
let weightedSum = 0;
let ratingCount = 0;
for (const store of storeScores) {
  assert.ok(children(store).some(node => node.tagName === 'a' && /^https:\/\//.test(attr(node, 'href') ?? '')), 'store score has a direct source');
  const match = clean(text(store)).match(/(\d\.\d)\/5 · (\d+) ratings?$/);
  assert.ok(match && Number(match[1]) >= 1 && Number(match[1]) <= 5 && Number(match[2]) > 0, 'each store has a valid score and count');
  weightedSum += Number(match[1]) * Number(match[2]);
  ratingCount += Number(match[2]);
}
const displayedScore = clean(text(children(ownerScore).find(node => node.tagName === 'strong'))).replace(/\s+/g, '');
assert.equal(displayedScore, `${(weightedSum / ratingCount).toFixed(1)}/5`, 'visible owner score matches the weighted mean');
assert.ok(clean(text(ownerScore)).includes(`${ratingCount} ratings · ${storeScores.length} retailers`), 'visible owner score names its sample size');

const priceCheck = dashboardNodes.find(node => attr(node, 'data-amazon-price-check') !== undefined);
assert.ok(priceCheck && children(idNodes.get('where-to-buy')).includes(priceCheck) && /Amazon price check/.test(text(priceCheck)), 'the retailer section includes the Amazon-only price check');
const manualDate = children(priceCheck).find(node => node.tagName === 'time');
const checkedAt = Date.parse(attr(manualDate, 'datetime'));
assert.ok(Number.isFinite(checkedAt) && checkedAt <= Date.now(), 'the manual check date is valid');
assert.doesNotMatch(text(priceCheck), /\$\s*\d|USD\s*\d/, 'the manual price check does not republish Amazon prices');
const amazon = dashboardNodes.find(node => attr(node, 'data-amazon-cta') !== undefined);
const amazonUrl = new URL(attr(amazon, 'href'));
assert.equal(amazonUrl.origin, 'https://www.amazon.com', 'affiliate action leads to Amazon US');
assert.ok(amazonUrl.searchParams.get('tag') && attr(amazon, 'rel')?.split(' ').includes('sponsored'), 'affiliate action has attribution and disclosure markup');
if (amazonUrl.pathname === '/s') {
  assert.match(amazonUrl.searchParams.get('k'), /PL92T-120/, 'affiliate search targets the exact US model');
  assert.match(text(amazon), /Search Amazon/, 'a search fallback is clearly labeled');
}

return {
  sources: sourceEntries.length,
  videos: videos.length,
  vendors: offers.length,
  questions: questionIds.length,
  faqs: visibleQuestions.length,
  images: dashboardNodes.filter(node => node.tagName === 'img' && !/ytimg\.com|img\.youtube\.com|author|avatar/.test(attr(node, 'src') ?? '')).length,
  updated: article.dateModified,
};
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = validateElizabethDashboard();
  console.log(`Elizabeth dashboard passed: canonical metadata; Product/Review, Article, Breadcrumb, FAQ and ${result.videos} videos; consistent microdata; ${result.questions} question sections; ${result.sources} source records; ${result.vendors} dated vendor observations; honest price-history coverage.`);
}
