import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation} from '../core.mjs';

test('four current bean-review repairs retain all frozen text and conditional recipe/preference boundaries',async()=>{
 const name='review-source-repair-batch-57',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,35);assert.equal(new Set(s.segments.map(v=>v.source)).size,35);assert.equal(s.sourcePages.length,4);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,35);assert.equal(a.routes,undefined);
 for(const e of a.editions){const c=await loadCache(e);for(const[i,v]of s.segments.entries()){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,a.translations[i][e]);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  const t=i=>c.segments[s.segments[i].id].text;for(const name of ['Classic','Analog','Decaf Black Cat'])assert(t(0).includes(name));assert(/^(Als|Wenn|Si) /.test(t(6)));for(const n of ['18 g','45 g','Intelligentsia','Analog','Classic'])assert(t(6).includes(n));assert(/twee zakken|zwei Beutel|deux sacs/.test(t(23)));assert(/gewassen Ethiopische|gewaschener äthiopischer|éthiopiens lavés/.test(t(34)));assert(/geen universele|keine universelle|plutôt qu’une hiérarchie universelle/.test(t(34)));
 }
});
