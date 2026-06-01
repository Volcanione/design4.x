---
title: Checkbox
subtitle: 复选框
group: 数据录入
order: 4
---

复选框用于在一组选项中选择一个或多个值。`YoCheckbox` 基于 Ant Design Vue 4.x 的 `Checkbox` 扩展，默认接收原组件的属性和事件。

## 基础用法

单个复选框使用 `<yo-checkbox>`，组选项推荐使用 `<yo-checkbox-group>`。组内可以通过 `options` 快速配置，也可以内嵌多个 `<yo-checkbox>`，用于需要自定义选项内容的场景。

禁用态默认继承 Ant Design Vue。需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`，该模式只提升禁用文本颜色，不改变禁用行为。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked / v-model:checked | 单个 Checkbox 是否选中 | `boolean` | `false` |
| value / v-model:value | CheckboxGroup 当前选中值 | `Array<string \| number>` | `[]` |
| options | CheckboxGroup 选项数据 | `Array<string \| number \| { label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| indeterminate | 设置 indeterminate 状态 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
