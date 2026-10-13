import migration from '../data/journal-route-migration.json';

export const journalRedirects: Record<string, string> = {...migration.blogs, ...migration.guides, ...migration.hubs};
export const journalPath = (path: string) => journalRedirects[path] ?? path;
export const storyPath = (id: string) => `/journal/${id}/`;
