# Agentforce knowledge assets

Source material for the AI agent that answers visitor questions on
myainativetown.com (Salesforce Agentforce, or equivalent).

## Where to edit: `source/`

The Markdown files in `source/` are the source of truth. Edit them (on
GitHub, the pencil icon is enough), commit to `main`, and the
**Build Agentforce PDFs** action regenerates every PDF below and commits it
back. To rebuild by hand: Actions tab → Build Agentforce PDFs → Run
workflow. Locally: `python scripts/build-docs.py`.

After any change, re-upload all three knowledge files to the Data Library
together.

## `rag/` — upload these to the Data Library

- `core-facts` — program overview, entry path (homework + two free
  sessions), schedule, fees, pay-after-hire rules, curriculum, tracks,
  eligibility, outcomes, how to apply, contact.
- `faq-english` — English FAQ.
- `faq-hindi` — Hindi/Hinglish FAQ.

All three restate the same facts as the live site. If a fact changes on the
site, change it in `source/` too — see `src/content/copy.md` for the site's
own source of truth.

**Prefer uploading the Markdown from `source/`** where the Data Library
accepts it. Text extracted from a PDF loses Devanagari vowel order, which
weakens retrieval for Hindi questions; Markdown keeps the headings intact for
section-aware chunking. The PDFs are kept for people and for tools that only
take PDF.

**No program-fee amount or salary-share percentage is published** — not on
the site, not in these files, not anywhere in this public repo. The counselor
and the written agreement carry those.

## `agentforce-topic-instructions` — NOT a knowledge document

This is **not** RAG content and must **not** be added to the Data Library or
any vector index. It's the Agentforce *topic* configuration (scope, tone,
hard rules like "never promise a guaranteed job" or "never state a fee
amount or salary-share percentage", handoff behavior, test utterances). Paste
it into the topic's instructions field.
