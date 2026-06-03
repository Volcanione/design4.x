---
title: AutoComplete
subtitle: 自动完成
group: 数据录入
order: 5
---

自动完成用于输入时展示候选项。`YoAutoComplete` 基于 Ant Design Vue 4.x 的 `AutoComplete` 扩展，默认接收原组件的属性和事件。

## 基础用法

推荐优先使用 `options` 配置候选项，并通过 `v-model:value` 绑定输入值。需要自定义选项结构时，可以使用 `<yo-auto-complete-option>`。

`YoAutoComplete` 复用当前 Select/Input 的通用输入样式。`size="large"` 时，高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。支持清除按钮时，清除图标尺寸统一为 `16px * 16px`。

下拉面板会自动带有 `yo-auto-complete-dropdown` 稳定类名，面板左右内边距为 `0`，圆角为 `4px`，选项上下内边距为 `8px`。选项 hover 背景为 `#F9FAFC`，选中项文本色为主题主色。

默认禁用态继承 Ant Design Vue，需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前输入值 | `string` | `-` |
| options | 自动完成候选项 | `Array<{ value: string; label?: string }>` | `[]` |
| placeholder | 占位文本 | `string` | `-` |
| size | 输入框大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| allowClear | 是否显示清除按钮 | `boolean` | `false` |
| filterOption | 是否根据输入项筛选，或自定义筛选函数 | `boolean \| Function` | `false` |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | `boolean` | `true` |
| backfill | 使用键盘选择时是否把高亮项回填到输入框 | `boolean` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
