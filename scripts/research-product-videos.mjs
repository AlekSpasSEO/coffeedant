// Public metadata discovery only. Editorial selection remains explicit in product-videos.json.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));
const args=process.argv.slice(2);
if(args.includes('--help')){
 console.log('Build first. Usage: node scripts/research-product-videos.mjs [--pending | --refresh] [--limit=10]. Writes research candidates/metadata under outputs/product-video-research; never publishes a video.');
 process.exit(0);
}
const inventory=await read('dist/product-video-inventory.json'),assessments=await read('src/data/product-video-assessments.json');
const output=path.join(root,'outputs/product-video-research');await fs.mkdir(output,{recursive:true});
const limit=Number(args.find(a=>a.startsWith('--limit='))?.split('=')[1]??10);
if(!Number.isInteger(limit)||limit<1||limit>25)throw Error('Use a limit from 1 to 25 to keep public metadata requests bounded.');
function extract(html,key){
 const start=html.indexOf(key);if(start<0)return null;
 const begin=html.indexOf('{',start+key.length);let depth=0,string=false,escape=false;
 for(let i=begin;i<html.length;i++){const c=html[i];if(string){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')string=false;}else{if(c==='"')string=true;else if(c==='{')depth++;else if(c==='}'&&!--depth)return JSON.parse(html.slice(begin,i+1));}}
 return null;
}
async function fetchPage(url){const response=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!response.ok)throw Error(`Public metadata unavailable (${response.status}); stop and retry later.`);return response.text();}
const text=value=>value?.simpleText??value?.runs?.map(r=>r.text).join('')??'';
function candidates(value,out=[]){
 if(!value||typeof value!=='object')return out;
 if(value.videoRenderer){const r=value.videoRenderer;out.push({id:r.videoId,title:text(r.title),creator:text(r.ownerText),duration:text(r.lengthText),published:text(r.publishedTimeText)});}
 for(const child of Object.values(value))if(typeof child==='object')candidates(child,out);
 return out;
}
if(args.includes('--pending')){
 const ids=[...new Set(Object.values(assessments).flatMap(r=>r.pendingVideoIds??[]))].slice(0,limit);
 for(const id of ids){
  const html=await fetchPage(`https://www.youtube.com/watch?v=${encodeURIComponent(id)}`),data=extract(html,'var ytInitialPlayerResponse =');
  if(!data?.videoDetails)throw Error(`${id}: public metadata missing; no verification recorded.`);
  const v=data.videoDetails,m=data.microformat?.playerMicroformatRenderer;
  await fs.writeFile(path.join(output,`${id}.json`),JSON.stringify({id,title:v.title,creator:v.author,channelUrl:`https://www.youtube.com/channel/${v.channelId}`,published:m?.publishDate,duration:v.lengthSeconds,playability:data.playabilityStatus?.status,embeddable:data.playabilityStatus?.playableInEmbed,description:v.shortDescription,checkedAt:new Date().toISOString()},null,2));
  console.log(`Metadata saved for ${id}`);
 }
}else{
 const products=inventory.filter(p=>args.includes('--refresh')||!assessments[p.slug]).slice(0,limit);
 for(const p of products){const html=await fetchPage(`https://www.youtube.com/results?search_query=${encodeURIComponent(`${p.brand} ${p.model} review`)}`);const data=extract(html,'var ytInitialData =');if(!data)throw Error(`${p.slug}: search unavailable; no assessment recorded.`);const result=candidates(data).slice(0,12);await fs.writeFile(path.join(output,`${p.slug.split('/').filter(Boolean).join('--')}.json`),JSON.stringify({...p,candidates:result,checkedAt:new Date().toISOString()},null,2));console.log(`${p.slug}: ${result.length} candidates saved for editorial review.`);}
 if(!products.length)console.log('Every current product already has an assessment. Use --pending to resume metadata checks or --refresh to research existing products.');
}
