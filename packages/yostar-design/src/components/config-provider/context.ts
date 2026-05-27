import { computed, inject, type ComputedRef, type InjectionKey } from 'vue';

export type YoThemeMode = 'console';

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
