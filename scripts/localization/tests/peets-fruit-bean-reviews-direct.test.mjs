import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import{root,readJson,digest,loadCache,policyHash,validateTranslation}from'../core.mjs';

test('Off the Grid and Sun Catcher have complete immutable directly authored text for all three editions',async()=>{
 const name='peets-fruit-bean-reviews-batch-50',s=await readJson(path.join(root,`localization/authored/${name}.source.json`)),a=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(s.segments.length,128);assert.equal(new Set(s.segments.map(v=>v.source)).size,102);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,98);assert(!a.routes);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),["Peet's Coffee Off the Grid","Peet's Coffee Sun Catcher","Peet's Off the Grid","Coffeedant: Peet's Off the Grid"]);
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
 }
});

test('Peet’s reviews retain exact pack distinctions, stock caveats and separate hot and cold methods without invented findings',async()=>{
 const s=await readJson(path.join(root,'localization/authored/peets-fruit-bean-reviews-batch-50.source.json'));
 for(const e of['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  assert(t(24).includes('12'));assert(t(87).includes('12')&&t(87).includes('2024'));
  assert(t(26).includes('10.5')&&t(80).includes('10.5'));
  assert(/geen prijs of korting|weder Preis noch Rabatt|aucun prix ni remise/.test(t(28)));
  assert(/uitverkocht|Ausverkauft|rupture/.test(t(82)));
  assert(/geen actuele aanbieding of korting|kein aktuelles Angebot oder einen Rabatt|aucune offre actuelle ni remise/.test(t(91)));
  assert(/geen Coffeedant-proeverij|keine Coffeedant-Verkostung|pas une dégustation Coffeedant/.test(t(77)));
  assert(/Niet gespecificeerd|Nicht für die vollständige Mischung angegeben|Non précisée/.test(t(102)));
  assert(/Whole Bean/.test(t(21)));
 }
});
