import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { parse } from 'parse5';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? files(file) : file.endsWith('.html') ? [file] : [];
});
const descendants = (node) => [node, ...(node.childNodes ?? []).flatMap(descendants)];
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const htmlFiles = files(dist);
let bootstrap;
for (const file of htmlFiles) {
  const nodes = descendants(parse(fs.readFileSync(file, 'utf8')));
  const tags = nodes.filter((n) => n.tagName === 'script' && attr(n, 'id') === 'coffeedant-ga4-bootstrap');
  assert.equal(tags.length, 1, `${file}: must include one shared GA4 bootstrap`);
  assert.equal(attr(tags[0], 'data-ga4-id'), 'G-270R14ZHVX');
  assert.equal(nodes.filter((n) => attr(n, 'data-analytics-consent') !== undefined).length, 1, `${file}: consent controls missing`);
  assert(nodes.some((n) => attr(n, 'data-analytics-preferences') !== undefined), `${file}: preferences link missing`);
  assert(nodes.some((n) => n.tagName === 'link' && attr(n, 'rel') === 'icon'), `${file}: favicon missing`);
  bootstrap ??= tags[0].childNodes.map((n) => n.value ?? '').join('');
}

const storageKey = 'coffeedant.analytics-consent.v1';
const run = ({ hostname = 'coffeedant.com', choice, savedAt = Date.now(), gpc = false, brokenStorage = false } = {}) => {
  const events = [];
  const appended = [];
  const deletedCookies = [];
  const buttons = ['granted', 'denied'].map((value) => ({
    value, handlers: {}, disabled: false,
    getAttribute: () => value,
    addEventListener(name, handler) { this.handlers[name] = handler; },
    focus() {},
  }));
  const preferences = { hidden: true, handlers: {}, addEventListener(name, handler) { this.handlers[name] = handler; }, focus() {} };
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
    createElement: () => ({}),
    querySelector: (selector) => selector.includes('preferences') ? preferences : banner,
    querySelectorAll: () => [preferences],
    addEventListener: (_, handler) => events.push(handler),
    get cookie() { return '_ga=old; _ga_270R14ZHVX=old; essential=keep'; },
    set cookie(value) { deletedCookies.push(value); },
  };
  const window = {};
  vm.runInNewContext(bootstrap, {
    window, document, location: { hostname }, navigator: { globalPrivacyControl: gpc },
    localStorage: {
      getItem(key) { if (brokenStorage) throw new Error('Storage blocked'); return storage.get(key) ?? null; },
      setItem(key, value) { if (brokenStorage) throw new Error('Storage blocked'); storage.set(key, value); },
    }, Date,
  });
  events.forEach((handler) => handler());
  return { window, banner, buttons, preferences, note, storage, appended, deletedCookies };
};
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
console.log(`Verified GA4 coverage on ${htmlFiles.length} pages, consent/withdrawal, GPC, storage failures and preview exclusion.`);
