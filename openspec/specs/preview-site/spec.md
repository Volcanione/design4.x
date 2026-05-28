# 预览站规范

## Requirements

### Requirement: 组件路由生成

预览站必须从组件文档和 demo 文件生成组件路由。

#### Scenario: 组件存在文档

Given `packages/yostar-design/src/components/button/index.zh-CN.md` 存在
When 执行路由生成
Then 必须生成 `/components/button`。

### Requirement: 代码高亮

预览站必须用语法高亮展示代码示例。

适用范围包括：

- 组件 demo 源码
- 快速开始示例
- 引入方式示例
- resolver 示例

#### Scenario: 快速开始页的按需引入代码

Given 快速开始页展示按需引入代码
Then 代码块必须展示字符串、关键字、注释和代码行结构的高亮效果。

### Requirement: Demo 分组展示

组件预览页必须支持一个组件对应多个 demo 文件，并按用法分组展示。

每个 demo 必须展示：

- 用法标题。
- 组件预览区域。
- 可复制的源码区域。

#### Scenario: Select 多种用法

Given `YoSelect` 包含基础、尺寸、搜索清除、多选和禁用状态 demo
When 用户打开 `/components/select`
Then 页面必须按用法分组展示多个 demo
And demo 顺序必须优先符合阅读路径，而不是文件系统默认顺序。

### Requirement: Markdown 安全渲染

Markdown 默认不能开启任意原生 HTML 渲染。

#### Scenario: Markdown 包含 HTML

Given 组件 Markdown 中包含原生 HTML
When 文档页渲染 Markdown
Then 原生 HTML 必须被转义，除非未来显式加入经过 sanitize 的扩展能力。

### Requirement: 内容区滚动所有权

预览站布局必须保持侧边栏固定，只允许 `.site-content` 滚动。

#### Scenario: 页面跳转

Given 用户从 `/quick-start` 跳转到 `/components/button`
Then `.site-content` 必须滚动到顶部
And window body 必须保持锁定。
