---
title: Input
subtitle: 输入框
group: 数据录入
order: 1
---

输入框用于接收用户输入。`YoInput` 基于 Ant Design Vue 4.x 的 `Input` 扩展，默认接收原组件的属性和事件。多行文本输入使用 `YoTextarea`，对应 Ant Design Vue 的 `Input.TextArea`。

## 基础用法

使用 `v-model:value` 绑定输入值，`size` 控制输入框尺寸。基础高度和默认禁用态保持与 Ant Design Vue 一致。

`size="large"` 时，输入框高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。支持清除按钮的输入框中，清除图标尺寸统一为 `16px * 16px`。

需要弱化搜索输入框视觉时，可以使用 `appearance="search"`。该外观只调整背景色、边框色、hover 和 focus 状态，不接管 `size` 高度体系。

`YoTextarea` 支持 `rows`、`autoSize`、`showCount`、`maxlength`、`allowClear` 等原 TextArea 能力，并复用输入框的圆角、字号、禁用态规则。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 输入框内容 | `string \| number` | `-` |
| placeholder | 占位文本 | `string \| number` | `-` |
| size | 输入框大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| appearance | 输入框外观。`search` 用于弱化搜索输入框视觉，保留原 `size` 高度 | `'default' \| 'search'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| allowClear | 是否显示清除按钮 | `boolean` | `false` |
| maxlength | 最大输入长度 | `number` | `-` |
| showCount | 是否展示字数 | `boolean \| { formatter: Function }` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
| prefix | 前缀内容 | `VNode \| slot` | `-` |
| suffix | 后缀内容 | `VNode \| slot` | `-` |

## Textarea Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 多行文本内容 | `string \| number` | `-` |
| placeholder | 占位文本 | `string \| number` | `-` |
| rows | 文本域行数 | `number` | `-` |
| autoSize | 自适应内容高度，可限制最小/最大行数 | `boolean \| { minRows?: number; maxRows?: number }` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| allowClear | 是否显示清除按钮 | `boolean` | `false` |
| maxlength | 最大输入长度 | `number` | `-` |
| showCount | 是否展示字数 | `boolean \| { formatter: Function }` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
