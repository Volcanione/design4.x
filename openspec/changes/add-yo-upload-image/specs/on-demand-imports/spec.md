# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoUpload 按需引入

`YoUpload` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoUpload

Given 使用方导入：

```ts
import { YoUpload } from '@yo-star/yostar-design/upload';
import '@yo-star/yostar-design/upload/style.css';
```

Then 导入必须成功
And `YoUpload` 必须可以通过 `app.use(YoUpload)` 安装。

#### Scenario: Resolver 解析 YoUpload

Given `unplugin-vue-components` 遇到 `<yo-upload>`
When `YostarDesignResolver()` 接收到 `YoUpload`
Then 它必须返回 `@yo-star/yostar-design/upload`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/upload/style.css`。
