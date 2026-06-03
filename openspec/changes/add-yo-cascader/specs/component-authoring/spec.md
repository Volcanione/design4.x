# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoCascader 组件闭环

`YoCascader` 必须作为公开数据录入组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoCascader

Given 使用方需要级联选择组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoCascader`
And 必须可以从 `@yo-star/yostar-design/cascader` 子路径导入 `YoCascader`
And `YostarDesignResolver` 必须可以解析 `YoCascader`
And 预览站必须包含 `/components/cascader`
And 文档必须包含基础用法、demo 和属性表。

#### Scenario: 保留 AntDV Cascader 原生能力

Given 组件是 `YoCascader`
When 使用方传入 Ant Design Vue Cascader 支持的 `options`、`multiple`、`showSearch`、`changeOnSelect`、`loadData`、`fieldNames`、`displayRender` 或事件
Then 组件必须透传给底层 Ant Design Vue Cascader
And 不得改变原生 value 数据结构和事件参数。
