import { communityMediaByTheme } from './review-media-community';
import { productMedia } from './review-media-products';
import type { ReviewInlineMedia, ReviewMediaSeed } from './review-media-types';

export type { ReviewInlineMedia, ReviewMediaSourceType } from './review-media-types';

type CommunityTheme = keyof typeof communityMediaByTheme;

const communityPick = (theme: CommunityTheme, reviewIndex: number, offset = 0): ReviewMediaSeed => {
  const pool = communityMediaByTheme[theme];
  return pool[(reviewIndex * 3 + offset) % pool.length];
};

const buildReviewMedia = (seeds: ReviewMediaSeed[], reviewIndex: number): ReviewInlineMedia[] => {
  const placements = new Map<number, ReviewMediaSeed>();
  const productPositions = seeds.length >= 6 ? [0, 2, 4, 6, 8, 9] : [0, 3, 6, 9];
  seeds.slice(0, productPositions.length).forEach((seed, index) => placements.set(productPositions[index], seed));

  const communitySlots: Array<[number, CommunityTheme, number]> = seeds.length >= 6
    ? [[1, 'station', 0], [3, 'preparation', 1], [5, 'grinder', 2], [7, 'milk', 3]]
    : [[1, 'station', 0], [2, 'grinder', 1], [4, 'milk', 2], [5, 'preparation', 3], [7, 'station', 4], [8, 'preparation', 5]];

  communitySlots.forEach(([position, theme, offset]) => {
    placements.set(position, communityPick(theme, reviewIndex, offset));
  });

  return [...placements.entries()]
    .sort(([a], [b]) => a - b)
    .map(([afterSection, media]) => ({ ...media, afterSection }));
};

export const reviewInlineMedia: Record<string, ReviewInlineMedia[]> = Object.fromEntries(
  Object.entries(productMedia).map(([slug, seeds], reviewIndex) => [slug, buildReviewMedia(seeds, reviewIndex)]),
);
