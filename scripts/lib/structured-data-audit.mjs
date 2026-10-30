// JSON-LD entities may be nested inside properties and arrays, not just @graph.
export const schemaNodesOfType = (value, type) => {
  if (Array.isArray(value)) return value.flatMap(item => schemaNodesOfType(item, type));
  if (!value || typeof value !== 'object') return [];
  const matching = [value['@type']].flat().includes(type) ? [value] : [];
  return [...matching, ...Object.values(value).flatMap(item => schemaNodesOfType(item, type))];
};
