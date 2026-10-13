import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serialize } from 'parse5';

const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://coffeedant.com';
// This release changes structured data and metadata. Never use the build date
// as lastmod: subsequent unchanged deployments must keep stable dates.
const seoReleaseDate = '2026-10-13';
export const walk = n => [n, ...(n.childNodes ?? []).flatMap(walk)];
export const attr = (n, key) => n?.attrs?.find(a => a.name === key)?.value;
const set = (n, key, value) => { const a = n.attrs.find(a => a.name === key); if (a) a.value = String(value); else n.attrs.push({ name: key, value: String(value) }); };
export const text = n => n?.nodeName === '#text' ? n.value : (n?.childNodes ?? []).map(text).join(' ');
const clean = value => String(value ?? '').replace(/\s+/g, ' ').trim();
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const append = (parent, html) => { for (const n of parseFragment(html).childNodes) { n.parentNode = parent; parent.childNodes.push(n); } };
const remove = n => { n.parentNode.childNodes = n.parentNode.childNodes.filter(v => v !== n); };
const hasType = (n, type) => [n['@type']].flat().includes(type);
export const graph = document => walk(document).filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json').flatMap(n => { const value = JSON.parse(text(n)); return value['@graph'] ?? [value]; });
export const files = async dir => (await Promise.all((await readdir(dir, { withFileTypes: true })).map(n => n.isDirectory() ? files(path.join(dir, n.name)) : n.name.endsWith('.html') ? [path.join(dir, n.name)] : []))).flat().sort();
export const routeFromFile = (file, dir) => { const relative = path.relative(dir, file).replaceAll('\\', '/'); return relative === '404.html' ? '/404/' : relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}/`; };
const ancestor = (n, predicate) => { for (let p = n.parentNode; p; p = p.parentNode) if (predicate(p)) return p; };
const classHas = (n, pattern) => pattern.test(attr(n, 'class') ?? '');
export const visible = n => attr(n, 'hidden') === undefined && attr(n, 'aria-hidden') !== 'true' && !ancestor(n, p => attr(p, 'hidden') !== undefined || attr(p, 'aria-hidden') === 'true');
const editorial = n => !ancestor(n, p => attr(p, 'data-amazon-recommendation') !== undefined || attr(p, 'data-coffee-finder') !== undefined);
export const faqQuestions = document => {
  const result = new Map();
  for (const n of walk(document)) {
    if (!visible(n) || !['article', 'details', 'div'].includes(n.tagName)) continue;
    const heading = n.childNodes?.find(c => ['h3', 'summary'].includes(c.tagName));
    if (!heading) continue;
    const faqContext = classHas(n, /faq/i) || ancestor(n, p => /faq|frequently.asked/i.test(`${attr(p, 'class') ?? ''} ${attr(p, 'id') ?? ''}`));
    if (!faqContext) continue;
    const name = clean(text(heading));
    const answer = clean((n.childNodes ?? []).filter(c => c !== heading && !['script', 'style'].includes(c.tagName)).map(text).join(' '));
    if (name && answer) result.set(name, { '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answer } });
  }
  return [...result.values()];
};
const setMeta = (head, key, value, property = false) => {
  const name = property ? 'property' : 'name';
  const matches = walk(head).filter(n => n.tagName === 'meta' && attr(n, name) === key);
  if (matches.length) { set(matches[0], 'content', value); matches.slice(1).forEach(remove); }
  else append(head, `<meta ${name}="${escape(key)}" content="${escape(value)}">`);
};
const absoluteAsset = (url, siteOrigin) => {
  if (!url || /^(?:data:|blob:)/.test(url)) return undefined;
  const value = new URL(url, `${siteOrigin}/`);
  if (value.hostname === 'alekspasseo.github.io') { value.host = new URL(siteOrigin).host; value.pathname = value.pathname.replace(/^\/coffeedant(?=\/)/, ''); }
  if (value.origin === siteOrigin) value.pathname = value.pathname.replace(/^\/coffeedant(?=\/)/, '');
  return /^https?:$/.test(value.protocol) ? value.href : undefined;
};
const labels = { 'espresso-machine': 'Espresso machines', grinder: 'Coffee grinders', 'coffee-machine': 'Coffee machines', 'coffee-beans': 'Coffee beans', journal: 'Journal', brands: 'Brands' };

export const enhancePage = (html, route, options = {}) => {
  const siteOrigin = options.origin ?? origin;
  const document = parse(html); const nodes = walk(document);
  const generated = nodes.find(n => attr(n, 'id') === 'coffeedant-seo');
  if (generated) remove(generated);
  const head = nodes.find(n => n.tagName === 'head');
  const canonicalNodes = nodes.filter(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical');
  const canonical = `${siteOrigin}${route}`;
  if (canonicalNodes.length) { set(canonicalNodes[0], 'href', canonical); canonicalNodes.slice(1).forEach(remove); }
  else append(head, `<link rel="canonical" href="${escape(canonical)}">`);
  const h1 = nodes.find(n => n.tagName === 'h1' && visible(n));
  const titleNode = nodes.find(n => n.tagName === 'title');
  const title = clean(text(titleNode)) || `${clean(text(h1)) || 'Coffeedant'} | Coffeedant`;
  if (!titleNode) append(head, `<title>${escape(title)}</title>`);
  const heading = clean(text(h1)) || title.replace(/\s*\|.*$/, '');
  const main = nodes.find(n => n.tagName === 'main') ?? document;
  const content = walk(main).filter(visible);
  const schemas = graph(document); const added = [];
  const article = schemas.find(n => hasType(n, 'Article') || hasType(n, 'BlogPosting'));
  if (article) {
    if (article.datePublished) setMeta(head, 'article:published_time', article.datePublished, true);
    if (article.dateModified) setMeta(head, 'article:modified_time', article.dateModified, true);
    if (article.author?.name) setMeta(head, 'author', article.author.name);
  }
  const paragraphs = content.filter(n => n.tagName === 'p' && editorial(n) && clean(text(n)).length > 60 && !ancestor(n, p => classHas(p, /breadcrumb|author|credit|disclosure/)));
  const descriptionMeta = nodes.find(n => n.tagName === 'meta' && attr(n, 'name') === 'description');
  const description = clean(attr(descriptionMeta, 'content')) || clean(article?.description) || clean(text(paragraphs[0])).slice(0, 157).replace(/\s+\S*$/, '') || `Explore ${heading} with Coffeedant's coffee equipment research, practical guides and editorial advice.`;
  setMeta(head, 'description', description);
  const priorRobots = attr(nodes.find(n => n.tagName === 'meta' && attr(n, 'name') === 'robots'), 'content');
  setMeta(head, 'robots', route === '/404/' ? 'noindex, follow' : /noindex/i.test(priorRobots ?? '') ? priorRobots : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  const locale = options.locale ?? attr(nodes.find(n => n.tagName === 'html'), 'lang') ?? 'en-US';
  const images = [];
  for (const img of content.filter(n => n.tagName === 'img' && editorial(n))) {
    const src = absoluteAsset(attr(img, 'src'), siteOrigin); if (!src) continue;
    const figure = ancestor(img, n => n.tagName === 'figure');
    const caption = figure && walk(figure).find(n => n.tagName === 'figcaption');
    const button = ancestor(img, n => n.tagName === 'button');
    const videoPoster = /(?:ytimg\.com|img\.youtube\.com)/.test(src);
    let alt = clean(attr(img, 'alt'));
    if (!alt && videoPoster) alt = clean(attr(button, 'aria-label')) || clean(text(ancestor(img, n => attr(n, 'data-review-video') || attr(n, 'data-journal-video'))?.childNodes?.find(n => n.tagName === 'h3'))) || heading;
    if (!alt && attr(img, 'alt') === undefined) alt = clean(text(caption)) || clean(attr(ancestor(img, n => n.tagName === 'a'), 'aria-label')) || heading;
    if (alt) set(img, 'alt', alt);
    // Empty alt is intentional for decorative images, including duplicate logos.
    if (!alt || /author|logo|avatar/i.test(src) || videoPoster) continue;
    images.push({ src, alt, width: Number(attr(img, 'width')) || undefined, height: Number(attr(img, 'height')) || undefined });
    if (!schemas.some(n => hasType(n, 'ImageObject') && absoluteAsset(n.contentUrl ?? n.url, siteOrigin) === src) && !added.some(n => n.contentUrl === src)) {
      const credit = figure && walk(figure).find(n => classHas(n, /credit/));
      const source = figure && walk(figure).find(n => n.tagName === 'a' && /^https:/.test(attr(n, 'href') ?? ''));
      added.push({ '@type': 'ImageObject', '@id': `${canonical}#image-${images.length}`, contentUrl: src, name: alt, caption: clean(text(caption)) || alt,
        width: Number(attr(img, 'width')) || undefined, height: Number(attr(img, 'height')) || undefined,
        creditText: clean(text(credit)) || undefined, url: attr(source, 'href'), isPartOf: { '@id': `${canonical}#webpage` } });
    }
  }
  const existingSocial = absoluteAsset(attr(nodes.find(n => n.tagName === 'meta' && attr(n, 'property') === 'og:image'), 'content'), siteOrigin);
  const socialImage = existingSocial ?? images[0]?.src ?? `${siteOrigin}/brand/coffeedant-social.png`;
  const socialAlt = clean(attr(nodes.find(n => n.tagName === 'meta' && attr(n, 'property') === 'og:image:alt'), 'content')) || images.find(n => n.src === socialImage)?.alt || 'Coffeedant — coffee equipment reviews and brewing guides';
  for (const [key, value] of Object.entries({ type: article ? 'article' : 'website', site_name: 'Coffeedant', title, description, url: canonical, image: socialImage, 'image:secure_url': socialImage, 'image:alt': socialAlt, locale: locale.replace('-', '_') })) setMeta(head, `og:${key}`, value, true);
  for (const [key, value] of Object.entries({ card: 'summary_large_image', title, description, image: socialImage, 'image:alt': socialAlt })) setMeta(head, `twitter:${key}`, value);
  const socialDimensions = images.find(n => n.src === socialImage) ?? (socialImage.endsWith('/brand/coffeedant-social.png') ? { width: 1200, height: 630 } : {});
  for (const key of ['width', 'height']) if (socialDimensions[key]) setMeta(head, `og:image:${key}`, socialDimensions[key], true);
  const organizationId = `${siteOrigin}/#organization`; const websiteId = `${siteOrigin}/#website`;
  added.push({ '@type': 'Organization', '@id': organizationId, name: 'Coffeedant', url: `${siteOrigin}/`, logo: { '@type': 'ImageObject', url: `${siteOrigin}/brand/coffeedant-logo.png` } },
    { '@type': 'WebSite', '@id': websiteId, name: 'Coffeedant', url: `${siteOrigin}/`, publisher: { '@id': organizationId }, inLanguage: locale },
    { '@type': route === '/about/' ? 'AboutPage' : route === '/contact/' ? 'ContactPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: locale,
      isPartOf: { '@id': websiteId }, primaryImageOfPage: { '@type': 'ImageObject', contentUrl: socialImage, caption: socialAlt },
      ...(article ? { mainEntity: { '@id': article['@id'] ?? `${canonical}#article` } } : {}) });
  if (!schemas.some(n => hasType(n, 'BreadcrumbList'))) {
    const segments = route.split('/').filter(Boolean);
    const items = [{ '@type': 'ListItem', position: 1, name: 'Coffeedant', item: `${siteOrigin}/` }];
    if (segments.length > 1) items.push({ '@type': 'ListItem', position: 2, name: labels[segments[0]] ?? segments[0], item: `${siteOrigin}/${segments[0]}/` });
    if (segments.length) items.push({ '@type': 'ListItem', position: items.length + 1, name: heading, item: canonical });
    added.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: items });
  }
  const questions = faqQuestions(document);
  if (questions.length && !schemas.some(n => hasType(n, 'FAQPage'))) added.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: questions });
  // Fill missing media fields only from the page's visible media. Never invent
  // upload dates, licenses, durations, prices or audience ratings.
  for (const script of nodes.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json')) {
    const data = JSON.parse(text(script)); const values = data['@graph'] ?? [data];
    for (const schema of values) {
      if (hasType(schema, 'Article') || hasType(schema, 'BlogPosting')) {
        schema.publisher = { ...(schema.publisher ?? {}), '@type': 'Organization', '@id': organizationId, name: 'Coffeedant', url: `${siteOrigin}/`, logo: { '@type': 'ImageObject', url: `${siteOrigin}/brand/coffeedant-logo.png` } };
        schema.inLanguage ??= locale;
      }
      if (hasType(schema, 'VideoObject')) {
        schema['@id'] ??= `${canonical}#video-${values.filter(n => hasType(n, 'VideoObject')).indexOf(schema) + 1}`;
        schema.isPartOf ??= { '@id': `${canonical}#webpage` };
        if (/^\d{4}-\d{2}-\d{2}$/.test(schema.uploadDate ?? '')) schema.uploadDate += 'T00:00:00Z';
        // YouTube watch URLs are landing pages, not downloadable video files.
        if (/youtube\.com\/watch/.test(schema.contentUrl ?? '')) { schema.url = schema.contentUrl; delete schema.contentUrl; }
      }
      if (hasType(schema, 'ImageObject') && schema.contentUrl) schema.contentUrl = absoluteAsset(schema.contentUrl, siteOrigin);
    }
    script.childNodes = [{ nodeName: '#text', value: JSON.stringify(data).replaceAll('<', '\\u003c'), parentNode: script }];
  }
  const priorGenerated = nodes.find(n => attr(n, 'id') === 'coffeedant-seo');
  if (priorGenerated) remove(priorGenerated);
  append(head, `<script type="application/ld+json" id="coffeedant-seo">${JSON.stringify({ '@context': 'https://schema.org', '@graph': added }).replaceAll('<', '\\u003c')}</script>`);
  const dates = [seoReleaseDate, ...(options.lastmod ? [options.lastmod] : []), ...schemas.map(n => n.dateModified).filter(Boolean)].filter(n => /^\d{4}-\d{2}-\d{2}/.test(n) && Number.isFinite(Date.parse(n)) && Date.parse(n) <= Date.now());
  const lastmod = dates.sort((a, b) => Date.parse(b) - Date.parse(a))[0];
  return { html: serialize(document), url: canonical, title, description, lastmod, images: [...new Map(images.map(n => [n.src, n])).values()], post: Boolean(article), videos: graph(document).filter(n => hasType(n, 'VideoObject')) };
};

export const sitemapXml = pages => `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${pages.map(p => `  <url><loc>${escape(p.url)}</loc><lastmod>${escape(p.lastmod)}</lastmod>${p.images.map(i => `<image:image><image:loc>${escape(i.src)}</image:loc></image:image>`).join('')}</url>`).join('\n')}\n</urlset>\n`;

// Sitemap membership follows editorial sections, not Article schema: product
// reviews and buying guides are pages even when their schema includes Article.
export const isPostSitemapPage = page => /^\/(?:blog|journal)\/[^/]+\/$/.test(page.sourcePath ?? new URL(page.url).pathname);

export const buildSeo = async (directory = path.join(root, 'dist'), options = {}) => {
  const siteOrigin = options.origin ?? origin;
  const redirectText = await readFile(path.join(directory, '_redirects'), 'utf8').catch(() => '');
  const redirects = new Set(redirectText.split(/\r?\n/).map(l => l.trim().split(/\s+/)).filter(v => v.length >= 3 && /^30[1278]$/.test(v[2])).map(v => v[0]));
  const oldSitemap = await readFile(path.join(root, 'public/sitemap.xml'), 'utf8');
  const dates = new Map([...oldSitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(m => [new URL(m[1]).pathname, m[2]]));
  const pages = [];
  for (const file of await files(directory)) {
    const route = routeFromFile(file, directory); const html = await readFile(file, 'utf8');
    if (redirects.has(route) || /http-equiv=["']refresh["']/i.test(html)) continue;
    const result = enhancePage(html, route, { ...options, lastmod: dates.get(route) });
    result.sourcePath = options.sourceRoutes?.[route] ?? route;
    await writeFile(file, result.html);
    if (route !== '/404/' && !/noindex/i.test(attr(walk(parse(result.html)).find(n => n.tagName === 'meta' && attr(n, 'name') === 'robots'), 'content') ?? '')) pages.push(result);
  }
  const posts = pages.filter(isPostSitemapPage); const regular = pages.filter(p => !isPostSitemapPage(p));
  await writeFile(path.join(directory, 'post-sitemap.xml'), sitemapXml(posts));
  await writeFile(path.join(directory, 'page-sitemap.xml'), sitemapXml(regular));
  // Preserve the historical full sitemap endpoint for existing submissions.
  await writeFile(path.join(directory, 'sitemap.xml'), sitemapXml(pages));
  const lastmod = pages.map(p => p.lastmod).sort().at(-1);
  await writeFile(path.join(directory, 'sitemap_index.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['post', 'page'].map(kind => `<sitemap><loc>${siteOrigin}/${kind}-sitemap.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`).join('')}</sitemapindex>\n`);
  await writeFile(path.join(directory, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap_index.xml\nSitemap: ${siteOrigin}/sitemap.xml\nSitemap: ${siteOrigin}/post-sitemap.xml\nSitemap: ${siteOrigin}/page-sitemap.xml\n`);
  const lines = ['# Coffeedant', '', '> Research-led coffee equipment reviews, buying guides and brewing education.', '', 'Coffeedant is an editorial publisher. Product identity, regional versions, sourcing, publication dates and methodology are documented on individual pages. Research-led assessments are not claims of physical testing. Prices and availability are dated and should be verified with the seller. Images and videos belong to their credited creators; illustrations are labelled.', '', '## Site information'];
  const sections = [ ['Site information', pages.filter(p => /\/(?:about|testing|contact|privacy-policy|tos)\/$/.test(new URL(p.url).pathname))], ['Libraries and tools', pages.filter(p => !p.post && !/\/(?:about|testing|contact|privacy-policy|tos)\/$/.test(new URL(p.url).pathname))], ['Reviews and articles', pages.filter(p => p.post)] ];
  lines.pop();
  for (const [name, entries] of sections) { lines.push(`## ${name}`, ''); for (const p of entries) lines.push(`- [${p.title.replace(/[\[\]]/g, '')}](${p.url}): ${p.description}`); lines.push(''); }
  lines.push('## Crawl resources', '', `- [Sitemap index](${siteOrigin}/sitemap_index.xml): Canonical pages and articles.`, `- [Post sitemap](${siteOrigin}/post-sitemap.xml): Blog and Journal articles.`, `- [Page sitemap](${siteOrigin}/page-sitemap.xml): Product reviews, buying guides, libraries, categories and supporting pages.`, '');
  await writeFile(path.join(directory, 'llms.txt'), lines.join('\n'));
  await writeFile(path.join(directory, 'llm.txt'), '# Coffeedant\n\nThe canonical LLM-readable site directory is at ' + siteOrigin + '/llms.txt\n');
  const report = { pages: pages.length, posts: posts.length, regular: regular.length, imageEntries: pages.reduce((n, p) => n + p.images.length, 0), videoObjects: pages.reduce((n, p) => n + p.videos.length, 0) };
  console.log(`SEO build: ${JSON.stringify(report)}`); return report;
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const edition = process.env.COFFEEDANT_EDITION ?? 'us';
  // Regional builds call buildSeo with their verified locale and host.
  if (edition === 'us') await buildSeo();
}
