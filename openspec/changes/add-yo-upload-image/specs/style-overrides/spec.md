# Capability Delta: style-overrides

## ADDED Requirements

### Requirement: YoUpload 图片上传样式

`YoUpload` 必须提供统一的图片上传触发区域样式，同时保留 Ant Design Vue Upload 原生交互语义。

#### Scenario: 默认图片上传外观

Given 组件是 `YoUpload`
When 使用方未传入 `width`、`height`、`accept` 和 `listType`
Then 上传触发区域宽度必须为 `80px`
And 上传触发区域高度必须为 `80px`
And `accept` 必须默认为 `image/*`
And `listType` 必须默认为 `picture-card`
And 默认触发内容必须为 `+`
And 上传触发区域圆角必须为 `4px`。

#### Scenario: 自定义尺寸

Given 组件是 `YoUpload`
When 使用方传入 `width` 或 `height`
Then 上传触发区域和图片列表项必须同步使用对应尺寸
And 数值类型必须按 `px` 处理
And 字符串类型必须原样作为 CSS 尺寸使用。

#### Scenario: 上传后图片展示

Given 组件是 `YoUpload`
When 上传列表中展示图片
Then 图片列表项必须与上传触发区域保持相同宽高
And 图片列表项内边距必须为 `0`
And 图片列表项和图片圆角必须为 `4px`
And 图片列表项的 `::before` 伪类遮罩必须铺满图片列表项
And 上传列表的 `::before` 和 `::after` 布局辅助伪类不得作为 flex item 占位。

#### Scenario: 自定义触发内容

Given 组件是 `YoUpload`
When 使用方提供默认插槽
Then 默认 `+` 不应渲染
And 默认插槽内容必须作为上传触发内容渲染。

#### Scenario: 上传说明

Given 组件是 `YoUpload`
When 使用方传入 `description` 或 `description` 插槽
Then 上传区域下方必须展示说明内容
And 未传入说明时不得占用额外说明区域。
