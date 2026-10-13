# Coffeedant regional publishing

## Domain structure

The US source remains on `coffeedant.com`. Every other edition has a distinct
subdomain and root-level routes, including `br.coffeedant.com`,
`ca.coffeedant.com`, `at.coffeedant.com`, `ch.coffeedant.com`,
`uk.coffeedant.com`, `au.coffeedant.com` and `nz.coffeedant.com`.
The full 15-edition registry is `localization/editions.json`.
Latin America uses HTML `lang="es-419"` but Google-compatible `hreflang="es"`.
No common Latin American currency or electrical standard is assumed.

## Implementation status (2026-10-13)

- All 15 editions configured; 14 regional editions deliberately unpublished.
- Shared Astro application and original US URLs preserved.
- DOM-safe source indexing currently covers all 216 canonical built HTML pages (215 regular pages
  plus the 404), including metadata, accessibility text, JSON-LD and finder data.
- Source-path-derived content IDs connect stable translated route registries.
  If the US source URL itself changes, migrate that registry explicitly and add
  redirects; source-title edits never change already registered translated URLs.
- Incremental translation cache, Cloudflare Workers AI structured-output
  integration (plus optional OpenAI Responses), regional glossaries, numeric/brand/model/placeholder validation,
  bounded API requests, retry handling and partial-success persistence.
- Translation on source pushes, daily resumable backfill and manual dispatch.
- Localized finder runtime strings, date/rating formatting and factual US
  commerce isolation. Missing local prices do not become converted US prices.
- Newly published Journal, bean and grinder content preserved and included;
  Journal filters, animated controls, recipe/water text, SVG labels and search
  terms use the localization layer without changing story IDs or calculations.
- Existing Amazon credentials reused by regional offer refreshing, gated by
  approved regional tags and manually verified listing identity/specification/
  delivery. Matching candidates still need verification; no foreign ASINs have
  been guessed or approved during this foundation implementation.
- Regional build refuses incomplete/current-policy translation coverage.
  Preview builds use noindex. Each regional output includes its own sitemap,
  canonical URLs, HTML language, translated structured data and internal links.
- Hostname router combines the regional outputs into one Pages project. The
  existing US Pages project is unchanged. Cloudflare permits five Git-connected
  projects per repository; this design requires only two total.
- Alternate-language links and the article-preserving language selector use
  verified live route metadata, not unlaunched subdomains.
- Existing opt-in GA4 retained, known regional hosts allowlisted, staging and
  unknown hosts excluded. Language/edition parameters sent only after opt-in.
- `coffeedant-regional` created through the existing Cloudflare connection with
  `npm run build:regions`, output `dist-regional/site`, production deployments
  disabled and preview deployments disabled. No public DNS changes made.
- Existing Cloudflare AI access verified with a real Brazilian Portuguese
  inference. Deployed `coffeedant-localization` AI broker with GitHub OIDC:
  RSA-signature verification, exact repository/immutable IDs, main branch,
  specific localization workflow, audience and short expiry required. Public
  unauthenticated translation requests return 401 without invoking the model.
  No Cloudflare API token or additional translation secret is copied into GitHub.

## Direct translation rollout and first Dutch review (2026-10-13)

The user selected full Netherlands Dutch, Germany German and France French
editions for direct translation by Codex. This is substantial unfinished work,
not a declaration that the three editions have been translated or deployed.
The current canonical source has 216 pages; counts can change as authors publish.

The first complete Dutch page is the espresso-dosing guide:
`https://nl.coffeedant.com/journal/espresso-doseren/`.
Its full body, practical checks, FAQs (including Answer.text in JSON-LD), source
labels, navigation, metadata, accessible labels and shared interface are directly
authored in `localization/authored/nl-espresso-dosing.json`. The immutable
`espresso-dosing.source.json` snapshot freezes 534 source slots. Only explicitly
approved brand/model names and conventional labels remain verbatim. The normal
`nl.json` cache retains direct-authoring provenance and reuses passing text.

`coffeedant-nl-review` is an isolated temporary Worker, with a Cloudflare-managed
custom domain/TLS binding for `nl.coffeedant.com`. It serves only this reviewed
page, a root redirect, bundled CSS/JS and referenced images, robots.txt
and an explicitly scoped preview manifest. Other pages return 404, not English
content posing as Dutch. Navigation to untranslated pages deliberately opens
the US source, explained by a Dutch notice. Analytics is removed, all responses
carry noindex/nofollow, and robots.txt disallows crawling. This is a language
review preview, not the full Dutch production edition. Germany and France
subdomains have not been connected or published yet.

Rebuild the review from the saved approved wording after the US build:

```sh
node scripts/localization/direct.mjs reuse nl
node scripts/localization/review.mjs nl /journal/espresso-dosing/
```

Do not overwrite a frozen snapshot for an existing translation without reviewing
and reindexing its authored entries; snapshot/hash mismatches are rejected.
Importing validates every slot, numeric fact, protected identifier and current
source-page hash before updating the cache. Missing text cannot silently become
English fallback. Only noindex reviews may select a subset of pages; the full
production build still refuses incomplete translation coverage.

Remaining rollout: the user approved this first page; translate all remaining
NL pages, Finder descriptions, home/supporting pages and stable localized routes;
then complete DE and FR the same way. Preserve source evidence and verify any
regional changes separately. Dollar prices and Fahrenheit temperatures on this
review remain explicitly identified source-market data, not Dutch offers.
Regional retailer/affiliate records and factual adaptation still need verification.
Prepare and test each complete Pages edition before making it indexable. At NL
production cutover, replace the temporary Workers custom-domain binding with the
Pages project association/DNS; do not modify the US apex or www. Keep this review
URL as the permanent translated route. Existing automatic content translation
continues separately under its provider's quota; direct authoring is not an
unlimited unattended background service.

### Approved ongoing direct backfill (2026-10-13)

The user approved the Dutch sample and explicitly authorized continuing the
complete NL, DE and FR translations/deployments without per-page approvals.
The active hourly thread continuation is
`finish-coffeedant-dutch-german-french-rollout`, named
“Finish Coffeedant Dutch German French rollout”. It resumes substantive direct
translation batches in this chat and must stop repeating once all three complete
editions are actually published and verified. Local scheduled runs require the
computer on and the desktop app running and use the existing Codex allowance;
they do not bypass account limits. No paid API billing was enabled. This initial
backfill continuation is separate from the existing GitHub source-change jobs.
Those API jobs now maintain published regional editions by default and do not
consume translation quota on this direct initial backfill. Explicit manual
dispatch for a selected edition remains available. New regional source changes
are queued automatically once an edition is actually published; incomplete
updates retain the last passing full deployment.

The saved shell/foundation batches cover all three homepages' editorial text,
the brands, grinder, coffee-bean and coffee-machine hubs, contact/about pages,
404 and faithful translations of existing privacy/terms text. Policy translation
is not a legal-compliance certification or a newly invented regional policy.
Most article bodies remain untranslated; the complete Finder is now translated
as recorded below. Do not interpret the
foundation batch as a completed language edition or enable any published flag.

For efficient ongoing batches:

```sh
node scripts/localization/direct.mjs reuse nl
node scripts/localization/coverage.mjs
node scripts/localization/direct.mjs batch-export nl-next UNIQUE-SOURCE-PATHS nl
node scripts/localization/direct.mjs batch-export nl-finder-next "@finder" nl
node scripts/localization/direct.mjs import localization/authored/AUTHORED-BATCH.json
```

Use fresh snapshot names and comma-separated canonical paths in place of the
example identifiers. `@finder` explicitly includes every current catalog item's
description, best-for label and image alternative. Only author genuine
translations; `reuse` copies exact, unambiguous already-approved wording across
DOM/JSON/attribute kinds, not English fallback. Grouped files contain explicitly
authored translations for each named edition and validate every edition before
writing any cache. `scope: "segments"` permits passing partial batches without
claiming complete-page coverage. Routes never silently rename existing registry
entries. `coverage.mjs` validates cache facts/source/policy and reports page
readiness, including runtime-interface and Finder dependencies, before rollout.

Inline policy paragraphs are translated as complete constrained-markup units,
not isolated words such as “not”; original tags and link destinations must match
exactly. Mobile `data-label` text and interactive brand-count singular/plural
labels are included. Structured data includes FAQ answers, review bodies, article
sections and keyword arrays. Executable code and filter identifiers stay fixed.
Source-snapshot hashes are immutable; schema/source changes require a new batch,
while valid exact wording may be reused. Full production remains completeness-gated.

The next saved full guide is `/journal/golden-ratio-espresso/`, with stable routes
`/journal/espresso-verhouding-1-2/` (NL),
`/journal/espresso-verhaeltnis-1-2/` (DE), and
`/journal/ratio-expresso-1-2/` (FR). The complete source, including all ten
practical checks and structured FAQ answers, is directly translated in all three
editions; it is not a public release of an incomplete edition.

For recurring editorial sentences, `compose-direct.mjs` mechanically assembles
explicitly authored sentence chunks. Each assembled English source must exactly
match its frozen paragraph, and every target language must supply every chunk.
The output contains complete ordinary translation strings; it makes no model
call, infers no new wording, and never copies English as fallback. Keep both the
authored parts and generated full-paragraph JSON for an auditable trail:

```sh
node scripts/localization/compose-direct.mjs localization/authored/ratio-checks-batch-2.parts.json localization/authored/ratio-checks-batch-2.json
```

The third direct batch translates all descriptions, best-for labels and image
alternatives for the first 30 catalog products plus the four Philips products:
34 complete records in NL/DE/FR. `finder-products-batch-3.items.source.json`
retains their actual source identities for tests, including historical US-market
references. Unknown regional offers still yield no US prices or Amazon buying
links; these translations do not approve retailer listings or model equivalence.

Bosch and Philips brand pages also have complete current own-page text in all
three caches. Their shared Finder runtime still depends on the remaining
catalog: own-page text completeness is not functional page readiness. Continue
the missing Finder records (111 products / 332 unique fields at this snapshot)
in fresh batches so the homepages and manufacturer Finders can be built without
English data fallback. The full-edition publish gates and all unpublished flags
remain unchanged. Quote `"@finder"` in PowerShell to avoid splatting it as a variable.

The fourth direct batch completes another 30 actual catalog records in NL/DE/FR:
the remaining De'Longhi models, all seven ECM models, four Flair models and the
first seven Gaggia models. Each record has its entire distinct description,
best-for label and image alternative. `finder-products-batch-4.items.source.json`
freezes the real identities; `finder-batch-4.source.json` retains the immutable
missing-field index. Historical condition/US availability qualifications remain
in the copy, without asserting current regional availability or offers.

ECM and De'Longhi own-page text, metadata and accessible labels are also complete
in all three languages, with stable `/ecm/` and `/de-longhi/` routes. Source brand
and model names alone have explicit verbatim approvals. All six own-page DOM and
structured-data passes preserve link destinations; scoped builds still correctly
reject their incomplete shared Finder dependency. The catalog now has 64 complete
records, with 81 products / 242 unique fields remaining per language. There are
16 own-text-complete content pages in NL and 15 each in DE/FR, but only 11 and 10
respectively are renderable without that remaining catalog dependency. The 404
is excluded from these content-page totals. Full editions remain unpublished;
28 localization tests and analytics/consent validation pass. Continue the next
missing Finder records with a fresh snapshot rather than rewriting either batch.

The fifth direct batch increases the catalog to 104 complete records in all
three languages, adding 40 products: the remaining Gaggia models, all JURA and
Krups models, both La Marzocco models, four La Pavoni models, all Lelit models
and Londinium R24. All three fields are authored in full, including source-market
prices, condition caveats and exact variant identifiers. There are now 41 products
/ 122 unique Finder fields left per language; unknown local offers remain hidden.

Gaggia, Jura, Krups and Lelit own-page text, accessible labels, metadata and
structured data are complete in NL/DE/FR, with stable brand-root routes. Twelve
DOM/JSON checks preserve source link destinations; scoped full builds still
reject the unfinished shared Finder. Concurrent US SEO improvements initially increased
the source to 43,221 unique slots without changing the then-210-page count.
Exact direct wording was reused for 133 new NL source-kind entries and 132 each
in DE/FR. Eight new shared metadata/image-description slots were authored against
`seo-refresh-batch-5.source.json`, preserving image attribution and copyright
qualifications. Thus previously completed page text remains complete after the
SEO changes; old source snapshots were not overwritten or artificially exempted.

Current content-page own-text completeness is NL 20, DE 19, FR 19; renderable
content-page totals remain NL 11, DE 10, FR 10 until their Finder dependencies
are complete. The 404 is excluded from these totals. All editions remain
unpublished, and 33 localization tests plus sitewide analytics validation pass.
Continue the final Finder records, then full article bodies and their newly
indexed metadata/media descriptions. Batch size is not capped at one or two
pages: combine substantive comparable work into one validated PR to reduce
repeated source scans and CI overhead without weakening completeness checks.

Before merging, the batch was rebased onto the newly published US Deals page.
The current source is now 211 canonical pages / 43,703 unique slots. Its new
navigation/footer labels, including the constrained inline policy-navigation
anchor, are directly translated in all three editions; the original href and
markup are retained. The Deals body and runtime are queued, not falsely marked
translated. Its US-only offer cards/prices and ItemList purchase URLs must be
suppressed on regional editions until verified local commerce exists, and its
new executable result-count labels need localization. Do not treat removing
the sponsored anchors alone as sufficient regional offer isolation.

### Complete direct Finder milestone (2026-10-14)

Batch six completes the final 41 actual catalog records / 122 unique fields in
NL/DE/FR. All 145 products now have distinct complete translated descriptions,
best-for labels and image alternatives: 434 unique catalog fields, with zero
current Finder translation gaps. Source model/variant identifiers are retained
verbatim rather than inventing regional equivalence. Unknown prices and Amazon
links remain suppressed; translating the catalog does not approve local offers.

The refreshed coffee-bean hub is also complete, including the new Big Trouble,
Forty-Six, French Roast and Major Dickason's qualifications and historical US
prices. Concurrent US publishing increased the current source to 216 canonical
pages / 44,388 unique slots. Old snapshots remain immutable and full article
translation still has a substantial queue.

Resolving the shared Finder dependency makes all 20 own-text-complete NL content
pages and all 19 DE/FR pages renderable as scoped noindex previews; counts exclude
the 404. The checked local outputs contain 21/20/20 pages including their 404s,
with current metadata/JSON, stable routes, correct locale/canonical, matching
scoped sitemaps and noindex robots. These are not full published editions.

Browser checks cover search/reset, localized prices/ratings, absence of
unverified Amazon links and responsive navigation. The new Deals navigation
made German overflow at a narrow desktop width; the shared CSS/runtime menu
breakpoint is now 1320px, with desktop/mobile fit and Escape behavior checked.
The homepage's CSS-only English promotional badge now uses a translated
`data-label` attribute while preserving the original US wording. A narrow
validator correction treats the hyphen in `E61-style` as adjective punctuation,
not part of the model, while exact model codes, URLs, placeholders, numbers and
markup remain guarded by positive/negative tests. All 38 localization tests and
analytics/consent validation pass. No full edition or DNS binding was published.

Next priority: complete the remaining full articles, manufacturer pages and new
Deals text/runtime, using current coverage and reusable direct wording. Keep
the approved Dutch espresso-dosing route stable and preserve the US site.

## Missing configuration

The GitHub Actions secret inventory currently contains only:

```
AMAZON_CREATORS_CREDENTIAL_ID
AMAZON_CREATORS_CREDENTIAL_SECRET
AMAZON_CREATORS_CREDENTIAL_VERSION
```

No additional translation secret is required for the default Cloudflare
provider. `localization/provider.json` selects the existing account's Workers AI
service and fixed `@cf/meta/llama-3.3-70b-instruct-fp8-fast` model. The GitHub job
requests a short-lived identity token using `id-token: write`. The broker checks
GitHub's published signing keys and allows only this main-branch localization
workflow; forks, pull-request jobs, other workflows and forged/expired tokens
are rejected. Health and unauthenticated-denial checks passed on the live broker.

The default request ceiling is 40 batches per run. This is a conservative usage
guard, not a promise that the large initial backfill finishes in one run.
Cloudflare's existing AI quota/billing applies; no account plan was upgraded.
The first live runs verified authentication and saved localized routes, then
exhausted the account's 10,000-neuron free daily allocation. Quota exhaustion is
now a clean pause, not a repeated retry/failure: snapshots are retained and the
next daily run resumes after the 00:00 UTC reset. A default 8,000-neuron per-run
usage guard supplements the request ceiling; `LOCALIZATION_MAX_NEURONS` can
configure that guard. No code changes an account plan or enables paid billing.
For a fast whole-site backfill, separately approve a paid translation allowance
or supply an alternative provider credential; neither is assumed authorized.
Raise `LOCALIZATION_MAX_REQUESTS` as a repository variable or manual workflow
input after reviewing usage. Bounded runs preserve successful batches and resume.

OpenAI remains an optional alternative. To choose it, set repository variable
`LOCALIZATION_PROVIDER=openai` and encrypted Actions secret `OPENAI_API_KEY`.
That optional key is currently missing, but does not block the default provider.
Its default model is `gpt-4.1-mini-2025-04-14`; `LOCALIZATION_MODEL` can override it.
Never commit, print, or store any API key in a public repository variable.

No regional affiliate tags or regional API approvals have been configured or
verified. Amazon says existing Creators credentials can work globally, but a
valid target-market Partner Tag and regional API approval are still required.
Configure approved tags and verified products in `localization/markets.json`.
Tags are public attribution IDs, not API secrets. Approval is never inferred
from the presence of a tag.

Portugal, Austria, Switzerland and New Zealand need delivery-verified retailer
or cross-border marketplace profiles; none have been configured. Latin America
needs priority country profiles. The initial foundation does not claim local
model availability, customs/import charges, warranties or region-specific legal
compliance. Jurisdiction-specific policy changes need a separate review.

## Commands

```sh
CF_PAGES=1 npm run build
npm run localization:source
npm run localization:status
npm run localization:translate -- --edition br
COFFEEDANT_EDITION=br npm run build:region -- --preview
npm run localization:refresh-offers
npm run test:localization
```

These examples use POSIX environment syntax; in PowerShell set the corresponding
`$env:` variable before running the command. No secrets are command-line arguments.
The existing local Amazon CSV can be passed with `--credentials <path>` to the
offer refresher or the one-item `scripts/localization/probe-amazon.mjs` diagnostic.
The CSV values stay in process memory and are not written into public artifacts.

## Market record

Example shape only; the placeholders below are not approved products:

```json
{
  "marketplace": "www.amazon.de",
  "partnerTag": "YOUR_APPROVED_GERMAN_TAG",
  "apiAccessVerified": false,
  "products": {
    "/original-us-review-path/": {
      "asin": "REAL_ASIN",
      "productName": "Exact regional model",
      "sourceUrl": "https://www.amazon.de/dp/REAL_ASIN",
      "identityVerified": false,
      "regionalSpecificationVerified": false,
      "deliveryVerified": false,
      "purchaseNote": "Explain any verified regional differences here."
    }
  }
}
```

Only verified records are fetched. Only fresh (24-hour), correctly matched
regional offers are displayed. The finder removes US availability and buying
links on non-US editions. Historical editorial US prices remain source facts
with an explicit source-market notice; they are never relabelled as local prices.
Regional budget filtering is deliberately disabled until genuine local price
bands are implemented and validated. Product-variant factual differences must
be supplied from evidence, not generated by the translation model.

## Initial release and ongoing operation

1. Merge the localization workflow so its main-branch identity can authenticate
   to the deployed Cloudflare broker; set an acceptable backfill request limit.
2. Translate representative pages, review regional language and verify buying
   profiles. Correct cache text directly for editorial overrides; source/policy
   hashes preserve unchanged corrections on subsequent runs.
3. Complete the selected edition's coverage. Set its `published` flag only after
   translation, regional buying context and policy QA. The flag is a rollout
   approval, not a declaration that DNS is already live.
4. Enable automatic production deployment on `coffeedant-regional` once at least
   one edition passes `npm run build:regions`. Associate each approved custom
   domain with the project, then configure its DNS and verify TLS. Do not point
   every language host at the unmodified US build.
5. `confirm-releases.mjs` reads each approved host's public deployment manifest
   and checks homepage language/canonical/indexability. The scheduled workflow
   commits verified routes; shared builds add reciprocal hreflang links and the
   corresponding-article language selector. No extra Cloudflare token is needed
   in GitHub because Pages uses its existing Git integration.
6. Source pushes enqueue new/changed text. Passing batches are committed even
   when another batch fails. Daily runs resume the bounded queue. Changed source
   or glossary rules invalidate affected text; registered slugs remain stable.
   Incomplete builds fail before replacing a live deployment, retaining the
   last known good edition. Source deletions cease emitting translated pages.
7. Six-hour Amazon jobs refresh approved regional offers as well as US offers.
   Git commits have no CI-skip marker. Rebase protects concurrent source updates;
   unresolved conflicts fail rather than overwriting an author's changes.

Translation batches containing any altered numeric fact, protected identifier,
placeholder, missing result or invalid route are rejected. Reports identify
pending work and failed batches without logging credentials. Test fixtures are
synthetic and are not claimed to be real published translations.

## Official implementation references

- [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses)
- [OpenAI model API support](https://developers.openai.com/api/docs/models/gpt-4.1-mini)
- [Cloudflare Pages advanced mode](https://developers.cloudflare.com/pages/functions/advanced-mode/)
- [Cloudflare AI JSON mode](https://developers.cloudflare.com/workers-ai/features/json-mode/)
- [GitHub OIDC trust claims](https://docs.github.com/en/actions/reference/security/oidc)
- [Cloudflare repository project limit](https://developers.cloudflare.com/pages/configuration/monorepos/)
- [Amazon Creators cross-marketplace credentials](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/get-started/using-curl)
