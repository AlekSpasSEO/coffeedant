import { readFile, writeFile } from 'node:fs/promises';
import { getDealSeason } from '../src/lib/deal-season.mjs';
const path = new URL('../src/data/deal-season.json', import.meta.url);
const season = getDealSeason();
const previous = JSON.parse(await readFile(path, 'utf8').catch(() => '{}'));
if (previous.key !== season.key) {
  await writeFile(path, `${JSON.stringify({ key: season.key, updatedAt: new Date().toISOString() }, null, 2)}\n`);
  console.log(`Deal coverage changed to ${season.key}; rebuild required.`);
} else console.log(`Deal coverage unchanged: ${season.key}.`);
