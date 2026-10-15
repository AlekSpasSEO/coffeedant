import { analyticsConsentResponse } from '../../src/lib/analytics-consent-policy.mjs';

export function onRequest({ request }) {
  return analyticsConsentResponse(request);
}
