---
title: Select
subtitle: 选择器
group: 数据录入
order: 2
---

选择器用于在一组候选项中选择一个或多个值。`YoSelect` 基于 Ant Design Vue 4.x 的 `Select` 扩展，默认接收原组件的属性和事件。

## 基础用法

推荐优先使用 `options` 配置选项，也可以继续使用 Ant Design Vue Select 支持的插槽能力。

`size="large"` 时，选择器高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。支持清除按钮的选择器中，清除图标尺寸统一为 `16px * 16px`。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前选中值 | `string \| number \| Array` | `-` |
| options | 选项数据 | `Array<{ label: string; value: string \| number }>` | `[]` |
| placeholder | 占位文本 | `string` | `-` |
| size | 选择器大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将选中内容文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| allowClear | 是否显示清除按钮 | `boolean` | `false` |
| mode | 设置 Select 模式 | `'multiple' \| 'tags'` | `-` |
| showSearch | 是否支持搜索 | `boolean` | `false` |
| filterOption | 是否根据输入项筛选，或自定义筛选函数 | `boolean \| Function` | `true` |
| loading | 是否加载中 | `boolean` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
