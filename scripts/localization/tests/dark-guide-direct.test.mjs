import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';

test('the full dark-roast guide covers its immutable source and eight FAQ answers in NL DE FR',async()=>{
 const source=await readJson(path.join(root,'localization/authored/dark-guide-batch-21.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/dark-guide-batch-21.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 assert.equal(source.segments.length,188);
 assert.equal(new Set(source.segments.map(s=>s.source)).size,168);
 const kept=authored.preserveSource.map(i=>source.segments[i].source);
 assert.deepEqual(kept,['$20 / 12 oz','12 oz, 5 lb','Counter Culture Forty-Six ↗','Stumptown French Roast ↗',"Peet's Major Dickason's ↗",'Counter Culture Big Trouble ↗']);
 const covered=new Set([...kept,...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];assert(entry);
   assert.equal(entry.source,segment.source);assert.equal(entry.policyHash,policyHash);
   assert.equal(entry.provider,'codex-direct');assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
  for(const i of [170,172,174,176,178,180,182,184]){
   const segment=source.segments[i];assert.equal(segment.kind,'json');assert.notEqual(cache.segments[segment.id].text,segment.source);
  }
  const page='/coffee-beans/best-dark-roast-coffee-beans/';
  assert.equal(cache.routes[contentId(page)].path,authored.routes[edition][page]);
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});

test('dark-roast guide retains distinct buying jobs, dated US arithmetic, separate policies and no tasting or universal compatibility',async()=>{
 const source=await readJson(path.join(root,'localization/authored/dark-guide-batch-21.source.json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=i=>cache.segments[source.segments[i].id].text;
  for(const n of ['2,268','20','113','80','28'])assert(text(91).includes(n));
  for(const n of ['$1.06','$20','12','18','$0.87','$21.95','16'])assert(text(100).includes(n));
  assert(/geen universele|keine universelle|aucun café pour toutes/.test(text(87)));
  assert(/geldt niet|gilt nicht|ne s’applique ni/.test(text(104)));
  for(const name of ['Counter Culture',"Peet's"])assert(text(104).includes(name));
  assert(/geen.*gewassen|kein Waschen|n’autorisent pas le lavage/.test(text(110))||/geen toestemming/.test(text(110)));
  assert(/niet gekocht|weder gekauft|ni acheté/.test(text(17)));
  assert(/geen.*smaakwinnaar|Weder sensorischer Sieger|Aucun vainqueur sensoriel/.test(text(133)));
  assert(/geen productspecifieke|keine produktspezifischen|aucune mesure de caféine propre/.test(text(145)));
  assert(/middeldonker|mitteldunkel|moyennement foncé/.test(text(141)));
  assert(/geen uitputtende|keine vollständige|pas un classement exhaustif/.test(text(130)));
  assert(/geen Franse|keine französische|pas une origine française/.test(text(139)));
 }
});
