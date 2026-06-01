# Design: add-yo-input-number

## 设计决策

`YoInputNumber` 采用现有 wrapper 模型：

1. 只声明 Yo 自定义 props。
2. 其余 AntDV InputNumber props 与事件通过 attrs 透传。
3. Yo 自定义 props 在 wrapper 内消费，不透传给 AntDV 或 DOM。
4. 根节点追加 `yo-input-number` 和 `yo-input-number--console`。
5. 样式只收敛在 `yo-input-number` 稳定类名下。

`disabledVariant` 复用公共 helper：

- `default`：完全继承 AntDV InputNumber 禁用态。
- `strong`：只提升禁用输入文字颜色为一级文字色。

## 样式边界

`YoInputNumber` 第一版只处理当前已确定的公共样式：

- 圆角读取 Yostar token。
- `size="large"` 字号保持 `14px`。
- `size="large"` 输入区域左右内边距为 `16px`。
- 强禁用视觉只调整输入文字色。

高度、步进器、hover、focus、error、warning、formatter、parser、precision 等能力继续由 AntDV 原组件负责。

## 后续扩展

如果后续需要清除按钮、单位选择器或筛选形态，应基于明确设计稿再扩展 props 或组合组件，避免在基础 `YoInputNumber` 中提前引入未确认交互。
