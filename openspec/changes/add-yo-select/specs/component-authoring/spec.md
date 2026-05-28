# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoSelect 组件闭环

`YoSelect` 必须作为公开基础表单组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoSelect

Given 使用方需要选择器组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoSelect`
And 必须可以从 `@yo-star/yostar-design/select` 子路径导入 `YoSelect`
And `YostarDesignResolver` 必须可以解析 `YoSelect`
And 预览站必须包含 `/components/select`
And 文档必须包含基础用法、demo 和属性表。
