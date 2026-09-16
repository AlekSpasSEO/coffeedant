import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const astroConfig = (await import(new URL('../astro.config.mjs', import.meta.url))).default;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-batch-manifest.json'), 'utf8'));
const migrationBatches = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-migration-batches.json'), 'utf8'));
const migratedReviewSlugs = new Set(migrationBatches.batches.flat());
const legacyPages = [
  ...JSON.parse(fs.readFileSync(path.join(root, 'src/data/pages-a.json'), 'utf8')),
  ...JSON.parse(fs.readFileSync(path.join(root, 'src/data/pages-b.json'), 'utf8')),
];
const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const robots = fs.readFileSync(path.join(root, 'public/robots.txt'), 'utf8');
const expectedBatchSize = 20;
const batchDate = '2026-09-15';
// GitHub Pages is the staged publication host; canonicals already point at the eventual production origin.
const canonicalOrigin = 'https://coffeedant.com';
const pagesOrigin = 'https://alekspasseo.github.io/coffeedant';
const reviewSlugPattern = /^\/espresso-machine\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/;
const reservedProductSlugs = new Set([
  'beginners', 'breville-bambino', 'built-in-grinder', 'cheap-budget-under-500',
  'prosumer-under-1000', 'single-boiler', 'small', 'superautomatic', 'without-grinder',
]);
const errors = [];
const reports = [];
const videoPages = new Map();
const banned = [
  /\bI tested\b/i,
  /\bin my testing\b/i,
  /\bwe tested\b/i,
  /\bour tests?\b/i,
  /\bmy unit\b/i,
  /\bafter (?:using|living with) (?:it|this machine)\b/i,
  /\bafter pulling (?:hundreds|thousands) of shots\b/i,
  /\bCoffeedant testing (?:shows|showed|found)\b/i,
];

const cleanText = (html) => html
  .replace(/<([a-z][\w:-]*)\b[^>]*class="[^"]*\bsr-only\b[^"]*"[^>]*>[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:apos|#0*39|#x0*27);/gi, "'")
  .replace(/&(?:rsquo|#0*8217|#x0*2019);/gi, '’')
  .replace(/&(?:#\d+|#x[\da-f]+|[a-z][\da-z]+);/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const wordCount = (value) => (
  value.match(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu) ?? []
).length;

const count = (value, expression) => [...value.matchAll(expression)].length;
const fail = (slug, message) => errors.push(`${slug}: ${message}`);

if (astroConfig.site !== 'https://alekspasseo.github.io'
  || astroConfig.base !== '/coffeedant'
  || astroConfig.trailingSlash !== 'always'
  || astroConfig.build?.format !== 'directory') {
  errors.push('astro config: GitHub Pages origin, base path or directory routing has changed');
}
if (!robots.includes(`Sitemap: ${pagesOrigin}/sitemap.xml`)) {
  errors.push('robots: sitemap URL does not match the GitHub Pages publication path');
}

if (manifest.length !== expectedBatchSize) errors.push(`manifest: expected ${expectedBatchSize} reviews, found ${manifest.length}`);
if (new Set(manifest.map((item) => item.slug)).size !== manifest.length) errors.push('manifest: duplicate slugs');
if (new Set(manifest.map((item) => item.productId)).size !== manifest.length) errors.push('manifest: duplicate product IDs');
for (const item of manifest) {
  if (!reviewSlugPattern.test(item.slug)) fail(item.slug, 'manifest slug is not a canonical product route');
  const routeSegment = item.slug.split('/').filter(Boolean).at(-1);
  if (routeSegment && reservedProductSlugs.has(routeSegment)) fail(item.slug, 'manifest route collides with an explicit page');
  if (!/^CD-EM-\d{6}$/.test(item.productId)) fail(item.slug, `malformed product ID ${item.productId}`);
  const legacyMatches = legacyPages.filter((page) => page.path === item.slug).length;
  if (legacyMatches !== 1) fail(item.slug, `expected one matching legacy route, found ${legacyMatches}`);
}

const sitemapEntries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)]
  .map((match) => ({ loc: match[1], lastmod: match[2] }));
if (!sitemapEntries.length) errors.push('sitemap: no parseable URL records');
if (new Set(sitemapEntries.map((entry) => entry.loc)).size !== sitemapEntries.length) {
  errors.push('sitemap: duplicate URLs');
}

for (const item of manifest) {
  const sitemapMatches = sitemapEntries.filter((entry) => entry.loc === `${pagesOrigin}${item.slug}`);
  if (sitemapMatches.length !== 1) {
    fail(item.slug, `expected one sitemap entry, found ${sitemapMatches.length}`);
  } else if (sitemapMatches[0].lastmod !== batchDate) {
    fail(item.slug, `sitemap lastmod must be ${batchDate}`);
  }
  const slugName = item.slug.split('/').filter(Boolean).at(-1);
  const ledgerPath = path.join(root, 'docs/reviews', `${slugName}-research.md`);
  if (!fs.existsSync(ledgerPath)) {
    fail(item.slug, 'research ledger is missing');
  } else {
    const ledger = fs.readFileSync(ledgerPath, 'utf8');
    if (ledger.length < 1000) fail(item.slug, 'research ledger is too thin');
    for (const evidenceClass of ['official', 'independent', 'community', 'unknown']) {
      if (!new RegExp(`\\b${evidenceClass}`, 'i').test(ledger)) {
        fail(item.slug, `research ledger does not document ${evidenceClass} evidence`);
      }
    }
  }
  const output = path.join(dist, item.slug.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(output)) {
    fail(item.slug, 'built route is missing');
    continue;
  }
  const html = fs.readFileSync(output, 'utf8');
  const usesMigrationTemplate = migratedReviewSlugs.has(item.slug);
  const expectedCanonical = `${canonicalOrigin}${item.slug}`;
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? '';
  const visible = cleanText(main);
  const articleCopy = cleanText(main
    .replace(/<figure\b[^>]*class="review-media review-inline-media"[^>]*>[\s\S]*?<\/figure>/gi, ' ')
    .replace(/<aside\b[^>]*class="review-community-(?:embed|evidence)"[^>]*>[\s\S]*?<\/aside>/gi, ' '));
  const words = wordCount(articleCopy);
  const scoreCards = count(main, /class="review-score-card"/g);
  const deepDives = count(main, /class="review-performance-detail"/g);
  const comparisonDetails = count(main, /class="review-comparison-details(?:\s|"|$)/g);
  const faqModules = count(main, /class="review-faq-list(?:\s|"|$)/g);
  const sourceList = main.match(/<ol class="review-source-list">([\s\S]*?)<\/ol>/i)?.[1] ?? '';
  const sources = count(sourceList, /<li id="[^"]+">/g);
  const redditSourceLinks = [...sourceList.matchAll(/<a href="(https:\/\/(?:www\.)?reddit\.com\/[^"]+)"[^>]*rel="([^"]+)"/gi)];
  const redditEmbeds = count(main, /class="review-community-embed"/g);
  const redditEvidenceBlocks = count(main, /class="review-community-evidence"/g);
  const recommendations = count(main, /class="review-recommendation-card(?:\s|"|$)/g);
  const h1s = count(main, /<h1\b/g);
  const mains = count(html, /<main\b/g);
  const tables = [...main.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map((match) => match[0]);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  const internalLinks = [...html.matchAll(/href="(\/coffeedant\/[^"?#]*(?:[?#][^"]*)?)"/g)]
    .map((match) => match[1]);
  const unbasedRootUrls = [...html.matchAll(/\s(?:href|src)="(\/(?!\/|coffeedant\/)[^"]+)"/g)]
    .map((match) => match[1]);
  const localAnchors = [...main.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  const labelledByIds = [...main.matchAll(/\saria-labelledby="([^"]+)"/g)]
    .flatMap((match) => match[1].trim().split(/\s+/));

  if (!main.includes(`data-product-id="${item.productId}"`)) fail(item.slug, `expected product id ${item.productId}`);
  if (mains !== 1 || !main.includes('id="main-content"') || !main.includes('tabindex="-1"')) {
    fail(item.slug, `expected one skip-link focusable main landmark, found ${mains}`);
  }
  if (words < 3500) fail(item.slug, `only ${words} visible words; target minimum is 3500`);
  if (words > 5500) fail(item.slug, `${words} visible words; target maximum is 5500`);
  if (scoreCards !== 6) fail(item.slug, `expected 6 rating cards, found ${scoreCards}`);
  if (deepDives !== 6) fail(item.slug, `expected 6 performance deep dives, found ${deepDives}`);
  if (sources < 10) fail(item.slug, `expected at least 10 source records, found ${sources}`);
  if (!usesMigrationTemplate && redditSourceLinks.length && redditEmbeds !== 1) {
    fail(item.slug, `expected one official Reddit embed for ${redditSourceLinks.length} Reddit source(s), found ${redditEmbeds}`);
  }
  if (redditSourceLinks.some((match) => !match[2].split(/\s+/).includes('ugc'))) {
    fail(item.slug, 'a Reddit source link is not marked as user-generated content');
  }
  if (!usesMigrationTemplate && redditEmbeds && !/<iframe\b[^>]*src="https:\/\/www\.redditmedia\.com\//i.test(main)) {
    fail(item.slug, 'Reddit module does not use the official redditmedia embed');
  }
  if (usesMigrationTemplate && redditSourceLinks.length) {
    if (redditEvidenceBlocks !== 1) fail(item.slug, `expected one on-page Reddit evidence block, found ${redditEvidenceBlocks}`);
    if (redditEmbeds !== 0 || /<iframe\b[^>]*src="https:\/\/www\.redditmedia\.com\//i.test(main)) {
      fail(item.slug, 'migrated Reddit evidence still uses an external iframe');
    }
    const evidenceBlock = main.match(/<aside\b[^>]*class="review-community-evidence"[^>]*>[\s\S]*?<\/aside>/i)?.[0] ?? '';
    if (/<a\b/i.test(evidenceBlock)) fail(item.slug, 'on-page Reddit evidence block contains an outbound link');
    if (count(evidenceBlock, /<li>/g) < 1) fail(item.slug, 'on-page Reddit evidence block has no readable owner records');
  }
  if (comparisonDetails !== 1) fail(item.slug, `expected 1 detailed comparison control, found ${comparisonDetails}`);
  if (faqModules !== 1) fail(item.slug, `expected 1 FAQ module, found ${faqModules}`);
  if (usesMigrationTemplate) {
    const faqBlock = main.match(/<div class="review-faq-list">[\s\S]*?<\/div>/i)?.[0] ?? '';
    if (/<details\b|<summary\b/i.test(faqBlock)) fail(item.slug, 'FAQ still uses dropdown controls');
    if (count(faqBlock, /class="review-faq-item"/g) < 3) fail(item.slug, 'FAQ does not expose enough visible question-and-answer items');
  }
  if (recommendations !== 4) fail(item.slug, `expected 4 recommendation cards, found ${recommendations}`);
  if (!main.includes('data-commerce-ready="true"')) fail(item.slug, 'commerce-ready recommendation hook is missing');
  if (!main.includes('class="review-author-card"')) fail(item.slug, 'author card is missing');
  if (!main.includes('class="review-overall-rating"')) fail(item.slug, 'overall score is missing');
  if (!main.includes('class="review-video"')) fail(item.slug, 'independent video module is missing');
  if (!html.includes('"@type":"VideoObject"')) fail(item.slug, 'VideoObject metadata is missing');
  const videoId = main.match(/data-review-video="([^"]+)"/)?.[1];
  const videoDate = html.match(/"@type":"VideoObject"[\s\S]*?"uploadDate":"([^"]+)"/)?.[1];
  const articlePublishedDate = html.match(/<meta property="article:published_time" content="([^"]+)">/)?.[1];
  if (!videoDate || !/^\d{4}-\d{2}-\d{2}$/.test(videoDate)) {
    fail(item.slug, 'VideoObject upload date must be a complete ISO date');
  }
  if (!videoId || !/^[\w-]{11}$/.test(videoId)) {
    fail(item.slug, 'YouTube video ID is missing or malformed');
  } else {
    if (!sourceList.includes(videoId)) fail(item.slug, 'embedded video is absent from the source ledger');
    const pages = videoPages.get(videoId) ?? [];
    pages.push(item.slug);
    videoPages.set(videoId, pages);
  }
  if (!articlePublishedDate || !/^\d{4}-\d{2}-\d{2}$/.test(articlePublishedDate)) {
    fail(item.slug, 'article publication date must be a complete ISO date');
  }

  const structuredNodes = [];
  const structuredScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const script of structuredScripts) {
    try {
      const value = JSON.parse(script[1]);
      if (Array.isArray(value?.['@graph'])) structuredNodes.push(...value['@graph']);
      else structuredNodes.push(value);
    } catch {
      fail(item.slug, 'JSON-LD is not valid JSON');
    }
  }
  const productSchema = structuredNodes.find((node) => node?.['@type'] === 'Product');
  const articleSchema = structuredNodes.find((node) => node?.['@type'] === 'Article');
  const videoSchema = structuredNodes.find((node) => node?.['@type'] === 'VideoObject');
  const breadcrumbSchema = structuredNodes.find((node) => node?.['@type'] === 'BreadcrumbList');
  if (!productSchema
    || productSchema['@id'] !== `${expectedCanonical}#product`
    || productSchema.identifier !== item.productId
    || !productSchema.category
    || productSchema.url !== expectedCanonical) {
    fail(item.slug, 'Product schema identity, URL or product ID is wrong');
  }
  if (!articleSchema
    || articleSchema['@id'] !== `${expectedCanonical}#article`
    || articleSchema.mainEntityOfPage !== expectedCanonical
    || articleSchema.datePublished !== articlePublishedDate
    || articleSchema.dateModified !== batchDate
    || articleSchema.about?.['@id'] !== `${expectedCanonical}#product`
    || articleSchema.inLanguage !== 'en-US') {
    fail(item.slug, 'Article schema identity, date or Product relationship is wrong');
  }
  if (!videoSchema
    || videoSchema.uploadDate !== videoDate
    || videoSchema.inLanguage !== 'en-US'
    || !videoId
    || !String(videoSchema.contentUrl ?? '').includes(videoId)
    || !String(videoSchema.embedUrl ?? '').includes(videoId)) {
    fail(item.slug, 'VideoObject schema does not match the embedded video');
  }
  const breadcrumbItems = breadcrumbSchema?.itemListElement;
  if (!Array.isArray(breadcrumbItems)
    || breadcrumbItems.length !== 3
    || breadcrumbItems.at(-1)?.item !== expectedCanonical) {
    fail(item.slug, 'Breadcrumb schema is missing or does not end at the canonical review URL');
  }

  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map((match) => match[1]);
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) fail(item.slug, 'canonical URL is missing, duplicated or wrong');
  if (!html.includes('<meta property="og:type" content="article">')) fail(item.slug, 'article Open Graph type is missing');
  if (!/<meta property="og:title" content="[^"]+">/.test(html)) fail(item.slug, 'Open Graph title is missing');
  if (!/<meta property="og:description" content="[^"]+">/.test(html)) fail(item.slug, 'Open Graph description is missing');
  if (!html.includes(`<meta property="og:url" content="${expectedCanonical}">`)) fail(item.slug, 'Open Graph URL is wrong');
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)">/)?.[1];
  if (!ogImage) fail(item.slug, 'Open Graph image is missing');
  else if (!ogImage.startsWith(`${pagesOrigin}/`)) fail(item.slug, `Open Graph image is outside the GitHub Pages base: ${ogImage}`);
  if (!/<meta property="og:image:alt" content="[^"]+">/.test(html)) fail(item.slug, 'Open Graph image alternative text is missing');
  if (!html.includes(`<meta property="article:modified_time" content="${batchDate}">`)) fail(item.slug, 'article modified time is wrong');
  if (!/<meta name="twitter:title" content="[^"]+">/.test(html)) fail(item.slug, 'Twitter title is missing');
  if (!/<meta name="twitter:description" content="[^"]+">/.test(html)) fail(item.slug, 'Twitter description is missing');
  if (!html.includes('<meta name="twitter:card" content="summary_large_image">')) fail(item.slug, 'Twitter large-image card is missing');
  if (!ogImage || !html.includes(`<meta name="twitter:image" content="${ogImage}">`)) fail(item.slug, 'Twitter image does not match Open Graph');
  if (!/<meta name="twitter:image:alt" content="[^"]+">/.test(html)) fail(item.slug, 'Twitter image alternative text is missing');
  if (h1s !== 1) fail(item.slug, `expected one H1, found ${h1s}`);
  if (tables.some((table) => !/<caption\b/i.test(table))) fail(item.slug, 'a data table is missing its caption');
  if (duplicateIds.length) fail(item.slug, `duplicate IDs: ${duplicateIds.join(', ')}`);
  for (const url of unbasedRootUrls) fail(item.slug, `GitHub Pages base path is missing: ${url}`);
  for (const anchor of localAnchors) {
    if (!ids.includes(anchor)) fail(item.slug, `broken local anchor: #${anchor}`);
  }
  for (const labelledBy of labelledByIds) {
    if (!ids.includes(labelledBy)) fail(item.slug, `aria-labelledby references missing ID: ${labelledBy}`);
  }
  for (const href of internalLinks) {
    const relative = href.split(/[?#]/, 1)[0].replace(/^\/coffeedant\//, '');
    const target = relative.endsWith('/')
      ? path.join(dist, relative, 'index.html')
      : path.join(dist, relative);
    if (!fs.existsSync(target)) fail(item.slug, `broken internal link: ${href}`);
  }
  if (/https?:\/\/(?:www\.)?coffeedant\.com\/wp-content\/|(?:href|src)="\/wp-content\//i.test(main)) {
    fail(item.slug, 'legacy Coffeedant wp-content path remains');
  }
  if (/The Bambino Plus earns/i.test(main)) fail(item.slug, 'Bambino-specific rating copy leaked into the page');
  if (/—/.test(visible)) fail(item.slug, 'em dash remains in visible copy');
  if (/\b(?:surfaces|moat)\b/i.test(visible)) fail(item.slug, 'house-style banned wording remains');
  for (const expression of banned) if (expression.test(visible)) fail(item.slug, `unsupported hands-on language matched ${expression}`);

  const inlineMedia = [...main.matchAll(/<figure\b[^>]*class="review-media review-inline-media"[^>]*>[\s\S]*?<\/figure>/gi)]
    .map((match) => match[0]);
  const imageCount = inlineMedia.length + 1;
  const requiredImages = Math.ceil(words / 500);
  if (usesMigrationTemplate) {
    if (imageCount > 3) fail(item.slug, `migration image cap exceeded: ${imageCount} images; maximum is 3`);
    if (imageCount < 2) fail(item.slug, `migration page is visually unsupported: ${imageCount} images`);
  } else {
    if (imageCount < requiredImages) {
      fail(item.slug, `image density is too low: ${imageCount} images for ${words} words; at least ${requiredImages} required`);
    }
    if (inlineMedia.length < requiredImages - 1) {
      fail(item.slug, `expected at least ${requiredImages - 1} inline editorial images, found ${inlineMedia.length}`);
    }
  }

  let userGeneratedMedia = 0;
  const sourceTypes = new Set();
  inlineMedia.forEach((figure, mediaIndex) => {
    const imageTag = figure.match(/<img\b[^>]*>/i)?.[0] ?? '';
    const src = imageTag.match(/\ssrc="([^"]+)"/i)?.[1];
    const alt = imageTag.match(/\salt="([^"]*)"/i)?.[1];
    const width = Number(imageTag.match(/\swidth="(\d+)"/i)?.[1] ?? 0);
    const height = Number(imageTag.match(/\sheight="(\d+)"/i)?.[1] ?? 0);
    const sourceType = figure.match(/\sdata-source-type="([^"]+)"/i)?.[1];
    const isUserGenerated = figure.match(/\sdata-user-generated="([^"]+)"/i)?.[1] === 'true';
    const usageRecord = figure.match(/\sdata-usage-record="([^"]+)"/i)?.[1];

    if (!src || !alt?.trim()) fail(item.slug, `inline image ${mediaIndex + 1} or its alternative text is missing`);
    if (!width || !height) fail(item.slug, `inline image ${mediaIndex + 1} is missing intrinsic dimensions`);
    if (!/loading="lazy"/i.test(imageTag) || !/decoding="async"/i.test(imageTag)) {
      fail(item.slug, `inline image ${mediaIndex + 1} is missing lazy-loading metadata`);
    }
    if (!sourceType || !['community', 'reddit', 'product-listing', 'manufacturer'].includes(sourceType)) {
      fail(item.slug, `inline image ${mediaIndex + 1} has no approved source type`);
    } else {
      sourceTypes.add(sourceType);
    }
    if (!usageRecord?.startsWith('https://')) fail(item.slug, `inline image ${mediaIndex + 1} has no usage record`);
    if (!/class="review-media-credit"/i.test(figure)) fail(item.slug, `inline image ${mediaIndex + 1} has no visible credit`);
    if (!/class="review-media-source-badge"/i.test(figure)) fail(item.slug, `inline image ${mediaIndex + 1} has no source badge`);
    if (isUserGenerated) {
      userGeneratedMedia += 1;
      if (!/rel="ugc noopener"/i.test(figure)) fail(item.slug, `inline image ${mediaIndex + 1} is user-generated but its source link is not marked ugc`);
    }
    if (src?.startsWith('/coffeedant/')) {
      const inlineImageFile = path.join(dist, src.replace(/^\/coffeedant\//, ''));
      if (!fs.existsSync(inlineImageFile)) fail(item.slug, `inline editorial image does not exist: ${src}`);
    } else if (src && !src.startsWith('https://')) {
      fail(item.slug, `inline editorial image has an unsupported URL: ${src}`);
    }
  });

  const requiredUserGenerated = Math.ceil(inlineMedia.length * 0.5);
  if (userGeneratedMedia < requiredUserGenerated) {
    fail(item.slug, `user-generated image mix is too low: ${userGeneratedMedia} of ${inlineMedia.length}; at least ${requiredUserGenerated} required`);
  }
  if (!sourceTypes.has('community') || !sourceTypes.has('product-listing')) {
    fail(item.slug, 'inline images must combine community and product-listing sources');
  }

  const mediaLedgerPath = path.join(root, 'docs/reviews', `${slugName}-media.md`);
  if (!fs.existsSync(mediaLedgerPath)) {
    fail(item.slug, 'media ledger is missing');
  } else {
    const mediaLedger = fs.readFileSync(mediaLedgerPath, 'utf8');
    const mediaLedgerRows = count(mediaLedger, /^\| \d+ \|/gm);
    if (mediaLedgerRows !== inlineMedia.length) {
      fail(item.slug, `media ledger has ${mediaLedgerRows} image records for ${inlineMedia.length} inline images`);
    }
    const expectedLedgerRule = usesMigrationTemplate
      ? 'Publication image cap: 3 total images'
      : `Minimum images at one image per 500 words: ${requiredImages}`;
    if (!mediaLedger.includes(expectedLedgerRule)) {
      fail(item.slug, 'media ledger does not record the current publication image rule');
    }
  }

  const productImageTag = main.match(/<img\b[^>]*class="[^"]*\breview-product-image\b[^"]*"[^>]*>/i)?.[0];
  const productImage = productImageTag?.match(/\ssrc="([^"]+)"/i)?.[1];
  const productImageAlt = productImageTag?.match(/\salt="([^"]*)"/i)?.[1];
  if (!productImage || !productImageTag) {
    fail(item.slug, 'product image is missing');
  } else if (!productImage.startsWith('/coffeedant/')) {
    fail(item.slug, `product image is outside the GitHub Pages base: ${productImage}`);
  } else {
    const imageFile = path.join(dist, productImage.replace(/^\/coffeedant\//, ''));
    if (!fs.existsSync(imageFile)) fail(item.slug, `product image does not exist: ${productImage}`);
  }
  if (!productImageAlt?.trim()) fail(item.slug, 'product image alternative text is missing');

  reports.push({
    slug: item.slug,
    words,
    sources,
    scoreCards,
    deepDives,
    recommendations,
    images: imageCount,
    userGeneratedMedia,
  });
}

for (const [videoId, pages] of videoPages) {
  if (pages.length > 1) errors.push(`video ${videoId}: reused by ${pages.join(', ')}`);
}

for (const report of reports) {
  console.log(`${report.slug} ${report.words} words, ${report.images} images, ${report.userGeneratedMedia} community/owner images, ${report.sources} sources, ${report.scoreCards} ratings, ${report.deepDives} deep dives, ${report.recommendations} recommendations`);
}

if (errors.length) {
  console.error(`\nReview batch validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`\nValidated ${reports.length} modern review pages.`);
