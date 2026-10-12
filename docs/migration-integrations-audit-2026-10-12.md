# Coffeedant migration integration audit — 2026-10-12

## Restorations in this change

- **GA4:** Restore the existing property `G-270R14ZHVX` through Google tag `GT-KT5DM5FP`. Both identifiers were recovered from the saved pre-migration WordPress page's Site Kit configuration. `G-EQDN3BWDSD` is Site Kit telemetry and must not be used as the site property.
- **Consent:** Add basic consent mode with equally prominent accept/reject controls, a footer preferences button, remembered choices with a 180-day expiry, analytics-cookie removal after withdrawal, and browser GPC/Do Not Track handling. Google requests start only after acceptance. Advertising storage, advertising user data and personalization remain denied. Localhost, GitHub Pages and Cloudflare preview hosts never initialize analytics. This follows the [Google consent-mode implementation guide](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic) and the site's existing privacy statement about opt-in cookies and browser opt-out signals.
- **Contact:** The migrated contact content was only `[forminator_form id="544"]`; WordPress could no longer execute it. Provide a working email link using the existing public privacy/terms contact, `ace@growthradical.com`. This restores a contact method, not the old form-processing backend.
- **Supporting-page links:** Restore clickable privacy/terms email links and remove the staging `/coffeedant/` prefix from the two coffee-machine hub links and the terms homepage link.
- **Favicon:** Include the existing Coffeedant logo in the legacy layout as well as the modern layout.

## Verification

- Production build: 195 HTML pages (194 published URLs plus 404).
- Exactly one GA4 bootstrap, consent control and preferences button on each HTML page.
- Consent behavior tested for initial visit, acceptance, rejection, withdrawal, saved/expired choices, blocked storage, browser opt-out and preview exclusion.
- Sitemap: 194 URLs, no duplicates and no URLs pointing to missing built pages.
- Internal links and local image/script/stylesheet/icon references: no missing targets after repairs. External images and third-party links were not exhaustively requested.
- Redirects: all 26 enabled rules from the October 11 WordPress export remain present; the disabled reverse Appartamento rule is intentionally omitted. Redirect chains are flattened.
- Every page has a canonical; every published page has a description. The 404 deliberately has no description.
- Review/product/article/breadcrumb/organization/person/FAQ/video structured data remains present in the build.
- Existing review and legacy-migration validations pass; 447 affiliate banners across 149 review pages pass their validator.
- Cloudflare DNS: the `coffeedant.com` zone is active; Google ownership-verification TXT and the `www` record remain present. DNS verification presence does not establish Search Console account access or indexing status.

## Remaining findings (not changed by this restoration)

1. **Coffee Finder refresh deployment:** `.github/workflows/refresh-coffee-finder.yml` still commits with `[skip ci]`. Cloudflare skips that commit, so a refreshed catalog reaches production only with a later non-skipped commit (such as the six-hour Amazon-offer refresh). The Amazon-offer workflow itself was already repaired in PR #100.
2. **Recommendation-banner refresh:** `update:amazon-recommendations` exists, but no scheduled workflow runs it. The six-hour refresh updates `amazon-offers.json`, not `amazon-recommendations.json`; the banner picks remain a dated snapshot until explicitly refreshed.
3. **Dependency maintenance:** `npm ci` reports 16 dependency advisories (3 moderate, 12 high, 1 critical). No package versions were changed in this task. The audit count alone does not establish exploitability on the deployed static site.
4. **Historical WordPress features:** Comments and the Forminator submission backend are not provided by the static site. The existing policy still refers to comments where enabled. No new third-party form or comment service was connected.
5. **Domain email:** No MX record is configured for `coffeedant.com`. The site's existing contact address is on `growthradical.com`; this is relevant only if `@coffeedant.com` inboxes are intended.

The saved original page had no independent Google/Bing verification meta tag and listed Search Console, Analytics and PageSpeed as active Site Kit modules. WordPress-only admin/Site Kit JavaScript, its telemetry identifier and unconnected advertising modules were not transplanted into the static site.
