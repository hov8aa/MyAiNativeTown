# myainativetown.com

Public site for the **AI Agent Training Program — Bhiwani / Hisar**.

Cohort 01 starts 12 October 2026. Ninety days, three live sessions a week
(two hours each), in person in Bhiwani and Hisar — offline only, no online
option. Ten seats. ₹500 application fee; the ₹1,00,000 program fee is due
only once you're hired (a job offer, or self-employment/freelance/contract
work, of ₹3 LPA or more), paid as an agreed share of salary in
installments. Freshers track (foundations, and you build) and Experienced
track (you own a piece of the town agent and ship it).

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
    SiteHeader.astro          sticky nav + header CTA
    SiteFooter.astro          gold divider + GitHub/YouTube/LinkedIn
    sections/
      Hero.astro              headline + the offer in numbers
      Questions.astro         the four region-specific questions
      Building.astro          what we're building (paired with NotJustACourse)
      NotJustACourse.astro
      Tracks.astro            Freshers and Experienced
      Format.astro            paired with Outcomes + DontJoin
      Outcomes.astro          what you walk out with
      DontJoin.astro
      Register.astro          seats, dates, fee, the WhatsApp CTA
      Closing.astro
```

## Before this goes live

- [ ] Exact venue addresses in Bhiwani and Hisar — to be shared later
- [ ] Tools, platforms and detailed program content — to be shared soon
- [ ] Point the domain at the deploy

The cohort's goal-oriented format (no fixed end date or session count) and
the counselor-based payment flow (no online payment link) are intentional,
not gaps — see `assets/documents/rag/` and the decisions log at the bottom
of `src/content/copy.md`.
