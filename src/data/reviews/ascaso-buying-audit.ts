import type { MachineReviewData } from '../reviews';

export const unoPath = '/espresso-machine/ascaso-steel-uno/';
export const duoPath = '/espresso-machine/ascaso-steel-duo-pid/';
export const ascasoBrandPath = '/ascaso/';

export const ascasoSources = {
  steel: 'https://ascaso.com/en/steel/',
  unoRefurbished: 'https://www.espressoparts.com/products/refurbished-ascaso-steel-uno-programmable-espresso-machine-w-pid-controller-single-thermoblock-120v-black',
  duoUS: 'https://ascaso-usa.com/products/steel-duo-pid-programmable-espresso-machine-w-volumetric-conrtroller-dual-thermoblock-120v-black',
  duoEspressoParts: 'https://www.espressoparts.com/products/ascaso-steel-duo-pid-white',
  duoCanada: 'https://ascaso-canada.ca/collections/ascaso-home/products/steel-duo-pid',
  duoV3: 'https://www.espressoparts.com/blogs/news/whats-new-in-the-ascaso-steel-duo-v2-5-and-duo-plus-v2-5',
  manual: 'https://ascaso-usa.com/pages/tech-dossier',
  contact: 'https://ascaso-usa.com/pages/contact-us',
  warranty: 'https://ascaso-usa.com/pages/warranty-terms-and-conditions',
  parts: 'https://support.ascaso-usa.com/home-machine-part-diagrams',
};

export const ascasoModels = {
  [unoPath]: {
    name: 'Steel Uno PID',
    fit: 'Mostly espresso, with the occasional milk drink',
    heater: 'One thermoblock shared by brewing and steaming',
    milk: 'Pull the espresso, then switch to steam',
    power: 'U.S. reference model: 120 V, standard 15 A outlet',
    shopping: 'The verified U.S. listing is refurbished. Ask Ascaso about new stock.',
    image: 'images/products/ascaso-steel-uno-workflow.jpg',
    imageAlt: 'Steel Uno PID workflow diagram with one thermoblock and two steps: brew, then steam',
  },
  [duoPath]: {
    name: 'Steel Duo PID',
    fit: 'Two or more milk drinks in the same session',
    heater: 'Separate thermoblocks for brewing and steam',
    milk: 'Brew and steam at the same time when both are ready',
    power: 'U.S. version reviewed: 120 V, 20 A circuit, NEMA 5-20 plug',
    shopping: 'Confirm the revision, plug, and accessories with the seller.',
    image: 'images/products/ascaso-steel-duo-workflow.jpg',
    imageAlt: 'Steel Duo PID workflow diagram showing separate thermoblocks for brewing and steam',
  },
};

export const espressoGearPhoto = {
  src: 'images/products/ascaso-espresso-setup-gear.jpg',
  width: 960,
  height: 627,
  alt: 'Espresso accessories including a portafilter, tamper, scale and milk pitcher',
  caption: 'A scale helps you dial in the recipe. Add a pitcher if you make milk drinks.',
  creator: 'TheHolyCessna553',
  source: 'https://commons.wikimedia.org/wiki/File:Espresso_Coffee_Gear.jpg',
  license: 'https://creativecommons.org/publicdomain/zero/1.0/',
  licenseLabel: 'CC0 1.0',
  credit: 'TheHolyCessna553 / Wikimedia Commons',
  section: 'setup',
  id: 'espresso-gear-photo',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const link = (path: string, label: string) => `<a href="${base}${path}">${label}</a>`;
const cite = (id: string, label: string) => `<a href="#${id}">${label}</a>`;
const section = (id: string, title: string, html: string) => ({ id, title, html, eyebrow: '' });

const unoSections = [
  section('espresso', 'What you get for straight espresso', `
    <p>The Uno gives you an adjustable brew temperature, a 58 mm group and two programmable shot buttons. Start with one basket and a recipe you can weigh. Once the grind and dose are stable, save a shot volume if you want the machine to stop automatically. It meters water, so a changed bean or grind can still change what lands in your cup.</p>
    <p>Allow the portafilter and cup to warm up before judging your first shot. The display can reach its setpoint before all the metal in the brew path has warmed. Coffeedant has no timed first-shot measurement for this model. ${cite('ascaso-specs', 'Ascaso Steel specifications')}</p>`),
  section('milk', 'Making a cappuccino or a second latte', `
    <p>Pull the espresso first and then switch the thermoblock to steam. To make two lattes, pull both shots first, then texture milk. The first shot waits while you finish. If you want another espresso afterward, follow the ${cite('ascaso-manual', 'manual for your Uno')} to return the machine to brewing mode.</p>
    <p>If two lattes are your usual order, compare the ${link(duoPath, 'Steel Duo PID')}. Its separate steam heater lets you pull shots and steam together.</p>`),
  section('setup', 'What to measure and budget for', `
    <p>Ascaso’s global Steel sheet lists the chassis around <strong>10.6 W × 12.4 D × 14.2 H inches</strong>. Ask for measurements of the exact unit, including room beside it to slide out the tank and room in front for a cup and scale. The U.S. Uno reference is 120 V and 1,050 W. Confirm the label on the unit if you’re buying used or imported. ${cite('uno-us', 'Espresso Parts listing')}</p>
    <p>Budget for an ${link('/grinder/best-compact-electric-espresso-grinders/', 'espresso-capable grinder')} if you use whole beans, as well as a scale and suitable water. If you’ll start with preground coffee, ask whether the seller includes a pressurized basket. A pitcher matters only if you steam milk.</p>`),
  section('ownership', 'Checking condition, parts and warranty', `
    <p>Ask for the serial label, condition and included accessories before ordering. For a used machine, ask for a cold-start demonstration through brewing and steaming, and ask what water the owner used. Confirm who covers parts, labor and shipping on a refurbished unit. Use Ascaso’s ${cite('ascaso-parts', 'revision-specific parts diagrams')} and ${cite('ascaso-manual', 'model manual')} for cleaning and service.</p>`),
  section('comparisons', 'What to buy if the Uno is hard to find', `
    <ul>
      <li><strong>Mostly espresso and want factory temperature control?</strong> Compare the ${link('/espresso-machine/profitec-go/', 'Profitec GO')}. It’s a single-boiler machine and still switches modes for milk.</li>
      <li><strong>Want help with milk?</strong> The ${link('/espresso-machine/breville-bambino/', 'Breville Bambino Plus')} has automatic milk texturing and also needs a separate grinder for fresh beans.</li>
    </ul>`),
];

const duoSections = [
  section('setup', 'Confirm the circuit, revision and counter space', `
    <p>Ascaso USA specifies a <strong>120 V, 20 A circuit and a NEMA 5-20 plug</strong> for the model reviewed here. A plug adapter changes the connector. The circuit capacity stays the same. If you’re unsure what your kitchen has, ask a qualified electrician before ordering. The ${cite('duo-canada', 'Canadian listing')} distinguishes 15 A and 20 A versions, so confirm the label and plug on any resale or cross-border listing. ${cite('duo-us', 'Ascaso USA model specifications')}</p>
    <p>Ask which revision is shipping. Espresso Parts identifies the V3 by its higher display, revised pressure gauge and updated pump. The Duo Plus adds a steam joystick and different accessories. For any version, check the width with its steam knob and leave room at the side to remove the water tank. ${cite('duo-v3', 'Espresso Parts’ V3 breakdown')}</p>`),
  section('milk', 'What two thermoblocks change for milk drinks', `
    <p>Start the steam heater and let it get ready while you grind and prepare the first shot. When both heaters are ready, one brews while the other supplies the manual wand. If you prefer to focus on one task at a time, you can pull the shots and then start steaming without switching the brew heater to steam.</p>
    <p>That saves a mode change when serving two drinks. It doesn’t tell you how quickly your pitcher will heat or how the steam compares with a dedicated boiler. The independent videos show the workflow, and earlier revisions can have different wand hardware. ${cite('ascaso-specs', 'Ascaso’s Steel overview')}</p>`),
  section('espresso', 'How much of the shot can you automate?', `
    <p>You can set brew temperature, program pre-infusion and save water volumes for two shot buttons. You still grind, dose and tamp. Weigh a few shots when dialing in a new coffee, then save a dose once you know the cup yield you want. The gauge and timer help diagnose changes. They don’t measure the taste or weight in the cup.</p>
    <p>Budget for an ${link('/grinder/best-compact-electric-espresso-grinders/', 'espresso-capable grinder')}, a scale and a milk pitcher. Check whether the seller already includes the tamper and baskets you want before buying extras.</p>`),
  section('ownership', 'Cleaning and service after purchase', `
    <p>Wipe and purge the wand after milk, rinse the basket and empty the tray. The ${cite('ascaso-manual', 'Ascaso technical dossier')} directs you to the matching instructions for group cleaning and water care. Before buying, check who handles warranty work and who pays for shipping if the machine needs service.</p>`),
  section('comparisons', 'When the Duo upgrade makes sense', `
    <ul>
      <li><strong>Mostly straight espresso?</strong> The ${link(unoPath, 'Steel Uno PID')} offers similar brew adjustments and a single heater. Check availability before building a setup around it.</li>
      <li><strong>Want steam from a dedicated boiler?</strong> Compare the ${link('/espresso-machine/lelit-elizabeth/', 'Lelit Elizabeth')} or the ${link('/espresso-machine/rancilio-silvia-pro-x/', 'Silvia Pro X')}. Confirm the specific model’s power requirements and tank access before choosing.</li>
    </ul>`),
];

const commonSources = [
  { id: 'ascaso-specs', label: 'Ascaso Steel specifications and gallery', href: ascasoSources.steel, note: 'Side-by-side model specs and the manufacturer’s product photos.' },
  { id: 'ascaso-manual', label: 'Ascaso USA technical dossier', href: ascasoSources.manual, note: 'Manuals and technical documents organized by model.' },
  { id: 'ascaso-parts', label: 'Ascaso USA parts diagrams', href: ascasoSources.parts, note: 'Identify the matching revision before ordering parts.' },
  { id: 'ascaso-warranty', label: 'Ascaso USA warranty and returns', href: ascasoSources.warranty, note: 'Check written terms with the seller, especially for refurbished machines.' },
];

export const applyAscasoBuyingAudit = (review: MachineReviewData): MachineReviewData => {
  if (review.slug !== unoPath && review.slug !== duoPath) return review;
  const duo = review.slug === duoPath;
  const model = ascasoModels[review.slug];
  const sources = duo ? [
    { id: 'duo-us', label: 'Ascaso USA Steel Duo PID listing', href: ascasoSources.duoUS, note: 'U.S. circuit, plug, controls and listed bundle.' },
    { id: 'duo-canada', label: 'Ascaso Canada Steel Duo PID configurations', href: ascasoSources.duoCanada, note: 'Separate 15 A and 20 A specifications for the Canadian market.' },
    { id: 'duo-v3', label: 'Espresso Parts Steel Duo and Duo Plus V3 comparison', href: ascasoSources.duoV3, note: 'Retailer documents the higher display, updated gauge, pump and Plus package.' },
  ] : [
    { id: 'uno-us', label: 'Espresso Parts refurbished Steel Uno PID', href: ascasoSources.unoRefurbished, note: '120 V reference model, electrical specifications and refurbished condition.' },
    { id: 'uno-power', label: 'Ascaso USA Steel Uno and Duo Plus comparison', href: 'https://ascaso-usa.com/blogs/news/ascaso-steel-uno-vs-duo-plus-comparison', note: 'Identifies the standard U.S. outlet requirement for the Uno.' },
  ];
  return {
    ...review,
    title: duo ? 'Ascaso Steel Duo PID Review: Check Your Circuit First' : 'Ascaso Steel Uno PID Review: Who Should Buy It?',
    description: duo
      ? 'Can the Ascaso Steel Duo PID replace your one-heater routine? Compare simultaneous steaming, the U.S. 20 A circuit requirement, V3 changes and alternatives.'
      : 'See who the Ascaso Steel Uno PID suits, how its one thermoblock handles milk, and what to check for U.S. stock, accessories and service.',
    updated: '2026-11-17',
    sku: '',
    verdict: duo
      ? 'Buy the Steel Duo PID if you regularly make two or more milk drinks, want to brew and steam together, and have the circuit required by your exact model. Ascaso USA specifies a 20 A circuit for the U.S. version reviewed here.'
      : 'Choose the Steel Uno PID if you mostly drink espresso and want control over temperature and shot volume. One heater means you pull the shot before steaming milk. Confirm new U.S. stock before you plan to buy.',
    assessment: duo ? 'Simultaneous brewing and steaming for a kitchen with the right circuit.' : 'Adjustable espresso controls and a shared heater for occasional milk.',
    image: model.image,
    imageAlt: model.imageAlt,
    price: {
      msrp: duo ? 'Check seller pricing' : 'Check U.S. availability',
      numeric: '', currency: 'USD', checked: '', label: 'Check with seller',
      typical: duo ? 'Confirm model revision and included accessories' : 'New U.S. stock not verified',
    },
    links: duo ? [
      { label: 'Check price at Ascaso USA', href: ascasoSources.duoUS, primary: true },
      { label: 'Check price at Espresso Parts', href: ascasoSources.duoEspressoParts, usOnly: true },
    ] : [
      { label: 'Check refurbished Uno at Espresso Parts', href: ascasoSources.unoRefurbished, primary: true },
      { label: 'Ask Ascaso USA about new stock', href: ascasoSources.contact, usOnly: true },
    ],
    bestFor: [model.fit],
    avoidIf: [],
    facts: [
      { label: 'Heating', value: model.heater },
      { label: 'Power', value: model.power },
      { label: 'Coffee setup', value: '58 mm portafilter and separate grinder for whole beans' },
    ],
    evaluation: { ...review.evaluation, dimensions: review.evaluation.dimensions.map(dimension => ({ ...dimension, score: null })) },
    article: {
      sections: duo ? duoSections : unoSections,
      sources: [...sources, ...commonSources],
      methodology: `<p>Coffeedant compared Ascaso’s documentation, the regional specifications for the listed models and independent workflow videos. Readiness times and steaming performance vary with the revision and setup. Coffeedant did not bench-test either machine or measure first-shot temperature or milk steaming time. ${link('/testing/', 'Read our review methodology')}.</p>`,
      finalTitle: duo ? 'Where to buy the Steel Duo PID' : 'Check Steel Uno PID availability',
      finalVerdict: [duo
        ? 'Confirm the plug, model revision, current price and warranty before ordering. These listings are for the standard Duo PID.'
        : 'Espresso Parts lists a refurbished Uno. Ask Ascaso USA about new stock and get the condition, accessories and warranty in writing.'],
    },
  };
};
