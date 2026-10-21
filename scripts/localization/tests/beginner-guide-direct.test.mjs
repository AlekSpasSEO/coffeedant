import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/beginner-guide-batch-45.source.json')),a:await readJson(path.join(root,'localization/authored/beginner-guide-batch-45.json'))});

test('complete beginner guide directly covers every frozen slot in three languages without renaming existing URLs',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.sourcePages[0].sourcePath,'/espresso-machine/beginners/');assert.equal(s.segments.length,259);assert.equal(new Set(s.segments.map(v=>v.source)).size,233);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,222);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Breville Bambino Plus','Classic E24','BES500','BES870XL','ECAM29084SB','Breville Bambino Plus / BES500','De’Longhi','Breville · BES500','Breville · BES870XL','De’Longhi · ECAM29084SB','Prima Coffee Equipment']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  assert.equal(c.routes[contentId(s.sourcePages[0].sourcePath)].path,a.routes[e][s.sourcePages[0].sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('beginner guide retains exact US variants, dated dollar context, sequential milk and absence of physical testing',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[45,['$499.95']],[51,['16']],[55,['13']],[103,['ECAM29084SB','TDS']],[108,['BES500','Classic Pro E24','BES870XL','ECAM29084SB']],[111,['$899.95','$499.95','25','2026']],[115,['$499.95','$549']],[116,['$699.95']],[149,['2023','58 mm','PID']],[151,['16','$699.95']],[163,['$499.95','$699.95']],[164,['15','9']],[173,['58 mm']],[223,['11','44','25','2015']]])for(const value of values)assert(t(i).includes(value),`${e} ${i}: ${value}`);
  assert(/niet fysiek.*getest|nicht physisch.*getestet|pas testé physiquement/.test(t(14)));
  assert(/geen defectpercentages|keine Defektraten|pas de taux de panne/.test(t(181)));
  assert(/geen vergelijkende Coffeedant-praktijktest|kein Coffeedant-Vergleichstest|pas un test comparatif Coffeedant/.test(t(182)));
  assert(/geen onderhoudsvrije|keine wartungsfreie|pas du lait sans entretien/.test(t(126)));
  assert(/Neem niet aan.*vanzelf geschikt|nicht automatisch geeignet|Ne supposez pas.*convient automatiquement/.test(t(133)));
  assert(/niet.*Evo|nicht.*Evo|pas l’Evo/.test(t(149)));
 }
});

test('beginner guide translates eight full structured FAQ pairs, schematic states and qualified owner/photo evidence',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(let i=158;i<=173;i++)assert.notEqual(t(i),s.segments[i].source);
  for(let i=243;i<=258;i++){const v=s.segments[i],first=s.segments.find(x=>x.source===v.source);assert.equal(t(i),c.segments[first.id].text);}
  for(const i of [63,64,65,66,75,76,77,78,79,89,90,91,92,93,94,95,96,97,98,99])assert.notEqual(t(i),s.segments[i].source);
  assert(/niet de exacte Amerikaanse|nicht die exakte US|non l’ECAM29084SB américaine/.test(t(103)));
  assert(/geen gecontroleerde.*meting|keine kontrollierte.*messung|pas une mesure contrôlée/.test(t(70)));
  for(const i of [232,234,236])assert(/geen Coffeedant-testfoto|kein Coffeedant-Testfoto|pas une photographie de test Coffeedant/.test(t(i)));
  assert(/geen vergelijking|vergleicht nicht|pas un comparatif/.test(t(179)));
 }
});
