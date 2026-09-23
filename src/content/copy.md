# Enrollment page copy — source of truth

The live page is built from this. Sections here map one-to-one onto the files
in `src/components/sections/`.

Bracketed items are still open.

---

## Decisions log

**Closed — pivoted to the pay-after-hired model (see pamphlet, Sept 2026)**

- Cohort: 10 seats (was 20). Starts 12 October 2026. Runs 90 days — no
  end date confirmed yet, see open items.
- Fee model changed: ₹500 application fee, non-refundable, upfront. The
  ₹1,00,000 program fee is due only once "hired" — defined as a written
  offer from an organization — and is payable in installments. This
  replaces the old flat ₹500-only fee.
- Target outcome stated on the page: the roles this program trains for pay
  ₹3–6 LPA.
- Delivery is online and offline, from Bhiwani and Hisar. A laptop and
  internet is the only requirement.
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

**Still open**

1. **The exact end date of the 90-day cohort.** Only the 12 October start
   is confirmed. Session-count claims on the page ("roughly 38 sessions")
   are derived from 90 days × 3/week and should be corrected once the real
   end date and any breaks are known.
2. **How the ₹500 application fee and the ₹1,00,000 installment payments
   are actually collected.** Needs a Razorpay/UPI link for the ₹500, and a
   defined installment plan (amounts, schedule, what happens if someone is
   hired mid-program) for the ₹1,00,000. The page's fee CTAs currently point
   at a WhatsApp DM, not a payment page.
3. **What the Freshers track's "one real thing" is scoped to.** Deliberately
   loose in the copy; cannot stay loose in the room.

**Flagged**

- **The curriculum is day-numbered; the program is session-numbered**, and
  both need renumbering against the new 12 October start and undetermined
  end date. `Building.astro`'s three layers currently use generic
  "early/mid/final sessions" labels instead of specific session ranges
  until the real cadence is confirmed.

---

## Voice notes

Things that should survive any rewrite:

- The four hero questions are specific to this region on purpose. Generic
  examples kill the whole premise.
- "Most of it will resist" is the closing line. Don't soften it.
- The "Don't join if" section does more selling than a benefits list would.
- Never promise a recording. There isn't one.
