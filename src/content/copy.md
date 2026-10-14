# Enrollment page copy — source of truth

The live page is built from this. Sections here map one-to-one onto the files
in `src/components/sections/`.

Bracketed items are still open.

---

## Decisions log

**Closed — evolved program details (13 Oct 2026, from the Cohort 01 banners)**

The banners are now the source of truth for public copy. This supersedes the
"offline only" decision recorded further down.

- **Delivery is online + offline**, in Bhiwani and Hisar. Final verdict —
  `Hero.astro`, `Format.astro`, `NotJustACourse.astro` and the meta
  description now say so. The og-image's "Online + offline" line is correct.
- **No start date on the page.** Cohort 01 is shown as "applications open".
- **The entry path:** DM/call → homework evaluation (voice interview + one
  written Hypothesis→Actions→Expectations task) → two free sessions → decide
  at the end of session 2: pay ₹1,000, sign the notarised agreement, take a seat.
- **Rhythm:** after the free sessions, live sessions on alternate days, two
  hours, mentor present. Days in between: self-learning and building, each
  day a project with a log entry. Replaces Monday/Wednesday/Friday.
- **"Hired":** a job offer of ₹3 LPA or more; self-employment and freelance
  work earning ₹3 LPA or more also count. Replaces "a written offer from an
  organization" in the hero fine print.
- **Tracks stay Freshers / Experienced.** Freshers learn the software
  development life cycle first. The homework evaluation decides the track;
  Experienced is no longer limited to working engineers who code
  ("Engineer or not").
- **Two phone numbers:** +91 97284 85250 and +91 70153 30518. The WhatsApp
  deep link stays on 70153 30518.
- Hero headline now reads "Learn to build…" and the Hindi line is the
  banner's: "पहले सीखो। फ़ीस नौकरी लगने के बाद।"
- **Upfront fee is ₹1,000**, covering registration and the notary service
  for the agreement (replaces the ₹500 application fee). Refundability is
  not stated anywhere until it's decided.
- **Method: learners build agents again and again**, not one single agent.
  Freshers' outcome is now "Agents you built, running". The cohort's shared
  town agent (Building.astro, Experienced track) stays.
- **No program-fee amount is published** — not on the page, not in the
  agent's knowledge, not in this repo. The share of salary is set with the
  counselor and in the written agreement.

**Closed — pivoted to the pay-after-hired model (see pamphlet, Sept 2026)**

- Cohort: 10 seats (was 20). Starts 12 October 2026. Runs 90 days.
- Fee model changed: ₹500 application fee, non-refundable, upfront. The
  program fee is due only once "hired" and is payable in
  installments. This replaces the old flat ₹500-only fee.
- Target outcome stated on the page: the roles this program trains for pay
  ₹3–6 LPA.
- Three live sessions a week; building and self-learning on the other days.
- Track A / Track B renamed to **Freshers** / **Experienced** — same
  underlying split (foundations-and-build vs. own-a-layer-and-ship), new
  labels only.
- Homework is scoped to a goal, not a number of hours.
- The cohort does not pause for Diwali.
- Primary CTA across the page is now "DM 'AGENT' to know more", a WhatsApp
  deep link to +91 70153 30518 (`wa.me/917015330518?text=AGENT`), replacing
  the old "Pay ₹500" flow as the main funnel.
- The Register lead-capture form (name/WhatsApp/college/track/textarea) is
  removed — it wasn't wired to anything. WhatsApp is the one funnel now;
  Register.astro's right column is a plain "Apply on WhatsApp" card instead.
- YouTube: https://www.youtube.com/@AgentforceWithHov8a (footer link).
- The header's decorative waveform graphic on the source pamphlet is
  confirmed purely decorative — no audio/testimonial to embed.

**Closed — reconciled against the Agentforce knowledge docs (see
`assets/documents/rag/`, Sept 2026)**

The pamphlet said "online + offline"; the Core Facts / FAQ documents that
came after it are more detailed and contradict that on one point. Treating
the knowledge docs as the more authoritative, more recent source:

- ~~**Delivery is offline only, in person in Bhiwani and Hisar — there is no
  online option.**~~ *Superseded 13 Oct 2026: online + offline.* This corrects the pamphlet-era "online + offline"
  wording that was on the page in `Hero.astro` and `Format.astro`.
- Sessions are 2 hours each. ~~Monday/Wednesday/Friday~~ *Superseded 13 Oct
  2026: alternate days.*
- The program is intentionally goal-oriented: **no fixed end date and no
  fixed session count.** This isn't an open question to resolve — it's the
  model. The page's earlier derived "roughly 38 sessions" claim was wrong
  and has been removed rather than corrected to a different number.
- "Hired" has a precise, disclosable threshold: a job offer — or
  self-employment, freelance or contract work — of ₹3 LPA or more. Below
  ₹3 LPA doesn't count. A job that arrives within 1–3 months of the
  program counts too, per the student's written agreement.
- The ₹500 application fee is paid through the program's counselor (no
  online payment link); the program fee is paid as an agreed
  share of the student's salary, in installments, per a written agreement
  every student signs before joining. The exact percentage, installment
  amounts, and venue address are deliberately not published — those are
  set with the counselor, not disclosed on the page or by the answering
  agent (see the topic instructions in `assets/documents/`).
- Eligibility: final/pre-final year engineering students, and graduates of
  3- or 4-year degree programs, for the Freshers track. Working engineers
  who already code, for the Experienced track. No age limit. A laptop and
  internet connection, no minimum spec.

**Still open**

1. **What the Freshers track's "one real thing" is scoped to.** Deliberately
   loose in the copy; cannot stay loose in the room.
2. **Exact venue addresses in Bhiwani and Hisar** — to be shared later.
3. **Tools, platforms and detailed program content** — to be shared soon.
4. **Target job titles and placement partners** — not announced yet; the
   page should keep saying so rather than implying specific employers.

**Flagged**

- **The curriculum is day-numbered; the program is session-numbered**, and
  both need renumbering against the actual start, now that the page shows
  no date. Since there's no
  fixed end date, `Building.astro`'s three layers use generic "early/mid/
  final sessions" labels instead of specific session ranges — that's now
  the permanent phrasing, not a placeholder.

---

## Voice notes

Things that should survive any rewrite:

- The four hero questions are specific to this region on purpose. Generic
  examples kill the whole premise.
- "Most of it will resist" is the closing line. Don't soften it.
- The "Don't join if" section does more selling than a benefits list would.
- Never promise a recording. There isn't one.
