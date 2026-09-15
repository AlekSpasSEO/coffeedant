# Bambino Plus review implementation

Updated September 15, 2026 using the [Coffeedant Writing Universe](https://docs.google.com/document/d/1ug0VGXrxbBz6Z44ooWGU3jASeAabT44PEPIUrURGS4g/edit) and [Product Registry V2](https://docs.google.com/spreadsheets/d/1vPvXDW2UXJJuj4IoAR-VM6clF91ytgGUj-tCK4YYup4/edit).

## Identity and architecture

- Preserve `/espresso-machine/breville-bambino/` for **Bambino Plus BES500**, product `CD-EM-000005`, family `CD-EF-000005`, variant `CD-EV-000005` and URL `CD-URL-000005`.
- `src/data/products/bambino-plus.ts` preserves the registry identity, normalized attribute IDs, evidence references and dated manufacturer price separately from editorial content.
- `src/data/bambino-article.ts` contains the full narrative, source records and judgments. `src/data/reviews.ts` assembles the compact decision summary.
- The review components support the narrative without constraining prose to short cards. Author details remain below the image. Tables retain semantics and keyboard scrolling.
- Product and Article metadata remain evidence-safe and omit stale Offer and ReviewRating markup. The visible Coffeedant score is an editorial assessment with its research basis disclosed on the page, not a claimed hands-on result.

## Connection state

The product module is a checked-in snapshot. The new registry's enrichment tables were not populated when read; this change does not enable spreadsheet synchronization or Amazon API ingestion. No secrets or Amazon-returned advertising content are added. The existing catalog affiliate destination and image are retained. The Breville price is a dated observation and is not an exact color/ASIN offer.

Future refreshes must preserve identifiers, retain source observations, recheck regional offers and update editorial conclusions deliberately. Manufacturer-displayed dimensions are shown in their stated axis order, while exact fit, cup clearance, warranty duration, exact ASIN and parts stock remain explicit research gaps.

## Editorial and interface refinement

- The mandatory rating layer is restored near the top: an overall 4.2/5 score is derived from six equally weighted category scores, and the full Espresso, Milk, Workflow, Build, Features and Value breakdown remains visible. Each score links to a structured category deep dive.
- The former test-results layout is retained as an evidence-backed performance snapshot. Research-led pages say what the evidence supports; only a documented hands-on or hybrid review may say what Coffeedant testing showed.
- Espresso recipes are visibly labeled editorial starting protocols rather than measured BES500 results. Milk, workflow, build, features and value now receive the same table-plus-diagnostics treatment instead of leaving structured analysis to espresso alone.
- The alternative matrix now has two reading depths. The quick table keeps the original decision-focused view; a native `Details` control reveals dimensions, heating, coffee setup, milk workflow and audience fit without requiring JavaScript.
- Named alternatives link to existing canonical Coffeedant reviews. The BES450 uses its on-page head-to-head section because there is no standalone review to link yet. No URL was invented.
- The related-guides section now ends with four workflow-based recommendation cards. They work without commerce data and carry a stable `data-commerce-ready` hook for later eligible price and availability enrichment.
- Owner material is synthesized into a market pattern instead of narrated person by person. Source-specific limitations remain in the source ledger.
- Seven rights-checked editorial photographs are placed beside the point they explain. Every caption includes credit, license and non-Bambino context where needed; `docs/reviews/bambino-media.md` is the rights ledger.
- The Writing Universe was updated in place with the same comparison, recommendation, community-synthesis, visual-density, rights, and QA rules.

## Evidence and validation

The companion research files retain the official documentation, five independent publishers, three owner pools, media rights and limitations. The published review attributes external observations and makes no Coffeedant physical-testing claim.

Validation: all 195 Astro pages built after this refinement. Static output contains all six required rating categories, six matching performance modules, one native detailed-comparison control, four recommendation cards, seven credited editorial figures, no duplicate IDs, and existing output routes for every new internal destination. The earlier browser checks at 1440, 768, 390 and 320 pixels remain the baseline; deployed viewport QA should be repeated after pushing because the rating, comparison and recommendation layouts are new.
