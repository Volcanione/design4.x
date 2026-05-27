# 按需引入规范

## Requirements

### Requirement: 手动子路径引入

组件库必须为每个公开组件提供 ESM 子路径入口。

每个组件子路径必须提供：

- JavaScript 入口
- TypeScript 声明入口
- 如组件有样式，必须提供 `style.css` side-effect 入口

#### Scenario: 手动导入 YoButton

Given 使用方导入：

```ts
import { YoButton } from '@yo-star/yostar-design/button';
import '@yo-star/yostar-design/button/style.css';
```

Then 导入必须成功
And `YoButton` 必须可以通过 `app.use(YoButton)` 安装。

### Requirement: Resolver 自动引入

组件库必须暴露 `@yo-star/yostar-design/resolver`。

`YostarDesignResolver` 必须把 PascalCase 组件名映射到对应组件子路径。

#### Scenario: 解析 YoButton

Given `unplugin-vue-components` 遇到 `<yo-button>`
When `YostarDesignResolver()` 接收到 `YoButton`
Then 它必须返回：

```ts
{
  name: 'YoButton',
  from: '@yo-star/yostar-design/button',
  sideEffects: '@yo-star/yostar-design/button/style.css'
}
```

### Requirement: 消费项目类型生成

使用 resolver 的消费项目必须把 `dts` 生成到 `tsconfig.json` 能覆盖的位置。

#### Scenario: 在 src 目录生成类型

Given 使用方配置：

```ts
Components({
  dts: 'src/components.d.ts',
  resolvers: [YostarDesignResolver()],
})
```

Then `src/components.d.ts` 必须包含 `GlobalComponents` 声明
And Volar 必须能高亮 Vue 模板中的 `yo-*` 组件。

