import catalog from '../data/product-videos.json';
import { videoWatchPath } from './video-routes.mjs';

export type ProductVideo = {
  id: string; title: string; creator: string; channelUrl: string;
  published: string; duration: string; summary: string;
  sourceType: 'reviewer' | 'retailer'; verifiedAt: string;
  disclosure?: string;
};
export const productVideoCatalog = catalog as Record<string, ProductVideo[]>;
export const getProductVideos = (slug: string): ProductVideo[] => productVideoCatalog[slug] ?? [];
export const getVideoWatchPath = (slug: string, video: ProductVideo): string => videoWatchPath(slug, video, getProductVideos(slug));
export const videoSchema = (video: ProductVideo, product: { slug: string; name: string }, page: string) => ({
  '@type': 'VideoObject', '@id': `${page}#video-${video.id}`,
  name: video.title, description: video.summary,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  uploadDate: video.published, duration: video.duration,
  url: `https://www.youtube.com/watch?v=${video.id}`,
  mainEntityOfPage: `https://coffeedant.com${getVideoWatchPath(product.slug, video)}`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
  creator: { '@type': 'Organization', name: video.creator, url: video.channelUrl },
  publisher: { '@type': 'Organization', name: video.creator, url: video.channelUrl },
  about: [{ '@type': 'Product', '@id': `https://coffeedant.com${product.slug}#product`, name: product.name, url: `https://coffeedant.com${product.slug}` }],
  isPartOf: { '@id': `${page}#${page.endsWith('/videos/') ? 'collection' : 'article'}` },
});
