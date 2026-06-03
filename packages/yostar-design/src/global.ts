import type {
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
} from './components';

declare module 'vue' {
  export interface GlobalComponents {
    YoButton: typeof YoButton;
    YoCascader: typeof YoCascader;
    YoCheckbox: typeof YoCheckbox;
    YoCheckboxGroup: typeof YoCheckboxGroup;
    YoConfigProvider: typeof YoConfigProvider;
    YoDatePicker: typeof YoDatePicker;
    YoDateRangePicker: typeof YoDateRangePicker;
    YoInput: typeof YoInput;
    YoTextarea: typeof YoTextarea;
    YoInputNumber: typeof YoInputNumber;
    YoRadio: typeof YoRadio;
    YoRadioButton: typeof YoRadioButton;
    YoRadioGroup: typeof YoRadioGroup;
    YoSelect: typeof YoSelect;
    YoSelectOption: typeof YoSelectOption;
    YoSpace: typeof YoSpace;
    YoSwitch: typeof YoSwitch;
    YoTimePicker: typeof YoTimePicker;
    YoTimeRangePicker: typeof YoTimeRangePicker;
  }
}

export {};
