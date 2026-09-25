# 🍫🌎 UUUB visual direction — Gal's editorial proposal, revised by Ari

**Status:** working brand and photography brief, not an approved campaign or live product catalog  
**For:** Gal (creative and copy), Ari (experience architecture), Cole (site implementation), Nathan (product decisions), Mike (commercial feasibility)  
**Related:** [Gal's future-brand issue #2](https://github.com/Sukonik/uuub/issues/2) · [current website](https://sukonik.github.io/uuub/) · [Cole's site handoff](COLE_WEBSITE_HANDOFF.md)

## The direction

Gal's move toward natural light, tactile surfaces, careful human gestures, and the real journey of cocoa is excellent for UUUB. It gives the origin story more depth than a glossy beverage render. Keep the warmth and ambition while giving every image an honest role.

**Working creative line:** *Cocoa has a place, a process, and a person behind it.*

The site's organizing sequence stays **origin → Impasto → cup**, with a morning ritual that is welcoming and quick to understand. Pink, gold, violet, or blue may appear as controlled accents in future specials; they should not displace cocoa, cream, and natural material as the foundation. The existing five pages remain Home, Impasto, Origins, Drinks, and Our House.

### One necessary distinction

**Documentary photography records a real person, place, and event.** A generated image can borrow documentary composition, light, and grain, but it cannot establish that a pictured person is a Grenadian farmer, a particular market exists as shown, or the depicted beans came from a named origin. Call such work an *editorial concept image* or *illustration* in internal records, and avoid placing it beside a factual farm or sourcing claim. For true producer stories, commission or license actual photography, obtain relevant permissions, and record the photographer, subject, location, date, and source.

Do not rely on “Leica,” “Sony,” “35mm,” or added film grain as proof of authenticity. They are style cues. A quieter composition and truthful caption will do more work than simulated camera metadata.

## What arrived in Gal's compressed Batch 1

The supplied `Gal Cocoa Images 1.zip` contains **four JPEGs** (approximately 1376–1408 × 768 pixels). It does **not** contain the four proposed Batch 2 images or the proposed site/brand-guide folders. The zip was reviewed for this brief; it has not been committed to the public repo or deployed to the site.

| Supplied filename | Visible content | Suggested exploration | Editorial limit |
| --- | --- | --- | --- |
| `Cocoa Pods.jpeg` | Bright pods clustered on a tree in dense foliage | Origins mood or a crop close-up | Do not claim a specific farm, country, variety, or supplier. |
| `Grenada Market.jpeg` | A woman presenting an open pod in a market setting with Grenada signs | Human-centered origin composition reference | Do not present the pictured person as a real farmer, partner, or named Grenadian vendor without provenance and consent. |
| `Cocoa Beans Dry.jpeg` | Beans in wooden drying trays overlooking a beach | Texture and process reference | Do not label it a verified UUUB supply process or locate it at Grand Anse on visual appearance alone. |
| `Making Impasto.jpeg` | A hand working glossy chocolate on a slab with a palette knife near a coast | Tactile craft concept | This is **not** the current README's proposed cocoa-and-water paste preparation. Do not caption it as the actual UUUB method. |

**Ari's assessment:** the market/person and beachfront processing scenes are visually striking, but their specificity makes them especially easy to mistake for reporting. Hold them as internal art direction or clearly identified concept imagery. If we want a Grenada producer story, the best next asset is a real, credited photograph from the producer or a photographer with permission.

## Revised Batch 2 shot briefs

These are **production briefs**, not statements that any photograph exists. For a factual origin story, shoot or license a real scene. If Gal generates a visual study first, record its generated status and keep captions generic. The images should feel observed, not staged to prove a sourcing relationship.

### 05 — Hands opening a cacao pod

**Visual:** close framing on hands, pod, tool, pulp, and surrounding shade; imperfect but legible textures. Use natural light and enough context to understand the action. Do not make a blade look casually unsafe for the sake of drama.

**Documentary route:** photograph an identified, consenting grower or processor at a verified location; ask how they actually open pods and caption the real process. Do not assign an age, occupation, or Grenadian identity from appearance.

**Concept-study prompt:** “Editorial visual study of hands opening a fresh cacao pod outdoors in soft tropical shade; natural skin and pod texture, restrained color, believable handling, candid composition, matte finish, no text or logos.” Mark the result **generated concept** in the asset record.

**Best page:** Origins, once an actual producer story exists. Until then, a generic process illustration on Impasto or Our House is safer.

### 06 — Four-origin tasting board

**Visual:** a restrained tabletop comparison of four broken chocolate samples, beans, and sample cards under window light. Let differences in form and surface make the composition; avoid identical slabs differentiated only by labels.

**Editorial rule:** a visual cannot verify Grenada, Venezuela, Peru, or Côte d'Ivoire. Print country/producer/lot names only after samples are sourced and logged. For a concept study, leave cards blank or mark them “Origin study,” then use a separate on-page caption saying origins are being explored.

**Concept-study prompt:** “Overhead culinary editorial visual study of four distinct broken dark-chocolate samples on worn wood, a few cacao beans and blank sample cards, soft side-window light, matte surfaces, natural crumbs and shadows, restrained color, no printed origin labels.”

**Best page:** Origins; could support a later tasting comparison of **actual traceable lots**.

### 07 — Cacao fermentation boxes

**Visual:** wooden fermentation boxes and cacao beans with believable wet-pulp texture and soft daylight. Include the setting only to the extent verified by a real producer.

**Revision to Gal's draft:** omit the asserted **cedar** wood and visible **steam** unless a documented site and scene support them. “Curing shed” and a specific Grenadian location also require confirmation. We should not turn atmospheric details into processing facts.

**Concept-study prompt:** “Editorial visual study of cacao beans with pale pulp in wooden fermentation boxes, diffuse daylight through a simple work shed, natural wood and wet-bean texture, earthy tones, unembellished composition, no people, signs, text, or implied named farm.”

**Best page:** Origins or a future sourcing/process story, with verified context.

### 08 — The Sovereign Wave, live pour

**Visual:** a close, physically plausible pour into a ceramic cup, with real-looking cocoa viscosity and blue foam texture. Keep the stainless counter quiet; let the hand and cup lead.

**Editorial rule:** **The Sovereign Wave is a proposed special**, not a drink now sold by UUUB. Blue spirulina foam, recipe, allergens, serving temperature, and whether it can be made consistently need testing. If used now, caption it as a *concept visualization* and keep it out of the live starter-drinks presentation.

**Concept-study prompt:** “Culinary product concept of thick dark cocoa being poured into a matte ceramic cup beside a pale blue foam experiment, morning café window light, realistic liquid texture and small bubbles, restrained composition, no brand marks, menu pricing, or storefront signage.”

**Best page:** a future “specials under development” gallery, after Nathan and Gal choose to show experiments publicly.

## Image system for Cole

**Now:** the text-and-emoji site stays the truthful baseline. A single strong crop or two may be introduced only after Nathan/Gal choose whether each is licensed real photography or labeled concept art. Avoid replacing the Origins list with an image that implies verified sourcing.

**Composition:** alternate a wide environmental frame, a close hand/process frame, and a quiet product still. Use negative space for headings. Avoid four adjacent full-bleed hero photographs or every section sharing the same card layout.

**Implementation:** keep a local source/rights manifest; export appropriately sized responsive files with `srcset`, dimensions, and descriptive alt text. Lazy-load below-the-fold images; reserve space to prevent layout shift. Do not burn labels, country names, or vital meaning into a photograph. Keep headings and captions in HTML, and respect reduced motion if any reveal is added. Test crop and text contrast on narrow phones before desktop.

**Caption pattern:** say what is actually known. For concept art, “Visual study of cacao pods and tropical foliage” is honest. For a real sourced story, use verified producer/lot/location details and a photo credit. Avoid “our farmer,” “our Grenada harvest,” or “UUUB barista” before those relationships or products exist.

### Minimum asset record

For every image considered for the live site, record:

```text
asset_id
original_filename
creator / photographer
source and permission or license
real photo / generated concept / composite / unknown
person consent and location verification, if relevant
pictured product or process verification
approved page and caption
alt text
approval owner and date
```

If provenance is unknown, keep the asset in review. Naming it “Grenada” in a filename is not verification.

## Package layout when assets are approved

Gal's proposed `01_site_build/menu.html/craft.html/story.html/locations.html` tree is a **separate mockup structure**. Cole's published site already uses `index.html`, `impasto.html`, `origins.html`, `drinks.html`, and `our-house.html`. Do not overwrite those routes with the mockup.

```text
docs/
  GAL_VISUAL_DIRECTION_AND_ASSET_GUIDE.md
assets/
  imagery/
    [approved descriptive filenames only]
  asset-manifest.md              # add when an image is approved for use
```

Keep Gal's original JPEGs and prompts in the working package; approved web exports can have neutral descriptive names such as `cacao-pod-study-01.webp` or `impasto-texture-concept-01.webp`. Use `grenada-` or a real producer name only when the origin and usage are verified. The current zip is **Batch 1 only**; do not create empty Batch 2 asset references in the live site.

## Decisions to move this forward

1. **Gal + Nathan:** select the two most useful compositions from Batch 1 for a design exploration, with their generated/real provenance established.
2. **Gal:** produce Batch 2 as either clearly tracked generated visual studies or commissioned/licensed documentary photos. For a real Grenada story, prioritize the latter.
3. **Ari + Cole:** mock one Origins section and one Impasto section at phone and desktop sizes; compare the quiet editorial treatment against the existing site.
4. **Recipe/product:** settle what “Impasto” depicts before approving a palette-knife preparation image as instructional.
5. **Nathan:** approve the images, captions, and placement before they replace any live site visuals. Close the loop on [issue #2](https://github.com/Sukonik/uuub/issues/2) with the chosen direction.

**North star:** make cocoa feel worth discovering, and make the people and places behind it visible when we can tell their real stories. 🍫🌎
