import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/budget-guide-batch-46.source.json')),a:await readJson(path.join(root,'localization/authored/budget-guide-batch-46.json'))});

test('complete under-500 guide covers all frozen slots in NL DE FR and keeps old registered URLs',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.sourcePages[0].sourcePath,'/espresso-machine/cheap-budget-under-500/');assert.equal(s.segments.length,245);assert.equal(new Set(s.segments.map(v=>v.source)).size,218);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,212);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['ROK EspressoGC','De’Longhi ECP3420','ROK EspressoGC Black PLUS','De’Longhi ECP3420 / US120V','Flair: Flair Classic ·','Flair: Flair Classic']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  assert.equal(c.routes[contentId(s.sourcePages[0].sourcePath)].path,a.routes[e][s.sourcePages[0].sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('budget guide preserves machine-only US cap, variants, package generations and safety/evidence limits',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[17,['$500','$159','25','2026']],[28,['ECP3420','120 V']],[33,['2026']],[35,['40 mm']],[69,['KINGrinder K6']],[82,['2026']],[98,['BES500','ECP3420','Flair Classic','ROK EspressoGC Black PLUS','Explorer']],[99,['$549','EC685M','Dedica Maestro Plus','Flair PRO 2','Gaggia Espresso Evolution','230 V']],[101,['$499.95','$169.95','$159','$259','25']],[107,['2-in-1']],[137,['54 mm','$499.95','$500']],[139,['37','$169.95','PID']],[141,['$159','2-in-1']],[151,['$500','$499.95']],[163,['$549','58 mm']],[180,['$169.95','17','2026']],[208,['18','2020','24','22']]])for(const value of values)assert(t(i).includes(value),`${e} ${i}: ${value}`);
  assert(/niet fysiek.*getest|nicht physisch.*getestet|pas testé physiquement/.test(t(14)));
  assert(/geen vergelijkende Coffeedant-praktijktest|kein Coffeedant-Vergleichstest|pas un test comparatif Coffeedant/.test(t(171)));
  assert(/Open geen apparaat onder spanning of druk|Kein bestromtes oder unter Druck|N’ouvrez pas un appareil sous tension ou pression/.test(t(122)));
  assert(/geen automatisch eindpunt|ohne automatischen Endpunkt|sans arrêt automatique/.test(t(115)));
  assert(/geen interne verwarmer|kein interner Heizer|pas de chauffage interne/.test(t(89)));
 }
});

test('budget guide translates all eight FAQ pairs and keeps owner sample, media and package qualifications',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(let i=148;i<=163;i++)assert.notEqual(t(i),s.segments[i].source);
  for(let i=228;i<=243;i++){const v=s.segments[i],first=s.segments.find(x=>x.source===v.source);assert.equal(t(i),c.segments[first.id].text);}
  for(const i of [64,65,66,67,76,77,78,88,89,90])assert.notEqual(t(i),s.segments[i].source);
  assert(/geen bevestiging|Keine Bestätigung|Aucune confirmation/i.test(t(94)));
  assert(/geen prestaties met standaardfilterbakjes|weder Leistung der Seriensiebe|ni performances du filtre d’origine/.test(t(71)));
  for(const i of [217,219,221])assert(/geen Coffeedant-testfoto|kein Coffeedant-Testfoto|pas une photographie de test Coffeedant/.test(t(i)));
  assert(/geen actuele Amerikaanse specificaties of prijzen|keine aktuellen US-Daten oder Preise|ni caractéristiques ni prix américains actuels/.test(t(168)));
 }
});
