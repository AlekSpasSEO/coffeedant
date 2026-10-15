# Amazon coffee deals

Canonical page: https://coffeedant.com/deals/. Initial API discovery: October 13, 2026. First scheduled discovery: Friday, October 16, 2026, at 09:17 Europe/Skopje, then every Friday at that local time. GitHub Actions may start a scheduled job later during busy periods.

`refresh-amazon-deals.yml` runs `update:amazon-deals` using Coffeedant's existing three `AMAZON_CREATORS_*` repository secrets. It searches 17 coffee-related terms, up to three discounted result pages and one general page per term, across eight categories. This is a bounded discovery of Amazon.com deals, not a guarantee of every deal in Amazon's entire catalog. Titles, brands, images, product links, money amounts, labelled comparison prices, savings and deal terms are taken exclusively from Amazon Creators API. Category labels and presentation copy are Coffeedant UI text.

Eligible products must have a new, in-stock featured offer, a valid Amazon product link, USD pricing, and either Amazon-reported savings against an appropriate comparison price or an active DealDetails object. Expired/future deals, used/refurbished offers, subscription offers, unavailable products, and MAP-restricted prices are excluded. Prime-only and early-access labels and supplied end times appear on cards. No historical-low, exact rating, or coupon claims are invented.

`src/data/amazon-deal-selection.json` contains selected ASINs, the coverage campaign and search receipts. `src/data/amazon-deals.json` contains current display data. The existing six-hour Amazon-offer job runs `refresh:amazon-deals` to refresh all product content for the selected ASINs and remove ended/unavailable discounts. Outside promotional coverage, new selections happen on Friday or explicit manual dispatch. During promotional coverage, discovery also runs every six hours. Commerce and campaign jobs share an exclusive concurrency group. Successful bot commits trigger the existing Cloudflare GitHub integration.

API/authentication failures stop publication and leave the previous dataset intact. The build omits expired/data-older-than-24-hour cards; the browser checks the same deadline on load, once a minute and when a tab becomes visible. No-JavaScript visitors see the timestamped server-rendered snapshot and freshness disclosure. Images are linked Amazon-hosted URLs, never copied into the repository. The source data files are snapshots, not credentials; do not print or commit API credentials.

Manual initial selection (credential CSV kept outside the repository):

```powershell
node scripts/update-amazon-deals.mjs --credentials C:\Users\ASUS\Downloads\Coffeedant-credentials.csv
```

Validation: `npm run test:deals`, `CF_PAGES=1 npm run build`, and the repository's deployment validators. Browser QA should check category/search/sort/zero results, affiliate links, loaded API images and desktop/mobile layout. `/deals/` belongs in the page sitemap, not the Blog/Journal post sitemap.

Primary API contracts: [SearchItems](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/operations/search-items), [OffersV2](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/resources/offersV2). Schedule: [GitHub workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onschedule).

## Seasonal coverage and automatic return

The permanent overview highlights Black Friday, Cyber Monday and Christmas. `src/lib/deal-season.mjs` is the shared annual calendar for static rendering, browser transitions and unattended jobs. It calculates Black Friday from the fourth Thursday in November and Cyber Monday three days later; dates are never hardcoded to one year. Coverage uses America/New_York because this is the Amazon US hub. Operator schedules use Europe/Skopje.

| Coverage | Start, inclusive | End, exclusive | Shopping focus |
| --- | --- | --- | --- |
| Black Friday | 14 days before Black Friday | Saturday after Black Friday | Machines and grinders |
| Cyber Monday | Saturday after Black Friday | Tuesday after Cyber Monday | Brewers, kettles and accessories |
| Christmas | December 1, or the end of Cyber Monday coverage if later | December 26 | Coffee gifts, manual brewers, frothers and tools |

2026: Black Friday preview November 13–26 and main day November 27; Cyber Monday preview November 28–29 and main day November 30; Christmas December 1–25; standard yellow design restored December 26. Black Friday uses a charcoal/yellow design, Cyber Monday blue, and Christmas green/gold. These are **Coffeedant editorial coverage windows**, not claims that Amazon has announced those sale dates. Retailer-specific event dates, deal labels, delivery cutoffs and stock claims require fresh evidence.

`refresh-deal-season.yml` checks hourly at :07 UTC and changes `src/data/deal-season.json` only on a real campaign/phase/year transition. It tests, builds and validates before pushing the transition to main; Cloudflare deploys it. This job needs no Amazon secret and cannot be blocked by API authentication failures. GitHub schedule or deployment delays can postpone server-rendered updates; the browser independently re-evaluates the same calendar on load, every minute and on tab visibility. It updates copy, colors, metadata, focus, calendar dates and collection schema and restores the standard design without retaining a gift filter. No-JavaScript readers receive the last deployed, timestamped snapshot.

`refresh-amazon-deals.yml` checks at 03:17, 09:17, 15:17 and 21:17 Europe/Skopje. `plan-deal-discovery.mjs` permits Friday discovery from 09:00 onward in ordinary weeks, or one discovery per six-hour UTC slot during seasonal coverage, with immediate discovery when the campaign changes. Slot comparison tolerates variable API runtimes. Manual dispatch forces recovery. Christmas adds coffee/brewer/accessory gift searches; Black Friday and Cyber Monday add machine/grinder/brewer searches. Category relevance, API eligibility, expiry and 24-hour freshness rules still apply. Seasonal ordering never invents an event affiliation or a historical-low claim.

## Automated editorial process

The existing `coffeedant-friday-deals` heartbeat is the single monitor, expanded to daily at 10:00 Europe/Skopje. It reads source/workflows/deployments and writes local receipts only; production changes are performed by the repository workflows. Read latest main and this runbook, reconcile operations receipts/open PRs, and check the applicable workflows and production page. Use stable receipts `YYYY-MM-DD-deals-<campaign>-<work-type>` and avoid duplicates. Review preparation within 30 days of each coverage opening, then at 14, 7 and 1 days before the main event; reconcile missed checkpoints on the next run. Check daily throughout coverage and once after closure. Recommend useful evidence-driven preparations: confirm announced retailer terms, research exact product shortlists, compare available reviews and identify sourced buying advice. Do not create arbitrary editorial changes solely because a timer ran.

During coverage verify the live theme, discovery age/selection, prices, expiry removal, category/search/sort/gift controls and public canonical URL. On closure verify the next theme or evergreen return and flag obsolete promotional copy. Report a failed or missing job with concrete evidence and recommended repair; the monitor must not dispatch jobs, merge PRs, change credentials or publish articles. Do not duplicate successful discovery. Record commit/PR, deployment ID, live checks and limitations in the workspace operations folder. Notify only for meaningful changes/completions, failures or required user action; never send third-party messages.

## Search, Discover and Google News

Keep `/deals/` a canonical `CollectionPage` in the page sitemap. Current offers alone do not make it a news article. Visible publisher/methodology/contact links, freshness timestamps and affiliate disclosure support reader trust. Preserve the disclosure before buying links and the `sponsored nofollow noopener` relationship on Amazon links.

When there is real, sourced news (an announced sale, material price change or useful comparison), recommend a distinct, original dated Journal article. The seasonal monitor does not publish Journal content. Any separately authorized article should follow the site's existing editorial workflow, with a named accountable author, publication and substantive update dates, source/checked-time ledger, exact product and marketplace scope, evidence-led buyer analysis and prominent affiliate disclosure. Link it from this hub and the Journal, include it in the post sitemap and existing feeds where applicable, and link back to current offers. Refresh article dates only for substantive editorial changes, never for each API poll. Apply Article/NewsArticle markup only when it accurately describes the page; do not add Product/Review ratings or NewsArticle markup to the collection to chase eligibility.

Google automatically considers eligible content; there is no submission or inclusion guarantee. News should contain original reporting and meaningful editorial value, with clear authorship, dates, publisher/contact information and disclosed affiliate interests. Promotional material must not overwhelm editorial content. Assess Search and Discover alongside News, and log outcomes only when there is actual Search Console evidence. Do not invent traffic or approval.

Primary guidance checked October 15, 2026: [Google News policies](https://support.google.com/news/publisher-center/answer/6204050), [automatic publication pages](https://support.google.com/news/publisher-center/answer/15898024). Recheck the policies when preparing future coverage.
