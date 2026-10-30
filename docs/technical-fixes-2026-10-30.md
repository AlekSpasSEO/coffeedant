# Search technical repairs — October 30, 2026

## Layout stability

The Coffee Finder originally rendered an empty results grid, then fetched the
saved catalog and inserted three compact cards (or twelve full cards). A local
Chrome measurement at 1536 × 674, with the catalog response delayed 3.5 seconds
and the reader positioned at the Finder, recorded CLS 0.0502203. The following
Elizabeth espresso section moved down 245.66 pixels when the cards arrived.

The initial cards, match count and catalog date now render with the static page.
The browser uses the same card renderer and ordering for later filters.
Regional builds replace the generated snapshot using the translated regional
catalog and its existing price/purchase safeguards; translation source slots
retain their previous fingerprints. The Finder uses saved data only.

Both shared stylesheets reserve the desktop scrollbar gutter. Opening an
asynchronously fetched video dialog previously removed the classic scrollbar
and changed the underlying page width; scroll locking now keeps its geometry.

Lab measurements verify the repaired behavior. Search Console's rolling field
data and its URL groups will update separately as new visits are collected.

With the same delayed-catalog scenario, the fixed page recorded CLS **0** at
1536 × 674 and 390 × 844. Desktop body width remained 1520.8 pixels before,
during and after opening the video dialog. Mobile had no horizontal overflow;
budget filtering and clearing filters still worked.

## Video structured data

`VideoObject.about` now references the complete review Product by `@id` instead
of declaring an incomplete Product on each watch page and the video library.
The actual review retains its Product, editorial Review, author and rating.
The video validator recursively inspects nested JSON-LD so this defect cannot
hide below a top-level VideoObject again.

## Historical section links

The saved source reviews supply a generated manifest of 2,080 historical
content anchors across 149 reviews. Aliases sit beside the appropriate current
content, including summary/specification, espresso, milk, setup, care,
comparison and verdict destinations. Native IDs, source IDs and inline IDs
take precedence to avoid duplicates. This includes Elizabeth's `#milk-steam`,
`#espresso-quality`, `#dual-boilers`, `#specs` and `#accessories` links.

Regenerate with `node scripts/build-review-anchor-manifest.mjs`; use `--check`
to check that the committed manifest matches the saved source. The build
validator checks unique targets and their placement beside matching content.

## Verification

- `npm run test:seo` includes video schema and historical anchor regressions.
- `npm run test:localization` includes initial Finder rendering, translation
  source parity and regional offer safeguards.
- After a production-target build, run `npm run validate:seo`,
  `npm run validate:videos`, and `npm run validate:coffee-finder`.
- Check delayed-catalog loading, Finder filters, legacy anchor navigation and
  video open/close on desktop and mobile before publishing.

The production-target build passed, along with 20 SEO/anchor/schema unit tests,
195 localization tests, the schema/SEO validator, all 393 video watch pages,
159 modern reviews and the Finder validator. Anchor validation covers all
2,080 source targets and all 183 historical GSC fragment observations.

No Amazon API refresh, token request or credential operation is required.
