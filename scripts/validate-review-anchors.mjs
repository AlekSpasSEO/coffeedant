import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/legacy-review-anchors.json'), 'utf8'));
const observedFragments = JSON.parse(fs.readFileSync(path.join(root, 'scripts/fixtures/legacy-review-gsc-fragments.json'), 'utf8'));
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const walk = node => [node, ...(node.childNodes ?? []).flatMap(walk)];
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
const errors = [];
let checked = 0;
let renderedAliases = 0;
let checkedObservations = 0;
for (const [route, anchors] of Object.entries(manifest)) {
  const filename = path.join(root, 'dist', route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(filename)) { errors.push(`${route}: missing built review`); continue; }
  const nodes = walk(parse(fs.readFileSync(filename, 'utf8')));
  const byId = new Map();
  for (const node of nodes) { const id = attr(node, 'id'); if (id) { const matches = byId.get(id) ?? []; matches.push(node); byId.set(id, matches); } }
  for (const alias of Object.keys(anchors)) {
    const matches = byId.get(alias) ?? [];
    if (matches.length !== 1) errors.push(`${route}#${alias}: expected one preserved target, found ${matches.length}`);
    checked++;
  }
  for (const fragment of observedFragments[route] ?? []) {
    if ((byId.get(fragment) ?? []).length !== 1) errors.push(`${route}#${fragment}: indexed historical fragment no longer resolves uniquely`);
    checkedObservations++;
  }
  for (const node of nodes.filter(node => attr(node, 'data-legacy-anchor-target'))) {
    const target = attr(node, 'data-legacy-anchor-target');
    if ((byId.get(attr(node, 'id')) ?? []).length !== 1) errors.push(`${route}#${attr(node, 'id')}: duplicate alias`);
    let parent = node.parentNode;
    while (parent && !(target === 'summary' ? hasClass(parent, 'review-summary') : target === 'specifications' ? hasClass(parent, 'review-fact-strip') : attr(parent, 'id') === target)) parent = parent.parentNode;
    if (!parent) errors.push(`${route}#${attr(node, 'id')}: alias is outside its ${target} content`);
    renderedAliases++;
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Preserved ${checked} historical review targets and all ${checkedObservations} GSC fragment observations; ${renderedAliases} aliases point to matching content with unique IDs.`);
