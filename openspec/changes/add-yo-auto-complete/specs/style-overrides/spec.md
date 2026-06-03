# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: YoAutoComplete 通用样式覆盖

`YoAutoComplete` 必须复用组件库当前的数据录入通用样式策略，避免独立漂移。

#### Scenario: Large 尺寸

Given 组件是 `YoAutoComplete`
When 使用方传入 `size="large"`
Then 展示高度必须与 Select/Input large 保持一致
And 字号必须为 `14px`
And 左右内边距必须为 `16px`。

#### Scenario: 清除按钮

Given 组件是 `YoAutoComplete`
When 显示清除按钮
Then 清除按钮尺寸必须为 `16px * 16px`
And 图标必须上下居中。

#### Scenario: 下拉面板

Given `YoAutoComplete` 下拉面板打开
Then 面板必须带有 `yo-auto-complete-dropdown` 稳定类名
And 面板左右 padding 必须为 `0`
And 面板圆角必须为 `4px`
And 选项上下 padding 必须为 `8px`
And 选项 hover 背景必须使用 `#F9FAFC`
And 选中选项文本色必须使用主题主色
And 滚动条宽度必须为 `4px`。

#### Scenario: 强禁用态

Given 组件是 `YoAutoComplete`
When 使用方传入 `disabled` 和 `disabledVariant="strong"`
Then 输入文字必须使用一级文字色
And 其余禁用交互语义必须继承 Ant Design Vue。
