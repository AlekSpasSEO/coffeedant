import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Intuition%C2%A0Experience%2B---Stainless-Steel/p/8010001252';
const support = 'https://www.krups.co.uk/instructions-for-use/csp/8010001252';
const seller = 'https://www.directvacuums.co.uk/krups-ea877d40-bean-to-cup-coffee-machine-intuition-experience-1550w-3l-silver.html';
const independent = 'https://www.prorankingi.pl/blog/krups-intuition-experience-ea877d-test-opinia/';
const film = 'https://www.youtube.com/watch?v=5xfnxeO9XwM';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMzU3MDl8aW1hZ2UvcG5nfGFXMWhaMlZ6TDJnMllTOW9ORGN2TWprME5qUTROVGt3TVRjeU5EWXxhNzQzNDU0OTVjNGY3M2M5YjU0NTQ5MzNkZjg3ZWQzMDU2YzkwYzNiYzRlNGQ4ZWFmNWFmMGZkMTFhZmMyZDY1';

const profile: UpgradeReviewProfile = {
  key: 'krups-intuition-experience-ea877d40', slug: '/espresso-machine/krups-intuition-experience-ea877d40/', productId: 'CD-EM-000191',
  brand: 'Krups', model: 'Intuition Experience+ EA877D40', sku: 'UK EA877D40, 220–240 V right-angle UK plug', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Intuition Experience+ EA877D40 review: 21 drinks',
  description: 'Exact UK EA877D40 research review: 21 named drinks, milk and cold menu limits, 13-step grinder, eight profiles, cleaning, independent Polish test and sold-out refurbished listing.',
  verdictLabel: 'Large shared menu, with meaningful cold-drink limits',
  verdict: 'Consider the UK EA877D40 if a family uses its 21 named drinks, up to eight profiles and two-cup milk service. Krups UK lists 13 grind positions, a 3 L reservoir, 250 g beans and a 14 cm outlet limit. Its “Nitro Coffee” and “Chilled Coffee” are named programs, not independently established true cold extraction or nitrogen infusion. A September 24, 2026 £379.99 exact-model refurbished listing was sold out, so compare an actual stocked offer and its warranty.',
  assessment: 'This is a research-led judgment, not Coffeedant tasting. Łukasz Proszek independently evaluated an EA877D in Poland, with a filmed Nitro-labeled menu demonstration; that regional unit is not a confirmed UK EA877D40 plate. The manufacturer specification is used for exact UK features, while the independent evaluation informs workflow without transferring regional measurements.',
  image, imageAlt: 'Krups UK official angled image of stainless EA877D40 with two black-coffee cups',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK EA877D40 refurbished reseller listing, sold out', msrp: 'No verified manufacturer UK RRP or available new checkout', typical: 'DirectVacuums displayed £379.99 against its £1,099 comparison on September 24, 2026 for manufacturer-refurbished EA877D40, out of stock with a one-year reseller guarantee. The comparison amount is not established manufacturer MSRP, and refurbished pricing must not stand in for a new-unit quote.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Check exact-model refurbished stock', href: seller, note: '£379.99 displayed but sold out September 24, 2026; one-year reseller cover', primary: true },
    { label: 'Read exact Krups UK EA877D40 specification', href: official, note: '21 drinks, 13 grind levels, profiles, milk, cold labels and care' },
  ],
  facts: [
    { label: 'Exact market', value: 'UK EA877D40 in metal finish; 220–240 V, right-angle UK plug in Krups UK table' },
    { label: 'Menu', value: '21 named drinks including Nitro Coffee, Chilled Coffee, Iced Latte and tea settings; names do not establish nitrogen dosing or cold extraction' },
    { label: 'Profiles', value: 'Up to eight colour-coded profiles, each with seven saved recipes; four strength levels' },
    { label: 'Grinder', value: 'Krups UK lists 13 manual grind positions and three temperature settings; reseller says five grinder settings, a conflicting count not adopted' },
    { label: 'Milk', value: 'Krups UK lists One Touch Cappuccino x2, automatic milk rinse but manual milk-system cleaning' },
    { label: 'Capacities', value: '3 L water, 250 g beans, nine-puck collector, 14 cm maximum outlet clearance per exact UK manufacturer table' },
    { label: 'Power', value: '1550 W, 15-bar pump rating; not measured espresso pressure or noise' },
  ],
  quickAnswers: [
    { question: 'Is this the UK EA877D40?', answer: 'Yes. Exact Krups UK product and support pages identify EA877D40 and a UK plug. Polish EA877D hands-on findings are adjacent-market context only.' },
    { question: 'Does Nitro Coffee contain nitrogen?', answer: 'No nitrogen dosing or infusion process was verified. It is a named preset, so do not equate it with café nitro coffee.' },
    { question: 'Is this true cold brew?', answer: 'A cold-labeled menu is documented, but independent time/temperature extraction evidence for UK EA877D40 is absent. Do not promise long cold steeping.' },
    { question: 'Can it make two cappuccinos?', answer: 'Krups UK lists One Touch Cappuccino x2. Rinse the milk circuit and clean food-contact parts manually.' },
    { question: 'Is the grinder five or thirteen steps?', answer: 'The exact manufacturer specification says 13 manual positions; the refurbished reseller says five. Use the manufacturer count for this UK article and confirm on the delivered unit.' },
    { question: 'Is £379.99 a current new-machine price?', answer: 'No. That was an out-of-stock manufacturer-refurbished offer with a one-year reseller guarantee on September 24, 2026.' },
  ],
  bestFor: ['Shared households that genuinely use separate favourite profiles', 'People switching between black, milk and chilled-drink menu formats', 'Couples who value paired automatic milk drinks'],
  avoidIf: ['You require documented nitrogen infusion or true slow cold-brew extraction', 'You want a currently in-stock new UK machine at £379.99', 'You prefer a manual steam wand or owner-removable brew module'],
  pros: ['Exact UK Krups table documents 21 programs and eight profiles', '13-position grinder and three temperature settings', 'Paired milk drinks and 3 L reservoir', 'Manufacturer parts and maintenance support path'],
  cons: ['Manual deep cleaning still needed despite automatic milk rinses', 'No verified current new or refurbished in-stock UK checkout', 'Reseller grinder count conflicts with exact manufacturer table', 'Cold menu names can overstate the documented mechanism'],
  architecture: 'a UK-plug stainless-finish bean-to-cup machine with metal conical burr grinder, compact thermoblock, colour TFT touchscreen, dual coffee spout and external automatic milk tube',
  identityBoundary: 'This page covers Krups UK EA877D40. Polish independent EA877D lacks a verified UK plate. Intuition Experience Hot & Cold EA879N, Preference EA875U40 and Essential EA870840 differ; claims for them do not transfer. “Smartphone-like” describes touch-interface styling, not a verified smartphone app.',
  primaryStrength: 'Eight profile slots, each holding seven favourites, make repeated household orders easier to organise.',
  primaryLimit: 'Its premium menu needs careful evidence boundaries for cold labels, milk hygiene and available UK pricing.',
  setupNote: 'Confirm UK EA877D40 on the delivered plate, plug, milk tube and manual. Krups lists 3 L water, 250 g beans, nine used pucks and a 14 cm maximum cup clearance. Leave room to fill beans/water and route chilled milk safely. Set water hardness and complete the initial rinse before trying favourites.',
  espressoNote: 'Krups UK names ristretto, espresso, lungo, long coffee, doppio and Americano, plus 13 manual grind positions, four strength levels and three temperature settings. The retailer claims five grind settings, but the exact manufacturer table controls this review. Proszek’s Polish evaluation demonstrates family workflow, not a Coffeedant UK taste or temperature result. Fifteen bar describes a pump rating.',
  milkNote: 'One Touch Cappuccino x2 supports paired milk orders, and the official table lists automatic milk rinsing alongside manual milk-system cleaning. The tube, connector and vessel remain food-contact parts. Do not turn a marketing “perfect temperature” promise into a measured value; choose an accessible cleaning routine.',
  workflowNote: 'Seven saved recipes across each of eight profiles can help a multi-person household, while the colour TFT and light prompts organise selection. Check how quickly users switch profiles, fill the 3 L reservoir, empty grounds and clean milk. A Polish EA877D demonstration contextualises these tasks but cannot certify exact UK timings or firmware.',
  buildNote: 'The exact UK table lists 1550 W, a metal grinder, brushed finish, thermoblock and a 14 cm cup limit. Krups offers article-linked filter, milk tube and cleaning supplies. The reseller listing is manufacturer-refurbished with a one-year guarantee, not equivalent to an unverified new-unit offer or proof of a particular machine lifespan.',
  featuresNote: 'Named cold settings include Nitro Coffee, Chilled Coffee, Iced Latte and Frappé, but there is no documented nitrogen charger or verified cold-steep protocol. Read them as recipes that may depend on chilled ingredients or ice. The manufacturer calls the interface smartphone-like; no app or Bluetooth connection is established on exact UK materials.',
  valueNote: 'On September 24, 2026 DirectVacuums showed £379.99 for an out-of-stock manufacturer-refurbished EA877D40, compared with its own £1,099 reference. Neither an in-stock new price nor a manufacturer RRP was verified. Compare the delivered warranty, milk consumables, filter, tablets and exact UK seller before treating that discount as a bargain.',
  ownerPattern: 'A 2024 Reddit owner described an EA877-family unit stuck on a tips-and-tricks/demo screen after purchase, with a later community workaround. The exact UK EA877D40 plate, diagnosis and result were not verified. A separate purchase-advice thread compared an EA877D with a Philips 5500, but its initial poster was not an owner.',
  ownerCaution: 'One setup difficulty is not a failure rate. Avoid repeating a community-supplied hidden service-menu code as authorised repair guidance; contact Krups support for an affected delivered unit. The Polish test is independent editorial evaluation but not a UK reliability cohort.',
  maintenanceNote: 'Follow the exact support page and delivered instructions for rinses, prompted coffee cleaning, filter replacement and descaling. The Krups table distinguishes automatic milk *rinsing* from manual milk-system *cleaning*, so wash and dry tube/contact parts after use. Do not attempt internal electrical or pressure repairs from forum posts.',
  dimensions: {
    espresso: { score: 8.0, claim: 'Exact UK table gives 13 grind positions, three temperatures and four strengths.', consequence: 'Broad control still needs beans and repeated adjustment; no Coffeedant cup measurement.', status: 'Exact Krups UK specification; Polish EA877D independent context', signals: ['Black recipes include ristretto through Americano.', '13 manual grinder positions in Krups table.', '15-bar is pump rating only.'] },
    milk: { score: 8.0, claim: 'Manufacturer specifies two simultaneous milk drinks and automatic rinsing.', consequence: 'Paired service saves selection steps, not manual sanitation.', status: 'Krups UK table; no measured foam results for UK SKU', signals: ['One Touch Cappuccino x2 listed.', 'Milk cleaning marked manual.', 'External tube and vessel need care.'] },
    workflow: { score: 8.5, claim: 'Eight profiles with seven recipes each suit a shared machine.', consequence: 'Validate switching and cleanup, not only profile count.', status: 'Exact official UK page and adjacent independent film', signals: ['21 named drinks and light-guided TFT.', 'Profile favourites reduce repeat setup.', 'Grounds and milk rinses remain.'] },
    build: { score: 7.4, claim: 'Krups supplies exact-model care parts but does not provide a failure cohort.', consequence: 'Local support, warranty and actual revision matter more than finish.', status: 'Official support and refurbished reseller terms', signals: ['3 L water and 250 g beans.', '14 cm stated outlet clearance.', 'One-year reseller guarantee on sold-out refurb.'] },
    features: { score: 8.0, claim: 'The wide menu and profiles are documented, unlike a supposed app or nitrogen system.', consequence: 'Judge which presets remove actual work without assuming their names describe extraction physics.', status: 'Exact UK table; marketing cold names; mechanism unverified', signals: ['Nitro/Chilled are named recipes.', 'No verified smartphone connectivity.', '13 official versus five reseller grind steps.'] },
    value: { score: 6.8, claim: 'A £379.99 exact refurbished listing was sold out on the dated check.', consequence: 'Price this decision only against a live stocked offer with delivered warranty.', status: 'DirectVacuums September 24, 2026; no new-unit checkout', signals: ['Refurbished condition and one-year cover.', 'Retailer £1,099 reference not official MSRP.', 'Milk and filter supplies add costs.'] },
  },
  sources: [
    { label: 'Krups UK exact EA877D40 product and specification', href: official, note: 'UK plug, 21 recipes, 13 grinder positions, capacities, profiles, milk rinse/manual clean distinction and cold recipe names; checked September 24, 2026.' },
    { label: 'Krups UK EA877D40 support and documentation', href: support, note: 'Exact article identity, linked manual, cleaning guidance and article support; generic FAQ items not all SKU-specific.' },
    { label: 'DirectVacuums refurbished UK EA877D40 listing', href: seller, note: '£379.99 vs seller £1,099 reference, manufacturer refurbished, one-year guarantee and sold out September 24, 2026; claims five grind settings contrary to Krups 13.' },
    { label: 'PROrankingi independent Polish EA877D hands-on', href: independent, note: 'Łukasz Proszek independent Polish-market test, last updated May 31, 2026, with photos and video; UK EA877D40 plate not verified and commercial links disclosed.' },
    { label: 'PROrankingi independently filmed Nitro-named program', href: film, note: 'November 22, 2022 3:09 Polish EA877D demonstration; no laboratory verification of nitrogen dosing or exact UK variant.' },
    { label: 'Krups UK EA877D40 compatible parts', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Full-automatic/Intuition-Experience%2B---Stainless-Steel/csp/8010001252', note: 'Article-indexed tube, tablets and filters; check stock and part revision.' },
    { label: 'Krups UK manufacturer guarantee terms', href: 'https://www.krups.co.uk/warranty', note: 'Manufacturer policy context only; compare exact seller/delivered package terms.' },
    { label: 'Reddit EA877-family demo-mode owner question', href: 'https://www.reddit.com/r/superautomatic/comments/1co849l/krups_ea877_stuck_in_demo_mode/', note: '2024 new owner reported demo-screen issue; UK EA877D40 plate and diagnosis unverified; one case, no reliability inference.' },
    { label: 'Reddit EA877D versus Philips 5500 purchase question', href: 'https://www.reddit.com/r/superautomatic/comments/1o5v49w/philipps_lattego5500_or_krups_intuition/', note: '2025 prospective-buyer discussion, not representative owner evaluation or specific UK article testing.' },
    { label: 'Manufacturer-linked EA877D40 instruction PDF', href: 'https://dam.groupeseb.com/m/ad7a3aaa726bf881/original/8020006479-IFU.pdf?timestamp=20250714163508', note: 'Exact support-linked manual; full file not retrievable in research environment. Specific claims rely on accessible exact UK product and support text.' },
  ],
  comparisons: [
    { name: 'Krups Intuition Experience+ EA877D40', quickDecision: 'Profiles and paired milk if a stocked UK seller appears.', priceClass: '£379.99 sold-out refurbished Sep 24', dimensions: '14 cm outlet maximum', heating: 'Krups compact thermoblock', coffeeSetup: '21 recipes, 13 grind steps', milkWorkflow: 'Paired auto milk; manual deep clean', bestFor: 'Multi-user preset range' },
    { name: 'Krups Intuition Essential EA870840', href: '/espresso-machine/krups-intuition-essential-ea870840/', quickDecision: 'Manual steam and simpler black menu.', priceClass: '£319.99 sold-out reseller Sep 24', dimensions: '3 L retailer-listed tank', heating: 'Retailer-listed thermoblock', coffeeSetup: 'Four drink functions, two favourites', milkWorkflow: 'Manual steam wand', bestFor: 'Hands-on milk' },
    { name: 'Krups Evidence One EA895N40', href: '/espresso-machine/krups-evidence-one-ea895n40/', quickDecision: 'Paired automatic milk, fewer saved favourites and no cold claims.', priceClass: '£499 sold-out NI listing Sep 24', dimensions: '15 cm outlet limit', heating: 'Automatic thermoblock', coffeeSetup: '12 recipes, 17 choices', milkWorkflow: 'Automatic paired milk with hose cleaning', bestFor: 'Simpler milk programme' },
  ],
  comparisonNote: 'Compare exact UK stock, delivered warranty, milk routine, cup clearance and whether cold menu presets justify the premium. Polish EA877D and newer EA879N are not interchangeable UK evidence.',
  recommendations: [
    { kicker: 'Simpler milk', title: 'Krups Evidence One EA895N40', text: 'Paired milk with fewer profiles and a distinct 12-recipe menu.', href: '/espresso-machine/krups-evidence-one-ea895n40/', linkLabel: 'Read Evidence One review', featured: true },
    { kicker: 'Manual wand', title: 'Krups Intuition Essential EA870840', text: 'Keep black-coffee presets, accept manual milk technique and cleaning.', href: '/espresso-machine/krups-intuition-essential-ea870840/', linkLabel: 'Read Intuition Essential review' },
    { kicker: 'Different service path', title: 'De’Longhi Magnifica Evo', text: 'Compare an exact variant with removable brewing unit access.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read Magnifica Evo review' },
    { kicker: 'Category context', title: 'Superautomatic machines', text: 'Balance saved recipes against care work and verified in-stock cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Does EA877D40 actually make Nitro Coffee?', answer: 'Krups lists a program under that name. No nitrogen injection or infusion hardware was verified; do not equate it with café nitro on tap.' },
    { question: 'Is Chilled Coffee true cold brew?', answer: 'The exact UK menu uses cold labels, but time/temperature of extraction was not independently established. A chilled cup or ice-assisted recipe is not automatically a slow cold steep.' },
    { question: 'How many grinder settings does the UK model have?', answer: 'Krups UK specifies 13 manual levels. The refurbished reseller says five; that conflict is unresolved in its listing, so check your delivered unit against the manufacturer manual.' },
    { question: 'Can it make two milk coffees at once?', answer: 'Yes, the exact UK table specifies One Touch Cappuccino x2. Automatic rinse does not eliminate manual cleaning of milk-contact parts.' },
    { question: 'How many profiles and favourites?', answer: 'Krups UK says up to eight profiles, with up to seven recipes saved to each. Four strength choices are separately listed.' },
    { question: 'Does it have smartphone connectivity?', answer: 'No app/Bluetooth feature was verified on exact UK documentation. “Smartphone-like” is manufacturer wording for the colour touchscreen layout.' },
    { question: 'Is £379.99 an available new UK price?', answer: 'No. It was a sold-out refurbished listing on September 24, 2026 with a one-year reseller guarantee and a seller comparison amount, not a confirmed new-machine checkout.' },
  ],
  finalTitle: 'Choose the profiles and paired milk, with clear cold-menu limits',
  finalVerdict: [
    'The official UK EA877D40 documents a capable 21-drink menu, 13-position grinder, eight profiles and paired milk preparation. Milk rinses are automatic but deeper milk cleaning is manual. Cold program labels do not establish nitrogen dosing or long cold steeping.',
    'The independent Polish EA877D evaluation gives useful workflow context without becoming Coffeedant UK testing. The only dated exact UK price checked was an unavailable refurbished offer. Confirm a stocked unit, seller warranty and real cold-drink expectations before paying for this wide menu.',
  ],
  video: { id: '5xfnxeO9XwM', title: 'KRUPS Intuition Experience+ EA877D - Test robienia kawy mrożonej Nitro', creator: 'PROrankingi', published: '2022-11-22', note: 'Independent Polish 3:09 hands-on demonstration of Nitro-named recipe, linked to Łukasz Proszek’s broader Polish EA877D review. UK EA877D40 plate and nitrogen hardware not verified.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern} These experiences are scoped to what their authors actually observed, not presented as a UK model-wide outcome.</p>
    <aside class="review-community-evidence" aria-labelledby="experience-owner-title"><h3 id="experience-owner-title">Community accounts kept in context</h3><ul>
    <li><strong>EA877-family setup report, 2024</strong><p>A new owner described a tips-and-tricks/demo screen that prevented normal use. A later commenter suggested a hidden-menu workaround. No exact UK article plate, manufacturer confirmation, repair outcome or incidence rate is available.</p></li>
    <li><strong>EA877D shopping discussion, 2025</strong><p>A prospective buyer compared this family with a Philips 5500. Asking for guidance is not firsthand long-term use and cannot be scored as such.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable on Coffeedant without outbound links in this panel. The original discussions are documented in the source ledger.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeKrupsIntuitionExperienceReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
