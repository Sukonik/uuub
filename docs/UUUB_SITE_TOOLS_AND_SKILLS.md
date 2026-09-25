# 🧰 UUUB site — tools, skills, and no-key capabilities

**For:** Cole (build), Ari (experience architecture), Gal (copy/marketing), Mike (finance), Nathan (approval).  
**Decision:** Build the public site with native web features and local editorial data. Agent skills may help Cole and Gal *make* the site; they are not runtime plugins for visitors.

## The two different meanings of “tool”

1. **Visitor-facing capability:** code or data loaded by `sukonik.github.io/uuub/`. For v1, HTML/CSS/JS, local JSON, inline SVG, and browser APIs. No API keys or accounts.
2. **Build-time agent skill or desktop tool:** instructions or software Cole/Gal may run while designing, writing, auditing, or researching. It is not bundled into the website and may have separate installation, model, hosting, or data costs.

An open-source repo is not automatically a free, no-key web API. Review its license, dependencies, install scripts, data access, and current maintenance before adding it to the workflow. Do not install the full social-media list merely because it is popular.

## ✅ Recommended for UUUB now

| Option | Role | Why it fits | Decision |
| --- | --- | --- | --- |
| **GoldenSunAI source** | Cole's direct code reference | Four CSS layers, shared responsive navigation, accessible base styles, static Pages workflow. | **Use the structure and adapt it**; UUUB tokens and visual motifs must be original. |
| **Local JSON + inline SVG** | Origin explorer | Source status, provenance, and map labels remain reviewable in Git; no remote runtime or key. | **Use in v1.** |
| **Browser APIs** | Sample drink builder, saved concept, sharing | `URLSearchParams`, optional `localStorage`, and progressive `navigator.share` deliver useful interaction without an account or key. | **Use selectively**, with fallbacks and no personal data. |
| [**Impeccable**](https://github.com/pbakaus/impeccable) | Design critique and visual refinement | A focused production UI workflow, responsive/contrast checks, and brand context support. | **Best first design-skill candidate** for Cole. Read its current installation behavior and pin the reviewed version before use. |
| [**UI/UX Pro Max**](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Pattern/reference search | Searchable UI and accessibility guidance, including HTML/CSS. | **Optional second opinion** for layout, touch targets, and component choices; do not let a generated palette override UUUB's brief. |
| [**Stop Slop**](https://github.com/hardikpandya/stop-slop) **or** [**Humanizer**](https://github.com/blader/humanizer) | Gal's copy pass | Catch generic prose and keep the morning/origin language human. | **Choose one**, then review every factual claim and protect UUUB's voice. |

Design skills are **not** themselves runtime APIs. They can suggest implementation details; Cole still owns the final code, and Ari/Nathan own the design decisions.

## 🔎 Useful later or for a specific deliverable

| Option | Best use | Why it waits |
| --- | --- | --- |
| [**Taste Skill**](https://github.com/Leonxlnx/taste-skill) | A separate visual exploration or critique | Opinionated design patterns may steer toward Tailwind/motion libraries; UUUB's first site is plain HTML/CSS/JS. Use ideas, not an automatic stack change. |
| [**Diagram Design**](https://github.com/cathrynlavery/diagram-design) | A precise cocoa → paste → drink explainer or origin/process illustration | Optional if simple hand-built SVG is insufficient. Customize its style guide to UUUB first. |
| [**Understand Anything**](https://github.com/Egonex-AI/Understand-Anything) | Codebase navigation once the site grows | Five static pages do not need a knowledge graph at launch. |
| [**Open Notebook**](https://github.com/lfnovo/open-notebook) | Internal, source-grounded cacao and supplier research | Separate research workspace, not a public website dependency; model/setup choices may involve keys or local compute. |
| [**OpenSEO**](https://github.com/every-app/open-seo) | Gal's keyword, competitor, and ranking research after launch | Self-hosted SEO data requires a **DataForSEO API key and paid usage**. Start with page titles, descriptions, alt text, internal links, and accessible content. |
| [**Strix**](https://github.com/usestrix/strix) | Authorized security assessment if UUUB later gains forms, accounts, checkout, or a backend | Its autonomous testing is unnecessary for a static concept site; use normal code review and browser QA now. |

## ⏸️ Not part of this website build

| Mentioned option | Reason |
| --- | --- |
| **I Have ADHD** | An optional agent response-format preference, not a site feature or needed dependency. Cole can simply ask for short, action-first handoffs. |
| **No AI Slop + Humanizer + Stop Slop together** | Overlapping editorial rules. Pick one and have Gal do the human final edit. |
| **Book to Skill** | Useful only if the team has a licensed, substantial reference corpus to convert. |
| **Omni Route** | Model/provider routing for coding agents, unrelated to UUUB's browser experience. |
| **AI Job Search** | Unrelated to the cocoa house. |
| **Front End Slides** | A presentation-deck workflow, not the responsive UUUB site. |
| **Open Generative AI** | A separate media-generation studio, not a web runtime component. Use rights-cleared, deliberate assets if visuals are needed. |

Names in the social-media list may refer to several similarly named repositories. Do not install one by name alone; open the exact upstream repo, check its current `SKILL.md`/README and license, and record the reviewed URL and commit before Cole uses it. The [skills.sh directory](https://skills.sh/) and [topics](https://skills.sh/topic) help discover candidates; they are a catalog, not a trust or performance guarantee.

## 🌐 No-key feature plan

**V1 (local and reliable):**

- `data/origins.json` with candidate/verified status; accessible SVG plus list.
- A three-state Impasto explainer with reduced-motion support.
- A sample drink builder with validated choices, URL state, optional local save, and Web Share/copy-link fallback.
- Page-level metadata and internal links, with no invented LocalBusiness address or prices.

**Later, only if content proves a need:** a public reference-data feed may enrich country context, but it must not stand in for verified cocoa producer/lot data. Verify the provider's current authentication, CORS, license, rate limits, availability, and data provenance before integration. Keep the local content path as the fallback.

## 📋 Cole's adoption checklist

1. Start from the [Cole website handoff](COLE_WEBSITE_HANDOFF.md) and GoldenSunAI source; implement the static shell first.
2. Use at most **one primary design skill** at a time. Read its source and review any scripts or automatic downloads before running it. Keep its instructions scoped to the design task.
3. Keep any optional tool out of the deployed bundle unless it provides a clear visitor benefit that native code cannot.
4. Preview the site at mobile, tablet, and desktop sizes; verify keyboard, reduced motion, missing-data fallback, Pages subpath, and links.
5. Ask Gal for a factual copy pass and Nathan for the final public-facing decision before publication.

**Primary references:** [GoldenSunAI source](https://github.com/Sukonik/goldensunai) · [skills.sh](https://skills.sh/) · [Impeccable](https://github.com/pbakaus/impeccable) · [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) · [OpenSEO cost notes](https://github.com/every-app/open-seo#costs).
