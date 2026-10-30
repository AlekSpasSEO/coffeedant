import test from 'node:test';
import assert from 'node:assert/strict';
import { productVideoSchema } from '../../src/lib/product-video-schema.mjs';
import { schemaNodesOfType } from '../lib/structured-data-audit.mjs';

const product = { slug: '/espresso-machine/example/', name: 'Example espresso machine' };
const canonical = `https://coffeedant.com${product.slug}`;
const watchPath = `${product.slug}video/independent-reviewer/`;
const video = {
  id: 'abcDEFgh123', title: 'Independent review', summary: 'A documented third-party perspective.',
  published: '2026-10-16T09:00:00Z', duration: 'PT120S', creator: 'Independent Reviewer',
  channelUrl: 'https://www.youtube.com/channel/UC123',
};

test('video watch and library schemas reference a product without declaring an ineligible Product', () => {
  for (const page of [`https://coffeedant.com${watchPath}`, 'https://coffeedant.com/videos/']) {
    const schema = productVideoSchema(video, product, page, watchPath);
    assert.equal(schemaNodesOfType({ '@graph': [schema] }, 'Product').length, 0);
    assert.deepEqual(schema.about, [{ '@id': `${canonical}#product` }]);
    assert.equal(schema.mainEntityOfPage, `https://coffeedant.com${watchPath}`);
    assert.equal(schema.embedUrl, `https://www.youtube-nocookie.com/embed/${video.id}`);
    assert.equal(schema.creator.url, video.channelUrl);
    assert.equal(schema.uploadDate, video.published);
    assert.equal(schema.duration, video.duration);
  }
});

test('a video embedded on the review retains its connection to the complete rated Product', () => {
  const reviewedProduct = {
    '@type': 'Product', '@id': `${canonical}#product`, name: product.name,
    review: { '@type': 'Review', author: { '@type': 'Person', name: 'Editor' },
      reviewRating: { '@type': 'Rating', ratingValue: 4.3, bestRating: 5 } },
  };
  const schema = { '@graph': [reviewedProduct, productVideoSchema(video, product, canonical, watchPath)] };
  const products = schemaNodesOfType(schema, 'Product');
  assert.deepEqual(products, [reviewedProduct]);
  assert.equal(products[0].review.reviewRating.ratingValue, 4.3);
  assert.equal(schema['@graph'][1].about[0]['@id'], products[0]['@id']);
});

test('recursive schema audit catches the former invalid Product inside nested video topic arrays', () => {
  const incomplete = { '@type': ['Thing', 'Product'], '@id': `${canonical}#product`, name: product.name };
  const graph = { '@graph': [{ '@type': 'CollectionPage', mainEntity: [
    { '@type': 'VideoObject', about: [incomplete] },
  ] }] };
  assert.deepEqual(schemaNodesOfType(graph, 'Product'), [incomplete]);
  assert.equal(schemaNodesOfType({ about: [{ '@id': `${canonical}#product` }] }, 'Product').length, 0);
});
