export const creatorSlug = video => video.creator.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/ß/g, 'ss').replace(/&/g, ' and ').replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  || `channel-${video.channelUrl.split('/').filter(Boolean).at(-1).toLowerCase()}`;

// Multiple selections from one creator need distinct, deterministic watch URLs.
export const videoWatchPath = (productSlug, video, siblings = []) => {
  const creator = creatorSlug(video);
  const collision = siblings.some(other => other.id !== video.id && creatorSlug(other) === creator);
  const identifier = [...video.id].map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
  return `${productSlug.replace(/\/?$/, '/')}video/${creator}${collision ? `-${identifier}` : ''}/`;
};
