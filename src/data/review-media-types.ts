export type ReviewMediaSourceType = 'community' | 'reddit' | 'product-listing' | 'manufacturer';

export type ReviewMediaSeed = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceHref: string;
  sourceType: ReviewMediaSourceType;
  usageLabel: string;
  usageHref: string;
  width: number;
  height: number;
  userGenerated: boolean;
  disclosure?: string;
};

export type ReviewInlineMedia = ReviewMediaSeed & {
  afterSection: number;
};
