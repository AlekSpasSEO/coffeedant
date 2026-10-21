import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {transformSync} from 'esbuild';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,contentId,segmentId,interfaceSource} from '../core.mjs';
const get=async()=>({s:await readJson(path.join(root,'localization/authored/bean-watch-batch-44.source.json')),a:await readJson(path.join(root,'localization/authored/bean-watch-batch-44.json'))});

test('eight full bean watch companions cover every frozen slot without renaming registered routes',async()=>{
 const {s,a}=await get();assert.equal(s.sourcePages.length,8);assert.equal(s.segments.length,108);assert.equal(new Set(s.segments.map(v=>v.source)).size,73);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,72);assert.deepEqual(a.preserveSource.map(i=>s.segments[i].source),['Live with Irish']);
 const covered=new Set([...a.preserveSource.map(i=>s.segments[i].source),...Object.keys(a.translations).map(i=>s.segments[i].source)]);assert(s.segments.every(v=>covered.has(v.source)));
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.provider,'codex-direct');assert.equal(x.text,validateTranslation(v.source,x.text));const first=s.segments.find(x=>x.source===v.source);assert.equal(x.text,c.segments[first.id].text);}
  for(const p of s.sourcePages)assert.equal(c.routes[contentId(p.sourcePath)].path,a.routes[e][p.sourcePath]);assert.equal(c.routes[contentId('/journal/espresso-dosing/')].path,{nl:'/journal/espresso-doseren/',de:'/journal/espresso-dosieren/',fr:'/journal/doser-expresso/'}[e]);
 }
});

test('watch ownership, old-sample caveats and distinct ISO-title versus UTC-visible dates remain intact',async()=>{
 const {s,a}=await get();for(const e of a.editions){const c=await loadCache(e),t=i=>c.segments[s.segments[i].id].text;
  for(const[i,values]of [[1,['2025-05-27','Coffee Reviews with Glenn Flaherty']],[16,['2025-04-13','Coffee Scientist']],[22,['14','2025']],[29,['2026-01-26','Fly On The Wall 4K']],[35,['27','2026']],[42,['2022-01-24','Coffee Coffee Coffee And Books']],[48,['25','2022']],[55,['2020-08-03','2020','#26']],[67,['2021-05-18','Live with Irish']],[75,['19','2021']],[86,['2021-03-20','#41','Sumukh Torgalkar']],[96,['2021-01-27','Joe Varacalli','Breville Barista Express']],[102,['28','2021']]])for(const v of values)assert(t(i).includes(v),`${e} ${i}: ${v}`);
  assert(/geen van beide zakken geproefd|keinen der beiden Beutel verkostet|n’a goûté ni l’un ni l’autre sachet/.test(t(55)));
  for(const i of [10,23,36,49,61,77,90,103])assert(/De video en meningen zijn van|Video und Meinungen gehören|La vidéo et les opinions appartiennent à/.test(t(i)));
  assert(/van de maker zelf|vom Ersteller selbst|celles du créateur/.test(t(76)));
 }
});

class TestNode {
 constructor(tag,text=''){this.tagName=tag;this.ownText=text;this.children=[];this.listeners=new Map();this.attrs={};this.open=false;this.focusCount=0;}
 get textContent(){return this.ownText+this.children.map(n=>n.textContent).join('');}
 set textContent(v){this.ownText=v;this.children=[];}
 get childElementCount(){return this.children.length;}
 setAttribute(k,v){this.attrs[k]=v;}
 append(...nodes){for(const n of nodes){n.remove();n.parentNode=this;this.children.push(n);}}
 replaceChildren(...nodes){for(const n of [...this.children])n.remove();this.append(...nodes);}
 remove(){if(this.parentNode){const p=this.parentNode;p.children=p.children.filter(n=>n!==this);this.parentNode=null;}}
 querySelectorAll(){return [...this.children];}
 querySelector(tag){for(const n of this.children){if(n.tagName===tag)return n;const found=n.querySelector(tag);if(found)return found;}return null;}
 cloneNode(deep){const n=new TestNode(this.tagName,this.ownText);n.attrs={...this.attrs};if(deep)n.append(...this.children.map(v=>v.cloneNode(true)));return n;}
 addEventListener(type,fn){this.listeners.set(type,fn);}
 focus(){this.focusCount++;}
 showModal(){this.open=true;}
 close(){this.open=false;}
 getBoundingClientRect(){return {left:0,right:100,top:0,bottom:100};}
}

test('actual compiled popup loads native watch content, updates/restores head and history, stops iframe and respects external/modified links',async()=>{
 const ts=await readFile(path.join(root,'src/scripts/video-watch.ts'),'utf8'),code=transformSync(ts,{loader:'ts',target:'es2022'}).code,{a,s}=await get();
 for(const e of a.editions){
  const cache=await loadCache(e),label=cache.segments[segmentId(interfaceSource.videoClose,'interface')].text,origin=`https://${e}.coffeedant.com`,initial=origin+cache.routes[contentId('/coffee-beans/counter-culture-big-trouble/')].path,url=origin+a.routes[e][s.sourcePages[0].sourcePath];
  const body=new TestNode('body'),head=new TestNode('head');head.append(new TestNode('title','original review'),new TestNode('link','original canonical'));
  const watch=new TestNode('article',a.translations[10][e]),iframe=new TestNode('iframe');iframe.attrs.src='https://www.youtube-nocookie.com/embed/existing-id';watch.append(iframe);
  const pageHead=new TestNode('head');pageHead.append(new TestNode('title',a.translations[14][e]),new TestNode('link',url));
  const documentEvents=new Map(),windowEvents=new Map(),stops=[],requests=[],assignments=[];
  const location={origin,href:initial,assign:href=>assignments.push(href)};
  const history={state:{},pushState(state,_title,href){this.state=state;location.href=href;},back(){this.state={};location.href=initial;windowEvents.get('popstate')();}};
  const document={body,head,createElement:tag=>new TestNode(tag),querySelector:()=>({textContent:JSON.stringify({ui:{videoClose:label}})}),addEventListener:(t,f)=>documentEvents.set(t,f),dispatchEvent:event=>stops.push(event.type),adoptNode:n=>n};
  class Parser {parseFromString(html,type){assert.equal(html,'native watch fixture');assert.equal(type,'text/html');return {head:pageHead,querySelector:selector=>{assert.equal(selector,'[data-video-watch]');return watch;}};}}
  vm.runInNewContext(code,{document,window:{addEventListener:(t,f)=>windowEvents.set(t,f)},location,history,AbortController,Event,DOMParser:Parser,fetch:async(href,{signal})=>{assert.equal(signal.aborted,false);requests.push(href);return {ok:true,text:async()=>'native watch fixture'};}},{timeout:1000});
  const dialog=body.children[0],close=dialog.children[0],content=dialog.children[1],opener=new TestNode('a');Object.assign(opener,{origin,href:url,target:''});
  const click=link=>({button:0,defaultPrevented:false,metaKey:false,ctrlKey:false,shiftKey:false,altKey:false,target:{closest:()=>link},preventDefault(){this.defaultPrevented=true;}});
  const event=click(opener);documentEvents.get('click')(event);await new Promise(resolve=>setImmediate(resolve));
  assert.equal(event.defaultPrevented,true);assert.deepEqual(requests,[url]);assert.equal(dialog.open,true);assert.equal(close.textContent,label);assert.equal(content.children[0],watch);assert(content.textContent.includes(a.translations[10][e]));assert.equal(head.children[0].textContent,a.translations[14][e]);assert.equal(history.state.coffeedantVideoWatch,true);assert.equal(location.href,url);assert.deepEqual(stops,['product-video-stop']);assert.equal(close.focusCount,1);
  close.listeners.get('click')();assert.equal(iframe.parentNode,null);assert.equal(content.childElementCount,0);assert.equal(dialog.open,false);assert.equal(head.children[0].textContent,'original review');assert.equal(location.href,initial);assert.equal(opener.focusCount,1);assert.deepEqual(assignments,[]);
  const foreign=click({origin:'https://coffeedant.com',href:'https://coffeedant.com/untranslated/video/',target:''});documentEvents.get('click')(foreign);assert.equal(foreign.defaultPrevented,false);
  const modified=click(opener);modified.ctrlKey=true;documentEvents.get('click')(modified);assert.equal(modified.defaultPrevented,false);assert.equal(requests.length,1);
 }
});
