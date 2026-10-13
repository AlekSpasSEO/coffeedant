import path from 'node:path';
import { root, loadCache, policyHash, validateTranslation, writeJson, interfaceSource, segmentId, getEdition } from './core.mjs';
import { collectSource } from './source.mjs';
import { readFile } from 'node:fs/promises';

export async function translationCoverage(ids = ['nl', 'de', 'fr']) {
  const source = await collectSource();
  const result = { sourcePages: source.pages.length, sourceSegments: source.segments.length, editions: [] };
  for (const id of ids) {
    const cache = await loadCache(id);
    const missing = new Set(source.segments.filter((segment) => {
      const entry = cache.segments[segment.id];
      if (!entry || entry.policyHash !== policyHash || entry.source !== segment.source) return true;
      try { validateTranslation(segment.source, entry.text); return false; } catch { return true; }
    }).map(({ id }) => id));
    const uiReady = Object.values(interfaceSource).every((text) => !missing.has(segmentId(text, 'interface')));
    const finderReady = source.finderSegments.every((key) => !missing.has(key));
    const pages = [];
    for (const page of source.pages) {
      const missingText = page.segments.filter((key) => missing.has(key)).length;
      const usesFinder = (await readFile(path.join(root, 'dist', page.file), 'utf8')).includes('data-coffee-finder');
      const route = cache.routes[page.id];
      pages.push({ sourcePath: page.sourcePath, path: route?.path ?? null, missingText,
        textComplete: missingText === 0, ready: missingText === 0 && uiReady && Boolean(route) && (!usesFinder || finderReady) });
    }
    result.editions.push({ edition: id, host: getEdition(id).host, translatedSegments: source.segments.length - missing.size,
      pendingSegments: missing.size, finderPendingSegments: source.finderSegments.filter((key) => missing.has(key)).length,
      completePageText: pages.filter(({ textComplete }) => textComplete).length,
      readyPages: pages.filter(({ ready }) => ready), pages,
      completeEdition: missing.size === 0 && pages.every(({ ready }) => ready) });
  }
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.join(root, 'scripts/localization/coverage.mjs')) {
  const report = await translationCoverage();
  await writeJson(path.join(root, '.localization/direct-coverage.json'), report);
  console.log(JSON.stringify({ ...report, editions: report.editions.map(({ pages, ...entry }) => entry) }, null, 2));
}
