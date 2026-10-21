import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import {buildRegionalSource} from '../build-source.mjs';
import {parseHtml,serializeHtml,slots,walk,attr} from '../core.mjs';
import {enhancePage,graph} from '../../build-seo.mjs';

const social='Coffeedant — coffee equipment reviews and brewing guides';
const html='<!doctype html><html lang="en-US"><head><title>Methods | Coffeedant</title><meta name="description" content="Our documented editorial methods and source limits."></head><body><main><h1>Methods</h1><p>We document evidence and its limits.</p></main></body></html>';
async function fixture(run){const dir=await mkdtemp(path.join(os.tmpdir(),'coffeedant-regional-source-'));try{await writeFile(path.join(dir,'index.html'),html);await writeFile(path.join(dir,'coffee-finder.json'),JSON.stringify({items:[]}));await run(dir);}finally{assert.equal(path.dirname(path.resolve(dir)),path.resolve(os.tmpdir()));assert(path.basename(dir).startsWith('coffeedant-regional-source-'));await rm(dir,{recursive:true,force:true});}}

test('canonical regional indexing exposes generated default social alt and schema caption before translation',async()=>fixture(async dir=>{
 const source=await buildRegionalSource(dir);
 assert(source.segments.some(s=>s.source===social&&s.kind==='metadata'));
 assert(source.segments.some(s=>s.source===social&&s.kind==='json'));
 const canonical=await readFile(path.join(dir,'index.html'),'utf8');
 for(const[locale,host,translated]of [['nl-NL','nl.coffeedant.com','Coffeedant — reviews van koffieapparatuur en zetgidsen'],['de-DE','de.coffeedant.com','Coffeedant — Bewertungen von Kaffeegeräten und Brühleitfäden'],['fr-FR','fr.coffeedant.com','Coffeedant — avis de matériel café et guides de préparation']]){
  const doc=parseHtml(canonical);for(const s of slots(doc))if(s.source===social)s.set(translated);
  const result=enhancePage(serializeHtml(doc),'/methods/',{origin:`https://${host}`,locale}),actual=parseHtml(result.html);
  for(const key of ['og:image:alt','twitter:image:alt'])assert.equal(attr(walk(actual).find(n=>n.tagName==='meta'&&(attr(n,'property')??attr(n,'name'))===key),'content'),translated);
  assert.equal(graph(actual).find(n=>n['@type']==='WebPage').primaryImageOfPage.caption,translated);
 }
}));

test('canonical source preparation is idempotent and keeps source hashes stable',async()=>fixture(async dir=>{
 const first=await buildRegionalSource(dir),once=await readFile(path.join(dir,'index.html'),'utf8'),second=await buildRegionalSource(dir);
 assert.deepEqual(second,first);assert.equal(await readFile(path.join(dir,'index.html'),'utf8'),once);
}));
