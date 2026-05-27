# Yostar Design 4.x 组件库 Bug 修复与现状记录

更新时间：2026-05-27

## 当前结论

本轮已修复首轮审计中影响可用性和继续迭代的主要问题。当前项目仍是早期骨架，但库包、预览站、基础 `yo-*` 类型提示、生产构建链路已经可以稳定跑通。

已验证：

| 命令 | 结果 | 说明 |
| --- | --- | --- |
| `pnpm run typecheck` | 通过 | 组件库与预览站 TypeScript 检查通过 |
| `pnpm run build` | 通过 | 组件库与预览站生产构建通过 |
| 预览站 | 可用 | 当前地址：`http://localhost:5189/` |

## 本轮已修复

### 0. 建立按需引入子路径

涉及文件：

- `packages/yostar-design/package.json`
- `packages/yostar-design/vite.config.subpaths.ts`
- `packages/yostar-design/src/resolver.ts`
- `packages/yostar-design/scripts/copy-styles.mjs`

修复：

- 新增 ESM 子路径入口：
  - `@yo-star/yostar-design/button`
  - `@yo-star/yostar-design/config-provider`
  - `@yo-star/yostar-design/space`
- 新增样式子路径：
  - `@yo-star/yostar-design/button/style.css`
  - `@yo-star/yostar-design/config-provider/style.css`
  - `@yo-star/yostar-design/space/style.css`
- 新增自动导入 resolver：
  - `@yo-star/yostar-design/resolver`

验证：

- `dist/button/index.js` 已生成。
- `dist/space/index.js` 已生成。
- `dist/config-provider/index.js` 已生成。
- `dist/resolver/index.js` 已生成。
- 测试项目已改为子路径按需引入，并通过 typecheck/build。

### 1. 修复发布产物样式路径断链

涉及文件：

- `packages/yostar-design/package.json`
- `packages/yostar-design/scripts/copy-styles.mjs`

问题：

声明文件中会保留样式 side-effect import，例如：

```ts
import './style/index.less';
```

但旧构建产物没有把对应 Less 文件复制进 `dist`，发布后严格消费者可能解析失败。

修复：

- 新增 `scripts/copy-styles.mjs`。
- 构建完成后复制：
  - `src/style` -> `dist/style`
  - `src/components/button/style` -> `dist/components/button/style`
- 已确认：
  - `dist/style/index.less` 存在。
  - `dist/components/button/style/index.less` 存在。

备注：

当前方案优先解决发布断链问题。后续如果引入 `vite-plugin-dts`，可以进一步清理 `.d.ts` 中的样式 import。

### 2. 修复 Button / Space 自定义 props 未来泄漏风险

涉及文件：

- `packages/yostar-design/src/_utils/props.ts`
- `packages/yostar-design/src/components/button/Button.tsx`
- `packages/yostar-design/src/components/space/Space.tsx`

问题：

`YoButton` / `YoSpace` 后续会叠加自定义 props。如果不拆分 Yo 自定义 props 和 AntDV 原始 props，自定义字段可能被错误透传到 AntDV 或 DOM。

修复：

- 新增 `omitProps` 工具。
- `YoButton` 和 `YoSpace` 都保留 `yoXxxCustomProps()` 扩展口。
- render 前剔除 Yo 自定义 props，再转发给 AntDV 组件。

当前策略：

- AntDV props：继续透传给 AntDV。
- Yo 自定义 props：由 wrapper 自己消费。
- attrs：继续传给 AntDV。

### 3. 移除误导性的 `componentPrefix`

涉及文件：

- `packages/yostar-design/src/components/config-provider/ConfigProvider.tsx`
- `packages/yostar-design/src/components/config-provider/context.ts`

问题：

`componentPrefix` 看起来可以改变 `<yo-button>` 的前缀，但 Vue 全局组件名在 install 时已经注册，无法通过 `ConfigProvider` 动态修改。

修复：

- 从 ConfigProvider props 中移除 `componentPrefix`。
- 从 context 中移除 `componentPrefix`。
- 当前组件库明确固定使用 `yo-*`。

### 4. 固定为控制台模式

涉及文件：

- `packages/yostar-design/src/components/config-provider/context.ts`
- `packages/yostar-design/src/components/button/style/index.less`

修复：

- `YoThemeMode` 收敛为 `'console'`。
- 移除 `yo-button--admin` 样式分支。

### 5. 修复预览站组件搜索无效

涉及文件：

- `apps/site/src/App.vue`
- `apps/site/src/styles/index.less`

问题：

侧边栏有“搜索组件”输入框，但输入后没有过滤效果。

修复：

- 增加 `componentKeyword`。
- 按 `name / title / subtitle / group` 过滤组件。
- 无结果时显示“暂无匹配组件”。

### 6. 修复顶栏组件展示高亮不准确风险

涉及文件：

- `apps/site/src/App.vue`
- `apps/site/src/styles/index.less`

问题：

顶栏“组件展示”原来依赖 `/components/button` 的 router-link active。后续组件增多时，其他组件页可能高亮不稳定。

修复：

- 顶栏改为自定义 active 判断。
- `/components/*` 均会高亮“组件展示”。
- 组件展示入口自动取第一个组件路由。

### 7. 修复 DocsPage 异步加载竞态

涉及文件：

- `apps/site/src/views/DocsPage.vue`
- `apps/site/src/styles/index.less`

问题：

快速切换组件页面时，旧页面异步 import 可能晚返回，覆盖新页面内容。

修复：

- 增加 `loadVersion` 请求版本号。
- 只有最后一次加载允许写入页面状态。
- 增加 loading 和 error 状态。

### 8. 降低 Markdown 渲染风险

涉及文件：

- `apps/site/src/views/DocsPage.vue`

问题：

MarkdownIt 开启了 `html: true`，并通过 `v-html` 注入页面。如果后续文档来源变复杂，会有 XSS 风险。

修复：

- MarkdownIt 改为 `html: false`。
- 代码高亮区域仍使用内部转义后的 HTML，不接受外部 HTML。

### 9. 移除无效的 router scrollBehavior

涉及文件：

- `apps/site/src/router/index.ts`

问题：

真实滚动容器是 `.site-content`，不是 window。`router.scrollBehavior` 对当前布局没有实际作用。

修复：

- 删除 `scrollBehavior`。
- 保留 `App.vue` 中对 `.site-content` 的显式滚动控制。

## 仍建议后续处理

### 1. 全量 `a-* -> yo-*` 仍需要静态生成

位置：

- `packages/yostar-design/src/alias/index.ts`

说明：

当前 `alias/index.ts` 仍是运行时扫描 AntDV 的实验文件，未接入主入口。不要直接把它重新导入主包，否则会导致 AntDV 全量进入依赖图，类型和构建压力都会变大。

建议：

- 后续改成静态生成器。
- 生成每个组件的 wrapper、类型、导出、全局声明、文档和 demo。

### 2. 文档 Attributes 仍是手写

位置：

- `packages/yostar-design/src/components/button/index.zh-CN.md`

说明：

当前 Attributes 表格可读，但不是从 props schema 自动生成。组件数量变多后，容易出现文档与类型不一致。

建议：

- 后续建立组件元数据。
- Attributes 从 props schema 或 TS 类型生成。

### 3. wrapper 模型还可以进一步抽象

说明：

本轮已先修正 Button / Space 的转发风险，但后续组件多起来后，不建议每个组件都手写同样逻辑。

建议：

- 抽象 `createYoWrapper`。
- 固定输入：AntDV 组件、AntDV props、Yo props、props mapper、class mapper。
- 统一生成类型和运行时转发规则。

## 当前整体状态

| 项目 | 状态 |
| --- | --- |
| 运行可用性 | 已验证可用 |
| 构建稳定性 | `pnpm run build` 通过 |
| 类型检查 | `pnpm run typecheck` 通过 |
| 样式产物 | 已复制 Less 到 dist，声明路径不再断链 |
| 按需引入 | 已支持 button/config-provider/space 子路径 |
| 自动导入 | 已提供 `YostarDesignResolver` |
| 预览站搜索 | 已可用 |
| 文档异步加载 | 已增加竞态保护 |
| Markdown HTML 风险 | 已关闭原生 HTML |
| 全量 yo 别名 | 待静态生成方案 |
