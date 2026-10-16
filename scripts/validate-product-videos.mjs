import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { graph, walk, attr } from './build-seo.mjs';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8'),json=p=>JSON.parse(read(p));
const catalog=json('src/data/product-videos.json'),assessments=json('src/data/product-video-assessments.json');
const products=json('dist/product-video-inventory.json');
const library=read('dist/videos/index.html'),doc=parse(library),nodes=walk(doc),schemas=graph(doc);
const videos=Object.values(catalog).flat(),ids=new Set(videos.map(v=>v.id));
assert.equal(schemas.filter(s=>s['@type']==='VideoObject').length,ids.size,'one library VideoObject per unique video');
assert.equal(nodes.filter(n=>attr(n,'data-product-video')!==undefined).length,videos.length,'every selection renders in the library');
assert.ok(schemas.some(s=>s['@type']==='CollectionPage'),'CollectionPage schema');
assert.equal(schemas.find(s=>s['@type']==='ItemList'&&s['@id'].endsWith('#list')).numberOfItems,ids.size);
assert.ok(!nodes.some(n=>n.tagName==='iframe'),'players load only on request');
assert.ok(library.includes('data-results-mode="videos"'),'Coffee Finder filters video results');
const known=new Set(products.map(p=>p.slug));
for(const path of Object.keys(catalog))assert.ok(known.has(path),`orphan video product ${path}`);
for(const p of products){
 assert.ok(Object.hasOwn(catalog,p.slug)&&assessments[p.slug],`${p.slug}: research videos for every new review, including an explicit no-video result`);
 const selected=catalog[p.slug];assert.ok(selected.length<=3,`${p.slug}: maximum three videos`);
 assert.equal(new Set(selected.map(v=>v.id)).size,selected.length,`${p.slug}: no duplicate selections`);
 const reviewDoc=parse(read(`dist${p.slug}index.html`)),reviewVideos=walk(reviewDoc).filter(n=>attr(n,'data-product-video')!==undefined),reviewSchemas=graph(reviewDoc).filter(s=>s['@type']==='VideoObject');
 assert.equal(reviewVideos.length,selected.length?1:0,`${p.slug}: exactly one selected video, or none when unsuitable`);
 assert.equal(reviewSchemas.length,selected.length?1:0,`${p.slug}: video/schema parity`);
 if(selected.length)assert.equal(attr(reviewVideos[0],'data-product-video'),selected[0].id,`${p.slug}: primary selection`);
 for(const v of selected){
  assert.match(v.id,/^[\w-]{11}$/);assert.ok(v.title&&v.summary&&v.creator&&v.verifiedAt);
  assert.match(v.channelUrl,/^https:\/\/www\.youtube\.com\/channel\/[\w-]+$/);
  assert.ok(!/^(breville|sage appliances|de.?longhi|gaggia(?:na| uk)?|krups|philips|saeco|melitta|la pavoni|lelit|flair espresso|rok coffee|cady hungary)\b/i.test(v.creator),`${p.slug}: manufacturer upload excluded`);
  assert.ok(['reviewer','retailer'].includes(v.sourceType));assert.match(v.duration,/^PT\d+S$/);
  assert.ok(Number.isFinite(Date.parse(v.published))&&Date.parse(v.published)<=Date.now());
  const s=schemas.find(s=>s['@type']==='VideoObject'&&s['@id'].endsWith(v.id));
  assert.equal(s.uploadDate,v.published);assert.equal(s.creator.url,v.channelUrl);assert.equal(s.duration,v.duration);assert.equal(s.description,v.summary);
  assert.ok(!s.contentUrl,'YouTube watch pages are not raw video content URLs');
 }
}
assert.ok(read('dist/sitemap.xml').includes('https://coffeedant.com/videos/'),'video library in sitemap');
console.log(`Video library passed: ${products.length} products assessed, ${videos.length} selections, ${ids.size} unique videos, metadata/schema parity and one embed per eligible review.`);
