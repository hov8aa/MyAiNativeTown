# myainativetown.com

Public site for the **AI Agent Training Program — Bhiwani / Hisar**.

21 September – 19 November 2026. Three live sessions a week, plus building on
the days between. 20 seats. Track A (foundations, and you build) and Track B
(you own a piece of the town agent and ship it).

The program is built in public. So is this site.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## How the page is put together

One file per topic. To change a section, open its file — you do not need to
understand the rest. `Building`/`NotJustACourse` and `Format`/`Outcomes`/
`DontJoin` render just their own column or card; `index.astro` groups them
into the shared two- and three-column rows.

```
src/
  pages/index.astro          the page: imports and groups the sections
  layouts/Base.astro         head, fonts, meta, site header/footer
  styles/global.css          Agents Force tokens — navy/gold, Poppins
  content/copy.md            the source copy, with open decisions logged
  components/
    Button.astro             the one CTA button — primary/secondary, sm/md/lg
    Field.astro               input / select / textarea, used by Register
    SiteHeader.astro          sticky nav + header CTA
    SiteFooter.astro          gold divider + GitHub/YouTube/LinkedIn
    sections/
      Hero.astro              headline + the offer in numbers
      Questions.astro         the four region-specific questions
      Building.astro          what we're building (paired with NotJustACourse)
      NotJustACourse.astro
      Tracks.astro            Track A and Track B
      Format.astro            paired with Outcomes + DontJoin
      Outcomes.astro          what you walk out with
      DontJoin.astro
      Register.astro          seats, dates, fee, the form
      Closing.astro
```

## Before this goes live

- [ ] Real registration form and payment link — the pay button points at a
      placeholder `#pay` in `Hero.astro`, `Register.astro` and `Closing.astro`
- [ ] Point the domain at the deploy

Open decisions are tracked at the bottom of `src/content/copy.md`.
