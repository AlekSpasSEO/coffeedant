import { config, safeRoute, walk, attr, appendHtml, detach } from './core.mjs';

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const flag = (country) => {
  let drawing;
  if (country === 'US') {
    const star = (x, y) => `<path d="${Array.from({ length: 10 }, (_, i) => {
      const angle = -Math.PI / 2 + i * Math.PI / 5, radius = i % 2 ? .19 : .47;
      return `${i ? 'L' : 'M'}${(x + Math.cos(angle) * radius).toFixed(2)},${(y + Math.sin(angle) * radius).toFixed(2)}`;
    }).join('')}Z" fill="#fff"/>`;
    drawing = '<path fill="#fff" d="M0 0h30v20H0z"/>'
      + Array.from({ length: 7 }, (_, i) => `<path fill="#b22234" d="M0 ${i * 40 / 13}h30v${20 / 13}H0z"/>`).join('')
      + '<path fill="#3c3b6e" d="M0 0h12v10.77H0z"/>'
      + Array.from({ length: 9 }, (_, row) => Array.from({ length: row % 2 ? 5 : 6 }, (_, col) => star((row % 2 ? 2 : 1) + col * 2, 1 + row * 1.1)).join('')).join('');
  } else if (country === 'FR') drawing = '<path fill="#002395" d="M0 0h10v20H0z"/><path fill="#fff" d="M10 0h10v20H10z"/><path fill="#ed2939" d="M20 0h10v20H20z"/>';
  else if (country === 'DE') drawing = '<path fill="#151515" d="M0 0h30v7H0z"/><path fill="#d00" d="M0 7h30v7H0z"/><path fill="#ffce00" d="M0 14h30v6H0z"/>';
  else if (country === 'NL') drawing = '<path fill="#ae1c28" d="M0 0h30v7H0z"/><path fill="#fff" d="M0 7h30v7H0z"/><path fill="#21468b" d="M0 14h30v6H0z"/>';
  else return `<span aria-hidden="true">${escape(country)}</span>`;
  return `<svg class="cd-region-flag" viewBox="0 0 30 20" width="24" height="16" aria-hidden="true" focusable="false">${drawing}</svg>`;
};

const styles = `
[data-language-region]{position:relative;flex:0 0 auto;margin:0;color:#161711;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}
[data-language-region] summary{display:flex;width:48px;height:44px;align-items:center;justify-content:center;gap:6px;padding:0;border:1px solid transparent;border-radius:6px;list-style:none;cursor:pointer}
[data-language-region] summary::-webkit-details-marker,[data-regional-context] summary::-webkit-details-marker{display:none}
[data-language-region] summary:hover,[data-language-region] details[open]>summary{background:#f1f0e9;border-color:#d9d9cf}
[data-language-region] summary:focus-visible,[data-language-region] a:focus-visible,[data-regional-context] summary:focus-visible{outline:2px solid #161711;outline-offset:3px}
.cd-region-flag{display:block;flex:0 0 auto;overflow:hidden;border-radius:2px;box-shadow:0 0 0 1px #0002}
.cd-region-chevron{width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg)}
[data-language-region] details[open] .cd-region-chevron{transform:translateY(2px) rotate(225deg)}
.cd-region-options{position:absolute;z-index:100;top:calc(100% + 8px);right:0;width:260px;max-width:calc(100vw - 28px);max-height:70vh;overflow:auto;padding:6px;border:1px solid #d9d9cf;border-radius:8px;background:#fffefa;box-shadow:0 8px 24px #16171126}
.cd-region-options a{display:flex;min-height:48px;align-items:center;gap:12px;padding:8px 12px;border-radius:4px;color:#161711;font-size:14px;line-height:1.4;text-decoration:none}
.cd-region-options a:hover,.cd-region-options a:focus-visible{background:#f1f0e9}
.cd-region-options a[aria-current]{background:#f1f0e9;font-weight:700}
.cd-region-options small{display:block;font-size:12px;color:#62645a}
.cd-region-check{margin-left:auto}
[data-regional-context]{margin:0;border-bottom:1px solid #e4e4da;background:#f7f7f2;color:#62645a;font:12px/1.5 "Helvetica Neue",Helvetica,Arial,sans-serif}
[data-regional-context]>summary,[data-regional-context]>.cd-region-context-copy{box-sizing:border-box;width:min(calc(100% - 40px),1220px);margin:0 auto}
[data-regional-context]>summary{display:flex;min-height:32px;align-items:center;gap:8px;padding:5px 0;list-style:none;cursor:pointer}
[data-regional-context]>summary::after{content:'+';margin-left:auto;font-size:16px}
[data-regional-context][open]>summary::after{content:'−'}
.cd-region-context-copy{padding:0 0 12px}
.cd-region-context-copy p{margin:0 0 6px;font-size:12px;line-height:1.5}
.cd-region-context-copy a{color:inherit;text-underline-offset:2px}
@media(max-width:1320px){.cd-header__inner>[data-language-region]{order:1;margin-left:auto}.cd-header__inner>.cd-header__menu-toggle{order:2;margin-left:0}}
@media(max-width:760px){[data-regional-context]>summary,[data-regional-context]>.cd-region-context-copy{width:calc(100% - 28px)}.cd-header__inner{gap:10px}}
`;

// Native disclosure keeps the selector usable before JavaScript loads.
const behavior = `document.addEventListener('click',event=>{for(const menu of document.querySelectorAll('[data-region-menu][open]'))if(!menu.contains(event.target))menu.open=false});document.addEventListener('keydown',event=>{if(event.key==='Escape')for(const menu of document.querySelectorAll('[data-region-menu][open]')){const focused=menu.contains(document.activeElement);menu.open=false;if(focused)menu.querySelector('summary').focus()}});`;

export const addSelector = (document, page, releases, edition, ui) => {
  for (const node of walk(document)) if (attr(node, 'data-language-region') !== undefined || attr(node, 'data-region-ui') !== undefined) detach(node);
  const languages = new Intl.DisplayNames(edition.locale, { type: 'language' });
  const regions = new Intl.DisplayNames(edition.locale, { type: 'region' });
  const country = edition.locale.split('-')[1];
  const current = `${regions.of(country)} · ${languages.of(edition.locale.split('-')[0])}`;
  const targets = config.editions.filter(({ id, published }) => published && (id === 'us' || id === edition.id || releases.editions[id]));
  if (targets.length < 2) return;
  const links = targets.map(target => {
    const route = target.id === 'us' ? page.sourcePath : releases.editions[target.id]?.verifiedPaths?.[page.id] ?? '/';
    const targetCountry = target.locale.split('-')[1];
    return `<a href="https://${target.host}${escape(safeRoute(route))}" hreflang="${target.hreflang}"${target.id === edition.id ? ' aria-current="true"' : ''}>${flag(targetCountry)}<span>${escape(regions.of(targetCountry))}<small>${escape(languages.of(target.locale.split('-')[0]))}</small></span>${target.id === edition.id ? '<span class="cd-region-check" aria-hidden="true">✓</span>' : ''}</a>`;
  }).join('');
  const header = walk(document).find(node => (attr(node, 'class') ?? '').split(/\s+/).includes('cd-header__inner'));
  const body = walk(document).find(node => node.tagName === 'body');
  const container = header ?? body;
  appendHtml(container, `<nav data-language-region aria-label="${escape(ui.languageRegion)}"><details data-region-menu><summary aria-label="${escape(`${ui.languageRegion}: ${current}`)}" title="${escape(`${ui.languageRegion}: ${current}`)}">${flag(country)}<span class="cd-region-chevron" aria-hidden="true"></span></summary><div class="cd-region-options">${links}</div></details></nav>`);
  // On headerless pages, keep a small control in the top right.
  if (!header) {
    const selector = container.childNodes.pop(); container.childNodes.unshift(selector);
    selector.parentNode = container;
  }
  const head = walk(document).find(node => node.tagName === 'head');
  appendHtml(head, `<style data-region-ui>${styles}${header ? '' : '[data-language-region]{float:right;margin:8px 14px}'}</style>`);
  appendHtml(body, `<script data-region-ui>${behavior}</script>`);
};

export const contextSummary = (id) => ({
  nl: 'Lokale prijzen en beschikbaarheid nog niet geverifieerd',
  de: 'Lokale Preise und Verfügbarkeit noch nicht geprüft',
  fr: 'Prix et disponibilité locaux non vérifiés',
}[id] ?? 'Local prices and availability are not verified');
