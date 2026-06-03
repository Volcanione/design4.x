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

#### Scenario: 新增 YoInput 搜索外观

Given 使用方需要弱化搜索输入框视觉
Then `YoInput` 必须支持 `appearance="search"`
And 预览站 `/components/input` 必须包含搜索外观 demo
And 文档必须说明 `appearance` 属性。

#### Scenario: 新增 YoTextarea

Given 使用方需要多行文本输入组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoTextarea`
And 必须可以从 `@yo-star/yostar-design/input` 子路径导入 `YoTextarea`
And `YostarDesignResolver` 必须可以解析 `YoTextarea`
And 预览站 `/components/input` 必须包含 textarea demo
And 文档必须包含 textarea 用法和属性表。
