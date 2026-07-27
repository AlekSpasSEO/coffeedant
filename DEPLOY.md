# Deploying Coffeedant to GitHub + Vercel

## 1. Add the images
Copy the WordPress `wp-content/uploads/` folder into
`public/wp-content/uploads/` (see README). The site builds without them, but
images will 404 until this is done.

## 2. Push to GitHub
This folder is **already a git repository with the first commit made** (branch
`main`). You only need to point it at your GitHub repo and push:

    git remote add origin https://github.com/<your-username>/<repo>.git
    git push -u origin main

If you'd rather start fresh, delete the `.git` folder and run
`git init && git add . && git commit -m "initial"` yourself.
(`node_modules/` and `dist/` are gitignored.)

## 3. Import into Vercel
1. Vercel dashboard -> Add New -> Project -> import the GitHub repo.
2. Framework preset: **Astro** (auto-detected).
   - Build command: `astro build`   Output directory: `dist`
3. Deploy. You get a `*.vercel.app` URL to verify.

## 4. Custom domain
1. Vercel project -> Settings -> Domains -> add your domain.
2. Point DNS at Vercel:
   - Apex/root domain: A record -> `76.76.21.21`
   - `www` subdomain: CNAME -> `cname.vercel-dns.com`
   (Or use Vercel nameservers if you prefer Vercel to manage DNS.)
3. Vercel issues the SSL certificate automatically once DNS resolves.

## Notes
- `site` in `astro.config.mjs` and all canonicals are set to
  `https://coffeedant.com`. If the production domain differs, change `site`
  there, update `public/sitemap.xml` + `public/robots.txt`, and rebuild.
- Legacy URL redirects live in `vercel.json` (27 rules from the old
  Redirection plugin) and apply automatically on Vercel.
