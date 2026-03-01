# Golang 项目结构

## 推荐目录

```text
cmd/
internal/
pkg/
configs/
scripts/
```

## 分层边界

- `cmd`：程序入口和装配。
- `internal`：业务实现，不对外暴露。
- `pkg`：可复用通用组件。

## 组织建议

- 以业务能力划分模块，而非按技术层碎片化拆分。
- 配置项集中管理并支持环境覆盖。
