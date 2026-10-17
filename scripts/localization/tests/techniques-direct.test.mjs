import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('complete techniques guide covers every frozen slot in Dutch, German and French',async()=>{
 const s=await get('techniques-batch-30.source.json'),a=await get('techniques-batch-30.json');
 assert.equal(s.segments.length,157);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.deepEqual(a.editions,['nl','de','fr']);assert.deepEqual(a.preserveSource,[]);
 assert.equal(Object.keys(a.translations).length,145);
 const covered=new Set(Object.keys(a.translations).map(i=>s.segments[i].source));assert(s.segments.every(x=>covered.has(x.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const x of s.segments){const v=c.segments[x.id];assert.equal(v.source,x.source);assert.equal(v.policyHash,policyHash);assert.equal(v.provider,'codex-direct');assert.equal(validateTranslation(x.source,v.text),v.text);}assert.equal(c.routes[contentId('/journal/espresso-techniques/')].path,a.routes[e]['/journal/espresso-techniques/']);}
});

test('technique translations retain source figures, exact models and numerical scope',async()=>{
 const a=await get('techniques-batch-30.json');
 for(const e of a.editions){
  for(const [i,values]of [[32,['$200','$3,000','195-205°F','90-96°C','9','25-30','1:2']],[36,['195-205°F','90.5-96°C','0.4','18-22%']],[66,['18g','36g','1:1.5','1:4']],[94,['Cafelat Robot','58mm','18 kg']],[101,['Nespresso Vertuo','Centrifusion','7,000 RPM']],[119,['Barista Express','Barista Pro','Barista Touch Impress','Impress Puck System']],[122,['La Specialista','51mm','54mm','58mm','16-30']]])for(const value of values)assert(a.translations[i][e].includes(value),`${e} ${i}: ${value}`);
  assert(/drieduizend|dreitausend|trois mille/.test(a.translations[32][e]));
  assert(/zevenduizend|siebentausend|sept mille/.test(a.translations[101][e]));
 }
});

test('complete structured answers and photo evidence keep system and owner limitations',async()=>{
 const s=await get('techniques-batch-30.source.json'),a=await get('techniques-batch-30.json');
 for(const e of a.editions){const c=await loadCache(e);for(const i of [152,154,156]){assert.equal(s.segments[i].kind,'json');assert.notEqual(c.segments[s.segments[i].id].text,s.segments[i].source);}
  assert(/geen prestaties|keine Leistung|pas d’établir les performances/.test(a.translations[31][e]));
  assert(/geen testfoto|kein Coffeedant-Testfoto|pas une photo de test/.test(a.translations[147][e]));
  assert(/niet dat|weder|n’impliquent ni/.test(a.translations[145][e]));
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});
