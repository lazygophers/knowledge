import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import mermaid from 'rspress-plugin-mermaid';
import { pluginLlms } from '@rspress/plugin-llms';
import { pluginTwoslash } from '@rspress/plugin-twoslash';

const ghPagesBase = '/knowledge/';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
    defaultWrapCode: false,
    // 需要禁用 mdxRs 以便使用 remark 插件（包括 mermaid）
    mdxRs: false,
  },
  redirect: {
    // 重定向 data-types/channel 到 concurrency/channel
    '/golang/data-types/channel.html': '/golang/concurrency/channel.html',
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
    llmsUI: true
  },
  plugins:[
    mermaid({
      mermaidConfig: {
        theme: 'forest',
      },
    }),
    pluginLlms({
      // 生成 llms.txt
      llmsTxt: {
        name: 'llms.txt',
      },
      // 生成 llms-full.txt
      llmsFullTxt: {
        name: 'llms-full.txt',
      },
      // 生成 MD 文件（SSG-MD 功能）
      mdFiles: {
        mdxToMd: true,
      },
    }),
    pluginTwoslash({
      explicitTrigger: false,
      cache: true,
    })
  ]
});
