# MySQL 事务与锁

## 关键概念

- 隔离级别：RU / RC / RR / SERIALIZABLE
- 锁类型：行锁、间隙锁、临键锁
- 死锁：必然存在，重点是快速检测与重试

## 排查路径

1. `show engine innodb status` 观察死锁信息
2. 查看热点 SQL 与索引命中
3. 缩小事务范围并优化访问顺序
