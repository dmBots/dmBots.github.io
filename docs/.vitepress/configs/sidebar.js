export default {
  '/guide/motor': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/product/dm4310/': getDM4310Sidebar(),
}

function getApiSidebar() {
  return [
    {
      text: '功能',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/guide/motor'
        },
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        },
        {
          text: 'Tag 标签',
          link: '/components/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue'
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script'
        }
      ]
    }
  ]
}

function getDM4310Sidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '免责声明',
          link: '/product/top.md'
        },
        {
          text: '免责声明',
          link: '/guide/motor'
        },
        {
          text: '文档3',
          link: '/guide/modal'
        }
      ]
    }
  ]
}

