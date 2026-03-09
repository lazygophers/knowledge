# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-09

## OVERVIEW
Rspress-based bilingual knowledge base. Most work happens in `docs/`; `theme/` and `src/` are thin support layers, not the product center.

## STRUCTURE
```text
./
├── docs/              # bilingual content tree; primary authoring surface
│   ├── zh/            # Chinese docs
│   ├── en/            # English docs
│   ├── styles/        # global docs styles
│   └── public/        # static assets
├── theme/             # custom Rspress theme components
├── src/               # small shared utilities
├── .claude/           # local Claude commands/config
├── .github/workflows/ # GitHub Pages deployment
└── rspress.config.ts  # site bootstrap, i18n, plugins, redirects
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Add or edit documentation | `docs/` | See `docs/AGENTS.md` first |
| Chinese content changes | `docs/zh/` | Language-specific rules live there |
| English content changes | `docs/en/` | Includes `playbook.md` and Go subtree anomaly note |
| Go topic docs | `docs/*/golang/` | Deepest maintained doc tree |
| Site navigation | `docs/zh/_nav.json`, `docs/en/_nav.json`, `_meta.json` files | Keep nav in sync with content |
| Global site behavior | `rspress.config.ts` | Locales, plugins, redirects, base path |
| Theme/component tweaks | `theme/components/`, `src/lib/` | Thin layer; no child AGENTS needed |
| Deployment | `.github/workflows/deploy.yml` | GitHub Pages publish flow |

## CONVENTIONS
- Prefer the smallest scoped AGENTS file available; child guidance overrides parent guidance.
- Treat this repository as content-first: documentation structure matters more than TypeScript surface area.
- Use existing language trees instead of inventing new top-level domains.
- Keep project-level config changes local to this repo; do not assume global tool config edits are allowed.

## ANTI-PATTERNS
- Do not add AGENTS files to every small directory; only add them at clear domain boundaries.
- Do not duplicate the same guidance across root, language, and topic layers.
- Do not treat `theme/`, `src/`, `styles/`, or workflow files as primary authoring surfaces.
- Do not create a third parallel Go tree beside the existing English anomaly; document around it instead.

## COMMANDS
```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## NOTES
- `AGENT.md` already exists as a stub pointing to `CLAUDE.md`; keep it as legacy compatibility, but use this `AGENTS.md` hierarchy for scoped repo guidance.
- `docs/en/golang/golang/` is an anomalous duplicate-like subtree; child guidance explains how to avoid editing the wrong place.
- `docs/zh/golang/docs/en/` also exists as an anomalous nested path and should not become a new content pattern.
