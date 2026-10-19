import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('complete Nordic guide covers every frozen slot in Dutch German and French',async()=>{
 const s=await get('nordic-guide-batch-32.source.json'),a=await get('nordic-guide-batch-32.json');
 assert.equal(s.segments.length,190);assert.equal(new Set(s.segments.map(x=>x.source)).size,182);
 assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.deepEqual(a.editions,['nl','de','fr']);assert.equal(Object.keys(a.translations).length,167);
 assert.deepEqual(a.preserveSource,[42,78,85,91,95,104,106,112,113,123,125,146,149,151,153]);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['210-218°C','Agtron 55','fika','Oslo','Stockholm','kokekaffe','kaffekask','Moccamaster','Wilfa Performance','Chad Wang','George Peng','DF54','Timemore Sculptor 064s','DF64 Gen 2','Femobook A4Z']);
 const covered=new Set([...Object.keys(a.translations),...a.preserveSource].map(i=>s.segments[i].source));assert(s.segments.every(x=>covered.has(x.source)));
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,vs])=>[s.segments[i].source,vs[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);for(const x of s.segments){const v=c.segments[x.id];assert.equal(v.source,x.source);assert.equal(v.policyHash,policyHash);assert.equal(v.provider,'codex-direct');assert.equal(validateTranslation(x.source,v.text),v.text);assert.equal(v.text,expected.get(x.source));}assert.equal(c.routes[contentId('/journal/nordic-style-coffee/')].path,a.routes[e]['/journal/nordic-style-coffee/']);}
});

test('Nordic guide keeps source recipes, historical figures and original-market amounts',async()=>{
 const a=await get('nordic-guide-batch-32.json');
 for(const e of a.editions){
  for(const[i,values]of [[28,['17','19','21','1917-1927']],[41,['8-10','6-7','196-207°C']],[44,['190-210°C','6:30','8:00','90','18.75%','12-15','3-5','25-30%']],[48,['180-220°C','230-260°C','Scott Rao','RoR']],[63,['70.9 kg/hl','1,220-1,370','Kaya Carretta']],[65,['10,000','1,800','Yirgacheffe','Sidamo','Harrar','2-3°C']],[86,['19','1756-1817','10 AM','3 PM']],[101,['15+','Drop Coffee','Tim Wendelboe']],[121,['2,300','1,800','SL28']],[126,['2025','96°C','80°C','Melodrip','Panama Geisha']],[131,['65-70g','15g','250g','1:16.7','20g','300g','1:15']],[144,['>$250']],[155,['Baratza Encore ESP','$170-200','1:14-1:15']],[160,['15g','250g','1:16.7','2:30-3:00','70g','0:00','0:45','110g','1:15','96-99°C']]])for(const v of values)assert(a.translations[i][e].includes(v),`${e} ${i}: ${v}`);
  assert(/tienduizend|zehntausend|dix mille/.test(a.translations[65][e]));
  assert(/niet als universele|nicht als universelle|non comme normes/.test(a.translations[170][e]));
  assert(/niet een Noordse|keine nordische|pas une torréfaction nordique/.test(a.translations[181][e]));
  assert(/bewijst geen|belegt weder|n’établit ni/.test(a.translations[182][e]));
 }
});

test('Nordic structured answers preserve qualifications and approved Dutch dosing URL',async()=>{
 const a=await get('nordic-guide-batch-32.json'),s=await get('nordic-guide-batch-32.source.json');
 for(const e of a.editions){const c=await loadCache(e);for(const[i,j]of [[165,185],[167,187],[169,189]]){assert.equal(s.segments[j].kind,'json');assert.equal(c.segments[s.segments[j].id].text,a.translations[i][e]);}
  assert(/geen eenduidige|keine einheitliche|pas de définition unique/.test(a.translations[165][e]));
  assert(/rust|Ruhe|repos/.test(a.translations[167][e]));
  assert(/Nee\.|Nein\.|Non\./.test(a.translations[169][e]));
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});
