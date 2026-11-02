# Lelit Elizabeth dashboard preview — November 2, 2026

## Scope

One English review at `/espresso-machine/lelit-elizabeth/`, based on the existing October 30 review and the current source checkout. The reviewed machine remains Elizabeth PL92T, with the US Product identity tied to PL92T-120. Elizabeth3 PL92T3 is a separate product. The feature branch is `codex/lelit-elizabeth-dashboard`; publication is a Cloudflare preview, not a production merge.

The shared route selects a dedicated dashboard only for this review. Other machine templates retain their existing layout. Dashboard CSS is scoped to its own classes. A preview-environment robots directive prevents indexing without changing production canonical identity.

## Experience

- A top decision dashboard combines the existing featured image, author/dates, editorial assessment, coffee/milk workflow, suitability, and consequential compromises.
- A native selector exposes four verified videos from three creators. Coffee Kev's two complementary videos are identified as one perspective. The older Kaffeemacher video is distinguished from its September 2026 written retest.
- Five public retailer price observations cover the US, UK, and Germany, with exact-model/electrical notes and check dates. Only US offers describe the PL92T-120 Product in JSON-LD. Availability, delivery totals, imported-unit eligibility and market completeness are not invented.
- No historical series was established. The price-history panel therefore explains that tracking is unavailable and does not draw a fabricated chart.
- Three optional routine scenarios explain how the same hardware affects different buyers, without generating an opaque match percentage.
- Eight answer-first questions cover espresso, milk, warm-up/workflow, setup/input, controls/pressure, care/service, value and exact identity/kitchen fit. Supporting evidence can be expanded; source references remain visible.
- Six visible FAQs mirror FAQPage data. Product microdata shares the canonical JSON-LD Product ID. Product/Review, Article, VideoObject, BreadcrumbList, image, and site metadata retain attribution.

## Research boundaries

The source ledger is maintained in `src/data/elizabeth-dashboard.ts`; verified video metadata and chapters are in `lelit-elizabeth-video-research-2026-11-02.json` beside this file.

Kaffeemacher's 2026 thermal findings describe an older test sample and its stated protocol, not a Coffeedant test or a guarantee about every current US unit. Coffee Kev's milk benchmark is a single-pitcher observation with limited published starting-condition/repetition details. No sufficiently verified controlled dynamic extraction-pressure trace for a current PL92T-120 was established. Pump rating is not presented as puck pressure. Manufacturer documents disagree on dimensions/weight, so kitchen-fit advice requires confirmation of the supplied machine.

The 4.3/5 figure is the existing Coffeedant editorial assessment, not an external aggregate rating. Reviewer opinions are not averaged. Claims of lifetime, population failure rates, commercial throughput or one-touch ownership are excluded.

The Amazon API pause remains in force. No API credentials, tokens, refreshes or Amazon price verifications were used. Independent retailer pages and existing editorial assets supply this preview.

## Validation contract

The dashboard has its own built-page validator covering semantic identity, metadata, source/citation relationships, accessible selectors, video/schema parity, all eight question sections, visible FAQ parity, retailer observation dates, image provenance, local links and honest missing-history state. The standard review validator routes this one page through that contract. All other reviews retain their existing checks. The video validator permits four videos only for Elizabeth; other products retain their existing limit.

Build, SEO/schema, historical-anchor, video, review and originality checks are run before delivery. Desktop/mobile inspection and selector/player interaction checks apply to the deployed preview.
