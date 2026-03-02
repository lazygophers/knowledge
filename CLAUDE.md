# Local Execution Rules

## Tool Usage

- Do not invoke `apply_patch` through `exec_command`.
- Always call the dedicated `apply_patch` tool directly for patch edits.

## Scope

- For configuration changes, prefer project-level settings by default; do not apply global (`~/.codex` or user-home) changes unless explicitly requested.
