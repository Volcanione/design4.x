---
title: Button
subtitle: 按钮
group: 通用
order: 1
---

按钮用于开始一个即时操作。`YoButton` 基于 Ant Design Vue 4.x 的 `Button` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `type` 设置按钮样式，其他能力保持和 Ant Design Vue Button 一致。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size | 按钮大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| shape | 按钮形状 | `'default' \| 'circle' \| 'round'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将禁用文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| loading | 是否加载中 | `boolean \| { delay: number }` | `false` |
| danger | 危险按钮样式 | `boolean` | `false` |
| ghost | 幽灵按钮 | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| icon | 图标 | `VNode` | `-` |
| href | 点击跳转地址 | `string` | `-` |
