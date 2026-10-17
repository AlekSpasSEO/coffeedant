# Coffeedant regional publishing

## API-free work authorized October 17, 2026

All Amazon API activity is paused until the user explicitly authorizes resumption.
Do not read or use its credentials, obtain tokens, test eligibility, refresh
prices/offers, discover deals, update API recommendations, run regional probes,
or enable/dispatch disabled Amazon workflows. Older API examples below are not
current authorization. Continue editorial/localization work, API-free builds
and validators, and ordinary affiliate links with the existing no-price treatment.

## Incremental public launch authorized October 16, 2026

The user explicitly approved publishing the completed NL, DE and FR pages now,
then adding pages as translation finishes. This supersedes the older whole-edition
launch requirement below. These three editions use `publicationMode: "ready-pages"`
and `published: true`; other editions retain their existing release gates.

Every regional build selects only pages whose current visible text, metadata,
structured data, shared interface and required Finder text pass translation
validation. A translated homepage and 404 are required. Partial articles never
fall back to English on a regional URL. Links to unfinished articles open their
English source, with an explanation in the local language. Sitemaps, localized
redirects and manifests contain only emitted pages. Stable translated URLs,
including the approved Dutch espresso-dosing route, are preserved.

The `coffeedant-regional` Pages project builds all three editions atomically using
`npm run build:regions` on main-branch changes. Each completed translation batch
automatically adds its newly ready pages on the next deployment. Cross-language
links within the bundle use only that deployment's actual routes. The independent
`Confirm published regional pages` workflow checks live manifests after successful
site CI and hourly, then updates the English site's corresponding-page language
selector. Existing regional commerce verification and source-market notices apply.

Continue the substantive direct translation backfill after launch. Do not disable
published editions or restore a whole-edition gate just because article bodies
remain pending; report the published-page count separately from total coverage.

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

### Complete manufacturer-page batch (2026-10-14)

Batch seven directly translates the remaining eleven manufacturer pages in all
three languages: Ascaso, Bezzera, Breville, La Marzocco, La Pavoni, Nespresso,
Ninja, Profitec, Quick Mill, Rancilio and Rocket Espresso. The frozen snapshot
contains 313 missing DOM, accessibility, metadata and structured-data slots.
Every source slot is covered; only 49 exact product names have explicit verbatim
approval. The full brand stories, ownership caveats, range explanations and
review-index headline are translated, not shortened. Source-market Breville
names and the US Ninja Premier ES601 qualification are preserved; no regional
model equivalence or local offer has been inferred. Existing root brand routes
are retained consistently in NL/DE/FR.

All nineteen current manufacturer pages now have complete own-page text and
the complete translated Finder dependency. Current content-page completeness
and renderability are NL 31, DE 30 and FR 30, excluding the 404. The current
source remains 216 canonical pages, with 44,386 unique slots after the latest
US offer refresh. Full editions remain incomplete and unpublished. This batch
does not alter the reviewed Dutch dosing URL, public DNS or the US site.

Forty localization tests and sitewide analytics/consent validation pass. Scoped
noindex builds and actual HTML/JSON checks cover all thirty-three newly completed
manufacturer pages, including complete story paragraphs, localized model-index
headlines, retained review destinations, locale/canonical/robots, runtime locale,
disabled unverified budget filtering and absence of unverified Amazon links.
The complete 145-product regional catalogs still suppress unknown local prices
and buying links. These checks are rendered-output checks, not a new claim of
browser or physical product testing.

### Full coffee-bean reviews and structured metadata (2026-10-14)

Batch eight directly translates the complete Counter Culture Hologram and Big
Trouble reviews into NL/DE/FR. The complete article bodies contain respectively
1,556 and 1,461 source words, including methodology, evidence limitations,
source notes, final verdicts and all twelve FAQ answers per language. No section
is replaced by a summary. The immutable bean snapshot contains 226 missing slots;
eight explicit verbatim approvals cover named coffees/roaster and numeric pack
notation only. New stable review routes use `/koffiebonen/`, `/kaffeebohnen/` and
`/cafe-en-grains/` with the unchanged coffee identifiers.

The translations preserve changing-blend uncertainty, other people's attributed
tastings, the statements that Coffeedant did not taste or test either coffee,
and the absence of a sensory rating. Historical US prices, original pack sizes,
dates, consumption calculations and all cited destinations remain source facts,
not converted regional offers. Local buying/availability remains unverified.

Rendering exposed previously unindexed structured author roles, genres, product
categories and attribution prose. `jsonSlots` now includes `jobTitle`, `genre`,
`category`, `creditText` and `copyrightNotice`, but never translates schema types,
product identifiers, license URLs or machine-readable dates. A separate immutable
five-slot metadata snapshot supplies the newly required wording for the complete
pages, including roaster-photo limitations and the editorial role. The wider
index also honestly exposes pending metadata on unfinished pages; no old snapshot
was rewritten and no new field was exempted from completion checks.

The current source has 216 canonical pages and 44,663 indexed unique slots.
Content-page completeness and renderability are NL 33, DE 32 and FR 32, excluding
the 404. Pending slots are 41,368 / 41,479 / 41,479 respectively; Finder gaps
remain zero. Forty-three localization tests and analytics/consent validation pass.
Actual scoped noindex builds contain 34/33/33 pages including the 404. Six full
bean-review HTML/JSON checks verify the entire authored article text, all FAQs,
source links, product IDs, localized structured roles/genres/categories/credits,
source prices, locale/canonical/robots, dates and matching scoped sitemaps. These
are generated-output checks, not new browser or physical product-test claims.

The concurrent main-branch GA4 delivery/consent hardening is preserved through a
normal Git merge. The current-source build, all localization tests, scoped review
outputs and expanded analytics validation pass again after that sync, including
cross-tab consent changes, bounded loader retry and duplicate prevention.

### Complete freshness and kopi luwak articles (2026-10-14)

Batch nine directly translates the entire `/journal/freshness-clock/` and
`/journal/kopi-luwak/` readers plus the new Fellow manufacturer page in NL/DE/FR.
The full source readers contain 1,720 and 1,728 words including their controls,
captions, diagrams, comparison tables, source notes and FAQs. All chapters and
six FAQ answers per language are included, not abridged. A frozen 303-slot batch
covers complete current missing text; fifteen unique verbatim approvals are
proper names, creator credits, chemical formulae, the Zeitgeist section name and
exact license labels. Study dates/counts and limits, animal-welfare distinctions,
absence of Coffeedant experimentation, photographic versus illustrated evidence
and original reference/media destinations remain intact.

Freshness routes are `/journal/koffieversheid/`, `/journal/kaffeefrische/` and
`/journal/fraicheur-du-cafe/`; kopi luwak and Fellow retain their brand/topic routes.
The reviewed Dutch espresso-dosing URL is unchanged. The regional date formatter
now retains complete translated Published/Updated labels inside time elements
instead of erasing their meaning. Bare dates still use local formatting, with
both cases covered by a generated-preview regression test.

Concurrent US publishing added eight canonical pages, a twentieth manufacturer
and a 146th Finder product. Four new shared Fellow navigation/model labels made
all previous page coverage incomplete until translated; the gates correctly
reported that regression. A separate immutable 44-slot source-refresh batch
updates the navigation, brand count, five new coffee-bean hub cards/attributions,
and all three fields for the actual US black Fellow Espresso Series 1 record.
The current catalog has 146 distinct translated descriptions and zero Finder
gaps. Its source model, manufacturer-qualified claims and historical US price
are preserved; this does not approve a regional variant or local offer. All
twenty manufacturer pages and previously finished pages are current again.

The current source has 224 canonical pages / 45,674 unique slots. Ready regular
content pages are NL 36, DE 35 and FR 35, excluding the 404; pending slots are
42,008 / 42,119 / 42,119. Forty-seven localization tests and analytics validation
pass. Scoped noindex builds contain 37/36/36 pages including the 404. Nine actual
HTML/JSON checks cover the complete readers and Fellow story, all FAQ answers,
chapter IDs, timeline steps, video labels/URLs, full publication labels, exact
executable scripts, canonical/locale/robots, 146-product commerce suppression and
matching scoped sitemaps. These are generated-output and runtime-integration
checks, not a new browser session or physical product tests.

### Complete decaf and fermentation readers (2026-10-14)

Batch ten directly translates the complete `/journal/decaf-renaissance/` and
`/journal/fermentation-frontier/` readers in all three editions. Their full source
readers contain 1,827 and 1,849 words, including all six chapters, original
diagrams/tables, photography/video labels and credits, source notes, takeaways
and six FAQ answers per language. Every one of the 255 frozen missing slots is
covered. Sixteen explicit verbatim approvals are creator names, license labels,
measurement notation, US regulation identifiers and credited organizations;
no article body is exempted or shortened.

Decaf routes are `/journal/cafeinevrije-koffie/`,
`/journal/entkoffeinierter-kaffee/` and `/journal/cafe-decafeine/`. Fermentation
routes are `/journal/koffiefermentatie/`, `/journal/kaffeefermentation/` and
`/journal/fermentation-du-cafe/`. All earlier URLs stay stable.

The decaf translation retains residual-caffeine ranges, the US-only scope of
the cited rules and the distinction between company volume/revenue and worldwide
demand. It does not certify regional law, health outcomes or a tasting.
Fermentation retains the differences between oxygen conditions, inoculation and
added ingredients, the interview-based Colombian estimate, study samples and
draft rather than binding guidance. The literal source number `620,000` is kept
and accompanied by its written-out amount to avoid interpreting its English
thousands separator as a local decimal comma. No new quantity is invented.

The source remains 224 canonical pages / 45,674 unique slots. Complete current
regular content pages are NL 38, DE 37 and FR 37, excluding the 404; remaining
slots are 41,753 / 41,864 / 41,864. Finder gaps remain zero for all 146 products.
Forty-nine localization tests and current analytics validation pass. Actual
scoped noindex builds contain 39/38/38 pages including the 404. Six full-reader
HTML/JSON passes compare entire authored text, all FAQs, diagrams/tables, chapter
destinations, video labels/URLs/creators, publication labels, exact executable
scripts, runtime locale/interface, canonical/robots and matching scoped sitemaps.
These are generated-output and runtime-integration checks, not a browser session.

All full editions are still incomplete and unpublished. No DNS cutover, local
commerce approval, paid translation API, billing upgrade or subagent is used.
Next: more complete articles, remaining editorial/category pages and Deals
text/runtime. Preserve the US site and approved Dutch dosing URL; publish only
after the entire current edition and all routes pass, then verify its live host.

### Complete robusta and brewing-water readers (2026-10-14)

Batch eleven directly translates the full `/journal/robusta-reconsidered/` and
`/journal/water-hidden-ingredient/` readers into NL/DE/FR. Their source readers
contain 1,829 and 1,566 words, including all chapters, diagrams, comparison
tables, captions, media/creator metadata, source notes and six FAQ answers per
language. All 259 frozen missing slots are covered with 223 distinct authored
source strings. Fifteen verbatim approvals are exact creator/organization names,
the named section label, conventional measurement/chemical notation and license
labels; no article body is exempted or abridged. Passing prior wording is reused.

New stable routes are `/journal/robusta-opnieuw-bekeken/` and
`/journal/water-voor-koffie/` (NL), `/journal/robusta-neu-betrachtet/` and
`/journal/wasser-fuer-kaffee/` (DE), and `/journal/robusta-reconsidere/` and
`/journal/eau-pour-le-cafe/` (FR). The reviewed Dutch dosing URL is unchanged.

Robusta retains the distinction between research candidates and released
varieties, historical production shares and export rather than premium-market
volume. It attributes the climate review's critique, preserves water/management
dependencies and explicitly states that Coffeedant conducted no tasting. The
literal source quantities `1,000` and `1,500` have written-out equivalents to
avoid local decimal-comma ambiguity; export decimals retain the source notation.
The water article separates hardness, alkalinity, conductivity and pH; the
La Marzocco figures remain a manufacturer-specific example, not universal safe
limits. Distilled/reverse-osmosis water, filter differences, equipment requirements
and the qualitative rather than calibrated diagram caveats remain intact.

A separate immutable snapshot records a one-slot French runtime grammar repair
for the four water-control combinations. Both original placeholders remain exact;
existing passing Dutch and German runtime wording is unchanged. Complete rendered
article text, all FAQ schema answers, chapter destinations, translated video
labels/original destinations and creators, publication labels, executable scripts,
control values, locale/canonical/noindex and scoped sitemaps pass six HTML/JSON
checks. Four water-result combinations per edition also pass integration checks.
These are generated-output/runtime-integration checks, not a new browser session
or Coffeedant experiment.

The refreshed source contains 224 canonical pages / 45,678 unique slots. Complete
regular content pages are NL 40, DE 39 and FR 39, excluding the 404; remaining
slots are 41,497 / 41,608 / 41,608. All 146 distinct Finder descriptions remain
translated with zero catalog gaps; unverified prices and Amazon links stay hidden.
Fifty-two localization tests and current analytics validation pass. Scoped
noindex builds contain 41/40/40 pages including the 404. All full editions remain
incomplete and unpublished; no DNS changes, paid API calls or billing changes
are made by this batch.

### Complete Americano reader and Journal library (2026-10-14)

Batch twelve directly translates the complete `/journal/dark-roast-americano/`
reader and `/journal/` library into NL/DE/FR. The readable source contains 1,754
article words and 682 library words, excluding embedded structured-data scripts.
All six article chapters, diagrams, troubleshooting table, captions, sources,
three visible/structured FAQ answers and original animation transcript are
included. The library includes all seventeen cards, image alternatives, reading
times, search text, filter labels, credits, colophon and CollectionPage/ItemList
metadata. Translating a library card does not complete its destination's body.

The immutable main snapshot contains 238 missing slots / 205 distinct authored
source strings. Eight verbatim approvals cover exact named credits/section labels
and conventional units/measurement notation, not article body text. A separate
three-slot snapshot aligns the German/French dosing-card title and introduction;
the approved Dutch wording is reused unchanged. This alignment does not declare
the German/French dosing guide complete. All earlier snapshots stay immutable.

Stable new Americano routes are `/journal/americano-donkere-branding/`,
`/journal/americano-dunkle-roestung/` and
`/journal/americano-torrefaction-foncee/`. The library stays at `/journal/` in
each edition. The approved Dutch `/journal/espresso-doseren/` URL is unchanged.
Links to unfinished articles remain explicitly on the US source; no partial
English article is presented under a regional route.

Suggested recipe masses, machine/basket limitations, timing convention,
temperature suggestions and the distinction between extraction and dilution
are retained. Photography and the silent animation remain illustrative, not
Coffeedant measured-extraction evidence. The library retains the original
source-check date and AI-assisted-cover/attribution/methodology qualifications.

Rendering exposed a previously unindexed VideoObject `transcript` field.
`jsonSlots` now includes that prose field without translating schema identifiers,
video URLs, duration or upload dates. Its existing complete visible wording is
reused into the new structured slot; 76 exact already-authored source-kind entries
per edition are reused without inference or fallback. Regression tests verify
structured transcripts and exact media fields. The US content is unchanged.

Fifty-seven localization tests and current analytics/consent validation pass.
Six actual scoped HTML/JSON checks cover the entire readable article and library,
all FAQs, both video records and their creators/destinations/transcript, all
seventeen cards and localized search attributes, exact filter identifiers,
structured library entries, chapter/timeline controls, publication labels,
executable scripts, locale/canonical/noindex, safe links and scoped sitemaps.
All 45 calculator settings per edition retain the same arithmetic and translated
recipe/result templates. These are generated-output/runtime-integration checks,
not a new browser session or physical product tests.

The current source contains 224 canonical pages / 45,678 unique slots. Ready
regular content pages are NL 42, DE 41 and FR 41, excluding the 404; pending
slots are 41,156 / 41,262 / 41,262. Scoped noindex builds contain 43/42/42 pages
including the 404. All 146 distinct Finder descriptions remain translated with
zero gaps, and unknown local prices/Amazon links remain suppressed. Full
editions are still incomplete and unpublished. No DNS cutover, paid translation
API, billing change or subagent is used.

The concurrent main-branch US Amazon-offer refresh is preserved through a normal
Git merge. The full source build, all 57 localization tests, analytics validation
and the six scoped checks pass again on the combined source; saved coverage
reflects that latest source rather than the earlier offer snapshot.

### Complete coffeehouse and colonial-history readers (2026-10-15)

Batch thirteen directly translates the complete `/journal/coffee-colonial-world/`
and `/journal/coffeehouse-public-life/` readers into NL/DE/FR. The full source
readers contain 2,084 and 1,918 words, including all six chapters per article,
diagrams, comparison tables, photo/video captions and credits, evidence notes,
takeaways and all four original visible/structured FAQ answers per language.
Each source article has two FAQs; no extra question is invented for a test.

The immutable snapshot contains 258 missing slots / 234 distinct source strings.
Eighteen explicit verbatim approvals cover exact variety/place names, named
publications and organizations, a creator/book credit and a formal license label.
Anonymous-creator labels, restoration/resize prose and historical-image caveats
are translated. No article body is exempted or abridged. Existing passing wording
is retained, and a source-kind reuse scan finds no additional missing matches.

Stable new routes are `/journal/koffie-koloniale-wereld/` and
`/journal/koffiehuis-openbaar-leven/` (NL), `/journal/kaffee-koloniale-welt/` and
`/journal/kaffeehaus-oeffentliches-leben/` (DE), and
`/journal/cafe-monde-colonial/` and `/journal/cafes-vie-publique/` (FR).
All earlier routes, including the approved Dutch dosing URL, stay unchanged.

The colonial article keeps botanical transfer separate from commercial expansion,
dates the Java/Priangan household figures to their source context, distinguishes
forced cultivation from Caribbean slavery and identifies a planter's manual as
a situated primary source. The 1906–07 photograph does not establish individuals'
legal status. The coffeehouse article preserves Rosée's uncertain background,
the limits of egalitarian/public-sphere claims, the attempted rather than universal
1675 suppression, and the precisely scoped 1771 founders inquiry. The 1922 map
remains a retrospective reconstruction of pre-1748 locations, not a contemporary
survey. Video legend, source attributions and original reference destinations
remain intact; no local reporting or hands-on research is invented.

Fifty-nine localization tests and current analytics validation pass. Six actual
scoped HTML/JSON checks compare entire readable articles, all four FAQ answers
per edition, chapter destinations, diagrams/tables, video names/descriptions and
creator URLs, full publication labels, executable scripts, locale/canonical/
noindex, safely rewritten links and matching scoped sitemaps. These are
generated-output/runtime-integration checks, not a new browser session.

The source contains 224 canonical pages / 45,661 unique slots. Ready regular
content pages are NL 44, DE 43 and FR 43, excluding the 404; remaining slots are
40,881 / 40,987 / 40,987. Scoped noindex builds contain 45/44/44 pages including
the 404. All 146 distinct Finder descriptions remain translated with zero gaps;
unknown local prices and Amazon links remain hidden. Full editions remain
incomplete and unpublished, with no DNS cutover, paid translation API, billing
change or subagent used.

Concurrent main-branch consent/navigation behavior and US offer changes are
preserved through a normal merge. The full current-source build, all 59 tests,
expanded analytics validation and six complete scoped checks pass again on that
combined source. Counts reflect the refreshed offer snapshot; removed offer-only
source strings are not counted as newly translated prose.

### Complete Istanbul reader and current-source maintenance (2026-10-15)

Batch fourteen directly translates the full `/journal/istanbul-coffeehouses/`
reader into NL/DE/FR: 1,970 readable source words, all six chapters, the trade
network diagram and period controls, comparison table, sources, image/video
captions and creator metadata, and both visible/structured FAQ answers. The
immutable snapshot contains 138 slots / 126 distinct source strings. Eight
verbatim approvals are proper names, a conventional calendar abbreviation, the
Latin species name and the named drink; no article body is exempted or abridged.

Stable routes are `/journal/koffiehuizen-istanbul/`,
`/journal/kaffeehaeuser-istanbul/` and `/journal/cafes-istanbul/`. All earlier
routes, especially the approved Dutch `/journal/espresso-doseren/`, are unchanged.
This completes all ten editorial Journal readers in all three languages, not
the remaining practical guides, product reviews or entire editions.

The translation retains competing opening dates, the distinction between the
first documented Istanbul establishments and an empire-wide first, and the
difference between opening under a sultan and being founded by him. Later
Mocha trade, intensive Yemeni cultivation, modern Turkish preparation and later
paintings are not presented as exact evidence of a 1554 recipe or shipment.
Uncertain seeds, roast and proportions remain uncertain; no local reporting,
authenticated reconstruction or Coffeedant tasting is invented.

Concurrent US publishing is preserved through normal fast-forward merges. A
separate 47-slot snapshot translates the new shared consent dialog, all changed
privacy-policy text, and five decaf cards plus their image descriptions and
buying-guide teaser. Exact HTML and destinations are retained in inline policy
units. Country uncertainty, opt-out precedence, the 180-day choice period,
per-hostname scope and separate Cloudflare measurement are preserved; this is
a translation of the source policy, not a legal-compliance certification. Card
translation does not complete the five new reviews or their buying guide.

A two-slot snapshot adds the new Opus 2 shared model label and grinder-hub
description without asserting a regional variant. A five-slot snapshot restores
the complete Big Trouble review after its new source recipe guidance, preserving
the 25–35 second diagnostic window, taste/basket qualifications and distinction
from the 1:17 filter ratio. Passing previous cache wording is unchanged.

An inline-link validator bug treated the first English word after a closing
attribute quote as part of a URL. URL recognition now stops at HTML boundaries;
exact literal tags/hrefs, numeric facts, identifiers and placeholders remain
protected, with positive/negative regression tests. No translation guard is
bypassed to preserve an English policy label.

All 66 localization tests, four analytics-policy tests and current GA4 validation
pass. Nine complete generated HTML/JSON checks compare the Istanbul reader,
current policy/consent dialog and updated Big Trouble review in all three
editions. These verify all eight FAQ answers per language across the two
readers, diagram/period controls, exact executable scripts, runtime labels,
source/media destinations, canonical/language/noindex, safe internal links,
matching scoped sitemaps and all 146 distinct Finder descriptions with no
unverified local prices or Amazon links. They are generated-output/runtime
integration checks, not a new browser session or product experiment.

The current source has 231 canonical pages / 46,469 unique slots. Ready regular
content pages are NL 45, DE 44 and FR 44, excluding the 404; pending slots are
41,504 / 41,610 / 41,610. Scoped noindex builds contain 46/45/45 pages including
the 404. The new US pages remain honestly queued. Full editions remain incomplete
and unpublished; no DNS cutover, paid API call, billing change or subagent is
used. Continue the remaining complete guides/reviews and Deals safeguards before
full-edition deployment. The ongoing continuation remains active.

### Complete Intelligentsia decaf reviews and 147-product Finder (2026-10-15)

Batch fifteen directly translates the complete Intelligentsia Decaf Black Cat
Espresso and Organic Decaf House Blend reviews in NL/DE/FR. Their source bodies
contain 1,149 and 1,157 words, including all sections, evidence/methodology,
alternatives, source notes, final verdicts and twelve visible/structured FAQ
answers per language. The frozen batch contains 157 missing slots / 129 unique
source strings, also covering the updated twelve-review Breville index and
new shared model labels. Seven explicit verbatim approvals are exact coffee,
roaster and model names; no body paragraph is exempted or abridged.

The two coffee identifiers stay unchanged beneath `/koffiebonen/`,
`/kaffeebohnen/` and `/cafe-en-grains/`. Earlier routes, including the approved
Dutch dosing URL, remain stable. Black Cat's suggested 18 g to 45 g espresso
target stays separate from House's 1:18 filter starting ratio and illustrative
20 g / 360 g calculation. Neither is a Coffeedant extraction result. Classic's
origin details are not transferred to Decaf Black Cat; House's current Honduras
record is not guaranteed for future lots. Older external samples remain older,
attributed evidence rather than a current sensory score. The FDA range is
expressly general US context, not a caffeine assay of either coffee. Dated US
prices and pack calculations are not converted or represented as local offers.

The concurrent source adds a 147th Finder product: the actual US Breville
Oracle Dual Boiler BES995. A separate immutable three-field snapshot translates
its entire distinct description, best-for label and image alternative, retaining
the US scope, 5.7-inch display, 45 settings, model identity and source facts.
The frozen identity record preserves its source price and US search destination
for auditing, not regional offer approval. All 147 current descriptions are
distinct and complete in each edition; unknown regional prices and Amazon
links remain suppressed. Existing passing cache wording is unchanged.

Seventy localization tests and current analytics validation pass. Six complete
generated HTML/JSON checks compare both entire reviews in all three editions,
all twelve FAQ answers per language, exact product IDs, media/attribution and
source destinations, publication dates, genre/author/category metadata, US
price boundaries, exact executable scripts and runtime locale, canonicals,
noindex and matching scoped sitemaps. Full ready-page scoped builds pass with
48/47/47 pages including the 404. These are generated-output/runtime integration
checks, not a new browser session or Coffeedant product/tasting experiment.

The current source has 232 canonical pages / 46,736 unique slots. Ready regular
content pages are NL 47, DE 46 and FR 46, excluding the 404. Remaining slots are
41,606 / 41,712 / 41,712; all editions remain incomplete and unpublished. New US
review and seasonal-Deals changes are preserved and honestly queued. No DNS,
published flag, billing, paid translation API or subagent changes are made.
Continue the remaining complete articles and regional Deals safeguards before
full-edition deployment; the continuation remains active.

### Remaining decaf product reviews complete (2026-10-16)

Batch sixteen directly translates the complete Counter Culture Slow Motion
Decaf, Stumptown Trapper Creek Decaf and Equator Decaf Equator Blend reviews
into NL/DE/FR. Their source bodies contain 1,154, 1,133 and 1,155 words, including
all sections, evidence/methodology, source notes, alternatives, final verdicts
and eighteen visible/structured FAQ answers per language. The immutable snapshot
contains 164 missing slots / 131 distinct source strings. Eight verbatim
approvals are exact coffee/roaster names and the named Swiss Water Process;
no body paragraph is exempted or abridged. Previously passing wording is reused
and unchanged. All five new decaf product reviews are now complete in each
edition; their separate buying guide is still queued.

Identifiers stay unchanged under `/koffiebonen/`, `/kaffeebohnen/` and
`/cafe-en-grains/`, with no earlier route changes. The approved Dutch dosing URL
is preserved. Slow Motion's historical 50/50 component mixes are not assigned
to a future bag; Equator's current traceability claims are not permanent lot
guarantees. Swiss Water and Mountain Water remain distinct named processes.
The separate espresso/filter instructions retain basket/grinder constraints
and the exact source ratios, doses and qualifications. External sample reports
and owner anecdotes are not representative ratings, independent confirmation
where none exists, or Coffeedant tasting. The FDA range remains general US
context, not a product-specific caffeine assay. Historical US prices, pack
arithmetic and source-check dates are retained, not converted into local offers.

All 72 localization tests and current analytics validation pass. Nine complete
generated HTML/JSON checks compare all three full reviews in every edition,
all eighteen FAQ answers per language, identifiers, structured credits/roles/
categories, media and source destinations, original publication dates, explicit
US price boundaries, exact executable scripts, runtime locale, canonical/noindex
and scoped sitemaps. Ready-page builds contain 51/50/50 pages including the 404.
All 147 Finder descriptions remain distinct and translated, with unverified
regional prices and Amazon links suppressed. These are generated-output/runtime
integration checks, not a new browser session or physical tasting experiment.

The source remains 232 canonical pages / 46,736 unique slots. Ready regular
content pages are NL 50, DE 49 and FR 49, excluding the 404; remaining slots are
41,442 / 41,548 / 41,548. Full editions remain incomplete and unpublished.
No public hostname, published flag, paid API, billing or subagent changes are
made. Continue full remaining guides/reviews, the decaf buying guide and regional
Deals safeguards before production cutover; the continuation remains active.

### Complete decaf buying guide (2026-10-16)

Batch seventeen directly translates the complete
`/coffee-beans/best-decaf-coffee-beans-by-brew-method/` guide into NL/DE/FR.
Its source article contains 2,340 words, including all six explanatory sections,
both comparison tables, five complete product cards, methodology, source notes,
final recommendation and seven visible/structured FAQ answers. Header/author
disclosures, metadata, structured genre/ItemList, accessible table labels and
navigation are translated too. The immutable snapshot contains 191 missing
slots / 172 distinct source strings; five verbatim approvals are exact named
coffee/source links with their original arrow. No body is exempted or abridged,
and previously passing cache wording is unchanged.

Stable new routes are
`/koffiebonen/beste-cafeinevrije-koffiebonen-per-zetmethode/`,
`/kaffeebohnen/bester-entkoffeinierter-kaffee-nach-bruehmethode/` and
`/cafe-en-grains/meilleurs-decafeines-par-methode/`. Earlier routes, particularly
the approved Dutch dosing URL, remain unchanged. In scoped review builds the
guide and its structured five-item list link to the five complete translated
product reviews, not partial English regional pages. Unfinished related guides
remain explicitly on the US source.

US market/date/currency and original pack quantities remain explicit; no prices
are converted or relabelled as local offers. The suggested espresso/filter
recipes remain separate, with basket, grinder-retention and repeatable-setting
constraints. Process names are not evidence of zero caffeine, equal taste or
health superiority. The FDA range stays general context, not a product assay.
Older outside samples and owner reports are bounded evidence, not current taste
rankings. The reader exercise is not Coffeedant testing, and all no-tasting,
no-brewing, no-caffeine-measurement and no-sensory-ranking disclosures remain.

All 74 localization tests and current analytics validation pass. Three full
generated HTML/JSON checks compare the entire guide and header, both complete
tables, all seven FAQ answers per edition, metadata, exact scripts/runtime
locale, original source destinations, citation anchors, publication date,
structured guide/list names and five regional review destinations, canonical/
noindex and matching scoped sitemaps. Ready-page builds contain 52/51/51 pages
including the 404. All 147 Finder descriptions remain distinct and translated,
with unknown regional prices and Amazon links suppressed. These are generated-
output/runtime integration checks, not a new browser session or tasting.

The fresh source contains 232 canonical pages / 46,732 unique slots. Ready
regular content pages are NL 51, DE 50 and FR 50, excluding the 404; remaining
slots are 41,246 / 41,352 / 41,352. Four no-longer-indexed source slots are not
counted as new translation. Full editions remain incomplete and unpublished;
no public hostname, published flag, paid API, billing or subagent changes are
made. Continue the remaining full guides/reviews and regional Deals safeguards
before production cutover; the continuation remains active.

### Complete Forty-Six and Hair Bender reviews (2026-10-16)

Batch eighteen directly translates the full Counter Culture Forty-Six and
Stumptown Hair Bender reviews into NL/DE/FR. Their source article bodies contain
1,703 and 1,362 words respectively, including methodology, all buying guidance,
sources, final recommendations and six visible/structured FAQ answers each.
Headers, metadata, author disclosures, image attribution, accessible labels and
navigation are translated too. The frozen snapshot contains 192 missing slots /
158 distinct strings; four verbatim approvals are exact coffee names, not body
exemptions. Import adds 193 current cache entries per edition across slot kinds,
with no changes to previously passing cached wording.

Stable routes retain each product identifier under `/koffiebonen/`,
`/kaffeebohnen/` and `/cafe-en-grains/`. Existing routes, including the approved
Dutch dosing URL, are unchanged. Changing blends are not presented as fixed
farms or current percentages. Forty-Six's 1:17 general filter guidance is not an
espresso recipe. Hair Bender's 19.5 g / 24–28 g / 23–28 second roaster starting
recipe retains basket and adjustment caveats. Pack-use calculations are not
shelf-life promises, source-market dollar values are not local offers, owner
accounts are not representative testing, and Coffeedant tasting/measurement is
not invented.

All 76 localization tests and analytics validation pass. Six full generated
HTML/JSON checks compare entire articles, all twelve FAQ answers per edition,
source links, scripts/runtime, source dates, metadata, image credits, structured
categories/genres, locale, canonical/noindex and matching scoped sitemaps.
Ready-page builds contain 54/53/53 pages including the 404. All 147 Finder
descriptions remain distinct and complete, with unknown regional prices and
Amazon links suppressed. These are generated-output/runtime checks, not a new
browser session or hands-on coffee testing.

The current source remains 232 canonical pages / 46,732 unique slots. Ready
regular pages are NL 53, DE 52 and FR 52, excluding the 404; remaining slots are
41,053 / 41,159 / 41,159. Full editions remain incomplete and unpublished. No
public hostname, published flag, paid API, billing or subagent changes are made.
Continue the remaining full guides/reviews and regional Deals safeguards before
production cutover; the continuation remains active.

### Complete Monarch and Holler Mountain reviews; current 148-product Finder (2026-10-16)

Batch nineteen directly translates the entire Onyx Monarch and Stumptown Holler
Mountain reviews in NL/DE/FR. Their source article bodies contain 1,202 and 1,208
words, including every section, methodology, source note, recommendation and
twelve visible/structured FAQ answers per language. Headers, metadata, author
disclosures and photo attribution are included. The frozen review snapshot has
191 slots / 157 distinct strings. Six verbatim approvals are exact model, coffee
and roaster names; no article body is exempted or shortened. Routes retain the
product identifiers under `/koffiebonen/`, `/kaffeebohnen/` and `/cafe-en-grains/`;
all earlier URLs, particularly the approved Dutch dosing URL, remain unchanged.

Monarch's rotating lots and inconsistent source process fields remain qualified,
not a false permanent origin/variety/process list. Roaster sensory/caffeine
claims are not Coffeedant measurements. Its smaller 10 oz format and original
dated US dollar comparisons remain explicit. Holler Mountain retains separate
espresso/filter instructions, grinder workflow, variable blend and packaging
history. Organic certification is not a taste/freshness guarantee, an outside
four-week sample is not future-bag evidence, and neither review invents tasting,
brewing, measurements or photography by Coffeedant.

Concurrent US publication adds seven canonical pages and a 148th Finder record.
A separate immutable 37-slot / 31-string source refresh translates the shared
Rivelia navigation, fifteen-review De'Longhi index, new coffee-hub cards and
milk-guide teaser, and all three fields of the exact US Onyx Black Rivelia
EXAM44055B. Its two 8.8 oz hoppers, 13 grinder settings, 3.5-inch display, profiles
and named features are retained; the frozen source identity records its US price
and search URL for audit, not local offer approval. A 50/50 half-caff bean blend
is not turned into a measured half-caffeine cup. Card and navigation translation
does not complete the new review or buying-guide bodies. All 148 current Finder
descriptions are distinct and complete, with unknown regional prices and Amazon
links suppressed. Import adds 238 cache entries per edition without changing
previous passing wording; four no-longer-indexed source slots are not counted as
newly translated text.

All 80 localization tests and analytics validation pass. Six complete generated
review checks compare full bodies, all FAQ answers, source links, scripts/runtime,
structured roles/categories/credits, source dates, locale/canonical/noindex and
scoped sitemaps. Six additional checks compare the complete coffee-hub sections
and De'Longhi editorial/review-index sections, image alternatives, shared menu,
metadata and links in every edition. The real generated Finder has all 148
translated records with unverified commerce hidden. These are generated-output/
runtime integration checks, not a new browser session or hands-on product test.

The current source has 239 canonical pages / 47,488 unique slots. Ready regular
pages are NL 55, DE 54 and FR 54, excluding the 404; scoped noindex builds contain
56/55/55 pages. Pending slots are 41,575 / 41,681 / 41,681; the larger source queue
includes the newly published US content. Full editions remain incomplete and
unpublished. No public hostname, release flag, paid API, billing or subagent
changes are made. Continue remaining complete articles and regional Deals
safeguards before full cutover; the continuation remains active.

### Complete French Roast and Major Dickason's reviews (2026-10-16)

Batch twenty directly translates the full Stumptown French Roast and Peet's
Major Dickason's reviews into NL/DE/FR. Their source article bodies contain
1,731 and 1,701 words, respectively, including all sections, buying guidance,
methodology, source notes, recommendations and twelve visible/structured FAQ
answers per edition. Header, metadata, author disclosures, photo attribution,
accessible labels and navigation are included. The frozen snapshot has 189
missing slots / 155 distinct strings; five verbatim approvals are exact coffee
and roaster names, not body exemptions. Import adds 191 current entries per
edition across slot kinds with no changes to earlier passing cache wording.

Product identifiers remain unchanged under `/koffiebonen/`, `/kaffeebohnen/`
and `/cafe-en-grains/`. Existing URLs, including the reviewed Dutch dosing URL,
are preserved. Major Dickason's direct caffeinated whole-bean selection stays
distinct from retail pack sizes, grounds, pods, capsules and decaf. Its dated
display price is not a verified discount or stock claim. Other roasters' shipping
or freshness policies are not transferred to Peet's. French Roast remains a
roast-style name, not French geographical origin. The source's five-pound
`2,268 g` notation is retained with a written-out equivalent to avoid decimal-
comma ambiguity. Use calculations are not shelf-life measurements, third-party
seller guarantees or product caffeine claims. Grinder oil cleaning and machine
descaling remain distinct; no universal grinder compatibility, recipe, tasting
score or Coffeedant brewing/measurement is invented.

All 82 localization tests and analytics validation pass. Six full generated
HTML/JSON checks compare complete article bodies, all FAQ answers, source links,
scripts/runtime, source dates, structured product IDs, roles/categories/credits,
locale, canonicals, noindex and matching scoped sitemaps. Scoped builds contain
58/57/57 pages including the 404. All 148 Finder descriptions remain distinct
and fully translated, with unverified regional prices and Amazon links hidden.
These are generated-output/runtime integration checks, not a new browser session
or hands-on product test.

The current source remains 239 canonical pages / 47,488 unique slots. Ready
regular content pages are NL 57, DE 56 and FR 56, excluding the 404; pending
slots are 41,384 / 41,490 / 41,490. Full editions remain incomplete and
unpublished; no public hostnames, published flags, paid APIs, billing or
subagents are changed. Continue the remaining complete guides/reviews and
regional Deals safeguards before full-edition cutover. The continuation remains
active.

### Complete dark-roast buying guide (2026-10-16)

Batch twenty-one directly translates the complete
`/coffee-beans/best-dark-roast-coffee-beans/` guide into NL/DE/FR. The source
article has 3,168 words, including all ten main sections, both full comparison
tables, three product cards, methodology, sources, final recommendation and
eight visible/structured FAQ answers. Header/author disclosures, metadata,
structured Article/ItemList/ImageObject prose, navigation and accessible table
labels are translated too. The immutable snapshot contains 188 missing slots /
168 distinct strings. Six verbatim approvals are four exact named source links
and two literal price/pack-unit strings, not article body exemptions. Import
adds 188 current entries per edition with no changes to earlier passing wording.

Stable routes are `/koffiebonen/beste-donker-gebrande-koffiebonen/`,
`/kaffeebohnen/beste-dunkle-kaffeebohnen/` and
`/cafe-en-grains/meilleurs-cafes-torrefaction-foncee/`. All earlier URLs,
especially the approved Dutch dosing URL, remain fixed. The guide's three
product cards and structured list now link to the complete translated Forty-Six,
French Roast and Major Dickason's reviews in scoped builds. Unfinished grinder
reviews remain explicitly on the US source rather than partial regional pages.

Buying-fit recommendations are not a tasting podium. Big Trouble's medium-dark
classification stays outside the main dark category. Original US dates, dollar
prices, pack masses and dose calculations remain explicit, not local offers,
verified discounts, shelf-life tests or caffeine measurements. The literal
`2,268 g` has a written-out equivalent to avoid decimal-comma ambiguity. Shipping
policies remain roaster-specific; grinder oil care, dry burrs and machine
descaling remain separate. Neither universal machine compatibility nor any
Coffeedant tasting, brewing or measurement is invented.

All 84 localization tests and analytics validation pass. Three full generated
HTML/JSON checks compare complete article/header text, both tables (four and
seven rows), all eight FAQ answers, metadata, photo captions/credits, publication
date, exact scripts/runtime, citation targets, source destinations, the complete
three-item regional review list, locale/canonical/noindex and scoped sitemaps.
All 148 Finder descriptions remain distinct and translated, with unknown
regional prices and Amazon links hidden. These are generated-output/runtime
integration checks, not a new browser session or product test.

The fresh build indexes 239 canonical pages / 47,102 unique slots. Its 386 fewer
indexed source slots are not newly translated text. Ready regular pages are NL
58, DE 57 and FR 57, excluding the 404; scoped builds contain 59/58/58 pages.
Pending slots are 40,810 / 40,916 / 40,916. Full editions remain incomplete and
unpublished. No public hostname, release flag, paid API, billing or subagent
changes are made. Continue the remaining full guides/reviews and regional Deals
safeguards before full cutover; the continuation remains active.

### Original ten coffee reviews complete: Apollo and Black Cat Classic (2026-10-16)

Batch twenty-two directly translates the complete Counter Culture Apollo and
Intelligentsia Black Cat Classic Espresso reviews into NL/DE/FR. Source article
bodies contain 1,181 and 1,225 words, including all sections, methodology,
sources, alternatives, final recommendations and twelve visible/structured FAQ
answers per edition. Headers, metadata, author disclosures, attribution and
accessible labels are included. The immutable snapshot contains 182 missing
slots / 149 distinct strings; five verbatim approvals are exact coffee/roaster
and named sourcing-program labels, not body exemptions. Import adds 182 current
entries per edition with no changes to previously passing cached wording.

Product identifiers remain unchanged beneath `/koffiebonen/`, `/kaffeebohnen/`
and `/cafe-en-grains/`; all earlier URLs, especially the approved Dutch dosing
URL, remain fixed. Apollo's seasonal washed Ethiopian components are not a
permanent farm/variety list, and its 1:17 filter advice stays distinct from
espresso. The Guardian's dated sample observation is not future-bag proof.
Black Cat Classic remains distinct from darker Analog; its 18 g / 45 g / 1:2.5
recipe is a starting point with equipment constraints, not a universal setting
or Coffeedant performance result. Direct Trade is a sourcing framework, not
lot-specific sensory inspection. Retail anecdotes are not representative audits.
Original dated US prices and pack calculations are retained, not converted to
local offers; no tasting, brewing, measurement or photography is invented.

All 86 localization tests and analytics validation pass. Six complete generated
HTML/JSON checks compare full bodies, all FAQ answers, metadata, source links,
dates, product IDs, credits/roles/categories, scripts/runtime, locale/canonical/
noindex and matching scoped sitemaps. All original ten product reviews are
current and build-ready in each edition, as are the five decaf reviews: fifteen
of the twenty current coffee product reviews, not all reviews or full editions.
The five newer reviews remain queued. All 148 Finder descriptions remain
distinct and translated, with unknown regional prices and Amazon links hidden.
These checks use generated output/runtime integration, not a new browser
session or hands-on product test.

The source remains 239 canonical pages / 47,102 unique slots. Ready regular
pages are NL 60, DE 59 and FR 59, excluding the 404; scoped builds contain
61/60/60 pages. Pending slots are 40,628 / 40,734 / 40,734. Full editions remain
incomplete and unpublished. No public hostname, release flag, paid API, billing
or subagent changes are made. Continue the remaining full articles and regional
Deals safeguards before full cutover; the continuation remains active.

### Fast Forward and Gradient full reviews (2026-10-16)

Batch twenty-three directly translates the complete Counter Culture Fast
Forward and Gradient reviews into NL/DE/FR. The source article bodies contain
1,236 and 1,135 words, including all sections, methodology, source notes,
alternatives, recommendations and twelve visible/structured FAQ answers per
edition. Headers, metadata, author disclosures, image attribution and accessible
labels are included. The immutable snapshot contains 152 missing slots / 123
distinct strings; the only verbatim approvals are the two exact coffee names.
Import adds 152 current entries per edition without changing earlier passing
cached wording. Existing translated verdict wording from the coffee hub is reused.

Product identifiers remain unchanged beneath `/koffiebonen/`, `/kaffeebohnen/`
and `/cafe-en-grains/`; the approved Dutch dosing URL is unchanged. Fast Forward's
rotating organic components do not become a permanent origin mix or invented
percentages. Its 20 g / 340 g filter example is not an espresso recipe. Gradient's
Colombian sourcing does not imply a fixed farm; the attributed berry note remains
an explicit buying distinction. Its 30 g / 510 g example and 1:17 advice remain
separate from espresso basket settings. No milk-performance result is invented.
The Guardian's dated outside samples and self-selected owner anecdotes are not
Coffeedant tastings or guarantees for future bags. Fast Forward's $19.50 and
Gradient's $20 source prices and their different per-dose arithmetic stay distinct
US facts, not converted local offers.

The user's concurrent Finder/link repair in PR #158 is merged into this batch,
not overwritten. A separate immutable 13-slot refresh translates the newly linked
Hologram guidance, its new alternative and the five-review grinder hub, including
the Opus 2 card, count and comparison heading. Prior wording is reused where
possible while retaining protected names inside their actual link-separated
slots. This contributes 14 additional current cache entries across text/JSON
kinds: 166 new entries per edition for the combined batch, with no earlier cached
text changed. Hardware filter identities and destinations come from the source
repair, not translation inference.

All 89 localization tests, analytics validation and the Cloudflare-target Finder
validator pass. Nine complete generated HTML/JSON checks cover Fast Forward,
Gradient and refreshed Hologram in all three languages, comparing full bodies,
all FAQ answers, metadata, source links,
dates, identifiers, credits/roles/categories, scripts/runtime, locale/canonical/
noindex and matching scoped sitemaps. Three further full grinder-hub checks cover
all five sections, images, metadata, menus and source destinations. Seventeen of twenty current coffee product
reviews are now current and build-ready in each edition; Even Keel Half-Caff,
Eye of the Tiger Espresso and Equator Blend remain queued. All 148 Finder records
remain distinct and translated, with unknown regional prices and Amazon links
hidden. QA uses generated output/runtime integration, not a new browser session
or hands-on product test.

The synced source contains 239 canonical pages / 47,110 unique slots. Ready regular pages
are NL 62, DE 61 and FR 61, excluding the 404; scoped builds contain 63/62/62
pages. Pending slots are 40,473 / 40,579 / 40,579. Full editions remain incomplete
and unpublished. No public hostname, release flag, paid API, billing or subagent
changes are made. Continue the remaining full articles and regional Deals
safeguards before full cutover; the continuation remains active.

### Complete Even Keel Half-Caff and Eye of the Tiger reviews (2026-10-16)

Batch twenty-four directly translates the full Counter Culture Even Keel
Half-Caff and Equator Eye of the Tiger Espresso reviews into NL/DE/FR. Source
article bodies contain 1,135 and 1,194 words, including every section, methodology,
source note, alternative, recommendation and twelve visible/structured FAQ
answers per edition. Headers, metadata, author disclosures, image attribution,
accessible labels and shared interface remain complete. The immutable snapshot
contains 115 missing slots / 93 distinct strings; only two exact coffee names
have verbatim approvals. Import adds 115 current cache entries per edition with
no changes to earlier passing wording. Existing hub verdict wording is reused.

Identifiers remain unchanged under `/koffiebonen/`, `/kaffeebohnen/` and
`/cafe-en-grains/`. Existing routes, especially the approved Dutch dosing URL,
remain fixed. Even Keel's 50/50 ingredient statement is not a measured 50%
caffeine serving, a medical dose guarantee or proof of a particular decaf process.
The medium-dark badge versus medium story discrepancy remains explicit rather
than resolved by invention. Its 50 g / 800 g / 205°F / 1:16 French-press starting
recipe stays separate from espresso. Eye of the Tiger's current Costa Rica and
Rwanda components are not merged with older indexed origins. Its 18 g / 46 g,
roaster-labelled 1:2.5 and 23-second Barista Express example retain basket and
equipment qualifications. Old packaging notes and outside samples do not prove
the current lot. Neither review invents tasting, extraction or caffeine assays;
dated US prices and dose arithmetic remain source-market facts, not local offers.

All 91 localization tests, analytics validation and the Cloudflare-target Finder
validator pass. Six complete generated HTML/JSON checks compare entire articles,
all FAQ answers, metadata, source links, dates, identifiers, attribution, structured
roles/categories/genres, scripts/runtime, locale/canonical/noindex and scoped
sitemaps. Nineteen of twenty current coffee product reviews are current and
build-ready per edition; Equator Blend remains queued. All 148 Finder descriptions
remain distinct and translated, with unknown regional prices and Amazon links
suppressed. These checks use generated output/runtime integration, not a new
browser session or hands-on product test.

The source remains 239 canonical pages / 47,110 unique slots. Ready regular pages
are NL 64, DE 63 and FR 63, excluding the 404; scoped builds contain 65/64/64 pages.
Pending slots are 40,358 / 40,464 / 40,464. Full editions remain incomplete and
unpublished. No public hostname, release flag, paid API, billing or subagent
changes are made. Continue the remaining full articles and regional Deals
safeguards before full cutover; the continuation remains active.

### All twenty coffee product reviews complete; incremental release batch (2026-10-16)

Batch twenty-five directly translates the entire Equator Blend review into
NL/DE/FR: 1,164 source article words, every section, source note, alternative,
methodology and recommendation, six visible/structured FAQ answers, metadata,
disclosures, attribution and accessible labels. The immutable snapshot contains
61 missing slots / 49 distinct strings. Two verbatim approvals are exact named
coffees, not body exemptions. Import adds 61 current cache entries per edition
with no earlier cached text changed; passing hub verdict wording is reused.

Existing routes are preserved: `/koffiebonen/equator-blend/`,
`/kaffeebohnen/equator-blend/` and the already registered French
`/cafe-en-grains/melange-equateur/`. The Dutch dosing URL stays unchanged. Current
Sumatra/Kenya/Colombia/Guatemala details are not merged with an older Brazil
account. The 1:15 / 24 g / 360 g V60 guidance is not an espresso extraction recipe;
the espresso-grind selector does not establish dose or yield. Cream-and-sugar
positioning stays attributed to the roaster, and no Coffeedant tasting, current-lot
confirmation, universal ranking or local price is invented. US $18.50 and the
dated pack/dose arithmetic remain source facts.

The newly approved `published: true` / `publicationMode: ready-pages` mode remains
enabled for NL/DE/FR. At batch start, Cloudflare reported all three Pages domains
active and a successful production deployment of main `9d3fc3d`; public HTTPS
manifests served 64/63/63 content pages, excluding their 404s. This batch prepares
65/64/64 complete content pages for the automatic post-merge deployment. Verify
that deployment and its live manifests before reporting the new review published;
these are growing editions, not completed whole-site translations.

The US build now contains a generated language chooser on verified pages. Source
preprocessing excludes that generated nav before indexing/regional rendering:
regional builders generate their own chooser from actual release routes and the
target locale. This avoids false translation gaps and duplicate choosers while
retaining authored article/navigation text. A regression test covers the boundary.
The frozen Equator snapshot is unchanged; no source or factual guard is exempted.

All 96 localization tests, analytics validation and the Cloudflare-target Finder
validator pass. Three complete generated HTML/JSON checks compare the full new
review, all FAQ answers, metadata, source links, dates, identifiers, credits/roles/
categories, scripts/runtime, locale/canonical/noindex and scoped sitemaps. All
twenty current coffee product reviews are now current and build-ready per edition.
The full `npm run build:regions` production bundle also passes for all three
editions, with indexable new review pages, one localized language chooser and
reciprocal NL/DE/FR alternates. The 148 Finder descriptions remain distinct and translated; unverifiable local
prices and Amazon offers stay hidden. These are generated-output/runtime checks,
not a new browser session or product tasting.

The source index remains 239 canonical pages / 47,110 unique authored slots;
five generated chooser labels are not newly translated content. Ready regular
pages are NL 65, DE 64 and FR 64; scoped builds contain 66/65/65 pages with 404s.
Pending slots are 40,249 / 40,403 / 40,325. Counts include pre-existing main-branch
source-change cache updates; this direct batch adds only its 61 entries per
edition. Continue the remaining complete guides/reviews and regional Deals
safeguards, publishing each complete page incrementally. Whole-site completion
remains false, and the continuation stays active. No paid translation API,
billing, subagent or public DNS changes are made by this batch.

### Complete milk-drinks buying guide (2026-10-17)

Batch twenty-six directly translates the entire
`/coffee-beans/best-coffee-beans-for-milk-drinks/` guide into NL/DE/FR. Its source
article contains 2,075 words, including all six explanatory sections, both full
five-row tables, four product cards, methodology, source notes, final advice and
seven visible/structured FAQ answers per language. Headers, metadata, author
disclosures, image captions, accessible comparison labels and structured
Article/ItemList/ImageObject prose are included. The immutable main snapshot has
137 missing slots / 119 distinct strings. Five verbatim approvals are exact named
source links with their original arrows, not body exemptions. A separate frozen
two-slot German-only completion translates the related-guide labels absent from
the Dutch-based export. The guide imports add NL 137, DE 139 and FR 137 entries.
After preserving the concurrent October 17 source refresh through a normal Git
merge, a separate immutable seventeen-slot snapshot translates the additions to
Apollo, Black Cat Classic, Monarch, Hair Bender and Holler Mountain. These five
already-translated reviews remain current in all editions. Total batch additions
are NL 154, DE 156 and FR 154; zero earlier cached text is changed.

Existing registered routes are preserved:
`/koffiebonen/beste-koffiebonen-voor-melkdranken/`,
`/kaffeebohnen/beste-kaffeebohnen-fuer-milchgetraenke/` and
`/cafe-en-grains/meilleurs-cafe-en-grains-pour-boissons-au-lait/`.
The approved Dutch dosing URL remains unchanged. The four cards and structured
list link to the complete regional Monarch, Eye of the Tiger, Equator Blend and
Trapper Creek reviews. No incomplete regional article is substituted for English.

The guide retains four distinct buying roles rather than a tasting podium.
Roaster milk claims are attributed; dairy/oat equivalence and sensory superiority
are unverified. Eye of the Tiger's 18 g / 46 g and Trapper Creek's near-19.5 g
espresso starts stay distinct from Equator Blend's 1:15 filter guidance. A 150 ml
cappuccino and 350 ml latte remain different examples, not measured preferences.
Swiss Water is not a zero-caffeine guarantee; Even Keel's 50/50 ingredient blend
does not establish half the caffeine in a brewed cup. Grinder retention,
changing lots and dated outside samples keep their limits. Onyx's unverified
selector price stays unverified; the other original October 16 US dollar prices,
pack sizes and cost qualifications are preserved, not converted to local offers.
No Coffeedant tasting, brewing, milk test or caffeine assay is invented.

The refresh retains Apollo's separately diluted cold-brew concentrate, Black Cat's
distinct decaf identity and residual-caffeine caveat, Monarch's separate espresso
and Kalita recipes, and the different press/filter/espresso grind settings in the
Stumptown reviews. Source recipe numbers, original destinations and October 17
check dates remain intact. English thousands notation is accompanied by written-
out quantities, not silently interpreted as decimal commas. No roaster recipe
becomes a Coffeedant brewing, tasting or price claim.

All 101 localization tests, analytics validation, the Cloudflare-target Finder
validator and product-video validation pass. Fifteen complete refreshed-review
HTML/JSON checks verify full bodies, six FAQ answers each, source dates, links,
identifiers, credits and unchanged runtime. Three complete guide HTML/JSON
checks compare the entire guide/header, all table cells, all FAQ answers,
metadata, source destinations, citation anchors, scripts/runtime, dates, image
captions/dimensions/source URLs with correctly localized schema IDs, and the
four regional review destinations. Locale/canonical/noindex and matching scoped
sitemaps pass. The 148 Finder descriptions stay distinct and translated, with
unverifiable regional prices and Amazon offers hidden. These are generated-output
and runtime checks, not a new browser session or physical product test.

The full `npm run build:regions` production bundle passes with indexable new
guides, a single localized language chooser, reciprocal NL/DE/FR alternates and
links to the unfinished video library explicitly on the English source.
The user's concurrent video-library/shared-embed work on main is preserved.
The current source is 240 canonical pages / 48,936 unique slots; the source growth
is not credited as newly translated content. Ready regular pages are NL 66,
DE 65 and FR 65, excluding 404s; scoped builds contain 67/66/66 pages. Pending
slots are 41,833 / 42,015 / 41,939. Whole-site completion remains false. Keep
`published: true` / `publicationMode: ready-pages`, verify the automatic production
deployment/live manifests after merge, and continue adding complete pages. The
large video-library body and remaining guides/reviews are still queued; unfinished
library/article links remain on the English source with the localized notice.
No DNS, billing, paid translation API or subagent changes are made by this batch.

### Complete espresso-and-drip buying guide (2026-10-17)

Batch twenty-seven completes the entire
`/coffee-beans/best-coffee-beans-for-espresso-and-drip/` guide in NL/DE/FR.
The source article contains 2,455 words, including all seven explanatory sections,
both comparison tables, four full product cards, methodology, source notes,
final recommendation and seven visible/structured FAQ answers. Headers, metadata,
author disclosure, accessible labels and structured Article/ItemList/ImageObject
prose are included. The immutable snapshot has 165 slots / 145 distinct strings.
One verbatim approval is the exact named Intelligentsia source link with its
arrow, not a body exemption; all earlier snapshots remain unchanged.

Import adds 89 current entries in NL, 165 in DE and 89 in FR. It also corrects
72 pre-existing machine-translated entries each in NL/FR, replacing awkward or
misleading brewing terminology and aligning visible/structured answers. No earlier
directly authored cache text changes. Proper coffee/roaster names, source facts,
numbers, link destinations and actual citation markup remain intact. Stable
registered routes stay `/koffiebonen/beste-koffiebonen-voor-espresso-en-drip/`,
`/kaffeebohnen/beste-kaffeebohnen-fuer-espresso-und-drip/` and
`/cafe-en-grains/meilleurs-cafe-en-grains-pour-espresso-et-filtre/` even where
the displayed title now uses more natural brewing terminology. The approved
Dutch dosing URL is unchanged.

Hair Bender's near-19.5 g / 24–28 g espresso demonstration remains distinct from
Counter Culture's 1:17 / 20 g / 340 g filter example. Changing components do not
become permanent origins, and a grinder's ability to switch methods is not
assumed. The suggested home trial is reader guidance, not Coffeedant brewing
or tasting. Black Cat's 18 g / 45 g espresso recipe does not establish daily
filter suitability. Historical October 14 US prices and illustrative 18 g / 20 g
cost arithmetic are not converted local offers, total drink costs or value scores.
No universal automatic-machine compatibility or freshness guarantee is invented.

All 104 localization tests, analytics validation, Cloudflare-target Finder and
product-video validation pass. Three full generated HTML/JSON checks compare
entire guide/header text, all five-row/six-row table cells, seven FAQ answers,
metadata, dates, photo credits/assets/schema IDs, citation anchors, source links,
unchanged scripts/runtime, locale/canonical/noindex and scoped sitemaps. All four
guide picks link to their complete regional reviews. The 148 Finder descriptions
remain distinct and translated; unverifiable prices and Amazon links stay hidden.
These are generated-output/runtime checks, not a browser or product-testing claim.

The concurrent main-branch Deals repair is preserved. The fresh source contains
240 canonical pages / 49,062 unique slots. Ready regular pages are NL 67, DE 66
and FR 66 (plus 404s); pending slots are 41,870 / 41,976 / 41,976. These counts
include source growth, not an invented translation gain. Whole editions remain
unfinished. Preserve `published: true` / `publicationMode: ready-pages`, verify
the automatic production deployment after merge and continue the remaining full
guides, reviews and video library. No DNS, paid API, billing or subagent changes
are made by this batch.

### Complete main espresso-machine guide (2026-10-17)

Batch twenty-eight directly completes `/espresso-machine/` in NL/DE/FR. The
624-word source main includes its full introduction and decision route, complete
Finder interface, seven-row comparison table with mobile labels, seven distinct
starting picks, category/constraint links and all three buying principles.
Metadata, image alternatives and structured WebPage prose are included. The frozen
snapshot has 97 slots / 80 distinct strings; four verbatim approvals are exact
model names only. Import adds 98 current cache entries per edition across kinds,
with zero previous cached text changed.

The new registered routes are `/espressomachines/`, `/espressomaschinen/` and
`/machines-expresso/`. Earlier URLs, including the approved Dutch dosing page,
remain unchanged. Model names and reviewed US variants are not replaced with
guessed local equivalents. The original `$500` / `$5,000` source-budget scope
remains dollar-based; the latter has a written-out quantity to avoid decimal-comma
ambiguity. It does not establish local prices or offers. Separate-grinder needs,
single-boiler brew/steam waits, limited manual control and different daily routines
remain explicit rather than becoming a universal ranking.

All 107 localization tests, analytics validation, the CF-target Finder validator
and product-video validation pass. Three complete generated checks compare the
entire main text, all table cells/mobile labels, seven cards, metadata/structured
WebPage, original or safely rewritten links, unchanged authored scripts, exact
runtime interface, disabled unverified budget controls, locale/canonical/noindex
and scoped sitemaps. All 148 Finder descriptions remain distinct and translated;
unknown regional prices and Amazon links stay hidden. The concurrent compact
flag selector and collapsed regional notices are preserved, not reverted.
These are generated-output/runtime checks, not a new browser or product test.

The source remains 240 canonical pages / 49,062 unique slots. Ready regular pages
are NL 68, DE 67 and FR 67, plus their 404s. Pending slots are 41,772 / 41,878 /
41,878; whole editions remain incomplete. Preserve the incremental publication
mode, verify the automatic production deployment/live pages after merge and
continue the remaining full articles. This batch uses no Amazon API, translation
API, new credentials, paid billing, DNS changes or subagents.

### Complete dosing guide in German and French; restore Brands index (2026-10-17)

Batch twenty-nine directly completes `/journal/espresso-dosing/` in DE/FR,
including its complete original guide, ten practical-check sections, all twenty
check paragraphs, metadata, three visible/structured FAQ answers, methodology,
accessible diagram text and shared runtime UI. The immutable snapshot has 107
missing slots / 99 distinct source strings across this guide and the Brands
index. Twenty long check paragraphs are mechanically assembled from explicitly
authored sentences; their English assembly must exactly equal the frozen source.
The remaining entries are fully authored, not article summaries or API output.

New routes are `/journal/espresso-dosieren/` and `/journal/doser-expresso/`.
The approved Dutch `/journal/espresso-doseren/` route and all existing cached
wording remain unchanged. All original numbers, source-market dollar amounts,
models, links, diagnostic caveats and SVG geometry are preserved. Wet-puck
appearance alone is not presented as a quality score; dose, yield and grind
changes retain the source's controlled-test limitations.

The concurrent main-branch Brands navigation expansion is preserved. One missing
structured WebPage title was withholding its current index in each edition;
this batch fills that slot using the exact existing translated title, restoring
the complete index for all three languages without rewriting its other text.

All 110 localization tests, analytics, CF-target Finder, product-video and
brand-navigation validators pass. Six whole-page generated checks compare both
pages in all three editions, including complete visible main text, metadata,
structured data, safely rewritten links, executable scripts, runtime UI and
localized dates. Dosing checks include all ten sections, three complete FAQ
answers and unchanged SVG geometry. These are generated-output/runtime checks,
not a new browser or product-testing claim. All 148 Finder descriptions remain
distinct, with unknown regional prices and buying links suppressed.

Import adds one current NL cache entry and 107 each for DE/FR, with zero previous
cached text changes. The current source has 240 canonical pages / 49,081 unique
slots. Each edition now has 68 ready regular pages plus its 404, with 41,683
pending slots; these are not complete editions. Fresh coverage is recorded in
`localization/direct-progress.json`. Preserve incremental `ready-pages` publication and verify the
automatic production deployment, live manifests, sitemaps and reciprocal language
links after merge. No Amazon API, paid translation API, new credentials, billing,
DNS changes or subagents are used by this batch.

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
