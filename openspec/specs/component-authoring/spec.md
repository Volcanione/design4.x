# 组件编写规范

## Requirements

### Requirement: 组件目录结构

每个公开的 Yo 组件都必须放在 `packages/yostar-design/src/components/<component-name>/` 下。

组件目录必须包含：

- 实现文件，例如 `Button.tsx`
- `index.ts`
- 如果组件有 Yostar 自定义样式，必须包含 `style/index.less`
- `index.zh-CN.md`
- 至少一个 `demo/*.vue`

#### Scenario: 新增 Button 组件

Given 组件名为 `button`
Then 组件文件必须位于 `packages/yostar-design/src/components/button/`
And 预览站必须能发现 `index.zh-CN.md`
And 预览站必须能发现 `demo/` 下的示例。

### Requirement: wrapper props 分层

Yo 组件必须区分 AntDV props、Yo 自定义 props 和 attrs。

Yo 自定义 props 必须由 wrapper 自己消费，不能泄漏给 AntDV 或 DOM。

#### Scenario: 新增自定义 prop

Given `YoButton` 新增自定义 prop `scene`
When 组件渲染 AntDV `Button`
Then `scene` 不能被透传给 AntDV 或 DOM
And wrapper 必须使用 `scene` 决定自己的行为。

### Requirement: 组件导出一致性

每个公开组件都必须同步导出到：

- 组件自身的 `index.ts`
- `src/components/index.ts`
- `src/global.ts`
- `src/resolver.ts`
- package subpath exports

#### Scenario: 新增 YoTable

Given `YoTable` 是公开组件
Then `@yo-star/yostar-design/table` 必须可以成功导入
And `YostarDesignResolver` 必须可以解析 `YoTable`
And Volar 必须能获得正确的全局组件类型。

### Requirement: 单组件交付闭环

新增或改造公开 Yo 组件时，不能只完成 wrapper 代码。每个组件必须同步完成实现、样式、导出、resolver、文档和 demo。

样式覆盖的具体规则必须遵循 `openspec/specs/style-overrides/spec.md`。

#### Scenario: 新增 YoInput

Given 新增 `YoInput`
Then 必须实现 `packages/yostar-design/src/components/input/`
And 必须提供 `yo-input` 稳定根类名
And 必须完成组件样式或明确说明不需要自定义样式
And 必须同步组件导出、全局安装、resolver 和 package exports
And 必须提供 `index.zh-CN.md`、demo 和属性表。
