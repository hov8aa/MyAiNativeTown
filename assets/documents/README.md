# Agentforce knowledge assets

Source material for the AI agent that answers visitor questions on
myainativetown.com (Salesforce Agentforce, or equivalent).

## `rag/` — upload these to the Data Library

These three documents are the RAG knowledge base. Whatever service indexes
this repo's assets for the answering agent should point at this folder.

- `core-facts.pdf` — program overview, dates, fees, the pay-after-hire
  rules, curriculum, tracks, eligibility, outcomes, how to apply, contact.
- `faq-english.pdf` — English FAQ.
- `faq-hindi.pdf` — Hindi/Hinglish FAQ.

All three restate the same facts as the live site (cohort dates, ₹500
application fee, ₹1,00,000 pay-after-hire program fee, 10 seats, Freshers/
Experienced tracks, WhatsApp application flow). If a fact changes on the
site, update it here too — see `src/content/copy.md` for the site's own
source of truth.

The source doc's own authoring notes recommend exporting these as Markdown
or HTML (with section-aware chunking and title-prepending) rather than PDF,
for cleaner retrieval chunks. They're stored here as the PDFs that were
supplied; if a Markdown/HTML export becomes available from the source
document, prefer that for the actual Data Library upload.

## `agentforce-topic-instructions.pdf` — NOT a knowledge document

This is **not** RAG content and must **not** be added to the Data Library or
any vector index. It's the Agentforce *topic* configuration (system
instructions, scope, tone, hard rules like "never promise a guaranteed job"
or "never say the ₹500 fee is refundable", handoff behavior, test
utterances) that governs the agent on every turn regardless of what the
retriever returns. It's kept in the repo for version history alongside the
knowledge docs it pairs with, but it belongs pasted into the topic's
instructions field, not the library.
