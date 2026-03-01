# Redis 缓存模式

## 常见模式

1. Cache Aside
2. Read Through
3. Write Through / Write Back

## 风险治理

- 缓存击穿：热点 key 互斥重建
- 缓存穿透：布隆过滤或空值缓存
- 缓存雪崩：过期时间随机化 + 限流
