import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { checkReviewOriginality } from './lib/review-originality.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const manifest=JSON.parse(await fs.readFile(path.join(root,'src/data/review-batch-manifest.json'),'utf8'));
const beans=JSON.parse(await fs.readFile(path.join(root,'src/data/bean-review-manifest.json'),'utf8'));
const routes=[...new Set([...manifest.map(x=>x.slug),...beans.map(x=>x.slug),'/espresso-machine/breville-bambino/'])];
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,key)=>n?.attrs?.find(x=>x.name===key)?.value;
const hasClass=(n,value)=>(attr(n,'class')??'').split(/\s+/).includes(value);
const text=n=>(n?.nodeName==='#text'?n.value:(n?.childNodes??[]).filter(c=>!(c.tagName==='a'&&text(c)==='[source]')).map(text).join(' ')).replace(/\s+/g,' ').trim();
const reviews=[];
for(const slug of routes) {
  const nodes=walk(parse(await fs.readFile(path.join(root,'dist',slug,'index.html'),'utf8')));
  const main=nodes.find(n=>n.tagName==='main'),content=walk(main);
  const graph=nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{const value=JSON.parse(text(n));return value['@graph']??[value];});
  const product=graph.find(n=>[n['@type']].flat().includes('Product'));
  const article=content.find(n=>n.tagName==='article'&&(hasClass(n,'review-article')||hasClass(n,'bean-article')));
  const section=walk(article).find(n=>n.tagName==='section'&&hasClass(n,'review-section')&&!['ratings','video','methodology','sources','verdict'].includes(attr(n,'id')));
  const body=walk(section).find(n=>hasClass(n,'review-section-body'));
  const overview=text(body?.childNodes.find(n=>n.tagName==='p'));
  if(!overview)throw new Error(`${slug}: missing opening article paragraph`);
  reviews.push({slug,title:text(content.find(n=>n.tagName==='h1')),name:product?.name,brand:typeof product?.brand==='string'?product.brand:product?.brand?.name,overview});
}
const result=checkReviewOriginality(reviews);
await fs.mkdir(path.join(root,'dist/reports'),{recursive:true});
await fs.writeFile(path.join(root,'dist/reports/review-originality.json'),JSON.stringify(result,null,2)+'\n');
for(const warning of result.warnings)console.warn(`EDITORIAL REVIEW: ${warning}`);
if(result.errors.length){console.error(result.errors.join('\n'));process.exitCode=1;}
else console.log(`Review originality passed: ${result.reviews} reviews; no near-duplicate titles/overviews or widespread opening boilerplate.`);
