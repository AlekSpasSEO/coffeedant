# Review section compatibility

The modern product review template preserves historical section URLs from the saved WordPress source and the October 20–29, 2026 Search Console comparison export. This repairs section navigation; it does not claim that broken fragments caused ranking or rich-result changes.

`src/data/legacy-review-anchors.json` records 2,080 meaningful historical content anchors across 149 saved review pages. It excludes obsolete dialogs, TOC controls and image attachment IDs. Regenerate or check it with:

```sh
node scripts/build-review-anchor-manifest.mjs
node scripts/build-review-anchor-manifest.mjs --check
```

The shared helper places aliases at matching current content. For example, Elizabeth's `#milk-steam` points to milk, `#espresso-quality` to espresso, `#dual-boilers` to features, `#accessories` to setup, and `#specs` to the summary specification strip. Editorial rating dimensions and product-prefixed section IDs supply the real destination when templates differ. Existing section, source and inline IDs are preserved without duplication. No JavaScript is needed for navigation.

The GSC fixture records 183 fragment URLs across 32 modern reviews, without traffic metrics. The built validator checks those URLs, every source-derived historical target and the uniqueness and placement of each added alias.

```sh
node --test scripts/tests/review-anchors.test.mjs
# After the ordinary production build:
node scripts/validate-review-anchors.mjs
```

No review prose, prices, editorial scores, canonical URLs or API behavior is changed by this compatibility layer.
