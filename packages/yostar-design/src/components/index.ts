import type { Plugin } from 'vue';
import { YoButton } from './button';
import { YoConfigProvider } from './config-provider';
import { YoSpace } from './space';

export const components: Plugin[] = [YoConfigProvider, YoButton, YoSpace];

export { YoButton, YoConfigProvider, YoSpace };
export type { YoButtonProps } from './button';
export type { YoConfigProviderProps, YoThemeMode } from './config-provider';
export type { YoSpaceProps } from './space';
