import type { YoButton, YoConfigProvider, YoSpace } from './components';

declare module 'vue' {
  export interface GlobalComponents {
    YoButton: typeof YoButton;
    YoConfigProvider: typeof YoConfigProvider;
    YoSpace: typeof YoSpace;
  }
}

export {};
