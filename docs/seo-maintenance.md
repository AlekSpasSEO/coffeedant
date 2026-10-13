# Coffeedant technical SEO

The production build generates SEO from the rendered canonical pages after
localization. `npm run build` is the supported build command. The source
`public/sitemap.xml` retains migration dates as an input; the delivered sitemap
is regenerated from actual output and must be inspected in `dist/`.

## Crawl resources

- `/sitemap.xml` preserves the existing full sitemap endpoint.
- `/sitemap_index.xml` links to the two canonical, disjoint child sitemaps.
- `/post-sitemap.xml` contains only Blog and Journal articles.
- `/page-sitemap.xml` contains every other canonical page, including product
  reviews, buying guides, section/library indexes, category/brand indexes and
  supporting pages. Sitemap membership follows the section, not Article schema.
  Translated URLs retain their source section identity for this split.
- Every sitemap contains only built, indexable canonical pages, excluding
  redirects, HTML redirect fallbacks and the 404 page. Image extensions use
  absolute URLs and escaped query strings. `robots.txt` advertises the sitemaps.
- `/llms.txt` contains the canonical content directory, methodology and source
  limitations. `/llm.txt` points to it for compatibility with the requested name.

Dates reflect significant updates, not deployments. The October 13, 2026 SEO
release changes schema and metadata; this date is a fixed floor in
`scripts/build-seo.mjs`. Later article dates supersede it. Change this release
date only with a substantive change to the shared metadata/schema system.
Do not turn it into a daily build timestamp.

## Metadata and structured data

The build preserves page-specific editorial titles and descriptions, supplies
missing descriptions from visible copy, deduplicates canonical/meta tags, and
completes Open Graph and Twitter cards with absolute images and alt text.
An original 1200 × 630 Coffeedant brand card covers pages without editorial images.
404 and deliberately noindex pages remain excluded from indexing.

Every indexable page receives WebPage (or AboutPage/ContactPage), WebSite,
Organization and BreadcrumbList. Product schema belongs to actual product
reviews, not ordinary informational pages. Modern machine/grinder reviews carry
a nested editorial Review, the same visible weighted score out of five and
visible pros/cons. No aggregate audience ratings are manufactured. The bean
review carries Product and Article but no sensory score.

FAQPage is generated only from visible question/answer content when a page has
no existing FAQ schema. Editorial images receive ImageObject with alt-derived
names, actual dimensions and existing captions/credits; documented journal
licenses are preserved. Usage records are not asserted to be licenses. Decorative
images retain empty alt attributes. Video posters receive descriptive alt text;
native video has an accessible label and visible transcript. Original and
embedded videos carry VideoObject; YouTube watch pages use `url`, not
`contentUrl`, which is reserved for a media file. Upload dates are source dates,
never article dates. Four missing dates were verified from the exact YouTube
watch-page microformats on October 13, 2026 and recorded in the media ledger.

Regional builds generate the same resources using their verified host/locale.
Unpublished review previews retain their noindex policy. This release does not
change regional publication state.

Four inherited redirects shadowed dedicated reviews for De'Longhi ESAM3000,
Magnifica Evo Next, Dinamica Plus ECAM370 and Dinamica Aroma Bar ECAM359.37.TB.
Those rules were removed because all four have separate canonical reviews in
the product manifest. Other legacy redirects remain in place.

## Validation

Run `npm run test:seo` and `npm run validate:seo` after a production build.
The latter checks every built indexable page for unique titles/descriptions,
canonical and social parity, image assets, valid JSON-LD, breadcrumbs, visible
FAQ/schema agreement, image coverage, video identity/dates, complete sitemap
coverage, stable valid dates and the LLM directory. CI runs these checks for
both Cloudflare and GitHub Pages targets alongside existing editorial,
migration, analytics, commerce and localization checks.

Sitemaps and valid schema support discovery and interpretation; rankings and
rich-result display are not guaranteed. FAQ markup remains semantic metadata;
Google removed its FAQ rich-result feature in May 2026. Google also states that
`llms.txt` does not positively or negatively affect Search visibility/rankings.

References:
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/product-snippet
- https://developers.google.com/search/docs/appearance/structured-data/video
- https://developers.google.com/search/updates#june-2026
- https://llmstxt.org/
