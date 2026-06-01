---
title: Radio
subtitle: 单选框
group: 数据录入
order: 3
---

单选框用于在一组选项中选择一个值。`YoRadio` 基于 Ant Design Vue 4.x 的 `Radio` 扩展，默认接收原组件的属性和事件。

## 基础用法

单个单选框使用 `<yo-radio>`，一组选项推荐使用 `<yo-radio-group>`。按钮式单选可以使用 `<yo-radio-button>`，也可以通过 group 的 `optionType="button"` 配置。

禁用态默认继承 Ant Design Vue。需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`，该模式只提升禁用文本颜色，不改变禁用行为。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | RadioGroup 当前选中值 | `string \| number \| boolean` | `-` |
| checked / v-model:checked | 单个 Radio 是否选中 | `boolean` | `false` |
| options | RadioGroup 选项数据 | `Array<string \| number \| { label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| size | RadioButton / RadioGroup 大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| optionType | RadioGroup 选项类型 | `'default' \| 'button'` | `'default'` |
