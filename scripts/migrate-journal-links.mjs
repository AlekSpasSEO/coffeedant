import {readFile,writeFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const migration=JSON.parse(await readFile(new URL('../src/data/journal-route-migration.json',import.meta.url),'utf8'));
export const journalRedirects={...migration.blogs,...migration.guides,...migration.hubs};
export const journalDestination=route=>journalRedirects[route]??route;
const htmlFiles=async directory=>(await Promise.all((await readdir(directory,{withFileTypes:true})).map(entry=>{
 const file=path.join(directory,entry.name);return entry.isDirectory()?htmlFiles(file):file.endsWith('.html')?[file]:[];
}))).flat();

export const rewriteJournalHref=value=>{
 if(!value||/^(?:#|mailto:|tel:|data:|javascript:)/i.test(value))return value;
 let url;try{url=new URL(value,'https://coffeedant.com');}catch{return value;}
 const preview=url.origin==='https://alekspasseo.github.io';
 if(!['https://coffeedant.com','https://www.coffeedant.com'].includes(url.origin)&&!preview)return value;
 const prefix=url.pathname.startsWith('/coffeedant/')?'/coffeedant':'';
 const route=prefix?url.pathname.slice(prefix.length):url.pathname;
 const destination=journalRedirects[route];if(!destination)return value;
 return value.startsWith('/')?`${prefix}${destination}${url.search}${url.hash}`:`${url.origin}${prefix}${destination}${url.search}${url.hash}`;
};

export const rewriteJournalHtml=html=>html.replace(/(\bhref\s*=\s*)(["'])(.*?)\2/gi,(match,prefix,quote,value)=>{
 const destination=rewriteJournalHref(value);return destination===value?match:`${prefix}${quote}${destination}${quote}`;
});

// Update delivered links without changing archived content or product route keys.
export const migrateJournalLinks=async directory=>{
 let count=0;
 for(const file of await htmlFiles(directory)){
  const html=await readFile(file,'utf8');
  // Preserve article bytes and entity encoding while changing only href values.
  const updated=rewriteJournalHtml(html);
  if(updated!==html){count+=[...html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)].filter(match=>rewriteJournalHref(match[2])!==match[2]).length;await writeFile(file,updated);}
 }
 return count;
};

export default()=>({name:'coffeedant-journal-links',hooks:{'astro:build:done':async({dir,logger})=>{
 const count=await migrateJournalLinks(fileURLToPath(dir));logger.info(`Updated ${count} internal links to canonical Journal URLs.`);
}}});
