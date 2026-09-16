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

for (const route of migratedLegacyPaths) {
  const output = path.join(dist, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(output)) {
    errors.push(`${route}: built route is missing`);
    continue;
  }

  const html = fs.readFileSync(output, 'utf8');
  const nodes = descendants(parse(html));
  const article = nodes.find((node) => node.tagName === 'article' && hasClass(node, 'legacy-migrated-article'));
  if (!article) {
    errors.push(`${route}: migrated article marker is missing`);
    continue;
  }

  const articleNodes = descendants(article, []);
  const images = articleNodes.filter((node) => node.tagName === 'img').length;
  const faqDropdowns = articleNodes.filter((node) => {
    if (node.tagName !== 'details') return false;
    const summary = node.childNodes?.find((child) => child.tagName === 'summary');
    return /faq/i.test(`${attribute(node, 'class')} ${attribute(node, 'id')} ${textContent(summary)}`);
  }).length;
  const redditOutboundLinks = articleNodes.filter((node) => (
    node.tagName === 'a' && /reddit(?:media)?\.com/i.test(attribute(node, 'href'))
  )).length;
  const redditEmbeds = articleNodes.filter((node) => (
    (node.tagName === 'iframe' || node.tagName === 'script') && /reddit/i.test(attribute(node, 'src'))
  )).length;

  if (images > 3) errors.push(`${route}: expected at most 3 article images, found ${images}`);
  if (faqDropdowns) errors.push(`${route}: found ${faqDropdowns} FAQ dropdown control(s)`);
  if (redditOutboundLinks) errors.push(`${route}: found ${redditOutboundLinks} outbound Reddit link(s)`);
  if (redditEmbeds) errors.push(`${route}: found ${redditEmbeds} external Reddit embed(s)`);

  reports.push({ route, images, faqDropdowns, redditOutboundLinks, redditEmbeds });
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${reports.length} migrated legacy pages.`);
for (const report of reports) {
  console.log(`${report.route} images=${report.images} faq-dropdowns=${report.faqDropdowns} reddit-outbound=${report.redditOutboundLinks}`);
}
