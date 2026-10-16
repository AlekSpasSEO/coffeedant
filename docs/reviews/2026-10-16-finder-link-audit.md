# October 16, 2026 weekly finder and link audit

Scheduled date: 2026-10-16. Timezone: Europe/Skopje (UTC+02:00).
Base main: 3c7c3428a80a0efd0fa7d20bb4351ed6ef38c17c.
Method: source/production reconciliation and research-led hardware classification; no physical testing or ownership claimed.
Local evidence directory: C:/Users/ASUS/Documents/ChatGPT/Coffeedant/operations/.
Queue claims: 2026-10-16-links-audit, 2026-10-16-finder-audit, 2026-10-16-weekly-reconciliation.

## Inventory and coverage

Implemented espresso finder: src/lib/coffee-finder.ts, src/components/CoffeeFinder.astro, /coffee-finder.json, homepage, /espresso-machine/ and compact review/category placements. 148 eligible canonical espresso reviews, including Bambino Plus once. Grinder and coffee-machine reviews are excluded by route family; beans have no implemented finder.
Implemented grinder finder: src/pages/grinder/index.astro, inline five-record catalog, power/priority radios and comparison table. Opus 2 was missing from its four-record catalog despite being published. Added its existing canonical review, with electric/single-dose/broad/value tags and a shipping/evidence caveat. Count now derives from array length. This finder has no price, stock or score filters.
Implemented brand navigation filter: src/pages/brands/index.astro, catalog-derived ownership-style and price-position facets. Its price positions are editorial tiers, not live prices. No new category invented.
Local operations/config.json inventory now includes these three implemented filter surfaces.

## Espresso corrections

Comparison and alternative text was contaminating heuristic classification. Exact canonical overrides preserve the review itself and its region/generation; no score or price changed.
Sources below were checked on 2026-10-16, approximately 16:45–17:05 Europe/Skopje. Original review research ledgers remain intact.

| Reviewed route suffix | Before | After | Evidence |
| --- | --- | --- | --- |
| delonghi-dedica | one-touch; built-in grinder | hands-on; separate grinder | DeLonghi EC685 manual product family and help record |
| gaggia-classic-evo-pro | one-touch; built-in | hands-on; separate | Gaggia Classic manual-machine documentation; reviewed RI9380/46 hardware remains distinct from E24 |
| gaggia-espresso-evolution-eg2115 | one-touch; built-in | hands-on; separate | Gaggia North America exact Espresso Evolution semi-automatic and ground-coffee/pod description |
| krups-opio-xp320840 | guided; built-in | hands-on; separate | Krups UK exact XP320840 portafilter/ground-coffee product |
| la-pavoni-mini-cellini | guided; built-in | hands-on; separate | La Pavoni Mini Cellini and existing LPSMCS01EU ledger |
| lelit-grace-pl81t | guided; built-in | hands-on; separate | Manufacturer-branded PL81T/PL91T manual; existing exact Grace ledger |
| quick-mill-vetrano-2b-evo | guided; built-in | hands-on; separate | Exact US Vetrano 2B Evo dealer and manufacturer technical record |
| 9barista-mk2 | no grinder needed | separate grinder | Official Mk.2 page recommends espresso burr grinder; stovetop does not mean pre-ground-only |
| ecm-puristika | milk | espresso | ECM Puristika espresso-only product/manual, no steam system |
| quick-mill-carola-evo | milk | espresso | Quick Mill Carola product and exact existing US Carola Evo ledger, no steam wand |
| melitta-cafina-ct8 | separate grinder | built-in | Official CT8 grinder configuration; not CT8plus |
| melitta-cafina-xt6-bes870 | separate grinder | built-in | Official XT6 configurable integrated grinder; legacy URL retained, BES870 is not model identity |
| melitta-cafina-xt7 | separate grinder | built-in | Official XT7 integrated grinder configuration; commercial workflow retained |

Beginner experience labels for the two Gaggia records are explicitly preserved. Built-in on Cafina does not imply a fixed grinder count; the signed regional configuration still controls.

Sources:
- https://support.delonghi.com/en/dedica
- https://www.delonghi.com/en-au/p/dedica-manual-espresso-makers-black-dedica-manual-espresso-machine/EC685.BK.html (architecture only; no AU price/voltage copied into US review)
- https://www.gaggia.com/manual-machines/new-classic/
- https://www.gaggia-na.com/products/gaggia-espresso-evolution
- https://www.krups.co.uk/ESPRESSO-MACHINES/TRADITIONAL-ESPRESSO-MACHINES/Krups-Opio-Steam-&-Pump-XP320840-Traditional-Pump-Espresso-Coffee-Machine--1-5L--Black--Cappuccino/p/8010000482
- https://www.lapavoni.com/en/products/domestic-machines/mini-cellini
- https://lelit.bg/wp-content/uploads/2021/02/grace-pl81t-manual.pdf
- https://www.chriscoffee.com/products/quick-mill-vetrano-2b
- https://www.quickmill.it/wp-content/uploads/2021/08/technical-data.pdf (architecture only, no regional capacity substitution)
- https://9barista.com/en-us/products/9barista-espresso-machine-mk2
- https://www.ecm.de/en/products/puristika/
- https://www.quickmill.it/en/products/carola/
- https://www.melitta-professional.com/us/en/coffeemachines/fuer-die-grosse-getraenkevielfalt/melitta-cafina-ct8
- https://www.melitta-professional.com/us/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT6
- https://www.melitta-group.com/int/en/press/press-releases/ (XT7 configuration cross-check also retained in original review ledger)
- https://www.melitta-group.com/en/press/press-releases/Melitta-Professional-at-the-World-of-Coffee-Experience-the-ease-of-variety
- https://fellowproducts.com/collections/grinder/products/opus-2-conical-burr-grinder

The old Gaggia North America /products/gaggia-classic-evo-pro address returned 404; it was not treated as current availability evidence. Two other direct fetches (old Lelit product URL and 9Barista setup URL) failed; the manual/current product sources above were used instead.

## Internal links: exact before and after

Source /coffee-beans/counter-culture-hologram/:
- Plain “grinder guide” becomes a contextual link to /grinder/; equipment selection for switching methods.
- Plain “Encore ESP review” becomes a contextual link to /grinder/baratza-encore-esp/; specific mixed-method equipment.
- Big Trouble recommendation card: https://counterculturecoffee.com/products/big-trouble becomes /coffee-beans/counter-culture-big-trouble/; dedicated comparison evidence now exists.
- Apollo recommendation card: https://counterculturecoffee.com/products/apollo becomes /coffee-beans/counter-culture-apollo/; brighter alternative now reviewed.
- Add “Beans for espresso and drip” card to /coffee-beans/best-coffee-beans-for-espresso-and-drip/; compare the same coffee across methods.
Official evidence citations are preserved. No date churn or review-refresh quota credit for these link-only edits.

Source /grinder/:
- Add card “Fellow Opus 2” and comparison-row “Review” link to /grinder/fellow-opus-2/.
- This repairs its missing hub/finder path; it is not a new grinder publication and is counted once in weekly actuals.

## Weekly reconciliation and listicle review

Production HTTP/canonical/H1 checks passed for all 177 unique URLs (all finder reviews plus weekly published URLs) before the change.
Tuesday October 13–Friday October 16 verified actuals: refreshes 30/40; machines 4/4; grinders 2/2; beans 20/20; listicles 4/4.
Hologram is counted once. Draft and Published ledger rows for the same URL are not separate publications. Historical research/draft entries are preserved and superseded by their published rows; all associated Queue slots are published. No open PR existed at audit start.
Missing refreshes: ten October 16 refresh slots, not fabricated or bulk-published by this audit. Weekend listicles and refreshes remain future scheduled work: partial Tuesday–Sunday target is 60 refreshes and six listicles. First-week machines are four because Monday preceded authorization.
The four new listicles have distinct primary decisions: dark roast, one coffee across espresso/drip, decaf by brew method, and milk-drink fit. Each was independently verified live, has linked reviewed picks, a category-index path, sitemap entry, sources, methodology/limitations and explicit buying trade-offs. Cross-links overlap usefully; no new overlapping guide created. Product-specific tasting remains attributed rather than claimed.

## Validation and limits

Build: 255 Astro pages; 238 canonical SEO sitemap URLs. Finder validator compares complete route sets, duplicates, schema ratings, currency boundaries and regression fixtures; grinder catalog compares all registered grinder routes.
Review/migration, Amazon banners/catalog, bean reviews, SEO/schema/canonical/images/duplicate IDs/internal links, originality and supporting-page validators passed. Article parity audit is report-only and reports pre-existing 153 gaps (146 word-range gaps and 15 missing-module pages); this is not a strict-parity pass.
The body-link crawl found no broken paths. Its “orphans” are pages without static body links after deliberately excluding navigation/header/footer and JS-created finder cards; this does not establish sitewide orphan status. Remaining long-tail machine opportunities are deferred to relevant contextual source work, not indiscriminate cards.
Desktop 1280 and mobile 390 checks include full finder combined filters, reset, zero-results, keyboard activation, new Rivelia selection and Hologram links. Compact, grinder and brand QA results are recorded in the local receipt before publication.

Amazon offer run 38892995928 on October 16 failed with HTTP 403 at GetItems despite credential fields being present (values not copied). This is an API authorization/access blocker, not evidence that credentials are missing. Latest finder job 38280296143 (October 12) succeeded. No workflow was duplicated, retriggered or removed. Fresh Amazon prices cannot be certified by this audit; dated fallback prices and stock caveats remain. No discount or new checkout claim is made.
Catalog-wide model/specifications were compared with registered source records and reviewed for anomalies; this audit does not claim a fresh official-source revalidation of every historical specification or every stock state. Thirteen identified hardware errors received current source checks and explicit corrections.
Production deployment ID, merge commit and changed-page live QA are recorded after successful deployment in the durable tracker and operations receipt.

