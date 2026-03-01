# Golang Testing Strategy

## Test Layers

1. Unit tests for logic and edge cases.
2. Integration tests for DB/Redis and service collaboration.
3. Benchmarks for hot paths.

## AAA Template

- Arrange: setup inputs and dependencies.
- Act: execute the target.
- Assert: verify outputs and side effects.
