import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,policyHash,validateTranslation,contentId} from '../core.mjs';

test('The no-grinder guide retains its complete immutable authored slots and exact registered models',async()=>{
 const name='no-grinder-espresso-guide-batch-55',s=await readJson(path.join(root,'localization/authored/'+name+'.source.json')),a=await readJson(path.join(root,'localization/authored/'+name+'.json'));
 assert.equal(s.segments.length,139);assert.equal(new Set(s.segments.map(v=>v.source)).size,124);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,119);
 assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['54 mm','1.9 L','[1] Breville US: Bambino Plus BES500','PL92T-120','Lelit · PL92T-120']);
 for(const e of a.editions){const c=await loadCache(e),expected=new Map(Object.entries(a.translations).map(([i,v])=>[s.segments[+i].source,v[e]]));for(const i of a.preserveSource)expected.set(s.segments[i].source,s.segments[i].source);
  for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,expected.get(v.source));assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');}
  assert.equal(c.routes[contentId('/espresso-machine/without-grinder/')].path,{nl:'/espressomachines/zonder-molen/',de:'/espresso-maschine/ohne-mahlwerk/',fr:'/machines-expresso/sans-broyeur/'}[e]);
 }
});

test('The guide preserves US-generation boundaries, attributed observations and cleaning/capacity caveats',async()=>{
 const s=await readJson(path.join(root,'localization/authored/no-grinder-espresso-guide-batch-55.source.json'));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const n of ['BES500','BES450'])assert(t(17).includes(n));for(const n of ['$1,799.95','PL92T','PL92T-120','120 V','Elizabeth3','PL92T3','Pagaia'])assert(t(56).includes(n));
  assert(t(26).includes('200'));assert(t(59).includes('300')&&t(59).includes('600'));assert(t(64).includes('600'));
  assert(/geen beloofde|keine zugesagte|pas un volume/.test(t(64)));
  assert(/geen Coffeedant-test|kein Coffeedant-Test|pas d’un essai Coffeedant/.test(t(29)));
  assert(/niet geverifieerd|nicht verifiziert|ne sont pas vérifiés/.test(t(118)));
  assert(t(75).includes('12'));assert(t(31).includes('$499.95'));
 }
 const nl=await loadCache('nl'),t=nl.segments[s.segments[124].id].text;assert(t.includes('purgeer de molen'));assert(!t.includes('spoel de molen'));assert(t.includes('houd water weg van de maalschijven'));
});
