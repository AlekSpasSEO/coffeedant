import test from 'node:test';
import assert from 'node:assert/strict';
import { dealCalendar, getDealSeason, discoveryPlan, seasonalQueries } from '../../src/lib/deal-season.mjs';

test('annual dates follow the fourth Thanksgiving Thursday, including leap years', () => {
  for (const [year, friday, monday] of [[2026, '2026-11-27', '2026-11-30'], [2027, '2027-11-26', '2027-11-29'], [2028, '2028-11-24', '2028-11-27'], [2030, '2030-11-29', '2030-12-02']]) {
    const events = dealCalendar(year);
    assert.equal(events[0].date, friday); assert.equal(events[1].date, monday);
  }
});
test('Eastern midnight boundaries activate previews, live coverage, handoffs and rollback', () => {
  for (const [instant, id, phase] of [
    ['2026-11-13T04:59:59Z', undefined, 'evergreen'],
    ['2026-11-13T05:00:00Z', 'black-friday', 'preview'],
    ['2026-11-27T05:00:00Z', 'black-friday', 'live'],
    ['2026-11-28T05:00:00Z', 'cyber-monday', 'preview'],
    ['2026-11-30T05:00:00Z', 'cyber-monday', 'live'],
    ['2026-12-01T05:00:00Z', 'christmas', 'live'],
    ['2026-12-26T04:59:59Z', 'christmas', 'live'],
    ['2026-12-26T05:00:00Z', undefined, 'evergreen'],
    ['2027-01-01T05:00:00Z', undefined, 'evergreen'],
  ]) { const state = getDealSeason(instant); assert.equal(state.campaign?.id, id, instant); assert.equal(state.phase, phase, instant); }
});
test('Cyber Monday takes precedence if it extends into December', () => {
  assert.equal(getDealSeason('2030-12-02T12:00:00Z').campaign.id, 'cyber-monday');
  assert.equal(getDealSeason('2030-12-03T12:00:00Z').campaign.id, 'christmas');
});
test('ordinary weeks discover on Friday and catch up after failures', () => {
  assert.equal(discoveryPlan({ now: '2026-10-15T12:00:00Z', selectedAt: '2026-10-13T12:00:00Z' }).due, false);
  assert.equal(discoveryPlan({ now: '2026-10-16T12:00:00Z' }).due, true);
  assert.equal(discoveryPlan({ now: '2026-10-16T04:00:00Z', selectedAt: '2026-10-13T12:00:00Z' }).due, false);
  assert.equal(discoveryPlan({ now: '2026-10-16T18:00:00Z', selectedAt: '2026-10-16T12:00:00Z' }).due, false);
  assert.equal(discoveryPlan({ now: '2026-10-15T12:00:00Z', force: true }).due, true);
  assert.equal(discoveryPlan({ now: '2026-10-17T12:00:00Z', selectedAt: '2026-10-13T12:00:00Z' }).due, true);
  assert.equal(discoveryPlan({ now: '2026-10-19T12:00:00Z', selectedAt: '2026-10-13T12:00:00Z' }).due, true);
  assert.equal(discoveryPlan({ now: '2026-10-19T12:00:00Z', selectedAt: '2026-10-17T12:00:00Z' }).due, false);
  assert.equal(discoveryPlan({ now: '2026-10-30T07:59:59Z', selectedAt: '2026-10-23T12:00:00Z' }).due, false);
  assert.equal(discoveryPlan({ now: '2026-10-30T08:00:00Z', selectedAt: '2026-10-23T12:00:00Z' }).due, true);
});
test('campaigns discover on entry, each six hours, and recover missing or future timestamps', () => {
  const args = { now: '2026-11-20T12:00:00Z', selectedAt: '2026-11-20T06:00:00Z', selectedCampaign: 'black-friday' };
  assert.equal(discoveryPlan(args).due, true);
  assert.equal(discoveryPlan({ ...args, now: '2026-11-20T17:59:59Z', selectedAt: '2026-11-20T12:00:01Z' }).due, false);
  for (const selectedAt of [undefined, 'bad', '2026-11-21T00:00:00Z']) assert.equal(discoveryPlan({ ...args, selectedAt }).due, true);
  assert.equal(discoveryPlan({ ...args, selectedAt: args.now, selectedCampaign: 'evergreen' }).due, true);
});
test('campaign-specific discovery resets with the standard design', () => {
  assert.deepEqual(seasonalQueries('coffee', getDealSeason('2026-12-20T12:00:00Z')), ['coffee gift set']);
  assert.deepEqual(seasonalQueries('coffee', getDealSeason('2026-12-26T12:00:00Z')), []);
  assert.equal(getDealSeason('2026-12-26T12:00:00Z').headline, 'Coffee deals.');
});
