// Log only the API's structured error classification, never tokens or payloads.
export function amazonApiError(operation, status, payload = {}) {
  const code = [payload.type, payload.reason, ...(payload.errors ?? []).map(error => error.code)]
    .filter(value => typeof value === 'string' && /^[A-Za-z0-9_.-]{1,100}$/.test(value)).join(', ');
  const eligibility = payload.reason === 'AssociateNotEligible'
    || (status === 403 && /eligibility requirements/i.test(payload.message ?? ''));
  return `Amazon ${operation} failed: HTTP ${status}${code ? `; ${code}` : ''}.${eligibility ? ' Amazon Associates API eligibility must be restored; replacing credentials or retrying cannot resolve eligibility. The deals page uses its editorial catalog fallback.' : ''}`;
}
