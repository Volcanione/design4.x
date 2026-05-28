import { computed, inject, type ComputedRef, type InjectionKey } from 'vue';
import type { YoThemeMode } from '../../theme';

export type { YoThemeMode } from '../../theme';

export interface YoConfigProviderContext {
  themeMode: YoThemeMode;
}

export const yoConfigProviderKey: InjectionKey<ComputedRef<YoConfigProviderContext>> = Symbol('yoConfigProvider');

const defaultContext = computed<YoConfigProviderContext>(() => ({
  themeMode: 'console',
}));

export function useYoConfigProvider() {
  return inject(yoConfigProviderKey, defaultContext);
}
