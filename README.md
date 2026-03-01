# 技术知识库（Rspress）

基于 [Rspress](https://rspress.rs/zh/) 构建，使用 `pnpm` 管理依赖，默认语言为中文，并提供英文版本。

线上地址：`https://lazygophers.github.io/knowledge/`

## 目录结构

- `docs/zh/golang/*`：Golang 模块（中文）
- `docs/zh/mysql/*`：MySQL 模块（中文）
- `docs/zh/redis/*`：Redis 模块（中文）
- `docs/en/**`：英文文档与导航
- `docs/styles/theme.css`：全站视觉主题样式

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建预览

```bash
pnpm build
pnpm preview
```

## GitHub Actions 部署

已提供 `.github/workflows/deploy.yml`，推送 `main` 分支后会自动构建并部署到 GitHub Pages。

部署前请在仓库设置中确认：

1. `Settings -> Pages -> Build and deployment -> Source` 选择 `GitHub Actions`
2. 默认分支为 `main`
