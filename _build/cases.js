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
    client: "Oceanus Study Abroad",
    cats: "tech brand",
    sector: "Study abroad consultancy",
    title: "A website and Instagram that turn anxious families into booked consultations",
    summary: "We built Oceanus’s website and run its organic Instagram, so students and parents meet a consultancy they can trust before they ever call.",
    card: { value: "Web + social", label: "website and Instagram from one team" },
    platform: "Wix + Instagram",
    role: "Web design, Wix development and organic Instagram",
    live: "oceanusstudyabroad.com",
    services: ["Wix", "Web design", "Lead capture", "Organic Instagram", "Social post design"],
    problem: "Choosing a study abroad consultant is a big, expensive decision for students and parents, and most consultancies look the same online: stock photos, flags and busy flyers. Oceanus needed a website that shows its services, destinations and track record clearly, and an Instagram that backs it up every week.",
    approach: [
      "A website hero built around one action: book a free consultation",
      "A six-step service journey, from course choice to life after arrival",
      "A university logo strip with a clear disclaimer, building trust without overclaiming",
      "Illustrated country cards, colour-coded track record stats, student testimonials and a short enquiry form",
      "On Instagram: launch posts that explain every service in one look",
      "A destination series with one template per country, so new posts take minutes, not days"
    ],
    result: "One consistent story from the first Instagram post to the consultation form, built to get families to book that first call.",
    organicNote: "Launch and destination posts for Oceanus’s Instagram, in the same calm look as the website."
  },
  {
    slug: "bangalore-bag-company",
    client: "Bangalore Bag Company",
    cats: "brand",
    sector: "Sustainable totes · Bengaluru",
    title: "Every pop-up stall now brings in new followers and free content",
    summary: "Organic Instagram for an eco tote brand: a follow-for-a-discount offer at every stall, launch content for new collections, and posts that sell its corporate gifting range.",
    card: { value: "Organic", label: "stall buyers turned into followers" },
    services: ["Organic Instagram", "Launch campaigns", "Corporate gifting content", "Event marketing", "Customer content"],
    problem: "Bangalore Bag Company makes sustainable raw cotton totes and sells them at pop-ups, at events, online and as corporate gifts. Every stall brought sales, but those buyers left without becoming part of the brand online, and companies looking for gifts had no reason to think of them.",
    approach: [
      "Ran a follow-for-a-discount offer at every stall: buyers followed the page and got an instant discount",
      "Photographed happy buyers with their totes and turned them into posts",
      "Launched new collections with coming-soon teasers (Bengaluru in three scripts) and the “Carry Happiness, One Tote at a Time” campaign",
      "Created content for the corporate gifting range, showing the totes as branded gifts for teams and events",
      "Shared customer stories, a brand ambassador post and product details",
      "Posted timely local moments, like the RCB win, to keep the brand part of the city"
    ],
    result: "Every stall now produces followers and content at the same time, and the same feed now speaks to companies buying gifts as well as shoppers.",
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
    slug: "komunitea",
    client: "KomuniTea",
    cats: "brand",
    sector: "Craft kombucha · Goa & Bengaluru",
    title: "A craft kombucha brand that sells itself from a crowded café fridge",
    summary: "Brand design for a craft kombucha maker: the wordmark, a label for every flavour and café point of sale, all built as one system.",
    card: { value: "Brand", label: "wordmark, flavour labels and café kit" },
    services: ["Brand design", "Logo design", "Label design", "Point of sale"],
    format: "Brand identity, labels, café poster",
    problem: "Kombucha is still new to most buyers, so the bottle has to explain itself. KomuniTea sells mainly through partner cafés, where it competes with every other drink in the fridge, and customers kept mixing up its flavours.",
    approach: [
      "A hand-lettered KomuniTea wordmark with a tropical, fun personality",
      "A label system where each flavour gets its own illustrated scene and colour",
      "An “Ask for a bottle here” poster and tent card for partner cafés"
    ],
    result: "Bottles that stand out in a crowded café fridge and tell the brand story on their own.",
    results: [
      "Customers can tell the flavours apart at a glance",
      "Partner cafés get ready-made point of sale material"
    ]
  },
  {
    slug: "house-of-tapri",
    client: "House of Tapri",
    cats: "brand",
    sector: "Tea café",
    title: "A tea café built from scratch: the brand, the café and its interiors",
    summary: "We created House of Tapri’s brand, then helped build the café itself and designed its interiors, so the cup, the counter and the room all tell one story.",
    card: { value: "Cup to café", label: "the brand, the café setup and the interiors" },
    services: ["Brand identity", "Café concept & setup", "Interior design", "Packaging mockups"],
    role: "Brand identity, café setup and interior design",
    format: "Logo, packaging, café, interiors",
    problem: "A new tea café needed more than a logo. The owner needed a brand that feels local, warm and premium, a café to put it in, and interiors that make people want to sit down and come back. Every piece had to match, from the takeaway cup to the walls.",
    approach: [
      "A kettle-and-cup logo mark with a hand-crafted feel, in warm brown, cream and terracotta",
      "Realistic mockups on takeaway bags, cups, tea pouches and mugs, so the owner approved the brand before paying for any printing",
      "Took the brand off the screen and into the café, helping plan and set up the space itself",
      "Designed the interiors in the same warm palette, so the room feels like the brand"
    ],
    result: "One brand, from the cup in your hand to the room you sit in.",
    results: [
      "The owner signed off every item before spending on print",
      "Café, takeaway and retail shelf all look like one brand"
    ]
  },
  {
    slug: "shivalli",
    client: "Shivalli",
    cats: "brand",
    sector: "Traditional foods & sweets",
    title: "Heritage food packs that printed right the first time",
    summary: "Ready-meal cartons and traditional sweet packs that look heritage and modern at the same time.",
    card: { value: "Packaging", label: "heritage packs that hold their own next to national brands" },
    services: ["Packaging design", "Dieline design", "Print design", "Label design"],
    format: "Carton, sweets sleeve",
    problem: "Shivalli was taking heritage recipes like khichdi and Mysore Pak into retail, next to modern national brands. The packs had to look traditional and modern at once, and the cartons had to fit the printer’s die exactly, because one mistake means paying for a full reprint.",
    approach: [
      "Khichdi carton designed on the full flat dieline, with an illustrated story panel",
      "Warm, appetising colour blocking that reads from a distance",
      "Mysore Pak sleeve with a traditional recipe cue and a window"
    ],
    result: "Printed right the first time on the supplier’s die.",
    results: [
      "Stands out next to national brands on the shelf",
      "The pack tells the heritage story, so the shelf does the selling"
    ]
  },
  {
    slug: "achappam",
    client: "Achappam",
    cats: "brand",
    sector: "Homemade Kerala snacks",
    title: "A homemade snack, packaged to sell as a premium gift",
    summary: "Pouch, gift box and launch poster that let a homemade Kerala snack charge a premium price.",
    card: { value: "Premium", label: "a homemade snack, packed and priced as a gift" },
    services: ["Packaging design", "Pouch design", "Gift box design", "Mockups"],
    format: "Pouch, gift box, poster",
    problem: "Homemade snacks usually sell in plain plastic at low prices. The owner wanted to sell Achappam as a premium, giftable product, with packs that work in shops, online and at festivals.",
    approach: [
      "A deep, rich palette with a Kerala heritage pattern",
      "Script wordmark and a hero product shot on the front",
      "Matching pouch, gift box and launch poster"
    ],
    result: "Packaging that supports a premium price.",
    results: [
      "Giftable for festivals and corporate hampers",
      "One look across the shelf, online listings and social"
    ]
  },
  {
    slug: "delivery-boxes",
    client: "Takeaway & Delivery Boxes",
    cats: "brand",
    sector: "Pizzuto, slice boxes & SKP Foods",
    title: "Delivery boxes that turn every order into an ad",
    summary: "Pizza and meal boxes that make every delivery an ad for the restaurant, on low-cost kraft printing.",
    card: { value: "Kraft", label: "low-cost boxes that make every delivery an ad" },
    services: ["Packaging design", "Box design", "Restaurant branding", "Print design"],
    format: "Pizza and meal boxes",
    problem: "On delivery apps, the box is the first thing a customer touches. A plain brown box makes a restaurant forgettable, but printed boxes have to stay cheap because they are thrown away after every order.",
    approach: [
      "Pizzuto pizza box with a doodle pattern and a bold brand seal",
      "Single-slice pizza box with a playful “good to the last slice” line",
      "SKP Foods meal box with a simple icon pattern on kraft"
    ],
    result: "Boxes customers photograph and tag, which puts the brand on social for free.",
    results: [
      "Low-cost one or two colour printing",
      "Repeat customers recognise the brand instantly"
    ]
  },
  {
    slug: "labels-merchandise",
    client: "Muse Foods & Food for Plants",
    cats: "brand",
    sector: "Food & gardening brands",
    title: "Bottles and pouches that keep a brand in customers’ hands",
    summary: "Bottle labels for a corporate dining brand and a product pouch for a gardening brand.",
    card: { value: "Labels", label: "bottles and pouches that explain themselves" },
    services: ["Label design", "Packaging design", "Merchandise design", "Print design"],
    format: "Bottle labels, pouch",
    problem: "Muse Foods wanted branded bottles to hand to clients and at events. Food for Plants needed a pouch that explains a new product without a salesperson. Both had to look premium on a small budget.",
    approach: [
      "A soft pink Muse label system across three bottle types",
      "A kraft pouch label for Food for Plants with clear usage steps"
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
    sector: "Corporate catering · Bengaluru, Goa & Delhi",
    title: "A catering proposal built to win corporate contracts",
    summary: "A corporate events proposal and a Diwali package brochure for a women-led catering company.",
    card: { value: "5,000+", label: "meals a day, the capacity the deck proves to buyers" },
    services: ["Proposal deck", "Brochure design", "Menu design", "Corporate communication"],
    format: "Proposal deck, festive brochure",
    problem: "SKP Foods competes for corporate catering contracts against much bigger players. Procurement teams want capacity, clients and compliance in one place, and Diwali orders needed clear packages instead of long menus sent over WhatsApp.",
    approach: [
      "Events proposal with the founder story, client wall, capacity and team",
      "Services split by event type: corporate, institutional, social and IT",
      "A Diwali corporate brochure with drinks, menus and desserts",
      "Four priced packages from ₹450 to ₹700 per guest"
    ],
    result: "One document that answers every buyer question before the call.",
    results: [
      "Shows 5,000+ meals a day of capacity and a big-brand client list",
      "Fixed packages make it easy for HR teams to say yes"
    ]
  },
  {
    slug: "wood-brick-studio-lookbook",
    client: "Wood Brick Studio",
    cats: "brand",
    sector: "Architecture, interiors & construction",
    title: "A lookbook that sells the studio before the second meeting",
    summary: "A 16-page “Model to Remodel” lookbook the studio sends after every first call.",
    card: { value: "16", label: "page lookbook sent after every first call" },
    services: ["Lookbook design", "Brochure design", "Layout design", "Print design"],
    format: "Lookbook, company profile",
    problem: "Prospects couldn’t picture the studio’s full range from a few Instagram posts, and after a first call the team had nothing premium to send. The same questions about process and pricing came up on every call.",
    approach: [
      "A 16-page lookbook in a calm mauve and gold palette",
      "Room-by-room collections with their colour palettes",
      "Commercial, renovation and construction sections",
      "A five-step “how we work” page, from first call to handover"
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
    card: { value: "Report", label: "an editorial template teams reuse" },
    services: ["Report design", "Editorial design", "Infographic design", "Template design"],
    format: "Report template, infographic",
    problem: "Corporate reports are long, dense and rarely read past the first pages. Teams were rebuilding layouts from scratch for each report, and tables and charts looked different on every page.",
    approach: [
      "Cover, contents, about, feature and back cover layouts",
      "An editorial grid with pull quotes and image spreads",
      "Styled data tables and chart placeholders",
      "A data-led infographic on a public health topic"
    ],
    result: "Reports people actually read past page two.",
    results: [
      "Teams drop in new content without redesigning",
      "Consistent data styling across every report"
    ]
  },
  {
    slug: "jio-bp-haldwani",
    client: "Jio-bp Fuel Station, Haldwani",
    cats: "brand",
    sector: "Fuel station · Haldwani",
    title: "One Hindi message, readable from a moving truck",
    summary: "Launch and diesel offer creatives for a new Jio-bp fuel station on Rampur Road, Haldwani.",
    card: { value: "Hindi", label: "one offer, readable from the highway" },
    services: ["Outdoor advertising", "Hoarding design", "Print ads", "Hindi creative"],
    format: "Hoardings, posters",
    problem: "A new fuel station that local drivers didn’t know about yet. Truck drivers choose where to fill up on price and habit, and they read a hoarding from a moving vehicle, so the message had a second or two to land.",
    approach: [
      "A “Now Open” launch banner for the outlet",
      "A Hindi offer campaign: diesel ₹1 a litre cheaper than the market rate",
      "Relatable truck driver faces, with the outlet in the frame",
      "Horizontal hoarding and vertical poster formats"
    ],
    result: "One message, cheaper diesel, readable in a glance.",
    results: [
      "Speaks the local customer’s language",
      "Launch and offer look like one campaign across every size"
    ]
  },
  {
    slug: "mantri-developers",
    client: "Mantri Developers",
    cats: "brand",
    sector: "Real estate · Bengaluru",
    title: "Real estate ads that lead with the number buyers look for",
    summary: "Press ads and a referral campaign for Mantri Serenity and Mantri Lithos, two Bengaluru residential projects.",
    card: { value: "Price-first", label: "press ads and a resident referral campaign" },
    services: ["Print ads", "Newspaper ads", "Real estate marketing", "Campaign design"],
    format: "Press ads, referral campaign",
    problem: "Most real estate ads show the same building render and a phone number. Buyers compare projects on price, size and location first, and the developer’s existing residents were a sales channel nobody was using.",
    approach: [
      "A price-led ad: “Trawl the less, less is more”, with a 1,025 sq ft 2BHK at ₹76L",
      "A newspaper ad with project highlights, specs and amenities",
      "A Refer a Friend campaign for Lithos: residents could win up to ₹1 lakh"
    ],
    result: "The numbers buyers care about are the first thing they read.",
    results: [
      "The referral campaign turns happy residents into a sales team",
      "A fresh, idea-led look in a category of lookalike ads"
    ]
  },
  {
    slug: "now-tv",
    client: "NOW TV",
    cats: "brand",
    sector: "Streaming · UK",
    title: "A student offer that sells the show and the price in one glance",
    summary: "A student subscription campaign built around one big show and one small monthly price.",
    card: { value: "3 formats", label: "poster, social and banner for a student offer" },
    services: ["Advertising design", "Poster design", "Banner design", "Offer campaigns"],
    format: "Posters, digital banners",
    problem: "Students are price-sensitive and scroll past generic ads. NOW TV’s student offer needed to feel exclusive and time-bound, and the same idea had to work on campus posters and as online banners.",
    approach: [
      "Built the campaign around the season launch everyone was talking about",
      "Gave the offer price (£1.66 a month) as much space as the show itself",
      "Three layouts: square post, portrait poster and landscape banner"
    ],
    result: "Students read the price and the reason to buy in one glance.",
    results: [
      "The same campaign works on campus posters and online",
      "A template that can be reused for the next big show"
    ]
  },
  {
    slug: "3d-interiors",
    client: "3D Interiors & Floor Plans",
    cats: "brand",
    sector: "For interior designers & builders",
    title: "Renders that get homeowners to sign off before work starts",
    summary: "Photoreal kitchens, rooms, floor plans and exteriors for interior and architecture firms.",
    card: { value: "3D", label: "homeowners say yes before work starts" },
    services: ["3D rendering", "Interior visualisation", "3D floor plans", "Autodesk 3ds Max"],
    format: "3D renders, floor plans",
    problem: "Homeowners can’t read technical drawings, so decisions stall and changes get discovered on site, where they are expensive. Firms also need portfolio images before a project is built.",
    approach: [
      "Modular kitchen renders with real materials and lighting",
      "Top-down 3D floor plans that show furniture and flow",
      "Living room, kids’ room and cottage exterior renders"
    ],
    result: "Faster client sign-off, with fewer changes on site.",
    results: [
      "Sell projects before they are built",
      "Portfolio-quality images for the website and social"
    ]
  },
  {
    slug: "3d-product-visuals",
    client: "3D Product & Scene Visuals",
    cats: "brand",
    sector: "Product, scene & character work",
    title: "Hero product shots without a photoshoot",
    summary: "Studio-quality product shots, lit scenes and characters, made entirely in 3D.",
    card: { value: "3D", label: "hero product shots, no photoshoot" },
    services: ["3D product rendering", "3D modelling", "Lighting", "Autodesk Maya"],
    format: "Product renders",
    problem: "Product photography needs the product, a studio and time. Some scenes are impossible to shoot, and launch and ad visuals are often needed before samples even exist.",
    approach: [
      "Car renders in studio and on-road lighting",
      "Night-time environment scenes with complex lighting",
      "A moody still life and a rigged 3D character"
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
    sector: "For gyms, game studios & builders",
    title: "Campaign-ready visuals in days, not weeks",
    summary: "Logos, storefronts, game art and property visuals created with AI and finished by a designer.",
    card: { value: "AI", label: "campaign visuals in days, finished by a designer" },
    services: ["AI image generation", "Midjourney", "Photoshop", "Mockups"],
    format: "AI imagery, mockups",
    problem: "Small businesses need fresh visuals every week. Stock images look generic, photoshoots cost too much, and raw AI images often look fake and off-brand.",
    approach: [
      "A mascot logo and storefront window graphic for 23M gym",
      "Number Fusion game key art for the app store and ads",
      "Illustrated heritage art and a villa exterior for a builder"
    ],
    result: "Campaign-ready visuals in days, not weeks.",
    results: [
      "On-brand, not generic AI output",
      "Property and product visuals ready before launch"
    ]
  },
  {
    slug: "wedding-invitations",
    client: "Wedding Invitation Suites",
    cats: "brand",
    sector: "Weddings across India",
    title: "Wedding suites that put every detail in one place",
    summary: "Complete wedding suites with monograms, invites and multi-day agendas.",
    card: { value: "Suites", label: "every event, venue and time in one place" },
    services: ["Invitation design", "Wedding stationery", "Typography", "Print design"],
    format: "Digital and print invitations",
    problem: "Multi-day Indian weddings mean many events, venues and timings. Families want the invite to feel traditional and personal, and guests forward it on WhatsApp, so it has to read well on a phone.",
    approach: [
      "Monogram save the date, invite and agenda in one palette",
      "Floral and dreamcatcher themes chosen to suit each couple",
      "An event-by-event agenda with venue and QR code"
    ],
    result: "Guests have every detail in one place.",
    results: [
      "A premium, personal suite that planners can resell",
      "Designed phone-first, and print-ready too"
    ]
  },
  {
    slug: "celebration-invitations",
    client: "Party & Housewarming Invitations",
    cats: "brand",
    sector: "Bengaluru",
    title: "Personal invites, made fast, with the venue one tap away",
    summary: "Party and housewarming invites with custom illustration and venue QR codes.",
    card: { value: "Invites", label: "custom art, with the venue one tap away" },
    services: ["Invitation design", "Illustration", "Bilingual design", "Digital invitations"],
    format: "Digital invitations",
    problem: "Hosts want a fun, personal invite, not a stock template. Directions to the venue are the question guests ask most, and the invite had to be ready quickly to share on WhatsApp.",
    approach: [
      "A Stag and Doe party invite with custom illustration",
      "A Griha Pravesh invite in Kannada and English with a venue QR code"
    ],
    result: "Personal invites, made quickly.",
    results: [
      "Fewer “where is it?” calls on the day"
    ]
  }
];

/* Brand work shown on the Work page without a case study page yet. */
module.exports.more = [
  { client: "Arqube Architecture", sector: "Architecture", text: "Brand direction, visual language and digital art direction for an architecture practice.", tags: "Brand Identity, Art Direction, Digital", orb: "o3" }
];
