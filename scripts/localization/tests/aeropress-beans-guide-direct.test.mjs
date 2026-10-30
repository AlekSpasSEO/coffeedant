import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation,contentId} from '../core.mjs';

test('The AeroPress guide has complete immutable directly authored text and stable native routes',async()=>{
 const name='aeropress-beans-guide-batch-53',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,108);assert.equal(new Set(s.segments.map(v=>v.source)).size,91);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,87);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['AeroPress','Onyx Geometry ↗','Onyx Southern Weather ↗','Stumptown Hair Bender ↗']);
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  assert.equal(c.routes[contentId('/coffee-beans/best-coffee-beans-for-aeropress/')].path,{nl:'/koffiebonen/beste-koffiebonen-voor-aeropress/',de:'/kaffeebohnen/beste-kaffeebohnen-fuer-aeropress/',fr:'/cafe-en-grains/meilleurs-cafes-en-grains-pour-aeropress/'}[e]);
 }
});

test('AeroPress wording preserves recipes, hot versus cold extraction and whole-bean flavor identity',async()=>{
 const s=await readJson(path.join(root,'localization/authored/aeropress-beans-guide-batch-53.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const n of ['14','210','205°F','50'])assert(t(17).includes(n));for(const n of ['17','220','205°F','1:13','1:15'])assert(t(18).includes(n));
  assert(/geen concentraat|kein Konzentrat|pas un concentré/.test(t(34)));assert(/geen cold brew|kein Cold Brew|pas du cold brew/.test(t(48)));
  for(const n of ['AeroPress Go','XL','Flow Control'])assert(t(19).includes(n));
  assert(/geen proefresultaten|keine Verkostungsergebnisse|pas des résultats de dégustation/.test(t(41)));
 }
 const de=await loadCache('de'),t=i=>de.segments[s.segments[i].id].text;
 assert(t(24).includes('Geißblatt')&&!t(24).includes('Akazie'));
 for(const i of [14,60,66,79])assert(t(i).includes('Bohnen')&&!/Vollkorn|Whole-Beans|ground-only/.test(t(i)));
 assert(t(5).includes('Gründe')&&!t(5).includes('Grüdnde'));
});
