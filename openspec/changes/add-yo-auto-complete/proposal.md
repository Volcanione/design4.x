# Change: add-yo-auto-complete

## 背景

数据录入组件需要补齐输入建议场景。`AutoComplete` 与 `Input`、`Select` 的样式和交互关系紧密，需要作为独立公开组件交付。

## 范围

- 新增 `YoAutoComplete` wrapper，基于 Ant Design Vue 4.x `AutoComplete`。
- 支持全量安装、手动子路径导入、resolver 按需引入。
- 支持 `YoAutoCompleteOption` / `YoAutoCompleteOptGroup`。
- 补齐预览文档和 demo。
- 复用现有通用样式 token：圆角、字号、高度、清除按钮、禁用态、dropdown item 和滚动条。

## 非目标

- 不新增 AutoComplete 专属业务 props。
- 不改动 Ant Design Vue 原生 options、事件和插槽语义。
