/*
  Case study content for work.html and case-studies/*.html.
  Edit the text here, then run:  node _build/build.js
  Images live in assets/img/work/<slug>/ and are listed in _build/images.json.
  cats: growth = Ads & Growth, tech = Websites, brand = Social & Content
  Work page order and grouping is set in build.js (groups).
*/
module.exports = [
  {
    slug: "alterhub",
    client: "AlterHub",
    cats: "growth brand",
    sector: "Doorstep service · Hyderabad",
    title: "201 paid orders before their website even went live",
    summary: "A WhatsApp-first Meta Ads system that turned chats into 201 paid orders while the client's website was still being built.",
    card: { value: "201", label: "paid orders from ₹48.5K ad spend" },
    services: ["Meta Ads", "Click-to-WhatsApp", "Ad creative", "Order tracking", "Organic social"],
    period: "Aug to Oct 2026",
    stats: [
      { v: "3,648", l: "WhatsApp conversations" },
      { v: "₹13.29", l: "average cost per conversation" },
      { v: "201", l: "paid orders tracked" },
      { v: "₹1.31L", l: "revenue from ₹48.5K ad spend" }
    ],
    problem: "AlterHub had everything ready to operate: the setup, the infrastructure and a team of skilled tailors. But their custom website, built by a separate development team, had been delayed for six to eight months. Every month they were paying for staff and setup with no way to bring in customers.",
    approach: [
      "Skipped the wait for the website and sent customers straight from Meta ads into WhatsApp, where orders were booked",
      "Split campaigns for men and women, targeted only to the areas AlterHub could serve",
      "Built a before-and-after creative system plus short video ads, each answering one fit problem",
      "Logged every paid order in a sales tracker and matched it back to the ad conversation, so results are reported in orders and revenue, not clicks",
      "Ran organic Instagram posts alongside, each ending with one action: book a pickup on WhatsApp"
    ],
    result: "AlterHub started earning while the website was still in development. They now use this live sales data in their investor pitch, while their website and Android and iOS apps are still being built.",
    results: [
      "Cost per chat down 74%, from ₹35.68 in the July test to ₹9.43",
      "Cost per new-customer order down 66%, from ₹410 to ₹139",
      "New-customer conversion doubled, from 3.39% to 6.78%",
      "Chat-to-order conversion reached 8.70% in October, including repeat orders",
      "Best ad: a shirt-fit video that brought in 677 chats at ₹5.58 each",
      "The same reel on Instagram: 1.28 lakh views and 686 new followers"
    ],
    quote: { text: "Our tailors and setup were ready, but the website was stuck in development for months. Their WhatsApp ads got us paying customers without it. The site still isn't live, yet we have real revenue, and that data is now part of our investor pitch.", by: "AlterHub, Hyderabad" },
    organicNote: "Organic Instagram posts for AlterHub, designed to answer one fit problem each and end with a WhatsApp booking."
  },
  {
    slug: "angooti",
    client: "Angooti",
    cats: "growth",
    sector: "Experience studio · Bengaluru",
    title: "From hit-or-miss influencer posts to 2,900+ booking enquiries",
    summary: "An always-on Click-to-WhatsApp campaign that replaced unpredictable influencer spikes with a steady flow of booking enquiries.",
    card: { value: "2,926", label: "WhatsApp enquiries in under 5 months" },
    services: ["Meta Ads", "Click-to-WhatsApp", "Audience targeting", "Creative testing"],
    period: "Jun to Oct 2026",
    stats: [
      { v: "2,926", l: "WhatsApp enquiries" },
      { v: "₹41.71", l: "cost per enquiry" },
      { v: "5.92L", l: "people reached in Bengaluru" },
      { v: "~27", l: "enquiries a day at peak" }
    ],
    problem: "Angooti runs hands-on ring-making workshops where couples, families and teams craft their own gold, silver or platinum rings with a master jeweller. They relied on influencer marketing: some posts brought enquiries, many didn't, and demand rose and fell with each one. They wanted something stable they could plan around.",
    approach: [
      "Set up an always-on Click-to-WhatsApp campaign on a fixed daily budget, sending local enquiries straight to Angooti's team",
      "Built the campaign structure for a Bengaluru-only audience",
      "Tested static ads against Reels across two audience approaches",
      "Moved budget month on month to the audiences and creatives with the lowest cost per conversation"
    ],
    result: "A steady, predictable stream of booking conversations instead of one-off spikes. Angooti's team closes the bookings in chat, so we report results up to the conversation.",
    results: [
      "Cost per conversation down 17% from June to July (₹44.25 to ₹36.60)",
      "Cost to reach 1,000 people (CPM) down 54% from June to August",
      "The top static ad alone drove 1,450 conversations, half of all chats",
      "19.5 lakh impressions from ₹1.22 lakh of managed ad spend"
    ],
    quote: { text: "Influencer marketing was hit or miss. Some posts worked, many didn't, and we never knew what next month would look like. We wanted stability, and the ads gave us a steady flow of enquiries we can actually plan around.", by: "Angooti, Bengaluru" }
  },
  {
    slug: "find-my-pet",
    client: "Find My Pet",
    cats: "growth",
    sector: "Mobile game · Global",
    title: "A brand-new game to 74,644 installs in four months, at ₹2.99 each",
    summary: "Google App campaigns that built an install base fast on a lean budget, with every tracking event checked along the way.",
    card: { value: "74,644", label: "app installs at ₹2.99 each" },
    services: ["Google Ads", "App campaigns", "Target CPA bidding", "Firebase tracking"],
    period: "Nov 2025 to Feb 2026",
    stats: [
      { v: "74,644", l: "app installs" },
      { v: "₹2.99", l: "average cost per install" },
      { v: "47,738", l: "installs in the first month" },
      { v: "4.1%", l: "click-through rate on 1.35 Cr impressions" }
    ],
    problem: "Find My Pet: Hidden Puzzle was a brand-new game with no players. The owners needed a large install base fast, to show traction to investors or to hand the app to a team that could grow it.",
    approach: [
      "Launched a broad Android App campaign for volume",
      "Added a Target CPA “capping” campaign that held install costs down",
      "Once volume was in, tested high-value markets, iOS install campaigns and in-app purchase campaigns",
      "Tracked Play Store, Firebase and in-app events as conversions, and verified each one fired correctly"
    ],
    result: "74,644 installs in four months at ₹2.99 each. The owners got an install base to pitch with, verified event tracking, and a clear view of where tracking and monetisation can improve next.",
    results: [
      "₹1.68 per install on the Target CPA campaign, 36% cheaper than the broad campaign",
      "83% of installs from six markets at ₹1.97 to ₹2.81 per install",
      "₹2.23 lakh ad spend managed"
    ],
    quote: { text: "We were launching a brand new game and needed installs at scale, something we could take to investors or hand over to a team to grow. They delivered the volume on a lean budget, and showed us which events were tracking properly and what to improve next.", by: "App owner, Find My Pet: Hidden Puzzle" }
  },
  {
    slug: "number-fusion",
    client: "Number Fusion",
    cats: "growth",
    sector: "Mobile game · 220 countries",
    title: "A worldwide game launch: 7.7x more installs a month, for less per install",
    summary: "We tested six markets, found where the game installed cheapest, then scaled that campaign month after month without raising install costs.",
    card: { value: "220", label: "countries reached · 38,746 installs" },
    services: ["Google Ads", "App campaigns", "Market testing", "Budget scaling"],
    period: "Sep to Nov 2025",
    stats: [
      { v: "38,746", l: "installs in three months" },
      { v: "7.7x", l: "monthly install growth" },
      { v: "−17%", l: "cost per install while spend grew 6x" },
      { v: "220", l: "countries and territories" }
    ],
    problem: "Number Fusion is a number-merge puzzle game launching worldwide. The owners needed a large install base quickly, as proof of traction for investors or for handing the app to a team that could grow it.",
    approach: [
      "Ran five language-market campaigns (English, Indonesian, Portuguese, Turkish, Spanish for Brazil) as controlled tests at ₹250 a day each",
      "Ran a Global campaign and a separate high-value markets campaign alongside them",
      "The Global campaign won, so we paused the weaker tests and moved budget to it month by month",
      "Checked that install and in-app events were tracking correctly throughout"
    ],
    result: "38,746 installs from 220 countries in three months. Global installs grew from 2,510 in September to 19,342 in November, while cost per install fell from ₹2.92 to ₹2.41.",
    results: [
      "Six language and market segments tested, with cost per install compared market by market",
      "63% of installs from India, Pakistan, Bangladesh and Indonesia at ₹2.41 to ₹3.64 per install",
      "₹1.50 lakh ad spend managed"
    ],
    quote: { text: "We were launching a brand new game worldwide and needed installs fast, something we could take to investors or hand over to a team to grow. They found the markets where it installed cheapest, scaled the volume, and showed us which events were tracking properly and what to improve next.", by: "App owner, Number Fusion" }
  },
  {
    slug: "pushpak",
    client: "Pushpak by Sutra Digital",
    cats: "growth",
    sector: "Animation · YouTube",
    title: "Over 1 lakh YouTube views for a new anime, at 7 paise a view",
    summary: "Character-reveal reels built the anticipation, then a YouTube views campaign put an original Indian anime in front of a real audience.",
    card: { value: "₹0.07", label: "per YouTube view" },
    services: ["Google Ads", "YouTube Ads", "Video campaigns", "Instagram teasers"],
    period: "Launched 30 Dec 2025",
    stats: [
      { v: "1,08,332", l: "YouTube views" },
      { v: "39.8%", l: "view rate" },
      { v: "₹7,065", l: "total ad spend" },
      { v: "1,022", l: "likes on the video" }
    ],
    problem: "Sutra Digital released an original Indian anime on a brand-new YouTube channel. Without an audience, even strong animation gets no views.",
    approach: [
      "Built anticipation with five character-reveal reels on Instagram",
      "Ran a YouTube video views campaign on Google Ads at ₹250 a day"
    ],
    result: "Over one lakh views for ₹7,065, with nearly 40% of people who saw the ad choosing to watch.",
    results: [
      "2,72,241 impressions",
      "₹25.95 cost per 1,000 impressions"
    ]
  },
  {
    slug: "loudmouth",
    client: "Loudmouth",
    cats: "tech",
    sector: "Menswear · India",
    title: "A menswear store that reads like a fashion magazine",
    summary: "Designed in Figma and built on Shopify, so the handcrafted pieces look premium before the price even shows.",
    card: { value: "Shopify", label: "UI/UX design & build" },
    platform: "Shopify + Figma",
    role: "UI/UX design and Shopify development",
    live: "loudmouth.in",
    services: ["Shopify", "UI/UX design", "Figma", "Mobile-first"],
    problem: "Loudmouth makes small-batch, handcrafted menswear, known for embroidered trucker jackets and boxy shirts. Standard Shopify themes made the pieces look like any other online store. The brand needed a store that feels like a fashion magazine, so the craft and the “For the Outlier” story come through before the price does.",
    approach: [
      "Designed the full experience in Figma first: homepage, collection, product, cart and mobile",
      "Built custom Shopify sections: video hero, marquee, new arrivals grid and editorial story blocks",
      "Product pages that answer buying questions: size selector, delivery date estimate, COD badge, wash-care and shipping tabs",
      "“You may also like” suggestions and a slide-out cart to raise order value",
      "Newsletter capture and social links to bring shoppers back"
    ],
    result: "A store that sells the story as well as the product, built mobile-first across every section."
  },
  {
    slug: "hunger-nuts",
    client: "Hunger Nuts",
    cats: "tech",
    sector: "Premium dry fruits · D2C",
    title: "A premium dry fruit store built to sell gift boxes, not single packs",
    summary: "A full Shopify build and conversion redesign that justifies a premium price and pushes gift boxes and combos.",
    card: { value: "Shopify", label: "built for gift boxes and bigger baskets" },
    platform: "Shopify",
    role: "Shopify development and conversion design",
    live: "hungernuts.com",
    services: ["Shopify", "Conversion optimisation", "UI/UX design", "Mobile-first"],
    problem: "Hunger Nuts sells premium dry fruits in a market full of cheaper, look-alike options on marketplaces. Shoppers needed a reason to trust the brand and pay more, and the store needed to sell gift boxes and combos, not just single packs, especially in the festive season.",
    approach: [
      "Full Shopify build: theme, custom sections, products, payments and apps",
      "Conversion redesign: offer marquee, trust bar, discount badges and quick add to cart",
      "Gift boxes, combo packs and a build-your-own box to raise order value",
      "A seasonal campaign hero ready for festive pushes like Diwali gifting",
      "Proof that justifies the price: Google and Amazon ratings, FSSAI and NABL badges and a side-by-side comparison",
      "Product pages with weight variants, per-100g pricing and nutrition bars, plus a sourcing map and shoppable videos"
    ],
    result: "A store that gives shoppers a reason to choose Hunger Nuts over cheaper marketplace options, and to add more to the cart when they do."
  },
  {
    slug: "book-port",
    client: "Book Port",
    cats: "tech",
    sector: "School textbooks · Vellore",
    title: "School textbooks ordered from home, with each school's list kept private",
    summary: "A Shopify store with a custom verification gateway, so each school's book list is visible only to that school's parents.",
    card: { value: "Private", label: "book list per school, unlocked by roll number" },
    platform: "Shopify (custom build)",
    role: "Shopify development and UI/UX design",
    live: "mybookport.com",
    services: ["Shopify", "Custom development", "UI/UX design", "Mobile-first"],
    problem: "Every school year, parents in Vellore queued at bookstores for their child's textbooks, and every school uses a different book list. Book Port needed an online store where each school's list stays private to that school's students, so parents can order the right books from home.",
    approach: [
      "Built a custom verification gateway on Shopify, not an off-the-shelf app",
      "Parents enter the school code and their child's roll number. Both are checked against the school's roll list. No match, no access",
      "Verified parents see only their school's books, so they order exactly what the child needs",
      "Two simple paths: shop by school or shop by publisher, with class, subject and publisher filters",
      "Trust section and FAQs on bundling, delivery and refunds, built mobile-first for parents on their phones"
    ],
    result: "Parents order the exact books their child needs without leaving home, and each school's list stays private."
  },
  {
    slug: "hoku",
    client: "HOKU!",
    cats: "tech",
    sector: "Olive oil · D2C",
    title: "An olive oil brand that refuses to look like every other bottle",
    summary: "A bold, playful Framer website that matches HOKU!'s loud voice and stands out from the first scroll.",
    card: { value: "Framer", label: "a brand site built to stand out" },
    platform: "Framer",
    role: "Web design and Framer development",
    live: "hokuworld.com",
    services: ["Framer", "Web design", "UI/UX design", "Responsive"],
    problem: "Olive oil brands in India all look the same: green bottles, quiet labels, health claims. HOKU! is loud and playful on purpose, and it needed a website that felt as bold as the brand.",
    approach: [
      "A site with a personality, not a template: hot pink and green, hand-drawn type and pop art backgrounds",
      "Animated, floating product shots",
      "Colour-coded variant cards that make the two oils easy to tell apart",
      "Illustrated proof points that explain why HOKU! without walls of text",
      "Recipes, pairing tips and a customer reviews carousel",
      "Sticky pill navigation and a mobile-first responsive layout"
    ],
    result: "A website people remember, in a category where most brands blend in."
  },
  {
    slug: "stree-swasthya",
    client: "Stree Swasthya",
    cats: "tech brand",
    sector: "Women's nutrition · Bengaluru",
    title: "One team for the store, the ads and the content of a women's health brand",
    summary: "A Shopify store built around health needs and life stages, plus the ads and social content that bring shoppers in.",
    card: { value: "3-in-1", label: "store, ad creatives and social from one team" },
    platform: "Shopify",
    role: "Shopify development, UI/UX, ad creatives and organic content",
    live: "streeswasthya.com",
    services: ["Shopify", "UI/UX design", "Ad creatives", "Reels & UGC", "Organic social"],
    period: "Social: May to Sep 2026",
    problem: "Women don't shop for nutrition by product name. They shop for a need, like postpartum recovery or menopause support. A standard product grid made them hunt for what fits their stage of life, and a health brand also has to earn trust before anyone buys.",
    approach: [
      "Organised the store by health need and by life stage, with tabbed Shop by Need kits and illustrated life-stage cards",
      "Put a free consultation up front, so unsure visitors talk to a nutritionist instead of leaving",
      "Partner hospital logos, testimonials, a before-and-after slider and shoppable video reviews to build trust",
      "Bestseller cards with savings badges and quick add to cart, plus an app-style mobile layout",
      "On Instagram: awareness posts that talk openly about postpartum recovery, problem-led ad creatives, and expert, founder and customer-style reels",
      "Launch reels for Ophilo, the brand's seed and nut snack range"
    ],
    result: "One team behind the store, the ads and the social content, so every touchpoint speaks the same language to new mothers.",
    organicNote: "Ad creatives, reels and organic content for Stree Swasthya and its snack brand Ophilo."
  },
  {
    slug: "provifi",
    client: "Provifi",
    cats: "tech",
    sector: "Activated millets · Karnataka",
    title: "Teaching shoppers a new food category, and selling it in the same visit",
    summary: "A Shopify store that explains what activated millets are, why they're worth paying for, and makes buying easy.",
    card: { value: "Shopify", label: "a store that explains the product, then sells it" },
    platform: "Shopify",
    role: "Shopify development and UI/UX design",
    live: "provifi.in",
    services: ["Shopify", "UI/UX design", "Content design", "Mobile-first"],
    problem: "Activated millets are a new food category. Most shoppers don't know what “pre-soaked” or “activated” means, or why it is worth paying for. The store had to teach the category and sell it in the same visit.",
    approach: [
      "Explains the category in plain steps before asking for the sale: a four-step activation process, science tabs and nutrition stats",
      "Offer-led hero slideshow, announcement bar and a trust strip (FSSAI, lab tested)",
      "Product cards with ratings, MRP vs offer price, size picker and quick add to cart",
      "A heritage brand film and recipes blog that give shoppers reasons to come back",
      "Product pages with gallery, feature badges and sticky add to cart",
      "Full Shopify setup: theme, catalogue, variants and payments"
    ],
    result: "A store that turns “what is this?” into “add to cart” in one visit."
  },
  {
    slug: "muse-foods",
    client: "Muse Foods",
    cats: "tech",
    sector: "Corporate dining · Bengaluru",
    title: "A corporate dining website built to win enterprise clients before the first call",
    summary: "A dark, editorial Framer site that wins the trust of HR and facilities heads and turns visits into corporate enquiries.",
    card: { value: "B2B", label: "site built to win corporate enquiries" },
    platform: "Framer",
    role: "Web design and Framer development",
    live: "musefoods.in",
    services: ["Framer", "Web design", "Lead capture", "Responsive"],
    problem: "Muse Foods sells premium corporate dining to large companies. Its buyers are HR, admin and facilities heads who judge a vendor by its website before they ever call. The site had to look as premium as the food and turn those visits into enquiries.",
    approach: [
      "A premium dark editorial design that matches the price point of the service",
      "An animated client logo wall, so enterprise buyers see who already trusts Muse",
      "Muse's track record in large type: 105M+ meals served a year and 98% client retention",
      "Expandable service cards for workplace dining, banqueting and executive hospitality",
      "A corporate enquiry form, partner benefits and discovery call booking to capture leads"
    ],
    result: "A website that does the selling before the first call, built with a brand designer and fully responsive."
  },
  {
    slug: "oceanus",
    client: "Oceanus",
    cats: "tech",
    sector: "Study abroad consultancy",
    title: "A study abroad website with one job: booking consultations",
    summary: "A Wix website that shows students and parents exactly how Oceanus helps, and turns visitors into free consultation bookings.",
    card: { value: "Wix", label: "site built to book free consultations" },
    platform: "Wix",
    role: "Web design and Wix development",
    live: "oceanusstudyabroad.com",
    services: ["Wix", "Web design", "Lead capture", "Responsive"],
    problem: "Choosing a study abroad consultant is a big decision for students and parents, and most consultancy sites look the same and give little reason to trust them. Oceanus needed a site that shows its services, destinations and track record clearly.",
    approach: [
      "A hero built around one action: book a free consultation",
      "A six-step service journey, from course choice to life after arrival",
      "A university logo strip with a clear disclaimer, building trust without overclaiming",
      "Illustrated country cards and colour-coded track record stats",
      "Student testimonials with a Google review prompt, and a short enquiry form beside the About block"
    ],
    result: "A clear, trustworthy site with one job: get families to book that first consultation."
  },
  {
    slug: "bangalore-bag-company",
    client: "Bangalore Bag Company",
    cats: "brand",
    sector: "Sustainable totes · Bengaluru",
    title: "Every pop-up stall now brings in new followers and free content",
    summary: "A follow-for-a-discount offer at every stall turned buyers into followers, and their photos into the posts that bring in the next customers.",
    card: { value: "Organic", label: "stall buyers turned into followers" },
    services: ["Organic Instagram", "Community building", "Event marketing", "Customer content"],
    problem: "Bangalore Bag Company makes sustainable raw cotton tote bags and sells at pop-ups, events and online. Every stall brought sales, but those buyers left without becoming part of the brand online.",
    approach: [
      "Ran a follow-for-a-discount offer at every stall: buyers followed the page and got an instant discount",
      "Photographed happy buyers with their totes and turned them into posts",
      "Shared customer stories, a brand ambassador post and product details",
      "Designed launch creatives, from coming-soon teasers to the pet bag collection",
      "Posted timely local moments, like the RCB win, to keep the brand part of the city"
    ],
    result: "Every stall now produces followers and content at the same time.",
    quote: { text: "Every stall now gives us followers and content at the same time. A small discount turned buyers into followers, and their photos with our totes became the posts that bring in the next customers.", by: "Bangalore Bag Company, Bengaluru" }
  },
  {
    slug: "wood-brick-studio",
    client: "Wood Brick Studio",
    cats: "brand",
    sector: "Architecture & interiors",
    title: "3D renders turned into a feed clients browse like a portfolio",
    summary: "A room-by-room content series that gave an interiors studio a calm, premium Instagram that new clients browse before they call.",
    card: { value: "Organic", label: "Instagram content series" },
    services: ["Organic Instagram", "Content planning", "Post design"],
    problem: "Wood Brick Studio had beautiful 3D renders of its work, but they were sitting in folders, not working for the business.",
    approach: [
      "Turned the renders into a room-by-room series: bedroom, living room and kitchen",
      "Gave each room three posts: the render, a quote card, then a detail shot, so the grid reads like a portfolio",
      "Added design tips and festive posts to keep the page active between showcases"
    ],
    result: "A feed new clients scroll like a portfolio before they get in touch.",
    quote: { text: "Our renders were sitting in folders. Turning them into a room by room series with a quote or a tip gave our page a calm, premium look, and now new clients scroll our feed like a portfolio before they call us.", by: "Wood Brick Studio" }
  },
  {
    slug: "sutra-digital",
    client: "Sutra Digital",
    cats: "brand",
    sector: "Game & animation studio",
    title: "One studio, four audiences: Instagram for two games, a brand and an anime",
    summary: "Six months of Instagram content across two games, a studio brand and an original anime, each with its own voice.",
    card: { value: "4", label: "content tracks, one studio" },
    services: ["Organic Instagram", "Content strategy", "Reel editing", "Copywriting"],
    period: "Aug 2025 to Feb 2026",
    problem: "Sutra Digital is an Indian mobile game studio with two games on Google Play (Number Fusion and Find My Pet) and an original anime series on YouTube. Each needed its own audience, from casual puzzle players to anime fans.",
    approach: [
      "Built four content tracks, each with its own tone: Number Fusion, Find My Pet, the studio brand and the anime series",
      "Designed posts, carousels and reels, from cute game characters to reels cut from the studio's own anime",
      "Wrote captions, on-screen hooks and calls to action pointing to Google Play or a DM",
      "Planned festive and brand moments to keep the studio visible between launches",
      "Ran a five-part character reveal series ahead of the anime launch, later amplified with Google Ads"
    ],
    result: "A studio feed that sells two games and an anime without them blurring into one another. It also set up the paid campaigns that followed.",
    related: ["find-my-pet", "number-fusion", "pushpak"]
  },
  {
    slug: "oceanus-brand",
    client: "Oceanus Study Abroad",
    cats: "brand",
    sector: "Study abroad consultancy",
    title: "A study abroad brand families trust before the first call",
    summary: "A calm, trustworthy identity for a study abroad consultancy, from logo to social to website.",
    card: { value: "Brand", label: "identity and launch kit" },
    services: ["Brand Identity Design","Logo Design","Brand Guidelines","Social Media Design","Visual Identity"],
    format: "Logo, brand board, social kit",
    problem: "Study abroad consultancies all look alike: stock photos, flags, busy flyers. Parents hand over a big, expensive decision only to someone who looks established. New business with no brand assets, starting from zero.",
    approach: [
      "Logo mark that blends an ocean wave, a circle and a bird in flight",
      "Trust blues with a warm coral accent, plus clean type pairing",
      "Brand board with logo variations, palette, type and moodboard",
      "Social launch kit and a destination series for each country"
    ],
    result: "Looks established from day one, before the first enquiry.",
    results: [
      "Every post, form and page now looks like one brand",
      "In-house team can make new posts without a designer"
    ]
  },
  {
    slug: "komunitea",
    client: "KomuniTea",
    cats: "brand",
    sector: "Craft kombucha, Goa and Bangalore",
    title: "Labels that sell a new drink from a crowded café fridge",
    summary: "Labels and café posters for a craft kombucha brand, built to sell from the fridge.",
    card: { value: "Labels", label: "one system across every flavour" },
    services: ["Brand Identity Design","Label Design","Packaging Design","Point of Sale Design","Logo Design"],
    format: "Labels, café poster",
    problem: "Kombucha was new to most buyers, so the bottle had to explain itself. Sold through cafés, where it competes with every other drink in the fridge. Several flavours that customers kept mixing up.",
    approach: [
      "Hand-lettered KomuniTea wordmark with a tropical, fun personality",
      "Label system where each flavour gets its own illustrated scene and colour",
      "“Ask for a bottle here” poster and tent card for partner cafés"
    ],
    result: "Bottles stand out in a crowded café fridge.",
    results: [
      "Flavours are easy to tell apart at a glance",
      "Café partners get ready-made point of sale material"
    ]
  },
  {
    slug: "house-of-tapri",
    client: "House of Tapri",
    cats: "brand",
    sector: "Artisan tea café",
    title: "A tea café brand approved on cups and bags before a single print run",
    summary: "A warm tea café identity, shown on the cups, bags and pouches before a single thing was printed.",
    card: { value: "Brand", label: "seen on product before printing" },
    services: ["Brand Identity Design","Logo Design","Mockup Design","Packaging Design","Visual Identity"],
    format: "Logo, mockups",
    problem: "A new tea café needed a brand that feels local, warm and premium. Owner wanted to see the logo on real items before paying for printing. Takeaway cups, bags and retail pouches all needed to match.",
    approach: [
      "Kettle and cup logo mark with a hand-crafted feel",
      "Warm brown, cream and terracotta palette",
      "Realistic mockups on takeaway bag, coffee cup, tea pouch and mug"
    ],
    result: "Approved the brand with confidence before spending on print.",
    results: [
      "One look across café, takeaway and retail shelf",
      "Mockups reused for the menu, social and listings"
    ]
  },
  {
    slug: "bangalore-bag-company-launch",
    client: "Bangalore Bag Company",
    cats: "brand",
    sector: "Eco cotton tote brand, Bengaluru",
    title: "A launch story that gave a plain cotton tote a reason to buy",
    summary: "A brand launch for eco cotton totes, from coming soon teasers to the website.",
    card: { value: "Launch", label: "teasers to online store" },
    services: ["Brand Identity Design","Campaign Design","Social Media Design","Illustration","Brand Launch"],
    format: "Launch campaign, illustrations",
    problem: "A new tote brand entering a market full of plain, generic bags. Needed buzz before launch and a reason to buy beyond “it’s cotton”. Launch had to feel local to Bengaluru.",
    approach: [
      "Coming soon teaser grid with Bengaluru in three scripts",
      "Line-art illustrations that became the product designs",
      "Launch campaign: “Carry Happiness, One Tote at a Time”",
      "Matching look carried through to the online store"
    ],
    result: "A clear story that sells the bag, not just the fabric.",
    results: [
      "Launch built anticipation before stock went live",
      "Shop, social and product all feel like one brand"
    ]
  },
  {
    slug: "shivalli",
    client: "Shivalli",
    cats: "brand",
    sector: "Traditional foods and sweets",
    title: "Heritage food packs that printed right the first time",
    summary: "Ready-meal cartons and traditional sweet packs that look heritage and modern at the same time.",
    card: { value: "Packaging", label: "designed on the printer’s dieline" },
    services: ["Packaging Design","Dieline Design","Print Design","Food Packaging","Label Design"],
    format: "Carton, sweets sleeve",
    problem: "A traditional brand moving ready-to-eat meals into retail. Heritage recipes, but packs needed to compete with modern brands. Cartons had to fit the printer’s die exactly.",
    approach: [
      "Khichdi carton on the full flat dieline, with an illustrated story panel",
      "Warm, appetising colour blocking that reads from a distance",
      "Mysore Pak sleeve with a traditional recipe cue and window"
    ],
    result: "Printed right the first time on the supplier’s die.",
    results: [
      "Stands out next to national brands",
      "The pack tells the heritage story, so the shelf does the selling"
    ]
  },
  {
    slug: "achappam",
    client: "Achappam",
    cats: "brand",
    sector: "Homemade Kerala snacks",
    title: "A homemade snack, packaged to sell as a premium gift",
    summary: "A homemade Kerala snack, packaged to sell as a premium gift.",
    card: { value: "Premium", label: "pouch, gift box and poster" },
    services: ["Packaging Design","Pouch Design","Food Packaging","Mockup Design","Brand Design"],
    format: "Pouch, gift box",
    problem: "Homemade snacks are usually sold in plain plastic, at low prices. The owner wanted to sell as a premium, giftable product. Needed packs that work in shops, online and at festivals.",
    approach: [
      "Deep, rich palette with a Kerala heritage pattern",
      "Script wordmark and hero product shot on the front",
      "Matching pouch, gift box and launch poster"
    ],
    result: "Supports a premium price point.",
    results: [
      "Giftable for festivals and corporate hampers",
      "One look across shelf, online listing and social"
    ]
  },
  {
    slug: "delivery-boxes",
    client: "Takeaway & Delivery Boxes",
    cats: "brand",
    sector: "Pizzuto, slice boxes and SKP Foods",
    title: "Delivery boxes that turn every order into an ad",
    summary: "Pizza and meal boxes that turn every delivery into an ad for the restaurant.",
    card: { value: "Kraft", label: "low-cost boxes with high impact" },
    services: ["Packaging Design","Food Packaging","Print Design","Restaurant Branding","Box Design"],
    format: "Pizza and meal boxes",
    problem: "On delivery apps, the box is the first thing the customer touches. Plain brown boxes make a restaurant forgettable. Needed low-cost kraft printing with high impact.",
    approach: [
      "Pizzuto pizza box with a doodle pattern and bold brand seal",
      "Single-slice pizza box with a playful “good to last slice” line",
      "SKP Foods meal box with simple icon pattern on kraft"
    ],
    result: "Unboxing photos tag the brand on social for free.",
    results: [
      "Low-cost one or two colour printing",
      "Repeat orders recognise the brand instantly"
    ]
  },
  {
    slug: "labels-merchandise",
    client: "Muse Foods & Food for Plants",
    cats: "brand",
    sector: "Muse Foods and Food for Plants",
    title: "Bottles and pouches that keep a brand in customers’ hands",
    summary: "Bottle labels and product pouches for a food brand and a gardening brand.",
    card: { value: "Labels", label: "bottles and product pouches" },
    services: ["Label Design","Packaging Design","Merchandise Design","Print Design","Brand Design"],
    format: "Bottle labels, pouch",
    problem: "Muse Foods needed branded bottles for clients and events. Food for Plants needed a pouch that explains a new product simply. Both needed to look premium on a small budget.",
    approach: [
      "Soft pink Muse label system across three bottle types",
      "Kraft pouch label for Food for Plants with clear usage steps"
    ],
    result: "Branded merchandise that keeps the business in clients’ hands.",
    results: [
      "A product that explains itself without a salesperson"
    ]
  },
  {
    slug: "skp-foods",
    client: "SKP Foods",
    cats: "brand",
    sector: "Corporate catering, Bangalore, Goa and Delhi",
    title: "A catering proposal built to win corporate contracts",
    summary: "A corporate events proposal and a Diwali package brochure for a women-led catering company.",
    card: { value: "5,000+", label: "meals a day capacity, shown in one deck" },
    services: ["Presentation Design","Pitch Deck","Brochure Design","Menu Design","Corporate Communication"],
    format: "Proposal deck, festive brochure",
    problem: "Competing for corporate catering contracts against much bigger players. Procurement teams wanted capacity, clients and compliance in one place. Diwali orders needed clear packages, not long WhatsApp menus.",
    approach: [
      "Events proposal: founder story, clientele wall, capacity and team",
      "Services split by event type: corporate, institutional, social, IT",
      "Diwali corporate brochure with drinks, menus and desserts",
      "Four priced packages from ₹450 to ₹700 per guest"
    ],
    result: "One document answers every buyer question before the call.",
    results: [
      "Shows 5,000+ meals a day capacity and a big-brand client list",
      "Fixed packages make it easy for HR teams to say yes"
    ]
  },
  {
    slug: "wood-brick-studio-lookbook",
    client: "Wood Brick Studio",
    cats: "brand",
    sector: "Architecture, interiors and construction studio",
    title: "A lookbook that sells the studio before the second meeting",
    summary: "A “Model to Remodel” lookbook that an interiors studio sends after every first call.",
    card: { value: "16", label: "page lookbook sent after every first call" },
    services: ["Brochure Design","Lookbook Design","Layout Design","Print Design","Interior Design Marketing"],
    format: "Lookbook, company profile",
    problem: "Prospects couldn’t picture the studio’s range from a few Instagram posts. Sales calls had nothing premium to follow up with. Process and pricing questions repeated on every call.",
    approach: [
      "16-page lookbook in a calm mauve and gold palette",
      "Room by room collections with colour palettes",
      "Commercial, renovation and construction sections",
      "5-step “how we work” page from first call to handover"
    ],
    result: "A premium follow-up that keeps the studio top of mind.",
    results: [
      "Clients arrive at the second meeting already sold on the style",
      "Fewer repeat questions about process"
    ]
  },
  {
    slug: "deloitte",
    client: "Deloitte",
    cats: "brand",
    sector: "Professional services",
    title: "An editorial report template that gets read past page two",
    summary: "An on-brand editorial report template for Deloitte, plus a data infographic.",
    card: { value: "Report", label: "template and infographic" },
    services: ["Report Design","Layout Design","Editorial Design","Infographic Design","Template Design"],
    format: "Report template, infographic",
    problem: "Corporate reports are long, dense and rarely read. Teams rebuild layouts from scratch for each report. Data tables and charts look different on every page.",
    approach: [
      "Cover, contents, about, feature and back cover layouts",
      "Editorial grid with pull quotes and image spreads",
      "Styled data tables and chart placeholders",
      "A data-led infographic for a public health topic"
    ],
    result: "Reports that people actually read past page two.",
    results: [
      "Teams drop in new content without redesigning",
      "Consistent data styling across every report"
    ]
  },
  {
    slug: "jio-bp-haldwani",
    client: "Jio-bp Fuel Station, Haldwani",
    cats: "brand",
    sector: "Fuel station, Rampur Road, Haldwani",
    title: "One Hindi message, readable from a moving truck",
    summary: "Launch and diesel offer creatives for a new Jio-bp fuel station in Haldwani.",
    card: { value: "₹1", label: "per litre cheaper, the one message" },
    services: ["Outdoor Advertising","Billboard Design","Print Ad Design","Hindi Creative","Retail Marketing"],
    format: "Hoardings, posters",
    problem: "A newly opened fuel outlet that local drivers didn’t know about yet. Truckers pick fuel stops on price and habit. The message had to be read from a moving vehicle.",
    approach: [
      "“Now Open” launch banner for the outlet",
      "Hindi offer campaign: diesel ₹1 per litre cheaper than market rate",
      "Relatable trucker and driver faces with the outlet in frame",
      "Horizontal hoarding and vertical poster formats"
    ],
    result: "One message, cheaper diesel, readable in two seconds.",
    results: [
      "Speaks the local customer’s language",
      "Launch and offer look like one campaign across sizes"
    ]
  },
  {
    slug: "mantri-developers",
    client: "Mantri Developers",
    cats: "brand",
    sector: "Mantri Serenity and Mantri Lithos, Bangalore",
    title: "Real estate ads that lead with the number buyers look for",
    summary: "Press ads and a referral campaign for two Bangalore residential projects.",
    card: { value: "₹76L", label: "2BHK price, first thing buyers read" },
    services: ["Print Ad Design","Real Estate Marketing","Newspaper Ads","Campaign Design","Copy Layout"],
    format: "Press ads, referral campaign",
    problem: "Most real estate ads show the same building render and a phone number. Buyers compare projects on price, size and location first. Existing residents were an untapped sales channel.",
    approach: [
      "Price-led ad: “Trawl the less, less is more” with 2BHK, 1,025 sq ft at ₹76L",
      "Newspaper ad with project highlights, specs and amenities",
      "Refer a Friend campaign for Lithos: win up to ₹1 lakh"
    ],
    result: "The key numbers are the first thing a buyer reads.",
    results: [
      "Referral turns happy residents into a sales team",
      "A fresh, idea-led look in a category of lookalike ads"
    ]
  },
  {
    slug: "now-tv",
    client: "NOW TV",
    cats: "brand",
    sector: "Streaming · London",
    title: "A student offer that sells the show and the price in one glance",
    summary: "A student subscription offer campaign built around one big show and one small price.",
    card: { value: "£1.66", label: "a month, given equal weight to the show" },
    services: ["Advertising Design","Poster Design","Banner Design","Campaign Design","Offer Marketing"],
    format: "Posters, digital banners",
    problem: "Students are price sensitive and ignore generic ads. The offer needed to feel exclusive and time-bound. Had to work as posters and as digital banners.",
    approach: [
      "Campaign built around the season launch everyone was talking about",
      "Offer badge and price, £1.66 a month, given equal weight to the show",
      "Three layouts: square, portrait poster and landscape banner"
    ],
    result: "The price and the reason to buy are both read in one glance.",
    results: [
      "Same campaign works on campus posters and online",
      "A template that can be reused for the next big show"
    ]
  },
  {
    slug: "3d-interiors",
    client: "3D Interiors & Floor Plans",
    cats: "brand",
    sector: "For interior designers and builders",
    title: "Renders that get homeowners to sign off before work starts",
    summary: "Photoreal kitchens, rooms, floor plans and exteriors for interior and architecture firms.",
    card: { value: "3D", label: "kitchens, rooms and floor plans" },
    services: ["3D Rendering","Interior Visualization","Architectural Visualization","3D Floor Plans","Autodesk 3ds Max"],
    format: "3D renders, floor plans",
    problem: "Homeowners can’t read technical drawings, so decisions stall. Changes discovered on site are expensive. Firms need portfolio images before a project is built.",
    approach: [
      "Modular kitchen renders with real materials and lighting",
      "3D top-down floor plans showing furniture and flow",
      "Living room, kids room and exterior cottage renders"
    ],
    result: "Faster client sign-off, with fewer changes on site.",
    results: [
      "Sell projects before they are built",
      "Portfolio-quality images for website and social"
    ]
  },
  {
    slug: "3d-product-visuals",
    client: "3D Product & Scene Visuals",
    cats: "brand",
    sector: "Product, environment and character work",
    title: "Hero product shots without a photoshoot",
    summary: "Studio-quality product shots, lit scenes and characters, made entirely in 3D.",
    card: { value: "3D", label: "product, scene and character renders" },
    services: ["3D Product Rendering","3D Modeling","Lighting","3D Animation","Autodesk Maya"],
    format: "Product renders",
    problem: "Product photography needs the product, the studio and the time. Some products and scenes are impossible to shoot. Launch and ad visuals are needed before samples exist.",
    approach: [
      "Car product renders in studio and on-road lighting",
      "Night-time environment scenes with complex lighting",
      "Moody still life and a rigged 3D character"
    ],
    result: "Hero product images without a photoshoot.",
    results: [
      "Any angle, colour or setting on demand",
      "Visuals ready before the product ships"
    ]
  },
  {
    slug: "ai-imagery",
    client: "AI Brand & Campaign Imagery",
    cats: "brand",
    sector: "For gyms, game studios and builders",
    title: "Campaign-ready visuals in days, not weeks",
    summary: "Logos, storefronts, game art and property visuals created with AI and finished by a designer.",
    card: { value: "AI", label: "logos, storefronts and key art" },
    services: ["AI Image Generation","Midjourney","Photoshop","Mockup Design","Digital Illustration"],
    format: "AI imagery, mockups",
    problem: "Small businesses need fresh visuals every week. Stock images look generic and photoshoots cost too much. Raw AI images often look fake and off-brand.",
    approach: [
      "23M gym mascot logo and storefront window graphic",
      "Number Fusion game key art for app store and ads",
      "Illustrated heritage art and a villa exterior for a builder"
    ],
    result: "Campaign-ready visuals in days, not weeks.",
    results: [
      "Brand-consistent, not generic AI output",
      "Pre-launch property and product visuals"
    ]
  },
  {
    slug: "wedding-invitations",
    client: "Wedding Invitation Suites",
    cats: "brand",
    sector: "Weddings across India",
    title: "Wedding suites that put every detail in one place",
    summary: "Complete wedding suites with monograms, invites and multi-day agendas.",
    card: { value: "Suites", label: "save the date, invite and agenda" },
    services: ["Invitation Design","Wedding Stationery","Graphic Design","Typography","Print Design"],
    format: "Digital and print invitations",
    problem: "Multi-day Indian weddings mean many events, venues and timings. Families want it traditional and personal at once. Guests share invites on WhatsApp, so they must read well on a phone.",
    approach: [
      "Monogram save the date, invite and agenda in one palette",
      "Floral and dreamcatcher themes chosen to suit each couple",
      "Event by event agenda with venue and QR code"
    ],
    result: "Guests have every detail in one place.",
    results: [
      "A premium, personal suite planners can resell",
      "Designed phone-first, print-ready as well"
    ]
  },
  {
    slug: "celebration-invitations",
    client: "Party & Housewarming Invitations",
    cats: "brand",
    sector: "Bangalore",
    title: "Personal invites, made fast, with the venue one tap away",
    summary: "Party and housewarming invites with custom illustration and venue QR codes.",
    card: { value: "Invites", label: "custom illustration and QR codes" },
    services: ["Invitation Design","Illustration","Graphic Design","Bilingual Design","Digital Invitations"],
    format: "Digital invitations",
    problem: "Hosts want a fun, personal invite, not a stock template. Venue directions are the most asked question. Needed a quick turnaround for WhatsApp sharing.",
    approach: [
      "Stag and Doe party invite with custom illustration",
      "Griha Pravesh invite in Kannada and English with a venue QR code"
    ],
    result: "Personal invites made quickly.",
    results: [
      "Fewer “where is it?” calls on the day"
    ]
  }
];

/* Brand work shown on the Work page without a case study page yet. */
module.exports.more = [
  { client: "Arqube Architecture", sector: "Architecture", text: "Brand direction, visual language and digital art direction for an architecture practice.", tags: "Brand Identity, Art Direction, Digital", orb: "o3" }
];
