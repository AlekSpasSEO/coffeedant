import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,loadCache,validateTranslation,segmentId,getEdition,policyHash} from '../core.mjs';
import {regionalFinder} from '../build.mjs';

test('34 real Finder records retain unique complete copy and source facts in NL DE FR without US offers',async()=>{
 const frozen=await readJson(path.join(root,'localization/authored/finder-products-batch-3.items.source.json'));
 const snapshot=await readJson(path.join(root,'localization/authored/finder-batch-3.source.json'));
 assert.equal(frozen.snapshotHash,snapshot.snapshotHash);
 assert.equal(frozen.items.length,34);
 const sourceIds=new Set(snapshot.segments.map(s=>s.id));
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  const finder=regionalFinder({items:frozen.items},cache,new Map(),getEdition(id),{},{});
  assert.equal(finder.items.length,frozen.items.length);
  assert.equal(new Set(finder.items.map(x=>x.description)).size,34);
  for(const [i,item] of finder.items.entries()){
   const source=frozen.items[i];
   for(const key of ['description','bestFor','imageAlt']){
    assert(sourceIds.has(segmentId(source[key],'finder')));
    assert.equal(validateTranslation(source[key],item[key]),item[key]);
    assert.notEqual(item[key],source[key],`${id} untranslated ${source.model} ${key}`);
   }
   assert.equal(item.model,source.model);
   assert.equal(item.brand,source.brand);
   assert.equal(item.priceUsd,null);
   assert.equal(item.priceAmount,null);
   assert.equal(item.amazonHref,'');
   assert.equal(item.path,`https://coffeedant.com${source.path}`);
  }
 }
});

test('Bosch and Philips own-page text is complete in all three caches, without implying catalog completeness',async()=>{
 const source=await readJson(path.join(root,'localization/authored/brand-pages-batch-3.source.json'));
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${id} missing ${segment.source}`);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});
