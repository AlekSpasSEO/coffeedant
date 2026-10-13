import path from 'node:path';
import { root, digest, policyHash, interfaceSource, segmentId, loadCache, translationFile,
  validateTranslation, safeRoute, writeJson, readJson, getEdition } from './core.mjs';
import { collectSource } from './source.mjs';

// Direct editorial translations use a frozen source snapshot, not positional
// indexes into a changing site. The normal incremental workflow reuses them.
export async function createDirectTask(sourcePath, name) {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Snapshot name must be a simple lowercase identifier');
  const source = await collectSource();
  const page = source.pages.find((entry) => entry.sourcePath === sourcePath);
  if (!page) throw new Error(`Unknown canonical source page: ${sourcePath}`);
  const byId = new Map(source.segments.map((entry) => [entry.id, entry]));
  const ids = [...page.segments];
  for (const value of Object.values(interfaceSource)) {
    const id = segmentId(value, 'interface'); if (!ids.includes(id)) ids.push(id);
  }
  const segments = ids.map((id) => byId.get(id));
  const task = { schemaVersion: 1, sourcePath, sourceHash: page.sourceHash, policyHash,
    segments, snapshotHash: digest(JSON.stringify(segments)) };
  const destination = path.join(root, `localization/authored/${name}.source.json`);
  await writeJson(destination, task);
  return task;
}

export async function importDirectTranslation(file) {
  const authored = await readJson(file);
  if (authored.schemaVersion !== 1 || !authored.translations || typeof authored.translations !== 'object' || Array.isArray(authored.translations)) throw new Error('Invalid authored translation file');
  const snapshotFile = path.resolve(path.dirname(file), authored.snapshot);
  if (path.dirname(snapshotFile) !== path.dirname(file)) throw new Error('Snapshot must be adjacent to authored translation');
  const task = await readJson(snapshotFile);
  if (task.policyHash !== policyHash || digest(JSON.stringify(task.segments)) !== task.snapshotHash) throw new Error('Stale or altered direct-translation snapshot');
  if (authored.snapshotHash !== task.snapshotHash) throw new Error('Translation does not match frozen source');
  const cache = structuredClone(await loadCache(authored.edition));
  const texts = new Map();
  for (const [index, text] of Object.entries(authored.translations)) {
    if (!/^(?:0|[1-9][0-9]*)$/.test(index)) throw new Error(`Invalid segment index: ${index}`);
    const segment = task.segments[Number(index)];
    if (!segment) throw new Error(`Unknown segment index: ${index}`);
    const translated = validateTranslation(segment.source, text);
    const prior = texts.get(segment.source);
    if (prior && prior !== translated) throw new Error(`Inconsistent repeated translation: ${index}`);
    texts.set(segment.source, translated);
  }
  for (const index of authored.preserveSource ?? []) {
    const segment = task.segments[index];
    if (!segment || texts.has(segment.source)) throw new Error(`Invalid verbatim approval: ${index}`);
    texts.set(segment.source, segment.source);
  }
  const missing = task.segments.map((segment, index) => ({ segment, index })).filter(({ segment }) => !texts.has(segment.source));
  if (missing.length) throw new Error(`Missing authored translations: ${missing.map(({ index }) => index).join(', ')}`);
  const current = await collectSource();
  const page = current.pages.find((entry) => entry.sourcePath === task.sourcePath);
  if (!page || page.sourceHash !== task.sourceHash) throw new Error('Page changed since editorial translation; review a new source snapshot');
  for (const segment of task.segments) cache.segments[segment.id] = {
    source: segment.source, text: texts.get(segment.source), policyHash,
    provider: 'codex-direct', authoredFile: path.relative(root, file).replaceAll('\\', '/'),
  };
  cache.routes[page.id] = { sourcePath: page.sourcePath, path: safeRoute(authored.route) };
  if (Object.values(cache.routes).filter((entry) => entry.path === authored.route).length !== 1) throw new Error('Localized route collision');
  await writeJson(translationFile(authored.edition), cache);
  console.log(`Saved ${task.segments.length} directly authored segments for ${getEdition(authored.edition).host}${authored.route}`);
  return { authored, task, cache, page };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.join(root, 'scripts/localization/direct.mjs')) {
  const [command, first, second] = process.argv.slice(2);
  if (command === 'export') {
    const task = await createDirectTask(first, second);
    console.log(`Frozen ${task.segments.length} source segments; snapshot ${task.snapshotHash}`);
  } else if (command === 'import') await importDirectTranslation(path.resolve(root, first));
  else throw new Error('Usage: direct.mjs export <source-path> <snapshot-name> | import <authored-json>');
}
