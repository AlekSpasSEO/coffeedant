import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const task=()=>readJson(path.join(root,'localization/authored/decaf-switching-batch-38.source.json'));
const authored=()=>readJson(path.join(root,'localization/authored/decaf-switching-batch-38.json'));

test('regular/decaf guide and five current bean additions cover their complete immutable task in NL DE FR',async()=>{
 const s=await task(),a=await authored();
 assert.equal(s.segments.length,156);assert.equal(s.sourcePages.length,6);assert.equal(new Set(s.segments.map(v=>v.source)).size,132);
 assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.equal(Object.keys(a.translations).length,131);assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Timemore Sculptor 078S']);
 const covered=new Set([...Object.keys(a.translations).map(i=>s.segments[i].source),...a.preserveSource.map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  const p='/grinder/best-grinders-for-switching-regular-and-decaf/';assert.equal(c.routes[contentId(p)].path,a.routes[e][p]);
  assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
  if(e==='fr')assert.equal(c.routes[contentId('/coffee-beans/equator-blend/')].path,'/cafe-en-grains/melange-equateur/');
 }
});

test('guide preserves nonzero retention, dated exact US variants, electrical precautions and seven structured FAQ answers',async()=>{
 const s=await task();
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[39,['0.55','1.8','Eureka','Kaffeemacher','Zero 65 AP']],[60,['65 mm']],[79,['Zero 65 AP','Opus 2','0–10','K-Ultra','Sculptor']],[81,['110 V','$499','20','2026','Opus 2','$199.95','15','Timemore','K-Ultra']],[116,['078S','078','064S']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/geen.*cafeïnevrije|keine.*koffeinfreien|aucune.*sans caféine/i.test(t(38)));
  assert(/Verzin geen percentage|keinen erfundenen Prozentsatz|N’inventez pas un pourcentage/.test(t(40)));
  assert(/geen extractiegarantie|keine Extraktionsgarantie|pas une garantie d’extraction/.test(t(79)));
  assert(/geen actuele afrekenbeloften|keine aktuellen Kassenzusagen|pas des promesses de prix actuels/.test(t(81)));
  assert(/stekker eruit|Ziehen Sie.*Stecker|Débranchez/.test(t(83)));
  assert(/geen resterende cafeïne|kein Restkoffein|ne mesure pas la caféine résiduelle/.test(t(84)));
  assert(/niet.*naast elkaar getest|weder.*nebeneinander getestet|ni testé.*côte à côte/.test(t(92)));
  assert(/bepalen.*niet|bestimmen nicht|ne déterminent pas/.test(t(93)));
  for(let k=0;k<14;k++){assert.equal(s.segments[142+k].kind,'json');assert.equal(t(95+k),t(142+k));assert.notEqual(t(142+k),s.segments[142+k].source);}
  assert(/geen.*testfoto|kein Coffeedant-Testfoto|pas une photo de test/.test(t(64)));
 }
});

test('October 21 bean updates keep conflicting doses, distinct device recipes and unmeasured caffeine explicit',async()=>{
 const s=await task();
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[1,['50','800','1:16','45','1:17.8','Counter Culture','21','2026']],[4,['19','21','2026','Guatemala']],[7,['63','1','Kalita Wave','30','500','3:30–4:00','1:17']],[10,['1:15','66','1,000','Fellow Clara','45','675','V60','24','360']],[13,['30','300','Bialetti','AeroPress','18','200','50','46']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/ongemeten|ungemessenen|non mesurée/.test(t(1)));
  assert(/kopieer geen oud|übertragen Sie kein altes|ne transposez pas un ancien/.test(t(4)));
  assert(/geen espresso-opbrengst|keine Espressoausbeute|n’est pas un rendement expresso/.test(t(7)));
  assert(/geen.*filterdragerdoel|kein.*Siebträgerziel|pas de cible.*porte-filtre/.test(t(10)));
  assert(/geen Coffeedant-extracties|keine Coffeedant-Extraktionen|pas des extractions Coffeedant/.test(t(13)));
  for(const i of [3,6,9,12,15]){assert(t(i).includes('2026-10-21'));assert(/geen.*prijsclaim|keine.*Preisbehauptung|aucune.*affirmation de prix/i.test(t(i)));}
 }
});
