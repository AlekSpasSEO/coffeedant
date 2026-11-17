// JSON-LD entities may be nested inside properties and arrays, not just @graph.
export const schemaNodesOfType = (value, type) => {
  if (Array.isArray(value)) return value.flatMap(item => schemaNodesOfType(item, type));
  if (!value || typeof value !== 'object') return [];
  const matching = [value['@type']].flat().includes(type) ? [value] : [];
  return [...matching, ...Object.values(value).flatMap(item => schemaNodesOfType(item, type))];
};
// A research article without stars or an offer can identify a model as its
// subject without opting into Google Product rich-result markup.
export const reviewSubject = (graph) => {
  const product = graph.find((node) => [node['@type']].flat().includes('Product'));
  if (product) return product;
  const about = graph.find((node) => node['@type'] === 'Article')?.about?.['@id'];
  return about && graph.find((node) => node['@type'] === 'Thing' && node['@id'] === about);
};
