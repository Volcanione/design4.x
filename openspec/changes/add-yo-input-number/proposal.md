# Change Proposal: add-yo-input-number

## 摘要

新增 `YoInputNumber`，补齐数字输入类基础表单组件。

`YoInputNumber` 基于 Ant Design Vue 4.x `InputNumber` 封装，保持 AntDV 原有数值输入、步进器、格式化、精度和默认禁用态能力，同时接入 Yostar 稳定类名、公共 `disabledVariant`、large 尺寸样式、文档示例、按需引入和预览站路由。

## 背景与动机

当前表单组件已经包含 `YoInput` 与 `YoSelect`。数字输入框是业务表单中的高频控件，需要统一 `yo-*` 命名、resolver 按需引入、全局类型提示和预览文档。

## 范围

包含：

- 新增 `packages/yostar-design/src/components/input-number/`。
- 注册 `YoInputNumber` 到全量入口、全局类型、resolver 和 package exports。
- 增加 `input-number/style.css` 按需样式入口。
- 增加预览文档、基础、尺寸、格式化、控制按钮和禁用态 demo。
- 同步 OpenSpec 组件闭环、按需引入和样式边界。

不包含：

- 不改变 AntDV InputNumber 的数值解析、步进器交互和键盘行为。
- 不新增独立的清除按钮能力。
- 不全局覆盖 `.ant-input-number`。

## 验证方式

```bash
pnpm run typecheck
pnpm run build
git diff --check
```
