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
Wait for the entire US build, including localization and SEO post-processing,
to finish before exporting a task. Do not index `dist` while another build is
still writing it; generated metadata affects the canonical source-page hash.
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

### Complete espresso-techniques guide in all three editions (2026-10-17)

Batch thirty directly translates the full `/journal/espresso-techniques/` guide
in NL/DE/FR. Its current visible main contains 4,801 source words and 108
paragraphs, including the complete preserved machine-by-machine article, shared
versus independent boiler diagram, two manufacturer photographs and captions,
bounded Silvia owner evidence, methodology and three visible/structured FAQ
answers. All machine categories, milk guidance, accessible diagram labels,
metadata and structured ImageObject captions are included. The immutable
snapshot has 157 missing slots / 145 distinct source strings; nothing is
replaced by a summary or an English body exemption.

New stable routes are `/journal/espressotechnieken/`,
`/journal/espressotechniken/` and `/journal/techniques-expresso/`. Existing routes,
especially the approved Dutch `/journal/espresso-doseren/`, remain unchanged.
Source figures, original Fahrenheit/Celsius values, ratios, forces, volumes,
model identifiers and US dollar amounts remain source facts, not converted local
offers. English thousands notation has written-out quantities to avoid decimal-
comma ambiguity. Different Silvia generations and retrofitted hardware are not
presented as a stock V6 test; manufacturer photos are not Coffeedant test photos.
The source's documented-control and closed-system limitations remain explicit.
This translation does not certify, update or broaden legacy technical claims.

All 113 localization tests, analytics, CF-target Finder, product-video and
brand-navigation validators pass. Three complete generated checks compare the
entire visible main, all 108 paragraphs, accessible labels, metadata, complete
FAQ/Article/WebPage/ImageObject prose, original or safely rewritten links,
executable scripts/runtime, localized dates and unchanged SVG geometry/images.
All 148 Finder descriptions remain distinct, with unknown regional prices and
buying links suppressed. These are generated-output/runtime checks, not a new
browser session, equipment test or measurement claim.

Import adds 157 current entries per edition with zero previous cached text
changes. The concurrent automatic main-branch cache update is preserved and not
credited as this direct batch's work. Fresh coverage remains 240 canonical source
pages / 49,081 unique slots, with 69 ready regular pages plus 404 in each edition.
Pending slots are NL 41,526, DE 41,407 and FR 41,407; whole editions remain
incomplete. Keep incremental `ready-pages` publication and verify the automatic
production deployment, manifests, sitemaps and reciprocal language links after
merge. No Amazon API, paid translation API, new secrets, billing, DNS changes or
subagents are used by this batch.

### Complete conical-versus-flat grinder guide (2026-10-17)

Batch thirty-one directly translates the entire
`/journal/conical-vs-flat-burr-grinders/` guide into NL/DE/FR. Its current visible
main contains 4,928 source words and 118 paragraphs, including the full technical
comparison, fourteen comparison-table rows, eleven practical-check sections with
twenty-two complete check paragraphs, interactive burr-path diagram, both photo
captions, bounded owner evidence, methodology, references and three
visible/structured FAQ answers. The immutable snapshot contains 189 missing slots
/ 178 distinct strings. Six verbatim approvals are literal SI measurements only;
no article body is exempted or shortened.

The ordinary grouped translation file retains 172 explicitly authored entries.
Twenty-two of those are mechanically assembled from authored sentence chunks;
every complete assembled English paragraph must exactly match the frozen source.
Existing approved recurring comparison wording is reused, without inference or
a translation-provider call. Both authored parts and generated paragraphs are
retained. Import adds 189 current entries per edition with zero prior cached
text changed.

Stable new routes are `/journal/conische-vs-vlakke-maalschijven/`,
`/journal/konische-vs-flache-mahlscheiben/` and
`/journal/meules-coniques-ou-plates/`. Earlier routes, especially the approved
Dutch `/journal/espresso-doseren/`, remain unchanged. Original model names,
quantities, source destinations and dollar amounts are preserved, not replaced
with inferred regional variants or converted offers. Written-out thousands
clarify English number notation. The four-person household comparison remains
non-blind, recipe differences stay explicit, photographs do not become
Coffeedant test evidence and broad category claims do not become new universal
flavor guarantees. This is not a technical revision or certification of the
preserved legacy comparison.

All 116 localization tests, analytics, CF-target Finder, product-video and
brand-navigation validators pass. Three whole-page generated checks compare all
visible main text, 118 paragraphs, fourteen table rows and mobile labels, eleven
checks, three complete FAQ answers, metadata, Article/WebPage/ImageObject prose,
accessible labels, original or safely rewritten links, scripts/runtime, localized
dates and unchanged SVG geometry/photo assets. All 148 translated Finder
descriptions remain distinct, with unverifiable regional prices and offers
suppressed. These are generated-output/runtime checks, not a new browser session
or physical grinder test.

The concurrent six-review US editorial upgrade is preserved. Current source
coverage is 240 canonical pages / 49,320 unique slots; its added source text is
not counted as this batch's translation work. All three editions have 70 ready
regular pages plus their 404s. Remaining slots are NL 41,573 and DE/FR 41,454
each. Whole editions remain unfinished. Preserve incremental `ready-pages`
publication, verify automatic deployment and live manifests/sitemaps/language
links after merge, and continue the remaining articles. No Amazon API, paid
translation API, new credentials, billing, DNS changes or subagents are used.

## Direct batch 32: complete Nordic-style coffee guide (2026-10-20)

The complete current `/journal/nordic-style-coffee/` article is directly authored
in Dutch, German and French against the immutable
`nordic-guide-batch-32.source.json` snapshot. Its 190 missing slots contain 182
distinct source strings: 167 have authored three-language translations and 15
are explicit verbatim approvals for exact measurements, cultural terms, names
and product identifiers. Repeated title and FAQ strings propagate across their
DOM and structured-data slots. All 4,902 source words and 86 paragraphs are
represented; this is not an abridged article or a technical revision of the
preserved historical account.

New stable routes are `/journal/noordse-koffiestijl/`,
`/journal/nordischer-kaffee/` and `/journal/cafe-nordique/`. The approved Dutch
`/journal/espresso-doseren/` route and earlier cached wording remain unchanged.
Each cache adds exactly 190 entries relative to current main, with zero existing
entries changed. The newer automated Dutch cache update is retained exactly and
is not counted as direct batch 32 translation work.

The guide includes the six-step upright AeroPress sequence, all historical and
cultural sections, source-market dollar examples, distinct competition and home
recipes, full evidence descriptions, photo limitations, metadata and three
complete FAQ answers. Source figures, models, attributions, assets, executable
scripts and original external destinations remain intact. Written-out thousands
clarify English numeric notation. The measured 14 g / 200 g recipe remains
separate from the owner's 16–17 g / 245 g adaptation; neither becomes a universal
Nordic standard or newly invented Coffeedant test.

All 119 localization tests and the analytics, CF-target Finder, video and brand
navigation validators pass. Whole-page generated checks in each edition compare
all main text, links, translated accessible labels, localized dates, metadata,
Article/WebPage/ImageObject prose, three structured answers, SVG geometry,
photographs, scripts and runtime UI. All 148 Finder descriptions remain distinct
with unverified local commerce suppressed. These are generated-output/runtime
checks, not a new browser session or physical brewing test.

Current coverage is 240 source pages / 49,320 unique slots. Each edition has 71
ready regular pages plus its 404. Remaining slots are NL 41,293 and DE/FR 41,264
each. All three whole editions remain incomplete; keep incremental `ready-pages`
publication and the continuation active. Verify the automatic production build,
live manifests, all 213 regular sitemap URLs, new full pages and reciprocal
language links after merge. No Amazon API, paid translation provider, billing,
new credentials, DNS changes or subagents are used for this batch.

## Direct batch 33: complete tamping guide (2026-10-20)

The full current `/journal/espresso-tamp-guide/` is directly translated into
Dutch, German and French against immutable `tamp-guide-batch-33.source.json`.
All 5,063 source words / 140 paragraphs are represented, including the legacy
article, newer preparation guidance, eight complete practical checks, the
level/tilted schematic, metadata, owner evidence, image limitations, evidence
descriptions and three complete visible/structured FAQ answers. This is not an
abridged article or a technical certification of the preserved legacy claims.

The frozen task has 227 missing slots / 218 distinct source strings. There are
217 complete authored translations and one explicit proper-name approval for
`Decent OCD (Ona Coffee Distributor)`. The base file authors 201 strings; the
parts file authors all remaining content for sixteen full check paragraphs.
`compose-direct.mjs` checks each complete assembled English paragraph against
the frozen source. Five exact recurring comparison/recording chunks reuse the
previously approved batch 31 wording. Keep the base, parts and generated final
JSON together. Import adds 227 current entries per edition and changes no prior
cache text. No translation provider is called for this direct authoring.

Imports use the complete US source after its SEO pass. `build:regions` rebuilds
Astro's raw US `dist` before bundling; restore `node scripts/build-seo.mjs` before
another import or full frozen-source comparison. The importer correctly refuses
missing generated-metadata slots rather than accepting an altered snapshot.

New stable routes are `/journal/espresso-tampen/` in NL and DE, and
`/journal/tassage-expresso/` in FR. Earlier routes and wording, particularly the
approved Dutch `/journal/espresso-doseren/`, remain untouched. Force figures use
explicit `lb` / American-pound wording rather than being mislabelled as metric
local pounds; source values and dollar examples are not converted. Exact basket
fit, models and original link destinations remain intact. Early Normcore owner
comments do not become V4/V4.1 tests, photographs do not prove extraction quality,
and a spring/click does not become a guarantee of uniform density or headspace.

All 123 localization tests, analytics, CF-target Finder, video and brand
navigation validators pass. Three generated whole-page checks compare all main
text, 140 paragraphs, eight complete checks, three FAQ answers, metadata and
Article/WebPage/ImageObject text, links, accessible labels, dates, scripts/UI,
unchanged SVG geometry and images. Both assembled diagram states retain their
localized text and original identifiers. A VM test executes the actual compiled
TypeScript handler in both directions with localized controls and checks that
panel visibility and pressed states change without replacing text. This is a
bounded runtime test, not a browser session or physical tamping experiment.
The mobile diagram caption uses compact native wording with the same negative
meaning. Arial 22 px font measurements are NL 392, DE 410 and FR 358 pixels,
within its 456-unit space; no original SVG geometry or markup is changed.
All 148 Finder descriptions remain distinct with unverified commerce suppressed.

Coverage remains 240 source pages / 49,320 unique slots. Each edition now has 72
ready regular pages plus 404; pending slots are NL 41,066 and DE/FR 41,037 each.
Whole editions remain incomplete. Keep incremental publication and continuation
active; verify the automatic production deployment, live manifests, all 216
regular sitemap URLs, full new pages and reciprocal English language links after
merge. The existing newer French cache update is preserved, not counted as direct
batch 33 work. No Amazon API, paid translation API, billing, new credentials,
DNS changes or subagents are used for the direct batch.

## Direct batch 34: complete distribution guide and source synchronization (2026-10-20)

The complete current `/journal/ground-distribution/` is directly translated into
Dutch, German and French against immutable `distribution-guide-batch-34.source.json`.
All 4,999 source words / 170 paragraphs are represented: the original article,
WDT steps, alternative methods, diagnostic grids and placeholders, workflow,
maintenance, two full practical checks, both schematic states, evidence and owner
limitations, metadata, image credits and three visible/structured FAQ answers.
Legacy technical claims are preserved, not certified or rewritten as local tests.

The task freezes 370 missing slots / 361 distinct strings. The base authors 356
complete strings; the parts author the four full practical-check paragraphs.
Five recurring comparison/recording chunks reuse passing batch 33 wording.
`compose-direct.mjs` verifies each assembled English paragraph against the frozen
source; the final authored JSON contains 360 translations and one explicit
proper-title approval, `Barista Hustle: Weiss Distribution Technique`.
Keep the base, parts, snapshot and generated final JSON together. No paid
translation provider is used. Stable new routes are `/journal/koffie-verdelen/`,
`/journal/kaffeemehl-verteilen/` and `/journal/repartition-mouture/` respectively.
Existing URLs and all prior cache wording remain unchanged.

Concurrent main-branch PR #177 refreshed ten reviews, and PR #175 added eight
source pages plus shared and decaf translations. Both were incorporated before
final validation without changing their editorial work or released wording.
The already released `decaf-refresh-20261020` wording is retained, not counted
as this batch's translation. It preserves Slow Motion roast-date uncertainty,
roaster-specific grind scales, current-lot rather than permanent origin claims,
recipe/measurement distinctions, unconverted fluid-ounce output and explicit
absence of Coffeedant tasting. Duplicate working translations were removed.

The original distribution snapshot remains immutable. A separate full current
`distribution-guide-current-batch-34.source.json` freezes 902 page/interface
slots after the shared-source changes; all original 370 authored slots remain
present and unchanged. Every current slot has passing cached text. Two newly
generated JSON metadata slots on Brands and Profitec reuse the exact already
released wording via immutable `shared-refresh-batch-34` files, keeping those
existing pages ready. The batch adds 372 current cache entries per edition and
changes no prior text. New machine/bean pages remain queued, not falsely counted
as translated here.

All 128 localization tests and analytics, CF-target Finder, video and brand
navigation validators pass. Whole-page checks cover all three distribution
articles, and fifteen further checks compare the full main text, links and
metadata of the five updated bean reviews in each language. The actual compiled
schematic handler is tested in both directions: native labels remain intact,
pressed states and hidden panels switch correctly. SVG geometry, image assets,
link destinations, numbers, placeholders, dollar examples and Fahrenheit values
are unchanged. Spring force remains explicit `30 lb`, not metric local pounds.
Diagram labels preserve their negative/illustrative meaning in compact native
wording. At Arial 22 px, the first caption measures NL 369 / DE 466 / FR 459 px
inside 495 units, the second NL 456 / DE 466 / FR 473 px inside 489 units.
These are bounded rendered-output, font-metric and VM checks, not a browser or
physical extraction experiment. All 149 current Finder descriptions remain distinct;
unverified commerce stays suppressed.

Current coverage is 248 source pages / 50,367 unique slots. Each edition has 73
ready regular pages plus 404, including all 17 current canonical Journal articles
and the 20 previously translated bean reviews. Five newly added bean reviews
remain pending. Pending slots are NL 41,668 and DE/FR 41,639 each; whole
editions remain incomplete. Preserve incremental publication and continuation.
After merge, verify the exact automatic production deployment, live manifests,
all 219 regular sitemap URLs, full new articles and reciprocal English links.
The reviewed Dutch `/journal/espresso-doseren/` stays intact. No API credentials,
Amazon requests, paid translation APIs, billing changes, DNS changes or subagents
are needed for this direct batch.

## Direct batch 35: complete Geometry and Southern Weather reviews (2026-10-20)

Both current Onyx Coffee Lab reviews, Geometry and Southern Weather, are directly
translated in full into Dutch, German and French against immutable
`bean-reviews-batch-35.source.json`. Geometry has 1,507 source words / 44
paragraphs and Southern Weather 1,453 / 44. All body sections, facts, owner and
independent-source limitations, metadata, product/image descriptions, source
notes and twelve complete visible/structured FAQ answers are included. These
are translations of the research-led US assessments, not new local tastings.

The frozen task has 147 missing slots / 118 distinct strings. The authored JSON
contains 115 full translations and three proper-name-only verbatim approvals.
It adds 147 current cache entries per edition and changes no earlier text.
The concluding verdicts reuse their exact passing cached wording before the
new closing sentence. Stable routes use the existing `/koffiebonen/`,
`/kaffeebohnen/` and `/cafe-en-grains/` prefixes with `onyx-geometry/` and
`onyx-southern-weather/`; all older URLs, including the reviewed Dutch dosing
page, stay unchanged.

The reviews keep their different brewing evidence: Geometry's Onyx cone recipe
is 25 g / 400 g at 205°F, separately 19 g in / 45 g beverage for espresso.
Southern Weather prioritizes filter; its 19 g / 40 g espresso start is Fellow's
commercial sample-specific suggestion, not an official Onyx instruction or a
Coffeedant result. The 45 g figure is not water added to the basket. Light
Agtron 130 and moderate ground Agtron 123 remain distinct. Changing microlots,
roast dates, washed processing, mixed varieties and whole bean versus instant
are preserved, as are sample/owner uncertainty, no numeric sensory score and
the explicit absence of Coffeedant purchase, brewing, tasting, measurement or
photography. US formats stay in oz/lb and Fahrenheit is not falsely converted.
Neither review claims a verified current US price or discount, still less a
fabricated local offer. All original assets and source-link destinations remain.

All 130 localization tests plus analytics, CF-target Finder, video and brand
navigation validation pass. Six complete-page checks cover the full main text,
all structured-data objects, six FAQs per page, metadata, links, accessible
labels, unchanged images/SVG, scripts and localized runtime. Full noindex
previews and the full regional production bundle are checked separately.
These are bounded rendered-output checks, not a browser session or a physical
coffee experiment. All 149 Finder descriptions remain distinct with no
unverified prices or buying offers.

Coverage remains 248 source pages / 50,367 unique slots. Each edition now has
75 ready regular pages plus 404, including all 17 current Journal articles and
22 of the 25 bean reviews. The three new Peet's/Verve reviews and other unfinished
sections remain queued. Pending slots are NL 41,521 and DE/FR 41,492 each;
whole editions remain incomplete. Keep ready-pages publication and continuation.
After merging green checks, verify the exact automatic regional deployment,
all six live new reviews, live manifests, all 225 regular sitemap URLs, TLS,
indexability, canonical/language/hreflang, unchanged Dutch dosing URL and the
subsequent automatic reciprocal English links. No paid translation API, Amazon
API activity, credentials, billing change, DNS change or subagents are used.

## Direct batch 36 — complete Peet’s reviews (2026-10-20)

Directly translated the complete current Big Bang and Arabian Mocha-Java
reviews into Netherlands Dutch, Germany German and France French. Big Bang's
source main contains 1,564 words / 49 paragraphs; Arabian Mocha-Java has 1,387
words / 44 paragraphs. All body text, metadata, image descriptions, source
notes, twelve visible/structured FAQ answers per edition and Big Bang's dated
video title, accessible play label and evidence limitations are included.
These remain translations of the research-led US articles, not local tastings.

The frozen task has 128 missing slots / 101 distinct strings. The authored JSON
contains 95 full translations and six proper-name-only verbatim approvals.
Matching exact source strings across DOM/JSON kinds adds 129 current cache
entries per edition, with no earlier cache text changed. Both concluding
verdicts retain their exact passing wording before the new closing sentence.
New URLs use the established `/koffiebonen/`, `/kaffeebohnen/` and
`/cafe-en-grains/` prefixes and `peets-big-bang/` / `peets-arabian-mocha-java/`.
All previous URLs, especially the reviewed Dutch dosing page, stay unchanged.

Arabian Mocha-Java's historic name does not prove an exclusively Yemen/Java
recipe. Its broad regions, unspecified component methods/varieties and
attributed cocoa/port/cardamom notes remain intact; port is an analogy, not
an ingredient or alcohol claim. Big Bang stays separate from pods, capsules
and decaf, with washed/natural components and unspecified fixed percentages.
Its medium label is not a universal owner taste judgment. The 2014 negative
sample and 2020 video do not establish today's blend, freshness or value.
Neither article invents a product-specific espresso dose/yield. The 16 oz /
454 g / twenty-two 20 g estimate and separate 10.5 oz ground format retain
their source units and scope. Conflicting price/stock panels mean no confirmed
available US price or discount, still less an invented regional offer.

All 132 localization tests pass. The six whole-page noindex-preview checks
verify exact full main text, all structured data and FAQs, metadata, source
links, accessibility, unchanged images/SVG and scripts/localized runtime.
The full regional production bundle is separately built and rechecked after
the API-free analytics, Finder, video and brand-navigation validators. These
are rendered-output/runtime assertions, not a browser session or coffee test.
The 149 distinct Finder records keep their no-price/no-unverified-offer state.

Coverage is 248 current source pages / 50,367 unique slots. Each edition has
77 ready regular pages plus 404, including all 17 Journal articles and 24 of
25 bean reviews. Verve Streetlevel and other unfinished sections remain queued.
Pending slots are NL 41,392 and DE/FR 41,363 each. No whole edition is complete;
retain ready-pages publication and the continuation. After merging the exact
green head, verify the automatic regional deployment, all six new live pages,
live manifests and all 231 regular sitemap URLs, TLS, indexability, language,
canonicals, reciprocal regional hreflang and subsequent English return links.
No paid translation API, Amazon API activity, credentials, billing or DNS
changes, or subagents are used for this batch.

## Direct batch 37 — complete Streetlevel and all bean reviews (2026-10-21)

Finished the directly authored Verve Streetlevel review in Netherlands Dutch,
Germany German and France French. The complete current source main has 1,454
words / 44 paragraphs. This includes body, metadata, image descriptions, source
annotations and all six visible/structured FAQ answers in each language. The
frozen snapshot from October 20 still matches the current source on October 21;
it was not overwritten or reindexed. These are translations of the US research
assessment, not new local coffee experiments.

The task has 63 missing slots / 51 distinct strings. Its authored JSON has 48
complete translations and three proper-name-only verbatim approvals. Import
adds 63 current cache entries per edition and changes no earlier cache text.
The concluding verdict retains its exact passing cached prefix before the new
closing sentence. URLs use the stable native `/koffiebonen/`, `/kaffeebohnen/`
and `/cafe-en-grains/` category prefixes with `verve-streetlevel/`; all earlier
URLs, including the approved Dutch espresso-dosing page, remain unchanged.

Verve's medium 6/10 is explicitly a roast scale, not a Coffeedant sensory score.
Honduras, Guatemala and Colombia are the checked blend's country-level record,
not a permanent farm list. Complete processing and variety details remain
unspecified. Clementine, red apple and honeycomb are attributed to Verve, and
older tasting/owner impressions cannot establish the current blend, consistency
or defect rate. All-purpose positioning does not mean one dose, ratio or grind
for filter and espresso; no measured Coffeedant extraction is invented.
Roasting to order and dispatch within two business days stay seller statements,
not delivery guarantees. The 6 oz / 12 oz / 2.2 lb / 5 lb formats and uncertain
US delivered total retain their original scope; no local price or offer is
fabricated. Original assets and source-link destinations are unchanged.

All 134 localization tests pass, including immutable-task coverage, factual
caveats, all structured answer pairs and stable routes for all 25 bean reviews.
Three whole-page noindex previews compare full main text, all schema and FAQs,
metadata, links, accessible labels, images/SVG, original scripts and localized
runtime. The separate production bundle is rebuilt and rechecked after API-free
analytics, Finder, video, brand-navigation and bean validators. These are
bounded rendered-output/runtime checks, not a browser session or tasting.

Current source remains 248 canonical pages / 50,367 unique slots. Each edition
has 78 ready regular pages plus 404. All 25 current bean reviews and all 17
Journal articles are now fully renderable in all three languages. The 149
Finder descriptions remain distinct with no unverified prices or offers.
Pending slots: NL 41,329; DE/FR 41,300 each. Most machine/grinder reviews and
other unfinished sections remain; none of the full editions is complete.
Retain incremental ready-pages publication and the continuation. Merge only
after exact-head/current-base checks pass, then verify the automatic production
deployment, three new live pages, manifests and all 234 regular sitemap URLs,
TLS, indexability, language/canonical/hreflang, Dutch dosing and subsequent
English return links. No paid translation API, Amazon API, credentials, billing,
DNS changes or subagents are used for this direct batch.

## Direct batch 38 — regular/decaf grinder guide and current bean updates (2026-10-21)

Directly translated the complete regular/decaf grinder-switching guide in
Netherlands Dutch, Germany German and France French: 1,776 source main words,
66 paragraphs, the complete five-row comparison, four product cards, ten
annotated sources and seven visible/structured FAQ answers per edition. Also
translated every current addition to Fast Forward, Gradient, Even Keel, Eye of
the Tiger and Equator Blend after preserving the October 21 source refresh
from PR #182. The five changed bean reviews are again fully renderable, not
older translations served as if current. No English source text was changed.

The immutable task contains 156 missing slots / 132 distinct strings, authored
as 131 complete translations and one proper-model-name verbatim approval.
Exact-source reuse across kinds adds 159 current cache entries per edition.
All earlier cache text stays unchanged, including the two reused passing
labels. New guide URLs are `/koffiemolen/wisselen-gewone-cafeinevrije-koffie/`,
`/kaffeemuehle/wechsel-normal-entkoffeiniert/` and
`/moulin-a-cafe/alterner-cafe-normal-decafeine/`. The existing French Equator
route and reviewed Dutch dosing URL remain unchanged, as do all older routes.

The guide separates dose-in/output difference, internal retained coffee and
old grounds exchanged into a later dose. Eureka's 0.55 g and Kaffeemacher's
1.8 g retain their separate methods; no caffeine percentage or zero-carryover
promise is inferred. Exact models, 65 mm burrs, 0–10 dial, electrical cleaning
precautions, manual effort and dated US 110 V / $499 / $199.95 context remain.
No current local price, model equivalence or Coffeedant grinding/tasting/test
claim is invented. Tables, accessible/mobile labels, complete metadata, image
credits, source links, scripts and runtime interface are included.

Current bean additions retain Fast Forward's October 19–Present uncertainty;
Gradient's separate 63 g / 1 litre and Kalita 30 g / 500 g / 3:30–4:00 starts;
Even Keel's explicit 50 g versus 45 g / 800 g recipe conflict with unmeasured
caffeine; Equator Blend's distinct drip/Clara/V60 methods; and Eye of the
Tiger's Bialetti/AeroPress starts rather than transplanted espresso yields.
These are source-attributed recipe clarifications, not new local experiments.

Validation includes 137 localization tests, API-free analytics, Finder, video,
brand-navigation and bean checks, full US and regional production builds and
18 whole-page checks in each preview/production pass. Whole main text, all
structured-data graphs and FAQs, metadata, links, table cells, accessibility,
unchanged images/SVG and original scripts/localized runtime are compared.
These are bounded rendered-output/runtime checks, not a browser session.

Current coverage is 248 source pages / 50,404 unique slots. Each edition has
79 ready regular pages plus 404, including all 25 current bean reviews and all
17 Journal articles. Finder remains 149 distinct records with no unverified
prices or offers. Pending slots are NL 41,207 and DE/FR 41,178 each; the full
editions are still incomplete. Retain ready-pages publication and continuation.
After exact-head green checks and merge, verify the exact production release,
all 18 affected live pages, manifests and all 237 regular sitemap URLs, TLS,
language/canonical/indexability/hreflang, preserved Dutch dosing and English
return links. No paid translation API, Amazon API/credentials, billing or DNS
changes, or subagents are used for this direct batch.

## Direct batch 39 — complete methodology page (2026-10-21)

Directly translated the complete current `/testing/` page into Netherlands
Dutch, Germany German and France French: 3,873 source main words and all 92
paragraphs, plus lists, headings, navigation labels, metadata and five complete
visible methodology FAQ pairs. The source has Organization, WebSite, WebPage
and BreadcrumbList graphs, not a FAQPage graph; their existing structure is
preserved rather than inventing additional structured testing claims.

The immutable task has 352 missing slots / 348 distinct strings, covered by
346 complete authored translations and two verbatim source placeholder tokens:
`[PRODUCT BOX]` and `[PRODUCT RATING]`. Both tokens also remain exact inside
surrounding translated sentences. Import adds 352 current cache entries per
edition, with no previous cache text changed. New stable routes are
`/testmethode/`, `/testmethodik/` and `/methodologie/`. The approved Dutch dosing
URL and every earlier localized route remain unchanged.

This is a faithful translation of the existing US methodology publication,
including its legacy first-person bench protocols, not an independent audit
of those claims or evidence of new tests in NL/DE/FR. No test results, local
experiments, regional model equivalence or local prices were invented. Water
chemistry, CaCO3/TDS/pH, 230 V and 120 V references, temperatures, doses/yields,
milk volumes, timing, 100-point category weights, unit-level caveats and stock
configuration/firmware qualifications retain their original source scope.
The complete panel, blind-test, stress/reliability, scoring, comparison and
home-reproduction sections are included without replacing them with summaries.

All 142 localization tests pass. Three whole-page noindex previews compare
the full main text and paragraph count, all existing schema, metadata, links,
accessible labels, original scripts and localized runtime. The separate full
production bundle is rebuilt and checked after API-free analytics, Finder,
video, brand-navigation and bean validation. These are rendered-output/runtime
checks, not a browser session or coffee equipment experiment.

The production audit found that the regional bundle indexed raw Astro HTML
before the US SEO step. Pages without a hero could therefore regenerate the
English default social-image description after translation. The bundle and
the standalone `--astro` path now prepare canonical US SEO before source
indexing, so generated metadata/schema text participates in translation and
ready-page validation. An isolated helper plus two regression tests cover
default alt/caption translation in all three locales and stable source hashes.
The US editorial source is unchanged. Production checks also compare metadata,
social captions and complete canonical source hashes across all emitted pages.

Coverage remains 248 current source pages / 50,404 unique slots. Each edition
has 80 complete regular pages plus 404, including all 25 current bean reviews
and all 17 Journal articles. Finder remains 149 distinct records with no
unverified prices or buying offers. Pending slots are NL 40,855 and DE/FR
40,826 each. Full editions remain unfinished; keep ready-pages publication
and continuation. After exact-head green checks and merge, verify the exact
production deployment, three live methodology pages, matching manifests and
all 240 regular sitemap URLs, TLS, language/canonical/indexability/reciprocal
hreflang, preserved Dutch dosing and corresponding English return links.
No paid translation API, Amazon API/credentials, billing or DNS changes,
or subagents are used for this direct batch.

## Direct batch 40 — complete prosumer under-$1,000 guide (2026-10-21)

Directly translated the entire current `/espresso-machine/prosumer-under-1000/`
buying guide into Netherlands Dutch, Germany German and France French: all
5,447 source main words, 154 paragraphs, both four-machine comparison tables,
four documented operating schematics and bounded owner accounts, eight full
visible and structured FAQ pairs, citations, video/accessibility labels,
metadata and all existing structured data. The source is research-led and
explicitly not a Coffeedant physical side-by-side test; those limits remain
clear in every language. Owner anecdotes do not become reliability statistics,
modified machines do not become factory specifications, and illustration
credits do not become Coffeedant test photographs.

The frozen task has 341 missing slots / 307 distinct strings. Its 305 complete
authored translations retain only the exact model `Gaggia Classic Pro E24` and
creator name `Cabeen’s Coffee Corner` verbatim. The four existing DE/FR labels
are reused exactly. Import adds 343 current NL entries and 339 each in DE/FR,
including exact wording reused across source kinds, with zero previous cache
text changes. Existing NL `/prosumer-espresso-machines-onder-1000/` and DE
`/prosumer-espresso-maschinen-unter-1000/` routes stay fixed; FR receives
`/machines-expresso-prosumer-moins-de-1000/`. Earlier routes, including the
approved Dutch dosing URL, remain unchanged.

The dated US $1,000 machine-only cap, all source prices, the separate €549 EU
reference, boiler sizes and electrical identities remain source facts, not
new regional offers or converted prices. North American E24 is not the coated
2023 Evo; 230 V EU PL41TEM is not silently equated to 120 V US PESAN06;
Silvia V6 is not Silvia Pro X; current Flair Plus 2 is not an earlier 58/Plus.
All four require separate grinders, single-boiler milk remains sequential,
Flair still needs a kettle and separate milk equipment, and warranty/water/
electrical-modification qualifications remain complete. No local tests,
retailer eligibility, current offers or price refresh were invented.

All 146 localization tests and seven SEO tests pass. Whole-page noindex previews
compare complete main text, all 154 paragraphs, native metadata, all schema,
eight FAQ pairs, original executable scripts, translated runtime, links,
accessible attributes and unchanged image/SVG geometry. The embedded Finder
is checked with its existing disabled regional budget control and native
no-price explanation, not the source's US budget bands. The separate full
production bundle receives the same whole-page checks and the all-page
canonical source-hash/social-metadata audit after API-free analytics, Finder,
video, brand-navigation, bean and SEO validation. Nine complete current pages
pass in each preview/production audit, including both refreshed hubs. All 246
emitted HTML pages pass canonical hash and native social-metadata/caption
checks. The actual compiled schematic handler passes 18 brew/steam clicks
across three languages: native labels stay fixed while pressed/hidden states
switch correctly; manual-lever diagrams retain no fictional steam controls.
Production image schema captions are compared with their actual native visible
figure text and unchanged regional asset, as generated by SEO. These are
generated-output and runtime checks, not a browser session or equipment experiment.

The concurrent October 21 MOVE/five-bean/French-press source publication was
preserved by rebasing onto `be6ce3a`. Cache conflicts were resolved by retaining
every upstream record and adding only this batch's records, without changing
previous wording. A separate frozen 29-slot refresh supplies all five new bean
excerpts and identity-image labels, French-press guide promotion and current
eight-review Profitec metadata. These shared-page translations restore the
complete coffee-bean and Profitec hubs; they do not claim the new article bodies
are translated. A new zero-missing guide snapshot records its current full-page
hash after global navigation changed. Original snapshots were not overwritten;
every original authored slot is still current and the complete guide is rechecked.
The combined batch adds 378 NL and 374 DE/FR cache entries, all previous texts
unchanged. The upstream directly translated current MOVE Finder record is retained.

Coverage is now 255 current canonical source pages / 51,150 unique slots.
Each edition has 81 complete regular pages plus 404, including the earlier 25
bean reviews and all 17 Journal articles. Five new bean reviews, the French-press
guide and MOVE article remain queued. Pending slots are NL 41,215 and DE/FR
41,190 each. Finder remains 150 distinct records, with no unverified prices
or local buying offers. Full editions remain unfinished: retain ready-pages
publication and continuation. Merge only an exact green head on current main;
then verify the production deployment, three whole live guides, matching
manifests, all 243 regular sitemap URLs, preserved Dutch dosing, TLS, language,
canonical, indexability and reciprocal regional/English language links.
No Amazon API/credentials, paid translation API, billing, DNS changes or
subagents are used for this direct batch.

## Direct batch 41 — Giant Steps and Night Light Decaf (2026-10-21)

Directly translated both complete current Blue Bottle reviews in NL/DE/FR:
Giant Steps (1,513 source main words / 46 paragraphs) and Night Light Decaf
(1,539 words / 46 paragraphs). All seven visible and structured FAQ pairs per
article, source/copyright labels, accessible text, metadata and existing schema
are included. These remain research-led US assessments, not Coffeedant purchases,
brews, tastings, measurements or photographs. No numeric sensory score, measured
caffeine result, delivered price or discount was invented.

The immutable missing-slot task has 155 slots / 126 distinct strings. Its 122
complete authored translations retain only four exact brand/product names
verbatim. Import adds 157 current entries per edition, reusing the same passing
wording across source kinds; every earlier cache text remains unchanged.
Native routes use `/koffiebonen/`, `/kaffeebohnen/` and `/cafe-en-grains/` with
the stable `blue-bottle-giant-steps` / `blue-bottle-night-light-decaf` model
slugs. Earlier routes, including the reviewed Dutch dosing URL, stay fixed.

Giant Steps keeps the roaster's 1:13 press-with-milk suggestion, the separate
27 g / 350 g pour-over recipe and the explicit 30 g / 390 g mathematical
example, not a Coffeedant-tested recipe. The 2019 Coffee Cantata sample is
bounded by its own bag, grinder and method. Night Light keeps both the US
medium label and darker descriptive wording, an unnamed proprietary water
process, no exact product-specific brew ratio, nonzero-caffeine uncertainty
and no clinical sleep/tolerance claim. Its 2026 Japanese 200 g sample and one
self-selected latte report do not become representative US results. Both
Korean 250 g package images remain identified as illustrations, not the US
12 oz sale units or evidence of a delivered roast date.

All 149 localization tests and seven SEO tests pass. Six complete noindex
previews compare entire main text and paragraphs, all schema and seven FAQ
pairs, native metadata, unchanged scripts, localized runtime, accessible
attributes, images/SVG geometry and links. A separate zero-missing snapshot
records the final canonical page hashes after US SEO preparation; the original
missing-slot snapshot is preserved and every original authored slot is checked
against current source. All six complete production pages also pass, together
with all 252 emitted HTML metadata/social-caption/canonical-hash checks after API-free
analytics, Finder, video, brand-navigation, bean and SEO validation. These are
generated-output/runtime checks, not a browser session or coffee experiment.

The source remains 255 canonical pages / 51,150 unique slots. Each edition now
has 83 complete regular pages plus 404, including 27 of 30 current bean reviews
and all 17 Journal articles. Pending slots are NL 41,058 and DE/FR 41,033 each.
Finder remains 150 distinct records with no unverified local prices or offers.
Three other new Blue Bottle reviews, the French-press guide, MOVE article and
substantial earlier source content remain queued. Keep full-edition completion
false, ready-pages publication and hourly continuation. Merge only an exact
green head on current main, then verify the automatic production deployment,
six whole live pages, manifests, all 249 regular sitemap URLs, assets, TLS,
language, canonical/indexability, preserved Dutch sample and reciprocal
regional/English language links. No Amazon API/credentials, paid translation
API, billing, DNS changes or subagents are used for this direct batch.

### Concurrent video-watch publication: scoped batch-41 refresh

After PR #187 merged green, independent commit `4d10696` added 393 English
video-watch pages and replaced embedded-video buttons with popup/watch links.
Its newer workflow superseded the original main CI run. Preserve that feature,
the subsequent release update and validator fix (`1800dbb`); do not revert them
or claim the pre-update bundle is the current full-source release.

A separate frozen 15-slot direct task covers only the new accessibility/poster
labels needed by the 83 already translated regular pages plus 404, and the
video-close runtime key. Native article-title alternatives and video-title
wording reuse the passing cache; cited creator names and identified video
titles stay exact. The popup close initializer now reads the validated native
runtime UI, while US behavior remains unchanged. Links to untranslated watch
pages remain ordinary cross-origin English-source navigation: the popup must
not fetch and display English watch content inside a regional page.

All 151 localization tests and nine SEO tests pass, including native close
initialization, US/malformed-data defaults and the existing cross-origin guard.
The source now has 648 canonical pages / 55,161 unique slots, including the 393
new watch pages, which remain queued rather than falsely published as regional
translations. All original 83 complete regular routes per edition are retained.
Twenty-seven complete current production pages are compared (the two new bean
reviews and seven affected earlier reviews in each language), together with
all 252 emitted HTML metadata/source hashes. API-free analytics validates 648
content pages plus 16 redirect fallbacks; the 393 watch pages/video sitemap,
150 Finder records, six grinders, 41 brands / 158 reviews and 30 bean records
pass their current validators. Pending slots are NL 45,061 and DE/FR 45,036 each.
The earlier 255-page counts above describe the initial reviewed batch checkpoint,
not completion of the expanded site. Keep all full-edition flags false and the
hourly continuation active. Verify the latest exact production commit, all 27
affected live pages, 249 regional sitemap URLs, assets and corresponding English
language links after merging the scoped refresh; do not publish any partial
watch page or change billing, Amazon API state or DNS.

## Direct batch 42 — complete 17ft Ceiling and Hayes Valley (2026-10-21)

Directly translated both complete current Blue Bottle espresso reviews into
Netherlands Dutch, Germany German and France French. 17ft Ceiling contains
1,463 source main words and Hayes Valley 1,562; each has 46 paragraphs and
seven full visible/structured FAQ pairs. Complete bodies, metadata, accessible
labels, product/image descriptions, source notes and existing schema are included.
These remain research-led US assessments, not new Coffeedant purchases, brewing,
tasting, measurements or photographs. No sensory score or local offer is invented.

The immutable task freezes 126 missing slots / 100 distinct source strings.
Its 96 full three-language translations preserve only four exact product names
verbatim. Import adds 126 current cache entries per edition with zero previous
cache text changed. The newer automatic cache update `9dc10f7` is retained.
NL and DE use their native bean-category prefixes with the unchanged coffee
slugs. The already registered French URLs remain
`/blue-bottle-17ft-ceiling-espresso/` and `/blue-bottle-hayes-valley-espresso/`;
they are not silently moved into another category. Every prior ready route,
especially the approved Dutch dosing URL, remains stable.

17ft retains its declared fine robusta, unknown current proportions/farms and
classic short-shot role; it is not equated with Hayes Valley's washed organic
Americas identity. Roaster crema/acidity descriptions are not measurements or
proof of quality. Both keep the generic 27 g / 350 g pour-over recipe separate
from a portafilter dose, with no invented universal home ristretto yield.
Hayes Valley retains its orange note, bounded older Coffee Cantata/owner
accounts, milk-volume guidance and roughly nineteen theoretical 18 g doses
from the pictured 12 oz format before dial-in waste. Packaging is not a current
lot/roast-date certificate; neither review claims a verified delivered US price
or discount, much less a converted regional offer.

All 154 localization tests and nine SEO tests pass. Six complete noindex
previews compare full main text, paragraphs, seven FAQ pairs per article,
all schema/metadata, accessible labels, original images/SVG, scripts and native
runtime. API-free analytics validates 648 content pages plus 16 redirects;
Finder (150 distinct records/six grinders), videos (393 watch pages), brands,
beans and source SEO validation pass. The separate full regional production
bundle and all six whole-page checks pass, as do all 258 emitted HTML
source-hash/social-metadata/caption checks. These are bounded generated-output
and runtime checks, not a browser session. After exact-head green merge verify
exact production, all six whole live reviews,
manifests, all 255 regular sitemap URLs, assets, language/canonical/indexability,
reciprocal regional/English links and the unchanged Dutch dosing page.

Coverage is 648 canonical source pages / 55,161 unique slots, with 85 complete
regular pages plus 404 per edition, including 29/30 bean reviews and all 17
Journal articles. Pending slots are NL 44,935 and DE/FR 44,910 each, Finder
pending zero. Bella Donovan, the French-press guide, MOVE and substantial
older content/watch pages remain queued. Full editions remain incomplete;
keep ready-pages publication and continuation active. No Amazon API/credentials,
paid translation API, billing, DNS changes or subagents are used in this batch.

## Direct batch 43 — complete French-press guide and Bella Donovan (2026-10-21)

Directly translated the entire current French-press bean guide and Bella
Donovan review into NL/DE/FR. The guide contains 2,064 source main words and
71 paragraphs, all five explanatory sections, both comparison tables, four
full cards, nine source notes and seven visible/structured FAQ pairs. Bella
Donovan has 1,460 words / 46 paragraphs and seven full FAQ pairs. Headers,
metadata, accessible labels, image descriptions and all original schema are
included, without replacing bodies with summaries or inventing local testing.

The frozen task has 195 missing slots / 164 distinct strings. Its 162 complete
translations retain only two exact coffee names verbatim. Import adds 195
entries per edition and changes no prior cached text. Earlier ready routes and
the approved Dutch dosing URL stay fixed. New Dutch guide URL is
`/koffiebonen/beste-koffiebonen-voor-cafetiere/`; existing DE
`/kaffeebohnen/beste-kaffeebohnen-fuer-french-press/` and FR
`/meilleurs-cafes-pour-presse-francaise/` stay unchanged. Bella Donovan uses
native NL/DE bean prefixes and the existing FR `/blue-bottle-bella-donovan/`.

The guide keeps Giant Steps' 1:13 / thirty grams to 390 grams distinct from
Equator's approximately 1:15 / 30 g to 450 g arithmetic. Neither is a measured
Coffeedant extraction; Peet's and Night Light receive no fabricated precise
press ratio. Water-decaf does not mean measured zero caffeine, mesh filtering
does not remove all fruit or sediment, and the 12 oz / approximately 340 g /
eleven theoretical 30 g brews remain qualified before dial-in waste. Korean
250 g illustrations and the 2026 Japanese sample retain their regional limits.
No unverified delivered-price ranking or discount is invented.

Bella Donovan preserves its partial natural Ethiopian component, unknown
remaining origins/proportions/varieties, US dark/organic labeling versus a
different Canadian label, and the sample-specific 2017 Coffee Cantata press
counterexample. Moka-Java inspiration is not a fixed Yemen/Java recipe, an
espresso ratio or proof of shared farms with Peet's Arabian Mocha-Java. The
27 g / 350 g pour-over sequence stays separate from press handling. All taste
descriptors remain attributed; no Coffeedant purchase, brewing, tasting,
measurement, photography, score or verified price/discount is claimed.

157 localization tests and nine SEO tests pass. API-free source build,
analytics/consent, Finder (150 distinct records and six grinders), videos,
beans, brand-navigation and source SEO checks pass. Six complete noindex
previews compare entire bodies and paragraph counts, all schema and FAQs,
metadata/accessibility, original links, scripts/runtime, images and SVG.
Additional guide checks compare six complete tables, twelve complete cards,
accessible scrolling regions and twelve ready localized review destinations
across three editions. The separate full production bundle, all six whole-page
checks and the same table/card/destination checks also pass; all 264 emitted
HTML pages pass current canonical hash/social metadata/caption checks. Merge
only an exact green head against current main, then
verify live production, all six whole pages, manifests, all 261 regular sitemap
URLs, assets, TLS/lang/canonicals/indexability, stable Dutch dosing and reciprocal
regional/English links. These are bounded generated-output/runtime/HTTP checks,
not a new browser session or physical coffee test.

Current source remains 648 canonical pages / 55,161 unique slots. Each edition
has 87 complete regular pages plus 404, including all 30 current bean reviews,
all five bean buying guides and all 17 Journal articles. Pending slots: NL
44,740, DE/FR 44,715 each;
Finder pending zero. MOVE, machine/grinder reviews and substantial other
source/watch content remain queued. Full editions remain incomplete. Keep
ready-pages publication and continuation active. No Amazon API/credentials,
paid translation API, billing, DNS changes or subagents are used in this batch.

## Direct batch 44 — complete bean-video watch companions (2026-10-21)

Directly completed all eight current coffee-bean video watch pages in NL/DE/FR:
Big Trouble, Fast Forward, Hologram, Black Cat Classic, Big Bang, both French
Roast perspectives and Hair Bender. These are complete short watch companions
(604 combined source main words, 33 paragraphs), not eight new long-form coffee
reviews. All ownership/curation copy, summaries, affiliate disclosure, visible
dates, navigation, accessibility, metadata and ItemPage/VideoObject/Breadcrumb
prose are covered. Existing approved cited video titles remain attributed names;
original creator identities, channel links, video IDs and media are preserved.
The original third-party recordings are not dubbed or claimed as local-language
audio, and no Coffeedant brewing, tasting or production evidence is invented.

The immutable task contains 108 missing slots / 73 distinct strings. Its 72
explicit three-language entries retain only creator name `Live with Irish`
verbatim. Import adds 108 entries per edition, zero prior cache text changes.
New NL paths use their translated bean parents and original creator slugs;
all previously registered DE/FR watch paths remain fixed, including their
existing creator-slug spellings. The approved Dutch dosing route and all earlier
ready pages are retained. Generic watch navigation/credit labels are reusable
for future watch pages; the unfinished video library still opens its English
source with the regional notice and original model-filter identifier.

The 2020 Big Bang sample remains limited to that older bag, not current blend,
freshness, packaging or a Coffeedant tasting. Original upload timestamps,
durations, player/thumbnail URLs and iframe attributes stay exact. Source title
date prefixes and UTC-formatted visible dates are both retained, even when the
source timestamp crosses a UTC calendar boundary; no dates are silently guessed.
Video schema receives no invented dubbing or spoken-language claim.

160 localization tests and nine SEO tests pass, as do the API-free source build,
analytics/consent, Finder, video, bean, brand and SEO validators. Twenty-four
whole-page noindex previews and twenty-four separate production checks compare
complete bodies, all 33 paragraphs per edition, schema, metadata, accessibility,
unchanged player/media fields, scripts, links and native runtime. All 288 emitted
HTML pages pass canonical source-hash/native social metadata/caption checks.
Production bindings verify 24 native standalone players, 42 same-origin popup
links from seven existing reviews per edition, all 24 video-sitemap URLs and
English-source links to the unfinished library. The actual TypeScript popup
handler is compiled and executed in bounded VM fixtures for all three locales:
native content/head/history, translated close label, focus restoration, iframe
removal and unmodified cross-origin/modified-click behavior pass. These are
generated-output/runtime checks, not a new browser session or video dubbing.

Current source remains 648 canonical pages / 55,161 unique slots. Each edition
has 95 complete canonical pages excluding 404: 87 earlier articles/supporting
pages plus eight watch companions. All 30 bean reviews, five bean guides and
17 Journal articles remain ready. Pending slots are NL 44,632 and DE/FR 44,607
each; Finder pending zero. The other 385 watch pages, MOVE, machine/grinder
reviews and substantial other source content remain queued; full editions are
not complete. Keep ready-pages publication and continuation. After exact-head
green merge verify exact production, all 24 whole live watch pages, manifests,
all 285 sitemap URLs, video sitemaps, all 42 native parent links, assets, TLS,
language/canonicals/indexability, Dutch dosing and reciprocal English links.
No Amazon API/credentials, paid translation API, billing, DNS changes or
subagents are used in this batch.

## Direct batch 45 — complete beginner espresso-machine guide (2026-10-21)

Directly translated the entire current beginner espresso-machine buying guide
into NL/DE/FR: 5,507 source main words, 157 paragraphs, both complete comparison
tables, four recommendation cards, four documented product schematics and all
eight visible/structured FAQ pairs. Full methodology, ownership costs, first-week
plan, attributed owner evidence, source annotations, metadata and accessible
controls are included. Earlier approved shared wording is reused, not replaced
by summaries. The immutable task contains 259 missing slots / 233 distinct
strings; 222 explicit three-language translations preserve eleven exact model,
brand, technical-identifier or creator labels. Import adds 260 current entries
per edition across source kinds, with zero previous cache wording changed.

Already registered routes remain `/espresso-machine/beginners/` (NL),
`/espresso-maschine/anfaenger/` (DE) and
`/machine-a-espresso/debutants/` (FR). No old ready URL is renamed, especially
the approved Dutch dosing route. The four exact US/North American models remain
BES500, Classic Pro E24, BES870XL and ECAM29084SB; regional Sage siblings,
older Evo generations and Canadian owner reports are not relabeled as those
models. Historical dollar observations retain their September 25, 2026 context,
not converted local prices or new offers. The E24 brass boiler is not the 2023
coated Evo boiler. Fast heater readiness does not warm the whole station;
brewing and steaming remain sequential, and automatic milk still needs cleaning.
Neither anecdotal cup temperatures nor mixed-generation upgrade reports become
controlled measurements, reliability rates or Coffeedant physical testing.

163 localization tests and nine SEO tests pass. API-free source build,
analytics/consent, Finder (150 distinct records and six grinders), videos, beans,
brand navigation and source SEO validators pass. Three entire noindex previews
compare the full body, all paragraphs, tables, schema/FAQ answers, metadata,
accessible labels, unchanged images/SVG, source links and executable scripts.
The embedded Finder retains its native no-price notice and disabled unsupported
US budget bands, rather than falsely offering converted local budgets. Actual
compiled schematic code is executed against the three native outputs: four
schematics per edition, three selectable systems and six brew/steam clicks
retain translated labels while updating pressed/hidden states. These are bounded
generated-output/runtime checks, not a new browser or physical machine test.
The separate full production bundle, three entire production-page checks,
compiled schematic runtime checks and all 291 emitted HTML source-hash/social
metadata checks pass. Merge only after exact-head green CI. After merge verify
production manifests, all three complete live
guides, all 288 canonical sitemap URLs, eight video-sitemap entries per edition,
assets, TLS/lang/canonicals/indexability, stable Dutch dosing and reciprocal
regional/English links.

Current source remains 648 canonical pages / 55,161 unique slots. Each edition
has 96 complete canonical pages excluding 404: 88 articles/support pages plus
eight watch companions. NL has 10,789 translated / 44,372 pending slots; DE/FR
have 10,814 translated / 44,347 pending each. Finder gaps remain zero. MOVE,
remaining machine/grinder reviews and guides, the other 385 watch pages and
substantial other source content remain queued. Full editions are incomplete;
retain ready-pages publication and continuation. No Amazon API/credentials,
paid translation API, billing, DNS changes or subagents are used by this batch.

## Direct batch 46 — complete under-$500 machine guide (2026-10-21)

Directly translated the full current budget espresso-machine guide into
NL/DE/FR. The raw source main contains 6,135 words; the existing regional
commerce policy removes only the US Amazon listing anchor, leaving 6,131
prepared source words and all 161 paragraphs. No article paragraph is removed
or summarized. Both complete comparison tables, four picks, four product
schematics, owner evidence, maintenance/safety/first-week instructions,
methodology, source annotations and all eight visible/structured FAQ pairs
are included, with metadata and accessible labels.

The immutable task has 245 missing slots / 218 distinct strings. Its 212
complete three-language translations preserve six exact brand/model/source
labels; import adds 246 current cache entries per edition across source kinds
with zero previous text changes. New NL route is
`/espressomachines-onder-500/`. Existing DE
`/espresso-maschine/billig-budget-unter-500/` and FR
`/machine-a-espresso/meilleures-machines-a-espresso-pas-cheres-moins-de-500/`
remain fixed, as do all earlier ready URLs and the reviewed Dutch dosing page.

The $500 limit remains machine-only, before tax and optional accessories;
it is not a converted regional budget or a complete-station promise. Dated
$499.95/$169.95/$159/$259 US observations and the September 17/23/25 checks
retain their distinct context. ECP3420 US 120 V is not a European 230 V
Espresso Evolution or another Dedica generation. Current Flair gauge/two-filter
contents are not assigned to older owner reports; ROK Black PLUS is not assumed
to equal an Explorer bundle. The £500 independent video remains a 2020
comparison, not current US pricing. Pump maximum is not brew-pressure quality;
manual presses still need external hot water, and the included ROK hand
frother is not a steam wand. No local listing, warranty, measured lifespan,
defect rate or Coffeedant physical test is invented. Electrical/pressure
repair and hot-head cooling warnings remain explicit.

166 localization tests and nine SEO tests pass, with API-free source build,
analytics/consent, Finder (150 distinct records/six grinders), video, bean,
brand-navigation and source SEO validators. Three full noindex previews compare
all text/161 paragraphs, schema/FAQ answers, metadata, accessible attributes,
unchanged images/SVG, scripts/native runtime and source links. A specific
check confirms that only the unsupported US listing anchor is removed, not
any paragraph. Compiled schematic code passes four brew/steam clicks per
edition across two selectable pump systems and two manual systems, preserving
native labels and pressed/hidden state. The separate full production bundle,
three whole-page/runtime checks and all 294 emitted HTML metadata/source-hash
checks pass; merge only exact-head green CI. Then verify production,
three complete live guides, all 291 canonical sitemap URLs, 24 existing
video-sitemap entries, native hub links, assets, TLS/lang/canonicals/indexability,
stable Dutch dosing and reciprocal regional/English links. These are bounded
generated-output/runtime/HTTP checks, not a new browser or physical machine test.

The prior beginner-guide deployment recovered after GitHub's webhook incident:
exact merge `be3d07c` deployed to regional Pages as
`bd5f6b45-38e5-49ae-aed7-64efdf128105`. Three whole live guides, all 288 sitemap
URLs and native hub links passed. Automatic confirmation committed the same
verified 96-route release record as `870cf15`; it is preserved, not duplicated,
so the English site can add corresponding-page links. It does not announce
the still-unpublished budget page. Keep ready counts separate
from live counts until the deployment audit passes.

Current source is still 648 canonical pages / 55,161 unique slots. This batch
readies 97 complete canonical pages per edition (+404): 89 articles/support
pages and eight watch companions. NL has 11,035 translated / 44,126 pending;
DE/FR have 11,060 translated / 44,101 pending each. Finder gaps are zero.
The full editions remain incomplete; MOVE, remaining machine/grinder content,
385 other watch pages and substantial other work remain queued. Preserve
ready-pages publication and continuation. No Amazon API/credentials, paid
translation API, billing, DNS changes or subagents are used.

## Direct batch 47 — complete integrated-grinder machine guide (2026-10-21)

Directly translated the entire current `/espresso-machine/built-in-grinder/`
guide into Netherlands Dutch, Germany German and France French. Its source
main contains 6,127 words and 162 paragraphs, with both comparison tables,
four complete recommendations, four product schematics, all owner evidence,
first-week and maintenance instructions, methodology, source annotations,
final verdict and eight visible/structured FAQ pairs. No source paragraph,
link or body qualification is removed or summarized. Metadata, accessible
labels and structured descriptions are included, not just the visible article.

The new immutable snapshot freezes 242 missing slots / 215 distinct strings.
The 206 directly authored three-language entries preserve nine exact model,
brand/SKU and video-work-title labels. Import adds 243 current cache entries
per edition across source kinds, with zero changes to previous cache text.
The new Dutch route is `/espressomachines-met-molen/`; existing German
`/espresso-maschine/eingebaute-mahlmuhle/` and French
`/machine-a-espresso/machine-a-espresso-avec-broyeur/` stay fixed. All previous
ready routes and the reviewed `/journal/espresso-doseren/` are preserved.

The exact US/North American BES878, BES876, ECAM29084SB and fifth-generation
JURA E8 article 15722 remain distinct. Sage names, other Magnifica panels and
older E8 owner accounts do not establish regional model equivalence. The
dated September 25 $849.95/$799.95/$899.95/$2,599 references remain US source
facts; the E8 retailer reference was unavailable when checked. Manual milk,
assisted dosing/tamping and actual bean-to-cup work remain separate. The
grinder-running adjustment requirement, dry grinder parts, non-removable JURA
brew unit, daily milk cleaning and exact voltage/manual/return checks remain
explicit. Owner anecdotes do not become measured failure rates, unsupported
dose/pressure claims or a Coffeedant physical comparison test. The independent
2022 video retains its creator, title, media and historical-specification limits.

169 localization tests and nine SEO tests pass. API-free source build,
analytics/consent, production-target Finder (150 distinct records/six grinders),
video, bean and brand-navigation checks pass. Three full noindex previews
compare the complete main, 162 paragraphs, all schema/FAQ answers, metadata,
accessible attributes, source links, images/SVG and unchanged scripts/native
runtime. The separate production bundle must pass the same whole-page checks,
all 297 emitted HTML metadata/source hashes and the actual compiled controls:
four brew/steam clicks per edition across the two selectable semi-automatics,
plus the two fixed automatic schematics. Publish only after exact-head green
CI, then verify the three whole live guides, all 294 canonical sitemap URLs,
24 existing video-sitemap entries, native hub links, assets, TLS/language,
canonicals/indexability and reciprocal regional/English language links.
These checks concern generated output/runtime/HTTP, not physical products.

Batch 46 is now published and verified: merge `aea4bc2`, regional deployment
`ae94dba6-99b6-44cc-a3d6-dd9453a84315`, confirmation `3082848`. Its complete
three budget guides, all 291 sitemap URLs and English return links passed.
That establishes 97 live canonical pages per edition before this new batch;
do not confuse the newly ready guide with a verified live deployment yet.

The current source remains 648 canonical pages / 55,161 unique slots. This
batch readies 98 complete canonical pages per edition (+404): 90 article/support
pages and eight watch companions. NL has 11,278 translated / 43,883 pending;
DE/FR have 11,303 translated / 43,858 pending each. Finder gaps are zero.
All full editions remain incomplete. MOVE, most machine/grinder content,
385 other watch pages and substantial other content remain queued. Preserve
incremental ready-pages publication and the continuation. No Amazon API or
credentials, paid translation API, billing, DNS changes or subagents are used.

## Direct batch 48 — complete single-boiler machine guide (2026-10-22)

Directly translated the entire current `/espresso-machine/single-boiler/`
guide in NL/DE/FR: 6,078 source-main words, all 167 paragraphs, both comparison
tables, four complete recommendations and eight visible/structured FAQ pairs.
The full original-GO, Classic Pro E24, Silvia and Classika milk/ownership/workflow
sections, owner evidence, source annotations, first-week advice, methodology,
verdict, metadata, accessible labels and all four product schematics are included.
No article paragraph or source link is removed or summarized. Reused generic
milk/workflow/owner paragraphs also benefit other queued reviews without falsely
declaring those entire reviews translated.

The immutable snapshot contains 290 missing slots / 266 distinct source strings.
Its 255 three-language entries preserve eleven exact brand/model/source labels
and the independent video's title/creator. Import adds 296 current cache entries
per edition across source kinds, with zero previous text changes. New routes are
`/espressomachines-met-enkele-boiler/` (NL) and
`/machines-expresso-simple-chaudiere/` (FR); established DE
`/espresso-maschine/einzelkessel/`, all previous ready routes and the reviewed
Dutch dosing URL stay fixed. The concurrent automatic cache commit `ccaf30f`
only registered pending Dutch watch URLs; it is preserved, not counted as new
translated articles and not silently renamed.

The original US GO remains separate from the European GO 2.0, including June
2026 successor timing, 2025 running changes and conflicting electrical listings.
The 115 V/900 W record, original manual's steam purge/refill/cooling sequence,
full-reservoir-versus-full-boiler distinction and absence of simultaneous steam
remain explicit. E24's lead-free brass boiler is not the coated 2023 Evo; 110-120V
is not presented as a European electrical specification. Silvia's thermostat
routine and Classika's optional Flow Profile Valve retain their limits. Dated
September 15/18/23/24 US prices and retailer-specific warranty observations are
not converted regional offers. Hot discharge, qualified internal repair, water,
voltage and return-window cautions remain. Owner posts and the commercial
independent video do not establish Coffeedant tests, failure rates, lifespan or
universal two-drink service times.

Three focused factual/safety tests are added, bringing the suite to 172; nine
SEO tests and API-free analytics/consent, production-target Finder (150 distinct
records/six grinders), 393-watch video, 30-bean and 41-brand/158-review navigation
validators pass. Three complete noindex HTML/JSON previews compare every main
character, all FAQ/schema answers, metadata, links, accessible attributes,
images/SVG, unchanged scripts and native runtime. The separate full production
bundle must pass identical whole-guide checks, all 300 emitted HTML metadata/
source hashes and eight actual compiled brew/steam clicks per edition across
the four selectable schematics. Merge only exact-head green CI; then audit
the complete live guides, all 297 canonical sitemap URLs, 24 watch-sitemap
entries, assets, native hub links, TLS/language/canonicals/indexability, preserved
Dutch dosing and reciprocal regional/English links. These are output/runtime/
HTTP checks, not physical testing or a claim of dubbed video.

Batch 47 is published and fully verified: PR #194, merge `1026c44`, regional
deployment `aa49d62d-8809-4171-8cb2-b03abe84ca86`, confirmation `d45af95` and
confirmation regional deployment `c191be37-bf6c-49b2-a9d5-036fd7aa4202` all passed.
Its complete integrated-grinder guides, 294 sitemap URLs and English return
links passed after confirmation. This establishes 98 live canonical pages per
edition before the present batch; newly ready and verified-live counts remain
separate until this batch's actual production audit passes.

Current source remains 648 canonical pages / 55,161 unique slots. This batch
readies 99 canonical pages per edition (+404): 91 article/support pages and eight
watch companions. NL has 11,574 translated / 43,587 pending; DE/FR each have
11,599 translated / 43,562 pending. Finder gaps stay zero. Full editions remain
incomplete: 163 other non-watch pages and 385 watch pages are still queued.
Keep ready-pages publication and continuation. No Amazon API/credentials,
paid translation API, billing, DNS changes or subagents are used.

### Concurrent October 22 source refresh during batch 48

After the single-boiler guide merged, independent source commit `3f288b7`
refreshed ten reviews and the Finder's catalog-sync timestamp. It is preserved.
Four already-translated bean reviews gained new paragraphs, source annotations
and an October 22 date: Hologram, Major Dickason's, Hair Bender and Holler
Mountain. Their current-source gates correctly hold them until that new text
is translated; the new single-boiler guide itself remains complete. Do not
mistake a deployment queue skip for a translation or hosting failure.

The additional immutable `october22-published-refresh-batch-48` task directly
translates all 13 new distinct slots in NL/DE/FR, with no route edits or changes
to prior wording. It preserves Hologram's 1:17 versus 30 g/335 g/165 g flash-brew
distinction and warns that the detailed pours outlast the one-minute summary.
Major Dickason's broad origin/process categories are not farm traceability or
a fixed-country promise. Hair Bender's recurring subscription can be paused,
skipped or cancelled; it is not a verified discount or delivery promise. Holler
Mountain's 28 g/475 ml drip recipe is separate from roughly 19.5 g espresso,
without a universal basket-fit or Coffeedant brewing claim. Citation destinations
and complete policy sentences/negations stay intact.

All twelve complete refreshed review previews pass: 8,117 combined source-main
words / 216 paragraphs per edition, six visible/structured FAQ pairs per review,
all metadata, full-body text, source links, images/accessible attributes and
unchanged scripts/native runtime. Two new factual tests bring the suite to 174.
The full current-source production bundle and 300-HTML audit must pass before
the follow-up PR merges. These are whole-review checks, not a claim that only
the appended paragraphs constitute complete reviews. Verify final production,
all 99 canonical routes per edition and English reciprocal links after deployment.

Current source is now 648 canonical pages / 55,199 unique slots, not the earlier
55,161. The refresh adds 13 cache entries per edition and restores all 99 ready
canonical pages (+404), rather than inventing four new pages. NL has 11,587
translated / 43,612 pending; DE/FR each have 11,612 / 43,587 pending. The source
increase on other unfinished reviews is not translation regression. Finder gaps
remain zero, all old registered routes including pending watch routes stay fixed,
and full-edition completion remains false. Preserve incremental publishing and
continuation; no Amazon API, paid translation, billing or DNS changes are used.

The independent cold-brew publication `ce06067` then added five new bean
reviews and one buying guide while this preservation batch was running.
Normal merge `00e63c9` preserves that work, the subsequent pending Dutch URL
registrations (`247aa0c`) and the automatic removal of no-longer-current release
entries. No source changes or registered URLs are rolled back. A second frozen
task, `cold-brew-hub-preservation-batch-48`, translates all 25 missing hub slots
(20 distinct strings; 15 authored entries and five exact coffee names). The new
card descriptions, image alternatives, explicit US-price-check label, stock
warning and buying-guide introduction are native. The five new full reviews
and cold-brew guide remain queued, linked to their actual English source with
the edition notice; the native hub is not a claim of six new translated articles.

Together these two preservation tasks add 43 entries per edition versus the
latest incoming cache, with zero previous text edits and no route changes.
All eighteen current-source whole-page previews pass: four full refreshed reviews,
the entire 2,679-word/85-paragraph hub and the stable 6,078-word/167-paragraph
single-boiler guide in each language. Current-source regression coverage now
includes 175 localization tests and nine SEO tests. Production must repeat these
whole-page checks, all 300 emitted HTML metadata/source hashes and compiled
schematic controls before the preservation follow-up merges.

Current source is 654 canonical pages / 55,680 unique slots (653 indexable source
pages plus 404), not 648. After preserving current text, all 99 canonical regional
pages (+404) are ready: NL 11,617 translated / 44,063 pending, DE/FR each 11,642 /
44,038 pending. The growth in unfinished source is reported honestly, not treated
as lost translations. Finder remains 150 native no-price records. There are now
169 other non-watch pages and 385 watch pages pending; full editions are still
incomplete. The single-boiler publication is retained, not repeated as a new
page in this follow-up. Verify the actual final main deployment and reciprocal
links after merge and continue backfilling without per-page approval.

### Direct batch 49: two cold-brew reviews and current-source preservation (2026-10-29)

`cold-brew-bean-reviews-batch-49` directly translates both complete US reviews of
Blue Bottle Three Africas and Peet's Baridi Blend into NL/DE/FR. The frozen
snapshot has 149 slots / 120 distinct strings; 117 authored triples and three
explicit proper-name approvals cover it completely. The two full articles have
3,265 English source words, 92 paragraphs and fourteen FAQ answers per edition,
including metadata, photo attribution, source annotations and buying conclusions.
They are not shortened hub summaries. Routes use the existing `/koffiebonen/`,
`/kaffeebohnen/` and `/cafe-en-grains/` prefixes and the exact product slugs.

Three Africas retains the washed/natural Ethiopian and current Rwandan sourcing
qualifications, the distinction between a hot 27 g/350 g pour-over and cold
immersion, and no invented tasting or delivered price. Baridi retains the checked
sold-out warning, inconsistent broad origin descriptions, separate café drink
and dry-bean identities, and the limits of milk-and-syrup tasting evidence.

Intervening source publications and automatic cache updates were merged without
discarding their text or pending routes. `published-preservation-current-batch-49`
adds the 43-manufacturer directory labels and the new compact-grinder hub panel;
the unfinished compact-grinder guide still links to English. Passing German
directory wording is reused. `six-bean-current-refresh-batch-49` preserves six
previously translated full reviews after their October 26 source additions:
Bella Donovan, Hayes Valley Espresso, Geometry, Southern Weather, Big Bang and
Streetlevel. The complete brew masses, Fahrenheit ranges, recipe corrections,
subscription renewal/cancellation caveats and stock warnings remain source facts,
not local offers. Frozen earlier snapshots are unchanged. One newly automatic
German photo caption is replaced by the reviewed direct wording with its source
punctuation; no other existing cache text changes versus `471afdc`.

All thirty whole-page previews pass: eight complete reviews plus the brands and
grinder hubs in each language. Each edition preserves 14,710 source words,
449 paragraphs and 52 FAQ answers across those ten audited pages. The suite has
179 passing localization tests and nine passing SEO tests. API-free analytics
validation covers 657 content pages and sixteen redirect fallbacks; the Finder
has 151 unique native no-price records and seven grinder records. The brands
validator covers 43 brands and 160 unique review destinations.

Measured current coverage is 657 canonical source pages / 56,339 unique slots.
Each edition has 101 complete indexable pages plus its 404, including 32 of the
35 full bean reviews and eight watch companions. NL has 11,810 translated /
44,529 pending slots; DE 11,907 / 44,432; FR 11,835 / 44,504. There are 170 other
non-watch pages and 385 watch pages pending. All full-edition flags remain false.
Production must repeat the complete-page checks and all emitted metadata/hashes;
after a passing merge, verify the actual Pages deployment, live manifests,
sitemaps and English return links before calling this batch published.

#### Batch 49 concurrent pour-over hub preservation

After the two new reviews passed production and live checks, independent source
PR #203 added a pour-over buying-guide panel to `/coffee-beans/`. Its four new
strings are directly authored in `pour-over-hub-preservation-batch-49`, retaining
the source date and exact guide destination. The entire current bean hub is
2,714 source words / 87 paragraphs, not an abridged replacement. The new guide
itself is still queued: its hub link opens the actual English source with the
native edition notice. Existing cache wording and every registered URL remain
unchanged. The passing release-confirmation record and cache formatting from
main are preserved. This follow-up restores the hub's readiness after the source
addition; it is not an additional full translated buying guide or a full edition.

Regression coverage is now 180 localization tests and nine SEO tests. Thirty-three
whole current pages are checked across the three editions: the previous ten plus
the complete expanded bean hub. Analytics, all 35 source bean reviews and the
151-record no-price Finder plus seven grinder records pass API-free validation.
Production and live publication checks remain required for the follow-up merge.

The added source guide raises the inventory to 658 canonical pages / 56,451 slots.
Readiness remains 101 indexable pages plus 404 per edition. Current translated /
pending counts are NL 11,814 / 44,637, DE 11,911 / 44,540 and FR 11,839 / 44,612.
There are 171 non-watch pages and 385 watch pages still pending. The follow-up
adds four cache entries per edition with zero previous text or URL changes.

### Direct batch 50: Off the Grid and Sun Catcher (2026-10-29)

Batch 49 and its source-preservation follow-up are merged as PRs #202 and #204.
Their live checks passed, including the complete current native bean hub and
reciprocal English links. This next batch directly translates both full US
reviews of Peet's Off the Grid and Peet's Sun Catcher into NL/DE/FR, retaining
all six already registered regional URLs rather than generating replacements.

`peets-fruit-bean-reviews-batch-50` freezes 128 missing slots / 102 distinct
strings. Ninety-eight authored triples and four explicit proper-name approvals
cover the snapshot. The complete articles contain 3,138 source words,
92 paragraphs and fourteen FAQ answers per edition, with metadata, photo/source
attribution, evidence limits, comparisons and buying conclusions intact.

Off the Grid preserves washed Colombia/El Salvador, the attributed chocolate,
almond-butter and pear targets, separate cold-immersion and hot-filter methods,
the whole-bean versus 10.5 oz ground-pack distinction and no verified delivered
US price. Sun Catcher preserves Brazil/Kenya, incomplete assignment of natural
and washed components, its pour-over-first role, checked sold-out warning and
the limits of older/pre-ground samples. “Bright” remains an attributed flavor/
roast description, not an invented measured acidity, caffeine level or standard
light-roast classification. Neither page invents a Coffeedant tasting or local
offer. Previously passing common wording is reused; old snapshots are unchanged.

The two new regressions take the suite to 182 localization tests, with nine SEO
tests. All six whole-page previews pass, including complete main text, metadata,
all structured answers, accessible/image labels, original scripts and native
runtime. Production and live verification remain required before calling this
batch published. The validated current readiness is 103 complete
indexable pages plus 404 per edition, including 34 of the 35 full bean reviews.
The remaining Sermon review and unfinished buying guides are not claimed complete.
The source inventory remains 658 canonical pages / 56,451 slots. This import adds
128 entries per edition with no old text or URL changes: NL 11,942 translated /
44,509 pending, DE 12,039 / 44,412, FR 11,967 / 44,484. There are 169 non-watch
pages and 385 watch pages still pending; all full-edition flags remain false.

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
