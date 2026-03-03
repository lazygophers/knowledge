# Redis Persistence

## Mechanism Comparison

- RDB：恢复快，可能丢失最后一段数据。
- AOF：数据更完整，体积更大。

## 建议策略

- 核心业务开启 AOF + 定期重写。
- 关键集群定期做恢复演练。
