/*
  Builds work.html, case-studies/*.html and sitemap.xml from _build/cases.js.
  Run from the repo root:  node _build/build.js
  Folders starting with "_" are not published by GitHub Pages.
*/
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const cases = require("./cases.js");
const images = JSON.parse(fs.readFileSync(path.join(__dirname, "images.json"), "utf8").replace(/^﻿/, ""));
const SITE = "https://33league.github.io/";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const bySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
// Work page sections, strongest results first. A case sits in the group of its first cat.
const groups = [
  { id: "growth", eyebrow: "Ads & growth", heading: "More Customers, Counted in Orders", text: "Meta, Google and YouTube campaigns we report in orders, enquiries and installs, not likes.", slugs: ["alterhub", "number-fusion", "find-my-pet", "pushpak", "angooti"] },
  { id: "websites", eyebrow: "Websites & online stores", heading: "Websites Built to Sell", text: "Shopify, Framer and Wix sites designed around one question: what makes this visitor buy or get in touch?", slugs: ["book-port", "stree-swasthya", "muse-foods", "provifi", "hoku", "oceanus", "hunger-nuts", "loudmouth"] },
  { id: "content", eyebrow: "Brand & content", heading: "Content People Follow", text: "Instagram and brand work that turns customers into followers, and followers into the next customers.", slugs: ["bangalore-bag-company", "wood-brick-studio", "sutra-digital"] }
];
const ordered = groups.flatMap((g) => g.slugs.map((s) => bySlug[s]));

const arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const waIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>';

function head({ title, description, canonical, image, pre, noindex }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src https://api.web3forms.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#05070d">
<meta property="og:type" content="website"><meta property="og:site_name" content="33 League Global Solutions"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${image}">
<link rel="icon" href="${pre}assets/img/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="${pre}assets/css/style.css">
</head>`;
}

function header(pre) {
  return `<body><canvas id="stars" aria-hidden="true"></canvas><a class="skip" href="#main">Skip to content</a>
<header class="site"><nav class="wrap nav" aria-label="Main"><a class="brand" href="${pre || "./"}" aria-label="33 League Global Solutions, home"><span class="brand-mark">33</span><span class="brand-text"><span class="brand-name">33 LEAGUE</span><br><span class="brand-sub">Global Solutions</span></span></a><button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button><ul class="nav-links" id="nav-links"><li><a href="${pre || "./"}">Home</a></li><li><a href="${pre}work.html" aria-current="page">Work</a></li><li><a href="${pre}about.html">About</a></li><li><a href="${pre}contact.html">Contact</a></li><li><a class="btn btn-primary" data-link="booking" href="${pre}contact.html">Book a Call</a></li></ul></nav></header>`;
}

function footer(pre) {
  return `<footer class="site"><div class="wrap"><div class="foot"><div><a class="brand" href="${pre || "./"}"><span class="brand-mark">33</span><span class="brand-text"><span class="brand-name">33 LEAGUE</span><br><span class="brand-sub">Global Solutions</span></span></a><p style="margin-top:18px;max-width:320px">Growth, Design &amp; Technology Solutions for Global Brands.</p><p style="margin-top:6px">Bengaluru, India · Working with brands worldwide</p></div><div><h4>Explore</h4><ul><li><a href="${pre}work.html">Work</a></li><li><a href="${pre}about.html">About</a></li><li><a href="${pre}contact.html">Contact</a></li></ul></div><div><h4>Connect</h4><ul><li><a href="mailto:33league.official@gmail.com">33league.official@gmail.com</a></li><li><a data-link="whatsapp" href="#">WhatsApp</a></li><li><a data-link="instagram" href="#">Instagram</a></li><li><a data-link="linkedin" href="#">LinkedIn</a></li></ul></div></div><div class="foot-bottom"><span>© <span data-year>2026</span> 33 League Global Solutions. All rights reserved.</span><span>Strategy · Creative · Technology</span></div></div></footer>
<div class="mobile-bar" role="navigation" aria-label="Quick actions"><a class="btn btn-primary" data-link="booking" href="${pre}contact.html">Book a Call</a><a class="btn btn-ghost" data-link="whatsapp" href="#">${waIcon} WhatsApp</a></div><script src="${pre}assets/js/config.js"></script><script src="${pre}assets/js/main.js"></script><script src="${pre}assets/js/stars.js"></script>
</body></html>
`;
}

function cta(pre, heading, text) {
  return `<section><div class="wrap"><div class="cta-band reveal"><span class="eyebrow accent">Next step</span><h2 class="display" style="margin-top:14px">${heading}</h2><p class="lede">${text}</p><div class="btn-row" style="justify-content:center"><a class="btn btn-primary" data-link="booking" href="${pre}contact.html">Get a Free Strategy Call ${arrow}</a><a class="btn btn-ghost" data-link="whatsapp" href="#">${waIcon} WhatsApp Us</a></div></div></div></section>`;
}

const img = (slug, i, alt, pre, extra = "") => {
  const m = images[slug][i];
  return `<img src="${pre}assets/img/work/${slug}/${m.file}" alt="${esc(alt)}" width="${m.w}" height="${m.h}"${extra}>`;
};

function card(c, pre) {
  const cover = images[c.slug][0];
  const h = Math.round(cover.h * 900 / cover.w);
  return `<a class="work-card case-card reveal" href="${pre}case-studies/${c.slug}.html" data-cat="${c.cats}">
 <div class="work-visual"><img src="${pre}assets/img/work/${c.slug}/cover-sm.jpg" alt="${esc(c.client)}: ${esc(c.title)}" width="900" height="${h}" loading="lazy" decoding="async"></div>
 <div class="work-body"><span class="work-meta">${esc(c.sector)}</span><h3>${esc(c.client)}</h3><p>${esc(c.title)}</p><div class="card-result"><b>${esc(c.card.value)}</b><span>${esc(c.card.label)}</span></div><span class="link-arrow">View case study ${arrow}</span></div>
</a>`;
}

function gallery(c, list, pre) {
  return `<div class="gallery">${list.map(({ m, i }) => {
    const alt = `${c.client}: ${m.caption}`;
    if (m.tall) return `<figure class="shot shot-tall reveal"><div class="shot-scroll" tabindex="0" role="region" aria-label="${esc(c.client)} full homepage, scrollable">${img(c.slug, i, `${c.client} full homepage`, pre, ' loading="lazy" decoding="async"')}</div><figcaption>Full homepage <span>Scroll inside the frame</span></figcaption></figure>`;
    return `<figure class="shot reveal"><a href="${pre}assets/img/work/${c.slug}/${m.file}" target="_blank" rel="noopener" aria-label="Open ${esc(alt)} full size">${img(c.slug, i, alt, pre, ' loading="lazy" decoding="async"')}</a><figcaption>${esc(m.caption)}</figcaption></figure>`;
  }).join("")}</div>`;
}

function casePage(c, idx) {
  const pre = "../";
  const list = images[c.slug].map((m, i) => ({ m, i })).slice(1);
  const main = list.filter((x) => !x.m.organic);
  const organic = list.filter((x) => x.m.organic);
  const next = ordered[(idx + 1) % ordered.length];
  const canonical = `${SITE}case-studies/${c.slug}.html`;

  const facts = c.stats
    ? `<div class="stats cs-stats reveal">${c.stats.map((s) => `<div class="stat"><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("")}</div>${c.period ? `<p class="note">${esc(c.period)}. Figures from the client's ad accounts and sales records.</p>` : ""}`
    : `<div class="cs-meta reveal"><div><span>Platform</span><b>${esc(c.platform || c.services[0])}</b></div><div><span>What we did</span><b>${esc(c.role || c.services.join(", "))}</b></div><div><span>${c.live ? "Live site" : "Timeline"}</span><b>${c.live ? `<a class="link-arrow" href="https://${c.live}" target="_blank" rel="noopener">${esc(c.live)} ${arrow}</a>` : esc(c.period || "Ongoing")}</b></div></div>`;

  const related = c.related
    ? `<section style="padding-top:0"><div class="wrap"><div class="reveal"><span class="eyebrow accent">Paid campaigns for the same studio</span><h2 class="display" style="margin-top:12px">Then We Put Money Behind It</h2></div><div class="grid-3">${c.related.map((s) => card(bySlug[s], pre)).join("")}</div></div></section>`
    : "";

  return `${head({ title: `${c.client} Case Study | 33 League Global Solutions`, description: c.summary, canonical, image: `${SITE}assets/img/work/${c.slug}/cover-sm.jpg`, pre })}
${header(pre)}
<main id="main">
<section class="page-head cs-head"><div class="wrap">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="${pre}work.html">Work</a><span aria-hidden="true">/</span><span>${esc(c.client)}</span></nav>
 <span class="eyebrow accent">${esc(c.client)} · ${esc(c.sector)}</span>
 <h1 class="display">${esc(c.title)}</h1><hr class="rule">
 <p class="lede">${esc(c.summary)}</p>
 <ul class="cs-tags">${c.services.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
</div></section>
<section class="cs-cover-sec"><div class="wrap"><figure class="cs-cover reveal">${img(c.slug, 0, `${c.client} case study cover`, pre, ' fetchpriority="high"')}</figure>${facts}</div></section>
<section class="cs-story"><div class="wrap">
 <div class="cs-block reveal"><h2>The challenge</h2><div><p>${esc(c.problem)}</p></div></div>
 <div class="cs-block reveal"><h2>What we did</h2><div><ul>${c.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></div></div>
 <div class="cs-block reveal"><h2>The result</h2><div><p class="cs-result">${esc(c.result)}</p>${c.results ? `<ul class="cs-wins">${c.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}</div></div>
</div></section>
${c.quote ? `<section class="cs-quote-sec"><div class="wrap"><figure class="cs-quote glass reveal"><blockquote>“${esc(c.quote.text)}”</blockquote><figcaption>${esc(c.quote.by)}</figcaption></figure></div></section>` : ""}
${main.length ? `<section class="cs-gallery-sec"><div class="wrap"><div class="reveal"><span class="eyebrow accent">Inside the project</span><h2 class="display" style="margin-top:12px">${c.stats ? "The Work Behind the Numbers" : "A Closer Look"}</h2></div>${gallery(c, main, pre)}</div></section>` : ""}
${organic.length ? `<section class="cs-gallery-sec" style="padding-top:0"><div class="wrap"><div class="reveal"><span class="eyebrow accent">Social &amp; content</span><h2 class="display" style="margin-top:12px">On Their Feed</h2><p class="lede" style="margin-top:14px">${esc(c.organicNote || "")}</p></div>${gallery(c, organic, pre)}</div></section>` : ""}
${related}
<section class="next-sec" style="padding-top:0"><div class="wrap"><a class="next-case reveal" href="${next.slug}.html"><span class="eyebrow">Next case study</span><span class="next-title">${esc(next.client)}<em>${esc(next.title)}</em></span>${arrow}</a></div></section>
${cta(pre, "Want This for Your Business?", "Tell us where you are stuck. On a free strategy call we will show you what we would do first, and what it could do for your numbers.")}
</main>
${footer(pre)}`;
}

function workPage() {
  const pre = "";
  const quotes = ["alterhub", "angooti", "wood-brick-studio"].map((s) => bySlug[s]);
  return `${head({ title: "Our Work & Case Studies | 33 League Global Solutions", description: "Real results for real businesses: WhatsApp lead generation, app installs, Shopify and Framer websites, and social content by 33 League, Bengaluru.", canonical: `${SITE}work.html`, image: `${SITE}assets/img/work/alterhub/cover-sm.jpg`, pre })}
${header(pre)}
<main id="main">
<section class="page-head"><div class="wrap">
 <span class="eyebrow accent">Selected work</span><h1 class="display">Results Our Clients Can Count</h1><hr class="rule">
 <p class="lede">We work with founders and growing brands in India and abroad. Here are a few of the things we have built for them, and what each one did for the business.</p>
 <nav class="filters" aria-label="Jump to a section">${groups.map((g) => `<a class="jump" href="#${g.id}">${esc(g.eyebrow)}</a>`).join("")}</nav>
</div></section>
${groups.map((g, i) => `<section id="${g.id}" class="work-group" style="padding-top:${i ? "24px" : "0"}"><div class="wrap"><div class="reveal"><span class="eyebrow accent">${esc(g.eyebrow)}</span><h2 class="display" style="margin-top:12px">${esc(g.heading)}</h2><p class="lede" style="margin-top:14px">${esc(g.text)}</p></div><div class="grid-3">
${g.slugs.map((s) => card(bySlug[s], pre)).join("\n")}
${g.id === "content" ? cases.more.map((m) => `<article class="work-card reveal"><div class="work-visual"><div class="orb ${m.orb}"></div></div><div class="work-body"><span class="work-meta">${esc(m.sector)}</span><h3>${esc(m.client)}</h3><p>${esc(m.text)}</p><span class="tags">${esc(m.tags)}</span></div></article>`).join("\n") : ""}
</div></div></section>`).join("\n")}
<section style="padding-top:0"><div class="wrap"><div class="reveal"><span class="eyebrow accent">In their words</span><h2 class="display" style="margin-top:12px">What Our Clients Say</h2></div><div class="grid-3">
${quotes.map((c) => `<figure class="quote glass reveal"><blockquote>“${esc(c.quote.text)}”</blockquote><figcaption>${esc(c.quote.by)}<span><a class="link-arrow" href="case-studies/${c.slug}.html">Read the case study ${arrow}</a></span></figcaption></figure>`).join("\n")}
</div></div></section>
${cta(pre, "Your Brand Could Be Next", "Tell us what you are working on. We will show you what we would do first and what it could do for your business.")}
</main>
${footer(pre)}`;
}

function sitemap() {
  const pages = ["", "work.html", "about.html", "contact.html", ...ordered.map((c) => `case-studies/${c.slug}.html`)];
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
}

fs.mkdirSync(path.join(root, "case-studies"), { recursive: true });
ordered.forEach((c, i) => fs.writeFileSync(path.join(root, "case-studies", `${c.slug}.html`), casePage(c, i)));
fs.writeFileSync(path.join(root, "work.html"), workPage());
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap());
console.log(`Built work.html, ${ordered.length} case studies and sitemap.xml`);
