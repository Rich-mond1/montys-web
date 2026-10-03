# Monty's website — where to change what

Static site (HTML/CSS/JS). No Webflow, no build step. Upload the whole `site` folder to any static host.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Privacy policy | `utility-pages/privacy-policy/index.html` |
| Terms & conditions | `utility-pages/terms-conditions/index.html` |

## External links (search and replace the URL in all three pages)

| What | URL | Where it appears |
|---|---|---|
| Click & Collect (Square Online) | `https://421737966777399074.square.site/` | Header button, sandwich section. **The Square site is not published yet.** |
| Delivery (Deliveroo) | `https://deliveroo.co.uk/menu/london/bankside/montys-southwark-street` | Hero button |
| Catering (Slerp) | `https://montys.slerp.com/order/browse` | Header, hero, gallery, catering section, footer, mobile menu |
| Allergen chart | `https://mopsmanual.github.io/Montys-allergen/` | Header menu "Allergens", footer |
| Instagram | `https://www.instagram.com/montysldn` | Footer |
| Email | `mailto:info@montyslondon.com` | Everywhere an email is shown |

## Common edits

| Change | Where |
|---|---|
| Text, headings, buttons | `index.html` (search for the text) |
| Photos | Convert to WebP first (see *Images* below), put it in `assets/`, then change the `src` (and `srcset`) of the `<img>` |
| Menu cards (What's on the Menu) | `index.html`, inside the tab panes `data-w-tab="Tab 3"` (bowls), `"Tab 2"` (sandwiches), `"Tab 4"` (boxes). Order = order in the file |
| Nutrition calculator | `nutrition/` folder, see `nutrition/README.md` |
| Opening hours, address | Footer of `index.html` + terms page |
| Custom styles (type system, Why Monty's grid, sandwich section, review cards) | `<style id="montys-custom">` in the `<head>` of `index.html` |
| Cookie banner / Google Analytics ID | `js/montys-consent.js` (`GA_ID`) |
| Catering request form | Script "Catering request form" at the end of `index.html`. It opens the visitor's email app pre-filled to info@. Replace with a form service (e.g. Formspree) when hosting is final |

## Type system

- **Display headings:** Poplar (`assets/…Poplar_Regular.otf`)
- **All body copy:** Source Sans 3 (Google Fonts), 17px desktop / 16px mobile, line-height 1.5
- Brand red `#E63D29`, ink `#2A1F1D`, cream `#F3EFE2`

## Before going live

1. Publish the Square Online site (or set its custom domain) and update the Click & Collect URL if it changes.
2. Connect the catering form to a form service if you want submissions without the email app.
3. Point the domain DNS to the new host; keep Webflow until the new site is confirmed live.
4. Submit `sitemap.xml` in Google Search Console and claim/verify the Google Business Profile.

## Images and video

- All page images are **WebP** (about 3x smaller than JPG/PNG). Keep `montys-group.jpg` as JPG: it is the image used when the site is shared on WhatsApp/social.
- To add a photo: max 1600px wide, WebP quality 80. Free options: squoosh.app (drag and drop) or, in a terminal, `cwebp -q 80 photo.jpg -o photo.webp`.
- No video on the site now (the old hero video was hidden template stock footage that still downloaded 4 MB). If you add one: MP4 H.264, 1280px wide, no audio, under 2 MB (`ffmpeg -i in.mov -vf scale=1280:-2 -an -c:v libx264 -crf 28 -preset slow -movflags +faststart out.mp4`).

## SEO files

- `robots.txt` and `sitemap.xml` at the site root. Update `lastmod` in the sitemap when you change a page.
- Structured data (Google rich results): `<script type="application/ld+json" id="montys-ld">` in the head of `index.html`. Contains address, hours, map pin, order links, company details and the menu with calories. If hours, address or dishes change, update it there too.

## Allergen chart on your own domain

The chart lives in the GitHub repo `Rich-mond1/montys-allergens` and the admin editor publishes to it with the GitHub token. Once this site is hosted on GitHub Pages in the same account with the custom domain `www.montyslondon.com`, the chart is automatically served at `https://www.montyslondon.com/montys-allergens/`; the token workflow does not change. Then replace the `mopsmanual.github.io/Montys-allergen/` link (header menu + footer) with `/montys-allergens/`.
