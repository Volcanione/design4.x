import { Switch as ASwitch } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { SwitchProps as AntSwitchProps } from 'ant-design-vue/es/switch';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoSwitchDisabledVariant = YoDisabledVariant;

export const yoSwitchCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoSwitchCustomPropKeys = Object.keys(yoSwitchCustomProps());

export const yoSwitchProps = () => ({
  ...yoSwitchCustomProps(),
});

export type YoSwitchProps = AntSwitchProps & Partial<ExtractPropTypes<ReturnType<typeof yoSwitchCustomProps>>>;
export type YoSwitchComponent = DefineComponent<YoSwitchProps>;

const Switch = defineComponent({
  name: 'YoSwitch',
  inheritAttrs: false,
  props: yoSwitchProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-switch--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoSwitchCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ASwitch
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-switch',
            themeClass.value,
            getDisabledVariantClass('yo-switch', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoSwitch: WithInstall<typeof ASwitch & YoSwitchComponent> = withInstall(
  Switch as typeof ASwitch & YoSwitchComponent,
);

export default YoSwitch;
