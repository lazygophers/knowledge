# DOCS EN KNOWLEDGE BASE

## OVERVIEW
`docs/en/` is the English documentation tree. Keep English authoring here, and inherit shared content rules from `docs/AGENTS.md`.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| English home page | `docs/en/index.md` | Entry for en docs |
| English top navigation | `docs/en/_nav.json` | Includes English-only top-level items |
| English playbook | `docs/en/playbook.md` | English-only learning path page |
| English Go docs | `docs/en/golang/` | Deepest en subtree; has its own AGENTS |
| English MySQL docs | `docs/en/mysql/` | Flat module, inherits this file |
| English Redis docs | `docs/en/redis/` | Flat module, inherits this file |

## LANGUAGE-SPECIFIC CONVENTIONS
- Write prose in English; if you encounter Chinese content in the English tree, treat it as a translation inconsistency to resolve deliberately rather than extending the mismatch.
- Keep `docs/en/index.md` and `docs/en/_nav.json` aligned with actual English entry points.
- `playbook.md` is English-specific; mention or update it only when the learning-path surface changes.
- English content may not mirror Chinese one-for-one; when asymmetry is intentional, keep it explicit.

## ANTI-PATTERNS
- Do not copy Chinese prose into English pages just because the neighboring file currently does.
- Do not duplicate shared docs authoring rules from `docs/AGENTS.md` here.
- Do not treat `docs/en/golang/golang/` as a normal second-level domain; follow the Go-specific guidance before editing anything under that tree.
