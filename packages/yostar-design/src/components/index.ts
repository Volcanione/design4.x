import type { Plugin } from 'vue';
import { YoButton } from './button';
import { YoCascader } from './cascader';
import { YoCheckbox, YoCheckboxGroup } from './checkbox';
import { YoConfigProvider } from './config-provider';
import { YoDatePicker, YoDateRangePicker } from './date-picker';
import { YoInput, YoTextarea } from './input';
import { YoInputNumber } from './input-number';
import { YoRadio, YoRadioButton, YoRadioGroup } from './radio';
import { YoSelect, YoSelectOption } from './select';
import { YoSpace } from './space';
import { YoSwitch } from './switch';
import { YoTimePicker, YoTimeRangePicker } from './time-picker';

export const components: Plugin[] = [
  YoConfigProvider,
  YoButton,
  YoCascader,
  YoCheckbox,
  YoCheckboxGroup,
  YoDatePicker,
  YoInput,
  YoTextarea,
  YoInputNumber,
  YoRadio,
  YoRadioButton,
  YoRadioGroup,
  YoSelect,
  YoSelectOption,
  YoSpace,
  YoSwitch,
  YoTimePicker,
];

export {
  YoButton,
  YoCascader,
  YoCheckbox,
  YoCheckboxGroup,
  YoConfigProvider,
  YoDatePicker,
  YoDateRangePicker,
  YoInput,
  YoTextarea,
  YoInputNumber,
  YoRadio,
  YoRadioButton,
  YoRadioGroup,
  YoSelect,
  YoSelectOption,
  YoSpace,
  YoSwitch,
  YoTimePicker,
  YoTimeRangePicker,
};
export type { YoButtonProps } from './button';
export type { YoCascaderProps } from './cascader';
export type { YoCheckboxGroupProps, YoCheckboxProps } from './checkbox';
export type { YoConfigProviderProps, YoThemeMode } from './config-provider';
export type { YoDatePickerProps, YoDatePickerTimezone, YoDateRangePickerProps } from './date-picker';
export type { YoInputAppearance, YoInputProps, YoTextareaProps } from './input';
export type { YoInputNumberProps } from './input-number';
export type { YoRadioButtonProps, YoRadioGroupProps, YoRadioProps } from './radio';
export type { YoSelectProps, YoSelectVariant } from './select';
export type { YoSpaceProps } from './space';
export type { YoSwitchProps } from './switch';
export type { YoTimePickerProps, YoTimePickerTimezone, YoTimeRangePickerProps } from './time-picker';
