import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import {journalRedirects} from './migrate-journal-links.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? files(file) : file.endsWith('.html') ? [file] : [];
});
const descendants = (node) => [node, ...(node.childNodes ?? []).flatMap(descendants)];
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const htmlFiles = files(dist);
let redirectCount=0;
let bootstrap;
for (const file of htmlFiles) {
  const nodes = descendants(parse(fs.readFileSync(file, 'utf8')));
  const route=`/${path.relative(dist,path.dirname(file)).split(path.sep).join('/')}/`;
  if(journalRedirects[route]){
    const refresh=nodes.find(n=>n.tagName==='meta'&&attr(n,'http-equiv')==='refresh');
    assert(refresh,`${file}: expected redirect fallback`);
    assert(attr(refresh,'content').endsWith(journalRedirects[route]),`${file}: wrong redirect target`);
    assert(nodes.some(n=>n.tagName==='meta'&&attr(n,'name')==='robots'&&attr(n,'content')==='noindex'));
    redirectCount++;continue;
  }
  const tags = nodes.filter((n) => n.tagName === 'script' && attr(n, 'id') === 'coffeedant-ga4-bootstrap');
  assert.equal(tags.length, 1, `${file}: must include one shared GA4 bootstrap`);
  const head = nodes.find((node) => node.tagName === 'head');
  assert(descendants(head).includes(tags[0]), `${file}: GA4 must be in the head`);
  const firstScript = descendants(head).find((node) => node.tagName === 'script');
  assert.equal(firstScript, tags[0], `${file}: initialize consent before other scripts`);
  assert.equal(attr(tags[0], 'data-ga4-id'), 'G-270R14ZHVX');
  assert.equal(nodes.filter((n) => attr(n, 'data-analytics-consent') !== undefined).length, 1, `${file}: consent controls missing`);
  for (const mode of ['on', 'off']) assert.equal(nodes.filter((n) => attr(n, 'data-analytics-copy') === mode).length, 3, `${file}: ${mode} analytics explanation and button labels missing`);
  assert(nodes.some((n) => attr(n, 'data-analytics-preferences') !== undefined), `${file}: preferences link missing`);
  assert(nodes.some((n) => n.tagName === 'link' && attr(n, 'rel') === 'icon'), `${file}: favicon missing`);
  const source = tags[0].childNodes.map((n) => n.value ?? '').join('');
  bootstrap ??= source;
  assert.equal(source, bootstrap, `${file}: shared analytics code must be identical`);
  assert.equal(nodes.filter((node) => node.tagName === 'script' && /googletagmanager|google-analytics/.test(attr(node, 'src') || '')).length, 0, `${file}: second Google tag bypasses consent`);
}

const storageKey = 'coffeedant.analytics-consent.v1';
const run = ({ hostname = 'coffeedant.com', choice, savedAt = Date.now(), gpc = false, dnt = false, brokenStorage = false } = {}) => {
  const events = [];
  const appended = [];
  const deletedCookies = [];
  const timers = new Map();
  const windowEvents = new Map();
  const focusCalls = [];
  const requests = [];
  let nextTimer = 0;
  const buttons = ['granted', 'denied'].map((value) => ({
    value, handlers: {}, disabled: false,
    getAttribute: () => value,
    addEventListener(name, handler) { this.handlers[name] = handler; },
    focus(options) { focusCalls.push({ target: value, preventScroll: options?.preventScroll === true }); },
  }));
  const preferenceButtons = [0, 1].map((index) => ({
    hidden: true, handlers: {},
    addEventListener(name, handler) { this.handlers[name] = handler; },
    focus(options) { focusCalls.push({ target: `preferences-${index}`, preventScroll: options?.preventScroll === true }); },
  }));
  const preferences = preferenceButtons[0];
  const note = { hidden: true };
  const copies = ['on', 'off'].map((value) => ({ value, hidden: value === 'on', getAttribute: () => value }));
  const banner = {
    hidden: true,
    querySelector(selector) { return selector.includes('optout') ? note : selector.includes('granted') ? buttons[0] : buttons[0]; },
    querySelectorAll: (selector) => selector.includes('copy') ? copies : buttons,
  };
  const storage = new Map(choice ? [[storageKey, JSON.stringify({ value: choice, savedAt })]] : []);
  const document = {
    readyState: 'loading',
    head: { appendChild: (tag) => appended.push(tag) },
    createElement: () => ({ remove() { this.removed = true; } }),
    querySelector: (selector) => selector.includes('preferences') ? preferences : banner,
    querySelectorAll: () => preferenceButtons,
    addEventListener: (_, handler) => events.push(handler),
    get cookie() { return '_ga=old; _ga_270R14ZHVX=old; essential=keep'; },
    set cookie(value) { deletedCookies.push(value); },
  };
  const window = { addEventListener: (name, handler) => windowEvents.set(name, handler) };
  const context = vm.createContext({
    window, document, location: { hostname }, navigator: { globalPrivacyControl: gpc, doNotTrack: dnt ? '1' : null },
    localStorage: {
      getItem(key) { if (brokenStorage) throw new Error('Storage blocked'); return storage.get(key) ?? null; },
      setItem(key, value) { if (brokenStorage) throw new Error('Storage blocked'); storage.set(key, value); },
    }, Date, AbortController,
    fetch(url, options) {
      return new Promise((resolve, reject) => {
        const request = { url, options, resolve, reject, ignoreAbort: false };
        requests.push(request);
        options.signal.addEventListener('abort', () => { if (!request.ignoreAbort) reject(new Error('Aborted')); });
      });
    },
    setTimeout(handler, delay) { const id = ++nextTimer; timers.set(id, { handler, delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
  });
  vm.runInContext(bootstrap, context);
  events.forEach((handler) => handler());
  return {
    window, banner, buttons, preferences, preferenceButtons, focusCalls, copies, note, storage, appended, deletedCookies, timers, requests,
    repeatBootstrap: () => vm.runInContext(bootstrap, context),
    storageEvent: (value) => windowEvents.get('storage')({ key: storageKey, newValue: value === null ? null : JSON.stringify({ value, savedAt }) }),
    flushTimers: (delay) => { for (const [id, timer] of [...timers]) if (delay === undefined || delay === timer.delay) { timers.delete(id); timer.handler(); } },
    resolveRegion: async (mode, { index = requests.length - 1, ok = true, invalidJson = false, browserOptOut = false, policyVersion = '2026-10-15' } = {}) => {
      requests[index].resolve({ ok, async json() { if (invalidJson) throw new Error('Invalid JSON'); return { mode, browserOptOut, policyVersion }; } });
      await new Promise(setImmediate);
    },
    rejectRegion: async () => { requests.at(-1).reject(new Error('Network failed')); await new Promise(setImmediate); },
  };
};
for (const buttonIndex of [0, 1]) {
  const initial = run();
  await initial.resolveRegion('opt-in');
  initial.buttons[buttonIndex].handlers.click();
  assert.equal(initial.banner.hidden, true, 'The initial consent choice closes the banner');
  assert.equal(initial.focusCalls.length, 0, 'The initial consent choice must not move focus to the footer');
  const reopened = run({ choice: 'denied' });
  reopened.preferenceButtons[1].handlers.click();
  assert.deepEqual(reopened.focusCalls, [{ target: 'denied', preventScroll: true }], 'Opening preferences focuses an enabled control without scrolling while checking browser signals');
  await reopened.resolveRegion('opt-in');
  reopened.buttons[buttonIndex].handlers.click();
  assert.deepEqual(reopened.focusCalls.at(-1), { target: 'preferences-1', preventScroll: true }, 'Closing preferences restores the exact opener without scrolling');
  reopened.storageEvent(null);
  await reopened.resolveRegion('opt-in');
  const focusCount = reopened.focusCalls.length;
  reopened.buttons[buttonIndex].handlers.click();
  assert.equal(reopened.focusCalls.length, focusCount, 'A later automatic prompt must not reuse a previous preferences opener');
}
let result = run();
assert.equal(result.appended.length, 0, 'No Google requests while the regional default is unknown');
assert.equal(result.banner.hidden, true, 'Wait for the regional policy before displaying the automatic banner');
await result.resolveRegion('opt-in');
assert.equal(result.banner.hidden, false);
result.buttons[1].handlers.click();
assert.equal(result.appended.length, 0, 'Rejection must not load Google');
result.preferences.handlers.click();
assert.equal(result.banner.hidden, false, 'Visitors can revisit their choice');
result.buttons[0].handlers.click();
assert.equal(result.appended.length, 1);
assert.equal(result.appended[0].src, 'https://www.googletagmanager.com/gtag/js?id=GT-KT5DM5FP');
assert.equal(result.window.dataLayer.filter((args) => args[0] === 'config').length, 1);
assert.equal(result.window.dataLayer.find((args) => args[0] === 'config')[1], 'G-270R14ZHVX');
assert.equal(result.window.dataLayer.find((args) => args[0] === 'config')[2].send_page_view, true);
result.buttons[0].handlers.click();
assert.equal(result.appended.length, 1, 'Repeated acceptance cannot duplicate the tag');
result.buttons[1].handlers.click();
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true);
assert(result.deletedCookies.length > 0);
assert(result.deletedCookies.every((cookie) => cookie.startsWith('_ga')), 'Withdrawal keeps essential cookies');
result = run({ choice: 'granted' });
assert.equal(result.appended.length, 0, 'Saved opt-in waits for the browser header check');
await result.resolveRegion('opt-in');
assert.equal(result.appended.length, 1, 'Saved opt-in loads GA4 after the browser header check');
assert.equal(run({ choice: 'denied' }).appended.length, 0, 'Saved rejection blocks GA4');
assert.equal(run({ choice: 'granted', savedAt: 0 }).appended.length, 0, 'Expired consent asks again');
result = run({ choice: 'granted', gpc: true });
assert.equal(result.appended.length, 0, 'GPC overrides an old opt-in');
assert.equal(result.buttons[0].disabled, true);
result = run({ brokenStorage: true });
await result.resolveRegion('opt-in');
assert.equal(result.banner.hidden, false, 'Blocked storage still offers a choice');
for (const hostname of ['localhost', 'coffeedant.pages.dev', 'preview.coffeedant.pages.dev', 'alekspasseo.github.io']) {
  assert.equal(run({ hostname, choice: 'granted' }).appended.length, 0, `${hostname}: staging must not collect`);
}
for (const hostname of ['br.coffeedant.com', 'ca.coffeedant.com', 'at.coffeedant.com', 'ch.coffeedant.com']) {
  const regional = run({ hostname, choice: 'granted' });
  await regional.resolveRegion('opt-in');
  assert.equal(regional.appended.length, 1, `${hostname}: configured regional hosts retain opt-in analytics`);
  assert.equal(run({ hostname }).appended.length, 0, `${hostname}: no analytics before opt-in`);
}
assert.equal(run({ hostname: 'unregistered.coffeedant.com', choice: 'granted' }).appended.length, 0);
result = run({ choice: 'granted' });
result.repeatBootstrap();
assert.equal(result.requests.length, 1, 'Repeated bootstrap cannot duplicate the policy lookup');
await result.resolveRegion('opt-in');
assert.equal(result.appended.length, 1, 'Repeated bootstrap cannot duplicate the loader');
assert.equal(result.window.dataLayer.filter((args) => args[0] === 'config').length, 1, 'Repeated bootstrap cannot duplicate page views');
result.appended[0].onerror();
assert.equal(result.appended[0].removed, true);
result.flushTimers();
assert.equal(result.appended.length, 2, 'Transient failure gets one retry');
assert.equal(result.window.dataLayer.filter((args) => args[0] === 'config').length, 1, 'Retry retains the original page-view queue');
result.appended[1].onerror();
result.flushTimers();
assert.equal(result.appended.length, 2, 'Retries remain bounded');
result = run({ choice: 'granted' });
await result.resolveRegion('opt-in');
result.appended[0].onerror();
result.buttons[1].handlers.click();
result.flushTimers();
assert.equal(result.appended.length, 1, 'Withdrawal cancels pending retry');
result = run();
result.storageEvent('granted');
assert.equal(result.appended.length, 0, 'Cross-tab acceptance waits for the browser header check');
await result.resolveRegion('opt-in');
assert.equal(result.appended.length, 1, 'Consent from another tab enables this page');
result.storageEvent('denied');
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true, 'Withdrawal in another tab stops tracking');
assert(result.deletedCookies.length > 0, 'Cross-tab withdrawal removes analytics cookies');
result.storageEvent(null);
assert.equal(result.banner.hidden, true, 'Cleared preferences wait for a fresh regional decision');
await result.resolveRegion('opt-in');
assert.equal(result.banner.hidden, false, 'Cleared preferences ask again');
result = run({ gpc: true });
result.storageEvent('granted');
assert.equal(result.appended.length, 0, 'Cross-tab acceptance cannot override GPC');
result = run({ hostname: 'ca.coffeedant.com', choice: 'denied' });
assert(result.deletedCookies.some((cookie) => cookie.includes('Domain=ca.coffeedant.com')), 'Withdrawal clears regional-domain cookies');

result = run();
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true, 'Collection is disabled while location is unresolved');
assert.equal(result.deletedCookies.length, 0, 'A pending lookup preserves existing IDs until the policy is known');
assert.equal(result.requests.length, 1);
assert.equal(result.requests[0].url, '/api/analytics-consent');
assert.equal(result.requests[0].options.cache, 'no-store');
assert.equal(result.requests[0].options.credentials, 'omit');
assert([...result.timers.values()].some(({ delay }) => delay > 0 && delay <= 1500), 'The regional lookup has a short timeout');
await result.resolveRegion('opt-out');
assert.equal(result.appended.length, 1, 'An opt-out region loads analytics by default');
assert.equal(result.window['ga-disable-G-270R14ZHVX'], false);
assert.equal(result.storage.size, 0, 'A regional default must never be stored as explicit consent');
assert.equal(result.banner.hidden, false, 'Default-on visitors can immediately turn analytics off');
assert.equal(result.copies.find(({ value }) => value === 'on').hidden, false, 'Default-on copy reports that analytics is on');
result.buttons[0].handlers.click();
assert.equal(result.appended.length, 1, 'Keeping analytics on cannot create a second loader');
assert.equal(result.window.dataLayer.filter((args) => args[0] === 'config').length, 1, 'Keeping analytics on cannot duplicate the page view');
assert.equal(JSON.parse(result.storage.get(storageKey)).value, 'granted');
result.preferences.handlers.click();
result.buttons[1].handlers.click();
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true, 'Default-on analytics can be hard-disabled');
assert(result.deletedCookies.length > 0);
assert.equal(JSON.parse(result.storage.get(storageKey)).value, 'denied');

for (const choice of ['granted', 'denied']) {
  const saved = run({ choice });
  assert.equal(saved.requests.length, choice === 'granted' ? 1 : 0, 'Only saved acceptance needs the browser header check');
  assert.equal(saved.appended.length, 0, 'Saved rejection and a pending header check both block collection');
  if (choice === 'granted') await saved.resolveRegion('opt-in');
  assert.equal(saved.appended.length, choice === 'granted' ? 1 : 0);
}
for (const signal of [{ gpc: true }, { dnt: true }]) {
  const optedOut = run({ choice: 'granted', ...signal });
  assert.equal(optedOut.requests.length, 0, 'Browser opt-out skips regional lookup');
  assert.equal(optedOut.appended.length, 0, 'Browser opt-out overrides saved consent');
  assert.equal(optedOut.window['ga-disable-G-270R14ZHVX'], true);
  assert.equal(optedOut.buttons[0].disabled, true);
}
for (const failure of ['unknown-mode', 'old-version', 'invalid-signal', 'http', 'json', 'network', 'timeout']) {
  const failed = run();
  if (failure === 'network') await failed.rejectRegion();
  else if (failure === 'timeout') { failed.flushTimers(1200); await new Promise(setImmediate); }
  else await failed.resolveRegion(failure === 'unknown-mode' ? 'unexpected' : 'opt-out', {
    ok: failure !== 'http', invalidJson: failure === 'json',
    policyVersion: failure === 'old-version' ? '2026-10-14' : '2026-10-15',
    browserOptOut: failure === 'invalid-signal' ? 'false' : false,
  });
  assert.equal(failed.appended.length, 0, `${failure}: uncertainty cannot enable Google requests`);
  assert.equal(failed.window['ga-disable-G-270R14ZHVX'], true);
  assert.equal(failed.banner.hidden, false, `${failure}: fallback still offers a usable consent choice`);
  assert.equal(failed.copies.find(({ value }) => value === 'off').hidden, false);
  failed.buttons[0].handlers.click();
  assert.equal(failed.appended.length, 1, `${failure}: explicit consent remains usable`);
}
for (const choice of [undefined, 'granted']) {
  const headerBlocked = run({ choice });
  await headerBlocked.resolveRegion('opt-in', { browserOptOut: true });
  assert.equal(headerBlocked.appended.length, 0, 'HTTP-only privacy signals override default and saved acceptance');
  assert.equal(headerBlocked.window['ga-disable-G-270R14ZHVX'], true);
  headerBlocked.preferences.handlers.click();
  assert.equal(headerBlocked.buttons[0].disabled, true, 'HTTP-only opt-out disables acceptance');
  assert.equal(headerBlocked.note.hidden, false, 'HTTP-only opt-out is explained in the banner');
  headerBlocked.buttons[0].handlers.click();
  assert.equal(headerBlocked.appended.length, 0, 'Acceptance cannot override an HTTP browser opt-out');
}
result = run();
result.preferences.handlers.click();
assert.equal(result.buttons[0].disabled, true, 'Acceptance is unavailable while checking HTTP privacy signals');
assert.equal(result.buttons[1].disabled, false, 'Rejection remains immediately available');
result.buttons[0].handlers.click();
assert.equal(result.storage.size, 0, 'A click during the header check cannot record acceptance');
assert.equal(result.appended.length, 0);
result.buttons[1].handlers.click();
assert.equal(JSON.parse(result.storage.get(storageKey)).value, 'denied', 'Rejection is saved immediately during the lookup');
await result.resolveRegion('opt-out');
assert.equal(result.appended.length, 0, 'The completed policy cannot override a rejection made while pending');

result = run({ choice: 'denied' });
assert.equal(result.requests.length, 0);
result.preferences.handlers.click();
assert.equal(result.requests.length, 1, 'Reopening a saved rejection checks HTTP signals before enabling acceptance');
assert.equal(result.buttons[0].disabled, true);
await result.resolveRegion('opt-in', { browserOptOut: true });
assert.equal(result.buttons[0].disabled, true);
assert.equal(result.appended.length, 0);

result = run();
result.storageEvent('granted');
await result.resolveRegion('opt-in', { browserOptOut: true });
assert.equal(result.appended.length, 0, 'HTTP privacy signals override acceptance from another tab');
for (const failure of ['network', 'timeout']) {
  const saved = run({ choice: 'granted' });
  if (failure === 'network') await saved.rejectRegion();
  else { saved.flushTimers(1200); await new Promise(setImmediate); }
  assert.equal(saved.appended.length, 1, `${failure}: a saved explicit grant remains usable after an unavailable policy check`);
}
result = run();
result.requests[0].ignoreAbort = true;
result.flushTimers(1200);
await result.resolveRegion('opt-out');
assert.equal(result.appended.length, 0, 'A response arriving after the lookup deadline cannot enable analytics');
for (const action of ['button', 'storage']) {
  const raced = run();
  raced.requests[0].ignoreAbort = true;
  if (action === 'button') { raced.preferences.handlers.click(); raced.buttons[1].handlers.click(); }
  else raced.storageEvent('denied');
  await raced.resolveRegion('opt-out');
  assert.equal(raced.appended.length, 0, `A late regional response cannot override ${action} rejection`);
  assert.equal(raced.window['ga-disable-G-270R14ZHVX'], true);
}
result = run();
result.requests[0].ignoreAbort = true;
result.storageEvent('granted');
await result.resolveRegion('opt-in');
assert.equal(result.appended.length, 1, 'A late response cannot revoke explicit cross-tab acceptance');
assert.equal(result.window.dataLayer.filter((args) => args[0] === 'config').length, 1, 'A late response cannot duplicate an explicitly accepted page view');
assert.equal(result.window['ga-disable-G-270R14ZHVX'], false);
result.storageEvent(null);
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true, 'Clearing preferences pauses collection while rechecking policy');
assert.equal(result.requests.length, 2);
await result.resolveRegion('opt-out');
assert.equal(result.window['ga-disable-G-270R14ZHVX'], false, 'A fresh regional default applies after clearing preferences');
assert.equal(result.appended.length, 1, 'Regional reevaluation cannot duplicate an existing loader');

result = run();
result.requests[0].ignoreAbort = true;
result.storageEvent(null);
await result.resolveRegion('opt-in', { index: 1 });
await result.resolveRegion('opt-out', { index: 0 });
assert.equal(result.appended.length, 0, 'An older lookup cannot override a newer regional decision');
for (const hostname of ['localhost', 'coffeedant.pages.dev', 'unregistered.coffeedant.com']) {
  assert.equal(run({ hostname }).requests.length, 0, `${hostname}: preview hosts never request a regional default`);
}
console.log(`Verified GA4 head coverage on ${htmlFiles.length-redirectCount} content pages and ${redirectCount} noindex redirect fallbacks, regional defaults and failure/race handling, consent/withdrawal, focus preservation, cross-tab changes, bounded loader retry, duplicate prevention, GPC/DNT, storage failures and preview exclusion.`);
