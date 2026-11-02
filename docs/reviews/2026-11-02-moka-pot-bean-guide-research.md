# Moka-pot bean guide — 2026-11-02

## Scope and decision

US whole-bean, six-cup moka-pot starting choices by intended cup style. Exact existing Coffeedant reviews: Blue Bottle Hayes Valley Espresso and Peet's Major Dickason's. This is distinct from the site's dark-roast guide (roast and retail use), espresso-and-drip guide (two methods), and AeroPress guide (immersion and press). The source tree at main cc92f73236c044cf149a5f2c85412ec978e2c69a had no moka-pot guide route; the four commits after local ba808fc affect localization and bean validation, not new English routes.

## Source checks, November 2, 2026, Europe/Skopje

1. [Blue Bottle moka-pot guide](https://bluebottlecoffee.com/us/eng/brew-guides/moka-pot) — general six-cup method: 20–22 g coffee; roughly 345 g water to safety valve; fine but coarser than espresso; no tamp; medium heat; remove at hissing/gurgling. It is **not** a Hayes Valley-specific recipe or a Coffeedant test.
2. [Blue Bottle Hayes Valley Espresso](https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso) — US dark roast, washed; roaster notes baking chocolate, orange zest and brown sugar. The product's espresso emphasis supports a flavor brief, not measured moka-pot performance. Site product content was also visible through the roaster's indexed product result because the clean URL did not return readable lines in the research browser.
3. [Peet's Major Dickason's](https://www.peets.com/products/major-dickasons) — US whole-bean dark roast; product page shows earth/spice profile and a Latin American plus Indo-Pacific blend. Its specific brew recommendations on the page are French press and pour-over, **not** moka pot.
4. [Peet's light- versus dark-roast guide](https://www.peets.com/blogs/peets/light-roast-vs-dark-roast-coffee) — Peet's says moka pot is among methods for dark roasts generally. Applying that to Major Dickason's is an explicitly marked editorial inference.

No price or discount is used. No independent head-to-head sensory evaluation, specific owner report, delivered bag, or freshness measurement was established for the pair. The guide limits itself to research-led first-bag fit and exposes that uncertainty. The existing full reviews provide product-level context, with images and credits reused from their canonical data records.

## Publication checks

Target: `https://coffeedant.com/coffee-beans/best-coffee-beans-for-moka-pot/`. Queue slot: `2026-11-02-best-moka-pot-coffee-beans`. Add guide and bean hub link, then run local build, SEO, bean, finder, review, migration, static banner and regional gates. Check desktop/mobile rendering, required PR CI, Cloudflare deployment, public canonical and sitemap before marking Published.

