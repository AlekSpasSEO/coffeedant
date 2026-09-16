import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const migrationBatches = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-migration-batches.json'), 'utf8'));
const migratedLegacyPaths = migrationBatches.batches.slice(2).flat();
const errors = [];
const reports = [];

const attribute = (node, name) => node.attrs?.find((item) => item.name === name)?.value ?? '';
const textContent = (node) => (
  node?.nodeName === '#text'
    ? node.value ?? ''
    : (node?.childNodes ?? []).map(textContent).join(' ')
);
const descendants = (node, nodes = []) => {
  nodes.push(node);
  for (const child of node.childNodes ?? []) descendants(child, nodes);
  return nodes;
};
const hasClass = (node, className) => attribute(node, 'class').split(/\s+/).includes(className);
const hasClassMatching = (node, pattern) => attribute(node, 'class').split(/\s+/).some((name) => pattern.test(name));
const isFaqDropdown = (node) => {
  if (node.tagName !== 'details') return false;
  const summary = node.childNodes?.find((child) => child.tagName === 'summary');
  let context = `${attribute(node, 'class')} ${attribute(node, 'id')} ${textContent(summary)}`;
  for (let parent = node.parentNode; parent; parent = parent.parentNode) {
    context += ` ${attribute(parent, 'class')} ${attribute(parent, 'id')}`;
    if (parent.tagName === 'article' || parent.tagName === 'main') break;
  }
  return /faq|frequently.asked/i.test(context);
};

for (const route of migratedLegacyPaths) {
  const output = path.join(dist, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(output)) {
    errors.push(`${route}: built route is missing`);
    continue;
  }

  const html = fs.readFileSync(output, 'utf8');
  const nodes = descendants(parse(html));
  const legacyArticle = nodes.find((node) => node.tagName === 'article' && hasClass(node, 'legacy-migrated-article'));
  const main = nodes.find((node) => node.tagName === 'main');
  const mainNodes = main ? new Set(descendants(main, [])) : new Set();
  const articles = legacyArticle
    ? [legacyArticle]
    : nodes.filter((node) => node.tagName === 'article' && mainNodes.has(node));
  const scopes = articles.length ? articles : (main ? [main] : []);
  if (!scopes.length) {
    errors.push(`${route}: page content container is missing`);
    continue;
  }

  const scopeNodes = scopes.flatMap((scope) => descendants(scope, []));
  const imageCounts = articles.map((article) => descendants(article, []).filter((node) => node.tagName === 'img').length);
  const images = imageCounts.length ? Math.max(...imageCounts) : 0;
  const faqDropdowns = scopeNodes.filter(isFaqDropdown).length;
  const redditElements = scopeNodes.filter((node) => (
    hasClassMatching(node, /(?:reddit|community-(?:evidence|embed))/i)
      || (node.tagName === 'blockquote' && /reddit/i.test(attribute(node, 'data-embed')))
  ));
  const redditOutboundLinks = redditElements.flatMap((node) => descendants(node, [])).filter((node) => (
    node.tagName === 'a' && /reddit(?:media)?\.com/i.test(attribute(node, 'href'))
  )).length;
  const redditEmbeds = scopeNodes.filter((node) => (
    (node.tagName === 'iframe' || node.tagName === 'script') && /reddit/i.test(attribute(node, 'src'))
  )).length;

  imageCounts.forEach((count, index) => {
    if (count > 3) errors.push(`${route}: article ${index + 1} has ${count} images; expected at most 3`);
  });
  if (faqDropdowns) errors.push(`${route}: found ${faqDropdowns} FAQ dropdown control(s)`);
  if (redditOutboundLinks) errors.push(`${route}: found ${redditOutboundLinks} outbound Reddit link(s)`);
  if (redditEmbeds) errors.push(`${route}: found ${redditEmbeds} external Reddit embed(s)`);

  reports.push({ route, images, faqDropdowns, redditOutboundLinks, redditEmbeds, mode: legacyArticle ? 'legacy' : 'generated' });
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${reports.length} migrated Coffeedant pages.`);
for (const report of reports) {
  console.log(`${report.route} mode=${report.mode} max-article-images=${report.images} faq-dropdowns=${report.faqDropdowns} reddit-outbound=${report.redditOutboundLinks}`);
}
