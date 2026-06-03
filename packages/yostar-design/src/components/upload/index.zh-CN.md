---
title: Upload
subtitle: 上传
group: 数据录入
order: 12
---

上传用于选择本地资源并提交到服务端。`YoUpload` 基于 Ant Design Vue 4.x 的 `Upload` 扩展，当前先提供图片上传外观，默认接收原组件的属性和事件。

## 基础用法

默认触发区域为 `80px * 80px`，默认触发内容为 `+`，默认 `accept="image/*"`，默认 `listType="picture-card"`。需要阻止预览页或本地示例真实上传时，可以让 `beforeUpload` 返回 `false`。

可以通过 `width`、`height` 调整图片上传区域尺寸，数值类型会按 `px` 处理，字符串类型会原样写入样式变量。

触发内容通过默认插槽替换；上传区域下方说明可以通过 `description` 属性或 `description` 插槽处理，默认不展示说明。

需要多图上传时，可以使用 Ant Design Vue 原生的 `multiple`、`maxCount` 和 `v-model:file-list`。`YoUpload` 不限制图片数量，上传后的每个图片项都会继续使用 `width`、`height` 控制尺寸。

图片列表项默认增强操作按钮：上传成功后支持替换当前图片，上传失败后支持替换和重传。失败态会隐藏不可点击的预览按钮，上传中会隐藏替换和重传按钮。

## Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList / v-model:fileList | 已上传文件列表 | `UploadFile[]` | `[]` |
| action | 上传地址 | `string \| Function` | `-` |
| accept | 接受上传的文件类型 | `string` | `'image/*'` |
| listType | 上传列表样式 | `'text' \| 'picture' \| 'picture-card' \| 'picture-circle'` | `'picture-card'` |
| width | 图片上传区域宽度 | `string \| number` | `80` |
| height | 图片上传区域高度 | `string \| number` | `80` |
| description | 上传区域下方说明文本 | `string` | `-` |
| showReplace | 是否在图片操作区展示替换按钮 | `boolean` | `true` |
| showRetry | 是否在失败图片操作区展示重传按钮 | `boolean` | `true` |
| disabled | 是否禁用 | `boolean` | `false` |
| maxCount | 限制上传数量 | `number` | `-` |
| multiple | 是否支持多选文件 | `boolean` | `false` |
| showUploadList | 是否展示上传列表，或自定义列表按钮 | `boolean \| object` | `true` |
| beforeUpload | 上传前回调，返回 `false` 可阻止自动上传 | `Function` | `-` |
| customRequest | 自定义上传请求 | `Function` | `-` |
| onChange | 上传状态变化回调 | `Function` | `-` |

## Slots

| 插槽 | 说明 |
| --- | --- |
| default | 自定义上传触发内容 |
| description | 自定义上传区域下方说明 |
