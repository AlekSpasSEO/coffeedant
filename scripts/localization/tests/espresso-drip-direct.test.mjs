import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation} from '../core.mjs';

const files=async()=>({
 source:await readJson(path.join(root,'localization/authored/espresso-drip-complete-batch-27.source.json')),
 authored:await readJson(path.join(root,'localization/authored/espresso-drip-complete-batch-27.json')),
});

test('espresso-and-drip guide covers every frozen slot and all seven structured FAQ answers in NL DE FR',async()=>{
 const {source,authored}=await files();
 assert.equal(source.segments.length,165);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 assert.deepEqual(authored.preserveSource,[137]);
 assert.equal(source.segments[137].source,'Intelligentsia Black Cat Classic ↗');
 const covered=new Set([...authored.preserveSource.map(i=>source.segments[i].source),...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of authored.editions){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert.equal(entry.source,segment.source);assert.equal(entry.policyHash,policyHash);
   assert.equal(entry.provider,'codex-direct');assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
  for(const i of [148,150,152,154,156,158,160]){
   assert.equal(source.segments[i].kind,'json');assert.notEqual(cache.segments[source.segments[i].id].text,source.segments[i].source);
  }
 }
});

test('dual-method guide retains different recipes, grinder constraints, no-tasting limits and dated US arithmetic',async()=>{
 const {authored}=await files();
 for(const edition of authored.editions){
  const text=i=>authored.translations[i][edition];
  for(const n of ['19.5','24–28','1:17','20','340'])assert(text(77).includes(n));
  assert(/door elkaar halen|Kategorienverwechslung|confondre les catégories/.test(text(77)));
  assert(/apart af|getrennt ein|séparément/.test(text(77)));
  assert(/geen.*te grove espressostappen|weder zu grobe Espressoschritte|ne corrige ni des crans expresso/.test(text(78)));
  assert(/Geen.*bewijst|Keine.*belegt|Aucune.*ne prouve/.test(text(82)));
  for(const n of ['12','18','20','$19','$1.00','$20','$1.06'])assert(text(83).includes(n));
  assert(/vallen erbuiten|bleiben außen vor|sont exclus/.test(text(83)));
  assert(/niet steeds|nicht ständig|ne le sortez pas/.test(text(84)));
  assert(/geen bewijs|kein Beleg|ne prouve pas/.test(text(88)));
  for(const n of ['18','45'])assert(text(90).includes(n));
  assert(/niet om een negatief|kein negatives|pas à un jugement.*négatif/.test(text(90)));
  assert(/niet geproefd|weder verkostet|ni goûté/.test(text(15)));
  assert(/geen proeverij|weder verkostet|ni dégusté/.test(text(99)));
  assert(text(19).includes('2026'));assert(text(100).includes('2026'));
 }
});

test('existing dual-method regional URLs stay stable and structured wording uses native brewing terminology',async()=>{
 const {source,authored}=await files();
 assert.deepEqual(authored.editions.map(e=>authored.routes[e][source.sourcePages[0].sourcePath]),[
  '/koffiebonen/beste-koffiebonen-voor-espresso-en-drip/',
  '/kaffeebohnen/beste-kaffeebohnen-fuer-espresso-und-drip/',
  '/cafe-en-grains/meilleurs-cafe-en-grains-pour-espresso-et-filtre/',
 ]);
 const nl=authored.translations[111].nl,fr=authored.translations[108].fr;
 assert(nl.includes('maalstand')||nl.includes('standen'));assert(!/repeatably|grindinstelling|afvalwiskunde/.test(nl));
 assert(fr.includes('cafés en grains'));assert(!fr.includes('haricots'));
});
