# Change Proposal: add-date-time-pickers

## 摘要

新增 `YoDatePicker` 与 `YoTimePicker`，补齐日期和时间选择类基础表单组件。

两个组件基于 Ant Design Vue 4.x 的 dayjs 版本封装，保持 AntDV 原有日期、时间、面板、格式化、禁用和校验状态能力，同时接入 Yostar 稳定类名、公共 `disabledVariant`、large 尺寸样式、清除图标尺寸、文档示例、按需引入和预览站路由。

## 背景与动机

当前组件库已经包含基础输入、数字输入、选择器和简单选择控件。业务表单中还需要日期与时间选择能力，因此需要将 DatePicker 和 TimePicker 纳入统一的 `yo-*` 命名、resolver 按需引入和预览文档体系。

## 范围

包含：

- 新增 `packages/yostar-design/src/components/date-picker/`。
- 新增 `packages/yostar-design/src/components/time-picker/`。
- 注册 `YoDatePicker`、`YoTimePicker` 到全量入口、全局类型、resolver 和 package exports。
- 增加 `date-picker/style.css`、`time-picker/style.css` 按需样式入口。
- 增加预览文档和 demo。
- 同步 OpenSpec 组件闭环、按需引入和样式边界。

不包含：

- 不封装 `RangePicker`，后续如需要应作为独立公开组件设计。
- 不改变 AntDV DatePicker/TimePicker 的面板交互、日期解析、时间步进和键盘行为。
- 不全局覆盖 `.ant-picker`。

## 验证方式

```bash
pnpm run typecheck
pnpm run build
git diff --check
```
