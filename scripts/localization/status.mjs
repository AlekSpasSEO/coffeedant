import path from 'node:path';
import { appendFile } from 'node:fs/promises';
import { root, config, readJson, loadCache, policyHash, writeJson } from './core.mjs';

const source = await readJson(path.join(root, '.localization/source.json'), null);
const markets = await readJson(path.join(root, 'localization/markets.json'));
const releases = await readJson(path.join(root, 'localization/releases.json'));
const result = {
  translationCredentialAvailable: Boolean(process.env.OPENAI_API_KEY),
  sourcePages: source?.pages.length ?? null,
  editions: [],
};
for (const edition of config.editions.filter(({ id }) => id !== 'us')) {
  const cache = await loadCache(edition.id);
  const market = markets.markets[edition.id];
  result.editions.push({ edition: edition.id, host: edition.host, locale: edition.locale, published: edition.published,
    translatedSegments: Object.values(cache.segments).filter(({ policyHash: hash }) => hash === policyHash).length,
    pendingSegments: source ? source.segments.filter(({ id }) => cache.segments[id]?.policyHash !== policyHash).length : null,
    registeredRoutes: Object.keys(cache.routes).length,
    amazon: edition.amazonMarketplace ? {
      marketplace: edition.amazonMarketplace, partnerTagConfigured: Boolean(market?.partnerTag), apiAccessVerified: Boolean(market?.apiAccessVerified),
      verifiedProducts: Object.values(market?.products ?? {}).filter((entry) => entry.identityVerified && entry.regionalSpecificationVerified && entry.deliveryVerified).length,
    } : { status: 'no-dedicated-marketplace; country/delivery-verified retailer setup needed' },
    deploymentVerified: Boolean(releases.editions[edition.id]?.verifiedPaths),
  });
}
await writeJson(path.join(root, '.localization/status.json'), result);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,
  `## Regional rollout status\nTranslation credential: ${result.translationCredentialAvailable ? 'configured' : '**missing OPENAI_API_KEY**'}. Source pages: ${result.sourcePages ?? 'not indexed'}.\n\n`
  + result.editions.map((entry) => `- ${entry.host}: ${entry.translatedSegments} translated segments; ${entry.pendingSegments ?? '?'} pending; ${entry.published ? 'release enabled' : 'public release held'}; Amazon ${entry.amazon.partnerTagConfigured ? 'tag configured' : entry.amazon.status ?? 'regional tag missing'}`).join('\n') + '\n');
console.log(JSON.stringify(result, null, 2));
