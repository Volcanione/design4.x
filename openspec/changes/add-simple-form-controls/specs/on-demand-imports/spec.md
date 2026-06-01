# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: 简单表单选择组件按需引入

`YoRadio`、`YoCheckbox`、`YoSwitch` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: Resolver 解析简单选择控件

Given `unplugin-vue-components` 遇到 `<yo-radio>`、`<yo-checkbox>` 或 `<yo-switch>`
When `YostarDesignResolver()` 接收到对应 PascalCase 组件名
Then 它必须返回对应的 `@yo-star/yostar-design/radio`、`@yo-star/yostar-design/checkbox` 或 `@yo-star/yostar-design/switch`
And 默认 sideEffects 必须指向对应组件的 `style.css`。
