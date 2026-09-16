import { parseFragment, serialize } from 'parse5';
import migrationBatches from '../data/review-migration-batches.json';

type HtmlNode = {
  nodeName?: string;
  tagName?: string;
  value?: string;
  attrs?: Array<{ name: string; value: string }>;
  childNodes?: HtmlNode[];
  parentNode?: HtmlNode;
};

const migratedLegacyPaths = new Set(migrationBatches.batches.slice(2).flat());

const getAttribute = (node: HtmlNode, name: string) => (
  node.attrs?.find((attribute) => attribute.name === name)?.value ?? ''
);

const setAttribute = (node: HtmlNode, name: string, value: string) => {
  node.attrs ??= [];
  const attribute = node.attrs.find((item) => item.name === name);
  if (attribute) attribute.value = value;
  else node.attrs.push({ name, value });
};

const removeAttribute = (node: HtmlNode, name: string) => {
  if (node.attrs) node.attrs = node.attrs.filter((attribute) => attribute.name !== name);
};

const classNames = (node: HtmlNode) => getAttribute(node, 'class').split(/\s+/).filter(Boolean);

const addClass = (node: HtmlNode, className: string) => {
  setAttribute(node, 'class', [...new Set([...classNames(node), className])].join(' '));
};

const textContent = (node: HtmlNode): string => (
  node.nodeName === '#text'
    ? node.value ?? ''
    : (node.childNodes ?? []).map(textContent).join(' ')
);

const removeNode = (node: HtmlNode) => {
  const siblings = node.parentNode?.childNodes;
  if (!siblings) return;
  const index = siblings.indexOf(node);
  if (index >= 0) siblings.splice(index, 1);
};

const descendants = (node: HtmlNode, predicate: (candidate: HtmlNode) => boolean): HtmlNode[] => {
  const matches: HtmlNode[] = [];
  for (const child of node.childNodes ?? []) {
    if (predicate(child)) matches.push(child);
    matches.push(...descendants(child, predicate));
  }
  return matches;
};

const stripFaqIcons = (node: HtmlNode) => {
  for (const child of [...(node.childNodes ?? [])]) {
    if (classNames(child).some((className) => /faq-(?:icon|caret)|accordion-(?:icon|caret)/i.test(className))) {
      removeNode(child);
      continue;
    }
    if (child.nodeName === '#text' && child.value) child.value = child.value.replace(/[▶▸▾]\s*$/u, '');
    stripFaqIcons(child);
  }
};

const expandFaqDetails = (root: HtmlNode) => {
  const detailNodes = descendants(root, (node) => node.tagName === 'details').reverse();
  for (const detail of detailNodes) {
    const summary = detail.childNodes?.find((node) => node.tagName === 'summary');
    if (!summary) continue;

    const classes = classNames(detail);
    const id = getAttribute(detail, 'id');
    const itemType = getAttribute(detail, 'itemtype');
    const label = textContent(summary).replace(/\s+/g, ' ').trim();
    const isQuestion = classes.includes('faq-item') || /\/Question$/i.test(itemType);
    const isFaq = isQuestion
      || classes.some((className) => /faq/i.test(className))
      || /faq/i.test(id)
      || /\bfaqs?\b/i.test(label);
    if (!isFaq) continue;

    detail.nodeName = isQuestion ? 'article' : 'section';
    detail.tagName = isQuestion ? 'article' : 'section';
    removeAttribute(detail, 'open');
    addClass(detail, isQuestion ? 'legacy-faq-item' : 'legacy-faq-block');

    summary.nodeName = isQuestion ? 'h3' : 'h2';
    summary.tagName = isQuestion ? 'h3' : 'h2';
    summary.attrs = [];
    addClass(summary, 'legacy-faq-question');
    stripFaqIcons(summary);
  }
};

const capImages = (root: HtmlNode, limit = 3) => {
  const images = descendants(root, (node) => node.tagName === 'img');
  for (const image of images.slice(limit)) {
    let removable = image;
    let ancestor = image.parentNode;
    while (ancestor && ancestor !== root) {
      if (ancestor.tagName === 'figure' || ancestor.tagName === 'picture') {
        const imageCount = descendants(ancestor, (node) => node.tagName === 'img').length;
        if (imageCount === 1) removable = ancestor;
        break;
      }
      ancestor = ancestor.parentNode;
    }
    removeNode(removable);
  }
};

const keepRedditEvidenceOnPage = (root: HtmlNode) => {
  const nodes = descendants(root, () => true).reverse();
  for (const node of nodes) {
    const href = getAttribute(node, 'href');
    const src = getAttribute(node, 'src');
    const classes = classNames(node);

    if (node.tagName === 'a' && /reddit(?:media)?\.com/i.test(href)) {
      node.nodeName = 'span';
      node.tagName = 'span';
      node.attrs = [];
      addClass(node, 'legacy-reddit-reference');
    }

    if (node.tagName === 'blockquote' && classes.some((className) => /reddit/i.test(className))) {
      node.nodeName = 'aside';
      node.tagName = 'aside';
      addClass(node, 'legacy-community-evidence');
    }

    if (node.tagName === 'iframe' && /reddit(?:media)?\.com/i.test(src)) removeNode(node);
    if (node.tagName === 'script' && /reddit/i.test(src)) removeNode(node);
  }
};

export const isMigratedLegacyPath = (path: string) => migratedLegacyPaths.has(path);

export const migrateLegacyHtml = (html: string) => {
  const fragment = parseFragment(html) as HtmlNode;
  expandFaqDetails(fragment);
  capImages(fragment);
  keepRedditEvidenceOnPage(fragment);
  return serialize(fragment as never);
};
