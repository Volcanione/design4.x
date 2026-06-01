import type { YoButton, YoConfigProvider, YoInput, YoSelect, YoSelectOption, YoSpace } from './components';

declare module 'vue' {
  export interface GlobalComponents {
    YoButton: typeof YoButton;
    YoConfigProvider: typeof YoConfigProvider;
    YoInput: typeof YoInput;
    YoSelect: typeof YoSelect;
    YoSelectOption: typeof YoSelectOption;
    YoSpace: typeof YoSpace;
  }
}

export {};
