export type Brand = {
  slug: string;
  path: string;
  name: string;
  country: string;
  prefix: string;
  position: number;
  range: string;
  system: string;
  bestFor: string;
  summary: string;
  strengths: string[];
  tradeoff: string;
};

export const brands: Brand[] = [
  { slug: 'ascaso', path: '/ascaso/', name: 'Ascaso', country: 'Spain', prefix: 'ascaso-', position: 62, range: '$$–$$$', system: 'Thermoblock · hands-on', bestFor: 'Fast heat-up with real control', summary: 'Modern, compact machines that prioritize speed without turning espresso into a push-button process.', strengths: ['Fast warm-up', 'Compact footprint', 'Modern controls'], tradeoff: 'Less traditional than a boiler-first machine.' },
  { slug: 'bezzera', path: '/bezzera/', name: 'Bezzera', country: 'Italy', prefix: 'bezzera-', position: 78, range: '$$–$$$$', system: 'Boiler · hands-on', bestFor: 'Traditional prosumer workflows', summary: 'A broad Italian lineup spanning compact single boilers, heat exchangers, dual boilers, and levers.', strengths: ['Deep lineup', 'Classic hardware', 'Repairable platforms'], tradeoff: 'Choosing between similar models takes homework.' },
  { slug: 'bosch', path: '/bosch/', name: 'Bosch', country: 'Germany', prefix: 'bosch-', position: 18, range: '$$–$$$', system: 'Bean-to-cup · automatic', bestFor: 'One-touch drinks and guided care', summary: 'Straightforward automatic machines built around simple drink selection and low-friction maintenance.', strengths: ['Easy routines', 'One-touch drinks', 'Guided cleaning'], tradeoff: 'Limited manual control over extraction.' },
  { slug: 'breville', path: '/breville/', name: 'Breville', country: 'Australia', prefix: 'breville-', position: 45, range: '$–$$$$', system: 'Mixed · guided control', bestFor: 'Learning without unnecessary friction', summary: 'A wide home lineup from compact manual machines to guided, grinder-equipped systems.', strengths: ['Fast heat-up', 'Clear controls', 'Wide price range'], tradeoff: 'Integrated systems trade modularity for convenience.' },
  { slug: 'de-longhi', path: '/de-longhi/', name: "De'Longhi", country: 'Italy', prefix: 'delonghi-', position: 30, range: '$–$$$', system: 'Mixed · convenience-led', bestFor: 'Milk drinks across every budget', summary: 'One of the broadest catalogs, covering entry-level manual machines, grinder-equipped models, and full automatics.', strengths: ['Broad selection', 'Milk workflows', 'Accessible pricing'], tradeoff: 'Model names and overlapping ranges can confuse buyers.' },
  { slug: 'ecm', path: '/ecm/', name: 'ECM', country: 'Germany', prefix: 'ecm-', position: 84, range: '$$$–$$$$', system: 'Boiler · hands-on', bestFor: 'Premium build and espresso control', summary: 'Polished prosumer machines focused on tactile controls, temperature management, and long ownership.', strengths: ['Premium construction', 'Strong temperature control', 'Serviceable layouts'], tradeoff: 'You still need a capable separate grinder.' },
  { slug: 'gaggia', path: '/gaggia/', name: 'Gaggia', country: 'Italy', prefix: 'gaggia-', position: 42, range: '$–$$$', system: 'Mixed · broad lineup', bestFor: 'A proven first step into espresso', summary: 'A large catalog ranging from the mod-friendly Classic platform to convenient bean-to-cup machines.', strengths: ['Iconic manual models', 'Large automatic range', 'Strong community'], tradeoff: 'Quality and workflow vary widely across the range.' },
  { slug: 'jura', path: '/jura/', name: 'Jura', country: 'Switzerland', prefix: 'jura-', position: 10, range: '$$$–$$$$', system: 'Bean-to-cup · automatic', bestFor: 'Premium automation', summary: 'High-end one-touch machines that coordinate grinding, brewing, milk, and maintenance for repeatable routines.', strengths: ['Polished automation', 'Guided maintenance', 'Broad drink menus'], tradeoff: 'Premium pricing with little hands-on control.' },
  { slug: 'krups', path: '/krups/', name: 'Krups', country: 'Germany', prefix: 'krups-', position: 22, range: '$–$$$', system: 'Mixed · compact', bestFor: 'Small kitchens and simple drinks', summary: 'Compact manual and automatic machines built for buyers who value a tidy counter and simple operation.', strengths: ['Compact designs', 'Approachable controls', 'Automatic options'], tradeoff: 'Less room to customize and repair than prosumer machines.' },
  { slug: 'la-marzocco', path: '/la-marzocco/', name: 'La Marzocco', country: 'Italy', prefix: 'la-marzocco-', position: 96, range: '$$$$', system: 'Dual boiler · hands-on', bestFor: 'Commercial-style performance at home', summary: 'Premium home machines adapted from a commercial espresso heritage, with stability and steam power first.', strengths: ['Temperature stability', 'Powerful steam', 'Premium build'], tradeoff: 'Price and footprint are difficult to justify for casual users.' },
  { slug: 'la-pavoni', path: '/la-pavoni/', name: 'La Pavoni', country: 'Italy', prefix: 'la-pavoni-', position: 100, range: '$$–$$$$', system: 'Lever/boiler · manual', bestFor: 'Hands-on ritual and direct feedback', summary: 'Heritage machines for buyers who want to control the shot physically rather than automate it.', strengths: ['Direct control', 'Iconic design', 'Simple mechanics'], tradeoff: 'A steep learning curve and little forgiveness.' },
  { slug: 'lelit', path: '/lelit/', name: 'Lelit', country: 'Italy', prefix: 'lelit-', position: 76, range: '$$–$$$$', system: 'Boiler · hands-on', bestFor: 'Maximum capability per dollar', summary: 'Feature-dense Italian machines that move from compact single boilers to advanced dual-boiler control.', strengths: ['Strong specifications', 'Wide upgrade path', 'Compact options'], tradeoff: 'Interfaces can feel more functional than luxurious.' },
  { slug: 'nespresso', path: '/nespresso/', name: 'Nespresso', country: 'Switzerland', prefix: 'nespresso-', position: 0, range: '$–$$', system: 'Capsule · automatic', bestFor: 'Speed and zero learning curve', summary: 'Capsule systems for buyers who prioritize speed, consistency, and minimal cleanup over adjustment.', strengths: ['Very fast', 'Consistent', 'Minimal cleanup'], tradeoff: 'Capsule cost and limited control over fresh coffee.' },
  { slug: 'philips', path: '/philips/', name: 'Philips', country: 'Netherlands', prefix: 'philips-', position: 15, range: '$$–$$$', system: 'Bean-to-cup · automatic', bestFor: 'Easy milk drinks and cleanup', summary: 'Accessible superautomatic machines centered on one-touch drinks and the simple LatteGo milk system.', strengths: ['Simple milk system', 'Easy cleaning', 'Household profiles'], tradeoff: 'Espresso texture and control trail hands-on machines.' },
  { slug: 'profitec', path: '/profitec/', name: 'Profitec', country: 'Germany', prefix: 'profitec-', position: 86, range: '$$–$$$$', system: 'Boiler · hands-on', bestFor: 'Focused prosumer engineering', summary: 'A tightly tiered lineup that progresses from compact PID machines to powerful dual boilers and levers.', strengths: ['Clear product ladder', 'Solid construction', 'Strong controls'], tradeoff: 'Most setups require a serious separate grinder.' },
  { slug: 'quick-mill', path: '/quick-mill/', name: 'Quick Mill', country: 'Italy', prefix: 'quick-mill-', position: 80, range: '$$–$$$$', system: 'Mixed boiler · hands-on', bestFor: 'A precise fit between entry and premium', summary: 'A deep Italian range with compact thermoblocks, single boilers, heat exchangers, and dual boilers.', strengths: ['Many configurations', 'Compact models', 'Traditional controls'], tradeoff: 'The large range makes direct comparisons harder.' },
  { slug: 'rancilio', path: '/rancilio/', name: 'Rancilio', country: 'Italy', prefix: 'rancilio-', position: 82, range: '$$–$$$', system: 'Boiler · hands-on', bestFor: 'Durable, proven home-barista hardware', summary: 'A focused home lineup built around the long-running Silvia platform and its dual-boiler evolution.', strengths: ['Proven durability', 'Strong community', 'Commercial DNA'], tradeoff: 'The base workflow asks more from the user.' },
  { slug: 'rocket-espresso', path: '/rocket-espresso/', name: 'Rocket Espresso', country: 'Italy', prefix: 'rocket-', position: 91, range: '$$$–$$$$', system: 'Boiler · hands-on', bestFor: 'Design-led prosumer setups', summary: 'Statement machines pairing classic Italian form with heat-exchanger and dual-boiler performance.', strengths: ['Distinctive design', 'Strong steam', 'Premium hardware'], tradeoff: 'You pay partly for finish and presence.' },
];

export const brandByPath = new Map(brands.map((brand) => [brand.path, brand]));

export const brandDetails: Record<string, { approach: string; ownership: string; rangeLogic: string }> = {
  ascaso: {
    approach: 'Ascaso uses fast-heating thermoblock technology to make a hands-on machine feel practical on a weekday. The emphasis is modern temperature control without the long warm-up of traditional prosumer hardware.',
    ownership: 'It suits buyers who want to dial in a separate grinder but do not want the machine warming for half an hour. Water quality and routine cleaning still matter, but the daily start-up is unusually light.',
    rangeLogic: 'Steel Uno is the focused single-thermoblock route. Steel Duo adds simultaneous brew-and-steam ability for milk-heavy households.',
  },
  bezzera: {
    approach: 'Bezzera stays close to traditional Italian espresso engineering. Its catalog spans simple single boilers, heat exchangers, dual boilers, and lever machines rather than forcing one house workflow.',
    ownership: 'These are mechanical, serviceable machines for buyers comfortable pairing a grinder and learning temperature, dose, and steam timing. Model overlap is the bigger challenge than daily operation.',
    rangeLogic: 'Start with boiler arrangement: single boiler for espresso-first value, heat exchanger for milk-drink pace, dual boiler for independent control, or lever for a fully manual ritual.',
  },
  bosch: {
    approach: 'Bosch treats espresso as a guided appliance routine. The machine handles grinding, brewing, drink selection, and cleaning prompts so the user makes fewer decisions.',
    ownership: 'The value is consistency across a household, not experimentation. Buyers should compare milk cleaning, drink menus, and service access more carefully than headline pressure figures.',
    rangeLogic: 'The numbered series move upward through interface quality, drink choice, milk capability, and convenience features rather than adding manual control.',
  },
  breville: {
    approach: 'Breville designs around the home user journey: quick heat-up, legible controls, guided dosing, and progressively more automation. The range bridges true manual practice and near-automatic assistance.',
    ownership: 'It is easy to start, but integrated grinder models create a fixed system. Buyers who expect to upgrade the grinder separately should compare the Bambino and Dual Boiler routes first.',
    rangeLogic: 'Bambino is compact and grinder-free. Barista models add an integrated grinder. Impress adds dosing and tamp help. Touch and Oracle models automate more of the workflow.',
  },
  'de-longhi': {
    approach: "De'Longhi covers nearly every convenience level, from narrow manual machines to grinder-equipped La Specialista models and fully automatic Magnifica, Dinamica, Eletta, and PrimaDonna families.",
    ownership: 'The breadth is useful, but product naming hides the real decision. Separate manual, assisted, and bean-to-cup models before comparing milk systems and drink lists.',
    rangeLogic: 'Dedica and ECP are manual entry points. La Specialista adds a grinder and assistance. Magnifica is the accessible automatic line, while Dinamica, Eletta, and PrimaDonna add drinks and refinement.',
  },
  ecm: {
    approach: 'ECM emphasizes premium metalwork, tactile controls, and traditional prosumer layouts. Its machines prioritize espresso stability and steam hardware over guidance or automation.',
    ownership: 'A capable grinder, warm-up planning, and regular maintenance are part of the deal. In return, the platform is easier to understand, service, and keep for a long time.',
    rangeLogic: 'Casa and Puristika are focused. Classika adds precise espresso control. Mechanika and Technika serve milk-drink workflows, while Synchronika is the dual-boiler flagship route.',
  },
  gaggia: {
    approach: 'Gaggia spans two distinct worlds: hands-on home espresso led by the Classic family, and a large automatic catalog built for convenience. Treat those as separate ranges.',
    ownership: 'The Classic ecosystem rewards learning and modification. The automatic range reduces effort but shifts attention toward milk-system cleaning and brew-group care.',
    rangeLogic: 'Classic and Espresso Evolution are manual. Brera, Anima, Cadorna, Magenta, Velasca, Babila, and Accademia move through increasingly capable automatic tiers.',
  },
  jura: {
    approach: 'Jura builds premium bean-to-cup systems where grinder logic, brew programs, milk handling, and maintenance prompts operate as one coordinated experience.',
    ownership: 'You pay for repeatability and low daily friction rather than access to the brewing mechanics. Cleaning products, filters, and authorized support belong in the ownership budget.',
    rangeLogic: 'E-series machines target everyday home use. J-series add presentation and drink features. Z-series broaden hot and cold capability, while GIGA models prioritize capacity and throughput.',
  },
  krups: {
    approach: 'Krups favors compact footprints and approachable controls across both manual and automatic machines. Many models are designed to disappear into a normal kitchen routine.',
    ownership: 'Compact integrated designs can be convenient but offer less access for repair or deep cleaning. Warranty, regional parts support, and milk-system upkeep deserve attention.',
    rangeLogic: 'Opio and Virtuoso are manual. Arabica and Sensation simplify automatic coffee. Evidence and Intuition add milk drinks, larger menus, and more interface guidance.',
  },
  'la-marzocco': {
    approach: 'La Marzocco brings commercial-style thermal stability and steam performance into a home format. The machines assume the buyer wants direct control and already values a serious grinder.',
    ownership: 'They reward careful puck preparation and regular backflushing. Cost, counter depth, electrical demand, and service access matter more than feature count.',
    rangeLogic: 'Linea Micra is the more compact home-first choice. Linea Mini increases presence, capacity, and the sense of working on a small commercial platform.',
  },
  'la-pavoni': {
    approach: 'La Pavoni is defined by direct physical involvement. Lever pressure, temperature management, and timing remain visible rather than being hidden behind automation.',
    ownership: 'The ritual is the reason to buy, not a problem to engineer away. It suits patient users willing to learn a narrow, expressive workflow.',
    rangeLogic: 'Europiccola represents the classic lever path. Cellini and Domus models move toward conventional pump-driven prosumer operation.',
  },
  lelit: {
    approach: 'Lelit packs temperature control and prosumer functions into relatively compact bodies. The brand often prioritizes capability per dollar over decorative polish.',
    ownership: 'The lineup works best for buyers who understand why they need PID control, boiler capacity, or flow control. A separate grinder remains central to the result.',
    rangeLogic: 'Anna, Grace, Glenda, and Victoria cover compact single-boiler steps. Mara X is the heat-exchanger route. Elizabeth and Bianca serve dual-boiler buyers at different levels.',
  },
  nespresso: {
    approach: 'Nespresso optimizes for speed, consistency, and almost no cleanup. Capsule choice replaces grinder adjustment, dosing, and most preparation decisions.',
    ownership: 'Convenience is excellent, but capsule cost, waste, and limited control compound over time. Compare the full routine, not only the machine purchase price.',
    rangeLogic: 'Original-style systems prioritize short espresso-like drinks. Vertuo expands cup sizes through a different capsule and brewing system.',
  },
  philips: {
    approach: 'Philips makes bean-to-cup ownership approachable, with clear controls and the tube-free LatteGo milk carafe as the practical center of the range.',
    ownership: 'The removable brew group and simple milk parts reduce cleaning friction. Espresso adjustment is useful but cannot match a well-dialed separate grinder and manual machine.',
    rangeLogic: 'The 2200, 3200, 4300, and 5400 ladder mainly adds drink recipes, profiles, interface depth, and household flexibility.',
  },
  profitec: {
    approach: 'Profitec organizes its range as a clear progression from a focused single boiler to heat-exchanger, dual-boiler, and lever platforms.',
    ownership: 'Controls are purposeful and the machines expect a separate grinder. Buyers get strong hardware and an understandable upgrade ladder without much hand-holding.',
    rangeLogic: 'GO is the compact entry. Pro 400 and 500 handle heat-exchanger workflows. Pro 600 and 700 add dual-boiler control. Pro 800 is the lever route.',
  },
  'quick-mill': {
    approach: 'Quick Mill offers unusually broad hardware choice, from compact thermoblocks through single boilers, heat exchangers, and dual boilers.',
    ownership: 'The advantage is finding a very specific fit. The disadvantage is comparing many similar-looking models whose boiler and pump differences matter more than styling.',
    rangeLogic: 'Start with the required workflow and boiler type, then compare footprint, pump, plumbing, and controls inside that smaller group.',
  },
  rancilio: {
    approach: 'Rancilio brings a durable, commercial-influenced mindset to a small home lineup. The Silvia platform favors straightforward hardware over guided convenience.',
    ownership: 'The base Silvia rewards technique and patience. Silvia Pro X adds the temperature and workflow control that many owners otherwise try to add around the original.',
    rangeLogic: 'Silvia is the traditional single-boiler benchmark. Silvia Pro X is the modern dual-boiler step for faster milk routines and tighter control.',
  },
  'rocket-espresso': {
    approach: 'Rocket combines traditional prosumer architecture with highly recognizable Italian styling. Its machines are bought for steam performance, tactile use, and presence on the counter.',
    ownership: 'Warm-up time, grinder quality, water treatment, and maintenance all remain part of ownership. The finish is premium, but it does not remove the need for technique.',
    rangeLogic: 'Appartamento is the compact heat-exchanger entry. Giotto and Mozzafiato add controls and body choices. R Nine One is the advanced pressure-profiling route.',
  },
};

export const machineFacts: Record<string, { setup: string; compromise: string; signals: string[] }> = {
  '/espresso-machine/breville-bambino/': { setup: 'Compact semi-automatic', compromise: 'Needs a separate grinder', signals: ['mixed', 'fast', 'compact', 'value'] },
  '/espresso-machine/delonghi-magnifica-evo/': { setup: 'Bean-to-cup automatic', compromise: 'Limited manual control', signals: ['milk', 'fast', 'shared', 'value'] },
  '/espresso-machine/gaggia-classic-evo-pro/': { setup: 'Single-boiler semi-automatic', compromise: 'Wait between brew and steam', signals: ['espresso', 'ritual', 'upgrade', 'value'] },
  '/espresso-machine/profitec-go/': { setup: 'PID single boiler', compromise: 'Espresso-first milk workflow', signals: ['espresso', 'ritual', 'compact', 'upgrade'] },
  '/espresso-machine/philips-5400-lattego/': { setup: 'Bean-to-cup automatic', compromise: 'Less extraction control', signals: ['milk', 'shared', 'fast'] },
  '/espresso-machine/breville-barista-pro-bes878/': { setup: 'Grinder-equipped semi-automatic', compromise: 'Integrated grinder limits upgrades', signals: ['mixed', 'ritual', 'compact'] },
  '/espresso-machine/jura-e8/': { setup: 'Premium bean-to-cup', compromise: 'High cost and closed workflow', signals: ['mixed', 'milk', 'shared', 'fast', 'upgrade'] },
  '/espresso-machine/lelit-elizabeth/': { setup: 'Compact dual boiler', compromise: 'More machine to learn', signals: ['milk', 'shared', 'ritual', 'upgrade'] },
  '/espresso-machine/gaggia-accademia-ri9781-01/': { setup: 'Premium bean-to-cup', compromise: 'Large menu adds complexity', signals: ['milk', 'shared', 'ritual'] },
  '/espresso-machine/delonghi-dedica/': { setup: 'Narrow semi-automatic', compromise: 'Limited stock basket workflow', signals: ['espresso', 'compact', 'value', 'fast'] },
  '/espresso-machine/philips-2200-lattego/': { setup: 'Entry bean-to-cup', compromise: 'Small drink and adjustment set', signals: ['milk', 'fast', 'shared', 'value'] },
  '/espresso-machine/lelit-anna/': { setup: 'Compact PID single boiler', compromise: 'Non-standard accessory size', signals: ['espresso', 'mixed', 'compact', 'value'] },
  '/espresso-machine/ascaso-steel-uno/': { setup: 'Fast thermoblock semi-automatic', compromise: 'Less traditional temperature behavior', signals: ['mixed', 'fast', 'compact', 'upgrade'] },
  '/espresso-machine/flair-pro-2/': { setup: 'Manual lever', compromise: 'No built-in heat or steam', signals: ['espresso', 'ritual', 'value', 'compact'] },
  '/espresso-machine/gaggia-espresso-evolution-eg2115/': { setup: 'Entry semi-automatic', compromise: 'Basic controls and hardware', signals: ['mixed', 'value', 'fast'] },
  '/espresso-machine/rancilio-silvia/': { setup: 'Traditional single boiler', compromise: 'Temperature surfing and steam wait', signals: ['espresso', 'ritual', 'upgrade'] },
  '/espresso-machine/ecm-classika-pid-flow-control/': { setup: 'Premium PID single boiler', compromise: 'Slow for repeated milk drinks', signals: ['espresso', 'ritual', 'upgrade'] },
};

export const decisionGuides = [
  { path: '/espresso-machine/', label: 'Main guide', title: 'Best espresso machines', note: 'Compare every major workflow before choosing a model.', tone: 'yellow' },
  { path: '/espresso-machine/built-in-grinder/', label: 'All-in-one', title: 'Machines with a grinder', note: 'Save space and simplify the routine, with the trade-offs made clear.', tone: 'ink' },
  { path: '/espresso-machine/without-grinder/', label: 'Modular setup', title: 'Machines without a grinder', note: 'Build a better long-term setup with a separate grinder.', tone: 'paper' },
  { path: '/espresso-machine/superautomatic/', label: 'Push-button', title: 'Superautomatic machines', note: 'One-touch espresso and milk drinks with minimal learning.', tone: 'paper' },
  { path: '/espresso-machine/beginners/', label: 'First setup', title: 'Machines for beginners', note: 'Forgiving workflows with room to learn.', tone: 'paper' },
  { path: '/espresso-machine/cheap-budget-under-500/', label: 'Budget', title: 'Best under $500', note: 'Spend where it changes the cup, not on decorative features.', tone: 'paper' },
  { path: '/espresso-machine/prosumer-under-1000/', label: 'Step-up', title: 'Prosumer under $1,000', note: 'More control and stronger hardware without entering luxury pricing.', tone: 'paper' },
  { path: '/espresso-machine/single-boiler/', label: 'Machine type', title: 'Single-boiler machines', note: 'Focused espresso performance for buyers who can wait between brew and steam.', tone: 'paper' },
  { path: '/espresso-machine/small/', label: 'Small spaces', title: 'Compact machines', note: 'Real espresso capability for tight counters.', tone: 'paper' },
];

export const machinePagesForBrand = (brand: Brand, pages: any[]) => pages
  .filter((page) => {
    const segment = page.path.split('/').filter(Boolean)[1] ?? '';
    return page.path.startsWith('/espresso-machine/') && segment.startsWith(brand.prefix);
  })
  .map((page) => ({
    path: page.path,
    title: String(page.title)
      .replace(/\s*\|\s*Coffeedant.*$/i, '')
      .replace(/\s+Review:.*$/i, '')
      .replace(/\s+Review\s*$/i, ''),
  }));
