---
title: DatePicker
subtitle: 日期选择器
group: 数据录入
order: 6
---

日期选择器用于选择日期、周、月份、季度或年份。`YoDatePicker` 基于 Ant Design Vue 4.x 的 `DatePicker` 扩展，`YoDateRangePicker` 基于 `DatePicker.RangePicker` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `v-model:value` 绑定日期值。默认值类型跟随 Ant Design Vue 的 dayjs 版本；如果业务需要字符串，可以使用 `valueFormat`。

跨时区展示 Dayjs 值时可以使用 `timezone`。例如同一个 UTC 时间戳，在 `timezone="UTC+8"` 下会显示为 UTC+8 时间，在 `timezone="UTC+9"` 下会显示为 UTC+9 时间，输入框内容会追加对应 UTC 标识。`timezone` 支持 `local`、`UTC+8`、`UTC+08:00`、`+08:00` 或数字 `8`。使用 `valueFormat` 绑定字符串时，字符串值继续保持 Ant Design Vue 原行为。

`size="large"` 时，日期选择器高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。开启 `allowClear` 时，清除图标尺寸统一为 `16px * 16px`。默认禁用态继承 Ant Design Vue，需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`。

范围选择可以使用 `YoDateRangePicker`，也可以在脚本中使用 `YoDatePicker.RangePicker`。范围值使用 Ant Design Vue 原本的数组结构；传入 `timezone` 时会对数组内的 Dayjs 值逐项做时区展示和事件输出转换。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前日期 | `dayjs \| string` | `-` |
| defaultValue | 默认日期 | `dayjs \| string` | `-` |
| valueFormat | 格式化绑定值，设置后返回字符串 | `string` | `-` |
| picker | 选择器类型 | `'date' \| 'week' \| 'month' \| 'quarter' \| 'year'` | `'date'` |
| placeholder | 占位文本 | `string` | `-` |
| size | 选择器大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| timezone | 展示时区。传入后按该时区展示 Dayjs 值，并在输入框内容中追加 UTC 标识 | `'local' \| string \| number` | `-` |
| allowClear | 是否显示清除按钮 | `boolean` | `true` |
| showTime | 是否增加时间选择 | `boolean \| object` | `false` |
| format | 展示格式 | `string \| string[] \| Function` | `YYYY-MM-DD` |
| disabledDate | 不可选择的日期 | `Function` | `-` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |

## RangePicker Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前日期范围 | `[dayjs, dayjs] \| [string, string]` | `-` |
| defaultValue | 默认日期范围 | `[dayjs, dayjs] \| [string, string]` | `-` |
| placeholder | 起止占位文本 | `[string, string]` | `-` |
| showTime | 是否增加时间选择 | `boolean \| object` | `false` |
| timezone | 展示时区。传入后按该时区展示 Dayjs 范围值，并在输入框内容中追加 UTC 标识 | `'local' \| string \| number` | `-` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
