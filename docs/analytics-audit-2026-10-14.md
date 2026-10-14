# GA4 audit — October 14, 2026

## Verified production setup

- Public sitemap audit: all 215 canonical URLs returned HTTP 200, the same single shared GA4 bootstrap in `<head>`, one consent banner and a preferences control. No independent Google loader bypassed consent. The audit reads HTML without executing tags or sending events.
- Signed-in GA4 property: Coffeedant, property 507607548, stream 12254945950, measurement ID `G-270R14ZHVX`. GA4 confirms data collection is active. The existing Google tag `GT-KT5DM5FP` resolves to that same destination.
- Enhanced measurement is already enabled. Tag Assistant verified one Google tag and a Page View plus Scroll hit sent to `G-270R14ZHVX` after accepting analytics. Before acceptance it found no loaded Google tag, as expected with basic consent mode.
- October 13 reports checked around 11:30 Europe/Skopje: GA4 Home showed 11 active users; Search Console Web, custom October 13–13, showed 12 clicks and 874 impressions. These are current processed snapshots, not final or equivalent metrics. GA4's reporting time zone is Los Angeles; Search Console's daily view also uses Pacific Time. Neither time zone was changed.

## Reliability changes

- Initialize analytics/consent immediately after the charset declaration in both shared layouts, before metadata, styles and other scripts.
- Make the bootstrap idempotent across repeated inclusions, and explicitly retain automatic page views. No manual second `page_view` is sent.
- Retry one failed Google-script download after 1.5 seconds. The retry uses the original command queue and never adds a second configuration/page view. Rejection cancels a pending retry. Browser blockers remain effective.
- Synchronize consent changes between open tabs on the same origin, including withdrawal and cleared preferences. Clear cookies scoped to regional hostnames as well as the apex domain.
- Extend the build validator to enforce identical single tags in the head, consent-first script ordering, retry limits, no duplicate configuration and cross-tab consent behavior.
- Add `npm run audit:analytics:live` for a public sitemap coverage check. It defaults to `https://coffeedant.com/`; an optional origin can be passed after `--`.

## Interpreting the counts

Search Console clicks count search-result clicks; GA4 active users count measured active users. Repeat clicks can belong to one user. With the site's established opt-in policy, ignored/rejected consent, browser privacy signals, blocked JavaScript or tag blockers can prevent GA4 collection. Processing can also change yesterday's numbers. No code change can recover historical events that were never collected. This audit does not establish that consent caused every missing visit.

Keep basic consent mode consistent with the site's privacy statement. Do not add an unconditional second tag or cookieless requests just to force the counts to match.

References: [Google tag installation and verification](https://developers.google.com/tag-platform/gtagjs), [basic and advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode), [Search Console discrepancies and time zones](https://support.google.com/webmasters/answer/17010575).
