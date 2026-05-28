<template>
  <section class="quick-page">
    <header class="page-heading">
      <h1>快速开始 <span>Quick Start</span></h1>
      <p>组件库使用与 ConfigProvider 配置说明。</p>
    </header>

    <section class="doc-panel">
      <h2>0. 环境要求</h2>
      <p>Node.js 建议使用 20.x LTS，包管理器统一使用 pnpm。</p>
      <CodeBlock :code="environmentCode" language="shell" />
    </section>

    <div class="doc-grid">
      <section id="import" class="doc-panel">
        <h2>1. 安装与引入</h2>
        <CodeBlock :code="fullImportCode" language="ts" />
      </section>

      <section class="doc-panel">
        <h2>2. 按需引入</h2>
        <CodeBlock :code="manualImportCode" language="ts" />
      </section>
    </div>

    <div class="doc-grid">
      <section class="doc-panel">
        <h2>3. 自动导入 Resolver</h2>
        <CodeBlock :code="resolverCode" language="ts" />
        <p>resolver 会把 YoButton 等组件解析到对应子路径，并自动补充组件样式 sideEffects。</p>
      </section>

      <section class="doc-panel">
        <h2>4. ConfigProvider 配置</h2>
        <CodeBlock :code="configProviderCode" language="template" />
        <p>当前框架统一为控制台主题，默认注入 Yostar AntDV token，并通过 CSS 变量给 Yo 组件样式复用。</p>
      </section>
    </div>

    <section id="architecture" class="doc-panel">
      <h2>5. 架构说明</h2>
      <p>组件按目录维护实现、样式、文档和 demo，并通过子路径 exports 支持按需引入。</p>
      <CodeBlock :code="architectureCode" />
    </section>

    <section id="data-driven" class="doc-panel">
      <h2>6. 数据驱动</h2>
      <p>预览站会扫描组件目录内的 Markdown 和 demo，生成组件展示路由，新增组件时不需要手写站点路由。</p>
    </section>
  </section>
</template>

<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue';

const environmentCode = `
# 安装依赖
pnpm install

# 启动预览站
pnpm dev

# 构建组件库和站点
pnpm build
`;

const fullImportCode = `
// 全量注册
import { createApp } from 'vue';
import 'ant-design-vue/dist/reset.css';
import YostarDesign from '@yo-star/yostar-design';
import '@yo-star/yostar-design/style.css';
import App from './App.vue';

createApp(App).use(YostarDesign).mount('#app');
`;

const manualImportCode = `
import { createApp } from 'vue';
import 'ant-design-vue/dist/reset.css';
import { YoButton } from '@yo-star/yostar-design/button';
import '@yo-star/yostar-design/button/style.css';
import { YoConfigProvider } from '@yo-star/yostar-design/config-provider';
import { YoSpace } from '@yo-star/yostar-design/space';
import App from './App.vue';

createApp(App)
  .use(YoConfigProvider)
  .use(YoSpace)
  .use(YoButton)
  .mount('#app');
`;

const resolverCode = `
import Components from 'unplugin-vue-components/vite';
import { YostarDesignResolver } from '@yo-star/yostar-design/resolver';

export default {
  plugins: [
    Components({
      resolvers: [YostarDesignResolver()],
    }),
  ],
};
`;

const configProviderCode = `
<yo-config-provider theme-mode="console">
  <App />
</yo-config-provider>

<!-- 如需覆盖 AntDV token，可只传差异项 -->
<yo-config-provider
  theme-mode="console"
  :antd-theme="{ token: { colorPrimary: '#3A7CFF' } }"
>
  <App />
</yo-config-provider>
`;

const architectureCode = `
packages/yostar-design/src/components/button/
  Button.tsx
  index.ts
  style/index.less
  index.zh-CN.md
  demo/basic.vue
`;
</script>
