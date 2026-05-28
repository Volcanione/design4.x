# Tasks: define-style-overrides-baseline

- [x] 新增 `style-overrides` 长期规范。
- [x] 更新项目原则，加入样式覆盖优先级。
- [x] 更新组件编写规范，加入单组件交付闭环。
- [x] 创建本次 OpenSpec change 记录。
- [x] 建立控制台主题 token 基线和默认 AntDV theme 合并逻辑。
- [x] 预览站样式改为优先使用 Yo CSS 变量。
- [x] 同步设计稿字体族、字阶行高和字重 token。
- [x] 明确基础控件高度继承 AntDV 28/32/40，不额外全局覆盖。
- [x] 明确 YoButton 继承 AntDV padding，仅覆盖图标与文字间距为 6px。
- [x] 明确 YoButton 默认禁用态继承 AntDV，强禁用视觉仅提升文字颜色。
- [x] 抽取通用 `disabledVariant` 类型、props 和 class helper，供后续表单控件复用。
- [ ] 后续以 `YoButton` 作为样板组件，补齐样式覆盖、fake props 和属性表。
- [ ] 后续新增组件时按“实现、样式、导出、resolver、文档、demo”闭环交付。
