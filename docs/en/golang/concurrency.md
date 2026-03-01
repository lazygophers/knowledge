# Golang Concurrency

## Design Rules

- Every goroutine must have a shutdown path.
- Use channels for coordination, not for business state.
- Timeouts and cancellation should be driven by `context`.

## Key Patterns

1. fan-out / fan-in
2. worker pool
3. pipeline
