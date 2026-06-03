# Capability Delta: component-authoring

## ADDED Requirements

### Requirement: YoUpload 图片上传组件闭环

`YoUpload` 必须作为公开数据录入组件交付，并符合组件编写规范的完整闭环。

#### Scenario: 新增 YoUpload

Given 使用方需要图片上传组件
Then 必须可以从 `@yo-star/yostar-design` 全量安装获得 `YoUpload`
And 必须可以从 `@yo-star/yostar-design/upload` 子路径导入 `YoUpload`
And `YostarDesignResolver` 必须可以解析 `YoUpload`
And 预览站必须包含 `/components/upload`
And 文档必须包含基础用法、demo、属性表和插槽说明。

#### Scenario: 多图上传示例

Given 使用方需要一次上传多张图片
Then 预览站必须提供 `multiple` 和 `maxCount` 的多图上传示例
And 文档必须说明 `YoUpload` 透传 Ant Design Vue Upload 的多图能力。

#### Scenario: 替换与重传操作

Given 图片列表中存在已上传图片
Then 图片操作区必须提供替换当前图片的操作
And 替换后必须更新对应图片容器，而不是追加新的容器。

Given 图片列表中存在上传失败图片
Then 图片操作区必须额外提供重传操作
And 失败态必须隐藏不可点击的预览操作。

Given 图片处于上传中
Then 图片操作区不得展示替换和重传操作。

#### Scenario: 保留 AntDV Upload 原生能力

Given 组件是 `YoUpload`
When 使用方传入 Ant Design Vue Upload 支持的 `fileList`、`action`、`beforeUpload`、`customRequest`、`showUploadList`、`maxCount`、`multiple` 或事件
Then 组件必须透传给底层 Ant Design Vue Upload
And 不得改变原生文件列表结构、上传请求和事件参数。
