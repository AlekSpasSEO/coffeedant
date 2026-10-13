import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serialize } from 'parse5';

export const root = fileURLToPath(new URL('../../', import.meta.url));
export const sourceOrigin = 'https://coffeedant.com';
export const promptVersion = 'coffeedant-localization-v1';
export const digest = (value) => createHash('sha256').update(value).digest('hex');
export const readJson = async (file, fallback) => {
  try { return JSON.parse(await readFile(file, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT' && fallback !== undefined) return fallback; throw error; }
};
export const writeJson = async (file, value) => {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
};
export const config = await readJson(path.join(root, 'localization/editions.json'));
export const interfaceSource = await readJson(path.join(root, 'localization/interface.json'));
export const glossary = await readJson(path.join(root, 'localization/glossary.json'));
export const policyHash = digest(JSON.stringify({ promptVersion, glossary }));
export const getEdition = (id) => {
  const edition = config.editions.find((entry) => entry.id === id);
  if (!edition) throw new Error(`Unknown edition: ${id}`);
  return edition;
};
export const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
export const attr = (node, name) => node.attrs?.find((entry) => entry.name === name)?.value;
export const setAttr = (node, name, value) => {
  node.attrs ??= [];
  const existing = node.attrs.find((entry) => entry.name === name);
  if (existing) existing.value = value;
  else node.attrs.push({ name, value });
};
export const textContent = (node) => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textContent).join('');
export const detach = (node) => {
  if (node.parentNode) node.parentNode.childNodes = node.parentNode.childNodes.filter((child) => child !== node);
};
export const appendHtml = (node, html) => {
  const fragment = parseFragment(html);
  for (const child of fragment.childNodes) { child.parentNode = node; node.childNodes.push(child); }
};
export const htmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : file.endsWith('.html') ? [file] : [];
  }))).flat().sort();
};
export const routeFromFile = (file, directory) => {
  const relative = path.relative(directory, file).replaceAll('\\', '/');
  if (relative === '404.html') return '/404/';
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}/`;
};
export const contentId = (sourcePath) => `page:${digest(sourcePath).slice(0, 20)}`;
const excluded = new Set(['script', 'style', 'code', 'pre']);
const readable = (text) => /\p{L}/u.test(text) && !/^https?:\/\/|^[\w.+-]+@[\w.-]+\.[a-z]+$/i.test(text.trim());
export const segmentId = (text, kind = 'text') => digest(`${promptVersion}\n${kind}\n${text.trim()}`);

// Translate DOM text/selected accessible attributes only. Never ask the model
// to rewrite markup, executable scripts, selectors, source URLs or identifiers.
export const slots = (document) => {
  const result = [];
  const visit = (node, blocked = false) => {
    blocked ||= excluded.has(node.tagName) || attr(node, 'translate') === 'no'
      || /(?:material-symbols|material-icons)/.test(attr(node, 'class') ?? '');
    if (blocked) return;
    if (node.tagName === 'noscript' && node.childNodes?.[0]?.nodeName === '#text') {
      const fragment = parseFragment(node.childNodes[0].value);
      for (const slot of slots(fragment)) result.push({ ...slot,
        set(text) { slot.set(text); node.childNodes[0].value = serialize(fragment); } });
      return;
    }
    const add = (value, kind, setter) => {
      if (!readable(value)) return;
      result.push({ id: segmentId(value, kind), source: value.trim(), kind,
        context: textContent(node.parentNode ?? node).trim().slice(0, 1800),
        set(text) { setter(`${value.match(/^\s*/)[0]}${text}${value.match(/\s*$/)[0]}`); } });
    };
    if (node.nodeName === '#text') add(node.value, 'text', (value) => { node.value = value; });
    for (const entry of node.attrs ?? []) {
      if (['alt', 'title', 'aria-label', 'placeholder', 'data-search', 'data-finder-load-failed', 'data-finder-load-fallback'].includes(entry.name)) add(entry.value, 'attribute', (value) => { entry.value = value; });
      if (node.tagName === 'meta' && entry.name === 'content'
        && ['description', 'og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description', 'twitter:image:alt'].includes(attr(node, 'name') ?? attr(node, 'property'))) {
        add(entry.value, 'metadata', (value) => { entry.value = value; });
      }
    }
    for (const child of node.childNodes ?? []) visit(child, blocked);
  };
  visit(document);
  return result;
};
export const numericFacts = (text) => [...text.matchAll(/\d+(?:[.,]\d+)*/g)].map(([value]) => value).sort();
export const validateTranslation = (source, translated) => {
  if (typeof translated !== 'string' || !translated.trim()) throw new Error('Empty translation');
  const literalTags = (value) => [...value.matchAll(/<\/?[a-z][^>]*>/gi)].map(([tag]) => tag);
  if (JSON.stringify(literalTags(source)) !== JSON.stringify(literalTags(translated))) throw new Error('Translation introduced or changed HTML-like source text');
  if (JSON.stringify(numericFacts(source)) !== JSON.stringify(numericFacts(translated))) throw new Error('Translation changed numeric facts');
  for (const token of [...source.matchAll(/\{[a-zA-Z]+\}|https?:\/\/[^\s]+|\b[A-Z]{1,6}\d[A-Z\d./-]*\b/g)].map(([value]) => value)) {
    if (!translated.includes(token)) throw new Error('Translation changed a protected identifier or placeholder');
  }
  for (const brand of glossary.preserve) {
    if (source.includes(brand) && !translated.includes(brand)) throw new Error(`Translation changed protected term: ${brand}`);
  }
  return translated.trim();
};
export const safeRoute = (value) => {
  if (typeof value !== 'string' || value !== value.toLowerCase() || !/^\/(?:[\p{L}\p{N}-]+\/)*$/u.test(value)
    || value.split('/').some((segment) => segment === '.' || segment === '..')) throw new Error('Unsafe localized route');
  return value;
};
export const normalizeGeneratedRoute = (value) => {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Empty localized route');
  let route = value.trim();
  if (['"', "'", '`'].includes(route[0]) && route.at(-1) === route[0]) route = route.slice(1, -1).trim();
  try { route = decodeURIComponent(route); } catch { throw new Error('Invalid localized route encoding'); }
  if (/[:?#\\\u0000-\u001f\u007f]/.test(route) || route.startsWith('//')) throw new Error('Unsafe localized route destination');
  route = route.normalize('NFC').toLowerCase().replace(/[’']/g, '').replace(/[ _–—]+/g, '-');
  if (!route.startsWith('/')) route = `/${route}`;
  if (!route.endsWith('/')) route += '/';
  return safeRoute(route);
};
export const translationFile = (id) => path.join(root, `localization/translations/${getEdition(id).id}.json`);
export const emptyCache = (edition) => ({ schemaVersion: 1, edition, policyHash, segments: {}, routes: {} });
export const loadCache = async (id) => {
  const cache = await readJson(translationFile(id), emptyCache(id));
  if (cache.schemaVersion !== 1 || cache.edition !== id) throw new Error(`Invalid translation cache for ${id}`);
  return cache;
};
export const translatedText = (cache, source, kind = 'text') => {
  const entry = cache.segments[segmentId(source, kind)];
  if (!entry || entry.source !== source.trim() || entry.policyHash !== policyHash) throw new Error(`Missing/current translation: ${segmentId(source, kind).slice(0, 12)}`);
  return validateTranslation(source.trim(), entry.text);
};
export const translateDom = (document, cache) => {
  for (const slot of slots(document)) slot.set(translatedText(cache, slot.source, slot.kind));
};
export const jsonTextFields = new Set(['name', 'description', 'headline', 'articleBody', 'alternativeHeadline', 'caption', 'text']);
export const jsonSlots = (object) => {
  const result = [];
  const visit = (value, key, parent) => {
    if (typeof value === 'string' && jsonTextFields.has(key) && readable(value)) {
      result.push({ id: segmentId(value, 'json'), source: value.trim(), kind: 'json', context: key,
        set(text) { parent[key] = text; } });
    } else if (value && typeof value === 'object') {
      for (const [childKey, child] of Object.entries(value)) visit(child, childKey, value);
    }
  };
  visit(object);
  return result;
};
export const parseHtml = parse;
export const serializeHtml = serialize;
