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
