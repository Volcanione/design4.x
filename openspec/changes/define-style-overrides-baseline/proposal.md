# Change Proposal: define-style-overrides-baseline

## 摘要

建立 Yostar Design 4.x 的样式覆盖基线，明确组件库在封装 Ant Design Vue 4.x 时如何处理 token、稳定类名、fake props 和 AntDV 内部选择器。

该变更用于指导后续组件补全：先稳定样式规则和样板组件，再按组件批次迭代，而不是先补完所有组件后统一返工。

## 背景与动机

Yostar Design 的目标不是简单把 `a-*` 改成 `yo-*`，而是在 AntDV 4.x 基础上形成可维护、可扩展、可按需引入的业务组件库。

封装组件后，样式通常会有变化。如果没有统一规则，后续新增组件容易出现以下问题：

- 全局 `.ant-*` 覆盖污染原生 AntDV 组件。
- fake props 透传到 DOM 或 AntDV。
- 每个组件 class 命名不一致。
- 样式、文档、resolver 和导出不同步。
- 先补组件后改样式导致批量返工。

## 范围

包含：

- 新增长期规范 `openspec/specs/style-overrides/spec.md`。
- 在项目原则中补充样式覆盖优先级。
- 在组件编写规范中补充单组件交付闭环。
- 明确后续开发节奏：样式基线先行，组件一边补全一边样式化。

不包含：

- 不直接重写全部现有组件样式。
- 不新增新的组件。
- 不调整构建产物格式。
- 不修改消费 demo 的引入方式。

## 影响

影响后续所有公开 Yo 组件的实现、样式、文档和 demo 交付标准。

当前最直接的落地点是 `YoButton`，它应作为样式覆盖和 fake props 的样板组件。

## 验证方式

文档变更完成后，检查：

- `openspec/specs/style-overrides/spec.md` 是否能独立说明样式覆盖规则。
- `openspec/specs/component-authoring/spec.md` 是否引用样式规范。
- `openspec/project.md` 是否包含样式覆盖原则。

后续实现代码时必须运行：

```bash
pnpm run typecheck
pnpm run build
```
