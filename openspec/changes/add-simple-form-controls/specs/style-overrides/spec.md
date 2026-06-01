# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: 简单表单选择组件样式边界

`YoRadio`、`YoCheckbox`、`YoSwitch` 必须继承 Ant Design Vue 对应组件的基础交互、禁用态和尺寸。只有明确设计差异的选中态可以在 Yo 稳定类名下局部覆盖。

#### Scenario: 稳定类名

Given 组件是简单表单选择控件
Then Radio 模块必须提供 `yo-radio`、`yo-radio-group`、`yo-radio-button`
And Checkbox 模块必须提供 `yo-checkbox`、`yo-checkbox-group`
And Switch 模块必须提供 `yo-switch`
And 不应全局覆盖 `.ant-radio`、`.ant-checkbox` 或 `.ant-switch`。

#### Scenario: Radio 选中态

Given 组件是 `YoRadio` 或 `YoRadioGroup` 内的普通 Radio
When Radio 处于 checked 状态
Then 内圈背景必须保持容器白色
And 外圈边框必须使用主题主色
And 中心圆点必须使用主题主色
And 中心圆点尺寸必须是 `8px * 8px`
And 该覆盖不能影响 `YoRadioButton` 的按钮式选中态。

#### Scenario: Checkbox 圆角

Given 组件是 `YoCheckbox` 或 `YoCheckboxGroup` 内的 Checkbox
When Checkbox 渲染勾选框
Then 勾选框圆角必须使用 `--yo-radius-sm`
And 实际圆角值必须是 `2px`
And 不应全局覆盖 `.ant-checkbox`。

#### Scenario: Switch 默认尺寸

Given 组件是默认尺寸的 `YoSwitch`
When Switch 渲染
Then 轨道高度必须是 `22px`
And 手柄尺寸必须随轨道高度保持居中
And 该覆盖不能影响 `size="small"` 的 Switch。

#### Scenario: 强禁用视觉

Given 组件支持 `disabledVariant="strong"`
When 组件处于 disabled 状态
Then 默认禁用态必须继承 Ant Design Vue
And `disabledVariant="strong"` 必须只提升文本颜色
And 不应改变禁用背景、边框、cursor、透明度和交互行为。
