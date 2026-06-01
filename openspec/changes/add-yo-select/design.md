# Design: add-yo-select

## 设计决策

`YoSelect` 采用与 `YoInput` 一致的 wrapper 模型：

1. 只声明 Yo 自定义 props。
2. 其余 AntDV Select props 与事件通过 attrs 透传。
3. Yo 自定义 props 在 wrapper 内消费，不透传给 AntDV 或 DOM。
4. 根节点追加 `yo-select` 和 `yo-select--console`。
5. 样式只收敛在 `yo-select` 稳定类名下。
6. `YoSelectOption` 注册为模板可用的 `<yo-select-option>`，直接复用 Ant Design Vue 的 `Select.Option`，避免破坏 AntDV 的 option 子节点识别逻辑。
7. `variant="filter"` 或 `label` 会启用筛选样式外层结构，默认 Select 渲染路径保持不变。

## 样式边界

`YoSelect` 第一版只处理当前已确定的公共样式：

- 圆角读取 Yostar token。
- large 尺寸字号保持 `14px`。
- large 尺寸左右内边距为 `16px`。
- large 尺寸圆角保持 `4px`。
- `allowClear` 清除图标尺寸为 `16px * 16px`。
- 多选模式标签高度统一为 `20px`，并保留多选 selector 内部 padding。
- 下拉面板通过 `yo-select-dropdown` 稳定类名覆盖，面板左右内边距为 `0`，圆角为 `4px`，选项上下内边距为 `8px`，选项 hover 背景为 `#F9FAFC`，选中项文本色为主题主色，滚动条宽度为 `4px`，距离面板右侧 `4px`，默认背景色为 `#E5E5E5`。
- 筛选样式使用 `yo-select-filter` 外层类名，label 宽度根据文字内容自适应，默认态 label 与选择器之间展示 `#E6E8ED` 分割线，hover 时隐藏分割线并将右侧 Select 背景与边框调整为 `#EEEFF2`，下拉宽度和左侧位置对齐整个外层容器。
- `disabledVariant="strong"` 只提升选中内容或 placeholder 文字色。

下拉菜单、选项、tag、多选项间距等细节先保持 Ant Design Vue 默认实现，后续基于真实预览反馈微调。
