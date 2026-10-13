import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, config, readJson, writeJson } from './core.mjs';

const markets = await readJson(path.join(root, 'localization/markets.json'));
const flag = process.argv.indexOf('--credentials');
const credentials = flag >= 0 ? ['--credentials', process.argv[flag + 1]] : [];
const report = [];
for (const edition of config.editions.filter(({ id }) => id !== 'us')) {
  const market = markets.markets[edition.id];
  if (!market?.partnerTag || !market?.apiAccessVerified || !edition.amazonMarketplace
    || market.marketplace !== edition.amazonMarketplace) {
    report.push({ edition: edition.id, status: 'missing-approved-regional-market' }); continue;
  }
  const products = Object.fromEntries(Object.entries(market.products ?? {}).filter(([, product]) => (
    product.identityVerified && product.regionalSpecificationVerified && product.deliveryVerified
    && /^[A-Z0-9]{10}$/.test(product.asin ?? '')
  )));
  if (!Object.keys(products).length) { report.push({ edition: edition.id, status: 'no-verified-products' }); continue; }
  const catalog = path.join(root, `.localization/catalog-${edition.id}.json`);
  const output = path.join(root, `localization/offers/${edition.id}.json`);
  await writeJson(catalog, { schemaVersion: 1, marketplace: market.marketplace, partnerTag: market.partnerTag, products });
  // Create the parent only; the updater replaces the snapshot only after API success.
  const { mkdir } = await import('node:fs/promises');
  await mkdir(path.dirname(output), { recursive: true });
  const result = spawnSync(process.execPath, [path.join(root, 'scripts/update-amazon-offers.mjs'), '--catalog', catalog, '--output', output, ...credentials], { cwd: root, stdio: 'inherit', env: process.env });
  report.push({ edition: edition.id, status: result.status === 0 ? 'refreshed' : 'failed' });
}
console.log(JSON.stringify(report, null, 2));
if (report.some(({ status }) => status === 'failed')) process.exitCode = 1;
