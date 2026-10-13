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
- DOM-safe source indexing covers all 195 built HTML pages (194 regular pages
  plus the 404), including metadata, accessibility text, JSON-LD and finder data.
- Source-path-derived content IDs connect stable translated route registries.
  If the US source URL itself changes, migrate that registry explicitly and add
  redirects; source-title edits never change already registered translated URLs.
- Incremental translation cache, official OpenAI Responses structured-output
  integration, regional glossaries, numeric/brand/model/placeholder validation,
  bounded API requests, retry handling and partial-success persistence.
- Translation on source pushes, daily resumable backfill and manual dispatch.
- Localized finder runtime strings, date/rating formatting and factual US
  commerce isolation. Missing local prices do not become converted US prices.
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

## Missing configuration

The GitHub Actions secret inventory currently contains only:

```
AMAZON_CREATORS_CREDENTIAL_ID
AMAZON_CREATORS_CREDENTIAL_SECRET
AMAZON_CREATORS_CREDENTIAL_VERSION
```

`OPENAI_API_KEY` is missing. Set it as an encrypted repository Actions secret;
never commit it, put it in a public variable, or print it in logs. Existing Amazon
credentials cannot authenticate a translation provider. The default configurable
translation model is `gpt-4.1-mini-2025-04-14` and the default request ceiling is
40 batches per run. This is a conservative spend guard, not a promise that the
large initial backfill finishes in one run. Raise `LOCALIZATION_MAX_REQUESTS`
as a repository variable or manual workflow input after reviewing API usage.
`LOCALIZATION_MODEL` is an optional repository variable.

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

1. Supply translation access and set an acceptable backfill request limit.
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
- [Cloudflare repository project limit](https://developers.cloudflare.com/pages/configuration/monorepos/)
- [Amazon Creators cross-marketplace credentials](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/get-started/using-curl)
