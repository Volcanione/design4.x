# Design: add-date-time-pickers

## 设计决策

`YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 与 `YoTimeRangePicker` 采用现有 wrapper 模型：

1. 只声明 Yo 自定义 props。
2. 其余 AntDV props 与事件通过 attrs 透传。
3. Yo 自定义 props 在 wrapper 内消费，不透传给 AntDV 或 DOM。
4. 根节点追加 `yo-date-picker` / `yo-time-picker` 和对应 `--console` 主题类名；范围选择额外追加 `yo-date-range-picker` / `yo-time-range-picker`。
5. 弹层追加 `yo-date-picker-dropdown` / `yo-time-picker-dropdown` 稳定类名。
6. 样式只收敛在 Yo 稳定类名下。

`disabledVariant` 复用公共 helper：

- `default`：完全继承 AntDV 禁用态。
- `strong`：只提升禁用输入文字颜色为一级文字色。

`timezone` 用于跨时区展示：

- 支持 `local`、`UTC+8`、`UTC+08:00`、`+08:00` 和数字偏移。
- 传入后按指定 UTC 偏移展示 Dayjs 值，并通过合并 `format` 在输入框内容中追加 `UTC±X` 标识。
- 事件输出会将用户选择的时区墙上时间转换回对应的绝对时间，保证 `UTC+8 17:00` 与 `UTC+9 18:00` 可表达同一时间戳。
- 第一版聚焦 Dayjs 值；`valueFormat` 字符串值继续保持 AntDV 原行为。
- 范围选择复用同一套转换逻辑，对数组内的起止 Dayjs 值逐项转换。

范围组件暴露策略：

- 提供独立组件 `YoDateRangePicker` / `YoTimeRangePicker`。
- 同时挂载到 `YoDatePicker.RangePicker` / `YoTimePicker.RangePicker`，兼容 DatePicker.RangePicker / TimePicker.RangePicker 的认知模型。
- `YoDatePicker` / `YoTimePicker` 单独 `app.use()` 时同步注册对应范围组件。

## 样式边界

第一版只处理当前已确定的公共样式：

- 圆角读取 Yostar token。
- `size="large"` 字号保持 `14px`。
- `size="large"` 左右内边距为 `16px`。
- 清除图标尺寸为 `16px * 16px`。
- 时区标识作为展示格式的一部分，不占用原日期/时间图标区域。
- 强禁用视觉只调整输入文字色。

高度、面板、hover、focus、error、warning、日期禁用、时间步长等能力继续由 AntDV 原组件负责。

## 后续扩展

如果后续需要快捷范围、面板单元格样式或滚动条样式，应基于明确设计稿再扩展，避免在基础日期时间选择器中提前引入未确认交互。
