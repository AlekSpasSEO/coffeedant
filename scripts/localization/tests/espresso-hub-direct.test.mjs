import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';

test('main espresso hub directly covers every frozen slot, including mobile labels and structured metadata',async()=>{
 const source=await readJson(path.join(root,'localization/authored/espresso-hub-batch-28.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/espresso-hub-batch-28.json'));
 assert.equal(source.segments.length,97);assert.equal(new Set(source.segments.map(s=>s.source)).size,80);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));assert.equal(authored.snapshotHash,source.snapshotHash);
 assert.deepEqual(authored.preserveSource.map(i=>source.segments[i].source),['Bambino Plus','Magnifica Evo','Classic EVO Pro','GO']);
 const covered=new Set([...authored.preserveSource.map(i=>source.segments[i].source),...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of authored.editions){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];assert.equal(entry.source,segment.source);
   assert.equal(entry.provider,'codex-direct');assert.equal(entry.policyHash,policyHash);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('espresso hub retains source budgets, separate grinder needs and limits of automation without regional offers',async()=>{
 const a=await readJson(path.join(root,'localization/authored/espresso-hub-batch-28.json'));
 for(const e of a.editions){
  const t=i=>a.translations[i][e];
  assert(t(11).includes('2026'));
  for(const n of ['$500','$5,000'])assert(t(29).includes(n));
  assert(/vijfduizend|fünftausend|cinq mille/.test(t(29)));
  assert(/geen wedstrijd|keinen Wettbewerb|pas une gagnante absolue/.test(t(16)));
  assert(/aparte molen|separate Mühle|moulin séparé/.test(t(36)));
  assert(/Beperkte|Begrenzte|limité/.test(t(43)));
  assert(/Wachten|Wartezeit|Attente/.test(t(48)));
  assert(/drukprofielen|Druckprofile|profils de pression/.test(t(40)));
  assert(/geen vier versies|nicht vier Versionen|pas quatre versions/.test(t(32)));
  const cache=await loadCache(e);
  assert.equal(cache.routes[contentId('/espresso-machine/')].path,a.routes[e]['/espresso-machine/']);
  if(e==='nl')assert.equal(cache.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
 }
});
