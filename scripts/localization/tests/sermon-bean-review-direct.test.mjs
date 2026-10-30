import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation} from '../core.mjs';

test('Sermon has full immutable directly authored text across all three editions',async()=>{
 const name='sermon-bean-review-batch-51',s=await readJson(path.join(root,`localization/authored/${name}.source.json`)),a=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(s.segments.length,66);assert.equal(new Set(s.segments.map(v=>v.source)).size,53);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,49);assert(!a.routes);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Verve Coffee Roasters Sermon','Verve Streetlevel','Verve Coffee Roasters US: Sermon','Coffeedant: Verve Streetlevel']);
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
 }
});

test('Sermon retains variable components, pack sizes, distinct recipes and evidence limits',async()=>{
 const s=await readJson(path.join(root,'localization/authored/sermon-bean-review-batch-51.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const n of ['12','6'])assert(t(21).includes(n));for(const n of ['12','18'])assert(t(27).includes(n));for(const n of ['2.2','5'])assert(t(28).includes(n));
  assert(/geen espressoverhouding|kein Espressoverhältnis|pas un ratio espresso/.test(t(25)));
  assert(/kunnen veranderen|können wechseln|peuvent changer/.test(t(15)));
  assert(/niet geproefd|nicht verkostet|n’a pas dégusté/.test(t(23)));
  assert(/geen actuele prijs|weder einen aktuellen Preis|aucun prix actuel/.test(t(29)));
  assert(t(44).includes('2026-10-22'));assert(t(46).includes('2026-10-22'));
 }
});
