# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoAutoComplete 组件闭环

`YoAutoComplete` 必须作为公开数据录入组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoAutoComplete

Given 使用方需要自动完成组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoAutoComplete`
And 必须可以从 `@yo-star/yostar-design/auto-complete` 子路径导入 `YoAutoComplete`
And `YostarDesignResolver` 必须可以解析 `YoAutoComplete`
And 预览站必须包含 `/components/auto-complete`
And 文档必须包含基础用法、demo 和属性表。

#### Scenario: 保留 AntDV AutoComplete 原生能力

Given 组件是 `YoAutoComplete`
When 使用方传入 Ant Design Vue AutoComplete 支持的 `options`、`filterOption`、`backfill`、`onSearch`、`onSelect` 或插槽
Then 组件必须透传给底层 Ant Design Vue AutoComplete
And 不得改变原生 value 数据结构和事件参数。

#### Scenario: Option 子组件

Given 使用方需要用模板声明候选项
Then 必须可以使用 `<yo-auto-complete-option>`
And resolver 必须可以解析 `YoAutoCompleteOption`。
