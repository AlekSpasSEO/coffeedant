import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import{root,readJson,digest,loadCache,policyHash,validateTranslation}from'../core.mjs';

test('new pour-over panel keeps the complete bean hub native without claiming a translated buying guide',async()=>{
 const name='pour-over-hub-preservation-batch-49',s=await readJson(path.join(root,`localization/authored/${name}.source.json`)),a=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(s.segments.length,4);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,4);assert(!a.routes);assert(!a.preserveSource);
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}assert(c.segments[s.segments[0].id].text.includes('29'));}
});
