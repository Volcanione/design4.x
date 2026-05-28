# Design: add-yo-input

## 设计决策

`YoInput` 采用与 `YoButton` 一致的 wrapper 模型：

1. 只声明 Yo 自定义 props。
2. 其余 AntDV Input props 与事件通过 attrs 透传。
3. Yo 自定义 props 在 wrapper 内消费，不透传给 AntDV 或 DOM。
4. 根节点追加 `yo-input` 和 `yo-input--console`。
5. 样式只收敛在 `yo-input` 稳定类名下。

`disabledVariant` 复用公共 helper：

- `default`：完全继承 AntDV Input 禁用态。
- `strong`：只提升禁用输入文字颜色为一级文字色。

## 样式边界

`YoInput` 当前只做两类局部样式：

- 圆角读取 Yostar token。
- 强禁用视觉只调整文字色。
- large 尺寸左右内边距调整为 `16px`。
- large 尺寸字号保持 `14px`。
- `allowClear` 清除图标尺寸调整为 `16px * 16px`。

高度、placeholder、focus、error、warning 等能力继续由 AntDV token 与原组件状态负责。

## 后续扩展

如果后续需要支持 `YoInput.Password`、`YoInput.Search` 或 `YoTextarea`，应作为独立组件或明确的子组件 API 设计，避免一次性把所有 Input 变体混在基础 `YoInput` 中。
