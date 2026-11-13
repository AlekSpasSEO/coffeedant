import type { CoffeeFinderItem } from './coffee-finder';
import { recommendMachines } from './machine-finder-workflow.mjs';

type Machine = CoffeeFinderItem & { priceAmount?: number | null };
type Catalog = { items: Machine[]; currency: string };
type Match = { item: Machine; reasons: string[]; tradeoff: string };

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
};

const tradeoffs: Record<string, string> = {
  'tradeoff-one-touch': 'Automation gives you less control over shot prep. Check whether milk needs manual steaming or a separate cleaning cycle.',
  'tradeoff-guided': 'Expect some hands-on prep. Check which steps this model automates in the review.',
  'tradeoff-hands-on': 'Expect to dial in the grind, dose and tamp. Check the review for heat-up and steaming workflow.',
  'tradeoff-manual': 'You handle extraction and water preparation. Check the review for milk equipment and back-to-back workflow.',
  'tradeoff-availability': 'Confirm the exact model, condition and availability before buying.',
};

const workflowLabels: Record<string, string> = {
  'one-touch': 'Automatic brewing', guided: 'Guided', 'hands-on': 'Hands-on electric', manual: 'Manual',
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

function makeCard(match: Match, index: number, base: string) {
  const { item } = match;
  const card = element('article', undefined, 'workflow-result-card');
  const name = `${item.brand} ${item.model}`;
  const review = sitePath(base, item.path);
  if (item.image) {
    const image = element('img');
    image.src = sitePath(base, item.image);
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 320;
    image.height = 200;
    card.append(image);
  }
  const title = element('h4', undefined, 'workflow-result-title');
  title.append(link(name, review, 'review_click'));
  const list = element('ul');
  for (const reason of match.reasons) {
    if (reasons[reason]) list.append(element('li', reasons[reason]));
  }
  const actions = element('div', undefined, 'workflow-result-actions');
  actions.append(link('Read review', review, 'review_click'));
  if (/^https:\/\//i.test(item.amazonHref ?? '')) {
    const price = link('Check price ↗', item.amazonHref, 'price_click');
    price.target = '_blank';
    price.rel = 'nofollow sponsored noopener';
    actions.append(price);
  }
  card.append(
    element('p', index === 0 ? 'Best fit' : 'Alternative', 'workflow-result-tag'),
    title, list, element('p', tradeoffs[match.tradeoff], 'workflow-result-note'), actions,
  );
  return card;
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
  const base = root.dataset.base ?? '/';
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
    next!.textContent = index === steps.length - 1 ? 'See my matches' : 'Continue';
    back!.hidden = index === 0;
    status!.textContent = '';
    if (focus) steps[index].querySelector('h3')?.focus();
  }

  function showResults(matches: Match[], priceCoverageLimited: boolean, answers: FormData) {
    const title = element('h3', matches.length ? 'Your espresso shortlist' : 'No machine fits these answers', 'workflow-result-title');
    title.tabIndex = -1;
    const edit = element('button', 'Edit answers', 'workflow-back');
    edit.type = 'button';
    edit.addEventListener('click', () => {
      results!.hidden = true;
      form!.hidden = false;
      showStep(0);
    });

    results!.replaceChildren(title);
    if (matches.length) {
      const grid = element('div', undefined, 'workflow-result-grid');
      grid.append(...matches.map((match, index) => makeCard(match, index, base)));
      results!.append(grid);
      if (matches.length > 1) results!.append(makeComparison(matches));
      const nextStep = element('p', undefined, 'workflow-result-note');
      if (matches[0].item.grinder === 'separate' && answers.get('grinder') !== 'own') {
        nextStep.append('Before you buy, choose an espresso-capable grinder and check the combined cost. ', link('Browse grinders', `${base}grinder/`));
      } else {
        nextStep.textContent = 'Before you buy, check dimensions, local warranty and the exact model. In week one, use one coffee and adjust the grind or recipe one change at a time.';
      }
      results!.append(nextStep);
    } else {
      const advice = element('p');
      advice.append('Try a different workflow or size preference if you have room to compromise. Keep any firm constraints. ', link('Ask Coffeedant about your setup', `${base}contact/`), '.');
      results!.append(advice);
    }
    if (priceCoverageLimited) results!.append(element('p', 'Machines without a usable reference price were left out of the budget match.', 'workflow-result-note'));
    if (answers.get('budget')) results!.append(element('p', 'Budget fit uses reference pricing. Check current prices, taxes and shipping before buying.', 'workflow-result-note'));
    const actions = element('div', undefined, 'workflow-result-actions');
    actions.append(edit, link('Browse all machines', '#machine-catalog'));
    results!.append(actions);
    form!.hidden = true;
    results!.hidden = false;
    title.focus();
  }

  form.noValidate = true;
  showStep(0, false);
  root.querySelector('.workflow-partner a')?.addEventListener('click', () => track('partner_click'));
  back.addEventListener('click', () => showStep(activeStep - 1));
  form.addEventListener('change', () => {
    status.textContent = '';
    if (started) return;
    started = true;
    track('start');
    void loadCatalog().then(({ currency }) => {
      budgetHelp.textContent = `Enter your total in ${currency}. When you may need a separate grinder, we reserve 25% of the budget as a starting estimate.`;
    }).catch(() => {});
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
      const { matches, priceCoverageLimited } = recommendMachines(data.items, {
        drink: answers.get('drink'), workflow: answers.get('workflow'),
        budget: budget.value ? budget.valueAsNumber : null,
        grinder: answers.get('grinder'), footprint: answers.get('footprint'),
        volume: answers.get('volume'), maintenance: answers.get('maintenance'),
      });
      status.textContent = '';
      showResults(matches, priceCoverageLimited, answers);
      track(matches.length ? 'complete' : 'no_match');
    } catch {
      status.replaceChildren('The guided finder could not load. Try again or ', link('browse the machine catalog', '#machine-catalog'), '.');
    } finally {
      next.disabled = false;
      back.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLElement>('[data-machine-workflow]').forEach(initialize);
