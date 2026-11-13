import type { CoffeeFinderItem } from './coffee-finder';
import { assessMachine, recommendMachines } from './machine-finder-workflow.mjs';
import { finderProductCategories, getFinderGrinderPicks, getFinderReadingList, type FinderResource } from './machine-finder-recommendations';

type Machine = CoffeeFinderItem & { priceAmount?: number | null };
type Catalog = { items: Machine[]; currency: string };
type Match = { item: Machine; reasons: string[]; tradeoff: string; caveats: string[]; percent: number; eligible: boolean };
type QuizAnswers = Parameters<typeof getFinderReadingList>[0] & {
  maintenance: 'simple' | 'any';
  experience: 'beginner' | 'enthusiast' | 'advanced' | 'any';
  priority: 'ease' | 'control' | 'value' | 'space' | 'any';
};

const reasons: Record<string, string> = {
  'drink-espresso': 'Fits an espresso-first routine.',
  'drink-milk': 'Supports regular milk drinks.',
  'drink-mixed': 'Supports both straight espresso and milk drinks.',
  'workflow-one-touch': 'Automates grinding and brewing.',
  'workflow-guided': 'Helps with some of the prep steps.',
  'workflow-hands-on': 'Gives you control over shot prep and extraction.',
  'workflow-manual': 'Lets you control the extraction by hand.',
  'space-compact': 'Compact machine footprint.',
  'grinder-built-in': 'Includes a grinder.',
  'grinder-owned': 'Works with your separate espresso grinder.',
  'grinder-separate': 'Allow for a separate espresso grinder.',
  'grinder-reserve': 'Leaves 25% of your budget for a separate grinder.',
  'volume-one-two': 'Suited to a routine of one or two drinks.',
  'volume-three-five': 'Suited to a routine of three to five drinks.',
  'volume-six-plus': 'Suited to a higher-volume routine.',
  'maintenance-separate': 'Machine and grinder can be cleaned and serviced separately.',
  'budget-fit': 'Fits your ceiling using the catalog’s reference pricing.',
  'experience-beginner': 'A starting point for learning espresso.',
  'experience-enthusiast': 'Fits someone who already makes espresso at home.',
  'experience-advanced': 'Fits an experienced espresso routine.',
  'priority-ease': 'Keeps the number of brewing steps down.',
  'priority-control': 'Leaves you in charge of shot preparation.',
  'priority-value': 'Leaves some headroom in your overall budget.',
  'priority-space': 'Preserves more of your counter space.',
};

const caveats: Record<string, string> = {
  'drink-mismatch': 'Your usual drinks aren’t a strong fit for this machine.',
  'workflow-mismatch': 'This is a different workflow from the one you chose.',
  'space-mismatch': 'The machine falls outside the compact category you selected.',
  'grinder-mismatch': 'This machine lacks the built-in grinder you asked for.',
  'grinder-duplicate': 'You already own a grinder. This setup may duplicate it.',
  'volume-mismatch': 'Making your usual number of drinks may take more time.',
  'volume-unknown': 'Check how well it handles your daily drink volume.',
  'budget-exceeded': 'The reference price puts the setup above your budget.',
  'budget-unverified': 'We don’t have a usable local reference price for this machine.',
  'experience-learning-curve': 'Plan for a steeper learning curve.',
  'experience-limited-control': 'This setup may give you less control than you’re used to.',
  'experience-unknown': 'Read the review to check how much experience the workflow needs.',
  'upkeep-check': 'Check the review for grinder cleaning and service access.',
  'home-workflow-mismatch': 'This machine is a specialist option outside the home espresso shortlist.',
  'availability-check': 'Check the exact model, condition and local availability.',
  'priority-ease-tradeoff': 'Expect more hands-on steps in your morning routine.',
  'priority-control-tradeoff': 'This machine automates some of the steps you want to control.',
  'priority-space-tradeoff': 'This machine takes up more counter space than a compact model.',
  'priority-value-tight': 'This setup leaves little room in your budget.',
  'priority-value-no-budget': 'Add a budget to see how much room this setup leaves.',
};

const tradeoffs: Record<string, string> = {
  'tradeoff-one-touch': 'Automation gives you less control over shot prep. Check whether milk needs manual steaming or a separate cleaning cycle.',
  'tradeoff-guided': 'Expect some hands-on prep. Check which steps this model automates in the review.',
  'tradeoff-hands-on': 'Expect to dial in the grind, dose and tamp. Check the review for heat-up and steaming workflow.',
  'tradeoff-manual': 'You handle extraction and water preparation. Check the review for milk equipment and back-to-back workflow.',
  'tradeoff-capsule': 'The capsule system limits which coffees you can use.',
  'tradeoff-commercial': 'Check power, plumbing and service needs before planning a home installation.',
  'tradeoff-availability': 'Confirm the exact model, condition and availability before buying.',
};

const workflowLabels: Record<string, string> = {
  'one-touch': 'Automatic brewing', guided: 'Guided', 'hands-on': 'Hands-on electric', manual: 'Manual',
  capsule: 'Capsule', commercial: 'Commercial',
};
const grinderLabels: Record<string, string> = {
  'built-in': 'Built in', separate: 'Separate espresso grinder', 'not-needed': 'Optional for this setup',
};

function element<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string, className?: string) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function sitePath(base: string, path: string) {
  return /^https:\/\//i.test(path) ? path : base + path.replace(/^\//, '');
}

function track(action: string) {
  document.dispatchEvent(new CustomEvent('coffeedant:machine-finder', { detail: { action } }));
}

function link(text: string, href: string, action?: string) {
  const node = element('a', text);
  node.href = href;
  if (action) node.addEventListener('click', () => track(action));
  return node;
}

function scoreBadge(percent: number, subject = false) {
  const badge = element('p', `${percent}% match`, 'workflow-score');
  badge.dataset.workflowScore = String(percent);
  if (subject) badge.dataset.workflowSubjectScore = '';
  return badge;
}

function codeList(codes: string[], labels: Record<string, string>, limit = Infinity) {
  const values = codes.map((code) => labels[code]).filter(Boolean).slice(0, limit);
  if (values.length === 0) return null;
  const list = element('ul');
  list.append(...values.map((text) => element('li', text)));
  return list;
}

function makeCard(match: Match, index: number, base: string, alternative = false) {
  const { item } = match;
  const card = element('article', undefined, 'workflow-result-card');
  const name = `${item.brand} ${item.model}`;
  const review = sitePath(base, item.path);
  if (item.image) {
    const image = element('img');
    image.src = sitePath(base, item.image);
    image.alt = item.imageAlt || name;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 320;
    image.height = 200;
    card.append(image);
  }
  const title = element(alternative ? 'h5' : 'h4', undefined, 'workflow-result-title');
  title.append(link(name, review, 'review_click'));
  const list = codeList(match.reasons, reasons, 4);
  const limits = codeList(match.caveats, caveats, match.eligible ? 1 : 3);
  const actions = element('div', undefined, 'workflow-result-actions');
  actions.append(link('Read review', review, 'review_click'));
  if (/^https:\/\//i.test(item.amazonHref ?? '')) {
    const price = link('Check price ↗', item.amazonHref, 'price_click');
    price.target = '_blank';
    price.rel = 'nofollow sponsored noopener';
    actions.append(price);
  }
  card.append(
    element('p', !match.eligible ? 'Alternative with compromises' : index === 0 ? (alternative ? 'Top alternative' : 'Best fit') : 'Alternative', 'workflow-result-tag'),
    title, scoreBadge(match.percent),
  );
  if (list) card.append(list);
  if (limits) card.append(limits);
  card.append(element('p', tradeoffs[match.tradeoff], 'workflow-result-note'), actions);
  return card;
}

function makeSubject(match: Match) {
  const panel = element('section', undefined, 'workflow-subject-result');
  const positives = codeList(match.reasons, reasons);
  const limits = codeList(match.caveats, caveats);
  panel.append(scoreBadge(match.percent, true));
  if (positives) panel.append(element('h4', 'Where it fits your routine'), positives);
  if (limits) panel.append(element('h4', 'What to check before you buy'), limits);
  panel.append(element('p', tradeoffs[match.tradeoff], 'workflow-result-note'));
  return panel;
}

function makeResources(title: string, resources: readonly (FinderResource & { image?: string })[], base: string, sectionName: string) {
  if (!resources.length) return null;
  const section = element('section', undefined, 'workflow-result-section');
  section.setAttribute(`data-workflow-${sectionName}`, '');
  const grid = element('div', undefined, 'workflow-resource-grid');
  for (const resource of resources) {
    const card = link('', sitePath(base, resource.path));
    card.className = 'workflow-resource';
    if (resource.image) {
      const image = element('img');
      image.src = sitePath(base, resource.image);
      image.alt = '';
      image.width = 320;
      image.height = 180;
      image.loading = 'lazy';
      card.append(image);
    }
    card.append(element('strong', resource.title), element('small', resource.description));
    grid.append(card);
  }
  section.append(element('h4', title), grid);
  return section;
}

function relevantVideos(items: Machine[]) {
  const videos = new Map<string, FinderResource & { image?: string }>();
  for (const item of items) {
    for (const video of item.videos ?? []) {
      if (!videos.has(video.path)) videos.set(video.path, {
        title: video.title, path: video.path,
        description: `${video.creator} · ${item.brand} ${item.model}`, image: video.thumbnail,
      });
      if (videos.size === 3) return [...videos.values()];
    }
  }
  return [...videos.values()];
}

function makeComparison(matches: Match[]) {
  const disclosure = element('details', undefined, 'workflow-compare');
  disclosure.append(element('summary', 'Compare the shortlist'));
  disclosure.addEventListener('toggle', () => { if (disclosure.open) track('compare'); });
  const scroller = element('div', undefined, 'workflow-compare-scroll');
  scroller.tabIndex = 0;
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-label', 'Shortlist comparison table');
  const table = element('table');
  const headings = table.createTHead().insertRow();
  const feature = element('th', 'Feature');
  feature.scope = 'col';
  headings.append(feature);
  for (const { item } of matches) {
    const heading = element('th', `${item.brand} ${item.model}`);
    heading.scope = 'col';
    headings.append(heading);
  }
  const rows: [string, (match: Match) => string][] = [
    ['Match to your answers', ({ percent }) => `${percent}%`],
    ['Best for', ({ item }) => item.bestFor],
    ['Workflow', ({ item }) => workflowLabels[item.workflow]],
    ['Grinder', ({ item }) => grinderLabels[item.grinder]],
    ['Machine footprint', ({ item }) => item.footprint],
    ['Trade-off', ({ tradeoff }) => tradeoffs[tradeoff]],
  ];
  const body = table.createTBody();
  for (const [label, value] of rows) {
    const row = body.insertRow();
    const heading = element('th', label);
    heading.scope = 'row';
    row.append(heading, ...matches.map((match) => element('td', value(match))));
  }
  scroller.append(table);
  disclosure.append(scroller);
  return disclosure;
}

function quizAnswers(form: HTMLFormElement, budget: HTMLInputElement, currency: string): QuizAnswers {
  const values = new FormData(form);
  const choice = <Key extends Exclude<keyof QuizAnswers, 'budget' | 'currency'>>(name: Key) => String(values.get(name) ?? 'any') as QuizAnswers[Key];
  return {
    drink: choice('drink'), workflow: choice('workflow'), budget: budget.value ? budget.valueAsNumber : null, currency,
    grinder: choice('grinder'), footprint: choice('footprint'), volume: choice('volume'),
    maintenance: choice('maintenance'), experience: choice('experience'), priority: choice('priority'),
  };
}

function resultIntro(answers: QuizAnswers) {
  const drink = ({
    milk: 'milk drinks', mixed: 'straight espresso and milk drinks', espresso: 'straight espresso and Americanos',
  } as Record<string, string>)[answers.drink];
  const routine = ({
    'one-two': 'one or two drinks', 'three-five': 'three to five drinks', 'six-plus': 'six or more drinks',
  } as Record<string, string>)[answers.volume];
  const priority = ({
    ease: 'fewer brewing steps', control: 'more control over the shot', value: 'room in your budget', space: 'more counter space',
  } as Record<string, string>)[answers.priority];
  return `You usually make ${drink}, with ${routine} on a busy day.${priority ? ` We gave extra weight to ${priority}.` : ''}`;
}

function initialize(root: HTMLElement) {
  const form = root.querySelector<HTMLFormElement>('[data-workflow-form]');
  const steps = Array.from(root.querySelectorAll<HTMLFieldSetElement>('[data-workflow-step]'));
  const back = root.querySelector<HTMLButtonElement>('[data-workflow-back]');
  const next = root.querySelector<HTMLButtonElement>('[data-workflow-next]');
  const progress = root.querySelector<HTMLElement>('[data-workflow-progress]');
  const status = root.querySelector<HTMLElement>('[data-workflow-status]');
  const results = root.querySelector<HTMLElement>('[data-workflow-results]');
  const budget = form?.querySelector<HTMLInputElement>('[name="budget"]');
  const budgetHelp = root.querySelector<HTMLElement>('[data-workflow-budget-help]');
  const progressBar = root.querySelector<HTMLProgressElement>('[data-workflow-progress-bar]');
  const drinkHint = root.querySelector<HTMLElement>('[data-workflow-drink-hint]');
  const start = root.querySelector<HTMLButtonElement>('[data-workflow-start]');
  const subjectPath = root.dataset.workflowSubject;
  const subjectName = root.dataset.workflowSubjectName;
  const base = root.dataset.base ?? '/';
  const catalogLink = subjectPath ? `${base}espresso-machine/#machine-catalog` : '#machine-catalog';
  const catalogUrl = root.dataset.catalog;
  if (!form || !steps.length || !back || !next || !progress || !status || !results || !budget || !budgetHelp || !catalogUrl) return;

  let activeStep = 0;
  let request: Promise<Catalog> | undefined;
  let started = false;
  function loadCatalog() {
    request ??= fetch(catalogUrl).then(async (response) => {
      if (!response.ok) throw new Error(`Catalog returned ${response.status}`);
      const data = await response.json() as Catalog;
      if (!Array.isArray(data.items) || !/^[A-Z]{3}$/.test(data.currency)) throw new Error('Invalid machine catalog');
      return data;
    }).catch((error) => {
      request = undefined;
      throw error;
    });
    return request;
  }

  function showStep(index: number, focus = true) {
    activeStep = index;
    steps.forEach((step, i) => { step.hidden = i !== index; });
    progress!.textContent = `Step ${index + 1} of ${steps.length}`;
    if (progressBar) progressBar.value = index + 1;
    next!.textContent = index === steps.length - 1 ? (subjectPath ? 'See my match' : 'See my matches') : 'Continue';
    if (drinkHint && steps[index].dataset.step === 'workflow') {
      const drink = new FormData(form).get('drink');
      drinkHint.textContent = drink === 'espresso'
        ? 'For straight shots, think about how much control you want over grinding and prep.'
        : 'Think about who should handle the milk, too. Some machines automate brewing and leave steaming to you.';
    }
    back!.hidden = index === 0;
    status!.textContent = '';
    if (focus) steps[index].querySelector('h3')?.focus();
  }

  function showResults(matches: Match[], priceCoverageLimited: boolean, answers: QuizAnswers, subject?: Match) {
    const title = element('h3', subject ? `Your match with ${subjectName}`
      : matches.length ? 'Your espresso shortlist' : 'No machine fits these answers', 'workflow-result-title');
    title.tabIndex = -1;
    const edit = element('button', 'Edit answers', 'workflow-back');
    edit.type = 'button';
    edit.addEventListener('click', () => {
      results!.hidden = true;
      delete root.dataset.workflowComplete;
      form!.hidden = false;
      showStep(0);
    });

    results!.replaceChildren(title, element('p', resultIntro(answers), 'workflow-results-intro'));
    if (subject) results!.append(makeSubject(subject));
    results!.append(element('p', 'Match percentages estimate how closely the catalog details fit your answers. Coffeedant’s review ratings are separate.', 'workflow-result-note'));
    if (subjectPath && !subject) results!.append(element('p', 'This model’s details are unavailable for scoring. Here’s what the rest of our catalog can offer.', 'workflow-result-note'));
    if (matches.length) {
      const grid = element('div', undefined, 'workflow-result-grid');
      grid.append(...matches.map((match, index) => makeCard(match, index, base, Boolean(subjectPath))));
      if (subjectPath) {
        const alternatives = element('section', undefined, 'workflow-result-section');
        alternatives.dataset.workflowAlternatives = '';
        alternatives.append(element('h4', matches.length === 3 ? 'Top 3 alternatives' : 'Alternatives to consider'), grid);
        results!.append(alternatives);
      } else results!.append(grid);
      const comparison = subject ? [subject, ...matches] : matches;
      if (comparison.length > 1) results!.append(makeComparison(comparison));
      const nextStep = element('p', undefined, 'workflow-result-note');
      if ((subject ?? matches[0]).item.grinder === 'separate' && answers.grinder !== 'own') {
        nextStep.textContent = 'Before you buy, choose an espresso-capable grinder and check the combined cost.';
      } else if (answers.drink !== 'espresso') {
        nextStep.textContent = 'Before you buy, watch how the machine steams milk and cleans up. That’s the part of the routine you’ll repeat most.';
      } else {
        nextStep.textContent = 'When you get started, stick with one coffee and adjust the grind or recipe one change at a time.';
      }
      results!.append(nextStep);
    } else {
      const advice = element('p');
      advice.append('Try a different workflow or size preference if you have room to compromise. Keep any firm constraints. ', link('Ask Coffeedant about your setup', `${base}contact/`), '.');
      results!.append(advice);
    }
    if (priceCoverageLimited) results!.append(element('p', 'A machine needs a usable reference price to qualify as a budget match.', 'workflow-result-note'));
    if (answers.budget) results!.append(element('p', 'Budget fit uses reference pricing. Check current prices, taxes and shipping before buying.', 'workflow-result-note'));
    const items = [...(subject ? [subject.item] : []), ...matches.map(({ item }) => item)];
    const reading = makeResources('Best-machine guides for your routine', getFinderReadingList(answers, items), base, 'reading');
    const videos = relevantVideos(items);
    const watch = makeResources('Watch before you decide', videos.length ? videos : [{
      title: 'Browse the video library', path: '/videos/', description: 'Explore independent reviews, demos and comparisons.',
    }], base, 'videos');
    const grinders = makeResources('Grinders for this setup', getFinderGrinderPicks(answers, items), base, 'grinders');
    if (grinders && answers.budget) grinders.append(element('p', 'Check the grinder’s current price against what remains in your setup budget.', 'workflow-result-note'));
    for (const section of [reading, watch, grinders]) if (section) results!.append(section);
    const actions = element('div', undefined, 'workflow-result-actions');
    actions.append(edit, link('Browse all machines', catalogLink));
    results!.append(actions);
    const categories = makeResources('Complete your coffee setup', finderProductCategories, base, 'categories');
    if (categories) results!.append(categories);
    form!.hidden = true;
    results!.hidden = false;
    root.dataset.workflowComplete = '';
    title.focus();
  }

  form.noValidate = true;
  showStep(0, false);
  root.querySelector('.workflow-partner a')?.addEventListener('click', () => track('partner_click'));
  back.addEventListener('click', () => showStep(activeStep - 1));
  function begin() {
    if (started) return;
    started = true;
    track('start');
    void loadCatalog().then(({ currency }) => {
      budgetHelp.textContent = `Enter your total in ${currency}. When you may need a separate grinder, we reserve 25% of the budget as a starting estimate.`;
    }).catch(() => {});
  }
  if (start) {
    start.hidden = false;
    start.addEventListener('click', () => {
      start.hidden = true;
      form.hidden = false;
      showStep(0);
      begin();
    });
  }
  form.addEventListener('change', () => {
    status.textContent = '';
    begin();
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const answers = new FormData(form);
    const current = steps[activeStep].dataset.step;
    if ((current === 'drink' || current === 'volume') && !answers.get(current)) {
      status.textContent = 'Choose an option to continue.';
      steps[activeStep].querySelector('input')?.focus();
      return;
    }
    if (current === 'budget' && !budget.validity.valid) {
      status.textContent = 'Enter a whole number above zero or leave the budget blank.';
      budget.focus();
      return;
    }
    if (activeStep < steps.length - 1) {
      showStep(activeStep + 1);
      return;
    }
    next.disabled = true;
    back.disabled = true;
    status.textContent = 'Finding your matches…';
    try {
      const data = await loadCatalog();
      const preferences = quizAnswers(form, budget, data.currency);
      const { matches, priceCoverageLimited } = recommendMachines(data.items, preferences, {
        excludePath: subjectPath, includeNearMatches: Boolean(subjectPath),
      });
      const reviewed = data.items.find(({ path }) => path === subjectPath);
      const subject = reviewed ? assessMachine(reviewed, preferences) : undefined;
      status.textContent = '';
      showResults(matches, priceCoverageLimited, preferences, subject);
      track(matches.some((match: Match) => match.eligible) || subject ? 'complete' : 'no_match');
    } catch {
      status.replaceChildren('The guided finder could not load. Try again or ', link('browse the machine catalog', catalogLink), '.');
    } finally {
      next.disabled = false;
      back.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLElement>('[data-machine-workflow]').forEach(initialize);
