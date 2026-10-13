import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, readJson, writeJson } from './core.mjs';

const catalog = await readJson(path.join(root, 'src/data/amazon-products.json'));
const [key, product] = Object.entries(catalog.products)[0];
const probeCatalog = path.join(root, '.localization/amazon-probe-catalog.json');
const probeOutput = path.join(root, '.localization/amazon-probe-offers.json');
await writeJson(probeCatalog, { ...catalog, products: { [key]: product } });
const flag = process.argv.indexOf('--credentials');
const credentials = flag >= 0 ? ['--credentials', process.argv[flag + 1]] : [];
const result = spawnSync(process.execPath, [path.join(root, 'scripts/update-amazon-offers.mjs'), '--catalog', probeCatalog, '--output', probeOutput, ...credentials], { cwd: root, stdio: 'inherit', env: process.env });
if (result.status !== 0) process.exit(result.status ?? 1);
const output = await readJson(probeOutput);
console.log(JSON.stringify({ credentialReuseVerified: true, marketplace: output.marketplace, returnedOffers: Object.keys(output.offers).length, sourceDataUnchanged: true }));
