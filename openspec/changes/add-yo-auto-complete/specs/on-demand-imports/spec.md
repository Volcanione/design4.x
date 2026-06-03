# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoAutoComplete 按需引入

`YoAutoComplete` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoAutoComplete

Given 使用方导入：

```ts
import { YoAutoComplete } from '@yo-star/yostar-design/auto-complete';
import '@yo-star/yostar-design/auto-complete/style.css';
```

Then 导入必须成功
And `YoAutoComplete` 必须可以通过 `app.use(YoAutoComplete)` 安装。

#### Scenario: Resolver 解析 YoAutoComplete

Given `unplugin-vue-components` 遇到 `<yo-auto-complete>`
When `YostarDesignResolver()` 接收到 `YoAutoComplete`
Then 它必须返回 `@yo-star/yostar-design/auto-complete`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/auto-complete/style.css`。
