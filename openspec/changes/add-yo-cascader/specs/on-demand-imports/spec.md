# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: YoCascader 按需引入

`YoCascader` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoCascader

Given 使用方导入：

```ts
import { YoCascader } from '@yo-star/yostar-design/cascader';
import '@yo-star/yostar-design/cascader/style.css';
```

Then 导入必须成功
And `YoCascader` 必须可以通过 `app.use(YoCascader)` 安装。

#### Scenario: Resolver 解析 YoCascader

Given `unplugin-vue-components` 遇到 `<yo-cascader>`
When `YostarDesignResolver()` 接收到 `YoCascader`
Then 它必须返回 `@yo-star/yostar-design/cascader`
And 默认 sideEffects 必须指向 `@yo-star/yostar-design/cascader/style.css`。
