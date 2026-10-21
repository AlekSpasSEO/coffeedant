import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/built-in-guide-batch-47.source.json')),a:await readJson(path.join(root,'localization/authored/built-in-guide-batch-47.json'))});

test('complete integrated-grinder guide covers every frozen slot in NL DE FR and preserves registered routes',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.sourcePages[0].sourcePath,'/espresso-machine/built-in-grinder/');assert.equal(s.segments.length,242);assert.equal(new Set(s.segments.map(v=>v.source)).size,215);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,206);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['BES878','BES876','JURA E8 Midnight Silver NAD','JURA E8 Midnight Silver NAD 15722 ·','Breville · BES878','Breville · BES876','The Best Bean To Cup','JURA US: E8 Midnight Silver NAD 15722','James Hoffmann: The Best Bean To Cup']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  assert.equal(c.routes[contentId(s.sourcePages[0].sourcePath)].path,a.routes[e][s.sourcePages[0].sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('integrated-grinder guide keeps exact generations, no-touch limits, dated US prices and maintenance cautions',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[93,['BES878','BES876','ECAM29084SB','15722','Sage']],[95,['$849.95','$799.95','$899.95','$2,599','15722']],[103,['P.A.G.2','5','16']],[111,['ECAM29084SB','LatteCrema','My Latte']],[112,['HP3','27','Hot','Light','Sweet']],[128,['Magnifica Plus','Evo Next']],[132,['30','LCD','ThermoJet','54 mm','$849.95','$50','$150']],[138,['P.A.G.2','27','3.5','HP3','$2,599']],[165,['25','2026']],[205,['15','2022','35','23']]])for(const value of values)assert(t(i).includes(value),`${e} ${i}: ${value}`);
  assert(/niet naast elkaar getest|nicht nebeneinander getestet|pas testé.*côte à côte/.test(t(13)));
  assert(/geen Coffeedant-vergelijkingstest|kein Coffeedant-Vergleichstest|pas un test comparatif Coffeedant/.test(t(166)));
  assert(/alleen tijdens het malen|nur im Betrieb|uniquement lorsqu’il tourne/.test(t(102)));
  assert(/droog moeten blijven|trocken bleiben müssen|garder sèches/.test(t(117)));
  assert(/niet door de gebruiker uitneembare|nicht vom Nutzer entnehmbare|non amovible par l’utilisateur/.test(t(119)));
  assert(/niet bestelbaar|nicht bestellbar|pas commandable/.test(t(138)));
  assert(/geen geverifieerde specificaties|keine verifizierten Spezifikationen|pas des caractéristiques vérifiées/.test(t(90)));
 }
});

test('integrated-grinder guide translates all FAQ pairs and retains owner/media limitations rather than inventing testing',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(let i=143;i<=158;i++)assert.notEqual(t(i),s.segments[i].source);
  for(const v of s.segments){const first=s.segments.find(x=>x.source===v.source);assert.equal(c.segments[v.id].text,c.segments[first.id].text);}
  assert(/niet op elke BES878|nicht auf jede BES878|pas.*à toutes les BES878/.test(t(67)));
  assert(/NIET article15722|NICHT article15722|PAS article15722/.test(t(87)));
  assert(/geen betrouwbaarheidspercentage|keine Zuverlässigkeitsquote|pas un taux de fiabilité/.test(t(196)));
  assert(/niet hun exacte specificaties of prijzen|nicht deren genaue Spezifikationen oder Preise|pas les caractéristiques ou prix exacts/.test(t(163)));
  for(const i of [214,216,218])assert(/geen Coffeedant-testfoto|kein Coffeedant-Testfoto|pas une photographie de test Coffeedant/.test(t(i)));
  assert(/Noord-Amerikaanse instructies niet|nordamerikanische Anweisungen weder ersetzen|ne remplacent pas les instructions nord-américaines/.test(t(124)));
 }
});
