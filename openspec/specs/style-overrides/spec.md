# 样式覆盖规范

## Requirements

### Requirement: 样式分层

Yostar Design 的样式必须按稳定层级覆盖 Ant Design Vue，避免无边界地改写 AntDV 内部 DOM。

样式优先级必须是：

1. `YoConfigProvider` 主题 token。
2. Yo 组件稳定类名。
3. 组件内受控的 AntDV 状态类。
4. 必要时才使用 AntDV 内部结构选择器。

#### Scenario: 调整按钮主色

Given 需要调整所有主按钮颜色
When AntDV token 可以表达该变化
Then 必须通过 `YoConfigProvider` 的 theme token 处理
And 不应该在每个组件里重复覆盖 `.ant-btn-primary`。

#### Scenario: 调整某个 YoButton 场景样式

Given `YoButton` 需要支持工具栏场景
When 该变化只属于 Yostar 业务语义
Then 必须通过 `yo-button--toolbar` 这类稳定 modifier class 处理。

### Requirement: 主题 token 基线

组件库必须提供统一的控制台主题基线，至少覆盖主色、成功色、警告色、错误色、文字色、背景色、边框色、字号、字体、圆角、控件高度和常用阴影。

主题基线必须同时服务于：

- Ant Design Vue theme token。
- Yostar CSS 变量。
- 组件自身样式。
- 预览站样式。

#### Scenario: 使用默认 ConfigProvider

Given 使用方写 `<yo-config-provider theme-mode="console">`
When 未传入 `antdTheme`
Then `YoConfigProvider` 必须默认注入 Yostar 控制台主题 token
And `yo-*` 组件必须能读取同一套 CSS 变量。

#### Scenario: 设计稿色板默认值

Given 当前主题模式是 `console`
Then 默认主色必须是 `#3A7CFF`
And 默认一级文字色必须是 `#313233`
And 默认二级文字色与线图标色必须是 `#626366`
And 默认三级文字色必须是 `#939599`
And 默认占位色、禁用文字色与面型图标色必须是 `#C3C3C3`
And 默认描边色必须是 `#E6E8ED`
And 默认分割线色必须是 `#EDEFF2`
And 默认表格 hover 色必须是 `#F9FAFC`
And 默认失效背景色必须是 `#F5F6F7`
And 默认页面背景色必须是 `#F7F8FA`
And 默认成功色必须是 `#22C070`
And 默认失败色必须是 `#E84A4A`
And 默认提示色必须是 `#FFA940`。

#### Scenario: 设计稿圆角默认值

Given 当前主题模式是 `console`
Then 标签等较小尺寸组件圆角必须使用 `2px`
And 模块、按钮、弹窗、输入框、下拉菜单等大部分场景圆角必须使用 `4px`
And 注册页背景等较大尺寸模块圆角必须使用 `8px`。

#### Scenario: 设计稿字体默认值

Given 当前主题模式是 `console`
Then 默认字体族必须优先使用 `"Helvetica Neue"`、`Helvetica`、`Arial`、`"PingFang SC"`、`"Hiragino Sans GB"`、`"Microsoft YaHei"`
And 主字体字号必须是 `14px`
And `Typography 1` 必须是 `12px / 14px`
And `Typography 2` 必须是 `14px / 20px`
And `Typography 3` 必须是 `16px / 24px`
And `Typography 4` 必须是 `18px / 26px`
And `Typography 5` 必须是 `20px / 28px`
And `Typography 6` 必须是 `24px / 32px`
And `Typography 7` 必须是 `26px / 36px`
And 常规字重必须是 `400`
And 标题类字重必须是 `500`
And 英文、数字和金额强调字重必须是 `600`。

#### Scenario: 基础控件高度默认值

Given 当前主题模式是 `console`
Then 基础控件小尺寸高度必须继承 Ant Design Vue 的 `controlHeightSM = 28`
And 基础控件默认尺寸高度必须继承 Ant Design Vue 的 `controlHeight = 32`
And 基础控件大尺寸高度必须继承 Ant Design Vue 的 `controlHeightLG = 40`
And Yo 组件不应为了统一视觉而全局重写 `Button`、`Input`、`Select`、`DatePicker`、`InputNumber`、`Pagination`、`Form` 的基础高度
And 只有在具体 Yo 组件出现设计差异时，才能在该组件稳定类名下局部修正。

#### Scenario: large 表单控件横向内边距

Given 组件是支持 `size="large"` 的表单输入控件
Then large 尺寸的左右内边距应该是 `16px`
And large 尺寸的字号应该保持 `14px`
And 该规则应该通过 Yo 稳定类名局部覆盖
And 不允许通过全局 `.ant-input-lg`、`.ant-select-lg` 等选择器覆盖原生 AntDV 组件。

#### Scenario: 清除按钮图标尺寸

Given 组件支持 `allowClear`
Then 清除按钮图标尺寸应该是 `16px * 16px`
And 该规则应该使用公共 token `--yo-clear-icon-size`
And 该规则必须收敛在 Yo 组件稳定类名下
And 后续 `YoSelect`、`YoInputNumber` 等支持清除能力的组件应该复用同一尺寸规则。

#### Scenario: YoButton 间距默认值

Given 组件是 `YoButton`
Then 按钮整体 padding 必须继承 Ant Design Vue Button
And 图标与文字间距必须是 `6px`
And loading 图标与文字间距必须是 `6px`
And icon-only button 不应产生额外文字间距
And 不允许通过全局 `.ant-btn` 覆盖按钮间距。

#### Scenario: 通用禁用态视觉

Given Yo 基础控件或表单控件支持 `disabled`
Then 该组件应该支持通用自定义 prop `disabledVariant`
And `disabledVariant` 类型必须是 `'default' | 'strong'`
And 默认 `disabledVariant="default"` 必须继承 Ant Design Vue 禁用态
And `disabledVariant="strong"` 必须保留禁用行为
And `disabledVariant="strong"` 只能提升主内容文字或 label 颜色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor、透明度和交互行为
And 不允许通过全局 `.ant-*-disabled` 覆盖禁用态。

#### Scenario: YoButton 禁用态默认值

Given 组件是 `YoButton`
Then 默认 `disabled` 必须继承 Ant Design Vue Button 禁用态
And `disabledVariant="strong"` 必须只将按钮文字颜色提升为一级文字色
And `disabledVariant="strong"` 不应改变禁用背景、边框、cursor 和交互行为
And 不允许通过全局 `.ant-btn-disabled` 覆盖禁用态。

#### Scenario: 覆盖主题色

Given 使用方通过 `antdTheme.token.colorPrimary` 覆盖主题色
When 渲染 AntDV 组件
Then AntDV theme token 必须以使用方配置为准
And Yo 组件样式仍必须优先引用 `--yo-*` CSS 变量，避免写死颜色。

### Requirement: 稳定类名

每个公开 Yo 组件都必须暴露稳定根类名，命名格式为 `yo-<component-name>`。

组件状态、语义场景和自定义 props 映射出的样式必须使用 BEM 风格：

- block: `yo-button`
- element: `yo-button__icon`
- modifier: `yo-button--toolbar`

#### Scenario: YoButton scene 样式

Given `YoButton` 支持自定义 prop `scene="toolbar"`
When 组件渲染
Then 根节点或 AntDV 根组件必须包含 `yo-button`
And 必须包含可预测的 `yo-button--toolbar`
And 不允许把 `scene` 原样透传到 DOM。

### Requirement: fake props 样式映射

Yo 自定义 props 可以用于表达 AntDV 没有的业务语义，但必须由 wrapper 消费后映射为 class、style 或 CSS 变量。

Yo 自定义 props 必须记录到组件文档属性表，并说明它是否影响样式、行为或两者都影响。

#### Scenario: fake danger 样式

Given `YoButton` 新增 `softDanger`
When 用户写 `<yo-button soft-danger />`
Then `softDanger` 必须由 `YoButton` 消费
And 组件必须追加类似 `yo-button--soft-danger` 的 class
And `softDanger` 不能出现在最终 DOM attribute 中。

### Requirement: 样式文件与按需产物

有自定义样式的公开组件必须在组件目录下维护 `style/index.less`。

按需构建必须为组件提供对应 style subpath，例如 `@yo-star/yostar-design/button/style.css`。

#### Scenario: 新增带样式组件

Given 新增 `YoSelect`
When `YoSelect` 有 Yostar 自定义样式
Then 必须创建 `packages/yostar-design/src/components/select/style/index.less`
And 构建后必须能通过 `@yo-star/yostar-design/select/style.css` 引入该组件样式。

### Requirement: AntDV 选择器覆盖边界

组件样式默认必须收敛在 Yo 根类名下，不能在组件样式中直接写全局 `.ant-*` 覆盖。

如果确实需要覆盖 AntDV 内部结构，必须满足：

- 选择器必须以 Yo 根类名开头。
- 覆盖范围必须只影响当前 Yo 组件。
- 文档或代码注释必须说明覆盖原因。
- 优先覆盖 AntDV 公开状态类，谨慎依赖深层 DOM。

#### Scenario: 覆盖 AntDV Button loading 状态

Given `YoButton` 需要调整 loading 图标间距
When 必须依赖 AntDV 状态类
Then 选择器应该形如 `.yo-button.ant-btn-loading`
And 不应该在组件样式中直接写 `.ant-btn-loading`。

### Requirement: 迭代顺序

组件库不应先补完全部组件再统一改样式，也不应在没有真实组件场景前一次性完成全部样式。

迭代顺序必须是：

1. 先建立样式基线和样板组件。
2. 再按组件批次推进。
3. 每个组件都同步完成样式、文档和按需引入。
4. 每完成一类组件后做一次统一收敛。

#### Scenario: 表单组件批次

Given 准备新增 `YoInput`、`YoSelect`、`YoCheckbox`、`YoRadio`
When 表单组件批次完成
Then 必须统一检查高度、字号、边框、内边距、清除按钮、禁用态、错误态和 focus 态
And 必须保证这些组件的 Yo 自定义 props 与样式 class 规则一致。

### Requirement: 样板组件

`YoButton` 必须作为样式覆盖的第一批样板组件。

后续新增组件应优先参考 `YoButton` 的 props 分层、class 命名、style 文件、文档属性表和 demo 组织方式。

#### Scenario: 新增复杂组件前

Given 准备新增 `YoTable`
When `YoButton` 样式基线尚未稳定
Then 不应直接大规模复制临时样式规则到 `YoTable`
And 应先补齐或修正样板组件规范。
