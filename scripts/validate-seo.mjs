import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment } from 'parse5';
import { files, routeFromFile, walk, attr, text, graph, faqQuestions, visible, isPostSitemapPage } from './build-seo.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const directory = path.join(root, 'dist');
const origin = 'https://coffeedant.com';
const errors = []; const warnings = [];
const fail = (route, message) => errors.push(`${route}: ${message}`);
const normalize = value => text(parseFragment(String(value))).replace(/\s+/g, ' ').trim();
const type = (n, value) => [n['@type']].flat().includes(value);
const ancestor = (n, predicate) => { for (let p = n.parentNode; p; p = p.parentNode) if (predicate(p)) return p; };
const exists = async file => { try { await access(file); return true; } catch { return false; } };
const redirects = new Set((await readFile(path.join(directory, '_redirects'), 'utf8')).split(/\r?\n/).filter(l => !l.startsWith('#')).map(l => l.trim().split(/\s+/)).filter(v => /^30[1278]$/.test(v[2])).map(v => v[0]));
const canonical = new Map(); const titles = new Map(); const descriptions = new Map();
const counts = { pages: 0, products: 0, faqs: 0, images: 0, videos: 0, breadcrumbs: 0 };

for (const file of await files(directory)) {
  const route = routeFromFile(file, directory); const html = await readFile(file, 'utf8');
  if (redirects.has(route) || /http-equiv=["']refresh["']/i.test(html)) continue;
  const document = parse(html); const nodes = walk(document);
  const metas = key => nodes.filter(n => n.tagName === 'meta' && (attr(n, 'name') === key || attr(n, 'property') === key));
  const value = key => attr(metas(key)[0], 'content');
  if (route === '/404/') { if (!/noindex/.test(value('robots') ?? '')) fail(route, '404 must be noindex'); continue; }
  if (/noindex/.test(value('robots') ?? '')) continue;
  counts.pages++;
  const links = nodes.filter(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical');
  if (links.length !== 1 || attr(links[0], 'href') !== `${origin}${route}`) fail(route, 'canonical must be unique and match the production route');
  canonical.set(`${origin}${route}`, route);
  const title = text(nodes.find(n => n.tagName === 'title')).trim();
  if (!title || /undefined|untitled|astro starter/i.test(title)) fail(route, 'missing or placeholder title');
  if (titles.has(title)) fail(route, `duplicate title with ${titles.get(title)}`); titles.set(title, route);
  if (!value('description')) fail(route, 'missing description');
  if (descriptions.has(value('description'))) fail(route, `duplicate description with ${descriptions.get(value('description'))}`); descriptions.set(value('description'), route);
  for (const key of ['description', 'robots', 'og:type', 'og:site_name', 'og:locale', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) if (metas(key).length !== 1 || !value(key)) fail(route, `${key} missing or duplicated`);
  if (value('og:url') !== `${origin}${route}` || value('og:title') !== title || value('twitter:title') !== title || value('og:description') !== value('description') || value('twitter:description') !== value('description')) fail(route, 'social metadata does not match page metadata');
  for (const key of ['og:image', 'twitter:image']) {
    let url; try { url = new URL(value(key)); } catch { fail(route, `${key} is not absolute`); continue; }
    if (url.protocol !== 'https:') fail(route, `${key} must use HTTPS`);
    if (url.origin === origin && !await exists(path.join(directory, url.pathname.slice(1)))) fail(route, `${key} asset is missing: ${url.pathname}`);
  }
  const schema = graph(document);
  for (const name of ['WebPage', 'WebSite', 'Organization', 'BreadcrumbList']) if (!schema.some(n => type(n, name) || (name === 'WebPage' && ['AboutPage', 'ContactPage'].some(t => type(n, t))))) fail(route, `${name} schema is missing`);
  const crumbs = schema.find(n => type(n, 'BreadcrumbList'));
  if (crumbs) {
    counts.breadcrumbs++;
    if (crumbs.itemListElement.at(-1)?.item !== `${origin}${route}`) fail(route, 'breadcrumb does not end at canonical page');
    for (const [index, item] of crumbs.itemListElement.entries()) if (item.position !== index + 1 || !item.name || !/^https:\/\//.test(item.item)) fail(route, 'invalid breadcrumb item');
  }
  const visibleText = normalize(text(nodes.find(n => n.tagName === 'body')));
  const questions = faqQuestions(document);
  const faq = schema.find(n => type(n, 'FAQPage'));
  if (questions.length && !faq) fail(route, 'visible FAQs lack FAQPage schema');
  if (faq) {
    counts.faqs++;
    if (!faq.mainEntity?.length) fail(route, 'empty FAQPage schema');
    for (const question of faq.mainEntity ?? []) if (!visibleText.includes(normalize(question.name)) || !visibleText.includes(normalize(question.acceptedAnswer?.text))) fail(route, `FAQ is absent from page: ${question.name}`);
  }
  for (const product of schema.filter(n => type(n, 'Product'))) {
    counts.products++;
    if (!product.name || !product.image || !product.description) fail(route, 'Product identity or image is incomplete');
    if (product.review?.reviewRating && (product.review.reviewRating.ratingValue < 1 || product.review.reviewRating.ratingValue > 5 || product.review.reviewRating.bestRating !== 5)) fail(route, 'invalid editorial score');
  }
  const media = schema.filter(n => type(n, 'ImageObject'));
  const main = nodes.find(n => n.tagName === 'main');
  for (const img of walk(main ?? document).filter(n => n.tagName === 'img' && visible(n))) {
    if (attr(img, 'alt') === undefined) fail(route, 'image alt attribute missing');
    if (!attr(img, 'alt')) continue; // Intentional decorative image.
    const src = attr(img, 'src') ?? '';
    if (/author|logo|avatar|ytimg\.com|img\.youtube\.com/.test(src) || ancestor(img, n => attr(n, 'data-amazon-recommendation') !== undefined || attr(n, 'data-coffee-finder') !== undefined)) continue;
    const expected = new URL(src.replace(/^\/coffeedant(?=\/)/, ''), origin).href;
    if (!media.some(n => (n.contentUrl ?? n.url) === expected)) fail(route, `editorial image lacks ImageObject: ${src}`);
    counts.images++;
  }
  const videos = schema.filter(n => type(n, 'VideoObject'));
  for (const video of nodes.filter(n => n.tagName === 'video' && visible(n))) {
    const src = attr(video, 'src') ?? attr(walk(video).find(n => n.tagName === 'source'), 'src');
    if (src && !videos.some(n => n.contentUrl === new URL(src.replace(/^\/coffeedant(?=\/)/, ''), origin).href)) fail(route, 'native video lacks matching VideoObject');
    if (!attr(video, 'aria-label') && !attr(video, 'aria-labelledby')) fail(route, 'native video lacks accessible name');
  }
  const ids = nodes.map(n => attr(n, 'data-review-video') ?? attr(n, 'data-journal-video')).filter(Boolean);
  for (const id of ids) if (!videos.some(n => String(n.embedUrl).includes(id))) fail(route, `visible video lacks VideoObject: ${id}`);
  for (const video of videos) {
    counts.videos++;
    if (!video.name || !video.description || !video.thumbnailUrl || !(video.embedUrl || video.contentUrl)) fail(route, 'VideoObject metadata is incomplete');
    if (!video.uploadDate) warnings.push(`${route}: source does not document video upload date`);
    else if (!Number.isFinite(Date.parse(video.uploadDate))) fail(route, 'invalid video uploadDate');
    if (/youtube\.com\/watch/.test(video.contentUrl ?? '')) fail(route, 'VideoObject contentUrl points to a watch page');
  }
}

const sitemapUrls = async name => {
  const xml = await readFile(path.join(directory, name), 'utf8');
  if (!xml.startsWith('<?xml') || !xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) fail(name, 'invalid sitemap header');
  const records = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const urls = records.map(r => r[1].match(/<loc>([^<]+)<\/loc>/)?.[1]);
  if (new Set(urls).size !== urls.length) fail(name, 'duplicate URLs');
  for (const record of records) {
    const url = record[1].match(/<loc>([^<]+)<\/loc>/)?.[1]; const date = record[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (!canonical.has(url)) fail(name, `noncanonical or unbuilt URL: ${url}`);
    if (!date || !Number.isFinite(Date.parse(date)) || Date.parse(date) > Date.now()) fail(name, `invalid lastmod for ${url}`);
  }
  return urls;
};
const all = await sitemapUrls('sitemap.xml'); const posts = await sitemapUrls('post-sitemap.xml'); const pages = await sitemapUrls('page-sitemap.xml');
for (const url of posts) if (!isPostSitemapPage({ url })) fail('post-sitemap.xml', `Only Blog and Journal articles belong here: ${url}`);
for (const url of pages) if (isPostSitemapPage({ url })) fail('page-sitemap.xml', `Blog and Journal article belongs in the post sitemap: ${url}`);
if (posts.some(url => pages.includes(url))) fail('sitemaps', 'post/page overlap');
if (canonical.size !== all.length || [...canonical.keys()].some(url => !all.includes(url))) fail('sitemaps', 'indexable page coverage is incomplete');
if (all.length !== posts.length + pages.length || [...posts, ...pages].some(url => !all.includes(url))) fail('sitemaps', 'split sitemaps do not cover the full sitemap');
const index = await readFile(path.join(directory, 'sitemap_index.xml'), 'utf8');
const robots = await readFile(path.join(directory, 'robots.txt'), 'utf8');
for (const name of ['post-sitemap.xml', 'page-sitemap.xml']) if (!index.includes(`${origin}/${name}`) || !robots.includes(`Sitemap: ${origin}/${name}`)) fail(name, 'missing from index or robots');
const llms = await readFile(path.join(directory, 'llms.txt'), 'utf8');
if (!llms.startsWith('# Coffeedant\n') || [...canonical.keys()].some(url => !llms.includes(url))) fail('llms.txt', 'canonical page directory is incomplete');
if (!await exists(path.join(directory, 'llm.txt'))) fail('llm.txt', 'compatibility file missing');
console.log(JSON.stringify({ counts, sitemap: { total: all.length, posts: posts.length, pages: pages.length }, warnings, errors }, null, 2));
if (errors.length) process.exitCode = 1;
