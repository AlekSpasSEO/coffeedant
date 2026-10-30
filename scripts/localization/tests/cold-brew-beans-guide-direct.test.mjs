import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation,contentId} from '../core.mjs';

test('The full cold-brew guide has immutable native wording and preserves all three registered URLs',async()=>{
 const name='cold-brew-beans-guide-batch-54',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,105);assert.equal(new Set(s.segments.map(v=>v.source)).size,87);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,83);assert(!a.routes);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Blue Bottle US: Three Africas ↗','Peet’s US: Baridi Blend ↗','Peet’s US: Off the Grid ↗','Peet’s US: Sun Catcher ↗']);
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  assert.equal(c.routes[contentId('/coffee-beans/best-coffee-beans-for-cold-brew/')].path,{nl:'/koffiebonen/beste-koffiebonen-voor-cold-brew/',de:'/kaffeebohnen/beste-kaffeebohnen-fuer-kaltgebrueht/',fr:'/cafe-en-grains/meilleurs-cafes-en-grains-pour-cold-brew/'}[e]);
 }
});

test('Cold-brew translations retain dated stock limits, separate ratios and arithmetic without fake recipes or prices',async()=>{
 const s=await readJson(path.join(root,'localization/authored/cold-brew-beans-guide-batch-54.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const n of ['12','24'])assert(t(15).includes(n));assert(t(30).includes('1:13'));for(const n of ['12','340','30'])assert(t(44).includes(n));assert(t(27).includes('2026'));
  assert(/geen cold-brewrecept|kein Cold-Brew-Rezept|n’est pas une recette de cold brew/.test(t(30)));
  assert(/rekenvoorbeelden|Rechenbeispiele|exemples de calcul/.test(t(44)));
  assert(/alleen cacao|ausschließlich von Kakao|uniquement cacaoté/.test(t(22)));
  assert(/uitverkocht|Ausverkaufshinweis|rupture/.test(t(61)));assert(t(61).includes('22')&&t(61).includes('2026'));
 }
 const c=await loadCache('de'),t=i=>c.segments[s.segments[i].id].text;
 assert.notEqual(t(1),t(0));assert(t(1).includes('ganzen Bohnen'));
 assert(t(17).includes('Brühgeräts')&&!t(17).includes('Brauereigetränks'));
 assert(t(29).includes('Kakao'));assert(t(4).includes('ausverkaufte Alternativen')&&!t(4).includes('Verkäufer-Alternativen'));
});
