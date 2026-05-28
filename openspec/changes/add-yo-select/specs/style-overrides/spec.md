# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: YoSelect 样式边界

`YoSelect` 必须继承 Ant Design Vue Select 的基础选择行为、下拉交互、多选行为和默认禁用态。

#### Scenario: YoSelect 默认样式

Given 组件是 `YoSelect`
Then 根节点必须包含稳定类名 `yo-select`
And 圆角必须读取 Yostar 圆角 token
And `size="large"` 时字号必须保持 `14px`
And `size="large"` 时左右内边距必须是 `16px`
And 不应全局覆盖 `.ant-select`。

#### Scenario: YoSelect 清除图标

Given 组件是 `YoSelect`
When 开启 `allowClear`
Then 清除按钮图标尺寸必须是 `16px * 16px`
And 该覆盖必须收敛在 `yo-select` 根类名下。

#### Scenario: YoSelect 强禁用视觉

Given 组件是 `YoSelect`
Then 默认 `disabled` 必须继承 Ant Design Vue Select 禁用态
And `disabledVariant="strong"` 必须只将选中内容或 placeholder 文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor 和交互行为。
