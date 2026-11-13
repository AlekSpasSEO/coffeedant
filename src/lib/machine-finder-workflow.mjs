const homeWorkflows = new Set(['one-touch', 'guided', 'hands-on', 'manual']);
const volumeOrder = { 'one-two': 0, 'three-five': 1, 'six-plus': 2 };
const experienceOrder = { beginner: 0, enthusiast: 1, advanced: 2 };
const grinderReserve = 0.25;
const priorityRatings = {
  ease: { 'one-touch': 1, guided: 0.8, 'hands-on': 0.4, manual: 0.2, capsule: 1 },
  control: { 'one-touch': 0.25, guided: 0.65, 'hands-on': 1, manual: 1 },
  space: { compact: 1, standard: 0.55, large: 0.15 },
};

const referencePrice = (item) => {
  const price = Object.hasOwn(item, 'priceAmount') ? item.priceAmount : item.priceUsd;
  return Number.isFinite(price) && price > 0 ? price : null;
};

function fitAssessment(item, answers) {
  const reasons = [];
  const caveats = [];
  let earned = 0;
  let possible = 0;
  let eligible = homeWorkflows.has(item.workflow);
  let priceUnverified = false;
  const add = (weight, credit) => {
    possible += weight;
    earned += weight * credit;
  };
  const requireFit = (fits, caveat) => {
    if (fits) return;
    eligible = false;
    caveats.push(caveat);
  };
  if (!eligible) {
    add(30, 0);
    caveats.push('home-workflow-mismatch');
  }

  const hasDrinkMatch = item.drink === answers.drink || item.drink === 'mixed';
  requireFit(hasDrinkMatch, 'drink-mismatch');
  add(26, hasDrinkMatch ? (item.drink === answers.drink ? 1 : 0.9) : 0);
  if (hasDrinkMatch) reasons.push(`drink-${answers.drink}`);

  const wantsWorkflow = answers.workflow && answers.workflow !== 'any';
  const hasWorkflowMatch = item.workflow === answers.workflow;
  if (wantsWorkflow) {
    requireFit(hasWorkflowMatch, 'workflow-mismatch');
    add(20, Number(hasWorkflowMatch));
  }
  if (!wantsWorkflow || hasWorkflowMatch) reasons.push(`workflow-${item.workflow}`);

  if (answers.footprint === 'compact') {
    const fits = item.footprint === 'compact';
    requireFit(fits, 'space-mismatch');
    add(14, Number(fits));
    if (fits) reasons.push('space-compact');
  }

  const hasBuiltIn = item.grinder === 'built-in';
  const hasSeparate = item.grinder === 'separate';
  if (hasBuiltIn) reasons.push('grinder-built-in');
  if (answers.grinder === 'built-in') {
    requireFit(hasBuiltIn, 'grinder-mismatch');
    add(12, Number(hasBuiltIn));
  } else if (answers.grinder === 'own') {
    add(12, hasSeparate ? 1 : 0.4);
    if (hasSeparate) reasons.push('grinder-owned');
    if (hasBuiltIn) caveats.push('grinder-duplicate');
  } else if (answers.grinder === 'need') {
    add(12, hasBuiltIn ? 1 : 0.75);
  }

  if (Object.hasOwn(volumeOrder, answers.volume)) {
    const enoughVolume = volumeOrder[item.volume] >= volumeOrder[answers.volume];
    const exactVolume = item.volume === answers.volume;
    requireFit(enoughVolume, Object.hasOwn(volumeOrder, item.volume) ? 'volume-mismatch' : 'volume-unknown');
    add(12, enoughVolume ? (exactVolume ? 1 : 0.9) : 0);
    if (exactVolume) reasons.push(`volume-${answers.volume}`);
  }

  const hasBudget = Number.isFinite(answers.budget) && answers.budget > 0;
  const reservesForGrinder = hasBudget && hasSeparate && (answers.grinder === 'need' || answers.grinder === 'any');
  const machineBudget = hasBudget ? answers.budget * (reservesForGrinder ? 1 - grinderReserve : 1) : null;
  const price = referencePrice(item);
  if (hasBudget && price === null) {
    priceUnverified = eligible;
    requireFit(false, 'budget-unverified');
    add(22, 0.4);
  } else if (hasBudget) {
    const fits = price <= machineBudget;
    requireFit(fits, 'budget-exceeded');
    add(22, Number(fits));
    if (fits) {
      reasons.push('budget-fit');
      if (reservesForGrinder) reasons.push('grinder-reserve');
    }
  } else if (answers.grinder === 'need' && hasSeparate) {
    reasons.push('grinder-separate');
  }

  if (Object.hasOwn(experienceOrder, answers.experience)) {
    const difficultyGap = experienceOrder[item.experience] - experienceOrder[answers.experience];
    if (difficultyGap === 0) {
      add(10, 1);
      reasons.push(`experience-${answers.experience}`);
    } else if (Number.isNaN(difficultyGap)) {
      add(10, 0.5);
      caveats.push('experience-unknown');
    } else if (difficultyGap > 0) {
      add(10, difficultyGap > 1 ? 0.2 : 0.65);
      caveats.push('experience-learning-curve');
    } else if (hasWorkflowMatch) {
      // Give the user's explicit workflow preference precedence over experience bands.
      add(10, 1);
    } else {
      add(10, difficultyGap < -1 ? 0.6 : 0.85);
      if (difficultyGap < -1) caveats.push('experience-limited-control');
    }
  }

  if (answers.maintenance === 'simple') {
    add(8, hasSeparate ? 1 : 0.5);
    if (hasSeparate) reasons.push('maintenance-separate');
    else caveats.push('upkeep-check');
  }

  const priority = answers.priority;
  if (priority === 'value' && !hasBudget) {
    caveats.push('priority-value-no-budget');
  } else if (priority === 'value') {
    const headroom = price === null ? 0 : Math.max(0, machineBudget - price);
    add(14, Math.min(1, headroom / (machineBudget * 0.25)));
    if (headroom >= machineBudget * 0.25) reasons.push('priority-value');
    else if (price !== null && price <= machineBudget) caveats.push('priority-value-tight');
  } else if (Object.hasOwn(priorityRatings, priority)) {
    const attribute = priority === 'space' ? item.footprint : item.workflow;
    const credit = priorityRatings[priority][attribute] ?? 0;
    add(14, credit);
    if (credit === 1) reasons.push(`priority-${priority}`);
    else caveats.push(`priority-${priority}-tradeoff`);
  }

  if (item.availability === 'limited') caveats.push('availability-check');
  const tradeoff = item.availability === 'limited' ? 'tradeoff-availability' : `tradeoff-${item.workflow}`;
  return { item, reasons, tradeoff, caveats, percent: Math.round(100 * earned / possible), eligible, priceUnverified };
}

export function assessMachine(item, answers) {
  const { priceUnverified, ...assessment } = fitAssessment(item, answers);
  return assessment;
}

function matchFitOrder(a, b) {
  return b.percent - a.percent
    || (b.item.rating ?? 0) - (a.item.rating ?? 0)
    || a.item.brand.localeCompare(b.item.brand)
    || a.item.model.localeCompare(b.item.model)
    || a.item.path.localeCompare(b.item.path);
}

function exactMatchOrder(a, b) {
  return Number(a.item.availability === 'limited') - Number(b.item.availability === 'limited')
    || matchFitOrder(a, b);
}

export function recommendMachines(catalogItems, answers, { excludePath, includeNearMatches = false } = {}) {
  const exactMatches = [];
  const nearMatches = [];
  let priceCoverageLimited = false;
  for (const item of catalogItems) {
    if (item.path === excludePath || !homeWorkflows.has(item.workflow)) continue;
    const { priceUnverified, ...match } = fitAssessment(item, answers);
    if (priceUnverified) priceCoverageLimited = true;
    if (match.eligible) exactMatches.push(match);
    else if (includeNearMatches) nearMatches.push(match);
  }
  const matches = exactMatches.sort(exactMatchOrder).slice(0, 3);
  if (includeNearMatches && matches.length < 3) {
    matches.push(...nearMatches.sort(matchFitOrder).slice(0, 3 - matches.length));
  }
  return { matches, priceCoverageLimited };
}
