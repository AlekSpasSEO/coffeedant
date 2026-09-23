# Coffeedant content upgrade automation

This runbook is the durable source of truth for unattended Coffeedant upgrade batches.

## Queue and state

- `src/data/review-migration-batches.json` fixes the canonical 194-route order.
- `src/data/review-batch-manifest.json` records completed shared-template product reviews.
- `src/data/content-upgrade-progress.json` records completed special reviews, buying guides, blog articles, supporting-page audits, and the one-time completion notification.
- `npm run plan:upgrades -- --size=5` returns the first unfinished phase and the next routes. A run must never skip ahead or repeat a completed route.

The phase order is product reviews, buying guides, blog articles, then a type-appropriate audit of brand, index, trust, legal, and utility pages. Supporting pages do not inherit product-review modules or arbitrary word counts.

## Batch transaction

1. Read current `main`. If an earlier automation pull request is open, resolve that pull request before starting another batch.
2. Create one branch named `automation/content-upgrade-YYYYMMDD-HHMM` from current `main`.
3. Process no more than five queued routes. Preserve exact models, generations, regions, and permanent IDs.
4. Commit the implementation, evidence ledgers, media ledgers, manifest or progress state, internal links, and sitemap dates together.
5. Open one pull request. Do not merge until the GitHub Actions validation job is green.
6. After merge, wait for the Pages deployment and verify every changed public URL on desktop and mobile widths.
7. If validation or live verification fails, fix the same branch or pull request. Do not open another batch and do not mark the failed routes complete.

## Product review quality gate

Follow `docs/editorial-standard.md`. Each review needs 4,700 to 5,500 editorial words, one H1, the shared review layout, overall rating, six score cards and deep dives, six quick answers, simple and detailed comparisons, four recommendations, at least ten annotated sources, one independent video with metadata, six visible FAQs, author and methodology disclosures, correct schema, and no unsupported first-person testing claim. Use one hero and no more than two credited inline images. Community evidence is summarized on-page without outbound links in that panel.

Research must include current official documentation, reputable independent evaluation, owner or community context, and dated price context. Record unknown or conflicting regional details instead of averaging them. Never invent access, testing, measurements, availability, or reliability rates.

## Other editorial types

Buying guides and educational articles must meet their type-specific criteria in `docs/editorial-standard.md` and the canonical parity audit. They should not receive product scores, retailer calls to action, or Product schema unless the page truly reviews one product.

## Validation and completion

Every product batch must pass:

```text
npm ci
npm run build
node scripts/validate-review-batch.mjs
node scripts/validate-legacy-migration.mjs
npm run audit:article-parity
```

The whole project is finished only when:

- `npm run plan:upgrades -- --json` reports zero pending routes;
- `node scripts/audit-canonical-article-parity.mjs --strict` passes all 164 editorial routes;
- the review and migration validators pass;
- all 194 sitemap URLs build;
- the final GitHub Pages deployment succeeds and representative routes from every content type render correctly; and
- `completionNotified` is changed to `true` in the same final verified batch.

Notify the owner once after those conditions are met. Before that, stay silent unless a blocker requires a decision.
