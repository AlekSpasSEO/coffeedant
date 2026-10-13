import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
import {journalRedirects,rewriteJournalHref} from './migrate-journal-links.mjs';
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,key)=>n?.attrs?.find(a=>a.name===key)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join(' ');
const hasClass=(n,c)=>(attr(n,'class')??'').split(/\s+/).includes(c);
const output=route=>path.join('dist',route.replace(/^\//,''),'index.html');
const read=route=>walk(parse(fs.readFileSync(output(route),'utf8')));
const graph=nodes=>nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{const v=JSON.parse(text(n));return v['@graph']??[v];});
const canonical=nodes=>attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');
const routeOf=url=>new URL(url,'https://coffeedant.com').pathname.replace(/^\/coffeedant/,'');
const hub=read('/journal/');
const cards=hub.filter(n=>hasClass(n,'journal-card'));
assert.equal(cards.length,25,'All features, informational articles and buying guides must appear');
assert.equal(hub.filter(n=>attr(n,'data-reader')).length,0,'Hub is a library, not hidden duplicate articles');
assert.equal(graph(hub).find(n=>n['@type']==='ItemList').numberOfItems,25);
assert.equal(graph(hub).filter(n=>n['@type']==='Article').length,0);
assert.equal(new Set(cards.map(n=>attr(n,'href'))).size,25);
assert.deepEqual(cards.reduce((c,n)=>{const k=attr(n,'data-kind');c[k]=(c[k]??0)+1;return c;},{}),{feature:10,informational:7,'buying-guide':8});
const media=JSON.parse(fs.readFileSync('src/data/journal-existing-media.json','utf8'));
const sitemap=fs.readFileSync('public/sitemap.xml','utf8');
const redirects=fs.readFileSync('public/_redirects','utf8').split(/\r?\n/).filter(l=>l&&!l.startsWith('#')).map(l=>l.trim().split(/\s+/));
const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(new Set(sitemapUrls).size,sitemapUrls.length);
for(const card of cards){
 const route=routeOf(attr(card,'href'));assert.match(route,/^\/journal\/[a-z0-9-]+\/$/);
 const nodes=read(route);const schema=graph(nodes);const article=schema.find(n=>n['@type']==='Article');
 const main=nodes.find(n=>n.tagName==='main');assert.ok(main);const content=walk(main);
 assert.equal(canonical(nodes),`https://coffeedant.com${route}`);
 assert.equal(content.filter(n=>n.tagName==='h1').length,1,`${route}: single article heading`);
 assert.ok(article,`${route}: article schema missing`);assert.equal(article.mainEntityOfPage,`https://coffeedant.com${route}`);
 assert.ok(sitemapUrls.includes(`https://coffeedant.com${route}`));
 const ids=nodes.map(n=>attr(n,'id')).filter(Boolean);assert.equal(new Set(ids).size,ids.length,`${route}: unique IDs`);
 for(const n of nodes.filter(n=>n.tagName==='a'))assert.equal(rewriteJournalHref(attr(n,'href')),attr(n,'href'),`${route}: obsolete internal link`);
 for(const button of content.filter(n=>attr(n,'data-chapter')))assert.ok(ids.includes(attr(button,'data-chapter')));
 const kind=attr(card,'data-kind');
 if(kind==='feature'){
  const reader=content.find(n=>attr(n,'data-reader'));assert.ok(reader);assert.equal(attr(reader,'hidden'),undefined,`${route}: article must be visible without JavaScript`);
  assert.equal(content.filter(n=>attr(n,'data-reader')).length,1);
  const id=attr(reader,'data-reader'),records=media[id];assert.ok(records);
  const sections=content.filter(n=>hasClass(n,'reader-section'));assert.equal(sections.length,6);
  assert.ok(sections.map(text).join(' ').split(/\s+/).filter(Boolean).length>=900,`${route}: longform text retained`);
  assert.equal(content.filter(n=>n.tagName==='table').length,1);assert.ok(content.some(n=>attr(n,'data-visual')));assert.ok(content.some(n=>hasClass(n,'reader-faq')));
  assert.equal(content.filter(n=>attr(n,'data-existing-photo')!==undefined).length,2);
  for(const photo of records.images){assert.ok(photo.credit&&photo.caption&&photo.alt&&photo.sourceUrl&&photo.licenseUrl);assert.ok(fs.existsSync(path.join('dist',photo.src)));}
  assert.match(records.video.id,/^[A-Za-z0-9_-]{11}$/);assert.ok(content.some(n=>attr(n,'data-journal-video')===records.video.id));assert.ok(content.some(n=>n.tagName==='a'&&attr(n,'href')===records.video.watchUrl));
  assert.equal(schema.filter(n=>n['@type']==='VideoObject').length,1);
  assert.equal(article.associatedMedia.length,2);
  assert.ok(content.filter(n=>n.tagName==='a'&&/^https:/.test(attr(n,'href')??'')).length>=4);
 }else{
  assert.ok(content.some(n=>hasClass(n,kind==='informational'?'article-guide':'guide-article')),`${route}: existing article layout retained`);
  assert.ok(text(main).split(/\s+/).filter(Boolean).length>4000,`${route}: full guide retained`);
  assert.ok(schema.some(n=>n['@type']==='BreadcrumbList'&&n.itemListElement.some(x=>x.item==='https://coffeedant.com/journal/')));
 }
 for(const img of content.filter(n=>n.tagName==='img'&&(attr(n,'src')??'').includes('/journal/'))){assert.ok(attr(img,'alt'));const src=attr(img,'src').replace(/^\/coffeedant\//,'/').replace(/^\//,'');assert.ok(fs.existsSync(path.join('dist',src)));}
}
for(const [oldRoute,newRoute] of Object.entries(journalRedirects)){
 assert.ok(redirects.some(([from,to,status])=>from===oldRoute&&to===newRoute&&status==='301'),`${oldRoute}: permanent redirect missing`);
 assert.ok(redirects.some(([from,to,status])=>from===oldRoute.slice(0,-1)&&to===newRoute&&status==='301'),`${oldRoute}: slashless redirect missing`);
 assert.ok(!sitemapUrls.includes(`https://coffeedant.com${oldRoute}`),`${oldRoute}: obsolete sitemap entry`);
 const nodes=read(oldRoute);const refresh=nodes.find(n=>n.tagName==='meta'&&attr(n,'http-equiv')==='refresh');assert.ok(attr(refresh,'content').endsWith(newRoute));assert.ok(nodes.some(n=>n.tagName==='meta'&&attr(n,'name')==='robots'&&attr(n,'content')==='noindex'));
}
for(const [from,to,status] of redirects){if(status==='301')assert.ok(!journalRedirects[to],`${from}: Journal redirect chain`);}
const homepage=read('/');assert.ok(homepage.some(n=>attr(n,'data-journal-home-link')!==undefined&&routeOf(attr(n,'href'))==='/journal/'));assert.equal(homepage.filter(n=>attr(n,'data-reader')).length,0);
assert.ok(hub.some(n=>attr(n,'data-filter')==='Guides'));
console.log('Journal passed: 25 unique canonical article URLs, visible article bodies, preserved media, unified library, schema/sitemap, flattened 301 redirects and fallback pages.');
