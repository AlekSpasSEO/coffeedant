import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { translatedText, safeRoute } from './core.mjs';

// Publication is gated per page: never render an untranslated block as English.
export async function readySource(source, cache, directory) {
  const missing = new Set(source.segments.filter((segment) => {
    try { translatedText(cache, segment.source, segment.kind); return false; }
    catch { return true; }
  }).map(({ id }) => id));
  const uiReady = source.segments.filter(({ kind }) => kind === 'interface').every(({ id }) => !missing.has(id));
  const finderReady = source.finderSegments.every((id) => !missing.has(id));
  const pages = [];
  let includeFinder = false;
  for (const page of source.pages) {
    const route = cache.routes[page.id];
    if (!uiReady || page.segments.some((id) => missing.has(id)) || route?.sourcePath !== page.sourcePath) continue;
    try { safeRoute(route.path); } catch { continue; }
    const usesFinder = (await readFile(path.join(directory, page.file), 'utf8')).includes('data-coffee-finder');
    if (usesFinder && !finderReady) continue;
    includeFinder ||= usesFinder;
    pages.push(page);
  }
  const ids = new Set(pages.flatMap(({ segments }) => segments));
  if (includeFinder) for (const id of source.finderSegments) ids.add(id);
  return { ...source, pages, finderSegments: includeFinder ? source.finderSegments : [],
    segments: source.segments.filter(({ id, kind }) => ids.has(id) || kind === 'interface') };
}
