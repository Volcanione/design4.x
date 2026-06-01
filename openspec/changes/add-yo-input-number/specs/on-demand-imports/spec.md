# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoInputNumber 按需引入

`YoInputNumber` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoInputNumber

Given 使用方导入：

```ts
import { YoInputNumber } from '@yo-star/yostar-design/input-number';
import '@yo-star/yostar-design/input-number/style.css';
```

Then 导入必须成功
And `YoInputNumber` 必须可以通过 `app.use(YoInputNumber)` 安装。

#### Scenario: Resolver 解析 YoInputNumber

Given `unplugin-vue-components` 遇到 `<yo-input-number>`
When `YostarDesignResolver()` 接收到 `YoInputNumber`
Then 它必须返回 `@yo-star/yostar-design/input-number`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/input-number/style.css`。
