# Deploying Coffeedant through GitHub to Cloudflare Pages

Production uses the `main` branch of `AlekSpasSEO/coffeedant`, connected to Cloudflare Pages. Push authorized, verified changes directly to `main`; Cloudflare builds and publishes that commit automatically.

## Verify locally

Use Node 20 and the existing lockfile:

```powershell
npm ci
$env:CF_PAGES = '1'
npm run build
npm run test:seo
npm run validate:seo
npm run validate:videos
git diff --check
```

`CF_PAGES=1` selects `https://coffeedant.com` at `/`. A build without it preserves the separate GitHub Pages preview at `/coffeedant`.

## Publish

Commit only the intended source changes, fetch the latest `main`, and preserve any newer commits before pushing:

```text
git fetch origin main
git push origin HEAD:main
```

Do not force-push. Verify the Cloudflare deployment for that exact commit and check the affected production URLs after publication. The existing GitHub Pages workflow is an additional preview/check pipeline; the production Cloudflare Git integration publishes from `main`.

Cloudflare project settings: production branch `main`, framework Astro, build command `npm run build`, output directory `dist`, repository root, and Node 20 from `.node-version`. See `cloudflare/README.md` for DNS and redirect settings.

## Videos and crawl resources

Product cards open a popup at `/{category}/{model}/video/{creator}/`. The same URL directly serves a complete static watch page. The build automatically generates `video-sitemap.xml` and lists it in `sitemap_index.xml` and `robots.txt`; no manual sitemap publication is needed.

## Amazon API pause

The October 17, 2026 pause remains in effect. Builds and local validators use existing data only. Do not run Amazon API refresh commands, dispatch or enable their workflows, read API credentials, or request Amazon tokens. Existing affiliate check-price links remain usable.
