# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoInput 组件闭环

`YoInput` 必须作为公开基础表单组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoInput

Given 使用方需要输入框组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoInput`
And 必须可以从 `@yo-star/yostar-design/input` 子路径导入 `YoInput`
And `YostarDesignResolver` 必须可以解析 `YoInput`
And 预览站必须包含 `/components/input`
And 文档必须包含基础用法、demo 和属性表。
