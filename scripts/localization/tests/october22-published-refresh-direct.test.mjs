import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,digest,loadCache,validateTranslation,policyHash} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/october22-published-refresh-batch-48.source.json')),a:await readJson(path.join(root,'localization/authored/october22-published-refresh-batch-48.json'))});
test('October 22 concurrent published bean updates directly translate every new source slot in all three editions',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,4);assert.equal(s.segments.length,13);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,13);assert(!a.routes);assert(!a.preserveSource);
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.text,validateTranslation(v.source,x.text));assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.notEqual(x.text,v.source);}}
});
test('October 22 updates retain method-specific recipes, qualified origins and subscription negations without inventing offers',async()=>{
 const {s}=await get();for(const e of ['nl','de','fr']){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const v of ['1:17','30 g','335 g','165 g','22','2026'])assert(t(1).includes(v));for(const v of ['28 g','475 ml','19.5 g','22','2026'])assert(t(10).includes(v));
  assert(/geen afgewerkte ijskoffie in exact één minuut|keinen fertigen Eiskaffee in genau einer Minute|ne promettez pas une tasse glacée terminée en exactement une minute/.test(t(1)));
  assert(/geen herleidbaarheid tot een boerderij|keine Rückverfolgbarkeit bis zur Farm|pas une traçabilité à la ferme/.test(t(4)));
  assert(/automatisch vernieuwende|automatisch erneuerte|renouvelée automatiquement/.test(t(7)));
  assert(/pauzeren, overslaan of opzeggen|pausieren, überspringen oder kündigen|suspendre, sauter ou annuler/.test(t(7)));
  assert(/geen geverifieerde korting of bezorgbelofte|kein verifizierter Rabatt oder Lieferversprechen|pas une réduction vérifiée ni une promesse de livraison/.test(t(7)));
  for(const i of [3,6,9,12]){assert(t(i).includes('2026-10-22'));assert(/geen Coffeedant-proeverij of prijsclaim|keine Coffeedant-Verkostung oder Preisbehauptung|aucune dégustation ni affirmation de prix Coffeedant/.test(t(i)));}
 }
});
