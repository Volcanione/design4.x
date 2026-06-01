---
title: TimePicker
subtitle: 时间选择器
group: 数据录入
order: 7
---

时间选择器用于选择时间。`YoTimePicker` 基于 Ant Design Vue 4.x 的 `TimePicker` 扩展，默认接收原组件的属性和事件。

## 基础用法

使用 `v-model:value` 绑定时间值。默认值类型跟随 Ant Design Vue 的 dayjs 版本；如果业务需要字符串，可以使用 `valueFormat`。

跨时区展示 Dayjs 值时可以使用 `timezone`。例如同一个 UTC 时间戳，在 `timezone="UTC+8"` 下会显示为 UTC+8 时间，在 `timezone="UTC+9"` 下会显示为 UTC+9 时间，输入框内容会追加对应 UTC 标识。`timezone` 支持 `local`、`UTC+8`、`UTC+08:00`、`+08:00` 或数字 `8`。使用 `valueFormat` 绑定字符串时，字符串值继续保持 Ant Design Vue 原行为。

`size="large"` 时，时间选择器高度保持 `40px`，字号保持 `14px`，左右内边距为 `16px`。开启 `allowClear` 时，清除图标尺寸统一为 `16px * 16px`。默认禁用态继承 Ant Design Vue，需要在禁用态保留更强文字可读性时，可以使用 `disabledVariant="strong"`。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value / v-model:value | 当前时间 | `dayjs \| string` | `-` |
| defaultValue | 默认时间 | `dayjs \| string` | `-` |
| valueFormat | 格式化绑定值，设置后返回字符串 | `string` | `-` |
| placeholder | 占位文本 | `string` | `-` |
| size | 选择器大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledVariant | 禁用态视觉。`default` 完全继承 AntDV，`strong` 仅将输入文字提升为一级文字色 | `'default' \| 'strong'` | `'default'` |
| timezone | 展示时区。传入后按该时区展示 Dayjs 值，并在输入框内容中追加 UTC 标识 | `'local' \| string \| number` | `-` |
| allowClear | 是否显示清除按钮 | `boolean` | `true` |
| format | 展示格式 | `string` | `HH:mm:ss` |
| use12Hours | 是否使用 12 小时制 | `boolean` | `false` |
| hourStep | 小时选项间隔 | `number` | `1` |
| minuteStep | 分钟选项间隔 | `number` | `1` |
| secondStep | 秒选项间隔 | `number` | `1` |
| hideDisabledOptions | 是否隐藏禁止选择的选项 | `boolean` | `false` |
| status | 校验状态 | `'error' \| 'warning'` | `-` |
