# DOCS ZH KNOWLEDGE BASE

## OVERVIEW
`docs/zh/` is the canonical Chinese documentation tree. Keep Chinese authoring here, and inherit shared content rules from `docs/AGENTS.md`.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Chinese home page | `docs/zh/index.md` | Entry for zh docs |
| Chinese top navigation | `docs/zh/_nav.json` | Update only for top-level nav changes |
| Chinese Go docs | `docs/zh/golang/` | Deepest zh subtree; has its own AGENTS |
| Chinese MySQL docs | `docs/zh/mysql/` | Flat module, inherits this file |
| Chinese Redis docs | `docs/zh/redis/` | Flat module, inherits this file |
| Chinese LLM index | `docs/zh/llms.txt` | Root-level machine-readable map exists here |

## LANGUAGE-SPECIFIC CONVENTIONS
- Write prose in Chinese unless the file is explicitly machine-oriented metadata such as `llms.txt`.
- Keep `docs/zh/index.md` aligned with the actual zh domain inventory.
- Treat `docs/zh/llms.txt` as a maintained index of the Chinese docs tree; update it when adding materially new zh paths.
- Preserve existing bilingual parity where the same topic already exists under `docs/en/`.

## ANTI-PATTERNS
- Do not add English-only learning pages such as `playbook` under `docs/zh/` unless the structure is intentionally expanded.
- Do not duplicate shared docs authoring rules from `docs/AGENTS.md` here.
- Do not use `docs/zh/golang/docs/en/` as a real content location; it is an anomalous nested path, not a model to extend.
