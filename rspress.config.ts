import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const base =
  isGitHubPagesBuild && repoName && !repoName.endsWith('.github.io')
    ? `/${repoName}/`
    : '/';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: '技术知识库',
  description: '面向工程实践的 Golang、MySQL、Redis 知识体系',
  base,
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: '技术知识库',
      description: '面向工程实践的 Golang、MySQL、Redis 知识体系',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'Engineering Knowledge Base',
      description: 'Practical guides for Golang, MySQL and Redis.',
    },
  ],
  themeConfig: {
    localeRedirect: 'only-default-lang',
  },
});
