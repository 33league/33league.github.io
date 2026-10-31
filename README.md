# 33 League Global Solutions

Official website of 33 League Global Solutions. Growth, design and technology solutions for global brands.

Live at **https://33league.github.io**

## Pages

| File | Page |
|---|---|
| `index.html` | Home, with the scroll-driven 3D Earth |
| `work.html` | Portfolio grid with filters, results and client quotes |
| `case-studies/*.html` | One page per client: challenge, what we did, results, gallery |
| `about.html` | Story, co-founders, partners, honorary advisors |
| `contact.html` | Contact form, WhatsApp, booking, email |
| `404.html` | Page not found |

## Quick edits

**Contact details, links and form key:** edit `assets/js/config.js` only. Every page reads from it.

**Contact form:** get a free key at https://web3forms.com (enter the business email, the key arrives by email) and paste it into `web3formsKey` in `config.js`. Until then, the form opens WhatsApp with the enquiry filled in.

**Team photos:** add square images to `assets/img/team/` (e.g. `tina.webp`), then in `about.html` replace the letter inside `<div class="avatar">` with
`<img src="assets/img/team/tina.webp" alt="Keren Sarah Christina" width="240" height="240">`

**Client logos:** add files to `assets/img/logos/` and replace each `<span class="logo-slot">Logo</span>` in `index.html` with an `<img>`.

**Portfolio and case studies:** `work.html`, every page in `case-studies/` and `sitemap.xml` are generated. Do not edit them by hand.
1. Edit the text in `_build/cases.js`. Each case's `cats` can be `growth`, `tech` or `brand`.
2. Put images in `assets/img/work/<slug>/` (`01.jpg` is the cover, plus `cover-sm.jpg` at 900px wide) and list them in `_build/images.json`.
3. Run `node _build/build.js`, then `node _build/check.js` to confirm no broken links.
4. Preview with `node _build/serve.js` and open http://127.0.0.1:4433.

The `_build` folder is not published by GitHub Pages.

**Homepage results:** the stats, three Selected Work cards and testimonials in `index.html` are edited by hand. Use only real figures that match the case studies, and only client-approved quotes. No promised results.

## Before going public

- Real email, WhatsApp, booking link and socials in `config.js`
- Advisors listed only with their written consent
- All `[placeholders]` replaced
- Site submitted to Google Search Console with `sitemap.xml`

## Built with

Plain HTML, CSS and JavaScript. The 3D scene uses three.js (MIT). Earth and Moon textures come from the three.js examples (MIT). No build step, no paid services.

© 33 League Global Solutions. All rights reserved.
