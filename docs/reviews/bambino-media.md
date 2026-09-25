# Bambino Plus editorial media ledger

Checked September 25, 2026. The published review uses three product images in total: one local hero plus two credited inline records. This is the current publication rule for the content-upgrade program. The former seven generic Wikimedia illustrations were removed.

| Placement | Creator or provider | Source and proof | Usage basis | Editorial purpose | Disclosure |
| --- | --- | --- | --- | --- | --- |
| Hero | Existing Coffeedant product asset | `public/images/products/breville-bambino-plus.png` | Existing repository asset retained for the canonical BES500 record | Identifies the reviewed Bambino Plus | Product image, not evidence of Coffeedant testing |
| Inline 1 | Breville US | [Bambino Plus BES500 product page](https://www.breville.com/en-us/product/bes500) and `BES500USCM_CAROUSEL1.png` | Official manufacturer product-page media | Shows the narrow body, rear tank, group, steam wand and drip tray | Official exact-model media, not a performance measurement |
| Inline 2 | Breville US | [Bambino Plus BES500 product page](https://www.breville.com/en-us/product/bes500) and `BES500USCM_CAROUSEL2.png` | Official manufacturer product-page media | Shows the controls, group, tray and automatic-milk sensor from another angle | Official exact-model media, not a performance measurement or package guarantee |

## Publication checks

- Exactly two inline media records are wired through `src/data/review-media-upgrades.ts`; the shared template limits output to those two records.
- Together with the hero, the page has no more than three product images.
- Captions distinguish product identification from independent evidence and Coffeedant testing.
- Both inline records link to the manufacturer page and identify the same US BES500 model covered by the article.
- The independent Coffee Kev video is embedded separately and does not count as a product image.
