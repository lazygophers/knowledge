# 技术知识库

> Golang / MySQL / Redis 工程实践知识库

[![Deploy Status](https://github.com/lazygophers/knowledge/actions/workflows/deploy.yml/badge.svg)](https://github.com/lazygophers/knowledge/actions/workflows/deploy.yml)
[**在线访问**](https://lazygophers.github.io/knowledge/)

基于 [Rspress](https://rspress.rs/) 构建的现代化技术文档站点，提供中英双语支持。

## 特性

- **中英双语** - 完整的中文和英文文档支持
- **MDX 支持** - 在 Markdown 中使用 React 组件
- **Mermaid 图表** - 丰富的流程图和架构图
- **Tailwind CSS** - 现代化的样式系统
- **llms.txt 支持** - AI 友好的文档索引（SSG-MD）
- **TypeScript Twoslash** - 智能代码提示

## 文档模块

| 模块                                                           | 描述                                |
| -------------------------------------------------------------- | ----------------------------------- |
| [Golang](https://lazygophers.github.io/knowledge/golang/index) | Go 语言快速入门、基础概念、工程实践 |
| [MySQL](https://lazygophers.github.io/knowledge/mysql/index)   | 库表设计、事务与锁、性能优化        |
| [Redis](https://lazygophers.github.io/knowledge/redis/index)   | 数据结构、缓存模式、持久化、高可用  |

## 技术栈

```
Rspress 2.0.3    - 静态站点生成
React 19         - UI 框架
Tailwind CSS 4   - 样式系统
Mermaid          - 图表渲染
TypeScript       - 类型安全
pnpm             - 包管理器
```

## 目录结构

```
knowledge/
├── docs/
│   ├── zh/                    # 中文文档
│   │   ├── golang/            # Golang 模块
│   │   │   ├── install/       # 安装指南
│   │   │   ├── fundamentals/  # 基础概念
│   │   │   ├── hello.mdx      # Hello World
│   │   │   └── index.mdx      # 模块首页
│   │   ├── mysql/             # MySQL 模块
│   │   └── redis/             # Redis 模块
│   ├── en/                    # 英文文档
│   └── styles/
│       └── theme.css          # 主题样式（含 Tailwind CSS）
├── src/
│   └── lib/
│       └── utils.ts           # 工具函数（shadcn/ui）
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs         # PostCSS 配置
├── tailwind.css               # Tailwind CSS 入口
├── components.json            # shadcn/ui 配置
├── tsconfig.json              # TypeScript 配置
└── rspress.config.ts          # Rspress 配置
```

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/lazygophers/knowledge.git
cd knowledge

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看效果。

### 构建

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 部署

### GitHub Pages

项目使用 GitHub Actions 自动部署到 GitHub Pages。

1. Fork 本仓库
2. 在仓库设置中启用 GitHub Pages：
   - `Settings` → `Pages` → `Build and deployment` → `Source` 选择 `GitHub Actions`
3. 推送代码到 `master` 分支，自动触发部署

部署后的地址为：`https://<username>.github.io/knowledge/`

### 自定义域名

在 `docs/zh` 和 `docs/en` 目录下分别创建 `CNAME` 文件，填入你的域名。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

[AGPL-3.0 license](LICENSE)

---

**Built with ❤️ using [Rspress](https://rspress.rs/)**
