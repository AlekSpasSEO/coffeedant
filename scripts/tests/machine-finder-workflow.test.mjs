import assert from 'node:assert/strict';
import { test } from 'node:test';
import { recommendMachines } from '../../src/lib/machine-finder-workflow.mjs';

const machine = (model, fields = {}) => ({
  model,
  brand: 'Example',
  path: `/espresso-machine/${model}/`,
  workflow: 'hands-on',
  drink: 'mixed',
  footprint: 'compact',
  grinder: 'separate',
  volume: 'three-five',
  priceUsd: 600,
  availability: 'catalog',
  rating: 4,
  ...fields,
});

const answers = {
  drink: 'milk',
  workflow: 'any',
  budget: 800,
  grinder: 'need',
  footprint: 'compact',
  volume: 'three-five',
  maintenance: 'any',
};

test('honors drink, workflow, counter space, volume, and the full setup budget', () => {
  const catalog = [
    machine('ready'),
    machine('over-budget', { priceUsd: 600.01 }),
    machine('espresso-only', { drink: 'espresso' }),
    machine('too-large', { footprint: 'standard' }),
    machine('too-slow', { volume: 'one-two' }),
    machine('different-workflow', { workflow: 'guided', grinder: 'built-in' }),
    machine('capsule', { workflow: 'capsule' }),
  ];
  const result = recommendMachines(catalog, { ...answers, workflow: 'hands-on' });
  assert.deepEqual(result.matches.map(({ item }) => item.model), ['ready']);
  assert.ok(result.matches[0].reasons.includes('grinder-reserve'));
  assert.equal(result.priceCoverageLimited, false);
});

test('includes integrated grinders at the full ceiling and prefers in-scope catalogue options', () => {
  const catalog = [
    machine('separate'),
    machine('exact', { drink: 'milk', grinder: 'built-in', workflow: 'guided', priceUsd: 800 }),
    machine('limited', { drink: 'milk', grinder: 'built-in', workflow: 'guided', availability: 'limited', rating: 5 }),
  ];
  const result = recommendMachines(catalog, answers);
  assert.deepEqual(result.matches.map(({ item }) => item.model), ['exact', 'separate', 'limited']);
  assert.equal(result.matches[2].tradeoff, 'tradeoff-availability');
  assert.deepEqual(recommendMachines(catalog, { ...answers, grinder: 'built-in' }).matches.map(({ item }) => item.model), ['exact', 'limited']);
});

test('uses the local reference price and reports missing price coverage', () => {
  const catalog = [
    machine('missing-local-price', { priceAmount: null }),
    machine('over-in-local-currency', { priceAmount: 601 }),
  ];
  const limited = recommendMachines(catalog, answers);
  assert.deepEqual(limited, { matches: [], priceCoverageLimited: true });
  const unbudgeted = recommendMachines(catalog, { ...answers, budget: null });
  assert.equal(unbudgeted.matches.length, 2);
  assert.ok(unbudgeted.matches[0].reasons.includes('grinder-separate'));
  assert.equal(unbudgeted.priceCoverageLimited, false);
});

test('reserves part of the setup budget when grinder ownership is unknown', () => {
  const catalog = [machine('fits'), machine('over', { priceUsd: 650 })];
  const budgeted = recommendMachines(catalog, { ...answers, grinder: 'any' });
  assert.deepEqual(budgeted.matches.map(({ item }) => item.model), ['fits']);
  assert.ok(budgeted.matches[0].reasons.includes('grinder-reserve'));
  const unbudgeted = recommendMachines(catalog, { ...answers, budget: null, grinder: 'any' });
  assert.equal(unbudgeted.matches.length, 2);
  assert.ok(unbudgeted.matches.every(({ reasons }) => !reasons.includes('grinder-separate')));
});

test('keeps three matches and rewards reuse and separate maintenance when requested', () => {
  const catalog = [
    machine('integrated', { drink: 'milk', grinder: 'built-in', workflow: 'guided', rating: 5 }),
    machine('better-rated', { rating: 4.5 }),
    machine('alpha'),
    machine('bravo'),
  ];
  const result = recommendMachines(catalog, { ...answers, grinder: 'own', maintenance: 'simple' });
  assert.deepEqual(result.matches.map(({ item }) => item.model), ['better-rated', 'alpha', 'bravo']);
  assert.ok(result.matches[0].reasons.includes('grinder-owned'));
  assert.ok(result.matches[0].reasons.includes('maintenance-separate'));
});
