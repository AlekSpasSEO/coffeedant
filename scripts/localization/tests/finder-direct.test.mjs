import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {readFile} from 'node:fs/promises';
import {root,readJson,loadCache,validateTranslation,segmentId,getEdition,policyHash,digest} from '../core.mjs';
import {regionalFinder} from '../build.mjs';

for(const [batch,count] of [[3,34],[4,30],[5,40],[6,41]])test(`${count} real Finder records in batch ${batch} retain unique complete copy and source facts in NL DE FR without US offers`,async()=>{
 const frozen=await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.items.source.json`));
 const snapshot=await readJson(path.join(root,`localization/authored/finder-batch-${batch}.source.json`));
 const authored=await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.json`));
 assert.equal(snapshot.snapshotHash,digest(JSON.stringify(snapshot.segments)));
 assert.equal(frozen.snapshotHash,snapshot.snapshotHash);
 assert.equal(authored.snapshotHash,snapshot.snapshotHash);
 assert.equal(frozen.items.length,count);
 const uniqueFields=new Set(frozen.items.flatMap(item=>['description','bestFor','imageAlt'].map(key=>item[key])));
 assert.equal(Object.keys(authored.translations).length,uniqueFields.size);
 const authoredSources=new Set(Object.keys(authored.translations).map(index=>snapshot.segments[Number(index)].source));
 const sourceIds=new Set(snapshot.segments.map(s=>s.id));
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  const finder=regionalFinder({items:frozen.items},cache,new Map(),getEdition(id),{},{});
  assert.equal(finder.items.length,frozen.items.length);
  assert.equal(new Set(finder.items.map(x=>x.description)).size,count);
  for(const [i,item] of finder.items.entries()){
   const source=frozen.items[i];
   for(const key of ['description','bestFor','imageAlt']){
    assert(sourceIds.has(segmentId(source[key],'finder')));
    assert(authoredSources.has(source[key]),`${id} missing frozen complete field ${source.model} ${key}`);
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

test('model-style adjectives protect the exact model without freezing English punctuation; codes and URLs remain exact',()=>{
 assert.equal(validateTranslation('An E61-style group.','Un groupe de style E61.'),'Un groupe de style E61.');
 assert.throws(()=>validateTranslation('An E61-style group.','Un groupe de style L61.'),/protected identifier/);
 assert.throws(()=>validateTranslation('Model QM67-EVO.','Modèle QM67.'),/protected identifier/);
 assert.throws(()=>validateTranslation('Model F85/0-102.','Modèle F85/0/102.'),/protected identifier/);
 assert.throws(()=>validateTranslation('See https://example.com/E61-style','Voir https://example.com/E61'),/protected identifier/);
 assert.throws(()=>validateTranslation('Show {count} E61-style groups.','Afficher des groupes de style E61.'),/protected identifier/);
});

test('the complete frozen 145-product Finder has distinct translated descriptions and no unverified US commerce in any target edition',async()=>{
 const items=[];
 for(const batch of [3,4,5,6])items.push(...(await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.items.source.json`))).items);
 assert.equal(items.length,145);
 assert.equal(new Set(items.map(item=>item.path)).size,145);
 const fields=new Set(items.flatMap(item=>['description','bestFor','imageAlt'].map(key=>segmentId(item[key],'finder'))));
 assert.equal(fields.size,434);
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  for(const key of fields)assert.equal(cache.segments[key].policyHash,policyHash);
  const finder=regionalFinder({items},cache,new Map(),getEdition(id),{},{});
  assert.equal(new Set(finder.items.map(item=>item.description)).size,145);
  assert(finder.items.every(item=>item.priceUsd===null&&item.priceAmount===null&&item.amazonHref===''));
  assert.equal(finder.locale,getEdition(id).locale);
  assert.equal(finder.currency,'EUR');
 }
});

test('refreshed coffee hub retains complete source qualifications and historical source prices in NL DE FR',async()=>{
 const source=await readJson(path.join(root,'localization/authored/hub-refresh-batch-6.source.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('homepage CSS badge uses an extracted translated attribute rather than hardcoded English content',async()=>{
 const page=await readFile(path.join(root,'src/pages/index.astro'),'utf8');
 const css=await readFile(path.join(root,'src/styles/home.css'),'utf8');
 assert(page.includes('data-label="60-sec shortlist"'));
 assert(css.includes('content: attr(data-label)'));
 assert(!css.includes('content: "60-sec shortlist"'));
 const source=await readJson(path.join(root,'localization/authored/shared-promo-batch-6.source.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(source.segments.length,1);
 assert.equal(source.segments[0].kind,'attribute');
 for(const id of ['nl','de','fr']){
  const entry=(await loadCache(id)).segments[source.segments[0].id];
  assert.equal(entry.source,'60-sec shortlist');
  assert.notEqual(entry.text,entry.source);
  assert.equal(validateTranslation(entry.source,entry.text),entry.text);
 }
});

for(const batch of [3,4,5])test(`Manufacturer own-page snapshot ${batch} is complete in all three caches, without implying catalog completeness`,async()=>{
 const source=await readJson(path.join(root,`localization/authored/brand-pages-batch-${batch}.source.json`));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
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

test('new SEO metadata and image descriptions reuse complete direct wording without changing attribution or facts',async()=>{
 const source=await readJson(path.join(root,'localization/authored/seo-refresh-batch-5.source.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(source.segments.length,8);
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${id} missing new SEO ${segment.source}`);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.notEqual(entry.text,segment.source);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
   for(const attribution of ['Breville','Coffeedant','massage-techniques','Wikimedia Commons','CC BY-SA 2.0','MarkSweep','WebP']){
    if(segment.source.includes(attribution))assert(entry.text.includes(attribution));
   }
  }
 }
});

test('new Deals navigation labels are translated without claiming the US deal catalog is regionally approved',async()=>{
 const source=await readJson(path.join(root,'localization/authored/shared-navigation-batch-5.source.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(source.segments.length,2);
 for(const id of ['nl','de','fr']){
  const cache=await loadCache(id);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.notEqual(entry.text,segment.source);
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('policy navigation keeps exact Deals anchor markup and destination while translating the whole inline slot',async()=>{
 const source=await readJson(path.join(root,'localization/authored/policy-navigation-batch-5.source.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(source.segments.length,1);
 assert.equal(source.segments[0].kind,'inline-html');
 for(const id of ['nl','de','fr']){
  const entry=(await loadCache(id)).segments[source.segments[0].id];
  assert.equal(entry.source,source.segments[0].source);
  assert.equal(entry.policyHash,policyHash);
  assert.equal(validateTranslation(entry.source,entry.text),entry.text);
  assert.notEqual(entry.text,entry.source);
 }
});
