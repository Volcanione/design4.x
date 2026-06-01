# Design: add-simple-form-controls

## 设计决策

1. 三个模块沿用 `YoInput`、`YoSelect` 的 wrapper 模型，只声明 Yo 自定义 props，其余 AntDV props 和事件通过 attrs 透传。
2. `Radio` 模块同时公开 `YoRadio`、`YoRadioGroup`、`YoRadioButton`，满足单选、组选项和按钮式单选。
3. `Checkbox` 模块同时公开 `YoCheckbox`、`YoCheckboxGroup`，满足单项与多选组。
4. `Switch` 模块公开 `YoSwitch`。
5. 三个模块都支持 `disabledVariant="strong"`，默认禁用态继承 AntDV，strong 只提升文字可读性，不改变禁用行为。
6. 当前样式只收敛稳定类名和禁用态文字，不改写控件尺寸、选中态、动画和布局。

## 样式边界

- `YoRadio` 使用 `yo-radio`，`YoRadioGroup` 使用 `yo-radio-group`，`YoRadioButton` 使用 `yo-radio-button`。
- `YoCheckbox` 使用 `yo-checkbox`，`YoCheckboxGroup` 使用 `yo-checkbox-group`。
- `YoSwitch` 使用 `yo-switch`。
- 所有 AntDV 内部结构覆盖必须以上述 Yo 稳定类名作为选择器起点。
