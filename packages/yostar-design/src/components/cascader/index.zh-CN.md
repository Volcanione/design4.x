---
title: Cascader
subtitle: 级联选择
group: 数据录入
order: 4
---

级联选择用于从多层级数据中逐级选择目标项。`YoCascader` 基于 Ant Design Vue 4.x 的 `Cascader` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `options` 描述层级选项，配合 `v-model:value` 绑定选中路径。需要在中间层级也可选时，可以开启 `changeOnSelect`。

`size="large"` 时，级联选择高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。支持清除按钮时，清除图标尺寸统一为 `16px * 16px`。

多选模式下，选中 tag 高度统一为 `20px`，并复用 Select 多选的间距策略。下拉面板会自动带有 `yo-cascader-dropdown` 稳定类名，面板左右内边距为 `0`，圆角为 `4px`，选项上下内边距为 `8px`，选项 hover 背景为 `#F9FAFC`，激活项文本色为主题主色。

默认禁用态继承 Ant Design Vue，需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前选中路径。单选为路径数组，多选为路径数组集合 | `Array` | `-` |
| options | 可选项数据源 | `CascaderOption[]` | `[]` |
| placeholder | 占位文本 | `string` | `-` |
| size | 选择器大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将选中内容文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| allowClear | 是否支持清除 | `boolean` | `true` |
| multiple | 是否多选 | `boolean` | `false` |
| showSearch | 是否支持搜索，或传入搜索配置 | `boolean \| object` | `false` |
| changeOnSelect | 是否允许选择任意一级选项 | `boolean` | `false` |
| loadData | 动态加载选项 | `Function` | `-` |
| fieldNames | 自定义 `options` 中 label、value、children 字段 | `object` | `-` |
| displayRender | 选择后展示渲染函数 | `Function` | `-` |
| showCheckedStrategy | 多选时定义选中项回填方式 | `Cascader.SHOW_PARENT \| Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
