import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation}from'../core.mjs';

test('October 26 source updates retain six complete translated bean reviews and the current hubs',async()=>{
 for(const[name,count]of[['published-preservation-current-batch-49',8],['six-bean-current-refresh-batch-49',21]]){
  const s=await readJson(path.join(root,`localization/authored/${name}.source.json`)),a=await readJson(path.join(root,`localization/authored/${name}.json`));
  assert.equal(s.segments.length,count);assert.equal(digest(JSON.stringify(s.segments)),s.snapshotHash);assert.equal(a.snapshotHash,s.snapshotHash);assert(!a.routes);assert(!a.preserveSource);
  for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}}
 }
});

test('refreshed bean recipes keep exact US source numbers, caveats and no fabricated testing or offers',async()=>{
 const s=await readJson(path.join(root,'localization/authored/six-bean-current-refresh-batch-49.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  assert(t(1).includes('195–205°F')&&t(1).includes('2:30–3:30'));
  assert(t(7).includes('47')&&t(7).includes('26')&&t(7).includes('19')&&t(7).includes('45'));
  assert(t(11).includes('45')&&t(11).includes('25')&&t(11).includes('200°F'));
  assert(/niet kan worden gewijzigd of geannuleerd|weder ändern noch stornieren|ne peut être modifié ni annulé/.test(t(4)));
  assert(/uitverkocht|Ausverkauft|rupture/.test(t(15)));
  assert(t(18).includes('19.5–20.1')&&t(18).includes('27–32')&&t(18).includes('810'));
  assert(/geen Coffeedant-proeverij of prijsclaim|keine Coffeedant-Verkostung oder Preisbehauptung|pas une dégustation Coffeedant ni une affirmation de prix/.test(t(20)));
 }
});
