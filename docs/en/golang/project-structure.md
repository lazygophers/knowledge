# Golang Project Structure

## Recommended Layout

```text
cmd/
internal/
pkg/
configs/
scripts/
```

## Layer Boundaries

- `cmd`: entry points and wiring.
- `internal`: business implementation.
- `pkg`: reusable shared components.
