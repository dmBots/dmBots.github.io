import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './configs/nav'
import demoblock from 'vitepress-demoblock';

export default defineConfig({
  // lang: 'en-US',
  title: '达妙科技',
  description: '致力于电机驱动、运动控制器、高性能传感器开发与设计。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: '/',
  publicPath: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },
    markdown: {
      // ...
      config: (md) => {
        md.use(demoblock)
      }
    },

    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

  themeConfig: {
    // sidebar: getSidebar({ contentRoot: '/', contentDirs: ['team'], collapsible: true, collapsed: true }),
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    algolia: {
      appId: 'X51HWTCQJJ',
      apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      indexName: 'vitepress-demo'
    },

    // nav
    nav,

    editLink: {
      pattern: 'https://github.com/dmBots/dmBots.github.io',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dmBots' }
    ],
  //
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 达妙科技'
    }
  }


})
