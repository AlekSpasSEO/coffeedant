# Amazon coffee deals

Canonical page: https://coffeedant.com/deals/.

## October 17 recovery and current design

The user requested restoration of the original yellow layout after the page showed zero deals. The seasonal overview and browser theme transitions have been removed, along with the scheduled refresh-deal-season.yml workflow. Do not reintroduce these automatically. The calendar module remains available to deal discovery; the page no longer consumes its theme copy.

Cause: Amazon Creators API returned HTTP 403 with the message “Your account does not currently meet the eligibility requirements.” OAuth succeeded. Price refreshes and Friday discovery failed; saved offers aged past their 24-hour display limit. Design rollback alone cannot restore current price data. API eligibility requires account-owner resolution; do not rotate credentials, use alternative identities or scrape Amazon to bypass denial. Official troubleshooting: https://affiliate-program.amazon.com/creatorsapi/docs/en-us/troubleshooting/error-codes-and-messages.

src/lib/deal-catalog.mjs provides an independent fallback from the editorial Amazon product matching catalog and review media. It preserves model/voltage/color and renewed-condition notes, uses ASIN affiliate links, and carries no prices, savings or stock claims. Do not reuse expired API titles or image URLs as fallback content. Cache rules: https://affiliate-program.amazon.com/help/operating/policies/.

The page renders current verified deals when available; otherwise it renders the reviewed product catalog. The browser uses the same freshness rule on load, every minute and on visibility, removes expired API cards and switches to the catalog when the final deal expires. Counts, category controls, sort options and CollectionPage ItemList follow the active collection. Fresh successful price data restores live deals on the next deployment. No-JavaScript readers receive the server snapshot from the latest build; static HTML cannot update without a deployment.

## Data and scheduled recovery

refresh-amazon-deals.yml checks at 03:17, 09:17, 15:17 and 21:17 Europe/Skopje. Ordinary weeks discover from Friday 09:00 onward. An unsuccessful Friday remains due on subsequent runs, including weekends, until selection succeeds. Missing, invalid or future timestamps are due immediately. Manual dispatch forces discovery. GitHub may delay scheduled runs.

During Black Friday (14 days before through Friday), Cyber Monday (Saturday through Monday), and Christmas (December 1, or the end of Cyber Monday if later, through December 25) coverage, discovery runs once per six-hour UTC slot. Dates are calculated annually using US Eastern time. These are Coffeedant search windows, not announced Amazon sale dates. This data-only seasonal discovery does not change the restored design.

Discovery uses the existing three AMAZON_CREATORS_* repository secrets and bounded coffee-related queries across eight categories. Eligible offers must be new, in stock, USD, linked to Amazon, and have valid API-reported savings or active DealDetails. Subscription, used, unavailable, future, expired and MAP-restricted offers are excluded. Preserve Prime restrictions, reference-price labels and end times. Never invent coupons, ratings or historical-low claims.

amazon-deal-selection.json retains selected ASINs and search receipts. amazon-deals.json contains the latest successful display snapshot. API failures leave these intact; writes occur only after a complete successful fetch. The six-hour refresh-amazon-offers.yml rechecks selected deals independently of ordinary and regional offer steps. One fetch failure no longer skips other fetches or discards their successful updates. Failed steps still make the overall workflow fail with an explicit diagnostic after successful updates publish.

Both jobs share the amazon-commerce-refresh concurrency group; successful commits deploy through the existing Cloudflare integration. Never store or print credentials. API errors log structured classifications only. A 403 eligibility failure is actionable account state, not a transient error to retry in a tight loop.

## Validation and monitoring

Run npm run test:deals, CF_PAGES=1 npm run build, SEO validation and repository deployment checks. Tests cover stale/empty/malformed feeds, final-deal expiry, automatic return to fresh deals, catalog variants, secret-safe errors, Friday catch-up and DST. Browser QA covers nonempty desktop/mobile catalog, images, affiliate links, search/reset, category/sort and no stale discounts. Keep the independent catalog populated; a future migration must not silently remove this safety net.

The existing coffeedant-friday-deals daily 10:00 Europe/Skopje heartbeat remains the single read-only monitor. Read latest main, this runbook, workflow outcomes and the public page. Verify either current deals or the editorial fallback is populated, visible count/schema match, and expired prices are absent. Fallback is degraded feed state, not proof of API recovery. Track eligibility failure until a successful fetch and live deployment prove recovery. Record meaningful changes in dated local operations receipts; remain quiet for unchanged conditions. Notify on a new failure, meaningful recovery, broken fallback or required user action. Do not dispatch jobs, merge PRs, change credentials, publish Journal articles, or send third-party messages from this monitor.

## Search and news

Keep /deals/ a canonical CollectionPage in the page sitemap, with publisher, methodology, contact links and affiliate disclosure before purchase links. Amazon links retain sponsored nofollow noopener. Do not mark this collection as NewsArticle or manufacture Offer schema for the fallback.

Real sale announcements or material comparisons may justify a separately authorized, original dated Journal article with accountable authorship, sources and checked times. The monitor may recommend this; it must not publish automatically. Google News or Discover inclusion is not guaranteed. Primary guidance: https://support.google.com/news/publisher-center/answer/6204050 and https://support.google.com/news/publisher-center/answer/15898024.
