# 构建与发布规范

## Requirements

### Requirement: 全量包构建

组件库必须输出全量包产物：

- `dist/yostar-design.es.js`
- `dist/yostar-design.umd.cjs`
- `dist/yostar-design.css`
- `dist/index.d.ts`

#### Scenario: 执行组件库构建

Given 执行 `pnpm run build:lib`
Then 全量包产物必须存在。

### Requirement: 子路径构建

组件库必须为每个公开组件和 resolver 输出子路径产物。

当前必须存在的子路径：

- `dist/button/index.js`
- `dist/config-provider/index.js`
- `dist/space/index.js`
- `dist/resolver/index.js`

#### Scenario: 导入 Button 子路径

Given 组件库已经构建完成
When 使用方导入 `@yo-star/yostar-design/button`
Then 该导入必须解析到 `dist/button/index.js`。

### Requirement: 样式路径完整性

所有被生成声明文件引用到的样式路径，都必须在 `dist` 中真实存在。

#### Scenario: Button 声明导入 Less

Given `dist/components/button/Button.d.ts` 导入 `./style/index.less`
Then `dist/components/button/style/index.less` 必须存在。

