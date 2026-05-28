import type { Plugin } from 'vue';
import { YoButton } from './button';
import { YoConfigProvider } from './config-provider';
import { YoInput } from './input';
import { YoSelect } from './select';
import { YoSpace } from './space';

export const components: Plugin[] = [YoConfigProvider, YoButton, YoInput, YoSelect, YoSpace];

export { YoButton, YoConfigProvider, YoInput, YoSelect, YoSpace };
export type { YoButtonProps } from './button';
export type { YoConfigProviderProps, YoThemeMode } from './config-provider';
export type { YoInputProps } from './input';
export type { YoSelectProps } from './select';
export type { YoSpaceProps } from './space';
