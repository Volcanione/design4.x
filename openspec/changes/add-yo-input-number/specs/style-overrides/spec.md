# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: YoInputNumber 样式边界

`YoInputNumber` 必须继承 Ant Design Vue InputNumber 的基础高度、步进器交互、格式化、精度、状态和默认禁用态。

#### Scenario: YoInputNumber 默认样式

Given 组件是 `YoInputNumber`
Then 根节点必须包含稳定类名 `yo-input-number`
And 圆角必须读取 Yostar 圆角 token
And `size="large"` 时字号必须保持 `14px`
And `size="large"` 时输入区域左右内边距必须是 `16px`
And 不应全局覆盖 `.ant-input-number`。

#### Scenario: YoInputNumber 强禁用视觉

Given 组件是 `YoInputNumber`
Then 默认 `disabled` 必须继承 Ant Design Vue InputNumber 禁用态
And `disabledVariant="strong"` 必须只将输入文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor、步进器和交互行为。
