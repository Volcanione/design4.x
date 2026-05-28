# Yostar Design 4.x 项目规范

## 项目目的

Yostar Design 4.x 是基于 Ant Design Vue 4.x 的 Vue 3 组件库框架。它用于统一 `yo-*` 组件命名、控制台主题、按需引入、自动导入 resolver 和文档预览站。

## 当前能力

- 通过 `@yo-star/yostar-design` 全量安装。
- 通过组件子路径手动按需引入。
- 通过 `YostarDesignResolver` 自动按需引入。
- 支持与 Ant Design Vue 4.x 原生组件混用。
- 预览站从组件 Markdown 和 demo 文件生成组件页面。
- 当前统一为控制台主题。

## 架构原则

1. 优先使用静态生成，不使用运行时全量扫描。
2. Ant Design Vue 保持为 peer dependency。
3. 不允许为了实现别名而全量导入 AntDV。
4. 每个组件独立维护实现、样式、文档和 demo。
5. 组件子路径和 resolver 映射必须一致。
6. 运行时 props 与类型 props 不能长期漂移。
7. Yo 自定义 props 不能泄漏到 AntDV 或 DOM。
8. 文档站必须保持“侧边栏固定，内容区滚动”的交互模型。
9. 样式覆盖必须优先使用主题 token，其次使用 Yo 组件稳定类名，最后才允许有限使用 AntDV 内部选择器。
10. 新组件必须按“组件实现、样式覆盖、导出/resolver、预览文档、属性表”的闭环交付。

## 必须验证

组件库变更：

```bash
pnpm run typecheck
pnpm run build
```

消费方式变更：

```bash
cd D:\yostar\test-yostar-design
pnpm run typecheck
pnpm run build
```

## 变更流程

非简单变更需要在 `openspec/changes/<change-id>/` 下创建：

- `proposal.md`
- `tasks.md`
- 必要时创建 `design.md`
- 在 `specs/<capability>/spec.md` 下创建规范增量

变更稳定后，应把规范增量合并到 `openspec/specs/` 下的长期规范中。
