import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,loadCache,policyHash,digest,validateTranslation,getEdition} from '../core.mjs';
import {regionalFinder} from '../build.mjs';

for(const [name,count] of [['source-refresh-batch-9',44],['journal-pages-batch-9',303]])test(`${name} has full frozen-slot coverage and exact facts in NL DE FR`,async()=>{
 const source=await readJson(path.join(root,`localization/authored/${name}.source.json`));
 const authored=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(source.segments.length,count);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 const kept=authored.preserveSource.map(index=>source.segments[index].source);
 assert.equal(kept.length,new Set(kept).size);
 const supplied=new Set([...kept,...Object.keys(authored.translations).map(index=>source.segments[index].source)]);
 assert(source.segments.every(segment=>supplied.has(segment.source)));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${edition} missing ${segment.source}`);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(entry.provider,'codex-direct');
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('the new Fellow Finder record extends the complete frozen catalog to 146 without inventing local commerce or a regional variant',async()=>{
 const frozen=await readJson(path.join(root,'localization/authored/finder-products-batch-9.items.source.json'));
 const source=await readJson(path.join(root,'localization/authored/source-refresh-batch-9.source.json'));
 assert.equal(frozen.snapshotHash,source.snapshotHash);
 assert.equal(frozen.items.length,1);
 assert.equal(frozen.items[0].model,'Espresso Series 1');
 assert.equal(frozen.items[0].brand,'Fellow');
 assert.equal(frozen.items[0].path,'/espresso-machine/fellow-espresso-series-1/');
 const items=[];
 for(const batch of [3,4,5,6,9])items.push(...(await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.items.source.json`))).items);
 assert.equal(items.length,146);
 assert.equal(new Set(items.map(item=>item.path)).size,146);
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  const catalog=regionalFinder({items},cache,new Map(),getEdition(edition),{},{});
  assert.equal(new Set(catalog.items.map(item=>item.description)).size,146);
  assert(catalog.items.every(item=>item.priceUsd===null&&item.priceAmount===null&&item.amazonHref===''));
  const item=catalog.items.at(-1);
  assert.equal(item.model,'Espresso Series 1');
  assert.equal(item.path,'https://coffeedant.com/espresso-machine/fellow-espresso-series-1/');
  for(const field of ['description','bestFor','imageAlt']){
   assert.notEqual(item[field],frozen.items[0][field]);
   assert.equal(validateTranslation(frozen.items[0][field],item[field]),item[field]);
  }
 }
});

test('Journal FAQ negations and study limitations remain fully authored instead of becoming universal testing claims',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-9.source.json'));
 const answers=[180,182,184,298,300,302].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  const chemical=cache.segments[source.segments[273].id].text;
  assert(/Nee\.|Nein\.|Non\./.test(chemical));
  const study=cache.segments[source.segments[227].id].text;
  for(const number of ['29','99','136'])assert(study.includes(number));
  const noTesting=cache.segments[source.segments[260].id].text;
  assert(/geen verslag van een Coffeedant-experiment|kein Bericht eines Coffeedant-Experiments|pas le compte rendu d’une expérience Coffeedant/.test(noTesting));
 }
});
