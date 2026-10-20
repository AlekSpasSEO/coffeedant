import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
import {composeDirect} from '../compose-direct.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('complete tamp guide covers every frozen slot in Dutch German and French',async()=>{
 const s=await get('tamp-guide-batch-33.source.json'),a=await get('tamp-guide-batch-33.json');
 assert.equal(s.segments.length,227);assert.equal(new Set(s.segments.map(x=>x.source)).size,218);
 assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.deepEqual(a.editions,['nl','de','fr']);assert.equal(Object.keys(a.translations).length,217);
 assert.deepEqual(a.preserveSource,[106]);assert.equal(s.segments[106].source,'Decent OCD (Ona Coffee Distributor)');
 const covered=new Set([...Object.keys(a.translations),...a.preserveSource].map(i=>s.segments[i].source));assert(s.segments.every(x=>covered.has(x.source)));
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,vs])=>[s.segments[i].source,vs[e]]));expected.set(s.segments[106].source,s.segments[106].source);for(const x of s.segments){const v=c.segments[x.id];assert.equal(v.source,x.source);assert.equal(v.policyHash,policyHash);assert.equal(v.provider,'codex-direct');assert.equal(validateTranslation(x.source,v.text),v.text);assert.equal(v.text,expected.get(x.source));}assert.equal(c.routes[contentId('/journal/espresso-tamp-guide/')].path,a.routes[e]['/journal/espresso-tamp-guide/']);}
});

test('all eight tamp checks retain complete frozen composition and tool limitations',async()=>{
 const s=await get('tamp-guide-batch-33.source.json'),a=await get('tamp-guide-batch-33.json'),p=await get('tamp-checks-batch-33.parts.json'),c=composeDirect(p,s),old=await get('burr-checks-batch-31.parts.json');
 assert.equal(Object.keys(c.translations).length,16);for(const[i,vs]of Object.entries(c.translations))assert.deepEqual(a.translations[i],vs);
 for(const k of ['comparison','repeat','result','distinction','record'])assert.deepEqual(p.chunks[k],old.chunks[k]);
 for(const e of a.editions){
  assert(/Stop|Stoppen|Arrêtez/.test(p.chunks.rule2[e]));
  assert(/niet als vervanging|nicht als Ersatz|pas le tamper à la place/.test(p.chunks.rule3[e]));
  assert(/garandeert geen|garantieren aber weder|sans garantir/.test(p.chunks.idea7[e]));
  assert(/niet dat|nicht die|pas que/.test(p.chunks.mechanism7[e]));
  assert(/alleen als|nur bei|que si/.test(p.chunks.rule8[e]));
 }
});

test('tamp guide preserves original force units, basket fit, owner limits and all structured answers',async()=>{
 const a=await get('tamp-guide-batch-33.json'),s=await get('tamp-guide-batch-33.source.json');
 for(const e of a.editions){
  for(const[i,values]of [[14,['58.5 mm','18 g','Normcore','VST']],[16,['Normcore','V4/V4.1']],[18,['30 lb']],[35,['18','58','9','25','30']],[37,['13.6','133']],[42,['90','25','35']],[51,['15','20%']],[67,['Normcore V4','$40','2 lb']],[69,['Decent','$85','10','40','50,000+']],[94,['2018','Matter']],[103,['30.0','28','32','15','45']],[114,['58','58.4','58.5']],[146,['Decent','Londinium','Gaggia Classic']],[155,['La Pavoni Europiccola','35','40','10','12']],[157,['Flair 58','Cafelat Robot','20','25']],[164,['10','±5']],[166,['±3']],[171,['18','20','58']],[173,['21','24','58']],[175,['51','14','16']]])for(const v of values)assert(a.translations[i][e].includes(v),`${e} ${i}: ${v}`);
  assert(/vijftigduizend|fünfzigtausend|cinquante mille/.test(a.translations[69][e]));
  assert(/geen test|kein Test|pas un test/.test(a.translations[16][e]));
  assert(/beweert niet|weder ein Kraftwert|ne prétend pas/.test(a.translations[214][e]));
  assert(/geen bewijs|belegt kein|sans prouver/.test(a.translations[219][e]));
  const c=await loadCache(e);for(const[i,j]of [[209,222],[211,224],[213,226]]){assert.equal(s.segments[j].kind,'json');assert.equal(c.segments[s.segments[j].id].text,a.translations[i][e]);}
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});
