# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoInputNumber 组件闭环

`YoInputNumber` 必须作为公开基础表单组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoInputNumber

Given 使用方需要数字输入框组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoInputNumber`
And 必须可以从 `@yo-star/yostar-design/input-number` 子路径导入 `YoInputNumber`
And `YostarDesignResolver` 必须可以解析 `YoInputNumber`
And 预览站必须包含 `/components/input-number`
And 文档必须包含基础用法、demo 和属性表。

#### Scenario: 控制增减按钮显示

Given 组件是 `YoInputNumber`
When 使用方传入 `controls`
Then `controls=true` 必须显示右侧增减按钮
And `controls=false` 必须隐藏右侧增减按钮
And 该能力必须复用 Ant Design Vue InputNumber 的原生 `controls` 行为。
