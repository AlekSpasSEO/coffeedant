# Amazon catalog matching — October 13, 2026

The Finder now has 52 direct machine listings, up from 13: 39 newly matched machines. The full price-refresh catalog contains 53 products including the existing 1Zpresso grinder. The other 92 Finder machines retain a clearly labeled Amazon search link.

## Evidence and matching method

- Queried Amazon US through Creators API SearchItems for all 131 previously unmatched Finder machines, then made a second pass with shorter model names and `IncludeOutOfStock`: 262 searches in total.
- Resolved 131 distinct Amazon links in the legacy review exports. Queried 34 recovered US ASINs through GetItems; Amazon returned 32. Separately rechecked all 14 original catalog ASINs, including model identifiers and features.
- Compared titles, manufacture model codes, milk hardware, generation, region, and package against the active review records. Search relevance alone was not used as proof of a match.
- Refreshed all 53 final catalog products through GetItems. New listings use `condition: New`; the two explicitly labeled Amazon Renewed ASINs use `condition: Any`.
- Raw search and listing responses remain local diagnostic outputs, outside the repository and deployed site. Credentials are never written into those outputs.

The repeatable lookup utility is `scripts/search-amazon-catalog.mjs`. It supports `--credentials <csv>` (or the existing environment variables), `--output <path>`, `--resume`, `--broad`, `--only <path-fragment>`, `--keywords`, `--queries <json>`, `--verify-catalog`, `--asins`, `--resolve-legacy`, and `--export-identities`. Search outputs are candidate evidence; mappings require review before publication. API behavior follows [Amazon's SearchItems documentation](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/operations/search-items).

## Corrections and purchase distinctions

- Magnifica Evo: replaced `B0B38KFWNK` (ECAM29043SB, manual milk) with `B0B38KRTV6` (ECAM29084SB, LatteCrema), matching the scored review.
- Cadorna Barista Plus: corrected the review's displayed code to RI9601/47 and linked `B089DP1KVD`. RI9603/47 identifies Cadorna Milk. The [manufacturer's North American page](https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus) documents the manual steam wand; [Philips' parts portal](https://philips.encompass.com/model/SAERI9601%7C47) and Amazon's model field identify RI9601/47. The existing URL is preserved.
- Philips 5400 EP5447/94 and Saeco Xelsis SM7685/04 are Amazon Renewed listings; links, displayed offer prices, and purchase notes label that condition. No current Saeco offer price was returned.
- Krups Opio XP320840 is the exact UK 220–240 V edition; the card notes voltage and plug compatibility. Miele CM 6360 uses the US Obsidian Black finish rather than the review's Lotus White photograph. GIGA 6 links new stock while the review's reference price describes factory-refurbished stock. Those distinctions appear beside the purchase link.
- ECM Classika PID is the standard listing; the card does not promise an included flow-control kit.

## Unconfirmed matches

Several old links resolved to a different machine: BZ13's link was BZ10; Dinamica ECAM370's link was ECAM35075SI; Magnifica Start manual-milk linked ECAM22080SB automatic milk; Classic GT linked a Classic Pro; Philips 2200 LatteGo linked the EP2220/14 manual-frother trim. These were not reused for the mismatched reviews.

Amazon listings can also reuse older ASINs. The Classic Evo Pro ASIN now identifies E24, and the Flair PRO 2 ASIN now advertises 49 PRO; those generations were not silently substituted. Current JURA E6/E8/Z10 review generations, exact UK/EU suffixes, commercial machines, and models for which the API returned only parts, unrelated machines, or no results retain search links. Failure to confirm a match through these checks is not proof that the product is absent from every Amazon marketplace.

## Verification

Production build, existing review/migration/analytics gates, and the new catalog validation check run before deployment. Catalog validation checks recognized review paths, ASIN/offer/Finder URL agreement, affiliate attribution, all 144 distinct card descriptions, and purchase-condition labels. Cached offers with a different ASIN are ignored, preventing an old price-refresh record from redirecting a newly corrected mapping.
