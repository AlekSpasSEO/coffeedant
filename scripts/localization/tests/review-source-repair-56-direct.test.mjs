import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation,contentId} from '../core.mjs';

test('Big Trouble and French Roast retain every frozen revision, dated units and exact existing routes',async()=>{
 const name='review-source-repair-batch-56',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,13);assert.equal(new Set(s.segments.map(v=>v.source)).size,13);assert.equal(s.sourcePages.length,2);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,13);assert.equal(a.routes,undefined);
 for(const e of a.editions){const c=await loadCache(e);for(const[i,v]of s.segments.entries()){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,a.translations[i][e]);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  const t=i=>c.segments[s.segments[i].id].text;assert(t(7).includes('12 oz'));assert(t(10).includes('12 oz'));assert(t(5).includes('Forty-Six')&&t(5).includes('Hologram'));assert(t(12).includes('Forty-Six')&&t(12).includes('Major Dickason’s'));
  assert(/niet de herkomst|nicht die Herkunft|pas une origine/.test(t(6)));assert(/aanname|Annahme|hypothèse/.test(t(10)));assert(/maalgraad|Mahlgrad|mouture/.test(t(10)));
  for(const slug of ['counter-culture-big-trouble','stumptown-french-roast'])assert.equal(c.routes[contentId('/coffee-beans/'+slug+'/')].path,{nl:'/koffiebonen/',de:'/kaffeebohnen/',fr:'/cafe-en-grains/'}[e]+slug+'/');
 }
});
