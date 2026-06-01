# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: 简单表单选择组件闭环

`YoRadio`、`YoCheckbox`、`YoSwitch` 必须作为公开基础表单组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 Radio 模块

Given 新增 `YoRadio`
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoRadio`、`YoRadioGroup`、`YoRadioButton`
And 必须可以从 `@yo-star/yostar-design/radio` 子路径导入
And `YostarDesignResolver` 必须可以解析 `YoRadio`、`YoRadioGroup`、`YoRadioButton`
And 预览站必须包含 Radio 基础、分组、按钮样式和禁用状态 demo。

#### Scenario: 新增 Checkbox 模块

Given 新增 `YoCheckbox`
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoCheckbox`、`YoCheckboxGroup`
And 必须可以从 `@yo-star/yostar-design/checkbox` 子路径导入
And `YostarDesignResolver` 必须可以解析 `YoCheckbox`、`YoCheckboxGroup`
And 预览站必须包含 Checkbox 基础、分组、半选和禁用状态 demo。

#### Scenario: 新增 Switch 模块

Given 新增 `YoSwitch`
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoSwitch`
And 必须可以从 `@yo-star/yostar-design/switch` 子路径导入
And `YostarDesignResolver` 必须可以解析 `YoSwitch`
And 预览站必须包含 Switch 基础、文字、尺寸和禁用状态 demo。
