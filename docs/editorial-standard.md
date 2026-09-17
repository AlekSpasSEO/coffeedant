# Coffeedant editorial standard

The Breville Barista Express BES870XL review is the canonical product-review reference. Its presentation, evidence discipline, decision usefulness, and approximate depth define the quality bar. The goal is not to copy its wording or force product-review modules onto pages with a different purpose.

## Scope

The September 17, 2026 sitemap contains 194 URLs:

- 149 individual product reviews
- 8 buying guides
- 7 educational blog articles
- 30 brand, index, home, trust, utility, and legal pages

The 164 editorial URLs must meet a type-appropriate version of this standard. Brand, index, trust, utility, and legal pages retain their own information architecture.

## Product-review acceptance criteria

A product review is complete only when it meets all of these requirements in the built page:

- One canonical product identity, permanent product ID, exact model or generation, and regional scope
- One H1 and one production canonical URL
- Approximately 4,700 to 5,500 editorial words, excluding image captions and the community-evidence panel
- The shared `MachineReview` layout and responsive visual system
- Product hero, named author, role, author note, publication date, and update date
- Overall editorial rating out of 5
- Six relevant category ratings out of 10, each with a linked evidence deep dive
- A compact buying verdict, six quick answers, key specifications, buy/skip guidance, pros, and trade-offs
- Product-specific setup, performance, workflow, design, maintenance, cost, comparison, ownership, and FAQ coverage
- One simple comparison table and one detailed linked comparison table
- Four relevant internal recommendation cards
- At least ten annotated evidence records, including official documentation, independent evaluation, and owner or community context
- A clear research-led, hands-on, or hybrid methodology disclosure
- No first-person testing claim unless a documented Coffeedant protocol supports it
- One independent video with matching `VideoObject` data and a source record
- At least six fully visible FAQ answers, with no FAQ dropdown controls
- Owner evidence summarized on the page without outbound links inside the evidence panel; original discussions remain in the source ledger
- Up to three editorial images: one hero and up to two credited inline images
- Responsive images with explicit dimensions, useful alternative text, source type, credit, usage record, and disclosure
- `Product`, `Article`, `VideoObject`, and `BreadcrumbList` JSON-LD matching the canonical page
- Affiliate links marked `nofollow sponsored noopener`; community source links marked `ugc noopener`

## Buying-guide acceptance criteria

Buying guides use the same typography, author treatment, evidence styling, navigation, responsive tables, media rules, and trust disclosures. They do not receive an arbitrary product score or single-product price block.

Each guide must include:

- A clear decision framework before the product list
- Defined inclusion and exclusion criteria
- Linked recommendations with explicit best-fit and avoid-if guidance
- A quick comparison followed by a detailed comparison
- Category-specific buying factors, ownership costs, and maintenance consequences
- Methodology, sources, visible FAQs, internal links, and accurate structured data
- Approximately the same useful reading depth as the reference when the search intent supports it

## Educational-article acceptance criteria

Educational articles use a sibling editorial layout with the reference typography, author card, dates, sticky section navigation, evidence treatments, tables, images, methodology, sources, visible FAQs, and internal recommendations. They do not receive product ratings, retailer calls to action, or `Product` schema unless the page genuinely reviews a product.

## Content rules

- Preserve the useful original research, but remove obsolete pricing, unsupported measurements, duplicate passages, and conflicting model claims.
- Lead each section with the decision or practical answer, then show the evidence and limitations.
- Do not inflate word count with repeated summaries, generic coffee advice, or paraphrased specifications.
- Attribute third-party measurements and owner experiences. Anecdotes do not establish failure rates.
- Date prices and volatile product details. Do not present a dated price as a permanent market fact.
- Keep comparisons aligned to the same buyer decision, price class, and workflow.
- Use permanent internal URLs and link named comparison products to their Coffeedant review.
- Keep FAQs visible in the page. A details control is reserved for the expanded technical comparison, not FAQ answers.

## Required validation

Every completed batch must pass:

1. Production build
2. Modern review validator or the matching guide/article validator
3. Full-sitemap editorial audit
4. Internal-link, duplicate-ID, schema, canonical, image, and source checks
5. Mobile and desktop visual review
6. Live URL verification after GitHub Pages deploys

A page is not complete merely because a legacy wrapper capped its images or expanded its FAQ. It is complete only after the page itself meets the applicable acceptance criteria above.
