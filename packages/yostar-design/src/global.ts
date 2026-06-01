import type {
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
} from './components';

declare module 'vue' {
  export interface GlobalComponents {
    YoButton: typeof YoButton;
    YoCheckbox: typeof YoCheckbox;
    YoCheckboxGroup: typeof YoCheckboxGroup;
    YoConfigProvider: typeof YoConfigProvider;
    YoDatePicker: typeof YoDatePicker;
    YoInput: typeof YoInput;
    YoInputNumber: typeof YoInputNumber;
    YoRadio: typeof YoRadio;
    YoRadioButton: typeof YoRadioButton;
    YoRadioGroup: typeof YoRadioGroup;
    YoSelect: typeof YoSelect;
    YoSelectOption: typeof YoSelectOption;
    YoSpace: typeof YoSpace;
    YoSwitch: typeof YoSwitch;
    YoTimePicker: typeof YoTimePicker;
  }
}

export {};
