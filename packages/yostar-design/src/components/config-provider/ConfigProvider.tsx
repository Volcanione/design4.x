import { ConfigProvider as AConfigProvider } from 'ant-design-vue';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { computed, defineComponent, provide, type ExtractPropTypes, type PropType } from 'vue';
import { withInstall } from '../../_utils/with-install';
import { getYoAntdTheme } from '../../theme';
import { yoConfigProviderKey, type YoThemeMode } from './context';

export const yoConfigProviderProps = () => ({
  themeMode: {
    type: String as PropType<YoThemeMode>,
    default: 'console',
  },
  antdPrefixCls: {
    type: String,
    default: undefined,
  },
  antdTheme: {
    type: Object as PropType<ThemeConfig>,
    default: undefined,
  },
});

export type YoConfigProviderProps = Partial<ExtractPropTypes<ReturnType<typeof yoConfigProviderProps>>>;

const ConfigProvider = defineComponent({
  name: 'YoConfigProvider',
  inheritAttrs: false,
  props: yoConfigProviderProps(),
  setup(props, { attrs, slots }) {
    const context = computed(() => ({
      themeMode: props.themeMode,
    }));
    const mergedAntdTheme = computed(() => getYoAntdTheme(props.themeMode, props.antdTheme));

    provide(yoConfigProviderKey, context);

    return () => (
      <AConfigProvider
        {...attrs}
        prefixCls={props.antdPrefixCls}
        theme={mergedAntdTheme.value}
        v-slots={slots}
      />
    );
  },
});

export const YoConfigProvider = withInstall(ConfigProvider);
export default YoConfigProvider;
