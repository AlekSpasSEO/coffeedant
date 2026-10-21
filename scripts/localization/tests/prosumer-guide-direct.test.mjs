import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/prosumer-guide-batch-40.source.json')),a:await readJson(path.join(root,'localization/authored/prosumer-guide-batch-40.json'))});

test('complete prosumer guide covers every frozen slot in NL DE FR and preserves registered routes',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.sourcePages[0].sourcePath,'/espresso-machine/prosumer-under-1000/');assert.equal(s.segments.length,341);assert.equal(new Set(s.segments.map(v=>v.source)).size,307);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,305);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Gaggia Classic Pro E24','Cabeen’s Coffee Corner']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  assert.equal(c.routes[contentId(s.sourcePages[0].sourcePath)].path,a.routes[e][s.sourcePages[0].sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('prosumer guide retains dated source-market prices, exact regional variants, voltages and equipment limits',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[24,['E24','110','120','V']],[34,['25','2026']],[37,['$5,000']],[108,['$1,000','Gaggia Classic Pro E24','Lelit Anna PL41TEM','Rancilio Silvia V6','Flair 58 Plus 2']],[129,['$549.00']],[133,['PESAN06','PL41TEM']],[134,['$599.95']],[136,['250','ml']],[139,['$995.00']],[144,['$699.00']],[174,['PL41TEM','Eureka Specialita','PESAN06']],[193,['Classic','Pro2','58+2','Flair']],[198,['2023','230 V','120 V','PESAN06','PL41TEM','Silvia Pro X','58 Plus 2']],[203,['$549','$451','58 mm']],[214,['0.3 L']],[224,['57 mm','PESAN06','PL41TEM']],[239,['3.5','58 mm','$549']],[241,['2.7 L','$599.95','€549','LELIT57','250 ml','58 mm']],[243,['0.3 L','58 mm','$995']],[245,['$699']],[273,['25','2026','$1,000']],[285,['120 V','$599.95','PL41TEM']],[289,['€549','24','2026']],[302,['3','2026','13','25','$1,000']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/niet fysiek.*getest|nicht physisch.*getestet|pas testé physiquement/.test(t(120)));
  assert(/geen directe verificatie|Keine direkte Überprüfung|Aucune vérification directe/i.test(t(174)));
  assert(/geen defectpercentages|keine Defektraten|pas de taux de défaut/.test(t(195)));
  assert(/niet onder|nicht ein|N’immergez/.test(t(220)));
  assert(/in plaats van een jaartotaal te verzinnen|statt einen Jahresbetrag zu erfinden|sans inventer de total annuel/.test(t(227)));
 }
});

test('prosumer guide keeps all eight full FAQ pairs, accessible schematics and source-evidence qualifications',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(let i=250;i<=265;i++)assert.notEqual(t(i),s.segments[i].source);
  for(const i of [19,26,57,60,121,164,167,176,179,186,228,268])assert.notEqual(t(i),s.segments[i].source);
  for(const i of [88,313,315,317])assert(/geen Coffeedant-testfoto|kein Coffeedant-Testfoto|pas une photographie de test Coffeedant/.test(t(i)));
  for(let i=322;i<s.segments.length;i++){const v=s.segments[i],first=s.segments.find(x=>x.source===v.source);assert.equal(c.segments[v.id].text,c.segments[first.id].text);}
  assert(/geen stoompijp|keine Dampflanze|pas de buse vapeur/.test(t(263)));
  assert(/garantie en service|Garantie und Service|garantie et service/.test(t(261)));
 }
});
