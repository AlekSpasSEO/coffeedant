import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {journalRedirects} from '../migrate-journal-links.mjs';
import { root, htmlFiles, routeFromFile, contentId, parseHtml, walk, attr, detach,
  slots, jsonSlots, textContent, segmentId, digest, policyHash, interfaceSource, readJson, writeJson, setAttr } from './core.mjs';

export const prepareRegionalDocument = (document) => {
  const canonical = walk(document).find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
  const policy = /^https:\/\/(?:www\.)?coffeedant\.com\/(?:privacy-policy|tos)\/$/.test(attr(canonical ?? {}, 'href') ?? '');
  for (const node of walk(document)) {
    const classes = (attr(node, 'class') ?? '').split(/\s+/);
    if (attr(node, 'data-amazon-recommendation') !== undefined
      || classes.some((value) => ['review-price', 'review-price-check', 'review-sticky-buy', 'review-sticky-offer'].includes(value))) detach(node);
    if (node.tagName === 'a' && (/\b(?:sponsored)\b/.test(attr(node, 'rel') ?? '')
      || /^https:\/\/(?:amzn\.to|(?:www\.)?amazon\.[^/]+)\//i.test(attr(node, 'href') ?? ''))) detach(node);
  }
  if (policy) for (const node of walk(document)) {
    if (!['p', 'li'].includes(node.tagName) || !node.childNodes?.some((child) => child.tagName)) continue;
    const descendants = walk(node).slice(1).filter(({ tagName }) => tagName);
    if (descendants.every(({ tagName }) => ['a', 'strong', 'b', 'em', 'i', 'span', 'br'].includes(tagName))) setAttr(node, 'data-localization-inline', '');
  }
  return document;
};
export const documentJson = (document) => walk(document)
  .filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')
  .map((node) => ({ node, value: JSON.parse(textContent(node)) }));

export const collectSource = async (directory = path.join(root, 'dist')) => {
  const segments = new Map();
  const add = (slot) => { if (!segments.has(slot.id)) segments.set(slot.id, { id: slot.id, source: slot.source, kind: slot.kind, context: slot.context }); };
  for (const [key, source] of Object.entries(interfaceSource)) add({ id: segmentId(source, 'interface'), source, kind: 'interface', context: key });
  const finder = await readJson(path.join(directory, 'coffee-finder.json'));
  const finderSegmentIds = new Set();
  for (const item of finder.items) {
    for (const key of ['description', 'bestFor', 'imageAlt']) {
      const value = item[key];
      if (!value) continue;
      const id = segmentId(value, 'finder');
      add({ id, source: value.trim(), kind: 'finder', context: `${item.brand} ${item.model}: ${key}` });
      finderSegmentIds.add(id);
    }
  }
  const pages = [];
  for (const file of await htmlFiles(directory)) {
    const sourcePath = routeFromFile(file, directory);
    if(journalRedirects[sourcePath])continue; // Redirects are not translation/content pages.
    const document = prepareRegionalDocument(parseHtml(await readFile(file, 'utf8')));
    const pageSlots = [...slots(document), ...documentJson(document).flatMap(({ value }) => jsonSlots(value))];
    pageSlots.forEach(add);
    const title = textContent(walk(document).find((node) => node.tagName === 'title') ?? { childNodes: [] });
    pages.push({ id: contentId(sourcePath), sourcePath, title,
      file: path.relative(directory, file).replaceAll('\\', '/'),
      segments: [...new Set(pageSlots.map(({ id }) => id))],
      sourceHash: digest(JSON.stringify(pageSlots.map(({ id }) => id))) });
  }
  return { schemaVersion: 1, policyHash, pages, segments: [...segments.values()], finderSegments: [...finderSegmentIds] };
};
if (process.argv[1] && path.resolve(process.argv[1]) === path.join(root, 'scripts/localization/source.mjs')) {
  const source = await collectSource();
  await writeJson(path.join(root, '.localization/source.json'), source);
  console.log(`Indexed ${source.pages.length} pages and ${source.segments.length} reusable translation segments.`);
}
