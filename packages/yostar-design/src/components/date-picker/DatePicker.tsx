import { DatePicker as ADatePicker, RangePicker as ADateRangePicker } from 'ant-design-vue';
import {
  computed,
  defineComponent,
  type App,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
} from 'vue';
import type {
  DatePickerProps as AntDatePickerProps,
  RangePickerProps as AntDateRangePickerProps,
} from 'ant-design-vue/es/date-picker';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import {
  callTimezoneHandler,
  getYoTimezoneInfo,
  mergeTimezoneFormat,
  toTimezoneDisplayValue,
  toTimezoneOutputValue,
  type YoTimezone,
} from '../../_utils/timezone';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoDatePickerDisabledVariant = YoDisabledVariant;
export type YoDatePickerTimezone = YoTimezone;

export const yoDatePickerCustomProps = () => ({
  ...yoDisabledVariantProps(),
  timezone: [String, Number] as PropType<YoDatePickerTimezone>,
});
const yoDatePickerCustomPropKeys = Object.keys(yoDatePickerCustomProps());

export const yoDatePickerProps = () => ({
  ...yoDatePickerCustomProps(),
});

export type YoDatePickerProps = AntDatePickerProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoDatePickerCustomProps>>>;
export type YoDateRangePickerProps = AntDateRangePickerProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoDatePickerCustomProps>>>;
export type YoDatePickerComponent = DefineComponent<YoDatePickerProps>;
export type YoDateRangePickerComponent = DefineComponent<YoDateRangePickerProps>;

function getDatePickerDefaultFormat(picker: unknown, showTime: unknown) {
  if (picker === 'week') {
    return 'YYYY-wo';
  }

  if (picker === 'month') {
    return 'YYYY-MM';
  }

  if (picker === 'quarter') {
    return 'YYYY-[Q]Q';
  }

  if (picker === 'year') {
    return 'YYYY';
  }

  return showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
}

function normalizeShowTime(showTime: unknown) {
  return showTime === '' ? true : showTime;
}

const DatePicker = defineComponent({
  name: 'YoDatePicker',
  inheritAttrs: false,
  props: yoDatePickerProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-date-picker--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoDatePickerCustomPropKeys));
    const timezoneInfo = computed(() => getYoTimezoneInfo(props.timezone));

    return () => {
      const {
        class: customClass,
        popupClassName,
        'popup-class-name': kebabPopupClassName,
        dropdownClassName,
        'dropdown-class-name': kebabDropdownClassName,
        format,
        picker,
        showTime,
        'show-time': kebabShowTime,
        value,
        defaultValue,
        defaultPickerValue,
        onChange,
        onOk,
        'onUpdate:value': onUpdateValue,
        ...restAttrs
      } = attrs;
      const timezone = timezoneInfo.value;
      const mergedShowTime = normalizeShowTime(showTime ?? kebabShowTime);
      const mergedFormat = mergeTimezoneFormat(format, timezone, getDatePickerDefaultFormat(picker, mergedShowTime));

      return (
        <ADatePicker
          {...forwardedProps.value}
          {...restAttrs}
          format={mergedFormat as AntDatePickerProps['format']}
          picker={picker as AntDatePickerProps['picker']}
          showTime={mergedShowTime as AntDatePickerProps['showTime']}
          value={toTimezoneDisplayValue(value, timezone)}
          defaultValue={toTimezoneDisplayValue(defaultValue, timezone)}
          defaultPickerValue={toTimezoneDisplayValue(defaultPickerValue, timezone)}
          onChange={(nextValue: unknown, dateString: unknown) => {
            callTimezoneHandler(onChange, toTimezoneOutputValue(nextValue, timezone), dateString);
          }}
          onOk={(nextValue: unknown) => {
            callTimezoneHandler(onOk, toTimezoneOutputValue(nextValue, timezone));
          }}
          {...{
            'onUpdate:value': (nextValue: unknown) => {
              callTimezoneHandler(onUpdateValue, toTimezoneOutputValue(nextValue, timezone));
            },
          }}
          class={[
            'yo-date-picker',
            themeClass.value,
            getDisabledVariantClass('yo-date-picker', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const DateRangePicker = defineComponent({
  name: 'YoDateRangePicker',
  inheritAttrs: false,
  props: yoDatePickerProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-date-picker--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoDatePickerCustomPropKeys));
    const timezoneInfo = computed(() => getYoTimezoneInfo(props.timezone));

    return () => {
      const {
        class: customClass,
        popupClassName,
        'popup-class-name': kebabPopupClassName,
        dropdownClassName,
        'dropdown-class-name': kebabDropdownClassName,
        format,
        picker,
        showTime,
        'show-time': kebabShowTime,
        value,
        defaultValue,
        defaultPickerValue,
        onChange,
        onCalendarChange,
        onOk,
        'onUpdate:value': onUpdateValue,
        ...restAttrs
      } = attrs;
      const timezone = timezoneInfo.value;
      const mergedShowTime = normalizeShowTime(showTime ?? kebabShowTime);
      const mergedFormat = mergeTimezoneFormat(format, timezone, getDatePickerDefaultFormat(picker, mergedShowTime));

      return (
        <ADateRangePicker
          {...forwardedProps.value}
          {...restAttrs}
          format={mergedFormat as AntDateRangePickerProps['format']}
          picker={picker as AntDateRangePickerProps['picker']}
          showTime={mergedShowTime as AntDatePickerProps['showTime']}
          value={toTimezoneDisplayValue(value, timezone)}
          defaultValue={toTimezoneDisplayValue(defaultValue, timezone)}
          defaultPickerValue={toTimezoneDisplayValue(defaultPickerValue, timezone)}
          onChange={(nextValue: unknown, dateString: unknown) => {
            callTimezoneHandler(onChange, toTimezoneOutputValue(nextValue, timezone), dateString);
          }}
          onCalendarChange={(nextValue: unknown, dateString: unknown, info: unknown) => {
            callTimezoneHandler(onCalendarChange, toTimezoneOutputValue(nextValue, timezone), dateString, info);
          }}
          onOk={(nextValue: unknown) => {
            callTimezoneHandler(onOk, toTimezoneOutputValue(nextValue, timezone));
          }}
          {...{
            'onUpdate:value': (nextValue: unknown) => {
              callTimezoneHandler(onUpdateValue, toTimezoneOutputValue(nextValue, timezone));
            },
          }}
          class={[
            'yo-date-picker',
            'yo-date-range-picker',
            themeClass.value,
            getDisabledVariantClass('yo-date-picker', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoDateRangePicker: WithInstall<typeof ADateRangePicker & YoDateRangePickerComponent> = withInstall(
  DateRangePicker as typeof ADateRangePicker & YoDateRangePickerComponent,
);

export type YoDatePickerWithRange = WithInstall<typeof ADatePicker & YoDatePickerComponent> & {
  RangePicker: typeof YoDateRangePicker;
};

export const YoDatePicker = withInstall(
  DatePicker as typeof ADatePicker & YoDatePickerComponent,
) as YoDatePickerWithRange;

YoDatePicker.RangePicker = YoDateRangePicker;
YoDatePicker.install = (app: App) => {
  app.component('YoDatePicker', DatePicker);
  app.component('YoDateRangePicker', DateRangePicker);
  return app;
};

export default YoDatePicker;
