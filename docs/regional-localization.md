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
- DOM-safe source indexing covers all 199 built HTML pages (198 regular pages
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
The current canonical source has 210 pages; counts can change as authors publish.

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

Reproduce after the US build:

```sh
node scripts/localization/direct.mjs export /journal/espresso-dosing/ espresso-dosing
node scripts/localization/direct.mjs import localization/authored/nl-espresso-dosing.json
node scripts/localization/review.mjs nl /journal/espresso-dosing/
```

Do not overwrite a frozen snapshot for an existing translation without reviewing
and reindexing its authored entries; snapshot/hash mismatches are rejected.
Importing validates every slot, numeric fact, protected identifier and current
source-page hash before updating the cache. Missing text cannot silently become
English fallback. Only noindex reviews may select a subset of pages; the full
production build still refuses incomplete translation coverage.

Remaining rollout: obtain feedback on this first page; translate all remaining
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
