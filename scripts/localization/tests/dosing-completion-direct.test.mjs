import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
import {composeDirect} from '../compose-direct.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('German and French dosing completion covers every immutable slot and all three structured answers',async()=>{
 const source=await get('dosing-brands-batch-29.source.json'),a=await get('dosing-brands-batch-29.json');
 assert.equal(source.segments.length,107);assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));assert.equal(a.snapshotHash,source.snapshotHash);
 assert.deepEqual(a.editions,['de','fr']);assert.deepEqual(a.preserveSource,[]);
 const covered=new Set(Object.keys(a.translations).map(i=>source.segments[i].source));assert(source.segments.every(s=>covered.has(s.source)));
 for(const e of a.editions){
  const cache=await loadCache(e);
  for(const s of source.segments){const entry=cache.segments[s.id];assert.equal(entry.source,s.source);assert.equal(entry.policyHash,policyHash);assert.equal(entry.provider,'codex-direct');assert.equal(validateTranslation(s.source,entry.text),entry.text);}
  for(const i of [102,104,106]){assert.equal(source.segments[i].kind,'json');assert.notEqual(cache.segments[source.segments[i].id].text,source.segments[i].source);}
  assert.equal(cache.routes[contentId('/journal/espresso-dosing/')].path,a.routes[e]['/journal/espresso-dosing/']);
 }
});

test('all ten complete practical checks assemble exact frozen paragraphs and retain diagnostic limitations',async()=>{
 const source=await get('dosing-brands-batch-29.source.json'),a=await get('dosing-brands-batch-29.json'),parts=await get('dosing-checks-batch-29.parts.json');
 const composed=composeDirect(parts,source);assert.equal(Object.keys(composed.translations).length,20);
 for(const [i,values]of Object.entries(composed.translations))assert.deepEqual(a.translations[i],values);
 for(const e of a.editions){
  assert(/keine universelle Regel|pas une règle universelle/.test(a.translations[94][e]));
  assert(/nicht als Behauptung|pas l’affirmation/.test(a.translations[99][e]));
  assert(/allein kein|pas à elle seule/.test(parts.chunks.headspaceIdea[e]));
  assert(/Bauart und Druckabbau|conception et dépressurisation/.test(parts.chunks.headspaceMechanism[e]));
  assert(/muss nicht|n’a pas besoin/.test(parts.chunks.decafMechanism[e]));
  assert(/nicht.*gleichzeitig|pas.*à la fois/.test(parts.chunks.controlled[e]));
  assert(a.translations[10][e].includes('275'));assert(a.translations[10][e].includes('66%'));
  for(const n of ['1:1','1:1.5'])assert(a.translations[18][e].includes(n));
  assert(a.translations[13][e].includes('5-6mm'));assert(a.translations[27][e].includes('0.1'));
  for(const n of ['$500','$5,000'])assert(a.translations[62][e].includes(n));
  assert(/fünftausend|cinq mille/.test(a.translations[62][e]));
 }
});

test('Brands schema completion reuses prior wording and cannot change the approved Dutch dosing text or URL',async()=>{
 const source=await get('dosing-brands-batch-29.source.json'),nl=await get('brands-completion-nl-29.json');
 assert.equal(nl.edition,'nl');assert.equal(nl.scope,'segments');assert.deepEqual(Object.keys(nl.translations),['0']);
 assert.equal(source.segments[0].source,'Coffee Equipment Brands: Browse 40 Manufacturers | Coffeedant');
 const cache=await loadCache('nl');assert.equal(cache.segments[source.segments[0].id].text,nl.translations[0]);
 assert.equal(cache.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
 assert(!nl.routes);
});
