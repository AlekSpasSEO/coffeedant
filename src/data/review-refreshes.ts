import type { MachineReviewData } from './reviews';
import refreshes from './review-refreshes.json';

// Dated, sourced corrections to existing reviews. Keep original evidence intact.
export const applyReviewRefresh = (review: MachineReviewData): MachineReviewData => {
  const refresh = refreshes.find((item) => item.slug === review.slug);
  if (!refresh) return review;
  if (review.productId !== refresh.productId) throw new Error(`Refresh identity mismatch: ${review.slug}`);
  const section = review.article.sections.find((item) => item.id === refresh.sectionId)
    ?? review.article.sections.find((item) => /ownership|maintenance|care|cleaning|repair/i.test(item.title));
  if (!section) throw new Error(`Refresh care section missing: ${review.slug}`);
  const sections = review.article.sections.map((item) => item === section
    ? { ...item, html: item.html.replace(/<p>[\s\S]*?<\/p>/, refresh.html) }
    : item);
  return {
    ...review, updated: '2026-10-13',
    article: { ...review.article, sections, sources: [...review.article.sources, {
      id: 'refresh-20261013', label: `October 13 ownership clarification: ${review.brand} ${review.model}`,
      href: refresh.source, note: `${refresh.note} Checked October 13, 2026; no new physical testing or measured score.`,
    }] },
  };
};
