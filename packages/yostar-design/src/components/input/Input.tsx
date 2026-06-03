import { Input as AInput } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes, type PropType } from 'vue';
import type { InputProps as AntInputProps, TextAreaProps as AntTextAreaProps } from 'ant-design-vue/es/input';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoInputDisabledVariant = YoDisabledVariant;
export type YoTextareaDisabledVariant = YoDisabledVariant;
export type YoInputAppearance = 'default' | 'search';

export const yoInputCustomProps = () => ({
  ...yoDisabledVariantProps(),
  appearance: {
    type: String as PropType<YoInputAppearance>,
    default: 'default',
  },
});
const yoInputCustomPropKeys = Object.keys(yoInputCustomProps());

export const yoInputProps = () => ({
  ...yoInputCustomProps(),
});

export type YoInputProps = AntInputProps & Partial<ExtractPropTypes<ReturnType<typeof yoInputCustomProps>>>;
export type YoInputComponent = DefineComponent<YoInputProps>;
export type YoTextareaProps = AntTextAreaProps & Partial<ExtractPropTypes<ReturnType<typeof yoInputCustomProps>>>;
export type YoTextareaComponent = DefineComponent<YoTextareaProps>;

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
            props.appearance !== 'default' && `yo-input--${props.appearance}`,
            getDisabledVariantClass('yo-input', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const Textarea = defineComponent({
  name: 'YoTextarea',
  inheritAttrs: false,
  props: yoInputProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-textarea--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoInputCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <AInput.TextArea
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-textarea',
            themeClass.value,
            getDisabledVariantClass('yo-textarea', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

Object.assign(Input, {
  TextArea: Textarea,
});

export const YoTextarea: WithInstall<typeof AInput.TextArea & YoTextareaComponent> = withInstall(
  Textarea as typeof AInput.TextArea & YoTextareaComponent,
);

export const YoInput: WithInstall<typeof AInput & YoInputComponent & { TextArea: typeof YoTextarea }> = withInstall(
  Input as typeof AInput & YoInputComponent & { TextArea: typeof YoTextarea },
);
export default YoInput;
