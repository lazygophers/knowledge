# MySQL Schema Design

## Design Principles

- Define query patterns before designing fields and indexes.
- Avoid premature denormalization; ensure data consistency first.
- Separate large fields from hot fields to reduce I/O pressure.

## Checklist Items

1. Primary key strategy (auto-increment / snowflake / business key)
2. Unique constraint integrity
3. Field default values and null semantics
