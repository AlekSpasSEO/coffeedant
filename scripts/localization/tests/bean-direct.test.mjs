import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation} from '../core.mjs';

test('both full direct bean reviews cover every frozen slot and all twelve FAQ answers in NL DE FR',async()=>{
 const snapshot=await readJson(path.join(root,'localization/authored/bean-reviews-batch-8.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/bean-reviews-batch-8.json'));
 assert.equal(snapshot.snapshotHash,digest(JSON.stringify(snapshot.segments)));
 assert.equal(authored.snapshotHash,snapshot.snapshotHash);
 assert.equal(snapshot.sourcePages.length,2);
 assert.equal(snapshot.segments.length,226);
 const kept=authored.preserveSource.map(index=>snapshot.segments[index].source);
 assert.deepEqual(kept,['Counter Culture Forty-Six','12 oz, 24 oz, 5 lb','Counter Culture Big Trouble','Counter Culture Hologram','Counter Culture Coffee','Counter Culture Coffee Big Trouble','Counter Culture Coffee Hologram','Counter Culture Apollo']);
 const sources=new Set([...kept,...Object.keys(authored.translations).map(index=>snapshot.segments[index].source)]);
 assert(snapshot.segments.every(segment=>sources.has(segment.source)));
 const answers=[121,123,125,127,129,131,215,217,219,221,223,225].map(index=>snapshot.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of snapshot.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${edition} missing ${segment.source}`);
   assert.equal(entry.provider,'codex-direct');
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
  for(const answer of answers)assert.notEqual(cache.segments[answer.id].text,answer.source);
  const disclosure=cache.segments[snapshot.segments[29].id].text;
  assert(/niet gekocht|nicht gekauft|n’a pas acheté/.test(disclosure));
  assert(/geen sensorische score|keine sensorische Bewertung|Aucune note sensorielle/.test(disclosure));
  for(const page of snapshot.sourcePages){
   const expectedRoot={nl:'/koffiebonen/',de:'/kaffeebohnen/',fr:'/cafe-en-grains/'}[edition];
   assert.equal(authored.routes[edition][page.sourcePath],page.sourcePath.replace('/coffee-beans/',expectedRoot));
  }
 }
});

test('bean image credits, whole-bean category, research genre and editorial role are translated as complete structured prose',async()=>{
 const snapshot=await readJson(path.join(root,'localization/authored/structured-metadata-batch-8.source.json'));
 assert.equal(snapshot.snapshotHash,digest(JSON.stringify(snapshot.segments)));
 assert.equal(snapshot.segments.length,5);
 assert(snapshot.segments.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of snapshot.segments){
   const entry=cache.segments[segment.id];
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.notEqual(entry.text,segment.source);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});
