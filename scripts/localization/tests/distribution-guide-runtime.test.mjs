import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
import {transformSync} from 'esbuild';
import {root,readJson,getEdition} from '../core.mjs';

test('actual distribution handler switches both panels without replacing localized text',async()=>{
 const component=await readFile(path.join(root,'src/components/guides/TechniqueSchematic.astro'),'utf8');
 const script=component.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/^\s*import .*;\s*$/gm,'');
 const code=transformSync(script,{loader:'ts',target:'es2020'}).code;
 const a=await readJson(path.join(root,'localization/authored/distribution-guide-batch-34.json'));
 for(const e of a.editions){
  for(const i of [10,11])assert(a.translations[i][e].length<=46,'compact labels must fit the fixed mobile diagram');
  assert(/niet|nicht|n’est pas/.test(a.translations[10][e]));assert(/geen|kein|pas un/.test(a.translations[11][e]));
  const buttons=[7,8].map((index,i)=>({textContent:a.translations[index][e],dataset:{techniqueChoice:String(i)},attrs:{'aria-pressed':String(i===0)},handlers:{},addEventListener(event,fn){this.handlers[event]=fn;},setAttribute(k,v){this.attrs[k]=v;}}));
  const panels=[10,11].map((index,i)=>({textContent:a.translations[index][e],dataset:{techniquePanel:String(i)},hidden:i===1,toggleAttribute(k,v){assert.equal(k,'hidden');this.hidden=v;}}));
  const labels=[...buttons,...panels].map(n=>n.textContent);
  const schematic={querySelectorAll(s){if(s==='[data-technique-choice]')return buttons;if(s==='[data-technique-panel]')return panels;if(s==='[data-technique-steps] li')return [];throw Error(s);},querySelector(){return null;}};
  const document={documentElement:{lang:getEdition(e).locale},querySelectorAll(s){assert.equal(s,'[data-technique-schematic]');return [schematic];}};
  runInNewContext(code,{document,Intl},{timeout:1000});
  buttons[1].handlers.click();assert.deepEqual(buttons.map(b=>b.attrs['aria-pressed']),['false','true']);assert.deepEqual(panels.map(p=>p.hidden),[true,false]);
  buttons[0].handlers.click();assert.deepEqual(buttons.map(b=>b.attrs['aria-pressed']),['true','false']);assert.deepEqual(panels.map(p=>p.hidden),[false,true]);
  assert.deepEqual([...buttons,...panels].map(n=>n.textContent),labels);
 }
});
