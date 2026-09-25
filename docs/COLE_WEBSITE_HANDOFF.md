# 🍫🌎 UUUB Cocoa House — website build handoff for Cole

**Project:** [Sukonik/uuub](https://github.com/Sukonik/uuub)  
**Reference implementation:** [GoldenSunAI](https://github.com/Sukonik/goldensunai) and its [live website](https://sukonik.github.io/goldensunai/)  
**Lead:** Cole, website development and deployment  
**Partners:** Ari, experience architecture; Gal, marketing and copy; Mike, finance; Nathan, product direction and final decisions  
**State:** design/build brief. UUUB is a concept, with no confirmed café, products for sale, suppliers, or launch date.

## 🎯 Assignment

Build a **five-page, mobile-first static website** that feels as clean, fast, and responsive as GoldenSunAI while looking unmistakably like **UUUB**. The site should make a visitor understand **Impasto** in seconds, discover cocoa origins, explore a proposed drink ritual, and recognize the morning-worker opportunity. It should never imply that the café is already open or that experimental drinks are finalized.

**UUUB mission:** To become the world's golden standard for cocoa by discovering exceptional origins, perfecting the Impasto, and making a remarkable cup of cocoa a beloved daily ritual.

**Public line:** **One ritual. A world of cocoa.**

**Core moment:** ☕ Coffee has espresso. 🍫 UUUB has Impasto. “One Impasto.”

## 🧬 Reuse GoldenSunAI's *structure*, build UUUB's own visual world

| Bring over and adapt | UUUB treatment |
| --- | --- |
 The four-layer CSS architecture: [tokens](https://github.com/Sukonik/goldensunai/blob/main/css/tokens.css), [base](https://github.com/Sukonik/goldensunai/blob/main/css/base.css), [components](https://github.com/Sukonik/goldensunai/blob/main/css/components.css), [responsive](https://github.com/Sukonik/goldensunai/blob/main/css/responsive.css) | Retain the organization, spacing discipline, readable measure, grids, and responsive rules; rename tokens to `--uuub-*` and create a distinct cocoa palette. |
 [Shared mobile navigation script](https://github.com/Sukonik/goldensunai/blob/main/js/main.js) | Adapt the small vanilla-JS approach for five UUUB pages. Keep `aria-expanded`, close control, Escape, focus return, and scroll locking. Improve focus containment and background inertness while the drawer is open. |
 Sticky header, compact footer, skip link, focus ring, card primitives, reusable hero and split layouts | Retain the utility and polish. Wordmark, photography/illustration, content hierarchy, decorative shapes, and motion must express cocoa rather than the GoldenSun technology portfolio. |
 GoldenSun's mobile-first 2-column transition near 640px and desktop navigation/card layout near 900px | Treat those as starting breakpoints; adjust to actual UUUB content and test narrow phones, tablets, and desktops. |
 [Static GitHub Pages workflow](https://github.com/Sukonik/goldensunai/blob/main/.github/workflows/static.yml) | Adapt only when ready to publish. Confirm the Pages source/settings and workflow success before putting live links in the README. |

The GoldenSun dark/gold atmosphere is a family resemblance, not a template to recolor. **Do not carry over its sun, globe, orbital system, gemstone theme picker, or product cards verbatim.** Its license permits code reuse with the applicable notices; keep each project's brand assets and attribution separate.

### 🎨 UUUB direction

- **Mood:** morning warmth, craft, origin, inviting discovery; sophisticated but approachable.
- **Surfaces:** espresso-dark cocoa, a warmer roasted-brown raised surface, and cream reading areas. Use gold as a precise highlight, with a restrained fruit or terracotta accent only if it helps the origin stories.
- **Visual signature:** a flowing Impasto ribbon or cocoa-to-paste sequence, origin stamps, bean/pod geometry, tactile paper or ceramic texture, and a map composed for UUUB. Prefer original assets or licensed photography.
- **Type:** crisp system-sans foundation, strong display scale, short readable text columns, and a distinctive `UUUB` wordmark. Keep `COCOA HOUSE` secondary. Resolve logo artwork separately; the final mark is not locked.
- **Rhythm:** generous hero, varied section compositions, purposeful cards, one memorable interactive moment per page. Avoid five identical card grids or a heavy animated landing page.
- **Motion:** small, meaningful transitions; honor `prefers-reduced-motion`. The story works without animation.
- **Suggested token draft, not a locked palette:** `--uuub-bg: #100b08`, `--uuub-surface: #241711`, `--uuub-cream: #f4ead9`, `--uuub-cocoa: #8c5032`, `--uuub-gold: #c99a55`. Check actual text and control contrast before finalizing.

## 🧭 Pages and navigation

| Page | Route | Core content | Primary action |
| --- | --- | --- | --- |
| 🏠 **Home** | `index.html` | Hero; Impasto in one glance; morning moment; origin preview; three drink cards; mission. | **Explore the ritual** → Impasto. |
| 🥄 **Impasto** | `impasto.html` | Cocoa → paste → drink, with a scroll or tap sequence; proposed preparation; ordering language; what remains in testing. | **Make it yours** → Drinks. |
| 🌎 **Origins** | `origins.html` | Accessible map and text list; candidate origins; a visible distinction between exploratory and verified sourcing. | **Explore drinks** → Drinks. |
| 🥤 **Drinks** | `drinks.html` | Straight Impasto, Latte, Freddo; conceptual customization; later ideas clearly separated. | **Build a sample Impasto** on page. |
| 🏠 **Our House** | `our-house.html` | Mission, cocoa culture, morning-worker story, future physical house/cocoa wall, team roles. | **Return to Home** or follow an actual update channel. |

Shared header: `UUUB` logo to Home; Impasto, Origins, Drinks, Our House links; obvious current-page state. Shared footer: mission line, site map, repo, concept status. Use **relative URLs** (`./origins.html`, `./css/base.css`) so the project works locally and under `/uuub/` on GitHub Pages. Each page needs unique `<title>`, description, social image only if owned, and one H1. No dead CTA or decorative button that does nothing.

### 🏠 Home screen sequence

1. **Hero:** UUUB Cocoa House / **One ritual. A world of cocoa.** A visually satisfying cocoa image or original graphic. Primary CTA goes to Impasto; secondary goes to Origins.
2. **The transformation:** three crisp states — cocoa, paste, drink — with real explanation and tactile visuals.
3. **The morning moment:** a commuter-sized story about taste, choice, pace, and hospitality. Avoid medical or energy guarantees.
4. **Choose an origin:** spotlight Grenada, Mexico, and Peru as **candidate** explorations, not confirmed inventory; display the wider map without invented tasting notes.
5. **Three ways to begin:** Impasto, Latte, Freddo, all labeled concept drinks.
6. **The house and mission:** people, craft, a future visible station and cocoa wall.
7. **Final action:** navigate to a deeper page; if no verified signup destination exists, end with a clear “Concept in development.”

## ✨ Insightful interactions with no API key

Implement as small progressive enhancements. **No third-party script is needed for v1.** Keep a working HTML experience if JavaScript is unavailable.

| Interaction | How it works | Truth and accessibility rule |
| --- | --- | --- |
| 🗺️ **Origin explorer** | An inline SVG or CSS map and a synchronized country list; selecting one shows a locally stored profile. | Every map action exists in the list and is keyboard accessible. Label `exploring` vs `verified`; no generic country flavor claim. |
| 🥄 **Impasto sequence** | Three tap/scroll states with concise text and a short visual transition. | Text explains all steps even with motion off; recipe is called a prototype. |
| 🥤 **Sample drink builder** | Choose origin, form, strength, and sweetness; render an order phrase and a shareable URL via `URLSearchParams`. | Clearly a concept preview, **not** an order, price, nutrition calculator, or claim about availability. Validate URL parameters against allowed values. |
| 🔖 **Save an exploration** | Optional `localStorage` for a favorite candidate origin or drink configuration. | Local-only, no account; site still works if storage is blocked. Do not store personal information. |
| 📤 **Share your cup** | Use `navigator.share` when available, with a copy-link fallback. | Trigger only on a user click; HTTPS and browser support vary. |

Treat local `data/origins.json` as a tiny editorial API. A record can contain `id`, `country`, `status`, `producer`, `lot`, `process`, `notes`, `source_url`, and `verified_at`. For candidate origins, keep producer/lot/notes empty and show “Exploring this origin.” Do not silently fill blanks with generated facts. The UI should degrade gracefully when the JSON is missing or fails to load.

**External API candidates are a later editorial decision.** Public endpoints and their key policies can change, and country reference data would not verify a cocoa farm or a tasting note. For launch, audited local content is more dependable than a live feed.

## 🧱 Architecture and implementation

```text
uuub/
├── index.html
├── impasto.html
├── origins.html
├── drinks.html
├── our-house.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── origins.js
│   └── drinks.js
├── data/
│   └── origins.json
├── assets/
│   ├── brand/
│   ├── imagery/
│   └── icons/
├── docs/
│   ├── COLE_WEBSITE_HANDOFF.md
│   └── UUUB_SITE_TOOLS_AND_SKILLS.md
├── .github/workflows/static.yml
├── LICENSE
└── README.md
```

Keep the site dependency-light, with semantic HTML and CSS doing most of the work. If using `fetch('data/origins.json')`, preview through a local static server (for example `python3 -m http.server 8000`) rather than relying on `file://` behavior. Keep page markup consistent; a build tool is unnecessary until repeated edits become painful. Prefer original CSS/SVG assets and optimized local images over third-party CDNs.

## 🧪 Delivery sequence and checks

1. **Foundation PR:** content map; UUUB tokens; shared header/footer/nav; five semantic pages with real cross-links; no fictional claims.
2. **Experience PR:** Impasto visual, origin explorer with local data, sample builder and share URL; keyboard and reduced-motion paths.
3. **Polish PR:** actual rights-cleared imagery; copy review with Gal; mobile/tablet/desktop visual checks; SEO metadata; asset optimization.
4. **Publish PR:** GitHub Pages workflow, live URL checks, then README homepage and page links. Publish only after Nathan approves the final public copy and design.

**Test at minimum:** 320/375px phones, ~768px tablet, ~1280px desktop; full nav and drawer; keyboard-only use; reduced motion; no horizontal scroll; no console errors; missing data fallback; every internal link; Pages subpath; readable contrast; performance on a mobile connection. Capture desktop/mobile screenshots in each visual PR. Test the share fallback in a browser without Web Share support.

**Content gate:** no unverified sourcing, farm, tasting, health, sustainability, location, menu price, or launch claim. “No crash,” “no jitters,” “heart healthy,” and “breakfast replacement” are not launch copy. Mike can test economics separately; Gal's public language and Nathan's approval govern the site.

**Handoff on each PR:** preview URL or reproducible local preview, changed pages, desktop/mobile screenshots, exact test result, commit/PR link, and next decision required. When the actual site is published, replace the README's “in development” note with direct working links to Home and each live page.

## 🔗 Reference links

- [UUUB README](https://github.com/Sukonik/uuub/blob/main/README.md)
- [GoldenSunAI CSS and navigation](https://github.com/Sukonik/goldensunai/tree/main/css) · [main.js](https://github.com/Sukonik/goldensunai/blob/main/js/main.js) · [Pages workflow](https://github.com/Sukonik/goldensunai/blob/main/.github/workflows/static.yml)
- [MDN: URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) · [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) · [Web Share](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- [UUUB tools and skills evaluation](UUUB_SITE_TOOLS_AND_SKILLS.md)
