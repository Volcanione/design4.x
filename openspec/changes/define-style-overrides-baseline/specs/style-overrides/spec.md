# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: 样式分层

Yostar Design 的样式必须按稳定层级覆盖 Ant Design Vue，避免无边界地改写 AntDV 内部 DOM。

#### Scenario: token 可表达的变化

Given 某个视觉变化可以通过 AntDV theme token 表达
When 实现 Yostar Design 样式
Then 必须优先通过 `YoConfigProvider` token 处理。

### Requirement: 稳定类名

每个公开 Yo 组件都必须暴露稳定根类名，命名格式为 `yo-<component-name>`。

#### Scenario: Yo 自定义场景

Given 组件存在 Yo 自定义场景
When 场景影响样式
Then 必须追加稳定 modifier class
And 不允许把自定义 prop 透传到 DOM。

### Requirement: 主题 token 基线

组件库必须提供统一的控制台主题基线，并由 `YoConfigProvider` 默认注入 Ant Design Vue theme token。

#### Scenario: 默认控制台主题

Given 使用方写 `<yo-config-provider theme-mode="console">`
When 未传入 `antdTheme`
Then AntDV 组件必须获得 Yostar 控制台主题 token
And Yo 组件样式必须优先读取 `--yo-*` CSS 变量。

#### Scenario: 默认色板

Given 当前主题模式是 `console`
Then 默认主色必须是 `#3A7CFF`
And 默认文字一级必须是 `#313233`
And 默认文字二级和线图标必须是 `#626366`
And 默认文字三级必须是 `#939599`
And 默认占位和禁用必须是 `#C3C3C3`
And 默认描边必须是 `#E6E8ED`
And 默认分割线必须是 `#EDEFF2`
And 默认表格 hover 必须是 `#F9FAFC`
And 默认失效背景必须是 `#F5F6F7`
And 默认背景必须是 `#F7F8FA`
And 默认成功色必须是 `#22C070`
And 默认失败色必须是 `#E84A4A`
And 默认提示色必须是 `#FFA940`。

#### Scenario: 默认圆角

Given 当前主题模式是 `console`
Then 较小尺寸组件圆角必须是 `2px`
And 大部分组件和模块圆角必须是 `4px`
And 大尺寸模块圆角必须是 `8px`。

#### Scenario: 默认字体

Given 当前主题模式是 `console`
Then 字体族必须优先使用 `"Helvetica Neue"`、`Helvetica`、`Arial`、`"PingFang SC"`、`"Hiragino Sans GB"`、`"Microsoft YaHei"`
And 组件库必须提供 `Typography 1` 到 `Typography 7` 的字号与行高 token
And 字重 token 必须包含 `400`、`500`、`600`。

#### Scenario: 默认基础控件高度

Given 当前主题模式是 `console`
Then 基础控件小尺寸高度必须继承 Ant Design Vue 的 `28px`
And 基础控件默认尺寸高度必须继承 Ant Design Vue 的 `32px`
And 基础控件大尺寸高度必须继承 Ant Design Vue 的 `40px`
And Yo 组件不应全局重写基础控件高度。

#### Scenario: YoButton 图标间距

Given 组件是 `YoButton`
Then 按钮整体 padding 必须继承 Ant Design Vue Button
And 图标与文字间距必须是 `6px`
And 不允许通过全局 `.ant-btn` 覆盖按钮间距。

#### Scenario: YoButton 强禁用视觉

Given 组件是 `YoButton`
Then 默认 `disabled` 必须继承 Ant Design Vue Button 禁用态
And `disabledVariant="strong"` 必须只将禁用文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用行为、背景、边框和 cursor。

#### Scenario: 通用禁用视觉

Given Yo 基础控件或表单控件支持 `disabled`
Then 该组件应该支持公共 `disabledVariant`
And `disabledVariant="default"` 必须继承 Ant Design Vue 禁用态
And `disabledVariant="strong"` 必须只提升主内容文字或 label 颜色
And `disabledVariant="strong"` 不应改变禁用行为、背景、边框、cursor 和透明度。

### Requirement: 迭代顺序

组件库必须先建立样式基线和样板组件，再按组件批次推进。

#### Scenario: 新增组件

Given 新增公开 Yo 组件
Then 必须同步完成实现、样式、导出、resolver、文档和 demo。
