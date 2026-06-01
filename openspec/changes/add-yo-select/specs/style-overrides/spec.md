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
And `size="large"` 时圆角必须保持 `4px`
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

#### Scenario: YoSelect 多选模式

Given 组件是 `YoSelect`
When 使用 `mode="multiple"` 或 `mode="tags"`
Then `.ant-select-selection-item` 高度必须是 `20px`
And 不同 `size` 下多选标签高度必须保持一致
And 多选 selector 的 small/default/large 外层高度必须分别收敛为 `28px`、`32px`、`40px`
And 多选 selector 必须保留内部 padding
And 该覆盖必须收敛在 `.yo-select.ant-select-multiple` 下。

#### Scenario: YoSelect 下拉面板

Given 组件是 `YoSelect`
When 下拉面板渲染
Then 下拉面板必须包含稳定类名 `yo-select-dropdown`
And 下拉面板左右内边距必须是 `0`
And 下拉面板圆角必须是 `4px`
And 下拉选项 `.ant-select-item` 上下内边距必须是 `8px`
And 下拉选项 hover 背景必须是 `#F9FAFC`
And 下拉选中项文本颜色必须是主题主色
And 下拉滚动条必须使用 Yostar 滚动条 token
And 下拉滚动条宽度必须是 `4px`
And 下拉虚拟滚动条距离下拉面板右侧必须是 `4px`
And 下拉滚动条默认背景色必须是 `#E5E5E5`
And 虚拟滚动条 `.rc-virtual-list-scrollbar-thumb` 与原生 scrollbar fallback 必须保持一致视觉
And 该覆盖必须收敛在 `.yo-select-dropdown` 下。
