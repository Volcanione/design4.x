# Component Authoring Delta

## ADDED Requirements

### Requirement: 组件生成器

项目必须提供用于新增公开 Yo 组件的生成器。

#### Scenario: 生成 YoTable

Given 维护者为 `table` 执行生成器
When 生成成功
Then `src/components/table/` 必须存在
And `@yo-star/yostar-design/table` 必须被导出
And `YostarDesignResolver` 必须可以解析 `YoTable`
And 路由生成后，预览站必须包含 `/components/table`。

### Requirement: 生成器覆盖保护

生成器不能覆盖已存在的组件目录，除非维护者显式传入 force 选项。

#### Scenario: 组件已经存在

Given `src/components/button/` 已经存在
When 维护者为 `button` 执行生成器
Then 生成器必须失败并给出清晰提示
And 已有文件必须保持不变。

