import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/bean-guide-batch-43.source.json')),a:await readJson(path.join(root,'localization/authored/bean-guide-batch-43.json'))});

test('complete French press guide and Bella Donovan cover their immutable task in all three languages',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,2);assert.equal(s.segments.length,195);assert.equal(new Set(s.segments.map(v=>v.source)).size,164);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,162);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Blue Bottle Coffee Bella Donovan','Blue Bottle Giant Steps']);const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);const first=s.segments.find(x=>x.source===v.source);assert.equal(x.text,c.segments[first.id].text);}
  for(const p of s.sourcePages)assert.equal(c.routes[contentId(p.sourcePath)].path,a.routes[e][p.sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
 assert.equal(a.routes.fr['/coffee-beans/blue-bottle-bella-donovan/'],'/blue-bottle-bella-donovan/');assert.equal(a.routes.fr['/coffee-beans/best-coffee-beans-for-french-press/'],'/meilleurs-cafes-pour-presse-francaise/');
});

test('press guide retains distinct roaster ratios, unmeasured arithmetic, Korean package limits and nonzero-caffeine uncertainty',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[17,['1:13','1:15','Giant Steps','Equator']],[18,['1:13','390']],[19,['1:15','30 g','450 g','Peet’s Big Bang','Night Light']],[64,['2026']],[66,['250 g']],[67,['12 oz','340 g','30 g']],[82,['1:13','1:15']],[108,['2026','21','2026']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/geen Coffeedant-extractie|keine Coffeedant-Extraktion|pas une extraction Coffeedant/.test(t(18)));
  assert(/Verzin.*geen precisie|Erfinden.*keine Präzision|N’inventez pas de précision/.test(t(19)));
  assert(/elf theoretische|elf theoretische|onze préparations théoriques/.test(t(67)));
  assert(/geen prijsrangschikking|weder Preisrangliste|ni classement de prix/.test(t(69)));
  assert(/niet gemeten nul cafeïne|nicht gemessene Null-Koffein|ne signifie pas zéro caféine mesuré/.test(t(86)));
  assert(/geen van beide met melk geproefd|keinen der beiden mit Milch verkostet|n’a goûté ni l’un ni l’autre avec du lait/.test(t(90)));
 }
});

test('Bella Donovan retains US versus Canada roast labels, partial natural component, old sample limits and separate filter recipe',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[150,['Bella Donovan','Moka-Java']],[151,['12 oz']],[152,['2017','Coffee Cantata','2026']],[154,['27 g','350 g']],[155,['Moka-Java']],[157,['12 oz']],[175,['2017','2026-10-21']],[177,['AeroPress','2026-10-21']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/Canadese|kanadisches|canadienne/.test(t(151)));
  assert(/niet vaststellen hoe de blend van 2026 smaakt|nicht belegen, wie der Blend von 2026 schmeckt|ne peut établir le goût de l’assemblage de 2026/.test(t(152)));
  assert(/geen prijs of korting|weder Preis noch Rabatt|ni prix ni remise/.test(t(158)));
  assert(/Geen van beide.*Coffeedant-proeverij|Keiner.*Coffeedant-Direktverkostung|Aucune.*dégustation Coffeedant/.test(t(160)));
  assert(/betekent geen gedeelde|bedeutet nicht gleiche|n’implique pas les mêmes/.test(t(161)));
 }
});
