# Yostar Design 4.x 技术规范

更新时间：2026-05-27

## 1. 项目目标

Yostar Design 4.x 是基于 Ant Design Vue 4.x 的 Vue 3 组件库骨架，目标是在保留 AntDV 能力的基础上，提供统一的 `yo-*` 组件命名、控制台主题、预览文档站、按需引入和自动导入能力。

当前阶段目标不是一次性封装全部 AntDV 组件，而是先建立可扩展框架：

- 支持 `YoButton / YoSpace / YoConfigProvider`。
- 支持全量注册和子路径按需引入。
- 支持 `unplugin-vue-components` resolver 自动按需引入。
- 支持预览站自动扫描组件文档和 demo。
- 保持与原生 Ant Design Vue 4.x 混用。

## 2. 技术栈

| 模块 | 技术 |
| --- | --- |
| Monorepo | pnpm workspace |
| 组件库 | Vue 3.5, TSX, TypeScript, Ant Design Vue 4.2 |
| 构建 | Vite library mode, vue-tsc, tsc declaration emit |
| 预览站 | Vite, Vue Router, MarkdownIt |
| 自动按需 | unplugin-vue-components resolver |
| 样式 | Less, CSS variables, component style subpath |

## 3. 目录规范

```text
apps/site
  src/App.vue
  src/views
  src/components
  src/generated/routes.ts
  scripts/generate-routes.ts

packages/yostar-design
  src/index.ts
  src/global.ts
  src/resolver.ts
  src/style/index.less
  src/components
  src/_utils
  scripts/copy-styles.mjs
  vite.config.ts
  vite.config.subpaths.ts
```

每个组件必须独立拥有实现、入口、样式、文档和 demo：

```text
packages/yostar-design/src/components/button/
  Button.tsx
  index.ts
  style/index.less
  index.zh-CN.md
  demo/basic.vue
```

## 4. 组件封装规范

### 4.1 命名

- Vue 组件名使用 PascalCase：`YoButton`。
- 模板标签使用 kebab-case：`<yo-button />`。
- 组件样式类使用 `yo-*`：`.yo-button`。
- 当前固定控制台模式，不支持 `admin` 模式。

### 4.2 wrapper 规则

每个 Yo 组件 wrapper 必须明确区分三类输入：

| 类型 | 说明 |
| --- | --- |
| AntDV props | 原始 AntDV 组件支持的 props，默认透传 |
| Yo custom props | Yostar 自定义扩展 props，由 wrapper 消费 |
| attrs | 非声明属性和事件，继续透传给 AntDV |

自定义 props 不允许直接泄漏给 AntDV 或 DOM。必须在 render 前剔除：

```ts
const forwardedProps = computed(() => omitProps(props, yoButtonCustomPropKeys));
```

### 4.3 类型规则

Yo 组件的 props 类型应继承 AntDV 原始类型，并叠加 Yo 自定义类型：

```ts
export type YoButtonProps =
  AntButtonProps & Partial<ExtractPropTypes<ReturnType<typeof yoButtonCustomProps>>>;
```

全局组件类型由 `src/global.ts` 提供，用于全量安装场景。resolver 自动导入场景由使用方项目的 `components.d.ts` 提供。

## 5. 引入规范

### 5.1 全量引入

```ts
import YostarDesign from '@yo-star/yostar-design';
import '@yo-star/yostar-design/style.css';

app.use(YostarDesign);
```

### 5.2 手动按需引入

```ts
import { YoButton } from '@yo-star/yostar-design/button';
import '@yo-star/yostar-design/button/style.css';

app.use(YoButton);
```

当前支持的子路径：

```text
@yo-star/yostar-design/button
@yo-star/yostar-design/button/style.css
@yo-star/yostar-design/config-provider
@yo-star/yostar-design/config-provider/style.css
@yo-star/yostar-design/space
@yo-star/yostar-design/space/style.css
@yo-star/yostar-design/resolver
```

### 5.3 Resolver 自动按需引入

使用方项目配置：

```ts
import Components from 'unplugin-vue-components/vite';
import { YostarDesignResolver } from '@yo-star/yostar-design/resolver';

export default defineConfig({
  plugins: [
    Components({
      dts: 'src/components.d.ts',
      resolvers: [YostarDesignResolver()],
    }),
  ],
});
```

建议将 `components.d.ts` 生成到 `src/components.d.ts`，并确保 `tsconfig.json` 包含：

```json
{
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue", "vite.config.ts"]
}
```

## 6. 构建规范

组件库构建分两层：

1. `vite.config.ts` 生成全量入口：
   - `dist/yostar-design.es.js`
   - `dist/yostar-design.umd.cjs`
   - `dist/yostar-design.css`

2. `vite.config.subpaths.ts` 生成按需入口：
   - `dist/button/index.js`
   - `dist/config-provider/index.js`
   - `dist/space/index.js`
   - `dist/resolver/index.js`

`scripts/copy-styles.mjs` 负责补齐样式子路径和声明文件引用到的 Less 文件。

## 7. 预览站规范

预览站必须满足：

- 统一控制台样式。
- 顶栏按 section 高亮。
- 侧边栏固定，内容区滚动。
- 组件搜索可用。
- 组件文档从 `index.zh-CN.md` 读取。
- 组件 demo 从 `demo/*.vue` 读取。
- 代码展示使用统一高亮。
- Markdown 不开启原生 HTML。
- 异步加载必须有 loading、error 和竞态保护。

组件路由由 `apps/site/scripts/generate-routes.ts` 生成，新增组件后不手写站点路由。

## 8. 新增组件流程

新增组件必须同步更新以下位置：

1. `packages/yostar-design/src/components/<name>/`
2. `packages/yostar-design/src/components/index.ts`
3. `packages/yostar-design/src/global.ts`
4. `packages/yostar-design/src/resolver.ts`
5. `packages/yostar-design/vite.config.subpaths.ts`
6. `packages/yostar-design/package.json` exports
7. `packages/yostar-design/scripts/copy-styles.mjs`
8. 组件 Markdown 文档和 demo

后续应通过生成器自动维护第 2-7 项。

## 9. 验证规范

每次修改组件库能力后必须执行：

```bash
pnpm run typecheck
pnpm run build
```

如果涉及消费方式，还必须在 `D:\yostar\test-yostar-design` 验证：

```bash
pnpm run typecheck
pnpm run build
```

## 10. 当前遗留事项

- 全量 `a-* -> yo-*` 还未实现，必须走静态生成，不允许使用运行时全量扫描。
- Attributes 文档仍为手写，后续应从 props schema 或类型生成。
- wrapper 逻辑还未抽象为 `createYoWrapper`。
- 新增组件仍需手动维护多个导出点，后续应由生成器完成。

