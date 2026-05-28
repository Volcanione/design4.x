# Change Proposal: add-yo-input

## 摘要

新增 `YoInput`，作为第一批表单输入类组件的样板组件之一。

`YoInput` 基于 Ant Design Vue 4.x `Input` 封装，保持 AntDV 原有高度、padding、交互和默认禁用态，同时接入 Yostar 主题类名、公共 `disabledVariant`、文档示例、按需引入和预览站路由。

## 背景与动机

当前组件库已经具备 `YoButton`、`YoSpace`、`YoConfigProvider` 和 resolver 按需引入能力。后续需要逐步补齐表单组件，因此需要先落一个输入框组件，验证新增组件的完整交付链路：

- wrapper props 分层。
- 稳定根类名。
- 主题与禁用态样式复用。
- 全量安装与子路径导出。
- resolver 自动引入。
- 预览站文档与 demo。

## 范围

包含：

- 新增 `packages/yostar-design/src/components/input/`。
- 注册 `YoInput` 到全量入口、全局类型、resolver 和 package exports。
- 增加 `input/style.css` 按需样式入口。
- 增加预览文档、基础 demo 和属性表。
- 修正根级站点构建脚本，保证新增组件前先生成预览路由。

不包含：

- 不封装 `Input.Password`、`Input.Search`、`Input.TextArea`。
- 不改变 AntDV Input 的基础高度和 padding。
- 不改变消费 demo 的引入方式。

## 验证方式

```bash
pnpm run typecheck
pnpm run build
```
