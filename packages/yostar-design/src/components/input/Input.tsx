import { Input as AInput } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { InputProps as AntInputProps } from 'ant-design-vue/es/input';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoInputDisabledVariant = YoDisabledVariant;

export const yoInputCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoInputCustomPropKeys = Object.keys(yoInputCustomProps());

export const yoInputProps = () => ({
  ...yoInputCustomProps(),
});

export type YoInputProps = AntInputProps & Partial<ExtractPropTypes<ReturnType<typeof yoInputCustomProps>>>;
export type YoInputComponent = DefineComponent<YoInputProps>;

const Input = defineComponent({
  name: 'YoInput',
  inheritAttrs: false,
  props: yoInputProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-input--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoInputCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <AInput
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-input',
            themeClass.value,
            getDisabledVariantClass('yo-input', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoInput: WithInstall<typeof AInput & YoInputComponent> = withInstall(
  Input as typeof AInput & YoInputComponent,
);
export default YoInput;
