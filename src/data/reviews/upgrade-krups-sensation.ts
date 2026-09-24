import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Sensation---Aluminium/p/8010001251';
const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/Sensation---Aluminium/csp/8010001251';
const manual = 'https://dam.groupeseb.com/m/04789e2af5d6293c/original/EA91-KRU-en.pdf?timestamp=20250714191848';
const seller = 'https://www.directvacuums.co.uk/krups-ea910e40-sensation-fully-automatic-coffee-machine-bean-to-cup-digital-like-new.html';
const independent = 'https://www.lemonde.fr/guides-d-achat/article/2024/07/31/les-meilleures-machines-a-cafe-a-grains-de-500-a-1-000-euros_6262975_5306571.html';
const film = 'https://www.youtube.com/watch?v=w9Dz5JrEnpY';
const hero = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxODg0Njd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGhOQzlvTVRJdk1qZzRNVGswTlRZNU5UQXpNREl8MDVmNWY1OTY2NTNiZTc0NjlkOWFkZGM4NmNjMzJmODgzNmUxOTlkZGVkOWNjZTJjZTg4MDIyMTM0ZDZiZDA5NA';

const profile: UpgradeReviewProfile = {
  key: 'krups-sensation-ea910e40', slug: '/espresso-machine/krups-sensation-ea910e40/', productId: 'CD-EM-000194',
  brand: 'Krups', model: 'Sensation EA910E40', sku: 'UK EA910E40, silver and black, UK plug', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Sensation EA910E40 review: simple black coffee',
  description: 'Exact UK EA910E40 research review: four black coffees, hot water, manual steam, two favourites, five grind levels, independent jury test and dated stock.',
  verdictLabel: 'Clear black-coffee automation with manual milk and uncertain stock',
  verdict: 'Consider the UK EA910E40 if you want four direct black-coffee recipes, hot water, two favourites and manual steam. Krups documents five grind levels, three strengths and temperatures, a 1.7 L tank and 260 g hopper. Le Monde’s jury praised the interface, maintenance and quiet startup, but exact UK retailers checked on September 24, 2026 showed it unavailable.',
  assessment: 'This is research, not Coffeedant tasting. Exact facts come from Krups UK and the EA91 manual. Le Monde tested a French Sensation with seven jurors but did not identify a UK rating plate. The C50 video also leaves the UK suffix unconfirmed. These sources add workflow context, not UK measurements or reliability rates.',
  image: hero, imageAlt: 'Krups UK official angled image of the silver and black Sensation EA910E40 dispensing two coffees',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK EA910E40 unavailable listing', msrp: '£499.99 seller reference', typical: 'DirectVacuums displayed £369.99 for an exact EA910E40 described as brand-new condition with a one-year seller guarantee, but it was out of stock on September 24, 2026. Currys Business also marked the exact article unavailable. No current in-stock UK checkout was established.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Read the exact Krups UK specification', href: official, note: 'Exact UK article, recipes, grinder, capacity, steam, care and electrical details', primary: true },
    { label: 'Check the dated exact-model listing', href: seller, note: '£369.99 and out of stock on September 24, 2026; one-year seller cover' },
  ],
  facts: [
    { label: 'Exact market', value: 'UK EA910E40 in silver and black, straight UK plug, 220–240 V, 50 Hz and 1450 W' },
    { label: 'Drink panel', value: 'Ristretto, espresso, long coffee, filter coffee and hot water; milk is textured manually' },
    { label: 'Coffee controls', value: 'Five manual grind levels, three strengths, three temperatures, adjustable volume and two favourites' },
    { label: 'Serving', value: 'Two black coffees per cycle, one manual milk workflow and 13 cm maximum outlet clearance' },
    { label: 'Capacities', value: '1.7 L removable water tank, 260 g bean hopper and nine-puck collector' },
    { label: 'Brew hardware', value: 'Metal conical burr grinder, compact thermoblock and 15-bar pump rating; not a measured puck-pressure claim' },
    { label: 'Energy', value: '0.3 W off mode and 15 minutes to off mode in the exact manufacturer table' },
  ],
  quickAnswers: [
    { question: 'Is this the exact UK EA910E40?', answer: 'Yes. Krups UK identifies EA910E40, UK plug, silver-and-black finish, 220–240 V, 50 Hz and 1450 W.' },
    { question: 'How many automatic drinks?', answer: 'Four black coffees plus hot water are direct selections. The steam function is manual, so cappuccino and latte are not one-touch milk recipes.' },
    { question: 'Does it save user profiles?', answer: 'It stores two favourites, not full named profiles with broad menus. Strength and volume can be personalised.' },
    { question: 'Can it use preground coffee?', answer: 'The exact materials do not document a preground bypass. Le Monde’s jury specifically disliked the absence of a preground chute on its Sensation.' },
    { question: 'Was £369.99 available?', answer: 'No. DirectVacuums displayed that exact-model price but marked the machine out of stock on September 24, 2026.' },
    { question: 'Is the brew unit owner-removable?', answer: 'No owner-removable brew group is documented. Krups uses automatic hydraulic cleaning and tablet prompts; the steam wand and external parts still need manual care.' },
  ],
  bestFor: ['Black-coffee households that want four direct recipes and two favourites', 'Buyers who prefer automatic brewing but are willing to texture and clean milk manually', 'UK shoppers who find a trustworthy in-stock EA910E40 offer with clear coverage'],
  avoidIf: ['You want automatic cappuccino, multiple named profiles or a preground chute', 'You require an owner-removable brew group for direct internal inspection', 'You need a current in-stock UK price before comparing value'],
  pros: ['Four black-coffee selections plus hot water and two-cup brewing', 'Five grind levels, three strengths, three temperatures and two favourites', '1.7 L removable tank, 260 g hopper and 13 cm outlet clearance', 'Le Monde jury praised interface, maintenance and quiet startup'],
  cons: ['Milk drinks require manual steaming and cleanup', 'No preground bypass documented', 'Brew group is not documented as owner-removable', 'Exact UK offers checked were unavailable'],
  architecture: 'a UK automatic bean-to-cup machine with metal conical burr grinder, compact thermoblock, dual coffee outlet, angled button panel, two favourites and a manual steam nozzle',
  identityBoundary: 'This page covers UK EA910E40. Sensation C50, EA910B, EA910810 and newer Sensation Milk or Elite variants may differ in finish, voltage, package, milk automation and support; their claims do not transfer automatically.',
  primaryStrength: 'Four black-coffee recipes, clear direct controls and two favourites simplify a household that does not need automatic milk.',
  primaryLimit: 'Milk remains manual, the brew group is not owner-accessible, and no current exact UK checkout was available to establish value.',
  setupNote: 'Confirm EA910E40, UK plug, rating plate, tank, collector, steam nozzle, cleaning needle, guide and invoice. Set water hardness, prime the filter if used, rinse, and leave access around the hopper, tank and collector. Currys lists 364 × 240 × 346 mm and 9.5 kg; verify the delivered unit because Krups UK omits dimensions.',
  espressoNote: 'The panel offers ristretto, espresso, long and filter coffee, with five grind positions, three strengths and temperatures, and adjustable volume. Le Monde’s jury liked the clear controls and four black recipes. Its timing and temperature discussion groups Krups machines, so those measurements are not assigned to UK EA910E40. Fifteen bar is the pump rating.',
  milkNote: 'Milk texture comes from the manual steam nozzle; the machine does not dose milk or build cappuccino automatically. Use cold milk, wipe and purge immediately, and clear blocked openings after cooling. The table contains both manual milk cleaning and an automatic milk-rinse row despite the wand, so the delivered manual controls.',
  workflowNote: 'Drink icons, strength and volume controls, a two-cup key and two favourites make black coffee direct. Le Monde’s jury praised the interface, tablet routine and quiet startup and shutdown. Its speed discussion groups Krups units, so exact UK cold-start time is not claimed. Milk adds steaming and wiping.',
  buildNote: 'Krups documents French production, metal conical grinder, compact thermoblock, parts, a two-year guarantee and 15-year repairability pledge. Repairability is not a lifespan promise. The inaccessible brew group shifts routine internal care to hydraulic rinsing and tablets.',
  featuresNote: 'Useful controls are five grind steps, three strengths, three temperatures, adjustable water, two favourites, two black cups, hot water, manual steam, maintenance lights and 15-minute auto-off. No app, automatic milk, cold menu, preground chute or named multi-user profiles are documented for UK EA910E40.',
  valueNote: 'On September 24, 2026 DirectVacuums showed an exact out-of-stock EA910E40 at £369.99 with one-year seller cover and a £499.99 reference; Currys Business also showed unavailable. That price is context, not an offer. Compare any live unit with Evidence Eco Design, Magnifica Start and Philips options using milk automation, brew-group access, warranty and consumables.',
  ownerPattern: 'One Reddit poster alleged internal grounds-path and sensor problems after about eight months with an EA910-family unit. Another E910B poster criticised limited controls and shared a cup-temperature reading. Selected Coolblue EA910B buyers praised compactness, hot coffee and adjustment while mentioning grinder noise or a collector alert. Regional identities differ.',
  ownerCaution: 'No community source supplies a representative sample, technician diagnosis, consistent care history or exact UK confirmation. One temperature method and one failed unit cannot establish typical performance or failure probability. Use them to ask about returns, service and cleaning access.',
  maintenanceNote: 'Follow the machine prompts for rinsing, cleaning tablets, filters and descaling. Krups says water in the tray can result from automatic circuit draining. Empty and wash the tray and collector, clean the steam nozzle after milk, and respond promptly to CLEAN or CALC alerts. Do not open the machine or force a manual descale outside the documented conditions. Stop use for leaks, electrical smells or persistent faults.',
  dimensions: {
    espresso: { score: 7.7, claim: 'Four black recipes, five grind steps and three strength and temperature levels provide useful automatic control.', consequence: 'The absence of a preground chute and direct dose display limits bean switching and transparent recipe work.', status: 'Exact Krups UK specification plus bounded French independent jury test', signals: ['Ristretto, espresso, long and filter coffee are direct selections.', 'Five grind positions, three strengths and three temperatures.', 'Le Monde praised clarity but did not identify a UK rating plate.'] },
    milk: { score: 6.5, claim: 'A manual steam nozzle can texture milk without a hose or carafe.', consequence: 'Milk drinks require technique, a separate sequence and immediate wiping and purging.', status: 'Exact manufacturer hardware and care guidance; no exact UK steam measurement', signals: ['Steam is manual, not a one-touch milk recipe.', 'No milk dose, texture or temperature program.', 'Official cleaning rows are internally ambiguous, so the manual controls.'] },
    workflow: { score: 8.1, claim: 'Direct icons, two favourites and two-cup service reduce routine black-coffee steps.', consequence: 'The simplicity weakens if the household frequently wants automatic milk or different beans.', status: 'Exact controls plus Le Monde jury evaluation', signals: ['Four black icons, hot water, strength, volume and two favourites.', 'Le Monde jury praised ergonomics and quiet startup and shutdown.', 'Exact UK cold-start time remains unverified.'] },
    build: { score: 7.0, claim: 'Exact support, parts and repair routing are traceable, but internal access is restricted.', consequence: 'Buyers must accept Krups hydraulic cleaning and use qualified service for internal problems.', status: 'Manufacturer support plus isolated owner complaints, without a reliability denominator', signals: ['Metal conical grinder, compact thermoblock and French production.', 'Two-year guarantee and 15-year repairability pledge.', 'No owner-removable brew group documented.'] },
    features: { score: 7.1, claim: 'The machine prioritises black coffee and saved favourites over broad menus and connectivity.', consequence: 'It fits a focused routine, not a household seeking automatic milk or many profiles.', status: 'Exact UK manufacturer table', signals: ['Five drink selections plus manual steam.', 'Two favourites, two black cups and 13 cm clearance.', 'No app, cold menu, preground chute or automatic milk.'] },
    value: { score: 6.3, claim: 'The £369.99 exact listing was unavailable, so current value is not established.', consequence: 'Rank only a live offer with its warranty against alternatives available on the same date.', status: 'Exact UK out-of-stock listings checked September 24, 2026', signals: ['DirectVacuums showed £369.99 and out of stock.', 'Currys Business also marked the exact article unavailable.', 'Milk automation and internal-access preferences can outweigh headline price.'] },
  },
  sources: [
    { label: 'Krups UK exact EA910E40 product and specification', href: official, note: 'Exact UK identity, recipes, controls, grinder, thermoblock, capacities, electrical details, steam, care, guarantee and parts; checked September 24, 2026.' },
    { label: 'Krups exact EA91 English manual and support route', href: support, note: `Model-indexed support page linking the English EA91 manual at ${manual}; procedures should be checked against the delivered revision.` },
    { label: 'DirectVacuums exact EA910E40 listing', href: seller, note: '£369.99 and out of stock September 24, 2026, described as brand-new condition with one-year seller guarantee and £499.99 reference.' },
    { label: 'Le Monde independent seven-machine test', href: independent, note: 'Philippe Fontaine, published July 31, 2024 and updated June 9, 2026; Sensation jury observations on interface, cleaning, noise and preground limitation. French test unit, UK suffix not shown.' },
    { label: 'Coffealover EN Sensation C50 review video', href: film, note: 'Independent 6:05 review published June 16, 2026 with affiliate link; exact Sensation family, but UK EA910E40 rating plate and measurement protocol are not established.' },
    { label: 'Currys Business exact EA910E40 archive', href: 'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/krups-sensation-ea910e40-bean-to-cup-coffee-machine-silver-black/N710778W', note: 'Exact-model dimensions, mass, 1450 W and package context; marked unavailable when checked September 24, 2026.' },
    { label: 'Krups UK manufacturer warranty', href: 'https://www.krups.co.uk/warranty', note: 'Manufacturer guarantee and service policy; actual purchase date, seller and delivered terms control coverage.' },
    { label: 'Reddit EA910-family return discussion', href: 'https://www.reddit.com/r/superautomatic/comments/1iqukgo/need_recommendations_for_a_coffee_machine_after/', note: 'One self-selected eight-month complaint about internal grounds path and sensors without technician report, denominator or confirmed UK suffix.' },
    { label: 'Coolblue EA910B selected customer reviews', href: 'https://www.coolblue.be/en/product/936616/krups-sensation-ea910b.html', note: '49 regional EA910B ratings with selected comments on compactness, hot coffee, settings, grinder sound and collector alert; not exact UK EA910E40.' },
    { label: 'Reddit E910B controls and temperature discussion', href: 'https://www.reddit.com/r/superautomatic/comments/1tgonot/disappointed_with_krups_sensation_e910b_coming/', note: 'Single regional owner account about grind, strength, temperature settings and one informal cup reading; no exact UK identity or controlled protocol.' },
  ],
  comparisons: [
    { name: 'Krups Sensation EA910E40', quickDecision: 'Focused black-coffee menu, two favourites and manual steam.', priceClass: '£369.99 out-of-stock listing Sep 24', dimensions: '364 × 240 × 346 mm retailer listing', heating: 'Compact thermoblock', coffeeSetup: '4 black recipes; 5 grind steps', milkWorkflow: 'Manual steam wand', bestFor: 'Simple black coffee' },
    { name: 'Krups Evidence Eco Design EA897B40', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', quickDecision: 'Adds automatic milk and broader convenience.', priceClass: 'Compare live exact-model offer', dimensions: 'Verify current listing', heating: 'Compact thermoblock', coffeeSetup: 'Broader one-touch menu', milkWorkflow: 'Automatic milk tube', bestFor: 'Milk-drink convenience' },
    { name: 'DeLonghi Magnifica Start', href: '/espresso-machine/delonghi-magnifica-start/', quickDecision: 'Compare its brew-group access, drinks and current availability.', priceClass: 'Check live exact UK article', dimensions: 'Model-dependent', heating: 'Thermoblock family', coffeeSetup: 'Automatic grinder and black drinks', milkWorkflow: 'Variant-dependent', bestFor: 'Service-access comparison' },
  ],
  comparisonNote: 'Compare exact regional article, real stock, warranty, black-coffee menu, milk labour, preground access, brew-group access and total care. Do not rank an unavailable Sensation price against a live rival.',
  recommendations: [
    { kicker: 'Automatic milk', title: 'Krups Evidence Eco Design EA897B40', text: 'Adds automatic milk to a similarly maintenance-led Krups routine.', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', linkLabel: 'Read Evidence Eco Design review', featured: true },
    { kicker: 'Accessible alternative', title: 'DeLonghi Magnifica Start', text: 'Compare exact variant, drink menu and owner service access.', href: '/espresso-machine/delonghi-magnifica-start/', linkLabel: 'Read Magnifica Start review' },
    { kicker: 'More recipes', title: 'Krups Intuition Preference+ EA875U40', text: 'Two profiles, paired automatic milk and a wider hot-drink menu.', href: '/espresso-machine/krups-intuition-preference-ea875u40/', linkLabel: 'Read Intuition Preference+ review' },
    { kicker: 'Category context', title: 'Superautomatic buying guide', text: 'Compare milk systems, profiles, cleaning and ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What drinks does the EA910E40 make automatically?', answer: 'The exact UK panel lists ristretto, espresso, long coffee, filter coffee and hot water. Milk is steamed manually, so cappuccino and latte are assembled by the user.' },
    { question: 'How many favourites can it save?', answer: 'Two favourites. These are saved coffee settings, not a broad set of named user profiles.' },
    { question: 'Can it use preground or decaf coffee?', answer: 'No preground chute is documented for exact EA910E40. Le Monde’s jury highlighted the same absence on its Sensation test unit.' },
    { question: 'Does it prepare two coffees together?', answer: 'Yes. Krups documents two black cups in one cycle. Milk remains a separate manual step.' },
    { question: 'Is the brew group removable?', answer: 'The exact materials do not document owner removal. Routine internal care uses automatic rinsing, draining and prompted cleaning tablets.' },
    { question: 'How often does it need a cleaning tablet?', answer: 'Krups markets roughly three deep-clean cycles per year, while actual prompts depend on use and settings. Follow the machine and delivered manual rather than the calendar alone.' },
    { question: 'Was the £369.99 price available?', answer: 'No. DirectVacuums displayed the exact EA910E40 at £369.99 but out of stock on September 24, 2026. Currys Business also showed it unavailable.' },
  ],
  finalTitle: 'Excellent clarity for black coffee, if a live offer makes sense',
  finalVerdict: [
    'The UK EA910E40 combines four black recipes, hot water, five grind levels, three strengths and temperatures, two favourites, two-cup service and manual steam. Le Monde’s independent jury liked the interface and quiet maintenance-led routine, with the important limits of no preground chute and no automatic milk.',
    'Exact UK availability was unresolved on September 24, 2026. Treat £369.99 as an out-of-stock reference, not a deal. A live Sensation can suit black-coffee households, while regular milk-drink users should compare Evidence Eco Design or another automatic-milk machine.',
  ],
  video: { id: 'w9Dz5JrEnpY', title: 'Krups Sensation C50: HONEST Review and Test', creator: 'Coffealover EN', published: '2026-06-16', note: 'Independent 6:05 Sensation C50 review with affiliate link. It provides adjacent-family visual and workflow context; UK EA910E40 suffix, rating plate and measurement protocol are not established.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="sensation-owner-title"><h3 id="sensation-owner-title">Selected owner context kept in proportion</h3><ul>
    <li><strong>EA910 family complaint after eight months</strong><p>One poster alleged that grounds missed the intended path and accumulated internally before sensor problems. No technician diagnosis, maintenance record, return result or UK suffix was supplied, so this is a service question, not a failure-rate estimate.</p></li>
    <li><strong>Regional EA910B users</strong><p>Selected buyers praised compact size, hot coffee and adjustment, while some mentioned grinder noise or a collector alert. A separate poster criticised the limited settings and shared one informal temperature reading. Regional identity and test methods differ.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeKrupsSensationReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
