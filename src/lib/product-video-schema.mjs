export const productVideoSchema = (video, product, page, watchPath) => ({
  '@type': 'VideoObject', '@id': `${page}#video-${video.id}`,
  name: video.title, description: video.summary,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  uploadDate: video.published, duration: video.duration,
  url: `https://www.youtube.com/watch?v=${video.id}`,
  mainEntityOfPage: `https://coffeedant.com${watchPath}`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
  creator: { '@type': 'Organization', name: video.creator, url: video.channelUrl },
  publisher: { '@type': 'Organization', name: video.creator, url: video.channelUrl },
  // The complete Product belongs to its review page. A topic reference must
  // not declare an incomplete Product on the library or standalone watch page.
  about: [{ '@id': `https://coffeedant.com${product.slug}#product` }],
  isPartOf: { '@id': `${page}#${page.endsWith('/videos/') ? 'collection' : 'article'}` },
});
