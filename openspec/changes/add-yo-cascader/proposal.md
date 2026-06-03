# Change: add-yo-cascader

## 背景

数据录入组件已经覆盖 Button、Input、Select、InputNumber、DatePicker、TimePicker、Radio、Checkbox、Switch。级联选择属于常用数据录入能力，需要作为 `YoCascader` 补齐。

## 范围

- 新增 `YoCascader` wrapper，基于 Ant Design Vue 4.x `Cascader`。
- 支持全量安装、手动子路径导入、resolver 按需引入。
- 补齐预览文档和 demo。
- 复用现有通用样式 token：圆角、字号、高度、清除按钮、多选 tag、禁用态、dropdown item 和滚动条。

## 非目标

- 不新增 Cascader 专属业务 props。
- 不改动 Ant Design Vue 原生数据结构和事件语义。
