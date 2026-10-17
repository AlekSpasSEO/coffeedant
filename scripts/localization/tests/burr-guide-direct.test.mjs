import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId} from '../core.mjs';
import {composeDirect} from '../compose-direct.mjs';
const get=async name=>readJson(path.join(root,'localization/authored',name));

test('complete burr guide covers every immutable slot in Dutch German and French',async()=>{
 const s=await get('burr-guide-batch-31.source.json'),a=await get('burr-guide-batch-31.json');
 assert.equal(s.segments.length,189);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);
 assert.deepEqual(a.editions,['nl','de','fr']);assert.equal(Object.keys(a.translations).length,172);
 assert.deepEqual(a.preserveSource,[79,80,82,83,86,87]);
 for(const i of a.preserveSource)assert(/^[+\d.\s–°Cgk]+$/.test(s.segments[i].source));
 const covered=new Set([...Object.keys(a.translations),...a.preserveSource].map(i=>s.segments[i].source));assert(s.segments.every(x=>covered.has(x.source)));
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,vs])=>[s.segments[i].source,vs[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);for(const x of s.segments){const v=c.segments[x.id];assert.equal(v.source,x.source);assert.equal(v.policyHash,policyHash);assert.equal(v.provider,'codex-direct');assert.equal(validateTranslation(x.source,v.text),v.text);assert.equal(v.text,expected.get(x.source));}assert.equal(c.routes[contentId('/journal/conical-vs-flat-burr-grinders/')].path,a.routes[e]['/journal/conical-vs-flat-burr-grinders/']);}
});

test('all eleven complete checks retain exact source assembly and diagnostic limitations',async()=>{
 const s=await get('burr-guide-batch-31.source.json'),a=await get('burr-guide-batch-31.json'),parts=await get('burr-checks-batch-31.parts.json'),c=composeDirect(parts,s);
 assert.equal(Object.keys(c.translations).length,22);for(const[i,vs]of Object.entries(c.translations))assert.deepEqual(a.translations[i],vs);
 for(const e of a.editions){
  assert(/geen betere extractie|keine bessere Extraktion|pas une meilleure extraction/.test(parts.chunks.mechanism7[e]));
  assert(/Stop|Stoppen|Arrêtez/.test(parts.chunks.rule7[e]));
  assert(/niet|nicht|ne prouve pas/.test(parts.chunks.mechanism4[e]));
  assert(/retourtermijn|Rückgabefrist|délai de retour/.test(parts.chunks.rule11[e]));
  assert(/geen universele|nicht zu universellen|pas des garanties universelles/.test(a.translations[172][e]));
 }
});

test('burr comparison retains quantities, exact equipment, bounded owner evidence and structured answers',async()=>{
 const a=await get('burr-guide-batch-31.json'),s=await get('burr-guide-batch-31.source.json');
 for(const e of a.editions){
  for(const[i,values]of [[18,['Barista Pro','54 mm']],[20,['Niche Zero','DF64 Gen 1','Lelit Grace']],[31,['15–20%','200']],[32,['250','70–75%','200–300','55–60%']],[47,['500–800','2–4','1,000–1,500']],[58,['$1,200–3,000','Lagom P64','Mahlkönig E65S GbW','Weber EG-1']],[111,['30–50','5–10','$30–100','2–3']]])for(const v of values)assert(a.translations[i][e].includes(v),`${e} ${i}: ${v}`);
  assert(/drieduizend|dreitausend|trois mille/.test(a.translations[58][e]));assert(/geen categorieonderzoek|kein Mahlwerkskategorietest|pas un essai de catégories/.test(a.translations[22][e]));
  assert(/geen testfoto|kein Coffeedant-Testfoto|pas une photo de test/.test(a.translations[180][e]));
  const c=await loadCache(e);for(const i of [184,186,188]){assert.equal(s.segments[i].kind,'json');assert.notEqual(c.segments[s.segments[i].id].text,s.segments[i].source);}
 }
 const nl=await loadCache('nl');assert.equal(nl.routes[contentId('/journal/espresso-dosing/')].path,'/journal/espresso-doseren/');
});
