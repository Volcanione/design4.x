# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoInput 按需引入

`YoInput` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoInput

Given 使用方导入：

```ts
import { YoInput } from '@yo-star/yostar-design/input';
import '@yo-star/yostar-design/input/style.css';
```

Then 导入必须成功
And `YoInput` 必须可以通过 `app.use(YoInput)` 安装。

#### Scenario: Resolver 解析 YoInput

Given `unplugin-vue-components` 遇到 `<yo-input>`
When `YostarDesignResolver()` 接收到 `YoInput`
Then 它必须返回 `@yo-star/yostar-design/input`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/input/style.css`。

#### Scenario: Resolver 解析 YoTextarea

Given `unplugin-vue-components` 遇到 `<yo-textarea>`
When `YostarDesignResolver()` 接收到 `YoTextarea`
Then 它必须返回 `@yo-star/yostar-design/input`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/input/style.css`。
