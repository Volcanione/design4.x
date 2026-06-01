---
title: InputNumber
subtitle: 数字输入框
group: 数据录入
order: 3
---

数字输入框用于输入和调整数值。`YoInputNumber` 基于 Ant Design Vue 4.x 的 `InputNumber` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `v-model:value` 绑定数值，`min`、`max`、`step` 和 `precision` 控制数值范围与精度。格式化展示可以继续使用 Ant Design Vue 支持的 `formatter` 与 `parser`。

右侧增减控制按钮通过 `controls` 控制，`controls={false}` 时隐藏按钮区域。

`size="large"` 时，数字输入框高度保持 `40px`，字号保持 `14px`，输入区域左右内边距为 `16px`。默认禁用态继承 Ant Design Vue，需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前数值 | `number \| string` | `-` |
| defaultValue | 初始数值 | `number \| string` | `-` |
| min | 最小值 | `number \| string` | `-Infinity` |
| max | 最大值 | `number \| string` | `Infinity` |
| step | 每次改变步数 | `number \| string` | `1` |
| precision | 数值精度 | `number` | `-` |
| size | 输入框大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| controls | 是否显示增减按钮 | `boolean` | `true` |
| formatter | 指定输入框展示值的格式 | `Function` | `-` |
| parser | 指定从 formatter 里转换回数字的方式 | `Function` | `-` |
| stringMode | 字符串模式，用于高精度小数 | `boolean` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
