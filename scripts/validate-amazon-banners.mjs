import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-batch-manifest.json'), 'utf8'));
const expectedSlugs = new Set([...manifest.map((review) => review.slug), '/espresso-machine/breville-bambino/']);
const attribute = (node, name) => node.attrs?.find((attr) => attr.name === name)?.value;
const descendants = (node) => [node, ...(node.childNodes ?? []).flatMap(descendants)];
const files = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? files(file) : file.endsWith('.html') ? [file] : [];
});
const errors = [];
const families = {};
const seen = new Set();

for (const file of files(dist)) {
  const nodes = descendants(parse(fs.readFileSync(file, 'utf8')));
  const banners = nodes.filter((node) => node.tagName === 'aside' && attribute(node, 'data-amazon-recommendation'));
  const review = nodes.find((node) => node.tagName === 'main' && attribute(node, 'data-product-id'));
  if (!review) {
    if (banners.length) errors.push(`${file}: banners outside a product review`);
    continue;
  }
  const slug = `/${path.relative(dist, path.dirname(file)).split(path.sep).join('/')}/`;
  seen.add(slug);
  const fail = (message) => errors.push(`${slug}: ${message}`);
  if (!expectedSlugs.has(slug)) fail('unexpected product review');
  if (banners.length !== 3) fail(`expected 3 banners, found ${banners.length}`);
  if (new Set(banners.map((banner) => attribute(banner, 'data-amazon-recommendation'))).size !== 3) fail('duplicate banner placement');
  for (const banner of banners) {
    const children = descendants(banner);
    const placement = attribute(banner, 'data-amazon-recommendation');
    const products = children.filter((node) => node.tagName === 'article');
    if (products.length !== (placement === 'setup' ? 2 : 1)) fail(`${placement}: missing product cards`);
    const title = attribute(banner, 'aria-labelledby');
    if (!children.some((node) => attribute(node, 'id') === title)) fail(`${placement}: missing accessible heading`);
    for (const image of children.filter((node) => node.tagName === 'img')) {
      if (!attribute(image, 'alt')) fail(`${placement}: image missing alt text`);
      if (!/^https:\/\/m\.media-amazon\.com\//.test(attribute(image, 'src') ?? '')) fail(`${placement}: image must use Amazon API URL`);
    }
    for (const link of children.filter((node) => node.tagName === 'a')) {
      const url = new URL(attribute(link, 'href'));
      if (url.hostname !== 'www.amazon.com' || !url.pathname.startsWith('/dp/')) fail(`${placement}: invalid product URL`);
      if (url.searchParams.get('tag') !== 'coffeedant03-20') fail(`${placement}: missing affiliate attribution`);
      if (!/sponsored/.test(attribute(link, 'rel') ?? '')) fail(`${placement}: missing sponsored link disclosure`);
    }
  }
  const ids = nodes.map((node) => attribute(node, 'id')).filter(Boolean);
  if (new Set(ids).size !== ids.length) fail('duplicate page IDs');
  const family = slug.split('/')[1];
  families[family] = (families[family] ?? 0) + 1;
}
for (const slug of expectedSlugs) if (!seen.has(slug)) errors.push(`${slug}: review missing from build`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Verified ${seen.size * 3} Amazon banners across ${seen.size} product reviews: ${JSON.stringify(families)}.`);
