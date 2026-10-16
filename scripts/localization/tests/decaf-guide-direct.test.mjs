import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';

test('the entire decaf buying guide covers its frozen source and all seven structured answers in NL DE FR',async()=>{
 const source=await readJson(path.join(root,'localization/authored/decaf-guide-batch-17.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/decaf-guide-batch-17.json'));
 assert.equal(source.segments.length,191);assert.equal(new Set(source.segments.map(s=>s.source)).size,172);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));assert.equal(authored.snapshotHash,source.snapshotHash);
 const kept=authored.preserveSource.map(i=>source.segments[i].source);
 assert.equal(kept.length,5);assert.equal(new Set(kept).size,5);assert(kept.every(s=>s.endsWith(' ↗')));
 const covered=new Set([...kept,...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);assert.equal(entry.provider,'codex-direct');
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
  for(const index of [178,180,182,184,186,188,190]){
   const segment=source.segments[index];assert.equal(segment.kind,'json');assert.notEqual(cache.segments[segment.id].text,segment.source);
  }
  const page=source.sourcePages[0].sourcePath;
  assert.equal(cache.routes[contentId(page)].path,authored.routes[edition][page]);
  if(edition==='nl')assert.equal(cache.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
 }
});

test('decaf guide preserves separate recipes, qualified health/process claims, no tasting and explicit dated US comparisons',async()=>{
 const source=await readJson(path.join(root,'localization/authored/decaf-guide-batch-17.source.json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=i=>cache.segments[source.segments[i].id].text;
  for(const n of ['18','45','1:2.5','20','360'])assert(text(106).includes(n));
  for(const n of ['1:17','19.5','1:2','1:15','1:16'])assert(text(107).includes(n));
  assert(/geen extracties van Coffeedant|keine Coffeedant-Extraktionen|pas des extractions Coffeedant/.test(text(107)));
  assert(/Neem de filterverhouding niet|Übertragen Sie das Filterverhältnis nicht|Ne transposez pas le ratio filtre/.test(text(106)));
  assert(/niet een geïmpliceerde|keine implizite|pas une supériorité/.test(text(43)));
  assert(text(42).includes('2–15'));
  assert(/kan niet als meting|nicht als Messung|ne peut pas servir de mesure/.test(text(42)));
  assert(/geen claim|keine Behauptung|pas l’affirmation/.test(text(111)));
  assert(/niet geproefd|nicht verkostet|ne les a pas goûtés/.test(text(140)));
  for(const n of ['$18.50','$19.50','$20','340','18','$1–$1.50'])assert(text(112).includes(n));
  assert(/niet inbegrepen|nicht enthalten|n’étaient pas inclus/.test(text(112)));
  assert(/niet volgens een numerieke smaakscore|nicht nach einer numerischen sensorischen Bewertung|pas une note sensorielle chiffrée/.test(text(114)));
  for(const i of [132,140,144])assert(/^(Nee|Nein|Non)\./.test(text(i)));
 }
});
