const homeWorkflows = new Set(['one-touch', 'guided', 'hands-on', 'manual']);
const volumeOrder = { 'one-two': 0, 'three-five': 1, 'six-plus': 2 };
const grinderReserve = 0.25;

const drinkFits = (item, drink) => item.drink === drink || item.drink === 'mixed';

const referencePrice = (item) => {
  const price = Object.hasOwn(item, 'priceAmount') ? item.priceAmount : item.priceUsd;
  return Number.isFinite(price) && price > 0 ? price : null;
};

const fitDetails = (item, answers, reservesForGrinder) => {
  let score = 0;
  const reasons = [`drink-${answers.drink}`];
  if (item.drink === answers.drink) score += 3;

  reasons.push(`workflow-${item.workflow}`);
  if (answers.footprint === 'compact') reasons.push('space-compact');

  if (item.grinder === 'built-in') {
    reasons.push('grinder-built-in');
    if (answers.grinder === 'need') score += 2;
  }
  if (answers.grinder === 'own' && item.grinder === 'separate') {
    reasons.push('grinder-owned');
    score += 4;
  }
  if (reservesForGrinder) reasons.push('grinder-reserve');
  if (answers.budget === null && answers.grinder === 'need' && item.grinder === 'separate') {
    reasons.push('grinder-separate');
  }

  if (item.volume === answers.volume) {
    reasons.push(`volume-${answers.volume}`);
    score += 2;
  }
  if (answers.maintenance === 'simple' && item.grinder === 'separate') {
    reasons.push('maintenance-separate');
    score += 2;
  }
  if (answers.budget !== null) reasons.push('budget-fit');

  const tradeoff = item.availability === 'limited' ? 'tradeoff-availability' : `tradeoff-${item.workflow}`;
  return { item, reasons, tradeoff, score };
};

export function recommendMachines(catalogItems, answers) {
  const eligible = [];
  let priceCoverageLimited = false;

  for (const item of catalogItems) {
    if (!homeWorkflows.has(item.workflow) || !drinkFits(item, answers.drink)) continue;
    if (answers.workflow !== 'any' && item.workflow !== answers.workflow) continue;
    if (answers.footprint === 'compact' && item.footprint !== 'compact') continue;
    if (answers.grinder === 'built-in' && item.grinder !== 'built-in') continue;
    if (!(volumeOrder[item.volume] >= volumeOrder[answers.volume])) continue;

    const reservesForGrinder = answers.budget !== null && item.grinder === 'separate'
      && (answers.grinder === 'need' || answers.grinder === 'any');
    if (answers.budget !== null) {
      const machineBudget = answers.budget * (reservesForGrinder ? 1 - grinderReserve : 1);
      const price = referencePrice(item);
      if (price === null) {
        priceCoverageLimited = true;
        continue;
      }
      if (price > machineBudget) continue;
    }

    eligible.push(fitDetails(item, answers, reservesForGrinder));
  }

  eligible.sort((a, b) => (
    Number(a.item.availability === 'limited') - Number(b.item.availability === 'limited')
    || b.score - a.score
    || (b.item.rating ?? 0) - (a.item.rating ?? 0)
    || a.item.brand.localeCompare(b.item.brand)
    || a.item.model.localeCompare(b.item.model)
    || a.item.path.localeCompare(b.item.path)
  ));

  return {
    matches: eligible.slice(0, 3).map(({ item, reasons, tradeoff }) => ({ item, reasons, tradeoff })),
    priceCoverageLimited,
  };
}
