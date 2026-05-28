# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoSelect 按需引入

`YoSelect` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoSelect

Given 使用方导入：

```ts
import { YoSelect } from '@yo-star/yostar-design/select';
import '@yo-star/yostar-design/select/style.css';
```

Then 导入必须成功
And `YoSelect` 必须可以通过 `app.use(YoSelect)` 安装。

#### Scenario: Resolver 解析 YoSelect

Given `unplugin-vue-components` 遇到 `<yo-select>`
When `YostarDesignResolver()` 接收到 `YoSelect`
Then 它必须返回 `@yo-star/yostar-design/select`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/select/style.css`。
