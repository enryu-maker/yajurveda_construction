# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** committee members (chairman, secretary, treasurer) of older co-operative housing societies in Nashik who are evaluating whether and with whom to redevelop. They are cautious, accountable to dozens of members, and must justify the choice in a general body meeting. They need to understand the process, trust the partner, and have something credible to share with members.

**Secondary:** landowners and families needing development, title documentation or dispute help; investors considering the real estate investment plan; home buyers. Many visitors read Hindi or Marathi first.

## Product Purpose

Marketing and lead-generation website for Yajurved Construction Pvt. Ltd., Nashik (founded 2025). It explains five services and converts visitors into calls, WhatsApp messages and form enquiries:

1. Construction and housing society redevelopment
2. Property title verification and documentation
3. MahaRERA registration and approvals
4. Property litigation consultancy
5. Real estate financial consultancy

Success: a society committee understands how redevelopment with Yajurved works, trusts the company enough to make contact, and the site ranks for local intent searches ("society redevelopment Nashik", "MahaRERA consultant Nashik").

## Positioning

- **One roof:** construction, legal/documentation and finance handled by one accountable team instead of separate vendors.
- **Vastu / spiritual heritage:** ancient wisdom built into modern design ("Spirituality. Architecture. Legacy.").
- **Transparency:** a new company that is openly honest about being new; written timelines, documented decisions, no hidden terms.
- **Group strength:** associated with Sona Developers and Constructions, Sonali Creation's and Samana Way Reality.

## Operating Context

Redevelopment decisions in Maharashtra run through society general body meetings under Section 79A directives, developer tenders, PMC appointment, NMC approvals under UDCPR and MahaRERA registration. Committee members often forward links on WhatsApp to other members, frequently on mobile. Office: B No-3, P No-4, Shaligram Apartment, D'Souza Colony, Nashik 422002; Mon–Fri 11:00–17:00.

## Capabilities and Constraints

- Vite + React 19 SPA, prerendered to static HTML per route at build (`scripts/prerender.js`) for SEO/GEO; deployed on Vercel.
- Languages: English (`/`), Hindi (`/hi`), Marathi (`/mr`) via i18next with bundled JSON in `src/locales/`. Service pages (`/services/*`) are English-only for now.
- SEO head tags and JSON-LD live in `src/seo.js`; service page content in `src/content/services.js`.
- Forms submit to Formspree. Lead popup appears after 20 s, not on load.
- Main contact: +91 97370 73390, help.yajurved@gmail.com. Per-service contact numbers/emails were removed from homepage cards at the client's request.
- The financial plan's investment claims (7–10% yield, 24-month lock-in, "buy and sell at will") are pending legal review; always show the risk disclosure.

## Brand Commitments

- Legal name: **Yajurved Construction Pvt. Ltd.** (not "Yajurveda"). Hindi/Marathi: यजुर्वेद कंस्ट्रक्शन / यजुर्वेद कन्स्ट्रक्शन.
- Domain: www.yajurvedrealestate.com. Instagram: @yajurvedgroup.
- Tagline: "Building Dreams. Developing Lands. Redefining Spaces."
- Voice: honest, plain, reassuring; never overclaims experience or results.

## Evidence on Hand

- Logo and wordmark (`src/assets/Common/`), stock-style service imagery, four Instagram reels.
- **Not confirmed, do not fabricate:** names or photos of directors/team, CIN, MahaRERA number, GST, real project photos, client testimonials or reviews, project counts, awards, years of experience. Use placeholders only with explicit client approval.

## Product Principles

1. Trust before persuasion: a committee must be able to defend the choice to its members, so clarity and proof beat slogans.
2. Process is the product: explain each step of redevelopment and approvals plainly; that knowledge is what earns the call.
3. Honest about being new: never borrow credibility the company does not have.
4. Every language is first-class: Hindi and Marathi visitors get the same quality as English.
5. Contact is always one tap away, on mobile especially.

## Accessibility & Inclusion

Many users are older committee members on mobile phones: generous text sizes, strong contrast, tappable targets, and no content that depends on hover or autoplaying media.
