---
title: Switch
subtitle: 开关
group: 数据录入
order: 5
---

开关用于表达两种互斥状态之间的切换。`YoSwitch` 基于 Ant Design Vue 4.x 的 `Switch` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `v-model:checked` 绑定开关状态。带文字的开关可以使用 `checkedChildren` 与 `unCheckedChildren`，或继续使用 Ant Design Vue 支持的同名插槽。

禁用态默认继承 Ant Design Vue。需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`，该模式只提升开关内部文字颜色，不改变禁用行为。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked / v-model:checked | 是否选中 | `boolean \| string \| number` | `false` |
| checkedChildren | 选中时内容 | `string` | `-` |
| unCheckedChildren | 非选中时内容 | `string` | `-` |
| checkedValue | 选中时的值 | `boolean \| string \| number` | `true` |
| unCheckedValue | 非选中时的值 | `boolean \| string \| number` | `false` |
| size | 开关大小 | `'default' \| 'small'` | `'default'` |
| loading | 加载中状态 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将内部文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
