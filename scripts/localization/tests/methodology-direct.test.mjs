import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/methodology-batch-39.source.json')),a:await readJson(path.join(root,'localization/authored/methodology-batch-39.json'))});

test('complete methodology page covers every immutable source slot in NL DE FR with only literal placeholders retained',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,1);assert.equal(s.segments.length,352);assert.equal(new Set(s.segments.map(v=>v.source)).size,348);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,346);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['[PRODUCT BOX]','[PRODUCT RATING]']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(validateTranslation(v.source,x.text),x.text);}
  assert.equal(c.routes[contentId('/testing/')].path,a.routes[e]['/testing/']);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
  for(const[i,j]of [[2,349],[3,350],[5,351]]){assert.equal(s.segments[j].kind,'json');assert.equal(c.segments[s.segments[i].id].text,c.segments[s.segments[j].id].text);}
 }
});

test('methodology retains exact bench units, score weights, ratios and source placeholder tokens without local conversion',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[7,['[PRODUCT RATING]']],[12,['50','70','mg/L','CaCO3']],[13,['35','45','mg/L','CaCO3']],[14,['110','140','mg/L']],[15,['7.2']],[21,['230 V','120 V']],[24,['18 g','20 g']],[25,['15 kg']],[26,['WDT','0.30','0.35','mm']],[27,['0.01 g']],[39,['100','[PRODUCT RATING]']],[68,['1°C','1.0 bar']],[71,['92°C','94°C']],[80,['8.5','9.5','bar']],[83,['18','36','25','32','93°C']],[84,['18','40','28','36','94°C','95°C']],[86,['18','32','92°C']],[94,['4','6°C','350 ml','200 ml']],[95,['55°C','60°C']],[98,['55°C','25','45','HX']],[125,['500 g']],[132,['18.0 g','0.01 g']],[133,['0.2 g']],[135,['0.3 g']],[176,['1','2.2','94°C','95°C','2.5']],[181,['150 ml']],[197,['1','10']],[243,['18','36','28','32']],[261,['kWh','45']],[295,['1','1.5']],[297,['1','3']],[335,['0.1 g','0.01 g']],[343,['0.5 g','95°C']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  for(const i of [...Array.from({length:20},(_,k)=>41+k),281,283,285,287,289])assert.equal(validateTranslation(s.segments[i].source,t(i)),t(i));
  assert.equal(t(326),'[PRODUCT BOX]');assert.equal(t(328),'[PRODUCT RATING]');
 }
});

test('methodology keeps all five FAQ answers and the stock, firmware, outlier and independence qualifications',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const i of [314,315,316,317,318,319,320,321,322,323])assert.notEqual(t(i),s.segments[i].source);
  assert(/niet het oordeel|nicht das Urteil|pas le verdict/.test(t(315)));
  assert(/tenzij anders vermeld|sofern nicht anders angegeben|sauf indication contraire/.test(t(317)));
  assert(/beide manieren|beide Wege|deux configurations/.test(t(319)));
  assert(/geen padprestaties|keine Padleistung|ne notons pas les dosettes/.test(t(323)));
  assert(/nooit geld|niemals Geld|n’acceptons jamais d’argent/.test(t(306)));
  assert(/tweede exemplaar|zweites Gerät|second exemplaire/.test(t(308)));
  assert(/herhalen.*betrokken|wiederholen.*betroffene|répétons les sections concernées/.test(t(310)));
  assert(/niet op één proever|nicht auf einen Verkoster|ne dépendons pas d’un seul dégustateur/.test(t(312)));
  assert(/niet van dure|nicht teure|plus que le matériel/.test(t(341)));
 }
});
