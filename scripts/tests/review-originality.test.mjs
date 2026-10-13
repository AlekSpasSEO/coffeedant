import test from 'node:test';
import assert from 'node:assert/strict';
import { assertAuthoredOverview, renderAuthoredOverview } from '../../src/lib/review-overview.mjs';
import { checkReviewOriginality, orderedWordOverlap } from '../lib/review-originality.mjs';
const description='A manual lever gives the owner direct pressure control while a separate kettle supplies hot water. The gauge provides feedback during extraction, and a separate grinder determines how the coffee is prepared. This compact station suits straight espresso drinkers who want to manage each shot personally and have no need for an integrated steam wand.';
test('the overview renderer requires actual authored copy instead of manufacturing a fallback',()=>{
  assert.throws(()=>assertAuthoredOverview(undefined,'/sample/'),/no prose fallback/);
  assert.throws(()=>assertAuthoredOverview('A good machine.','/sample/'),/authored/);
  assert.throws(()=>assertAuthoredOverview(description+' That identity matters because two machines can promise the same drink.','/sample/'),/retired generic/);
});
test('scope stays separate and prose is escaped without altering citation links',()=>{
  const html=renderAuthoredOverview({slug:'/sample/',overview:description+' The <model> requires care.',identityBoundary:'US 120 V only.',primaryStrength:'Manual pressure.',primaryLimit:'No steam.',citationHtml:'<a href="#source">[source]</a>'});
  assert.match(html,/&lt;model&gt;/);assert.match(html,/<p class="review-model-scope">US 120 V only\.<\/p>/);assert.match(html,/<a href="#source">/);assert.doesNotMatch(html,/That identity matters/);
});
test('a change of brand and model does not hide identical title hooks or overviews',()=>{
  const result=checkReviewOriginality([{slug:'/a/',name:'Alpha Espresso Falcon',brand:'Alpha Espresso',title:'Alpha Falcon review: retired model, used value and limits',overview:'The Alpha Falcon '+description},{slug:'/b/',name:'Beta Espresso Swift',brand:'Beta Espresso',title:'Beta Swift review: retired model, used value and limits',overview:'The Beta Swift '+description}]);
  assert.ok(result.errors.some(e=>/Title hooks overlap 100%/.test(e)));assert.ok(result.errors.some(e=>/Opening overviews overlap 100%/.test(e)));
});
test('scope describes the reviewed model without implementation terminology',()=>{
  const html=renderAuthoredOverview({slug:'/sample/',overview:description,identityBoundary:'The Product schema and scores refer only to the US 120 V version.',primaryStrength:'Manual pressure.',primaryLimit:'No steam.',citationHtml:''});
  assert.match(html,/This review covers the US 120 V version/);assert.doesNotMatch(html,/Product schema/);
});
test('widespread generic sentences fail even when individual paragraphs contain different facts',()=>{
  const shared='The useful buying decision depends on what the household expects from its daily routine';
  const rows=Array.from({length:10},(_,i)=>({slug:`/${i}/`,name:`Brand${i} Model${i}`,brand:`Brand${i}`,title:`Brand${i} Model${i} review: purpose${i} feature${i}`,overview:`Hardware${i} design${i} architecture${i} workflow${i} controls${i}. ${shared}. Decision${i} setting${i} needs${i}.`}));
  const result=checkReviewOriginality(rows);assert.ok(result.widespreadPhrases.length);assert.ok(result.errors.some(e=>/ten or more/.test(e)));
});
test('distinct buying decisions pass and shared labels or disclosures outside the overview are irrelevant',()=>{
  const result=checkReviewOriginality([{slug:'/a/',name:'Alpha Falcon',brand:'Alpha',title:'Alpha Falcon review: espresso pressure powered by your hands',overview:description},{slug:'/b/',name:'Beta Swift',brand:'Beta',title:'Beta Swift review: eight profiles for a busy shared kitchen',overview:'Saved recipes let several users select their regular milk drinks through the display. The removable carafe needs cleaning after use, and the integrated grinder keeps beans in one appliance.'}]);
  assert.deepEqual(result.errors,[]);
  assert.equal(orderedWordOverlap('current price temperature limits and milk workflow','current price temperature control and milk workflow'),6/7);
});
