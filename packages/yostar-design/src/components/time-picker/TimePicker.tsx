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
  TimePickerProps as AntTimePickerProps,
  TimeRangePickerProps as AntTimeRangePickerProps,
} from 'ant-design-vue/es/time-picker';
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

export type YoTimePickerDisabledVariant = YoDisabledVariant;
export type YoTimePickerTimezone = YoTimezone;

export const yoTimePickerCustomProps = () => ({
  ...yoDisabledVariantProps(),
  timezone: [String, Number] as PropType<YoTimePickerTimezone>,
});
const yoTimePickerCustomPropKeys = Object.keys(yoTimePickerCustomProps());

export const yoTimePickerProps = () => ({
  ...yoTimePickerCustomProps(),
});

export type YoTimePickerProps = AntTimePickerProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoTimePickerCustomProps>>>;
export type YoTimeRangePickerProps = AntTimeRangePickerProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoTimePickerCustomProps>>>;
export type YoTimePickerComponent = DefineComponent<YoTimePickerProps>;
export type YoTimeRangePickerComponent = DefineComponent<YoTimeRangePickerProps>;

const ATimePicker = ADatePicker.TimePicker as unknown as DefineComponent<AntTimePickerProps>;
const ATimeRangePicker = ADateRangePicker as unknown as DefineComponent<AntTimeRangePickerProps>;

const TimePicker = defineComponent({
  name: 'YoTimePicker',
  inheritAttrs: false,
  props: yoTimePickerProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-time-picker--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoTimePickerCustomPropKeys));
    const timezoneInfo = computed(() => getYoTimezoneInfo(props.timezone));

    return () => {
      const {
        class: customClass,
        popupClassName,
        'popup-class-name': kebabPopupClassName,
        dropdownClassName,
        'dropdown-class-name': kebabDropdownClassName,
        format,
        value,
        defaultValue,
        defaultPickerValue,
        onChange,
        onOk,
        'onUpdate:value': onUpdateValue,
        ...restAttrs
      } = attrs;
      const timezone = timezoneInfo.value;
      const mergedFormat = mergeTimezoneFormat(format, timezone, 'HH:mm:ss');

      return (
        <ATimePicker
          {...forwardedProps.value}
          {...restAttrs}
          format={mergedFormat as AntTimePickerProps['format']}
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
            'yo-time-picker',
            themeClass.value,
            getDisabledVariantClass('yo-time-picker', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const TimeRangePicker = defineComponent({
  name: 'YoTimeRangePicker',
  inheritAttrs: false,
  props: yoTimePickerProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-time-picker--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoTimePickerCustomPropKeys));
    const timezoneInfo = computed(() => getYoTimezoneInfo(props.timezone));

    return () => {
      const {
        class: customClass,
        popupClassName,
        'popup-class-name': kebabPopupClassName,
        dropdownClassName,
        'dropdown-class-name': kebabDropdownClassName,
        format,
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
      const mergedFormat = mergeTimezoneFormat(format, timezone, 'HH:mm:ss');

      return (
        <ATimeRangePicker
          {...forwardedProps.value}
          {...restAttrs}
          format={mergedFormat as AntTimeRangePickerProps['format']}
          picker="time"
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
            'yo-time-picker',
            'yo-time-range-picker',
            themeClass.value,
            getDisabledVariantClass('yo-time-picker', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoTimeRangePicker: WithInstall<typeof ATimeRangePicker & YoTimeRangePickerComponent> = withInstall(
  TimeRangePicker as typeof ATimeRangePicker & YoTimeRangePickerComponent,
);

export type YoTimePickerWithRange = WithInstall<typeof ATimePicker & YoTimePickerComponent> & {
  RangePicker: typeof YoTimeRangePicker;
  TimeRangePicker: typeof YoTimeRangePicker;
};

export const YoTimePicker = withInstall(
  TimePicker as typeof ATimePicker & YoTimePickerComponent,
) as YoTimePickerWithRange;

YoTimePicker.RangePicker = YoTimeRangePicker;
YoTimePicker.TimeRangePicker = YoTimeRangePicker;
YoTimePicker.install = (app: App) => {
  app.component('YoTimePicker', TimePicker);
  app.component('YoTimeRangePicker', TimeRangePicker);
  return app;
};

export default YoTimePicker;
