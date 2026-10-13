# Current Journal routes — 13 October 2026

The Journal contains ten editorials and seven practical informational articles, each with a canonical `/journal/name/` URL. The library renders separate Editorials and Guides sections. Buying-guide listicles belong under `/espresso-machine/` and retain their original eight URLs.

The seven former blog posts stay at `/journal/` with their existing slugs. The old `/blog/` index and post URLs, slashless variants and root aliases permanently redirect to the Journal. Old `#story-id` links to the Journal library forward to standalone editorial URLs in the browser.

The temporary Journal buying-guide URLs from the earlier consolidation now return 301 redirects to the original `/espresso-machine/` guides. Their original URLs serve full content and self-canonical metadata. The sitemap, shared navigation and rendered internal links use the final destinations, and reciprocal redirects are removed.

`src/data/journal-route-migration.json` records both directions: blog URLs to Journal articles, and temporary Journal buying-guide URLs back to espresso-machine guides. Static noindex redirect fallbacks support preview hosting; Cloudflare `_redirects` supplies permanent server responses. Redirect fallbacks are excluded from the canonical sitemap and localization content inventory.

The build hook changes only href values, preserving archived article content, markup and entity bytes. Historical audit manifests resolve destinations through the route map. Specialized guide defaults use their original identity. Product reviews and category/brand hubs retain their routes. See `guide-enrichment.md` for the visual and owner-evidence expansion of both guide sets.
