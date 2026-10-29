import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,validateTranslation,policyHash,contentId} from '../core.mjs';

const name='cold-brew-bean-reviews-batch-49';
test('two complete cold-brew bean reviews retain immutable direct source evidence in all three editions',async()=>{
 const s=await readJson(path.join(root,`localization/authored/${name}.source.json`)),a=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(s.segments.length,149);assert.equal(new Set(s.segments.map(v=>v.source)).size,120);
 assert.equal(digest(JSON.stringify(s.segments)),s.snapshotHash);assert.equal(a.snapshotHash,s.snapshotHash);
 assert.equal(Object.keys(a.translations).length,117);assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Blue Bottle Coffee Three Africas',"Peet's Coffee Baridi Blend",'Peet’s Big Bang']);
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.provider,'codex-direct');}
  for(const [sourcePath,route]of Object.entries(a.routes[e]))assert.equal(c.routes[contentId(sourcePath)].path,route);
 }
});

test('cold-brew reviews distinguish source claims, stock warnings and brewing methods without invented local offers',async()=>{
 const s=await readJson(path.join(root,`localization/authored/${name}.source.json`));
 for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  assert(/niet gekocht, gezet of geproefd|nicht gekauft, gebrüht oder verkostet|ni acheté, ni préparé, ni goûté/.test(t(8)));
  assert(/geen cold-brewrecept|kein Cold-Brew-Rezept|pas une recette de cold brew/.test(t(31)));
  assert(t(31).includes('27')&&t(31).includes('350'));
  assert(/geen prijs- of kortingsclaim|weder einen Preis noch einen Rabatt|aucun prix ni remise/.test(t(35)));
  assert(/uitverkocht|Ausverkauft|rupture/.test(t(103)));
  assert(/geen geverifieerde nu-kopenprijs|keinen bestätigten Sofortkaufpreis|aucun prix d’achat immédiat vérifié/.test(t(112)));
  assert(/geen numerieke smaakscore|keine numerische sensorische Wertung|aucune note sensorielle chiffrée/.test(t(42)));
  assert(t(111).includes('454')&&t(111).includes('30'));
 }
});
