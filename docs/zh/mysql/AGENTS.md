# DOCS ZH MYSQL KNOWLEDGE BASE

## OVERVIEW
`docs/zh/mysql/` is now a deep Chinese topic tree. Keep the structure aligned around domain directories, not isolated single pages.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Module entry and reader routing | `docs/zh/mysql/index.mdx` | Route beginners/intermediate/advanced readers here first |
| Schema topic entry | `docs/zh/mysql/schema.mdx` | Topic-level routing page for schema readers |
| Transaction topic entry | `docs/zh/mysql/transactions.mdx` | Topic-level routing page for transaction and lock readers |
| Performance topic entry | `docs/zh/mysql/performance.mdx` | Topic-level routing page for tuning and EXPLAIN readers |
| Operations topic entry | `docs/zh/mysql/operations.mdx` | Topic-level routing page for release and incident readers |
| Topic detail pages | `docs/zh/mysql/{schema,transactions,performance,operations}/` | Deep-dive pages only; no subdirectory index files |
| Module metadata | `docs/zh/mysql/_meta.json`, `docs/zh/mysql/llms.txt` | Keep route inventory current |

## LOCAL CONVENTIONS
- Use the fixed depth anchors `#beginner` / `#intermediate` / `#advanced` on module and topic index pages.
- Topic overview pages live at `docs/zh/mysql/{topic}.mdx`; deeper reasoning belongs in the paired detail page under the topic directory.
- Keep Chinese prose in pages; `llms.txt` stays English machine-readable like the rest of the repo.
- If a topic grows, extend the nearest existing domain directory before adding a new top-level MySQL bucket.

## ANTI-PATTERNS
- Do not add `beginner/advanced` subdirectories; reader depth is expressed inside pages, not by route shape.
- Do not reintroduce topic `index` files under `docs/zh/mysql/*/`; only the module root keeps an index page.
- Do not duplicate the same mechanism explanation on both topic overview and detail page.
- Do not reintroduce flat top-level MySQL pages as the main content surface; old slugs are compatibility entry points only.
