import type { Plugin } from 'vue';
import { YoButton } from './button';
import { YoCheckbox, YoCheckboxGroup } from './checkbox';
import { YoConfigProvider } from './config-provider';
import { YoDatePicker } from './date-picker';
import { YoInput } from './input';
import { YoInputNumber } from './input-number';
import { YoRadio, YoRadioButton, YoRadioGroup } from './radio';
import { YoSelect, YoSelectOption } from './select';
import { YoSpace } from './space';
import { YoSwitch } from './switch';
import { YoTimePicker } from './time-picker';

export const components: Plugin[] = [
  YoConfigProvider,
  YoButton,
  YoCheckbox,
  YoCheckboxGroup,
  YoDatePicker,
  YoInput,
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
  YoCheckbox,
  YoCheckboxGroup,
  YoConfigProvider,
  YoDatePicker,
  YoInput,
  YoInputNumber,
  YoRadio,
  YoRadioButton,
  YoRadioGroup,
  YoSelect,
  YoSelectOption,
  YoSpace,
  YoSwitch,
  YoTimePicker,
};
export type { YoButtonProps } from './button';
export type { YoCheckboxGroupProps, YoCheckboxProps } from './checkbox';
export type { YoConfigProviderProps, YoThemeMode } from './config-provider';
export type { YoDatePickerProps, YoDatePickerTimezone } from './date-picker';
export type { YoInputProps } from './input';
export type { YoInputNumberProps } from './input-number';
export type { YoRadioButtonProps, YoRadioGroupProps, YoRadioProps } from './radio';
export type { YoSelectProps, YoSelectVariant } from './select';
export type { YoSpaceProps } from './space';
export type { YoSwitchProps } from './switch';
export type { YoTimePickerProps, YoTimePickerTimezone } from './time-picker';
