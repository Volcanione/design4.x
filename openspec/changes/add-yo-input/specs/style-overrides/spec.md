# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: YoInput 样式边界

`YoInput` 必须继承 Ant Design Vue Input 的基础高度、padding、交互状态和默认禁用态。

#### Scenario: YoInput 默认样式

Given 组件是 `YoInput`
Then 根节点必须包含稳定类名 `yo-input`
And 圆角必须读取 Yostar 圆角 token
And `size="large"` 时字号必须保持 `14px`
And `size="large"` 时左右内边距必须是 `16px`
And 不应全局覆盖 `.ant-input`。

#### Scenario: YoInput 清除图标

Given 组件是 `YoInput`
When 开启 `allowClear`
Then 清除按钮图标尺寸必须是 `16px * 16px`
And 该覆盖必须收敛在 `yo-input` 根类名下。

#### Scenario: YoInput 强禁用视觉

Given 组件是 `YoInput`
Then 默认 `disabled` 必须继承 Ant Design Vue Input 禁用态
And `disabledVariant="strong"` 必须只将输入文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor 和交互行为。
