import type { YoButton, YoConfigProvider, YoInput, YoSelect, YoSpace } from './components';

declare module 'vue' {
  export interface GlobalComponents {
    YoButton: typeof YoButton;
    YoConfigProvider: typeof YoConfigProvider;
    YoInput: typeof YoInput;
    YoSelect: typeof YoSelect;
    YoSpace: typeof YoSpace;
  }
}

export {};
