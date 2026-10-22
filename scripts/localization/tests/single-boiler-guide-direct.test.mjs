import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/single-boiler-guide-batch-48.source.json')),a:await readJson(path.join(root,'localization/authored/single-boiler-guide-batch-48.json'))});

test('complete single-boiler guide translates every frozen slot in NL DE FR without renaming established routes',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.sourcePages[0].sourcePath,'/espresso-machine/single-boiler/');assert.equal(s.segments.length,290);assert.equal(new Set(s.segments.map(v=>v.source)).size,266);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,255);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Coffee Kev','ECM: Classika PID','Whole Latte Love: ECM Classika PID','Clive Coffee: ECM Classika PID','Gaggia: Classic Pro E24','Profitec Go Review 2025 + Pro Barista Coffee Making Demo','Silvia','CLASSIKA-PID','ECM: Classika PID ·','Rancilio · Silvia','ECM · CLASSIKA-PID']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);const first=s.segments.find(z=>z.source===v.source);assert.equal(x.text,c.segments[first.id].text);}
  assert.equal(c.routes[contentId(s.sourcePages[0].sourcePath)].path,a.routes[e][s.sourcePages[0].sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('single-boiler guide retains current US generations, original GO successor boundary and dated price/voltage facts',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[24,['0.75 L']],[28,['11']],[63,['E24','3.5 oz','58 mm','110-120V','2023','Evo']],[80,['58 mm','PID','OPV','$1,199','24','2026','GO 2.0','2025']],[88,['2.8 L','210','362','381','410']],[90,['115 V','900 W']],[94,['GO 2.0','OLED']],[120,['2025','Fast Heat Up']],[134,['115 V/900 W','GO 2.0']],[144,['$995','15','2026','PID']],[150,['235 W','340 H','290 D mm']],[233,['$1,199','24','2026','GO 2.0']],[235,['$549.00','E24','23','2026']],[237,['$995.00','$895','15','2026']],[239,['$1,649.00','18','2026']]])for(const value of values)assert(t(i).includes(value),`${e} ${i}: ${value}`);
  assert(/niet de GO 2.0|nicht die.*GO 2.0|pas la GO 2.0/.test(t(97)));
  assert(/niet de Evo|Nicht die Evo|pas l’Evo/.test(t(63)));
  assert(/geen Coffeedant-test|kein Coffeedant-Test|pas un test Coffeedant/.test(t(81)));
  assert(/niet aan de originele|nicht der originalen|ne pas attribuer.*à la GO américaine originale/.test(t(136)));
 }
});

test('single-boiler guide preserves refill/heat safety, optional flow control and bounded owner/video evidence',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  assert(/geen bewijs van een defecte boiler|kein Beleg für einen defekten Kessel|pas la preuve d’une chaudière défectueuse/.test(t(100)));
  assert(/volle tank bewijst niet|voller Tank belegt keinen|réservoir plein ne prouve pas/.test(t(103)));
  assert(/hittebestendige|hitzefestes|résistant/i.test(t(162)));
  assert(/deskundige diagnose|qualifizierte Diagnose|diagnostic qualifié/.test(t(52)));
  assert(/Niet overal|Nicht generell|Pas systématiquement/.test(t(37)));
  assert(/geen gemeten serveertijd|gemessene.*nicht versprochen|Aucun temps mesuré/.test(t(163)));
  assert(/geen uitvalpercentage|keine Ausfallquote|aucun taux de panne/.test(t(72)));
  assert(/commerciële belangen|kommerzielle Interessen|intérêts commerciaux/.test(t(132)));
  for(const i of [271,273])assert(/geen Coffeedant-testfoto|kein Coffeedant-Testfoto|pas une photographie de test Coffeedant/.test(t(i)));
  assert(/Geen accessoire|Kein Zubehör|Aucun accessoire/.test(t(269)));
 }
});
