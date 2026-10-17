import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation} from '../core.mjs';

test('complete milk-drink guide covers every immutable source slot and all seven structured answers in NL DE FR',async()=>{
 const source=await readJson(path.join(root,'localization/authored/milk-guide-batch-26.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/milk-guide-batch-26.json'));
 assert.equal(source.segments.length,137);assert.equal(new Set(source.segments.map(s=>s.source)).size,119);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));assert.equal(authored.snapshotHash,source.snapshotHash);
 const preserved=authored.preserveSource.map(i=>source.segments[i].source);
 assert.deepEqual(preserved,['Onyx Coffee Lab: Monarch ↗','Equator Coffees: Eye of the Tiger Espresso ↗','Equator Coffees: Equator Blend ↗','Stumptown Coffee Roasters: Trapper Creek Decaf ↗','Counter Culture Coffee: Even Keel ↗']);
 const covered=new Set([...preserved,...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of authored.editions){
  const cache=await loadCache(edition);
  for(const segment of source.segments){const e=cache.segments[segment.id];assert.equal(e.source,segment.source);assert.equal(e.policyHash,policyHash);assert.equal(e.provider,'codex-direct');assert.equal(validateTranslation(segment.source,e.text),e.text);}
  for(const i of [124,126,128,130,132,134,136]){assert.equal(source.segments[i].kind,'json');assert.notEqual(cache.segments[source.segments[i].id].text,source.segments[i].source);}
 }
});

test('German related-decision labels complete the additional frozen gap without changing earlier Dutch or French wording',async()=>{
 const source=await readJson(path.join(root,'localization/authored/milk-guide-completion-de-26.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/milk-guide-completion-de-26.json'));
 assert.equal(authored.edition,'de');assert(!authored.editions);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));assert.equal(authored.snapshotHash,source.snapshotHash);
 assert.deepEqual(source.segments.map(s=>s.source),['Espresso and drip','Related decisions']);
 const cache=await loadCache('de');
 for(const [i,segment]of source.segments.entries())assert.equal(cache.segments[segment.id].text,validateTranslation(segment.source,authored.translations[i]));
});

test('milk guide retains distinct recipes, limited caffeine evidence, unverified dairy equivalence and dated US prices',async()=>{
 const source=await readJson(path.join(root,'localization/authored/milk-guide-batch-26.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/milk-guide-batch-26.json'));
 assert.deepEqual(['nl','de','fr'].map(e=>authored.routes[e]['/coffee-beans/best-coffee-beans-for-milk-drinks/']),['/koffiebonen/beste-koffiebonen-voor-melkdranken/','/kaffeebohnen/beste-kaffeebohnen-fuer-milchgetraenke/','/cafe-en-grains/meilleurs-cafe-en-grains-pour-boissons-au-lait/']);
 for(const edition of authored.editions){
  const cache=await loadCache(edition),text=i=>cache.segments[source.segments[i].id].text;
  for(const n of ['18','46','19.5'])assert(text(16).includes(n));
  assert(/geen espressorecept|kein Espressorezept|pas une recette expresso/.test(text(16)));
  assert(text(17).includes('1:15'));assert(text(17).includes('V60'));
  for(const n of ['150','350'])assert(text(18).includes(n));
  assert(/geen garantie op nul|keine Null-Koffein-Garantie|pas une garantie de caféine nulle/.test(text(68)));
  assert(text(69).includes('50/50'));assert(/niet.*precies|nicht exakt|n’établit pas exactement/.test(text(69)));
  assert(/niet bevestigd|nicht verifiziert|pas vérifié/.test(text(96)));
  assert(/niet gekocht|weder gekauft|ni acheté/.test(text(6)));
  assert(/geen smaakscore|keine Sensoriknote|pas de note sensorielle/.test(text(67)));
  for(const n of ['12','16','2026','$19.50','$18.50','$20'])assert(text(74).includes(n));
  assert(/geen betrouwbare prijs|keinen verlässlichen Preis|pas de prix fiable/.test(text(74)));
  assert(/niet.*bevestigd|nicht verifizieren|pas pu être vérifié/.test(text(85)));
  assert(/bepalen.*niet|bestimmen.*nicht|ne déterminent pas/.test(text(85)));
 }
});
