# Journal URL consolidation — 13 October 2026

The Journal is the canonical library for 25 editorial articles: ten coffee features, seven migrated informational articles and eight research-led buying guides. Its searchable library at `/journal/` links to real, crawlable article pages; each article renders its full content without JavaScript and has its own title, canonical URL, article metadata and structured data.

The original features use `/journal/{story-id}/`, for example `/journal/istanbul-coffeehouses/` and `/journal/dark-roast-americano/`. Old `#story-id` links to the library are forwarded to the article URL in the browser. The homepage now links directly to the library.

`src/data/journal-route-migration.json` records the seven blog and eight buying-guide migrations. Blogs retain their existing slug under `/journal/`. Buying guides use descriptive article slugs such as `/journal/espresso-machines-for-beginners/`, `/journal/budget-espresso-machines-under-500/` and `/journal/superautomatic-espresso-machines/`.

Cloudflare `_redirects` supplies permanent 301 responses for the old blog index, all posts and all eight guide URLs, including slashless variants. Existing root-level blog aliases point directly to their final Journal URL. A `/blog/*` fallback covers historical blog variants. Astro renders noindex redirect fallbacks for static preview hosting. Redirects are excluded from the canonical sitemap and localization content inventory.

An Astro build hook updates internal `href` values across the delivered site, including legacy content, header/footer and equipment pages. It preserves article text, markup and entity bytes. Product reviews and category/brand hubs retain their existing routes. Specialized buying-guide defaults continue to use their original identity; canonical metadata and breadcrumbs use the Journal destination.

Existing historical migration manifests remain audit records. Validators resolve their routes through the migration map. Article parity audits continue to classify the seven former blog articles and eight buying guides with their existing benchmarks; the ten Journal features retain their separate longform validator. Localization discovers the new source paths and regenerates missing route records automatically; redirect fallbacks are not translated as articles.

Validation checks all 25 canonical pages, article visibility without JavaScript, retained media, source links, unique IDs, guide bodies, sitemap and schema, direct internal links, permanent redirects and static fallbacks. Browser checks cover filters/search, direct feature and guide navigation, history, embedded media, legacy fragment links and mobile layout.
