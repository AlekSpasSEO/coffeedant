import type { CoffeeFinderDrink, CoffeeFinderExperience, CoffeeFinderItem, CoffeeFinderVolume, CoffeeFinderWorkflow } from './coffee-finder';

export type FinderResource = {
  title: string;
  path: string;
  description: string;
  image?: string;
};

type FinderPreference = {
  drink: CoffeeFinderDrink;
  workflow: CoffeeFinderWorkflow | 'any';
  grinder: 'own' | 'need' | 'built-in' | 'any';
  budget: number | null;
  currency?: string;
  footprint: 'compact' | 'any';
  volume: CoffeeFinderVolume;
  experience?: CoffeeFinderExperience | 'any';
  priority?: 'ease' | 'control' | 'value' | 'space' | 'any';
};

type FinderMachineProfile = Pick<CoffeeFinderItem, 'workflow' | 'grinder'>;

export const finderProductCategories: readonly FinderResource[] = [
  { title: 'Coffee grinders', path: '/grinder/', description: 'Compare hand, hopper and single-dose grinders.' },
  { title: 'Coffee beans', path: '/coffee-beans/', description: 'Browse coffees by flavor and brewing method.' },
  { title: 'Accessories: tampers and baskets', path: '/journal/espresso-tamp-guide/', description: 'Check tamper fit and choose a stable tamping setup for your machine.' },
];

const guides = {
  milkVolume: {
    title: 'Best espresso machines for back-to-back milk drinks',
    path: '/espresso-machine/best-espresso-machines-for-back-to-back-milk-drinks/',
    description: 'Compare how steam recovery and the brew-to-steam sequence affect a round of drinks.',
  },
  manual: {
    title: 'Best manual espresso makers for a no-plug station',
    path: '/espresso-machine/best-manual-espresso-makers-no-plug/',
    description: 'Compare hand-powered workflows and the equipment each one needs.',
  },
  automatic: {
    title: 'Best superautomatic espresso machines',
    path: '/espresso-machine/superautomatic/',
    description: 'Compare what the machine automates, including milk preparation and cleaning.',
  },
  integrated: {
    title: 'Best espresso machines with a built-in grinder',
    path: '/espresso-machine/built-in-grinder/',
    description: 'Compare how all-in-one setups guide grinding, dosing and shot prep.',
  },
  compact: {
    title: 'Best small espresso machines',
    path: '/espresso-machine/small/',
    description: 'Check the space needed for the machine, including water access and room to work.',
  },
  compactGrinders: {
    title: 'Best compact electric espresso grinders',
    path: '/grinder/best-compact-electric-espresso-grinders/',
    description: 'Compare the counter and cabinet clearance needed for three electric grinders.',
  },
  value: {
    title: 'Best budget espresso machines under $500',
    path: '/espresso-machine/cheap-budget-under-500/',
    description: 'Compare where less expensive machines save money and what each setup still needs.',
  },
  prosumer: {
    title: 'Best prosumer espresso machines under $1,000',
    path: '/espresso-machine/prosumer-under-1000/',
    description: 'Compare the trade-offs in control, temperature and workflow around this budget.',
  },
  separate: {
    title: 'Best espresso machines without a grinder',
    path: '/espresso-machine/without-grinder/',
    description: 'Plan a modular setup with a machine and a separate grinder.',
  },
  singleBoiler: {
    title: 'Best single-boiler espresso machines',
    path: '/espresso-machine/single-boiler/',
    description: 'Compare traditional portafilter machines by temperature control and the steps between pulling shots and steaming.',
  },
  technique: {
    title: 'Espresso techniques',
    path: '/journal/espresso-techniques/',
    description: 'Learn the prep and extraction steps you’ll use on a hands-on machine.',
  },
  milkBeans: {
    title: 'Best coffee beans for milk drinks',
    path: '/coffee-beans/best-coffee-beans-for-milk-drinks/',
    description: 'Choose a coffee with enough flavor to carry through your usual milk ratio.',
  },
  recipes: {
    title: 'Best espresso beans with brew recipes',
    path: '/coffee-beans/best-espresso-beans-with-brew-recipes/',
    description: 'Find coffees with a practical starting dose, yield and shot time.',
  },
  beginners: {
    title: 'Best espresso machines for beginners',
    path: '/espresso-machine/beginners/',
    description: 'See how automatic, guided and manual setups differ day to day.',
  },
} satisfies Record<string, FinderResource>;

const grinders = {
  first: {
    title: 'Baratza Encore ESP',
    path: '/grinder/baratza-encore-esp/',
    description: 'An entry-level electric option with a hopper and stepped espresso adjustment.',
    image: 'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/ZCG495/ZCG495WHT1AUC1A.png?pdp',
  },
  compact: {
    title: 'Fellow Opus 2',
    path: '/grinder/fellow-opus-2/',
    description: 'A short electric grinder for weighing each dose. Leave room to reach its side adjustment.',
    image: 'https://fellowproducts.com/cdn/shop/files/PDP_Opus2_Black_Black.png?v=1771549610',
  },
  manual: {
    title: '1Zpresso K-Ultra',
    path: '/grinder/1zpresso-k-ultra/',
    description: 'A hand grinder for a quiet or no-plug station. Expect to grind every dose by hand.',
    image: 'https://1zpresso.coffee/wp-content/uploads/2024/03/ku-ir.jpg',
  },
  repeat: {
    title: 'Eureka Mignon Specialità 55',
    path: '/grinder/eureka-mignon-specialita/',
    description: 'A hopper grinder with timed doses for a routine that uses one main espresso coffee.',
    image: 'https://clivecoffee.com/cdn/shop/products/Eureka-Mignon-Specialita-Black.jpg?v=1724370495&width=1600',
  },
} satisfies Record<string, FinderResource>;

function needsSeparateGrinder(answers: FinderPreference, machines: readonly FinderMachineProfile[]) {
  if (answers.grinder === 'own' || answers.grinder === 'built-in') return false;
  if (machines.length) return machines.some((machine) => machine.grinder === 'separate');
  return answers.grinder === 'need' && answers.workflow !== 'one-touch' && answers.workflow !== 'guided';
}

export function getFinderGrinderPicks(answers: FinderPreference, machines: readonly FinderMachineProfile[] = []): FinderResource[] {
  if (!needsSeparateGrinder(answers, machines)) return [];
  if (answers.workflow === 'manual') return [grinders.manual];
  if (answers.footprint === 'compact' || answers.priority === 'space') return [grinders.compact, grinders.first];
  if (answers.volume === 'six-plus' && answers.budget === null) return [grinders.repeat, grinders.first];
  return [grinders.first];
}

export function getFinderReadingList(answers: FinderPreference, machines: readonly FinderMachineProfile[] = []): FinderResource[] {
  const firstWorkflow = machines[0]?.workflow;
  const workflow = answers.workflow === 'any' && firstWorkflow && machines.every((machine) => machine.workflow === firstWorkflow)
    ? firstWorkflow
    : answers.workflow;
  const milkDrinks = answers.drink === 'milk' || answers.drink === 'mixed';
  const guidesForWorkflow = {
    'one-touch': guides.automatic,
    guided: guides.integrated,
    'hands-on': guides.separate,
    manual: guides.manual,
    capsule: undefined,
    commercial: undefined,
    any: undefined,
  };
  const budgetGuide = (answers.currency ?? 'USD') === 'USD' && answers.budget !== null && answers.budget <= 1000
    ? answers.budget <= 500 ? guides.value : guides.prosumer
    : undefined;
  const machineGuide = answers.grinder === 'built-in' && workflow !== 'one-touch'
    ? guides.integrated : guidesForWorkflow[workflow];
  const spaceGuide = (answers.footprint === 'compact' || answers.priority === 'space') && guides.compact;
  const easyGuide = (answers.experience === 'beginner' || answers.priority === 'ease') && guides.beginners;
  return [...new Set([
    milkDrinks && answers.volume !== 'one-two' && guides.milkVolume,
    spaceGuide,
    machineGuide,
    answers.priority === 'value' && budgetGuide,
    easyGuide,
    answers.priority === 'control' && workflow !== 'one-touch' && workflow !== 'guided' && guides.singleBoiler,
    budgetGuide,
    spaceGuide && needsSeparateGrinder(answers, machines) && guides.compactGrinders,
    (answers.grinder === 'own' || needsSeparateGrinder(answers, machines)) && guides.separate,
    guides.beginners,
    workflow === 'hands-on' && guides.technique,
    milkDrinks ? guides.milkBeans : guides.recipes,
  ].filter((guide): guide is FinderResource => Boolean(guide)))].slice(0, 3);
}
