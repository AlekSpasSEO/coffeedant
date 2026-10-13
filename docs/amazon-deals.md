# Amazon coffee deals

Canonical page: https://coffeedant.com/deals/. Initial API discovery: October 13, 2026. First scheduled discovery: Friday, October 16, 2026, at 09:17 Europe/Skopje, then every Friday at that local time. GitHub Actions may start a scheduled job later during busy periods.

`refresh-amazon-deals.yml` runs `update:amazon-deals` using Coffeedant's existing three `AMAZON_CREATORS_*` repository secrets. It searches 17 coffee-related terms, up to three discounted result pages and one general page per term, across eight categories. This is a bounded discovery of Amazon.com deals, not a guarantee of every deal in Amazon's entire catalog. Titles, brands, images, product links, money amounts, labelled comparison prices, savings and deal terms are taken exclusively from Amazon Creators API. Category labels and presentation copy are Coffeedant UI text.

Eligible products must have a new, in-stock featured offer, a valid Amazon product link, USD pricing, and either Amazon-reported savings against an appropriate comparison price or an active DealDetails object. Expired/future deals, used/refurbished offers, subscription offers, unavailable products, and MAP-restricted prices are excluded. Prime-only and early-access labels and supplied end times appear on cards. No historical-low, exact rating, or coupon claims are invented.

`src/data/amazon-deal-selection.json` contains the week's selected ASINs and search receipts. `src/data/amazon-deals.json` contains current display data. The existing six-hour Amazon-offer job runs `refresh:amazon-deals` to refresh all product content for the selected ASINs and remove ended/unavailable discounts without discovering a different weekly selection. Both jobs share an exclusive concurrency group. New search selections happen only on Friday or an explicit manual dispatch. Successful bot commits trigger the existing Cloudflare GitHub integration.

API/authentication failures stop publication and leave the previous dataset intact. The build omits expired/data-older-than-24-hour cards; the browser checks the same deadline on load, once a minute and when a tab becomes visible. No-JavaScript visitors see the timestamped server-rendered snapshot and freshness disclosure. Images are linked Amazon-hosted URLs, never copied into the repository. The source data files are snapshots, not credentials; do not print or commit API credentials.

Manual initial selection (credential CSV kept outside the repository):

```powershell
node scripts/update-amazon-deals.mjs --credentials C:\Users\ASUS\Downloads\Coffeedant-credentials.csv
```

Validation: `npm run test:deals`, `CF_PAGES=1 npm run build`, and the repository's deployment validators. Browser QA should check category/search/sort/zero results, affiliate links, loaded API images and desktop/mobile layout. `/deals/` belongs in the page sitemap, not the Blog/Journal post sitemap.

Primary API contracts: [SearchItems](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/operations/search-items), [OffersV2](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/resources/offersV2). Schedule: [GitHub workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onschedule).
