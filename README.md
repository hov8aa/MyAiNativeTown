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

One file per section of the copy. To change a section, open its file — you do
not need to understand the rest.

```
src/
  pages/index.astro          the page: imports the sections in order
  layouts/Base.astro         head, fonts, meta
  styles/global.css          colours, type, spacing — all tokens live here
  content/copy.md            the source copy, with open decisions logged
  components/sections/
    Hero.astro               the four questions
    Building.astro           what we're building
    NotJustACourse.astro
    Tracks.astro             Track A and Track B
    Format.astro
    Outcomes.astro           what you walk out with
    DontJoin.astro
    Register.astro           seats, dates, fee
    Closing.astro
```

## Before this goes live

- [ ] Real registration form and payment link in `Register.astro`
- [ ] Which three days of the week, in `Format.astro`
- [ ] The homework hours, in `DontJoin.astro`
- [ ] Whether the cohort pauses for Diwali (6–10 November falls inside it)
- [ ] Point the domain at the deploy

Open decisions are tracked at the bottom of `src/content/copy.md`.
