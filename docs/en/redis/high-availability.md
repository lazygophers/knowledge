# Redis High Availability Architecture

## Solution Options

- 主从 + 哨兵：简单可靠，适合中等规模。
- Redis Cluster：分片扩展，适合大规模写入。

## 关键指标

- 故障切换时间
- 主从复制延迟
- 热点分片负载
