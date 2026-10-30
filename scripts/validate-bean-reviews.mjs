import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/bean-review-manifest.json'), 'utf8'));
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const errors = [];
const descendants = (node, result = []) => { result.push(node); for (const child of node.childNodes ?? []) descendants(child, result); return result; };
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value ?? '';
const text = (node) => node.nodeName === '#text' ? node.value ?? '' : (node.childNodes ?? []).map(text).join(' ');
const expectedOrigin = 'https://coffeedant.com';
const base = process.env.CF_PAGES === '1' ? '/' : '/coffeedant/';

if (new Set(manifest.map((item) => item.slug)).size !== manifest.length) errors.push('Duplicate bean slugs');
if (new Set(manifest.map((item) => item.productId)).size !== manifest.length) errors.push('Duplicate bean product IDs');
for (const item of manifest) {
  if (!/^\/coffee-beans\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(item.slug)) errors.push(`Invalid bean route ${item.slug}`);
  if (!/^CD-BN-\d{6}$/.test(item.productId)) errors.push(`Invalid bean product ID ${item.productId}`);
  const canonical = `${expectedOrigin}${item.slug}`;
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`${item.slug}: missing sitemap entry`);
  const output = path.join(dist, item.slug.slice(1), 'index.html');
  if (!fs.existsSync(output)) { errors.push(`${item.slug}: missing built page`); continue; }
  const html = fs.readFileSync(output, 'utf8');
  const nodes = descendants(parse(html));
  const main = nodes.find((node) => node.tagName === 'main' && attr(node, 'class').includes('bean-review'));
  if (!main) { errors.push(`${item.slug}: missing bean review layout`); continue; }
  const scope = descendants(main, []);
  const headings = scope.filter((node) => node.tagName === 'h1');
  if (headings.length !== 1) errors.push(`${item.slug}: expected one H1`);
  const visible = text(main);
  if (!/has not bought, brewed or tasted/i.test(visible)) errors.push(`${item.slug}: missing research disclosure`);
  if (!/Image:/.test(visible)) errors.push(`${item.slug}: missing image credit`);
  if (!/Roasted On|roast date/i.test(visible)) errors.push(`${item.slug}: missing freshness guidance`);
  if (scope.filter((node) => node.tagName === 'img').length < 2) errors.push(`${item.slug}: missing credited hero or author image`);
  if (scope.filter((node) => node.tagName === 'article' && attr(node, 'class').includes('bean-faq')).length) errors.push(`${item.slug}: FAQ structure unexpectedly changed`);
  if (scope.filter((node) => node.tagName === 'h3' && /\?/.test(text(node))).length < 3) errors.push(`${item.slug}: fewer than three visible product-specific FAQ questions`);
  if (scope.filter((node) => node.tagName === 'li' && /^s\d+$/.test(attr(node, 'id'))).length < 7) errors.push(`${item.slug}: fewer than seven annotated sources`);
  const canonicalLink = nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
  if (attr(canonicalLink, 'href') !== canonical) errors.push(`${item.slug}: incorrect canonical URL`);
  const schema = nodes.filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json').map((node) => text(node));
  if (!schema.some((item) => item.includes('"Product"') && item.includes('"Article"') && item.includes('"BreadcrumbList"') && item.includes('"FAQPage"'))) errors.push(`${item.slug}: incomplete schema`);
  if (schema.some((item) => /aggregateRating|reviewRating/.test(item))) errors.push(`${item.slug}: numeric score on untested coffee`);
  if (item.slug === '/coffee-beans/counter-culture-fast-forward/') {
    const faq = schema.flatMap((value) => { const parsed = JSON.parse(value); return parsed['@graph'] ?? [parsed]; }).find((value) => value['@type'] === 'FAQPage');
    const visibleQuestions = scope.filter((node) => node.tagName === 'h3').map((node) => text(node).replace(/\s+/g, ' ').trim());
    for (const [question, answer] of [
      ['Are the origins fixed?', 'No. The origin mix rotates by roast-date period; match the actual bag date to the selector.'],
      ['Can I use it for drip as well as espresso?', 'Yes, Counter Culture names both auto-drip and espresso, but its 1:17 suggestion is a filter starting point. Dial espresso separately.'],
    ]) {
      if (!visibleQuestions.includes(question) || !faq?.mainEntity?.some((entry) => entry.name === question && entry.acceptedAnswer?.text === answer)) errors.push(`${item.slug}: origin and brew FAQ prompts must match their yes/no answers in visible text and schema`);
    }
  }
  const localLinks = scope.filter((node) => node.tagName === 'a').map((node) => attr(node, 'href')).filter((href) => href.startsWith(base) && !href.startsWith('//'));
  for (const href of localLinks) {
    const relative = href.slice(base.length).split(/[?#]/)[0];
    if (relative && !fs.existsSync(path.join(dist, relative, 'index.html')) && !fs.existsSync(path.join(dist, relative))) errors.push(`${item.slug}: broken internal link ${href}`);
  }
}
if (!fs.existsSync(path.join(dist, 'coffee-beans/index.html'))) errors.push('Missing bean category index');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Validated ${manifest.length} bean review(s), index, source evidence and schema.`);
