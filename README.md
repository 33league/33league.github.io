# 33 League Global Solutions

Official website of 33 League Global Solutions. Growth, design and technology solutions for global brands.

Live at **https://33league.github.io**

## Pages

| File | Page |
|---|---|
| `index.html` | Home, with the scroll-driven 3D Earth |
| `work.html` | Portfolio grid with filters |
| `case-study.html` | Case study template (hidden from Google until filled) |
| `about.html` | Story, co-founders, partners, honorary advisors |
| `contact.html` | Contact form, WhatsApp, booking, email |
| `404.html` | Page not found |

## Quick edits

**Contact details, links and form key:** edit `assets/js/config.js` only. Every page reads from it.

**Contact form:** get a free key at https://web3forms.com (enter the business email, the key arrives by email) and paste it into `web3formsKey` in `config.js`. Until then, the form opens WhatsApp with the enquiry filled in.

**Team photos:** add square images to `assets/img/team/` (e.g. `tina.webp`), then in `about.html` replace the letter inside `<div class="avatar">` with
`<img src="assets/img/team/tina.webp" alt="Keren Sarah Christina" width="240" height="240">`

**Client logos:** add files to `assets/img/logos/` and replace each `<span class="logo-slot">Logo</span>` in `index.html` with an `<img>`.

**Portfolio:** replace the `[Brand name]` cards in `work.html` (and the first three in `index.html`). Each card's `data-cat` can be `growth`, `brand`, `tech` or `experiences`.

**New case study:** copy `case-study.html` to a new name (e.g. `brand-name.html`), fill it in, remove the `noindex` robots line near the top, and add the page to `sitemap.xml`.

**Numbers:** the `XX+` stats in `index.html` must be real figures. No promised results.

## Before going public

- Real email, WhatsApp, booking link and socials in `config.js`
- Advisors listed only with their written consent
- All `[placeholders]` replaced
- Site submitted to Google Search Console with `sitemap.xml`

## Built with

Plain HTML, CSS and JavaScript. The 3D scene uses three.js (MIT). Earth and Moon textures come from the three.js examples (MIT). No build step, no paid services.

© 33 League Global Solutions. All rights reserved.
