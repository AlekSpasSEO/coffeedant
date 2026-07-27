# Coffeedant — Astro rebuild

Static rebuild of the Coffeedant WordPress site (espresso machine reviews,
grinder and coffee-machine reviews, brand hubs, and blog) as an
[Astro](https://astro.build) static site, ready to host on Vercel.

Migrated from `wp_coffeedant.sql`: 180 published pages/posts, Yoast SEO
titles/descriptions/canonicals, and 27 legacy 301 redirects.

## Structure

    src/
      data/pages.json        All migrated pages (path, title, SEO, cleaned HTML)
      layouts/Base.astro     HTML shell: <head> SEO, fonts, header, footer
      components/             Header (nav) + Footer
      pages/
        index.astro          Home page
        [...slug].astro      Every migrated page, routed by original URL
        404.astro
      styles/global.css      Theme layer (fonts, palette, WordPress block CSS)
    public/
      wp-content/uploads/     >>> DROP THE SITE'S IMAGE FOLDER HERE <<<
      sitemap.xml, robots.txt
    vercel.json               301 redirects + trailing-slash config
    scripts/generate.py       The SQL -> pages.json migration script

## Local development

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs static site to dist/

## Images (required before go-live)

Page HTML references images at `/wp-content/uploads/...`. Copy the entire
`wp-content/uploads/` folder from the current WordPress host (via SFTP or the
host's file manager) into `public/wp-content/uploads/`, preserving the
year/month subfolders. ~164 images are referenced.

## Deployment

See DEPLOY.md.
