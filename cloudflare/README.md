# Coffeedant Cloudflare edge redirects

These zone-level settings complement the path redirects in `public/_redirects`.
Cloudflare Pages does not support hostname redirects in that file.

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

