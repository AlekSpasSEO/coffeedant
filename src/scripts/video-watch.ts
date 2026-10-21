// Keep ordinary links working for no-JS, modified clicks and failed requests.
const dialog = document.createElement('dialog');
dialog.className = 'video-watch-dialog';
dialog.setAttribute('aria-labelledby', 'video-watch-title');
const close = document.createElement('button');
close.type = 'button';
close.className = 'video-watch-dialog-close';
let closeLabel = 'Close video ×';
try {
  const localized = JSON.parse(document.querySelector('#coffeedant-localization')?.textContent || 'null');
  if (localized?.ui?.videoClose) closeLabel = localized.ui.videoClose;
} catch { /* The US source keeps its default; regional builds validate all UI keys. */ }
close.textContent = closeLabel;
const content = document.createElement('div');
dialog.append(close, content);
document.body.append(dialog);
const headSelector = 'title, link[rel="canonical"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]';
const originalHead = [...document.head.querySelectorAll(headSelector)].map(node => node.cloneNode(true));
const replaceHead = (nodes: Node[]) => {
  document.head.querySelectorAll(headSelector).forEach(node => node.remove());
  nodes.forEach(node => document.head.append(node.cloneNode(true)));
};
let opener: HTMLAnchorElement | null = null;
let watchUrl = '';
let request: AbortController | null = null;
let pendingClose = false;
const hide = () => {
  if (dialog.open) dialog.close();
  content.replaceChildren(); // Removing the iframe stops audio immediately.
  replaceHead(originalHead);
  opener?.focus({ preventScroll: true });
  pendingClose = false;
};
const show = async (url: string, trigger?: HTMLAnchorElement, push = true) => {
  request?.abort();
  const controller = new AbortController();
  request = controller;
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error('Watch page unavailable');
    const page = new DOMParser().parseFromString(await response.text(), 'text/html');
    if (controller.signal.aborted) return;
    const watch = page.querySelector<HTMLElement>('[data-video-watch]');
    if (!watch) throw new Error('Watch page content missing');
    document.dispatchEvent(new Event('product-video-stop'));
    // A standalone watch page has a server-rendered player; the popup uses it too.
    content.replaceChildren(document.adoptNode(watch));
    replaceHead([...page.head.querySelectorAll(headSelector)]);
    if (trigger) opener = trigger;
    watchUrl = url;
    if (push) history.pushState({ ...history.state, coffeedantVideoWatch: true }, '', url);
    if (!dialog.open) dialog.showModal();
    close.focus();
  } catch (error) {
    if (!controller.signal.aborted) location.assign(url);
  } finally {
    if (request === controller) request = null;
  }
};
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element)?.closest<HTMLAnchorElement>('a[data-video-watch-link]');
  if (!link || link.origin !== location.origin || link.target || !('showModal' in dialog)) return;
  event.preventDefault();
  void show(link.href, link);
});
const dismiss = () => {
  if (pendingClose) return;
  pendingClose = true;
  content.querySelector('iframe')?.remove();
  history.back();
};
close.addEventListener('click', dismiss);
dialog.addEventListener('cancel', event => { event.preventDefault(); dismiss(); });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dismiss();
});
window.addEventListener('popstate', () => {
  request?.abort();
  if (history.state?.coffeedantVideoWatch) {
    if (location.href === watchUrl && content.childElementCount) {
      if (!dialog.open) dialog.showModal();
    } else void show(location.href, undefined, false);
  } else hide();
});
window.addEventListener('pagehide', () => { request?.abort(); hide(); });
window.addEventListener('pageshow', event => {
  // A cached library can be restored at its popup URL after following a link.
  if (event.persisted && history.state?.coffeedantVideoWatch) void show(location.href, undefined, false);
});
