import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {readFile} from 'node:fs/promises';
import {composeDirect} from '../compose-direct.mjs';
import {root,readJson,loadCache,policyHash,validateTranslation,parseHtml,slots} from '../core.mjs';

test('all ten ratio checks preserve complete frozen paragraphs in three directly authored editions', async()=>{
 const task=await readJson(path.join(root,'localization/authored/ratio-guide-batch-2.source.json'));
 const parts=await readJson(path.join(root,'localization/authored/ratio-checks-batch-2.parts.json'));
 const result=composeDirect(parts,task);
 assert.equal(Object.keys(result.translations).length,20);
 const output=await readJson(path.join(root,'localization/authored/ratio-checks-batch-2.json'));
 assert.deepEqual(output,result);
 const changed=structuredClone(parts);changed.chunks.result.source+=' Unapproved sentence.';
 assert.throws(()=>composeDirect(changed,task),/changed source/);
 const missing=structuredClone(parts);delete missing.chunks.method10.fr;
 assert.throws(()=>composeDirect(missing,task),/Missing authored/);
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of task.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${edition} missing ${segment.id}`);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('shared menu uses translated open/close labels and matching CSS/runtime breakpoints', async()=>{
 const header=await readFile(path.join(root,'src/components/MegaHeader.astro'),'utf8');
 assert(header.includes('.cd-header button, .cd-header a { font-family: inherit; }'));
 assert(!header.includes('font: inherit;'));
 assert(!header.includes('max-width: 1040px'));
 assert(!header.includes('max-width: 1200px'));
 assert.equal([...header.matchAll(/max-width: 1320px/g)].length,4);
 assert(header.includes("isOpen ? closeMenuLabel : openMenuLabel"));
 const labels=slots(parseHtml('<body><button data-menu-open-label="Open menu" data-menu-close-label="Close menu">Menu</button></body>'));
 for(const source of ['Open menu','Close menu'])assert(labels.some(s=>s.kind==='attribute'&&s.source===source));
 const task=await readJson(path.join(root,'localization/authored/shared-menu-labels-batch-2.source.json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  assert.notEqual(cache.segments[task.segments[0].id].text,'Close menu');
 }
});
