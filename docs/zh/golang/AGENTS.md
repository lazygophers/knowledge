# DOCS ZH GOLANG KNOWLEDGE BASE

## OVERVIEW
`docs/zh/golang/` is the deepest maintained Chinese knowledge tree in the repo. Use the existing topical folders rather than creating ad hoc structure.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Getting started | `install/`, `fundamentals/`, `hello.mdx`, `index.mdx` | Entry-level content |
| Core language topics | `data-types/`, `functions-methods/`, `interface/`, `error-handling/`, `reflection/`, `unsafe/` | Language internals |
| Runtime and systems topics | `concurrency/`, `io/`, `cgo/`, `optimization/` | Performance and systems concerns |
| Tooling and engineering | `build-tools/`, `docs/`, `testing/`, `best-practices/`, `ecosystem/`, `stdlib/` | Broader workflow guidance |
| Local navigation | `_meta.json` in each subtree | Keep ordering/titles aligned |
| Local LLM index | `llms.txt` | Update when adding meaningful new zh/golang paths |

## LOCAL CONVENTIONS
- Add new pages under the nearest existing topical subtree; avoid creating parallel taxonomy for similar concepts.
- Keep `index.mdx`, `hello.mdx`, and topic subtrees conceptually aligned so entry pages do not drift from actual content.
- Update the nearest `_meta.json` whenever adding, renaming, or reordering visible pages.
- Treat `llms.txt` as part of the maintained Go subtree surface, not a generated-afterthought file.

## ANTI-PATTERNS
- Do not add new content under `docs/zh/golang/docs/en/`; that nested path is anomalous and not a supported content root.
- Do not introduce a second folder for a topic that already exists in one of the established Go categories.
- Do not repeat Chinese-language rules already covered by `docs/zh/AGENTS.md`.
