# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: 日期时间选择组件闭环

`YoDatePicker` 与 `YoTimePicker` 必须作为公开基础表单组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoDatePicker

Given 使用方需要日期选择器组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoDatePicker`
And 必须可以从 `@yo-star/yostar-design/date-picker` 子路径导入 `YoDatePicker`
And `YostarDesignResolver` 必须可以解析 `YoDatePicker`
And 预览站必须包含 `/components/date-picker`
And 文档必须包含基础用法、demo 和属性表。

#### Scenario: 新增 YoTimePicker

Given 使用方需要时间选择器组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoTimePicker`
And 必须可以从 `@yo-star/yostar-design/time-picker` 子路径导入 `YoTimePicker`
And `YostarDesignResolver` 必须可以解析 `YoTimePicker`
And 预览站必须包含 `/components/time-picker`
And 文档必须包含基础用法、demo 和属性表。

#### Scenario: 时区展示

Given 组件是 `YoDatePicker` 或 `YoTimePicker`
When 使用方传入 `timezone`
Then 组件必须按指定 UTC 偏移展示 Dayjs 值
And 组件展示值必须包含当前 UTC 时区标识
And `timezone="UTC+8"` 与 `timezone="UTC+9"` 展示同一时间戳时，必须显示不同时区下的本地时间。
