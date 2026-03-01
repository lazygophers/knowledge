# Golang 并发模型

## 并发设计原则

- 所有 goroutine 都需要可回收路径。
- channel 仅承担数据协作，不承担业务状态。
- 超时与取消必须通过 `context` 控制。

## 重点模式

1. fan-out / fan-in
2. worker pool
3. pipeline

## 常见问题

- goroutine 泄漏
- 无缓冲 channel 误用
- 共享状态竞争
