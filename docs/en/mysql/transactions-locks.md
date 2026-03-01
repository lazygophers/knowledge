# MySQL Transactions and Locks

## Key Concepts

- Isolation levels: RU / RC / RR / SERIALIZABLE
- Lock types: row lock, gap lock and next-key lock
- Deadlocks are expected; fast detection and retry matter most

## Troubleshooting Path

1. Inspect deadlock reports in InnoDB status.
2. Review hot SQL and index hit ratio.
3. Reduce transaction scope and enforce access order.
