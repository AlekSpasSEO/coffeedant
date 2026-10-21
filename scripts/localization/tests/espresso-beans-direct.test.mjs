import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/bean-reviews-batch-42.source.json')),a:await readJson(path.join(root,'localization/authored/bean-reviews-batch-42.json'))});

test('both complete dark espresso reviews cover every frozen slot and keep registered URLs',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,2);assert.equal(s.segments.length,126);assert.equal(new Set(s.segments.map(v=>v.source)).size,100);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,96);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Blue Bottle Coffee 17ft Ceiling Espresso','Blue Bottle Hayes Valley Espresso','Blue Bottle Coffee Hayes Valley Espresso','Blue Bottle 17ft Ceiling Espresso']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);const first=s.segments.find(x=>x.source===v.source);assert.equal(x.text,c.segments[first.id].text);}
  for(const p of s.sourcePages)assert.equal(c.routes[contentId(p.sourcePath)].path,a.routes[e][p.sourcePath]);
  assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
 assert.equal(a.routes.fr['/coffee-beans/blue-bottle-17ft-ceiling-espresso/'],'/blue-bottle-17ft-ceiling-espresso/');assert.equal(a.routes.fr['/coffee-beans/blue-bottle-hayes-valley-espresso/'],'/blue-bottle-hayes-valley-espresso/');
});

test('17ft keeps declared robusta, unknown lot details, separate filter recipe and absent price verification',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[18,['17ft Ceiling','Mint Plaza','Hayes Valley']],[19,['12 oz']],[23,['27 g','350 g','27 g']],[26,['12 oz']],[43,['17ft','2026-10-21']],[47,['12 oz','2026-10-21']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/niet een actuele blinde vergelijking|keinen aktuellen Blindvergleich|pas une comparaison actuelle à l’aveugle/.test(t(21)));
  assert(/geen voorschrift|keine Vorgabe|pas une prescription/.test(t(23)));
  assert(/beweert geen actuele korting|behauptet keinen aktuellen Rabatt|n’annonce aucune remise actuelle/.test(t(26)));
  assert(/geen synoniemen|weder Synonyme|ni des synonymes/.test(t(28)));
  assert(/geen Coffeedant-extractiemetingen|keine Coffeedant-Extraktionsmessungen|pas de mesures d’extraction Coffeedant/.test(t(49)));
 }
});

test('Hayes Valley keeps dark washed Americas identity, uncertain home recipe, orange note and theoretical dose count',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[81,['Hayes Valley Espresso','Blue Bottle']],[83,['Coffee Cantata']],[85,['27 g','350 g']],[88,['12 oz','18 g']],[89,['12 oz']],[91,['17ft Ceiling','Hayes Valley']],[108,['2026-10-21']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/geen universele piekdag|keinen universellen optimalen Tag|pas un jour d’apogée universel/.test(t(87)));
  assert(/negentien theoretische|neunzehn theoretische|dix-neuf doses théoriques/.test(t(88)));
  assert(/geen actuele prijs- of kortingsclaim|weder einen aktuellen Preis noch einen Rabatt|ni prix ni remise actuels/.test(t(89)));
  assert(/mogen niet worden samengevoegd|dürfen nicht verschmolzen|ne doivent pas être fusionnées/.test(t(91)));
  assert(/bewijzen niet|belegen nicht|ne prouvent pas/.test(t(112)));
 }
});
