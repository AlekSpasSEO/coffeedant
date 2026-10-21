import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {root,readJson,digest,policyHash,loadCache,validateTranslation,interfaceSource,segmentId} from '../core.mjs';

test('concurrent video controls and accessible poster labels retain all fifteen frozen strings in NL DE FR',async()=>{
 const s=await readJson(path.join(root,'localization/authored/video-ui-refresh-batch-41.source.json')),a=await readJson(path.join(root,'localization/authored/video-ui-refresh-batch-41.json'));
 assert.equal(s.sourcePages.length,84);assert.equal(s.segments.length,15);assert.equal(s.snapshotHash,digest(JSON.stringify(s.segments)));assert.equal(a.snapshotHash,s.snapshotHash);assert.equal(Object.keys(a.translations).length,15);
 for(const e of a.editions){const c=await loadCache(e);for(const v of s.segments){const x=c.segments[v.id];assert.equal(x.source,v.source);assert.equal(x.policyHash,policyHash);assert.equal(x.text,validateTranslation(v.source,x.text));}
  assert.equal(c.segments[segmentId(interfaceSource.videoClose,'interface')].text,a.translations[0][e]);
  for(const i of [2,4,6,8,10,12,14])assert(Object.values(c.segments).some(v=>v.source===s.segments[i].source&&v.text===a.translations[i][e]),'Use existing native article wording for poster alternatives');
 }
});

test('actual video close-label initializer uses validated native runtime data, retains US defaults and cross-origin English fallback',async()=>{
 const code=await readFile(path.join(root,'src/scripts/video-watch.ts'),'utf8'),snippet=code.slice(code.indexOf("let closeLabel ="),code.indexOf('const content ='));
 assert(snippet.includes('localized.ui.videoClose'));assert(code.includes('link.origin !== location.origin'),'Untranslated US watch links must navigate normally, not render English inside regional popups');
 for(const[locale,label]of [['nl-NL','Video sluiten ×'],['de-DE','Video schließen ×'],['fr-FR','Fermer la vidéo ×']]){const close={textContent:''};vm.runInNewContext(snippet,{close,document:{querySelector:()=>({textContent:JSON.stringify({locale,ui:{videoClose:label}})})}},{timeout:1000});assert.equal(close.textContent,label);}
 for(const value of [null,'{bad json']){const close={textContent:''};vm.runInNewContext(snippet,{close,document:{querySelector:()=>value===null?null:{textContent:value}}},{timeout:1000});assert.equal(close.textContent,'Close video ×');}
});
