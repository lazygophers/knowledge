# Redis Persistence

## Trade-off

- RDB: faster restore with possible data loss window.
- AOF: better durability with larger storage overhead.

## Recommended Practice

Enable AOF for critical workloads and run restore drills regularly.
