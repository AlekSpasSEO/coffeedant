# Coffeedant Cloudflare edge redirects

These zone-level settings complement the path redirects in `public/_redirects`.
Cloudflare Pages does not support hostname redirects in that file.

## Cloudflare Pages project

Connect the `AlekSpasSEO/coffeedant` GitHub repository in **Workers & Pages** and
use these production settings:

- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank
- Node version: read automatically from `.node-version` (`20`)

Cloudflare Pages injects `CF_PAGES=1` during its build. `astro.config.mjs` uses
that value to build the site at `/` with `https://coffeedant.com` as its site
origin. Builds without `CF_PAGES=1` retain the GitHub Pages `/coffeedant` base
path, so the existing staging deployment remains usable.

Verify the generated `*.pages.dev` deployment before adding the production
custom domain or changing authoritative nameservers.

## Force HTTPS

In **SSL/TLS -> Edge Certificates**, enable **Always Use HTTPS** after the
Cloudflare edge certificate for `coffeedant.com` is active. Keep the SSL/TLS
encryption mode enabled; use **Full (strict)** when an origin connection is
involved.

## Redirect `www` to the apex domain

1. In **Bulk Redirects**, create a list and import `www-to-apex.csv`.
2. Create and enable a Bulk Redirect Rule using that list.
3. Create a proxied DNS record for `www`:
   - Type: `A`
   - IPv4 address: `192.0.2.1`
   - Proxy status: `Proxied`

The import rule matches both HTTP and HTTPS requests, returns `301`, and
preserves the original path and query string.

## Post-cutover verification

Each request below must return one `301` with the shown final location:

```text
http://coffeedant.com/espresso-machine/beginners/?source=test
  -> https://coffeedant.com/espresso-machine/beginners/?source=test

http://www.coffeedant.com/espresso-machine/beginners/?source=test
  -> https://coffeedant.com/espresso-machine/beginners/?source=test

https://www.coffeedant.com/espresso-machine/beginners/?source=test
  -> https://coffeedant.com/espresso-machine/beginners/?source=test
```

The canonical URL must return `200` without another redirect.
