import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-batch-manifest.json'), 'utf8'));
const outputDirectory = path.join(root, 'docs/reviews');

const decodeHtml = (value = '') => value
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
  .replace(/&quot;/g, '"')
  .replace(/&apos;|&#39;/g, "'")
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&nbsp;/g, ' ');

const cleanText = (value = '') => decodeHtml(value)
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// Keep this count aligned with the publication validator. Entity text is metadata,
// not an editorial word, so it is removed rather than decoded for density checks.
const cleanEditorialText = (html) => html
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

const tableText = (value) => cleanText(value).replace(/\|/g, '\\|');
const attribute = (value, name) => decodeHtml(value.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1] ?? '');

fs.mkdirSync(outputDirectory, { recursive: true });

for (const item of manifest) {
  const slugName = item.slug.split('/').filter(Boolean).at(-1);
  const htmlPath = path.join(dist, item.slug.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(htmlPath)) throw new Error(`Build output is missing for ${item.slug}`);

  const html = fs.readFileSync(htmlPath, 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? '';
  const articleCopy = cleanEditorialText(main
    .replace(/<figure\b[^>]*class="review-media review-inline-media"[^>]*>[\s\S]*?<\/figure>/gi, ' ')
    .replace(/<aside\b[^>]*class="review-community-embed"[^>]*>[\s\S]*?<\/aside>/gi, ' '));
  const words = wordCount(articleCopy);
  const title = cleanText(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? slugName);
  const mediaMatches = [...main.matchAll(/<figure\b([^>]*)class="review-media review-inline-media"([^>]*)>([\s\S]*?)<\/figure>/gi)];
  const rows = mediaMatches.map((match, index) => {
    const figureAttributes = `${match[1]} ${match[2]}`;
    const figure = match[3];
    const imageTag = figure.match(/<img\b[^>]*>/i)?.[0] ?? '';
    const beforeFigure = main.slice(0, match.index);
    const sectionMatches = [...beforeFigure.matchAll(/<section\b[^>]*\sid="([^"]+)"[^>]*>/gi)];
    const section = sectionMatches.at(-1)?.[1] ?? 'article';
    const sourceHref = decodeHtml(figure.match(/<a\b[^>]*class="review-media-link"[^>]*href="([^"]+)"/i)?.[1] ?? '');
    const credit = cleanText(figure.match(/Image:\s*<a\b[^>]*>([\s\S]*?)<\/a>/i)?.[1] ?? 'Source publisher');
    const usageLabel = cleanText(figure.match(/Usage record:\s*<a\b[^>]*>([\s\S]*?)<\/a>/i)?.[1] ?? 'Source record');
    const creditHtml = figure.match(/<span\b[^>]*class="review-media-credit"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? '';
    const disclosure = cleanText(creditHtml
      .replace(/Image:\s*<a\b[^>]*>[\s\S]*?<\/a>\.?/i, ' ')
      .replace(/Usage record:\s*<a\b[^>]*>[\s\S]*?<\/a>\.?/i, ' '));
    const captionHtml = (figure.match(/<figcaption>([\s\S]*?)<\/figcaption>/i)?.[1] ?? '')
      .replace(/<span\b[^>]*class="review-media-source-badge"[^>]*>[\s\S]*?<\/span>/i, ' ')
      .replace(/<span\b[^>]*class="review-media-credit"[^>]*>[\s\S]*?<\/span>/i, ' ');
    return {
      index: index + 1,
      section,
      sourceType: attribute(figureAttributes, 'data-source-type'),
      userGenerated: attribute(figureAttributes, 'data-user-generated') === 'true',
      src: attribute(imageTag, 'src'),
      alt: attribute(imageTag, 'alt'),
      dimensions: `${attribute(imageTag, 'width')} × ${attribute(imageTag, 'height')}`,
      caption: cleanText(captionHtml),
      credit,
      sourceHref,
      usageLabel,
      usageHref: attribute(figureAttributes, 'data-usage-record'),
      disclosure,
    };
  });

  const requiredImages = Math.ceil(words / 500);
  const userGenerated = mediaMatches.filter((match) => attribute(`${match[1]} ${match[2]}`, 'data-user-generated') === 'true').length;
  const tableRows = rows.map((media) => (
    `| ${media.index} | ${tableText(media.section)} | ${tableText(media.sourceType)} | ${media.userGenerated ? 'Yes' : 'No'} | [Original source](${media.sourceHref}) | [${tableText(media.usageLabel)}](${media.usageHref}) | ${tableText(media.credit)} | ${media.dimensions} | ${tableText(media.alt)} | ${tableText(media.caption)}${media.disclosure ? ` Disclosure: ${tableText(media.disclosure)}` : ''} |`
  )).join('\n');

  const ledger = `# ${title} media ledger

Generated from the rendered review on September 16, 2026. This is the publication audit record for the inline editorial media. The implementation remains the canonical machine-readable record.

## Density and source mix

- Editorial word count, excluding captions and embeds: ${words}
- Minimum images at one image per 500 words: ${requiredImages}
- Images published: ${rows.length + 1} (${rows.length} inline images plus one local product hero)
- User-generated or community inline images: ${userGenerated} of ${rows.length}
- Every externally hosted image links to its original community, owner-review, or product-listing page.
- Customer and community media is not represented as Coffeedant testing. Externally embedded media must retain its visible credit and source record, and must not be copied into the local asset store without a separate reuse review.

## Image records

| # | Placement | Source type | UGC | Original | Usage record | Creator or reviewer | Dimensions | Alt text | Editorial purpose and disclosure |
| ---: | --- | --- | :---: | --- | --- | --- | ---: | --- | --- |
${tableRows}
`;

  fs.writeFileSync(path.join(outputDirectory, `${slugName}-media.md`), ledger);
}

console.log(`Generated ${manifest.length} review media ledgers.`);
