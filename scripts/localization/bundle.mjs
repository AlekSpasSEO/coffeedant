import { spawnSync } from 'node:child_process';
import { mkdir, cp, writeFile, mkdtemp, rm, readFile } from 'node:fs/promises';
import path from 'node:path';
import { root, config, loadCache, readJson } from './core.mjs';
import { buildRegional } from './build.mjs';
import { collectSource } from './source.mjs';
import { readySource } from './ready.mjs';
import { createRegionalRouter } from './router.mjs';
import { analyticsConsentResponse } from '../../src/lib/analytics-consent-policy.mjs';

const targets = config.editions.filter(({ id, published }) => id !== 'us' && published);
if (!targets.length) throw new Error('No regional editions are approved for public release. Complete translation/QA before enabling deployment.');
const build = spawnSync(process.execPath, [path.join(root, 'node_modules/astro/astro.js'), 'build'], { cwd: root, stdio: 'inherit', env: { ...process.env, CF_PAGES: '1' } });
if (build.status !== 0) process.exit(build.status ?? 1);
const source = await collectSource();
const releases = await readJson(path.join(root, 'localization/releases.json'));
const caches = new Map();
// Every language in this bundle goes live atomically. Cross-language links may
// point only to pages included in this same deployment, never stale manifests.
for (const edition of targets) {
  const cache = await loadCache(edition.id); caches.set(edition.id, cache);
  const selected = edition.publicationMode === 'ready-pages' ? await readySource(source, cache, path.join(root, 'dist')) : source;
  releases.editions[edition.id] = { verifiedPaths: Object.fromEntries(selected.pages.filter(({ sourcePath }) => sourcePath !== '/404/').map((page) => [page.id, cache.routes[page.id]?.path])) };
}
await mkdir(path.join(root, '.localization'), { recursive: true });
const temporary = await mkdtemp(path.join(root, '.localization/bundle-'));
const hosts = {}; const redirects = {};
for (const edition of targets) {
  const output = await buildRegional(edition.id, { source, cache: caches.get(edition.id), releases });
  const assetDirectory = path.join(temporary, '__editions', edition.id);
  await mkdir(path.dirname(assetDirectory), { recursive: true });
  await cp(output, assetDirectory, { recursive: true });
  hosts[edition.host] = edition.id;
  redirects[edition.id] = Object.fromEntries((await readFile(path.join(output, '_redirects'), 'utf8')).trim().split('\n').filter(Boolean)
    .map((line) => line.split(/\s+/).slice(0, 2)));
  // ASSETS serves explicit paths; the Worker handles public-path redirects.
  await rm(path.join(assetDirectory, '_redirects'), { force: true });
}
await writeFile(path.join(temporary, '_worker.js'), `const hosts=${JSON.stringify(hosts)};const redirects=${JSON.stringify(redirects)};const analyticsConsentResponse=${analyticsConsentResponse.toString()};export default (${createRegionalRouter.toString()})(hosts,redirects,analyticsConsentResponse);\n`);
await writeFile(path.join(temporary, '_routes.json'), JSON.stringify({ version: 1, include: ['/*'], exclude: [] }));
const destination = path.join(root, 'dist-regional/site');
await rm(destination, { recursive: true, force: true });
await mkdir(path.dirname(destination), { recursive: true });
await cp(temporary, destination, { recursive: true });
await rm(temporary, { recursive: true, force: true });
console.log(`Bundled ${targets.length} regional subdomains into one Pages deployment.`);
