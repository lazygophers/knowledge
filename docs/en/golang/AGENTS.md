# DOCS EN GOLANG KNOWLEDGE BASE

## OVERVIEW
`docs/en/golang/` is the deepest maintained English knowledge tree. It mixes root-level overview pages with a large nested topic tree, so verify placement before adding or editing files.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Entry and overview pages | `index.mdx`, `index.md`, `hello.mdx`, `basics.md`, `concurrency.md`, `project-structure.md`, `testing.md` | Top-level English Go pages |
| Deep topic content | Existing topical subdirectories under this tree | Follow the nearest established bucket |
| Local navigation | `_meta.json` in the relevant subtree | Keep ordering/titles aligned |
| Local LLM index | `llms.txt` | Present here and in nested Go areas |
| Duplicate-like subtree | `docs/en/golang/golang/` | Handle as a risk zone, not a fresh domain |

## LOCAL CONVENTIONS
- Before editing a Go topic, check whether the topic already lives as a top-level page here or inside the nested `golang/` subtree; extend the established location instead of splitting the same topic across both.
- Treat root-level English Go pages as overview or bridge content unless neighboring files show a different precedent.
- Update the nearest `_meta.json` whenever adding, renaming, or reordering visible pages.
- If a page in the English tree still contains Chinese prose, treat the edit as translation cleanup or localization follow-up, not as a signal to continue mixing languages.

## ANTI-PATTERNS
- Do not create a third parallel Go subtree.
- Do not place the same topic once at `docs/en/golang/*.md*` and again under `docs/en/golang/golang/**`.
- Do not assume the nested `golang/` subtree is disposable; inspect existing neighbor structure before moving or deleting anything.
- Do not repeat English-language rules already covered by `docs/en/AGENTS.md`.
