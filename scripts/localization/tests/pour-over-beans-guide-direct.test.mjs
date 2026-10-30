import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation,contentId} from '../core.mjs';

test('The concurrent AeroPress addition preserves the complete native bean hub with an English article destination',async()=>{
 const name='aeropress-hub-preservation-batch-52',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,4);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,4);assert(!a.routes);assert.equal(s.sourcePages[0].sourcePath,'/coffee-beans/');
 for(const e of a.editions){const c=await loadCache(e);for(const [i,v]of s.segments.entries()){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,a.translations[i][e]);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);}assert(a.translations[1][e].includes('AeroPress'));assert(a.translations[0][e].includes('30'));assert(a.translations[0][e].includes('2026'));}
 const html=await import('node:fs/promises').then(fs=>fs.readFile(path.join(root,'src/pages/coffee-beans/index.astro'),'utf8'));assert(html.includes("base + 'coffee-beans/best-coffee-beans-for-aeropress/'"));
});

test('The pour-over buying guide has complete immutable native text, metadata and stable routes',async()=>{
 const name='pour-over-beans-guide-batch-52',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,111);assert.equal(new Set(s.segments.map(v=>v.source)).size,93);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,90);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Counter Culture Apollo ↗','Onyx Help Me Brew ↗','Stumptown Coffee Class: Get Fresh ↗']);
 assert.equal(a.translations[0].de,'Hauptunsicherheit');assert.equal(a.translations[1].de,'US-Checkout');
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  for(const [p,target]of Object.entries(a.routes[e]))assert.equal(c.routes[contentId(p)].path,target);
 }
});

test('Pour-over translations retain distinct recipes, absent Apollo-specific guidance and research limits',async()=>{
 const s=await readJson(path.join(root,'localization/authored/pour-over-beans-guide-batch-52.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const n of ['25','400','205°F','1:16','27','350','1:13','195–205°F'])assert(t(21).includes(n));assert(t(49).includes('Origami/Hario'));
  assert(/geen vast conisch recept|kein festes Apollo-Kegelfilterrezept|pas de recette conique fixe/.test(t(48)));
  assert(/niet gezet of geproefd|weder aufgebrüht noch verkostet|ni préparé ni dégusté/.test(t(75)));
  assert(/geen doel voor een portafilter|kein Siebträgerziel|n’est pas un objectif/.test(t(79)));
  assert(/geen gemeten houdbaarheid|keine gemessene Haltbarkeit|pas une durée de conservation mesurée/.test(t(90)));
  assert(/geen actuele rangschikking|keine aktuelle Rangfolge|aucun classement/.test(t(25)));
  for(const i of [24,44])assert(t(i).length>20);
 }
});
