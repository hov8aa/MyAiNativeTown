// English page copy. Mirrors hi.ts key for key; src/content/copy.md is the
// source of truth for what the copy says.
const appFee = "₹1,000";

const en = {
  meta: {
    title: "AI Agent Course in Bhiwani & Hisar — Pay After You’re Hired",
    description:
      "Build real AI agents in 90 days, online or in Bhiwani & Hisar. Two free sessions, ₹1,000 to register, program fee only after you’re hired.",
    ogImageAlt: "MyAiNativeTown — AI Agent Training Program, Cohort 01, Bhiwani · Hisar",
    ogLocale: "en_IN",
  },

  dmCta: "DM “AGENT” to know more",

  header: {
    brandLoc: "Bhiwani · Hisar",
    nav: {
      questions: "The questions",
      building: "What we build",
      tracks: "Who it’s for",
      format: "Format",
      register: "Register",
      journal: "Journal",
    },
    cta: "DM “AGENT”",
    languageLabel: "Language",
  },

  hero: {
    eyebrow: "AI Agent Training Program · Cohort 01",
    title: "Learn to build AI agents in 90 days.",
    titleGold: "Pay only when you’re hired.",
    // The banner's tagline, echoed in the other language.
    echo: { text: "पहले सीखो। फ़ीस नौकरी लगने के बाद।", lang: "hi" },
    lead: "Engineer or not. If you want to build AI agents, there’s a seat for you.",
    secondaryCta: "See who this is for",
    fine: `Cohort 01 applications are open — 20 seats per town. It starts with two free sessions; the ${appFee} is paid only if you decide to join.`,
    offer: {
      eyebrow: "The whole offer",
      stats: [
        { value: appFee, label: "registration + notary" },
        { value: "₹0", label: "fees until you’re hired" },
        { value: "₹3–6 LPA", label: "the roles you train for" },
      ],
      facts: [
        { term: "Starts with", detail: "Two free sessions" },
        { term: "Seats", detail: "20 per town" },
        { term: "Format", detail: "Online + offline — Bhiwani · Hisar" },
      ],
      fine: "Job offer of ₹3 LPA or more. Written agreement before you join.",
    },
  },

  questions: {
    eyebrow: "The four questions",
    title: "Answer one of these ",
    titleGold: "in ninety days",
    titleEnd: ".",
    deck: "These are specific to Bhiwani and Hisar on purpose. Generic examples kill the premise. The blank line is yours to fill.",
    items: [
      {
        tag: "Kirana & retail",
        q: "Can an agent take the day’s udhaar off a shopkeeper’s notebook and onto his phone?",
      },
      {
        tag: "Coaching institutes",
        q: "Can it answer the same forty admission questions parents ask every evening — in Hindi?",
      },
      {
        tag: "Forms & schemes",
        q: "Can it tell someone which scheme they qualify for, and which four papers to carry?",
      },
      {
        tag: "Clinics",
        q: "Can it hold a clinic’s appointment book without the receptionist changing how she works?",
      },
    ],
  },

  building: {
    eyebrow: "What we’re building",
    title: "One town agent, ",
    titleGold: "teen layers mein",
    titleEnd: ".",
    deck: "Not nine demos. One agent for this district, built layer by layer in front of you, with every wrong answer logged where you can read it.",
    layers: [
      {
        tag: "Layer 01 · Early sessions",
        text: "The category walk. What the town actually asks for, written down before any model is touched.",
      },
      {
        tag: "Layer 02 · Mid sessions",
        text: "Tools, data and guardrails. The first wrong answer arrives here, and we keep it.",
      },
      {
        tag: "Layer 03 · Final sessions",
        text: "Into a real workflow, in one real shop or clinic. It moved the number, or it did not.",
      },
    ],
  },

  notJustACourse: {
    eyebrow: "Not just a course",
    title: "There is no certificate at the end. There is a thing that runs.",
    points: [
      "No pre-recorded videos. Every session is live — online, or in the room in Bhiwani and Hisar.",
      "Homework is set against a goal, not a number of hours. You are done when the thing works.",
      "The build log is public. Your work is visible to anyone who reads it — including the next employer.",
      "The cohort does not pause for Diwali. Sessions run through the festival period as usual.",
    ],
  },

  tracks: {
    eyebrow: "Freshers and experienced, twenty seats per town",
    title: "Pick the one you can ",
    titleGold: "actually finish",
    titleEnd: ".",
    deck: "Both tracks build. The difference is how much of the town agent you own by the end of the ninety days.",
    walkLabel: "You walk out with",
    freshers: {
      badge: "Freshers",
      title: "Foundations — and you still build.",
      body: "You first learn how software is made — the software development life cycle — then how an agent is put together, then you build agents again and again — each one small, each one working — until building one is routine.",
      who: "Right if you’re a final or pre-final year engineering student, or a graduate of a 3- or 4-year degree program — new to this, and want the ground under you before you carry weight.",
      walk: "Agents you built, running",
    },
    experienced: {
      badge: "Experienced",
      title: "You own a piece of the town agent, and ship it.",
      body: "A named layer of the real thing is yours — a tool, a data path, a guardrail. It goes live with your name on the commit, or it does not go live.",
      who: "Right if you already build software and want something harder than a tutorial. The homework evaluation before the free sessions shows which track fits you. No age limit.",
      walk: "A shipped layer in production",
    },
  },

  format: {
    eyebrow: "Format",
    title: "Alternate days. Live, online and offline.",
    lines: [
      "After the two free sessions, live sessions run on alternate days, two hours each, with your mentor present. Goal-oriented, so there’s no fixed session count or end date.",
      "Online, or in person in Bhiwani and Hisar. Just a laptop and internet.",
      "On the days in between you learn on your own and build. You build agents again and again — repetition is the method. Every day is a project with a log entry: hypothesis, actions, expectations.",
      "Never a recording. The room is the product.",
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    title: "What you walk out holding.",
    lines: [
      "An agent that runs for someone other than you.",
      "A shot at the ₹3–6 LPA roles this program trains for — that offer is what triggers the program fee, not a deadline.",
      "A public build log with your name on it, readable by any employer.",
      "The habit of writing the number down before writing the code.",
    ],
  },

  dontJoin: {
    eyebrow: "Don’t join if",
    title: "Yeh aapke liye nahi hai, agar —",
    reasons: [
      "you want a certificate more than a working thing.",
      "you cannot show up live every other day, and log your own work on the days in between, for ninety days.",
      "you expect to be handed the goal instead of chasing it between sessions.",
      "you need the recording, because there isn’t one.",
    ],
  },

  register: {
    eyebrow: "Register",
    title: "20 seats per town. ",
    titleGold: "Ek hi cohort.",
    lead: `${appFee} covers registration and the notary for your agreement. The program fee is due only after you have a job offer of ₹3 LPA or more, payable as an agreed share of salary in installments — ${appFee} is the only thing you pay before you’re hired, and only after you’ve seen two free sessions.`,
    steps: [
      "DM “AGENT” on WhatsApp, or call +91 70153 30518.",
      "Do the homework evaluation — a short voice interview and one written task. Doing it at all is the first filter.",
      "Attend two free sessions and build your first small agent before paying anything.",
      `Decide at the end of session 2: pay the ${appFee}, sign the notarised agreement, take your seat. Twenty seats per town, first come first held.`,
    ],
    footnote: "Questions before you apply? Message or call, and say whether you’re a fresher or already working. Vague inputs get vague replies.",
    card: {
      eyebrow: "Apply on WhatsApp or call",
      lead: "Message “AGENT” and tell me whether you’re a fresher or already working, plus the shop, clinic or office you’d point an agent at first.",
      fine: `Opens WhatsApp on +91 70153 30518. ${appFee} registration fee, paid only after the free sessions, and there is no waitlist once seats are filled.`,
    },
  },

  instagram: {
    eyebrow: "Latest on Instagram",
    heading: "See what the town is building this week.",
    follow: "Follow @myainativetown",
  },

  closing: {
    eyebrow: "Before you decide",
    statement: "You will spend ninety days pushing a real thing into a town that did not ask for it. ",
    statementGold: "Most of it will resist.",
  },

  footer: {
    line: "myainativetown.com — Unfinished Innovations LLP. ©2026.",
  },
};

export default en;
export type Copy = typeof en;
