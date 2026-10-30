import test from 'node:test';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { assertAuthoredOverview, renderAuthoredOverview } from '../../src/lib/review-overview.mjs';
import { checkReviewOriginality, orderedWordOverlap, extractReviewBodyParagraphs } from '../lib/review-originality.mjs';
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

const bodyReview = (index, paragraphs) => ({
  slug: `/body-${index}/`, name: `Maker${index} Device${index}`, brand: `Maker${index}`,
  title: `Maker${index} Device${index} review: purpose${index} setting${index}`,
  overview: `Architecture${index} recipe${index} pressure${index} controls${index} setting${index} decision${index}.`,
  paragraphs,
});

test('different titles and introductions do not conceal substantially copied article bodies', () => {
  const copy = `${description} ${description.replace('A manual lever', 'An external lever')} ${description.replace('A manual lever', 'A traditional lever')}`;
  const result = checkReviewOriginality([
    bodyReview(1, [{ section: 'workflow', text: `The Maker1 Device1. ${copy}` }]),
    bodyReview(2, [{ section: 'workflow', text: `The Maker2 Device2. ${copy}` }]),
  ]);
  assert.ok(result.errors.some(error => /shared with other reviews/.test(error)));
  assert.equal(result.repeatedParagraphs[0].reviews, 2);
  assert.equal(result.repeatedParagraphs[0].locations[0].section, 'workflow');
  assert.ok(result.bodyReuse.every(review => review.ratio > .9));
});

test('one shared padded sentence inside otherwise different bodies fails when used widely', () => {
  const shared = 'A useful feature removes a repeated burden, exposes a meaningful variable, or makes maintenance clearer for the household every morning.';
  const result = checkReviewOriginality(Array.from({ length: 5 }, (_, index) => bodyReview(index, [
    { section: 'features', text: `Hardware${index} boiler${index} option${index} dial${index}. ${shared} Instructions${index} method${index} limit${index}.` },
  ])));
  assert.ok(result.errors.some(error => /five or more review bodies/.test(error)));
  assert.equal(result.widespreadBodyPassages[0].reviews, 5);
  assert.equal(result.widespreadBodyPassages[0].locations[0].section, 'features');
});

test('a long copied paragraph fails even when it is a minority of two otherwise different articles', () => {
  const copied = `${description} The result should be evaluated in the household routine before committing to an additional accessory purchase.`;
  const result = checkReviewOriginality([1, 2].map(index => bodyReview(index, [
    { section: 'setup', text: copied },
    ...Array.from({ length: 12 }, (_, paragraph) => Array.from({ length: 20 }, (_, word) => `specific${index}p${paragraph}w${word}`).join(' ')),
  ])));
  assert.ok(result.bodyReuse.every(review => review.ratio < .35));
  assert.ok(result.errors.some(error => /sixty or more/.test(error)));
});

test('short headings and direct evidence disclosures do not count as copied editorial advice', () => {
  const result = checkReviewOriginality(Array.from({ length: 6 }, (_, index) => bodyReview(index, [
    'Milk workflow and daily cleaning',
    'Coffeedant has not physically tested this machine, measured its heating speed, recorded milk texture or established a long term failure rate.',
    `Hardware${index} pressure${index} setting${index} basket${index} architecture${index} timing${index} water${index} refill${index} portafilter${index} service${index} support${index} width${index} boiler${index} handle${index} tank${index}.`,
  ])));
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.widespreadBodyPassages, []);
});

test('adding a disclosure does not exempt copied advice in the same paragraph', () => {
  const result = checkReviewOriginality(Array.from({ length: 5 }, (_, index) => bodyReview(index, [
    `Coffeedant has not physically tested this machine. ${description}`,
  ])));
  assert.ok(result.widespreadBodyPassages.length);
});

test('different product-specific body guidance passes even with shared short technical facts', () => {
  const result = checkReviewOriginality([
    bodyReview(1, ['The boiler cannot brew and steam simultaneously.', 'A manual lever gives pressure control to the operator. Use a separate kettle to preheat the brew chamber before preparing the dose; there is no steam circuit to wait for after the shot.']),
    bodyReview(2, ['The boiler cannot brew and steam simultaneously.', 'Select steam mode after the espresso has finished. When the second cappuccino follows, the documented refill and cooling routine matters more than the first shot timer because both drinks depend on one water circuit.']),
  ]);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.repeatedParagraphs, []);
});

test('HTML extraction includes actual body, performance explanation, lists and FAQ but omits UI and source material', () => {
  const page = parse(`<article class="review-article">
    <section id="ratings"><p>Rating summary</p></section>
    <section id="workflow"><header class="review-section-heading"><p>Rating deep dive</p></header>
      <div class="review-section-body"><p>Prepare the portafilter. <a href="#s1">[source]</a><a href="#s2">[2]</a></p>
        <ol><li>Refill after steaming.</li></ol>
        <div class="review-performance-detail"><p>The PID setting controls brew temperature.</p></div>
        <p>The maker describes <q>an exact attributed quote</q> a compact heater.</p>
        <blockquote><p>An attributed external observation.</p></blockquote>
        <aside class="review-community-evidence"><ul><li><p>Source annotation.</p></li></ul><p>Source disclosure.</p></aside>
        <aside class="review-community-embed"><p>Shared community embed controls.</p></aside>
        <figure class="review-inline-media"><figcaption><p>Shared image provenance.</p></figcaption></figure>
        <p>Owners describe awkward tank access under cabinets.</p>
        <table><tr><td><p>A comparison table cell.</p></td></tr></table>
      </div></section>
    <section data-coffee-finder><p>Shared finder controls.</p></section>
    <aside data-amazon-recommendation><p>Shared shopping controls.</p></aside>
    <section id="faq"><article><h3>A shared question?</h3><p>Its product-specific answer.</p></article></section>
    <section id="methodology"><p>Research disclosure.</p></section>
    <section id="sources"><ol><li><p>Annotated source.</p></li></ol></section>
  </article>`);
  const descendants = node => [node, ...(node.childNodes ?? []).flatMap(descendants)];
  const article = descendants(page).find(node => node.tagName === 'article');
  assert.deepEqual(extractReviewBodyParagraphs(article), [
    { section: 'workflow', text: 'Prepare the portafilter.' },
    { section: 'workflow', text: 'Refill after steaming.' },
    { section: 'workflow', text: 'The PID setting controls brew temperature.' },
    { section: 'workflow', text: 'The maker describes a compact heater.' },
    { section: 'workflow', text: 'Owners describe awkward tank access under cabinets.' },
    { section: 'faq', text: 'Its product-specific answer.' },
  ]);
});
