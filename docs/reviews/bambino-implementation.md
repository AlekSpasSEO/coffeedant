# Bambino Plus review implementation

Updated September 15, 2026 using the [Coffeedant Writing Universe](https://docs.google.com/document/d/1ug0VGXrxbBz6Z44ooWGU3jASeAabT44PEPIUrURGS4g/edit) and [Product Registry V2](https://docs.google.com/spreadsheets/d/1vPvXDW2UXJJuj4IoAR-VM6clF91ytgGUj-tCK4YYup4/edit).

## Identity and architecture

- Preserve `/espresso-machine/breville-bambino/` for **Bambino Plus BES500**, product `CD-EM-000005`, family `CD-EF-000005`, variant `CD-EV-000005` and URL `CD-URL-000005`.
- `src/data/products/bambino-plus.ts` preserves the registry identity, normalized attribute IDs, evidence references and dated manufacturer price separately from editorial content.
- `src/data/bambino-article.ts` contains the full narrative, source records and judgments. `src/data/reviews.ts` assembles the compact decision summary.
- The review components support the narrative without constraining prose to short cards. Author details remain below the image. Tables retain semantics and keyboard scrolling.
- Research-led Article and Product metadata replace unsupported ratings and stale Offer markup. Existing section anchors remain usable.

## Connection state

The product module is a checked-in snapshot. The new registry's enrichment tables were not populated when read; this change does not enable spreadsheet synchronization or Amazon API ingestion. No secrets or Amazon-returned advertising content are added. The existing catalog affiliate destination and image are retained. The Breville price is a dated observation and is not an exact color/ASIN offer.

Future refreshes must preserve identifiers, retain source observations, recheck regional offers and update editorial conclusions deliberately. Unknown dimensions, cup clearance, warranty duration, exact ASIN and parts stock remain explicit research gaps.

## Evidence and validation

The three companion research files retain the official documentation, five independent publishers, three owner pools and limitations. The published review attributes external observations and makes no Coffeedant physical-testing claim.

Validation: all 195 Astro pages built. Browser checks at 1440, 768, 390 and 320 pixels confirmed no page overflow, overlapping section headings, duplicate IDs, broken section anchors or missing summary images. Verified one H1, permanent product identity, dated pricing, author below image, correct schema and click-to-load video. GitHub deployment status must be checked after pushing.
