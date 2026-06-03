# Change: add-yo-upload-image

## 背景

数据录入组件需要补齐上传能力。本阶段先处理图片上传，不按尺寸拆成多个组件，避免 API 过早分裂。

## 范围

- 新增 `YoUpload` wrapper，基于 Ant Design Vue 4.x `Upload`。
- 当前默认提供图片上传外观：`accept="image/*"`、`listType="picture-card"`。
- 支持通过 `width`、`height` 配置上传区域尺寸，默认 `80px * 80px`。
- 默认触发内容为 `+`，支持默认插槽替换。
- 支持 `description` 属性和 `description` 插槽展示上传区域下方提示，默认不展示。
- 支持全量安装、手动子路径导入、resolver 按需引入。
- 补齐预览文档和 demo。

## 非目标

- 不在本阶段实现独立文件上传组件。
- 不在本阶段实现拖拽上传专属外观。
- 不改变 Ant Design Vue Upload 的上传请求、文件列表和事件语义。
