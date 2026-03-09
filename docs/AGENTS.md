# DOCS KNOWLEDGE BASE

## OVERVIEW
`docs/` is the primary authoring surface. Shared content rules live here; language-specific differences belong in `docs/zh/AGENTS.md` and `docs/en/AGENTS.md`.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Landing pages | `docs/{lang}/index.md` | Keep language homes aligned |
| Top navigation | `docs/{lang}/_nav.json` | Language-level nav only |
| Section navigation | `docs/**/_meta.json` | Topic ordering and labels |
| LLM-facing indexes | `docs/**/llms.txt` | Present in many but not all subtrees |
| Shared visual styling | `docs/styles/theme.css` | Global docs theme layer |
| Static assets | `docs/public/` | Referenced by docs pages |

## SHARED CONVENTIONS
- Follow the existing route shape: `docs/{lang}/{domain}/...`.
- Match the file format already used by neighboring content (`.md` or `.mdx`); do not normalize whole sections opportunistically.
- When adding a page, update the nearest `_meta.json` and any affected `_nav.json`.
- Reuse the existing domain buckets (`golang`, `mysql`, `redis`) instead of creating new top-level topic trees lightly.
- Keep bilingual structure aligned when the topic already exists in both languages; note intentional asymmetry explicitly.

## ANTI-PATTERNS
- Do not place shared docs rules in both `docs/en` and `docs/zh`; put shared rules here.
- Do not edit navigation metadata separately from the page it describes.
- Do not assume every subtree has `llms.txt`; confirm local precedent first.
- Do not turn empty or asset-only directories into AGENTS-bearing domains.

## EDIT CHECKLIST
1. Edit the content file in the nearest existing subtree.
2. Update local `_meta.json` if page order or title exposure changes.
3. Update language `_nav.json` only when top-level navigation changes.
4. Check whether the sibling language needs a mirrored update or an explicit intentional gap.
