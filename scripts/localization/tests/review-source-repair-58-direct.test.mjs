import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation} from '../core.mjs';

test('six bean-review repairs preserve frozen indices, method boundaries and attributed flavor notes',async()=>{
 const name='review-source-repair-batch-58',s=await readJson(path.join(root,'localization/authored/'+name+'-current.source.json')),before=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,58);assert.equal(new Set(s.segments.map(v=>v.source)).size,58);assert.equal(s.sourcePages.length,6);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(before.snapshotHash,s.snapshotHash);assert.deepEqual(before.segments,s.segments);assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,58);assert.equal(a.routes,undefined);
 assert.deepEqual(s.sourcePages.filter(p=>before.sourcePages.find(v=>v.sourcePath===p.sourcePath).sourceHash!==p.sourceHash).map(p=>p.sourcePath),['/coffee-beans/counter-culture-fast-forward/']);
 for(const e of a.editions){const c=await loadCache(e);for(const[i,v]of s.segments.entries()){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,a.translations[i][e]);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  const t=i=>c.segments[s.segments[i].id].text;assert(t(11).includes('1:17'));assert(/niet automatisch|nicht automatisch|pas automatiquement/.test(t(8)));assert(/karameltonen|Karamellnoten|notes de caramel/.test(t(15)));assert(/niet omdat één|nicht weil eine einzige|pas parce qu’un seul/.test(t(36)));assert(/zelden|selten|rarement/.test(t(45)));for(const name of ['Southern Weather','Geometry'])assert(t(47).includes(name));
 }
});
