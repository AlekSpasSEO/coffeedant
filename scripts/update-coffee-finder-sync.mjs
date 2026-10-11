import { readFile, writeFile } from 'node:fs/promises';

const path = new URL('../src/data/coffee-finder-sync.json', import.meta.url);
const current = JSON.parse(await readFile(path, 'utf8'));
const updated = {
  ...current,
  lastCatalogSync: new Date().toISOString(),
};

await writeFile(path, `${JSON.stringify(updated, null, 2)}\n`);
console.log(`Coffee Finder catalog sync recorded at ${updated.lastCatalogSync}.`);
