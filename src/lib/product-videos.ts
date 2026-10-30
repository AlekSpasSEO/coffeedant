import catalog from '../data/product-videos.json';
import { videoWatchPath } from './video-routes.mjs';
import { productVideoSchema } from './product-video-schema.mjs';

export type ProductVideo = {
  id: string; title: string; creator: string; channelUrl: string;
  published: string; duration: string; summary: string;
  sourceType: 'reviewer' | 'retailer'; verifiedAt: string;
  disclosure?: string;
};
export const productVideoCatalog = catalog as Record<string, ProductVideo[]>;
export const getProductVideos = (slug: string): ProductVideo[] => productVideoCatalog[slug] ?? [];
export const getVideoWatchPath = (slug: string, video: ProductVideo): string => videoWatchPath(slug, video, getProductVideos(slug));
export const videoSchema = (video: ProductVideo, product: { slug: string; name: string }, page: string) =>
  productVideoSchema(video, product, page, getVideoWatchPath(product.slug, video));
