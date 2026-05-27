import { createRouter, createWebHistory } from 'vue-router';
import { componentRoutes } from '../generated/routes';
import DocsPage from '../views/DocsPage.vue';
import Integration from '../views/Integration.vue';
import PlaceholderPage from '../views/PlaceholderPage.vue';
import QuickStart from '../views/QuickStart.vue';

const routes = [
  {
    path: '/',
    redirect: '/quick-start',
  },
  {
    path: '/quick-start',
    component: QuickStart,
  },
  {
    path: '/quick-start/import',
    component: PlaceholderPage,
    meta: {
      title: '引入方式',
      description: '组件库安装、样式引入和按需使用说明。',
    },
  },
  {
    path: '/quick-start/architecture',
    component: PlaceholderPage,
    meta: {
      title: '架构说明',
      description: '后续用于说明组件库分层、目录规范和构建流程。',
    },
  },
  {
    path: '/quick-start/data-driven',
    component: PlaceholderPage,
    meta: {
      title: '数据驱动',
      description: '后续用于沉淀 Schema、数据源和配置驱动能力。',
    },
  },
  {
    path: '/quick-start/skill',
    component: PlaceholderPage,
    meta: {
      title: 'Skill',
      description: '后续用于沉淀组件库开发规范、生成器和协作流程。',
    },
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/integration/layout',
    component: PlaceholderPage,
    meta: {
      title: '页面布局',
      description: '后续用于放置控制台 Header、Menu、Side、Breadcrumb、Content 等组合布局。',
    },
  },
  {
    path: '/integration/schema-form',
    component: PlaceholderPage,
    meta: {
      title: 'Schema 表单',
      description: '后续用于沉淀配置驱动表单、筛选表格和字段联动能力。',
    },
  },
  ...componentRoutes.map(record => ({
    path: record.path,
    component: DocsPage,
    meta: {
      componentRecord: record,
    },
  })),
  {
    path: '/:pathMatch(.*)*',
    component: PlaceholderPage,
    meta: {
      title: '空白占位页面',
      description: '当前路由还没有内容，可以在后续迭代中替换为真实页面。',
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
