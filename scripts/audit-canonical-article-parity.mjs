#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const sitemapFile = path.join(dist, 'sitemap.xml');
const referenceRoute = '/espresso-machine/breville-barista-express-bes870xl/';
const strict = process.argv.includes('--strict');
const help = process.argv.includes('--help') || process.argv.includes('-h');
const minimumEditorialWords = 4700;
const maximumEditorialWords = 5500;

const productRoutePattern = /^\/(?:espresso-machine|coffee-machine|grinder)\/[^/]+\/$/;
const blogRoutePattern = /^\/blog\/[^/]+\/$/;
const buyingGuideRoutes = new Set([
  '/espresso-machine/beginners/',
  '/espresso-machine/built-in-grinder/',
  '/espresso-machine/cheap-budget-under-500/',
  '/espresso-machine/prosumer-under-1000/',
  '/espresso-machine/single-boiler/',
  '/espresso-machine/small/',
  '/espresso-machine/superautomatic/',
  '/espresso-machine/without-grinder/',
]);

const skippedTextTags = new Set([
  'dialog',
  'noscript',
  'script',
  'style',
  'svg',
  'template',
]);
const skippedTextClasses = new Set([
  'cd-sticky-inner',
  'review-community-embed',
  'review-community-evidence',
  'review-inline-media',
  'sr-only',
]);

const usage = `Usage: node scripts/audit-canonical-article-parity.mjs [--strict]\n\n`+
  'Reads dist/sitemap.xml and built article HTML. The default baseline mode always exits 0.\n' +
  'Pass --strict to exit 1 when an article is outside the accepted reference-volume range or misses a required module.';

if (help) {
  console.log(usage);
  process.exit(0);
}

const attribute = (node, name) => node?.attrs?.find((item) => item.name === name)?.value ?? '';
const hasAttribute = (node, name) => Boolean(node?.attrs?.some((item) => item.name === name));
const classes = (node) => attribute(node, 'class').trim().split(/\s+/).filter(Boolean);
const hasClass = (node, className) => classes(node).includes(className);

const descendants = (node, output = []) => {
  output.push(node);
  for (const child of node?.childNodes ?? []) descendants(child, output);
  return output;
};

const countClass = (context, className) => context.mainNodes.filter((node) => hasClass(node, className)).length;

const visibleText = (node) => {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value ?? '';
  if (skippedTextTags.has(node.tagName)) return '';
  if (classes(node).some((className) => skippedTextClasses.has(className))) return '';
  if (hasAttribute(node, 'hidden') || attribute(node, 'aria-hidden') === 'true') return '';
  return (node.childNodes ?? []).map(visibleText).join(' ');
};

const wordCount = (value) => (
  value.match(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu) ?? []
).length;

const structuredDataTypes = (document) => {
  const types = new Set();
  const scripts = descendants(document, []).filter((node) => (
    node.tagName === 'script' && attribute(node, 'type').toLowerCase() === 'application/ld+json'
  ));

  const collect = (value) => {
    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }
    if (!value || typeof value !== 'object') return;
    const type = value['@type'];
    if (Array.isArray(type)) type.forEach((item) => types.add(String(item)));
    else if (type) types.add(String(type));
    if (Array.isArray(value['@graph'])) value['@graph'].forEach(collect);
  };

  for (const script of scripts) {
    const source = (script.childNodes ?? []).map((child) => child.value ?? '').join('').trim();
    if (!source) continue;
    try {
      collect(JSON.parse(source));
    } catch {
      // Invalid structured data is represented by a missing schema module in the report.
    }
  }
  return types;
};

const contextFor = (html) => {
  const document = parse(html);
  const nodes = descendants(document, []);
  const main = nodes.find((node) => node.tagName === 'main');
  const mainNodes = main ? descendants(main, []) : [];
  return {
    document,
    nodes,
    main,
    mainNodes,
    schemas: structuredDataTypes(document),
    html,
  };
};

const classMetric = (className) => (context) => countClass(context, className);
const booleanMetric = (test) => (context) => Number(test(context));
const visibleFaqItemMetric = (context) => {
  const faq = context.mainNodes.find((node) => hasClass(node, 'review-faq-list'));
  if (!faq) return 0;
  const faqNodes = descendants(faq, []);
  if (faqNodes.some((node) => node.tagName === 'details')) return 0;
  return faqNodes.filter((node) => hasClass(node, 'review-faq-item')).length;
};

const productModules = [
  {
    id: 'P01',
    name: 'modern review layout',
    metric: booleanMetric((context) => (
      countClass(context, 'review-page') > 0
      && countClass(context, 'review-shell') > 0
      && countClass(context, 'review-article') > 0
    )),
  },
  { id: 'P02', name: 'single H1', metric: (context) => context.mainNodes.filter((node) => node.tagName === 'h1').length },
  { id: 'P03', name: 'compact review summary', metric: classMetric('review-summary') },
  {
    id: 'P04',
    name: 'price and buy actions',
    metric: booleanMetric((context) => (
      countClass(context, 'review-price-check') > 0 && countClass(context, 'review-buy-actions') > 0
    )),
  },
  { id: 'P05', name: 'author card', metric: classMetric('review-author-card') },
  { id: 'P06', name: 'published and updated dates', metric: classMetric('review-author-dates') },
  { id: 'P07', name: 'overall rating', metric: classMetric('review-overall-rating') },
  {
    id: 'P08',
    name: 'pros and cons',
    metric: booleanMetric((context) => (
      countClass(context, 'review-pros') > 0 && countClass(context, 'review-cons') > 0
    )),
  },
  { id: 'P09', name: 'rating cards', metric: classMetric('review-score-card') },
  { id: 'P10', name: 'performance deep dives', metric: classMetric('review-performance-detail') },
  { id: 'P11', name: 'quick-answer panel', metric: classMetric('quick-answer-panel') },
  { id: 'P12', name: 'jump navigation', metric: classMetric('review-jumpbar') },
  {
    id: 'P13',
    name: 'simple and detailed comparison',
    metric: booleanMetric((context) => (
      countClass(context, 'review-table') > countClass(context, 'review-table-detailed')
      && countClass(context, 'review-table-detailed') > 0
      && countClass(context, 'review-comparison-details') > 0
    )),
  },
  { id: 'P14', name: 'on-page community evidence', metric: classMetric('review-community-evidence') },
  { id: 'P15', name: 'recommendation cards', metric: classMetric('review-recommendation-card') },
  {
    id: 'P16',
    name: 'visible FAQ',
    metric: visibleFaqItemMetric,
    minimum: 6,
  },
  { id: 'P17', name: 'independent video', metric: classMetric('review-video') },
  { id: 'P18', name: 'methodology note', metric: classMetric('review-methodology') },
  { id: 'P19', name: 'source list', metric: classMetric('review-source-list') },
  { id: 'P20', name: 'inline editorial media', metric: classMetric('review-inline-media') },
  { id: 'P21', name: 'article meta footer', metric: classMetric('review-meta-footer') },
  {
    id: 'P22',
    name: 'Article and Product schema',
    metric: booleanMetric((context) => context.schemas.has('Article') && context.schemas.has('Product')),
  },
];

const blogModules = [
  {
    id: 'B01',
    name: 'modern article layout',
    metric: booleanMetric((context) => (
      countClass(context, 'review-page') > 0
      && countClass(context, 'review-shell') > 0
      && countClass(context, 'review-article') > 0
    )),
  },
  { id: 'B02', name: 'single H1', metric: (context) => context.mainNodes.filter((node) => node.tagName === 'h1').length },
  { id: 'B03', name: 'author card', metric: classMetric('review-author-card') },
  { id: 'B04', name: 'published and updated dates', metric: classMetric('review-author-dates') },
  { id: 'B05', name: 'jump navigation', metric: classMetric('review-jumpbar') },
  {
    id: 'B06',
    name: 'visible FAQ',
    metric: visibleFaqItemMetric,
    minimum: 1,
  },
  { id: 'B07', name: 'methodology note', metric: classMetric('review-methodology') },
  { id: 'B08', name: 'source list', metric: classMetric('review-source-list') },
  { id: 'B09', name: 'inline editorial media', metric: classMetric('review-inline-media') },
  { id: 'B10', name: 'article meta footer', metric: classMetric('review-meta-footer') },
  { id: 'B11', name: 'Article schema', metric: booleanMetric((context) => context.schemas.has('Article')) },
];

const guideModules = [
  {
    id: 'G01',
    name: 'buying-guide layout',
    metric: booleanMetric((context) => (
      countClass(context, 'hub-hero') > 0
      && countClass(context, 'section') > 0
    )),
  },
  { id: 'G02', name: 'single H1', metric: (context) => context.mainNodes.filter((node) => node.tagName === 'h1').length },
  { id: 'G03', name: 'author card', metric: classMetric('review-author-card') },
  { id: 'G04', name: 'published and updated dates', metric: classMetric('review-author-dates') },
  { id: 'G05', name: 'jump navigation', metric: classMetric('review-jumpbar') },
  {
    id: 'G06',
    name: 'decision framework',
    metric: booleanMetric((context) => (
      countClass(context, 'machine-guide') > 0
      && countClass(context, 'machine-guide-form') > 0
      && countClass(context, 'machine-guide-result') > 0
    )),
  },
  {
    id: 'G07',
    name: 'inclusion and exclusion criteria',
    metric: booleanMetric((context) => {
      const text = visibleText(context.main).replace(/\s+/g, ' ');
      return /\b(?:inclusion|how we (?:chose|selected)|what we looked for)\b/i.test(text)
        && /\b(?:exclusion|what we (?:excluded|left out)|not included)\b/i.test(text);
    }),
  },
  {
    id: 'G08',
    name: 'linked recommendation shortlist',
    metric: booleanMetric((context) => {
      const picks = context.mainNodes.find((node) => hasClass(node, 'guide-picks'));
      return Boolean(picks) && descendants(picks, []).some((node) => (
        node.tagName === 'a'
        && /\/(?:espresso-machine|coffee-machine|grinder)\/[^/]+\/?$/.test(attribute(node, 'href'))
      ));
    }),
  },
  {
    id: 'G09',
    name: 'best-fit and avoid-if guidance',
    metric: booleanMetric((context) => {
      const picks = context.mainNodes.find((node) => hasClass(node, 'guide-picks'));
      const text = visibleText(picks).replace(/\s+/g, ' ');
      return /\b(?:best (?:fit|for)|good for|choose (?:this|it) if)\b/i.test(text)
        && /\b(?:avoid|skip|not for|look elsewhere if)\b/i.test(text);
    }),
  },
  { id: 'G10', name: 'quick comparison', metric: classMetric('comparison-table') },
  {
    id: 'G11',
    name: 'detailed comparison',
    metric: booleanMetric((context) => (
      countClass(context, 'review-table-detailed') > 0
      && countClass(context, 'review-comparison-details') > 0
    )),
  },
  {
    id: 'G12',
    name: 'category buying factors',
    metric: booleanMetric((context) => (
      countClass(context, 'principles-section') > 0
      && countClass(context, 'principle-grid') > 0
    )),
  },
  {
    id: 'G13',
    name: 'ownership cost and maintenance guidance',
    metric: booleanMetric((context) => {
      const text = visibleText(context.main).replace(/\s+/g, ' ');
      return /\b(?:ownership|running|ongoing|long-term) costs?\b/i.test(text)
        && /\b(?:maintenance|cleaning|descaling|serviceability)\b/i.test(text);
    }),
  },
  {
    id: 'G14',
    name: 'visible FAQ',
    metric: visibleFaqItemMetric,
    minimum: 1,
  },
  { id: 'G15', name: 'methodology note', metric: classMetric('review-methodology') },
  { id: 'G16', name: 'source list', metric: classMetric('review-source-list') },
  { id: 'G17', name: 'inline editorial media', metric: classMetric('review-inline-media') },
  { id: 'G18', name: 'article meta footer', metric: classMetric('review-meta-footer') },
  {
    id: 'G19',
    name: 'Article and BreadcrumbList schema',
    metric: booleanMetric((context) => context.schemas.has('Article') && context.schemas.has('BreadcrumbList')),
  },
];

const classify = (route) => {
  if (buyingGuideRoutes.has(route)) return 'buying-guide';
  if (blogRoutePattern.test(route)) return 'blog-article';
  if (productRoutePattern.test(route)) return 'product-review';
  return null;
};

const routeFromLocation = (location) => {
  const url = new URL(location);
  let route = decodeURIComponent(url.pathname);
  if (route === '/coffeedant') return '/';
  if (route.startsWith('/coffeedant/')) route = route.slice('/coffeedant'.length);
  return route || '/';
};

const outputForRoute = (route) => path.join(dist, route.replace(/^\//, ''), 'index.html');
const ratio = (value, benchmark) => `${((value / benchmark) * 100).toFixed(1)}%`;

const minimumFor = (module, benchmarkContext) => {
  if (module.minimum !== undefined) return module.minimum;
  const value = module.metric(benchmarkContext);
  return Math.max(1, value);
};

const moduleLegend = (modules, benchmarkContext) => modules.map((module) => ({
  ...module,
  minimum: minimumFor(module, benchmarkContext),
}));

const inspectArticle = ({ route, type, benchmarkWords, benchmarkContext, moduleSets }) => {
  const output = outputForRoute(route);
  if (!fs.existsSync(output)) {
    return {
      route,
      type,
      state: 'MISSING',
      words: 0,
      wordParity: false,
      modulesPassed: 0,
      modulesTotal: moduleSets[type].length,
      missing: ['built-html'],
    };
  }

  const context = route === referenceRoute
    ? benchmarkContext
    : contextFor(fs.readFileSync(output, 'utf8'));
  const words = wordCount(visibleText(context.main).replace(/\s+/g, ' ').trim());
  const modules = moduleSets[type];
  const missing = modules
    .filter((module) => module.metric(context) < module.minimum)
    .map((module) => module.id);
  const wordParity = words >= minimumEditorialWords && words <= maximumEditorialWords;

  return {
    route,
    type,
    state: wordParity && !missing.length ? 'PASS' : 'GAP',
    words,
    wordParity,
    modulesPassed: modules.length - missing.length,
    modulesTotal: modules.length,
    missing,
  };
};

const run = () => {
  const setupIssues = [];
  if (!fs.existsSync(dist)) setupIssues.push(`built output is missing: ${path.relative(root, dist)}`);
  if (!fs.existsSync(sitemapFile)) setupIssues.push(`built sitemap is missing: ${path.relative(root, sitemapFile)}`);

  const referenceFile = outputForRoute(referenceRoute);
  if (!fs.existsSync(referenceFile)) setupIssues.push(`reference output is missing: ${path.relative(root, referenceFile)}`);

  if (setupIssues.length) {
    console.log(`Canonical article parity audit (${strict ? 'strict' : 'baseline'} mode)`);
    for (const issue of setupIssues) console.log(`BLOCKED ${issue}`);
    console.log(strict ? 'Result: FAIL' : 'Result: BLOCKED (report-only; exit 0)');
    if (strict) process.exitCode = 1;
    return;
  }

  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const locations = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1]);
  const sitemapRoutes = locations.map(routeFromLocation);
  const duplicateRoutes = [...new Set(sitemapRoutes.filter((route, index) => sitemapRoutes.indexOf(route) !== index))];
  if (!locations.length) setupIssues.push('built sitemap contains no <loc> entries');
  if (duplicateRoutes.length) setupIssues.push(`built sitemap contains duplicate route(s): ${duplicateRoutes.join(', ')}`);

  const benchmarkContext = contextFor(fs.readFileSync(referenceFile, 'utf8'));
  const benchmarkWords = wordCount(visibleText(benchmarkContext.main).replace(/\s+/g, ' ').trim());
  if (!benchmarkContext.main) setupIssues.push('reference page has no main landmark');
  if (!benchmarkWords) setupIssues.push('reference page has no countable content');

  const productLegend = moduleLegend(productModules, benchmarkContext);
  const guideLegend = moduleLegend(guideModules, benchmarkContext);
  const blogLegend = moduleLegend(blogModules, benchmarkContext);
  const moduleSets = {
    'product-review': productLegend,
    'buying-guide': guideLegend,
    'blog-article': blogLegend,
  };

  const targets = sitemapRoutes
    .map((route) => ({ route, type: classify(route) }))
    .filter((item) => item.type);
  const reports = targets.map((item) => inspectArticle({
    ...item,
    benchmarkWords,
    benchmarkContext,
    moduleSets,
  }));

  console.log(`Canonical article parity audit (${strict ? 'strict' : 'baseline'} mode)`);
  console.log(`Sitemap: ${path.relative(root, sitemapFile)} (${locations.length} URLs)`);
  console.log(`Reference: ${referenceRoute} (${benchmarkWords} words)`);
  console.log(`Target: ${minimumEditorialWords}-${maximumEditorialWords} words plus every required module for the classified article type`);
  if (!strict) console.log('Baseline mode is report-only; parity gaps do not change the exit code.');

  console.log('\nProduct review modules (minimum benchmark count):');
  for (const module of productLegend) console.log(`  ${module.id} ${module.name} >=${module.minimum}`);
  console.log('\nBuying guide modules (minimum benchmark count):');
  for (const module of guideLegend) console.log(`  ${module.id} ${module.name} >=${module.minimum}`);
  console.log('\nBlog article modules (minimum benchmark count):');
  for (const module of blogLegend) console.log(`  ${module.id} ${module.name} >=${module.minimum}`);

  console.log('\nPer-URL parity:');
  for (const report of reports) {
    const missing = report.missing.length ? report.missing.join(',') : 'none';
    console.log(
      `${report.state} ${report.type} words=${report.words}/${benchmarkWords} `
      + `parity=${ratio(report.words, benchmarkWords)} modules=${report.modulesPassed}/${report.modulesTotal} `
      + `missing=${missing} ${report.route}`,
    );
  }

  const productReports = reports.filter((report) => report.type === 'product-review');
  const guideReports = reports.filter((report) => report.type === 'buying-guide');
  const blogReports = reports.filter((report) => report.type === 'blog-article');
  const passing = reports.filter((report) => report.state === 'PASS');
  const gaps = reports.filter((report) => report.state !== 'PASS');
  const outsideWordTarget = reports.filter((report) => !report.wordParity);
  const missingModules = reports.filter((report) => report.missing.length);

  console.log('\nSummary:');
  console.log(
    `  Audited: ${reports.length} (${productReports.length} product reviews, `
    + `${guideReports.length} buying guides, ${blogReports.length} blog articles)`,
  );
  console.log(`  Full parity: ${passing.length}`);
  console.log(`  Gaps: ${gaps.length}`);
  console.log(`  Outside ${minimumEditorialWords}-${maximumEditorialWords} words: ${outsideWordTarget.length}`);
  console.log(`  Missing one or more required modules: ${missingModules.length}`);
  for (const issue of setupIssues) console.log(`  Setup issue: ${issue}`);

  const failed = setupIssues.length > 0 || gaps.length > 0;
  if (strict && failed) {
    console.log('Result: FAIL');
    process.exitCode = 1;
  } else if (failed) {
    console.log('Result: BASELINE RECORDED (report-only; exit 0)');
  } else {
    console.log('Result: PASS');
  }
};

try {
  run();
} catch (error) {
  console.log(`Canonical article parity audit (${strict ? 'strict' : 'baseline'} mode)`);
  console.log(`BLOCKED ${error instanceof Error ? error.message : String(error)}`);
  console.log(strict ? 'Result: FAIL' : 'Result: BLOCKED (report-only; exit 0)');
  if (strict) process.exitCode = 1;
}
