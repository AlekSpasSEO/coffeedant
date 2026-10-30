import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { graph, walk, attr } from './build-seo.mjs';
import { videoWatchPath } from '../src/lib/video-routes.mjs';
import { schemaNodesOfType } from './lib/structured-data-audit.mjs';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8'),json=p=>JSON.parse(read(p));
const catalog=json('src/data/product-videos.json'),assessments=json('src/data/product-video-assessments.json');
const products=json('dist/product-video-inventory.json');
const library=read('dist/videos/index.html'),doc=parse(library),nodes=walk(doc),schemas=graph(doc);
// Inspect the built target: CI's CF_PAGES value is scoped to its build step.
const base=attr(nodes.find(n=>n.tagName==='a'&&attr(n,'aria-label')==='Coffeedant home'),'href');
assert.ok(['/', '/coffeedant/'].includes(base),'library has a recognized site base');
const videos=Object.values(catalog).flat(),ids=new Set(videos.map(v=>v.id));
const videoSitemap=read('dist/video-sitemap.xml');
const watchPaths=new Set();
assert.equal(schemas.filter(s=>s['@type']==='VideoObject').length,ids.size,'one library VideoObject per unique video');
assert.equal(nodes.filter(n=>attr(n,'data-product-video')!==undefined).length,videos.length,'every selection renders in the library');
assert.ok(schemas.some(s=>s['@type']==='CollectionPage'),'CollectionPage schema');
assert.equal(schemaNodesOfType(schemas,'Product').length,0,'video library must not declare incomplete Products, including nested video topics');
assert.equal(schemas.find(s=>s['@type']==='ItemList'&&s['@id'].endsWith('#list')).numberOfItems,ids.size);
assert.ok(!nodes.some(n=>n.tagName==='iframe'),'players load only on request');
assert.ok(library.includes('data-results-mode="videos"'),'Coffee Finder filters video results');
const known=new Set(products.map(p=>p.slug));
for(const path of Object.keys(catalog))assert.ok(known.has(path),`orphan video product ${path}`);
for(const p of products){
 assert.ok(Object.hasOwn(catalog,p.slug)&&assessments[p.slug],`${p.slug}: research videos for every new review, including an explicit no-video result`);
 const selected=catalog[p.slug];assert.ok(selected.length<=3,`${p.slug}: maximum three videos`);
 assert.equal(new Set(selected.map(v=>v.id)).size,selected.length,`${p.slug}: no duplicate selections`);
 const reviewDoc=parse(read(`dist${p.slug}index.html`)),reviewGraph=graph(reviewDoc),reviewVideos=walk(reviewDoc).filter(n=>attr(n,'data-product-video')!==undefined),reviewSchemas=reviewGraph.filter(s=>s['@type']==='VideoObject');
 const reviewProducts=schemaNodesOfType(reviewGraph,'Product');
 assert.equal(reviewProducts.length,1,`${p.slug}: retain one authoritative Product without nested duplicate topic declarations`);
 assert.equal(reviewProducts[0]['@id'],`https://coffeedant.com${p.slug}#product`,`${p.slug}: authoritative Product identity`);
 if(!p.slug.startsWith('/coffee-beans/')){
  assert.ok(reviewProducts[0].review?.reviewRating?.ratingValue,`${p.slug}: preserve the equipment review rating`);
  assert.ok(reviewProducts[0].review.author?.name,`${p.slug}: preserve the equipment review author`);
 }
 assert.equal(reviewVideos.length,selected.length?1:0,`${p.slug}: exactly one selected video, or none when unsuitable`);
 assert.equal(reviewSchemas.length,selected.length?1:0,`${p.slug}: video/schema parity`);
 if(selected.length)assert.equal(attr(reviewVideos[0],'data-product-video'),selected[0].id,`${p.slug}: primary selection`);
 for(const v of selected){
  const watchPath=videoWatchPath(p.slug,v,selected);
  assert.ok(!watchPaths.has(watchPath),`${watchPath}: unique watch URL`);watchPaths.add(watchPath);
  const watchDoc=parse(read(`dist${watchPath}index.html`)),watchNodes=walk(watchDoc),watchSchemas=graph(watchDoc);
  const watchVideo=watchSchemas.filter(s=>s['@type']==='VideoObject');
  assert.equal(schemaNodesOfType(watchSchemas,'Product').length,0,`${watchPath}: no incomplete Product declarations anywhere in JSON-LD`);
  assert.equal(watchVideo.length,1,`${watchPath}: exactly one primary video`);
  assert.deepEqual(watchVideo[0].about,[{'@id':`https://coffeedant.com${p.slug}#product`}],`${watchPath}: reference the authoritative review Product`);
  assert.equal(watchVideo[0].url,`https://coffeedant.com${watchPath}`);
  assert.equal(watchVideo[0].mainEntityOfPage,`https://coffeedant.com${watchPath}`);
  assert.equal(watchVideo[0].embedUrl,`https://www.youtube-nocookie.com/embed/${v.id}`);
  assert.equal(watchVideo[0].description,v.summary);
  assert.equal(watchVideo[0].uploadDate,v.published);
  assert.equal(watchVideo[0].creator.url,v.channelUrl);
  assert.equal(watchNodes.filter(n=>n.tagName==='iframe').length,1,`${watchPath}: crawlable server-rendered player`);
  assert.equal(attr(watchNodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href'),`https://coffeedant.com${watchPath}`);
  assert.ok(videoSitemap.includes(`<loc>https://coffeedant.com${watchPath}</loc>`),`${watchPath}: video sitemap membership`);
  assert.ok(nodes.some(n=>n.tagName==='a'&&attr(n,'data-video-watch-link')!==undefined&&attr(n,'href')===`${base}${watchPath.slice(1)}`),`${watchPath}: crawlable library link`);
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
assert.equal([...videoSitemap.matchAll(/<video:video>/g)].length,videos.length,'one sitemap video per selection');
assert.ok(videoSitemap.includes('xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'));
assert.ok(!videoSitemap.includes('<loc>https://coffeedant.com/videos/</loc>'),'library is not a watch page');
assert.ok(!videoSitemap.includes('<video:content_loc>'),'YouTube watch links are not raw content URLs');
console.log(`Video library passed: ${products.length} products assessed, ${videos.length} selections and watch pages, ${ids.size} unique videos, recursive Product schema checks, preserved review ratings, metadata/schema parity and one card per eligible review.`);
