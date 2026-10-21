import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/bean-reviews-batch-41.source.json')),a:await readJson(path.join(root,'localization/authored/bean-reviews-batch-41.json'))});

test('both full Blue Bottle reviews cover every frozen slot and preserve their stable regional routes',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,2);assert.equal(s.segments.length,155);assert.equal(new Set(s.segments.map(v=>v.source)).size,126);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,122);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Blue Bottle Coffee Giant Steps','Blue Bottle Coffee Night Light Decaf','Blue Bottle Coffee','Blue Bottle Bella Donovan']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  for(const p of s.sourcePages)assert.equal(c.routes[contentId(p.sourcePath)].path,a.routes[e][p.sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('Giant Steps keeps distinct press and pour-over ratios, historical samples and explicit Korean packaging limits',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[3,['250 g']],[53,['12 oz','250 g']],[54,['2026']],[55,['250 g']],[56,['2019','Coffee Cantata','Chemex','V60']],[58,['1:13','30 g','390 g']],[59,['27 g','350 g','1:13']],[61,['30 g','340 g']],[64,['1:13','17ft Ceiling']],[79,['2019','2026-10-21']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/wiskundig vertrekpunt|mathematischer Ausgangspunkt|départ mathématique/.test(t(58)));
  assert(/geen getest Coffeedant-recept|kein getestetes Coffeedant-Rezept|pas une recette testée par Coffeedant/.test(t(58)));
  assert(/niet stilzwijgend|nicht still|Ne combinez pas silencieusement/.test(t(59)));
  assert(/niet als geverifieerde zakprijs|nicht als verifizierten Beutelpreis|pas.*prix de sachet vérifié/.test(t(62)));
  assert(/geen gecontroleerde Coffeedant-proeverij|keine kontrollierte Coffeedant-Verkostung|aucune dégustation contrôlée Coffeedant/.test(t(65)));
 }
});

test('Night Light preserves roast-label tension, unnamed water process, regional samples and nonzero caffeine uncertainty',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[112,['12 oz','250 g']],[114,['250 g']],[115,['2026','200 g']],[137,['200 g','2026-10-21']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/beide signalen|beide Hinweise|ces deux signaux/.test(t(113)));
  assert(/geen exacte productspecifieke|kein genaues produktspezifisches|aucun ratio produit exact/.test(t(117)));
  assert(/geen bewijs van nul cafeïne|nicht nachweislich koffeinfrei|pas preuve de zéro caféine/.test(t(118)));
  assert(/geen klinische uitspraak|keine klinische Aussage|aucune affirmation clinique/.test(t(118)));
  assert(/geen geverifieerde.*korting|keinen verifizierten.*Rabatt|ni prix livré vérifié ni remise/.test(t(121)));
  assert(/geen van beide|keines belegt|ni l’une ni l’autre/.test(t(143)));
  for(const v of s.segments.filter(x=>x.kind==='json')){const first=s.segments.find(x=>x.source===v.source);assert.equal(c.segments[v.id].text,c.segments[first.id].text);}
 }
});
