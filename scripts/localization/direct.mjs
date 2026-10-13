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
  const existing = await readJson(destination, null);
  if (existing && existing.snapshotHash !== task.snapshotHash) throw new Error('Snapshot name is already frozen; choose a new name instead of overwriting authored evidence');
  await writeJson(destination, task);
  return task;
}

export async function importDirectTranslation(file, options = {}) {
  const authored = options.authored ?? await readJson(file);
  if (Array.isArray(authored.editions)) {
    if (options.authored || new Set(authored.editions).size !== authored.editions.length || !authored.editions.length) throw new Error('Invalid grouped editions');
    const prepared = [];
    const source = await collectSource();
    for (const edition of authored.editions) {
      if (edition === 'us') throw new Error('The source edition cannot be translated');
      getEdition(edition);
      const single = { ...authored, editions: undefined, edition, routes: authored.routes?.[edition],
        translations: Object.fromEntries(Object.entries(authored.translations).map(([index, values]) => [index, values[edition]])) };
      prepared.push(await importDirectTranslation(file, { authored: single, dryRun: true, current: source }));
    }
    for (const item of prepared) await writeJson(translationFile(item.authored.edition), item.cache);
    console.log(`Saved validated directly authored batch for ${authored.editions.join(', ')}; no edition marked complete or published.`);
    return prepared;
  }
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
  const partial = authored.scope === 'segments';
  if (authored.scope && !partial) throw new Error('Unsupported direct-translation scope');
  const missing = task.segments.map((segment, index) => ({ segment, index })).filter(({ segment }) => !texts.has(segment.source));
  if (missing.length && !partial) throw new Error(`Missing authored translations: ${missing.map(({ index }) => index).join(', ')}`);
  const current = options.current ?? await collectSource();
  const page = current.pages.find((entry) => entry.sourcePath === task.sourcePath);
  if (!partial && (!page || page.sourceHash !== task.sourceHash)) throw new Error('Page changed since editorial translation; review a new source snapshot');
  if (!texts.size) throw new Error('Empty authored batch');
  const liveIds = new Set(current.segments.map(({ id }) => id));
  for (const segment of task.segments.filter(({ source }) => texts.has(source))) if (!liveIds.has(segment.id)) throw new Error('An authored source segment is no longer current');
  // Matching exact source strings can share editorial wording across DOM/JSON
  // kinds. Each destination keeps its own kind-derived ID and factual validation.
  const imported = current.segments.filter(({ source }) => texts.has(source));
  for (const segment of imported) cache.segments[segment.id] = {
    source: segment.source, text: texts.get(segment.source), policyHash,
    provider: 'codex-direct', authoredFile: path.relative(root, file).replaceAll('\\', '/'),
  };
  const routes = partial ? authored.routes ?? {} : { [page.sourcePath]: authored.route };
  for (const [sourcePath, target] of Object.entries(routes)) {
    const sourcePage = current.pages.find((entry) => entry.sourcePath === sourcePath);
    if (!sourcePage) throw new Error(`Unknown authored route: ${sourcePath}`);
    if (cache.routes[sourcePage.id] && cache.routes[sourcePage.id].path !== target) throw new Error('An existing localized URL must not be silently renamed');
    cache.routes[sourcePage.id] = { sourcePath, path: safeRoute(target) };
  }
  const targets = Object.values(cache.routes).map(({ path }) => path);
  if (new Set(targets).size !== targets.length) throw new Error('Localized route collision');
  cache.policyHash = policyHash;
  if (options.dryRun) return { authored, task, cache, page };
  await writeJson(translationFile(authored.edition), cache);
  console.log(`Saved ${imported.length} current directly authored segments for ${getEdition(authored.edition).host}${partial ? ' (incremental batch; not a completed edition)' : authored.route}`);
  return { authored, task, cache, page };
}

export async function createDirectBatch(name, paths, edition) {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Snapshot name must be a simple lowercase identifier');
  const source = await collectSource();
  const pages = paths.filter((sourcePath) => sourcePath !== '@finder').map((sourcePath) => {
    const page = source.pages.find((entry) => entry.sourcePath === sourcePath);
    if (!page) throw new Error(`Unknown canonical source page: ${sourcePath}`);
    return page;
  });
  const cache = edition ? await loadCache(edition) : null;
  const ids = new Set(pages.flatMap(({ segments }) => segments));
  if (paths.includes('@finder')) for (const id of source.finderSegments) ids.add(id);
  const segments = source.segments.filter(({ id, kind, source: text }) => {
    if (!ids.has(id) && kind !== 'interface') return false;
    const entry = cache?.segments[id];
    if (!entry || entry.source !== text || entry.policyHash !== policyHash) return true;
    try { validateTranslation(text, entry.text); return false; } catch { return true; }
  });
  const task = { schemaVersion: 1, sourcePages: pages.map(({ sourcePath, sourceHash }) => ({ sourcePath, sourceHash })), policyHash, segments, snapshotHash: digest(JSON.stringify(segments)) };
  const destination = path.join(root, `localization/authored/${name}.source.json`);
  const existing = await readJson(destination, null);
  if (existing && existing.snapshotHash !== task.snapshotHash) throw new Error('Batch snapshot is already frozen; choose a new batch name');
  await writeJson(destination, task);
  return task;
}

export async function reuseDirectWording(edition) {
  const cache = await loadCache(edition);
  const current = await collectSource();
  const reusable = new Map();
  for (const entry of Object.values(cache.segments)) {
    if (entry.policyHash !== policyHash || entry.provider !== 'codex-direct') continue;
    try { validateTranslation(entry.source, entry.text); } catch { continue; }
    const prior = reusable.get(entry.source);
    if (prior && prior.text !== entry.text) reusable.set(entry.source, { ambiguous: true });
    else if (!prior?.ambiguous) reusable.set(entry.source, entry);
  }
  let reused = 0;
  for (const segment of current.segments) {
    if (cache.segments[segment.id]?.policyHash === policyHash) continue;
    const entry = reusable.get(segment.source);
    if (!entry || entry.ambiguous) continue;
    cache.segments[segment.id] = { ...entry, source: segment.source, text: validateTranslation(segment.source, entry.text) };
    reused++;
  }
  await writeJson(translationFile(edition), cache);
  console.log(`Reused ${reused} exact already-authored strings across source kinds for ${edition}; no new translations inferred.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.join(root, 'scripts/localization/direct.mjs')) {
  const [command, first, second] = process.argv.slice(2);
  if (command === 'export') {
    const task = await createDirectTask(first, second);
    console.log(`Frozen ${task.segments.length} source segments; snapshot ${task.snapshotHash}`);
  } else if (command === 'batch-export') {
    const task = await createDirectBatch(first, second.split(','), process.argv[5]);
    console.log(`Frozen ${task.segments.length} missing source segments; snapshot ${task.snapshotHash}`);
  } else if (command === 'reuse') await reuseDirectWording(first);
  else if (command === 'import') await importDirectTranslation(path.resolve(root, first));
  else throw new Error('Usage: direct.mjs export <source-path> <snapshot-name> | batch-export <name> <comma-separated-paths> [edition] | import <authored-json>');
}
