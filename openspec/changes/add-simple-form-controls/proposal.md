# Change Proposal: add-simple-form-controls

## 背景

表单基础组件批次已经包含 `YoInput` 与 `YoSelect`，下一步需要补齐简单选择控件，便于业务页面使用统一的 `yo-*` 命名、resolver 按需引入和禁用态视觉规则。

## 范围

- 新增 `YoRadio`、`YoRadioGroup`、`YoRadioButton`。
- 新增 `YoCheckbox`、`YoCheckboxGroup`。
- 新增 `YoSwitch`。
- 同步全量入口、全局类型、resolver、package exports、预览站文档和 demo。

## 非目标

- 不重写 Ant Design Vue Radio、Checkbox、Switch 的核心交互。
- 不在本批次定制复杂尺寸、动画或选中态视觉。
