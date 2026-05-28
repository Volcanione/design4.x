# Change Proposal: add-yo-select

## 摘要

新增 `YoSelect`，作为表单选择类组件的第一版封装。

`YoSelect` 基于 Ant Design Vue 4.x `Select` 封装，保持 AntDV 原有选择、搜索、多选和下拉交互能力，同时接入 Yostar 稳定类名、公共 `disabledVariant`、large 尺寸字号与内边距、清除图标尺寸、文档示例、按需引入和预览站路由。

## 背景与动机

当前已经完成 `YoInput`，并确定了表单控件的若干公共样式规则：

- large 尺寸字号保持 `14px`。
- large 尺寸左右内边距为 `16px`。
- 支持清除的控件清除图标为 `16px * 16px`。
- 默认禁用态继承 AntDV，强禁用视觉只提升内容文字颜色。

`YoSelect` 用于验证这些规则在选择器类组件上的复用方式。

## 范围

包含：

- 新增 `packages/yostar-design/src/components/select/`。
- 注册 `YoSelect` 到全量入口、全局类型、resolver 和 package exports。
- 增加 `select/style.css` 按需样式入口。
- 增加预览文档、基础 demo 和属性表。

不包含：

- 不新增 TreeSelect、Cascader 等复杂选择类组件。
- 不重写 Select 下拉菜单、选项 hover、tag 样式等细节，后续根据预览反馈微调。
- 不改变原生 AntDV Select 的选择行为和键盘交互。

## 验证方式

```bash
pnpm run typecheck
pnpm run build
```
