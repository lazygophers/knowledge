# Redis Caching Patterns

## Common Patterns

1. Cache Aside
2. Read Through
3. Write Through / Write Back

## Risk Controls

- Cache breakdown: mutex rebuild on hot keys
- Cache penetration: Bloom filter or null caching
- Cache avalanche: randomized TTL + rate limiting
