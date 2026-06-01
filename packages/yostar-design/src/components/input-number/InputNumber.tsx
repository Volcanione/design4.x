import { InputNumber as AInputNumber } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { InputNumberProps as AntInputNumberProps } from 'ant-design-vue/es/input-number';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoInputNumberDisabledVariant = YoDisabledVariant;

export const yoInputNumberCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoInputNumberCustomPropKeys = Object.keys(yoInputNumberCustomProps());

export const yoInputNumberProps = () => ({
  ...yoInputNumberCustomProps(),
});

export type YoInputNumberProps = AntInputNumberProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoInputNumberCustomProps>>>;
export type YoInputNumberComponent = DefineComponent<YoInputNumberProps>;

const InputNumber = defineComponent({
  name: 'YoInputNumber',
  inheritAttrs: false,
  props: yoInputNumberProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-input-number--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoInputNumberCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <AInputNumber
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-input-number',
            themeClass.value,
            getDisabledVariantClass('yo-input-number', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoInputNumber: WithInstall<typeof AInputNumber & YoInputNumberComponent> = withInstall(
  InputNumber as typeof AInputNumber & YoInputNumberComponent,
);

export default YoInputNumber;
