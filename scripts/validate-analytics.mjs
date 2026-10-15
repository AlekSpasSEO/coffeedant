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
  assert(nodes.some((n) => attr(n, 'data-analytics-preferences') !== undefined), `${file}: preferences link missing`);
  assert(nodes.some((n) => n.tagName === 'link' && attr(n, 'rel') === 'icon'), `${file}: favicon missing`);
  const source = tags[0].childNodes.map((n) => n.value ?? '').join('');
  bootstrap ??= source;
  assert.equal(source, bootstrap, `${file}: shared analytics code must be identical`);
  assert.equal(nodes.filter((node) => node.tagName === 'script' && /googletagmanager|google-analytics/.test(attr(node, 'src') || '')).length, 0, `${file}: second Google tag bypasses consent`);
}

const storageKey = 'coffeedant.analytics-consent.v1';
const run = ({ hostname = 'coffeedant.com', choice, savedAt = Date.now(), gpc = false, brokenStorage = false } = {}) => {
  const events = [];
  const appended = [];
  const deletedCookies = [];
  const timers = new Map();
  const windowEvents = new Map();
  const focusCalls = [];
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
  const banner = {
    hidden: true,
    querySelector(selector) { return selector.includes('optout') ? note : selector.includes('granted') ? buttons[0] : buttons[0]; },
    querySelectorAll: () => buttons,
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
    window, document, location: { hostname }, navigator: { globalPrivacyControl: gpc },
    localStorage: {
      getItem(key) { if (brokenStorage) throw new Error('Storage blocked'); return storage.get(key) ?? null; },
      setItem(key, value) { if (brokenStorage) throw new Error('Storage blocked'); storage.set(key, value); },
    }, Date,
    setTimeout(handler) { const id = timers.size + 1; timers.set(id, handler); return id; },
    clearTimeout(id) { timers.delete(id); },
  });
  vm.runInContext(bootstrap, context);
  events.forEach((handler) => handler());
  return {
    window, banner, buttons, preferences, preferenceButtons, focusCalls, note, storage, appended, deletedCookies, timers,
    repeatBootstrap: () => vm.runInContext(bootstrap, context),
    storageEvent: (value) => windowEvents.get('storage')({ key: storageKey, newValue: value === null ? null : JSON.stringify({ value, savedAt }) }),
    flushTimers: () => { const pending = [...timers.values()]; timers.clear(); pending.forEach((handler) => handler()); },
  };
};
for (const buttonIndex of [0, 1]) {
  const initial = run();
  initial.buttons[buttonIndex].handlers.click();
  assert.equal(initial.banner.hidden, true, 'The initial consent choice closes the banner');
  assert.equal(initial.focusCalls.length, 0, 'The initial consent choice must not move focus to the footer');
  const reopened = run({ choice: 'denied' });
  reopened.preferenceButtons[1].handlers.click();
  assert.deepEqual(reopened.focusCalls, [{ target: 'granted', preventScroll: true }], 'Opening preferences focuses a banner control without scrolling');
  reopened.buttons[buttonIndex].handlers.click();
  assert.deepEqual(reopened.focusCalls.at(-1), { target: 'preferences-1', preventScroll: true }, 'Closing preferences restores the exact opener without scrolling');
  reopened.storageEvent(null);
  const focusCount = reopened.focusCalls.length;
  reopened.buttons[buttonIndex].handlers.click();
  assert.equal(reopened.focusCalls.length, focusCount, 'A later automatic prompt must not reuse a previous preferences opener');
}
let result = run();
assert.equal(result.appended.length, 0, 'No Google requests before opt-in');
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
assert.equal(run({ choice: 'granted' }).appended.length, 1, 'Saved opt-in loads GA4');
assert.equal(run({ choice: 'denied' }).appended.length, 0, 'Saved rejection blocks GA4');
assert.equal(run({ choice: 'granted', savedAt: 0 }).appended.length, 0, 'Expired consent asks again');
result = run({ choice: 'granted', gpc: true });
assert.equal(result.appended.length, 0, 'GPC overrides an old opt-in');
assert.equal(result.buttons[0].disabled, true);
assert.equal(run({ brokenStorage: true }).banner.hidden, false, 'Blocked storage still offers a choice');
for (const hostname of ['localhost', 'coffeedant.pages.dev', 'preview.coffeedant.pages.dev', 'alekspasseo.github.io']) {
  assert.equal(run({ hostname, choice: 'granted' }).appended.length, 0, `${hostname}: staging must not collect`);
}
for (const hostname of ['br.coffeedant.com', 'ca.coffeedant.com', 'at.coffeedant.com', 'ch.coffeedant.com']) {
  assert.equal(run({ hostname, choice: 'granted' }).appended.length, 1, `${hostname}: configured regional hosts retain opt-in analytics`);
  assert.equal(run({ hostname }).appended.length, 0, `${hostname}: no analytics before opt-in`);
}
assert.equal(run({ hostname: 'unregistered.coffeedant.com', choice: 'granted' }).appended.length, 0);
result = run({ choice: 'granted' });
result.repeatBootstrap();
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
result.appended[0].onerror();
result.buttons[1].handlers.click();
result.flushTimers();
assert.equal(result.appended.length, 1, 'Withdrawal cancels pending retry');
result = run();
result.storageEvent('granted');
assert.equal(result.appended.length, 1, 'Consent from another tab enables this page');
result.storageEvent('denied');
assert.equal(result.window['ga-disable-G-270R14ZHVX'], true, 'Withdrawal in another tab stops tracking');
assert(result.deletedCookies.length > 0, 'Cross-tab withdrawal removes analytics cookies');
result.storageEvent(null);
assert.equal(result.banner.hidden, false, 'Cleared preferences ask again');
result = run({ gpc: true });
result.storageEvent('granted');
assert.equal(result.appended.length, 0, 'Cross-tab acceptance cannot override GPC');
result = run({ hostname: 'ca.coffeedant.com', choice: 'denied' });
assert(result.deletedCookies.some((cookie) => cookie.includes('Domain=ca.coffeedant.com')), 'Withdrawal clears regional-domain cookies');
console.log(`Verified GA4 head coverage on ${htmlFiles.length-redirectCount} content pages and ${redirectCount} noindex redirect fallbacks, consent/withdrawal, cross-tab changes, bounded loader retry, duplicate prevention, GPC, storage failures and preview exclusion.`);
