# Capability Delta: on-demand-imports

## ADDED Requirements

### Requirement: 日期时间选择组件按需引入

`YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 与 `YoTimeRangePicker` 必须支持手动子路径引入和 resolver 自动引入。

#### Scenario: 手动导入 YoDatePicker

Given 使用方导入：

```ts
import { YoDatePicker } from '@yo-star/yostar-design/date-picker';
import '@yo-star/yostar-design/date-picker/style.css';
```

Then 导入必须成功
And `YoDatePicker` 必须可以通过 `app.use(YoDatePicker)` 安装。

#### Scenario: 手动导入 YoDateRangePicker

Given 使用方导入：

```ts
import { YoDateRangePicker } from '@yo-star/yostar-design/date-picker';
import '@yo-star/yostar-design/date-picker/style.css';
```

Then 导入必须成功
And `YoDateRangePicker` 必须可以通过 `app.use(YoDateRangePicker)` 安装。

#### Scenario: 手动导入 YoTimePicker

Given 使用方导入：

```ts
import { YoTimePicker } from '@yo-star/yostar-design/time-picker';
import '@yo-star/yostar-design/time-picker/style.css';
```

Then 导入必须成功
And `YoTimePicker` 必须可以通过 `app.use(YoTimePicker)` 安装。

#### Scenario: 手动导入 YoTimeRangePicker

Given 使用方导入：

```ts
import { YoTimeRangePicker } from '@yo-star/yostar-design/time-picker';
import '@yo-star/yostar-design/time-picker/style.css';
```

Then 导入必须成功
And `YoTimeRangePicker` 必须可以通过 `app.use(YoTimeRangePicker)` 安装。

#### Scenario: Resolver 解析日期时间选择组件

Given `unplugin-vue-components` 遇到 `<yo-date-picker>`、`<yo-date-range-picker>`、`<yo-time-picker>` 或 `<yo-time-range-picker>`
When `YostarDesignResolver()` 接收到 `YoDatePicker`、`YoDateRangePicker`、`YoTimePicker` 或 `YoTimeRangePicker`
Then 它必须返回对应的 `@yo-star/yostar-design/date-picker` 或 `@yo-star/yostar-design/time-picker`
And 默认 sideEffects 必须指向对应的 `style.css`。
