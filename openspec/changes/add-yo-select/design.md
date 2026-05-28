# Design: add-yo-select

## 设计决策

`YoSelect` 采用与 `YoInput` 一致的 wrapper 模型：

1. 只声明 Yo 自定义 props。
2. 其余 AntDV Select props 与事件通过 attrs 透传。
3. Yo 自定义 props 在 wrapper 内消费，不透传给 AntDV 或 DOM。
4. 根节点追加 `yo-select` 和 `yo-select--console`。
5. 样式只收敛在 `yo-select` 稳定类名下。

## 样式边界

`YoSelect` 第一版只处理当前已确定的公共样式：

- 圆角读取 Yostar token。
- large 尺寸字号保持 `14px`。
- large 尺寸左右内边距为 `16px`。
- `allowClear` 清除图标尺寸为 `16px * 16px`。
- `disabledVariant="strong"` 只提升选中内容或 placeholder 文字色。

下拉菜单、选项、tag、多选项间距等细节先保持 Ant Design Vue 默认实现，后续基于真实预览反馈微调。
