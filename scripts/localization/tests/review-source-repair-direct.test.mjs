import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation} from '../core.mjs';

test('the review revision repair preserves all 21 frozen slots in three editions',async()=>{
 const name='review-source-repair-batch-55',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,21);assert.equal(new Set(s.segments.map(v=>v.source)).size,21);assert.equal(s.sourcePages.length,3);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,21);
 const current=await readJson(path.join(root,'localization/authored/no-grinder-current-source-batch-55.source.json'));assert.equal(current.sourceHash,'f1323629cbf857bae18a3a258040f2e4cc2b5ed79d233f0691682fdf55393238');assert.equal(current.snapshotHash,digest(JSON.stringify(current.segments)));for(const v of s.segments.slice(-3))assert(current.segments.some(x=>x.id===v.id));
 for(const e of a.editions){const c=await loadCache(e);for(const [i,v]of s.segments.entries()){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,a.translations[i][e]);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  for(const v of current.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.text,validateTranslation(v.source,x.text));}
  const t=i=>c.segments[s.segments[i].id].text;
  assert(t(2).includes('12 oz'));assert(t(12).includes('$20'));assert(t(13).includes('24 oz'));assert(t(19).includes('E24'));assert(t(20).includes('E24')&&t(20).includes('PID'));
  assert(/verdunning|Verdünnung|dilution/.test(t(5)));assert(/handleiding|Anleitung|manuel/.test(t(18)));assert(/aluminium|Aluminium/.test(t(20)));
 }
});
