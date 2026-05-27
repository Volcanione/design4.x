import { ConfigProvider as AConfigProvider } from 'ant-design-vue';
import { computed, defineComponent, provide, type ExtractPropTypes, type PropType } from 'vue';
import { withInstall } from '../../_utils/with-install';
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
    type: Object as PropType<Record<string, unknown>>,
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

    provide(yoConfigProviderKey, context);

    return () => (
      <AConfigProvider
        {...attrs}
        prefixCls={props.antdPrefixCls}
        theme={props.antdTheme}
        v-slots={slots}
      />
    );
  },
});

export const YoConfigProvider = withInstall(ConfigProvider);
export default YoConfigProvider;
