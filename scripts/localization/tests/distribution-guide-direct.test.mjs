import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
import {composeDirect} from '../compose-direct.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('concurrent bean refresh delta preserves five complete reviews and evidence limits',async()=>{
 const s=await get('decaf-refresh-20261020.source.json'),a=await get('decaf-refresh-20261020.json');
 assert.equal(s.sourcePages.length,5);assert.equal(s.segments.length,16);assert.equal(Object.keys(a.translations).length,16);
 assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 const shared=await get('shared-refresh-batch-34.source.json'),sharedAuthored=await get('shared-refresh-batch-34.json');assert.equal(shared.segments.length,2);assert(shared.segments.every(x=>x.kind==='json'));assert.equal(shared.snapshotHash,digest(JSON.stringify(shared.segments)));assert.equal(sharedAuthored.snapshotHash,shared.snapshotHash);
 for(const e of a.editions){const c=await loadCache(e);for(const[i,vs]of Object.entries(a.translations)){const x=s.segments[i],v=c.segments[x.id];assert.equal(validateTranslation(x.source,vs[e]),vs[e]);assert.equal(v.text,vs[e]);assert.equal(v.policyHash,policyHash);assert.equal(v.provider,'codex-direct');}for(const[i,vs]of Object.entries(sharedAuthored.translations)){const x=shared.segments[i];assert.equal(validateTranslation(x.source,vs[e]),vs[e]);assert.equal(c.segments[x.id].text,vs[e]);const variants=Object.values(c.segments).filter(v=>v.source===x.source);assert(variants.length>=2);assert(variants.every(v=>v.text===vs[e]));}
  for(const[i,values]of [[1,['13','50/50','Swiss Water']],[4,['45','675','1:15']],[7,['18','45','Decaf Black Cat','1','Intelligentsia']],[10,['1:18','5','6','Lempira','Honduras']],[13,['28','475','56','19.5','23–28','1.5']]])for(const value of values)assert(a.translations[i][e].includes(value),`${e} ${i}: ${value}`);
  assert(/Fellow[- ]Clara/.test(a.translations[4][e]));
  assert(/Coffeedant/.test(a.translations[1][e]));
 }
});

test('complete distribution guide covers all frozen slots in Dutch German and French',async()=>{
 const s=await get('distribution-guide-batch-34.source.json'),a=await get('distribution-guide-batch-34.json');
 assert.equal(s.segments.length,370);assert.equal(new Set(s.segments.map(x=>x.source)).size,361);
 assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.deepEqual(a.editions,['nl','de','fr']);assert.equal(Object.keys(a.translations).length,360);
 assert.deepEqual(a.preserveSource,[356]);assert.equal(s.segments[356].source,'Barista Hustle: Weiss Distribution Technique');
 const current=await get('distribution-guide-current-batch-34.source.json');assert.equal(current.snapshotHash,digest(JSON.stringify(current.segments)));assert(s.segments.every(x=>current.segments.some(c=>c.id===x.id&&c.source===x.source)));
 const covered=new Set([...Object.keys(a.translations),...a.preserveSource].map(i=>s.segments[i].source));assert(s.segments.every(x=>covered.has(x.source)));
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,vs])=>[s.segments[i].source,vs[e]]));expected.set(s.segments[356].source,s.segments[356].source);for(const x of current.segments){const v=c.segments[x.id];assert.equal(v.source,x.source);assert.equal(v.policyHash,policyHash);assert.equal(validateTranslation(x.source,v.text),v.text);}for(const x of s.segments){const v=c.segments[x.id];assert.equal(v.provider,'codex-direct');assert.equal(v.text,expected.get(x.source));}assert.equal(c.routes[contentId('/journal/ground-distribution/')].path,a.routes[e]['/journal/ground-distribution/']);}
});

test('both distribution checks retain complete paragraphs and passing repeated wording',async()=>{
 const s=await get('distribution-guide-batch-34.source.json'),a=await get('distribution-guide-batch-34.json'),p=await get('distribution-checks-batch-34.parts.json'),c=composeDirect(p,s),old=await get('tamp-checks-batch-33.parts.json');
 assert.equal(Object.keys(c.translations).length,4);for(const[i,vs]of Object.entries(c.translations))assert.deepEqual(a.translations[i],vs);
 for(const k of ['comparison','repeat','result','distinction','record'])assert.deepEqual(p.chunks[k],old.chunks[k]);
 for(const e of a.editions){assert(/niet van|ununterscheidbar|distinguer/.test(p.chunks.mechanism1[e]));assert(/zo weinig|wenigsten|minimum/.test(p.chunks.rule1[e]));assert(/niet een|keine|pas un/.test(p.chunks.mechanism2[e]));assert(/niet meer|nicht weiter|Cessez/.test(p.chunks.rule2[e]));}
});

test('distribution guide preserves figures, source-market units, owner limits and all FAQ answers',async()=>{
 const a=await get('distribution-guide-batch-34.json'),s=await get('distribution-guide-batch-34.source.json');
 for(const e of a.editions){
  for(const[i,values]of [[13,['Breville Bambino','Niche Zero']],[17,['15-20%']],[22,['0.5']],[23,['8-10°C']],[30,['0.3-0.4','0.6']],[34,['3D','$15-25']],[80,['Breville Barista Express','2.7','CO2']],[82,['0.05-0.1']],[89,['60-75%']],[98,['Niche Zero']],[137,['$40-80','$35','$25']],[139,['IMS','VST','±0.02','±0.15']],[143,['0.5-1.0%','2-4%']],[156,['36','____']],[184,['<30']],[206,['5-10']],[210,['VST LAB Coffee III','$700+','$0']],[218,['(%)','× TDS','÷','100']],[221,['18-22%','SCA']],[274,['2-3','1','Baratza Sette 270','Niche Zero']],[278,['205-210°F']],[280,['2-3°F']],[285,['Program','190°F','200°F','210°F']],[289,['0','7-8','3','30%']],[297,['3D','$5','100','$2','$7']],[301,['0.1','Hario V60','$25','Acaia Lunar','$250']],[313,['30 lb','$60-90']],[362,['massage-techniques','Wikimedia Commons','CC BY-SA 2.0','WebP']]])for(const v of values)assert(a.translations[i][e].includes(v),`${e} ${i}: ${v}`);
  for(const i of [155,156,157,194,195,196,197,198,199])assert(a.translations[i][e].includes('____'));
  assert(/isoleert WDT niet|isoliert WDT aber nicht|n’isole pas le WDT/.test(a.translations[14][e]));
  assert(/zonder blinde|ohne blinden|sans comparaison à l’aveugle/.test(a.translations[15][e]));
  assert(/bewijst niet|belegt keine|ne prouve pas/.test(a.translations[12][e]));
  assert(/geen bewijs|kein Beweis|pas une preuve/.test(a.translations[355][e]));
  const c=await loadCache(e);for(const[i,j]of [[349,364],[350,365],[351,366],[352,367],[353,368],[354,369]]){assert.equal(s.segments[j].kind,'json');assert.equal(c.segments[s.segments[j].id].text,a.translations[i][e]);}
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});
