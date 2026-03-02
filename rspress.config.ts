import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

const ghPagesBase = '/knowledge/';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  llms: true,
  lang: 'zh',
  title: '技术知识库',
  description: 'Golang / MySQL / Redis 工程实践知识库',
  base: process.env.RSPRESS_BASE ?? (process.env.GITHUB_ACTIONS === 'true' ? ghPagesBase : '/'),
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  logoText: 'LYX Knowledge',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: '技术知识库',
      description: 'Golang / MySQL / Redis 工程实践知识库',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'Engineering Knowledge Base',
      description: 'Practical knowledge for Golang, MySQL and Redis.',
    },
  ],
  globalStyles: path.join(__dirname, 'docs/styles/theme.css'),
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  themeConfig: {
    localeRedirect: 'only-default-lang',
    enableAppearanceAnimation: true,
    search: true,
    footer: {
      message: 'Built with Rspress · Published on GitHub Pages',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/lazygophers/knowledge',
      },
    ],
  },
});
