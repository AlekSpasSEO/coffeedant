import type { MachineReviewData } from './reviews';
import refreshes from './review-refreshes.json';
import october14Refreshes from './review-refreshes-2026-10-14.json';
import october15Refreshes from './review-refreshes-2026-10-15.json';

// Dated, sourced corrections to existing reviews. Keep original evidence intact.
export const applyReviewRefresh = (review: MachineReviewData): MachineReviewData => {
  const refresh = refreshes.find((item) => item.slug === review.slug);
  const current = october14Refreshes.find((item) => item.slug === review.slug);
  const october15 = october15Refreshes.find((item) => item.slug === review.slug);
  if (!refresh && !current && !october15) return review;
  if (!refresh && !current && october15) return applyOctober15Refresh(review, october15);
  if (!refresh && current) return october15
    ? applyOctober15Refresh(applyOctober14Refresh(review, current), october15)
    : applyOctober14Refresh(review, current);
  if (!refresh) return review;
  if (review.productId !== refresh.productId) throw new Error(`Refresh identity mismatch: ${review.slug}`);
  const section = review.article.sections.find((item) => item.id === refresh.sectionId)
    ?? review.article.sections.find((item) => /ownership|maintenance|care|cleaning|repair/i.test(item.title));
  if (!section) throw new Error(`Refresh care section missing: ${review.slug}`);
  const sections = review.article.sections.map((item) => item === section
    ? { ...item, html: item.html.replace(/<p>[\s\S]*?<\/p>/, refresh.html) }
    : item);
  const previous = {
    ...review, updated: review.updated > '2026-10-13' ? review.updated : '2026-10-13',
    article: { ...review.article, sections, sources: [...review.article.sources, {
      id: 'refresh-20261013', label: `October 13 ownership clarification: ${review.brand} ${review.model}`,
      href: refresh.source, note: `${refresh.note} Checked October 13, 2026; no new physical testing or measured score.`,
    }] },
  };
  const throughOctober14 = current ? applyOctober14Refresh(previous, current) : previous;
  return october15 ? applyOctober15Refresh(throughOctober14, october15) : throughOctober14;
};

type October14Refresh = (typeof october14Refreshes)[number];

const applyOctober14Refresh = (review: MachineReviewData, refresh: October14Refresh): MachineReviewData => {
  if (review.productId !== refresh.productId) throw new Error(`October 14 refresh identity mismatch: ${review.slug}`);
  const section = review.article.sections.find((item) => item.id === refresh.sectionId);
  if (!section) throw new Error(`October 14 refresh section missing: ${review.slug}#${refresh.sectionId}`);
  return {
    ...review,
    updated: review.updated > '2026-10-14' ? review.updated : '2026-10-14',
    article: {
      ...review.article,
      sections: review.article.sections.map((item) => item === section
        ? { ...item, html: `${refresh.html}${item.html}` }
        : item),
      sources: [...review.article.sources, {
        id: 'refresh-20261014',
        label: `October 14 model-specific clarification: ${review.brand} ${review.model}`,
        href: refresh.source,
        note: `${refresh.note} Checked October 14, 2026; research-led, without new physical testing or score changes.`,
      }],
    },
  };
};

type October15Refresh = (typeof october15Refreshes)[number];

const applyOctober15Refresh = (review: MachineReviewData, refresh: October15Refresh): MachineReviewData => {
  if (review.productId !== refresh.productId) throw new Error(`October 15 refresh identity mismatch: ${review.slug}`);
  const section = review.article.sections.find((item) => item.id === refresh.sectionId);
  if (!section) throw new Error(`October 15 refresh section missing: ${review.slug}#${refresh.sectionId}`);
  return {
    ...review,
    updated: review.updated > '2026-10-15' ? review.updated : '2026-10-15',
    article: {
      ...review.article,
      sections: review.article.sections.map((item) => item === section
        ? { ...item, html: `${refresh.html}${item.html}` }
        : item),
      sources: [...review.article.sources, {
        id: 'refresh-20261015',
        label: `October 15 model-specific clarification: ${review.brand} ${review.model}`,
        href: refresh.source,
        note: `${refresh.note} Checked October 15, 2026; research-led, without new physical testing or score changes.`,
      }],
    },
  };
};
