import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {root,readJson,loadCache,policyHash,digest,validateTranslation,getEdition,segmentId} from '../core.mjs';
import {regionalFinder} from '../build.mjs';

for(const [name,count] of [['source-refresh-batch-9',44],['journal-pages-batch-9',303],['journal-pages-batch-10',255],['journal-pages-batch-11',259],['journal-pages-batch-12',238],['journal-library-alignment-batch-12',3],['journal-pages-batch-13',258]])test(`${name} has full frozen-slot coverage and exact facts in NL DE FR`,async()=>{
 const source=await readJson(path.join(root,`localization/authored/${name}.source.json`));
 const authored=await readJson(path.join(root,`localization/authored/${name}.json`));
 assert.equal(source.segments.length,count);
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 const kept=authored.preserveSource.map(index=>source.segments[index].source);
 assert.equal(kept.length,new Set(kept).size);
 const supplied=new Set([...kept,...Object.keys(authored.translations).map(index=>source.segments[index].source)]);
 assert(source.segments.every(segment=>supplied.has(segment.source)));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of source.segments){
   const entry=cache.segments[segment.id];
   assert(entry,`${edition} missing ${segment.source}`);
   assert.equal(entry.source,segment.source);
   assert.equal(entry.policyHash,policyHash);
   assert.equal(entry.provider,'codex-direct');
   assert.equal(validateTranslation(segment.source,entry.text),entry.text);
  }
 }
});

test('colonial and coffeehouse history retain dated statistics, distinct legal regimes and limits of historical pictures',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-13.source.json'));
 const answers=[129,131,255,257].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=index=>cache.segments[source.segments[index].id].text;
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  for(const number of ['1840','30','65','80'])assert(text(55).includes(number));
  assert(/niet alle koffiearbeid overal|nicht sämtliche Kaffeearbeit überall|pas tout le travail du café partout/.test(text(55)));
  assert(/zonder de positie van alle arbeiders gelijk|ohne den Status aller Arbeitskräfte gleich|sans assimiler le statut de tous les travailleurs/.test(text(91)));
  assert(text(82).includes('1906–07'));
  assert(/stelt niet de juridische positie|belegt nicht den Rechtsstatus|n’établit pas le statut juridique/.test(text(82)));
  assert(text(211).includes('1922')&&text(211).includes('1748'));
  assert(/retrospectieve kaart|rückblickende Karte|carte rétrospective/.test(text(211)));
  assert(text(207).includes('1675'));
  assert(/onderdrukkingspoging|Unterdrückungsversuch|tentative de suppression/.test(text(207)));
  assert(text(214).includes('1771'));
  assert(/geen beschuldiging|keine Behauptung|pas l’accusation/.test(text(214)));
  assert(/als legende|als Legende|comme une légende/.test(text(49)));
 }
});

test('Americano quantities remain suggested protocols with separate dilution, basket caveats and no measured-extraction claim',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-12.source.json'));
 const answers=[140,142,144].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=index=>cache.segments[source.segments[index].id].text;
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  for(const number of ['18','36','108','144'])assert(text(39).includes(number));
  assert(/geen universele specificatie|keine universelle Spezifikation|pas une spécification universelle/.test(text(39)));
  assert(/diagnostische notitie|diagnostische Notiz|note diagnostique/.test(text(48)));
  assert(/redactioneel startadvies|redaktioneller Ausgangsvorschlag|suggestion éditoriale de départ/.test(text(71)));
  assert(/geen beelden van een gemeten extractie|keine Aufnahmen einer gemessenen Extraktion|pas des images d’une extraction mesurée/.test(text(146)));
  assert(/Laat de pomp niet|Lassen Sie die Pumpe nicht|Ne laissez pas tourner la pompe/.test(text(78)));
  const transcript=source.segments[67].source;
  assert.equal(cache.segments[segmentId(transcript,'json')].text,text(67));
 }
});

test('Journal library search slots and colophon are fully localized without translating executable filter identifiers',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-12.source.json'));
 const search=[180,184,185,187,189,190,191,192,193,194,197,201,204,207,209,211,214];
 assert.equal(search.length,17);assert(search.every(index=>source.segments[index].kind==='attribute'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const index of search){
   const segment=source.segments[index],text=cache.segments[segment.id].text;
   assert.notEqual(text,segment.source);
   assert.equal(validateTranslation(segment.source,text),text);
  }
  const colophon=cache.segments[source.segments[227].id].text;
  assert(/niet geïmpliceerd|nicht impliziert|n’est sous-entendu/.test(colophon));
 }
});

test('robusta and water retain research stages, no-tasting caveats and manufacturer-specific limits in all six FAQ answers',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-11.source.json'));
 const answers=[126,128,130,254,256,258].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=index=>cache.segments[source.segments[index].id].text;
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  assert(/geen proeverij uitgevoerd|keine Verkostung durchgeführt|n’a pas réalisé de dégustation/.test(text(77)));
  assert(/niet de vraag naar fine robusta|nicht die Nachfrage nach Fine Robusta|pas la demande de robusta fin/.test(text(38)));
  assert(/geen aankondiging|nicht um die Ankündigung|pas l’annonce/.test(text(49)));
  assert(text(49).includes('1,000'));
  assert(/fabrikantenvoorbeeld|Herstellerbeispiel|exemple concret de fabricant/.test(text(162)));
  for(const number of ['70','100','40','80'])assert(text(162).includes(number));
  assert(/geen algemene toestemming|keine allgemeine Erlaubnis|n’autorisent pas universellement/.test(text(164)));
  assert(/Giet niet|Füllen Sie nicht|Ne versez pas/.test(text(215)));
  assert(/geen gekalibreerde|keine kalibrierten|pas des prédictions/.test(text(223)));
 }
});

test('water control sentence keeps both placeholders and native French grammar without changing its source snapshot',async()=>{
 const source=await readJson(path.join(root,'localization/authored/water-ui-grammar-batch-11.source.json'));
 const authored=await readJson(path.join(root,'localization/authored/water-ui-grammar-batch-11.json'));
 assert.equal(source.snapshotHash,digest(JSON.stringify(source.segments)));
 assert.equal(authored.snapshotHash,source.snapshotHash);
 const segment=source.segments[526];assert.equal(segment.context,'journalWater');
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition),text=cache.segments[segment.id].text;
  assert.equal(text,authored.translations[526][edition]);
  assert.equal(validateTranslation(segment.source,text),text);
  assert(text.includes('{buffer}')&&text.includes('{hardness}'));
 }
 assert(authored.translations[526].fr.includes('{buffer} de tamponnement'));
 assert(authored.translations[526].fr.includes('niveau de calcium / magnésium : {hardness}'));
});

test('decaf and fermentation preserve FAQ limits, US jurisdiction, residual caffeine and the qualified Colombian estimate',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-10.source.json'));
 const answers=[124,126,128,250,252,254].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 const spelled={nl:'zeshonderdtwintigduizend',de:'sechshundertzwanzigtausend',fr:'six cent vingt mille'};
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  const law=cache.segments[source.segments[52].id].text;
  assert(/Amerikaanse|US-Regel|américaine/.test(law));assert(law.includes('10'));
  const volume=cache.segments[source.segments[181].id].text;
  for(const number of ['2026','30','620,000','2024'])assert(volume.includes(number));
  assert(volume.includes(spelled[edition]));
  assert(/geen representatieve wereldwijde|keine repräsentative Weltmarkt|pas un recensement mondial représentatif/.test(volume));
  assert(!cache.segments[source.segments[214].id].text.includes('meaningful'));
  const tasting=cache.segments[source.segments[83].id].text;
  assert(/geen blinde proeverij|keine Blindverkostung|pas réalisé de dégustation à l’aveugle/.test(tasting));
 }
});

test('the new Fellow Finder record extends the complete frozen catalog to 146 without inventing local commerce or a regional variant',async()=>{
 const frozen=await readJson(path.join(root,'localization/authored/finder-products-batch-9.items.source.json'));
 const source=await readJson(path.join(root,'localization/authored/source-refresh-batch-9.source.json'));
 assert.equal(frozen.snapshotHash,source.snapshotHash);
 assert.equal(frozen.items.length,1);
 assert.equal(frozen.items[0].model,'Espresso Series 1');
 assert.equal(frozen.items[0].brand,'Fellow');
 assert.equal(frozen.items[0].path,'/espresso-machine/fellow-espresso-series-1/');
 const items=[];
 for(const batch of [3,4,5,6,9])items.push(...(await readJson(path.join(root,`localization/authored/finder-products-batch-${batch}.items.source.json`))).items);
 assert.equal(items.length,146);
 assert.equal(new Set(items.map(item=>item.path)).size,146);
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  const catalog=regionalFinder({items},cache,new Map(),getEdition(edition),{},{});
  assert.equal(new Set(catalog.items.map(item=>item.description)).size,146);
  assert(catalog.items.every(item=>item.priceUsd===null&&item.priceAmount===null&&item.amazonHref===''));
  const item=catalog.items.at(-1);
  assert.equal(item.model,'Espresso Series 1');
  assert.equal(item.path,'https://coffeedant.com/espresso-machine/fellow-espresso-series-1/');
  for(const field of ['description','bestFor','imageAlt']){
   assert.notEqual(item[field],frozen.items[0][field]);
   assert.equal(validateTranslation(frozen.items[0][field],item[field]),item[field]);
  }
 }
});

test('Journal FAQ negations and study limitations remain fully authored instead of becoming universal testing claims',async()=>{
 const source=await readJson(path.join(root,'localization/authored/journal-pages-batch-9.source.json'));
 const answers=[180,182,184,298,300,302].map(index=>source.segments[index]);
 assert(answers.every(segment=>segment.kind==='json'));
 for(const edition of ['nl','de','fr']){
  const cache=await loadCache(edition);
  for(const segment of answers){
   assert.notEqual(cache.segments[segment.id].text,segment.source);
   assert.equal(validateTranslation(segment.source,cache.segments[segment.id].text),cache.segments[segment.id].text);
  }
  const chemical=cache.segments[source.segments[273].id].text;
  assert(/Nee\.|Nein\.|Non\./.test(chemical));
  const study=cache.segments[source.segments[227].id].text;
  for(const number of ['29','99','136'])assert(study.includes(number));
  const noTesting=cache.segments[source.segments[260].id].text;
  assert(/geen verslag van een Coffeedant-experiment|kein Bericht eines Coffeedant-Experiments|pas le compte rendu d’une expérience Coffeedant/.test(noTesting));
 }
});
