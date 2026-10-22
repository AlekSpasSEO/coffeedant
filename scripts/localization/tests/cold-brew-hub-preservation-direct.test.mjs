import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,validateTranslation,policyHash} from '../core.mjs';
test('current bean hub translates all five new cards, source-market labels and guide link without claiming complete new reviews',async()=>{
 const s=await readJson(path.join(root,'localization/authored/cold-brew-hub-preservation-batch-48.source.json')),a=await readJson(path.join(root,'localization/authored/cold-brew-hub-preservation-batch-48.json'));assert.equal(s.segments.length,25);assert.equal(new Set(s.segments.map(v=>v.source)).size,20);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,15);assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Three Africas','Baridi Blend','Off the Grid','Sun Catcher','Sermon']);assert(!a.routes);
 for(const e of a.editions){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.provider,'codex-direct');}
  assert(/niet gezet of geproefd|weder gebrüht noch verkostet|ni préparé ni goûté/.test(t(3)));
  assert(/uitverkocht|Ausverkauf|rupture/.test(t(7)));
  assert(/brander toegeschreven|Röster zugeschrieben|attribués au torréfacteur/.test(t(13)));
  assert(/niet als gegarandeerde Coffeedant-proeverij|keine garantierte Coffeedant-Verkostung|pas une dégustation Coffeedant garantie/.test(t(16)));
  assert(t(4).includes('2026'));assert(/Amerikaanse|US-Preis|américain/.test(t(4)));assert(t(14).includes('12'));
 }
});
