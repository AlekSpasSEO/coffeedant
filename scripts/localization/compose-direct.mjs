import path from 'node:path';
import {root,readJson,writeJson,digest,validateTranslation,getEdition} from './core.mjs';

// Mechanical assembly of explicitly authored recurring editorial sentences.
// No inference, fallback, source copying, model call, or publication occurs.
export function composeDirect(parts, snapshot) {
  if(parts.schemaVersion!==1||!Array.isArray(parts.editions)||!parts.editions.length||new Set(parts.editions).size!==parts.editions.length||!parts.chunks||!parts.entries||Array.isArray(parts.entries))throw new Error('Invalid authored composition');
  for(const edition of parts.editions){getEdition(edition);if(edition==='us')throw new Error('Source edition cannot be translated');}
  if(parts.snapshotHash!==snapshot.snapshotHash || digest(JSON.stringify(snapshot.segments))!==snapshot.snapshotHash) throw new Error('Composition snapshot mismatch');
  const translations={};
  for(const [index,keys] of Object.entries(parts.entries)) {
    if(!/^(?:0|[1-9][0-9]*)$/.test(index)||!Array.isArray(keys)||!keys.length) throw new Error('Invalid composition index');
    const chunks=keys.map(key=>{const chunk=parts.chunks[key];if(!chunk||typeof chunk.source!=='string')throw new Error('Unknown authored chunk');return chunk;});
    const source=snapshot.segments[Number(index)]?.source;
    if(source!==chunks.map(chunk=>chunk.source).join(' '))throw new Error(`Composition changed source ${index}`);
    translations[index]={};
    for(const edition of parts.editions) {
      const text=chunks.map(chunk=>{const value=chunk[edition];if(typeof value!=='string'||!value.trim())throw new Error(`Missing authored ${edition} chunk`);return value;}).join(' ');
      translations[index][edition]=validateTranslation(source,text);
    }
  }
  return {schemaVersion:1,editions:parts.editions,scope:'segments',snapshot:parts.snapshot,snapshotHash:parts.snapshotHash,translations};
}

if(process.argv[1]&&path.resolve(process.argv[1])===path.join(root,'scripts/localization/compose-direct.mjs')) {
  const input=path.resolve(root,process.argv[2]??'');
  const output=path.resolve(root,process.argv[3]??'');
  const directory=path.join(root,'localization/authored');
  if(path.dirname(input)!==directory||path.dirname(output)!==directory||input===output||!output.endsWith('.json'))throw new Error('Composition files must be distinct authored JSON files');
  const parts=await readJson(input);
  const snapshotFile=path.resolve(directory,parts.snapshot);
  if(path.dirname(snapshotFile)!==directory)throw new Error('Snapshot must be adjacent');
  const result=composeDirect(parts,await readJson(snapshotFile));
  await writeJson(output,result);
  console.log(`Assembled ${Object.keys(result.translations).length} complete source-matched paragraphs in ${result.editions.join(', ')} from explicitly authored sentences.`);
}
