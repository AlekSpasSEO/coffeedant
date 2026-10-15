import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,getEdition} from '../core.mjs';
import {regionalFinder} from '../build.mjs';

for(const [name,count] of [['bean-reviews-batch-15',157],['finder-refresh-batch-15',3],['bean-reviews-batch-16',164]])test(`${name} fully covers its immutable source in NL DE FR`,async()=>{
 const source=await readJson(path.join(root,`localization/authored/${name}.source.json`));
 const authored=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(source.segments.length,count);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 const kept=authored.preserveSource.map(i=>source.segments[i].source);
 assert.equal(kept.length,new Set(kept).size);
 const covered=new Set([...kept,...Object.keys(authored.translations).map(i=>source.segments[i].source)]);
 assert(source.segments.every(s=>covered.has(s.source)));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert.equal(entry.source,segment.source);assert.equal(entry.policyHash,policyHash);
   assert.equal(entry.provider,'codex-direct');
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('Slow Motion, Equator and Trapper Creek keep changing-lot boundaries, distinct brew recipes and no invented tasting evidence',async()=>{
 const source=await readJson(path.join(root,'localization/authored/bean-reviews-batch-16.source.json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=i=>cache.segments[source.segments[i].id].text;
  for(const i of [61,63,64,112,114,115,160,162,163]){
   assert.equal(source.segments[i].kind,'json');assert.notEqual(text(i),source.segments[i].source);
  }
  assert(text(26).includes('50/50'));
  assert(/Schrijf.*niet toe|Übertragen Sie.*nicht|N’attribuez pas/.test(text(26)));
  for(const n of ['18','1:2'])assert(text(30).includes(n));
  for(const n of ['1:15','1:16'])assert(text(82).includes(n));
  for(const n of ['1:17','19.5'])assert(text(131).includes(n));
  assert(/niet automatisch|nicht automatisch|pas automatiquement/.test(text(32)));
  assert(/geen blijvende garantie|keine dauerhafte Garantie|pas une garantie permanente/.test(text(78)));
  assert(/geen onafhankelijke smaakbevestiging|keine unabhängige sensorische Bestätigung|pas une confirmation sensorielle indépendante/.test(text(80)));
  assert(/niet onafhankelijk bevestigen|nicht unabhängig bestätigen|ne peut pas vérifier indépendamment/.test(text(90)));
  assert(/anekdotisch|anekdotisch|anecdotique/.test(text(138)));
  for(const i of [38,89,137])assert(/niet gekocht|nicht gekauft|n’a ni acheté/.test(text(i)));
  for(const i of [35,87,134]){
   assert(text(i).includes('2–15'));assert(/geen analyse|keine Analyse|n’est pas une analyse/.test(text(i)));
  }
  for(const n of ['$20','$1.06'])assert(text(33).includes(n));
  for(const n of ['$19.50','$1.03'])assert(text(85).includes(n));
 }
});

test('both Intelligentsia decaf reviews retain distinct recipes, dated US value and no product-specific caffeine or tasting claim',async()=>{
 const source=await readJson(path.join(root,'localization/authored/bean-reviews-batch-15.source.json'));
 // Three shared answers plus three product-specific answers per review.
 const answers=[54,56,58,110,112,113,153,155,156];
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=i=>cache.segments[source.segments[i].id].text;
  for(const i of answers){assert.equal(source.segments[i].kind,'json');assert.notEqual(text(i),source.segments[i].source);}
  for(const n of ['18','45','1:2.5'])assert(text(79).includes(n));
  for(const n of ['1:18','20','360'])assert(text(128).includes(n));
  assert(/geen extractiemeting|keine Coffeedant-Extraktionsmessung|pas une mesure d’extraction/.test(text(128)));
  assert(/geen beloofde doorlooptijd|keine zugesagte Bezugszeit|pas un temps d’écoulement promis/.test(text(79)));
  for(const i of [87,133]){
   assert(/niet gekocht|nicht gekauft|n’a ni acheté/.test(text(i)));
   assert(/geen numerieke smaakscore|weder eine numerische|Aucune note sensorielle chiffrée/.test(text(i)));
  }
  for(const i of [84,131]){
   assert(text(i).includes('2–15'));
   assert(/geen analyse|keine Analyse|n’est pas une analyse/.test(text(i)));
  }
  for(const n of ['$18.50','12','18','$0.98','15','2026'])assert(text(82).includes(n));
  assert(/geen gemeten drankkostprijs|kein gemessener Getränkepreis|pas un coût de boisson mesuré/.test(text(82)));
  assert(/mogen niet|dürfen nicht|ne peuvent pas/.test(text(75)));
  assert(/geen bewijs|kein Beleg|pas la preuve/.test(text(124)));
 }
});

test('the current BES995 Finder addition completes 147 exact records without approving a European model or offer',async()=>{
 const frozen=await readJson(path.join(root,'localization/authored/finder-products-batch-15.items.source.json'));
 const source=await readJson(path.join(root,'localization/authored/finder-refresh-batch-15.source.json'));
 assert.equal(frozen.snapshotHash,source.snapshotHash);
 assert.equal(frozen.items[0].model,'Oracle Dual Boiler BES995');
 assert.equal(frozen.items[0].priceUsd,2999.95);
 const items=[];
 for(const batch of [3,4,5,6,9,15])items.push(...(await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.items.source.json`))).items);
 assert.equal(items.length,147);assert.equal(new Set(items.map(i=>i.path)).size,147);
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),catalog=regionalFinder({items},cache,new Map(),getEdition(edition),{},{});
  assert.equal(new Set(catalog.items.map(i=>i.description)).size,147);
  assert(catalog.items.every(i=>i.priceUsd===null&&i.priceAmount===null&&i.amazonHref===''));
  const item=catalog.items.at(-1);
  assert.equal(item.model,'Oracle Dual Boiler BES995');assert.equal(item.path,'https://coffeedant.com'+frozen.items[0].path);
  assert(/Amerikaanse|US-BES995|américain/.test(item.description));
  for(const field of ['description','bestFor','imageAlt'])assert.notEqual(item[field],frozen.items[0][field]);
 }
});

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
