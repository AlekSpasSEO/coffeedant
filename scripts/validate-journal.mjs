import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
const walk=(n)=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,key)=>n.attrs?.find(a=>a.name===key)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join(' ');
const html=fs.readFileSync('dist/journal/index.html','utf8');
const nodes=walk(parse(html));
const readers=nodes.filter(n=>attr(n,'data-reader'));
const media=JSON.parse(fs.readFileSync('src/data/journal-existing-media.json','utf8'));
assert.equal(readers.length,10,'Ten complete articles must be present in built HTML');
assert.equal(Object.keys(media).length,10,'All ten stories need existing media');
for(const reader of readers){
 const id=attr(reader,'data-reader');const records=media[id];assert.ok(records,`${id}: media missing`);
 assert.equal(records.images.length,2,`${id}: two additional existing images required`);
 assert.equal(walk(reader).filter(n=>n.tagName==='figure'&&attr(n,'data-existing-photo')!==undefined).length,2,`${id}: two figures must render`);
 for(const photo of records.images){assert.ok(photo.credit&&photo.caption&&photo.alt&&photo.sourceUrl&&photo.licenseUrl);assert.match(photo.license,/CC BY|CC0|Public domain/);assert.ok(fs.existsSync(path.join('dist',photo.src)));assert.ok(photo.afterSection>=0&&photo.afterSection<6);}
 assert.match(records.video.id,/^[A-Za-z0-9_-]{11}$/);assert.ok(records.video.creator&&records.video.note);
 assert.ok(walk(reader).some(n=>attr(n,'data-journal-video')===records.video.id),`${id}: video player missing`);
 assert.ok(walk(reader).some(n=>n.tagName==='a'&&attr(n,'href')===records.video.watchUrl),`${id}: YouTube fallback missing`);
}
assert.deepEqual(readers.reduce((counts,r)=>{const title=text(walk(r).find(n=>n.tagName==='h1'));assert.ok(title.length>8);const content=walk(r).filter(n=>attr(n,'class')==='reader-section');assert.equal(content.length,6);const words=content.map(text).join(' ').split(/\s+/).filter(Boolean).length;assert.ok(words>=900,`${title}: useful longform depth (${words})`);assert.ok(walk(r).filter(n=>n.tagName==='table').length===1);assert.ok(walk(r).some(n=>attr(n,'data-visual')));assert.ok(walk(r).filter(n=>n.tagName==='a'&&/^https:/.test(attr(n,'href')??'')).length>=4);assert.ok(walk(r).find(n=>attr(n,'class')==='reader-faq'));counts.push({title,words});return counts;},[]).length,10);
for(const route of ['journal/index.html','index.html']){
 const document=walk(parse(fs.readFileSync(path.join('dist',route),'utf8')));
 const ids=document.map(n=>attr(n,'id')).filter(Boolean);assert.equal(ids.length,new Set(ids).size,`${route}: duplicate IDs`);
 const canonical=document.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical');assert.equal(attr(canonical,'href'),`https://coffeedant.com/${route==='index.html'?'':'journal/'}`);
 for(const img of document.filter(n=>n.tagName==='img'&&(attr(n,'src')??'').includes('/journal/'))){assert.ok(attr(img,'alt'));assert.ok(attr(img,'width')&&attr(img,'height'));const source=attr(img,'src').replace(/^\/coffeedant\//,'/').replace(/^\//,'');assert.ok(fs.existsSync(path.join('dist',source)),`${source} missing`);}
 for(const button of document.filter(n=>attr(n,'data-chapter')))assert.ok(ids.includes(attr(button,'data-chapter')),'Chapter target missing');
 for(const button of document.filter(n=>attr(n,'data-story')))assert.ok(ids.includes(attr(button,'data-story')),'Story target missing');
}
const schema=nodes.find(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json');const graph=JSON.parse(text(schema))['@graph'];assert.equal(graph.filter(n=>n['@type']==='Article').length,10);for(const article of graph.filter(n=>n['@type']==='Article'))assert.ok(nodes.some(n=>attr(n,'id')===article['@id'].split('#')[1]));
assert.equal(graph.filter(n=>n['@type']==='VideoObject').length,10,'Ten related video schema objects');
assert.ok(fs.readFileSync('public/sitemap.xml','utf8').includes('https://coffeedant.com/journal/'));
assert.ok(fs.readFileSync('dist/index.html','utf8').includes('data-open-journal'));
console.log('Journal passed: 10 complete stories; 20 attributed licensed images; 10 related video players and fallback links; source links; chapter/story targets; unique IDs; canonical; media/schema; homepage entry.');
