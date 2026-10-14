"""Regenerate the Agentforce PDFs from their Markdown sources.

    pip install markdown weasyprint
    python scripts/build-docs.py

Edit assets/documents/source/*.md, run this, commit the PDFs, and re-upload
the three rag/ files to the Agentforce Data Library together.

Hindi needs a Devanagari font on the machine (e.g. Noto Sans Devanagari,
free from Google Fonts). Without it the Hindi FAQ renders as boxes.
"""
from pathlib import Path
import markdown
from weasyprint import HTML

ROOT = Path(__file__).resolve().parent.parent / "assets" / "documents"
SRC = ROOT / "source"
TARGETS = {
    "core-facts.md": ROOT / "rag" / "core-facts.pdf",
    "faq-english.md": ROOT / "rag" / "faq-english.pdf",
    "faq-hindi.md": ROOT / "rag" / "faq-hindi.pdf",
    "agentforce-topic-instructions.md": ROOT / "agentforce-topic-instructions.pdf",
}
CSS = """
@page { size: A4; margin: 22mm 20mm;
  @bottom-right { content: "Page " counter(page) " of " counter(pages);
                  font-size: 8pt; color: #666; } }
body { font-family: "Poppins", "Noto Sans Devanagari", sans-serif;
       font-size: 10.5pt; line-height: 1.5; color: #111; }
h1 { font-size: 17pt; margin: 0 0 6pt; }
h2 { font-size: 12pt; margin: 16pt 0 4pt; page-break-after: avoid; }
p, li { margin: 0 0 6pt; }
"""

for name, out in TARGETS.items():
    body = markdown.markdown((SRC / name).read_text(encoding="utf-8"))
    html = f"<html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>"
    HTML(string=html).write_pdf(out)
    print(f"{name} -> {out.relative_to(ROOT.parent.parent)}")
