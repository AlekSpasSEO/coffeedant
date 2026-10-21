import {buildSeo} from '../build-seo.mjs';
import {collectSource} from './source.mjs';

// Freeze/index the same canonical source that direct authoring validates.
// Generated social descriptions and schema captions must exist before the
// translation/ready-page gates, not be created in English after translation.
export async function buildRegionalSource(directory) {
  await buildSeo(directory);
  return collectSource(directory);
}
