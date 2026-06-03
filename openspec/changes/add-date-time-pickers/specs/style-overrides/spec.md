# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: 日期时间选择组件样式边界

`YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 与 `YoTimeRangePicker` 必须继承 Ant Design Vue 对应组件的基础高度、面板交互、格式化、状态和默认禁用态。

#### Scenario: 默认样式

Given 组件是 `YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 或 `YoTimeRangePicker`
Then 根节点必须包含对应稳定类名
And 圆角必须读取 Yostar 圆角 token
And `size="large"` 时字号必须保持 `14px`
And `size="large"` 时左右内边距必须是 `16px`
And 不应全局覆盖 `.ant-picker`。

#### Scenario: 清除图标

Given 组件是 `YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 或 `YoTimeRangePicker`
When 开启 `allowClear`
Then 清除按钮图标尺寸必须是 `16px * 16px`
And 清除按钮必须在选择器高度内垂直居中
And 该覆盖必须收敛在 Yo 根类名下。

#### Scenario: 强禁用视觉

Given 组件是 `YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 或 `YoTimeRangePicker`
Then 默认 `disabled` 必须继承 Ant Design Vue 禁用态
And `disabledVariant="strong"` 必须只将输入文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor、弹层和交互行为。

#### Scenario: 时区标识

Given 组件是 `YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 或 `YoTimeRangePicker`
When 组件传入 `timezone`
Then 展示格式必须追加 `UTC±X` 时区标识
And 时区标识不应占用或替换原日期和时间图标区域
And 该能力必须通过组件封装处理，不应全局覆盖 `.ant-picker`。
