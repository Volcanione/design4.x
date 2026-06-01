import { Radio as ARadio } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { RadioGroupProps as AntRadioGroupProps, RadioProps as AntRadioProps } from 'ant-design-vue/es/radio';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoRadioDisabledVariant = YoDisabledVariant;

export const yoRadioCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoRadioCustomPropKeys = Object.keys(yoRadioCustomProps());

export const yoRadioProps = () => ({
  ...yoRadioCustomProps(),
});

export type YoRadioProps = AntRadioProps & Partial<ExtractPropTypes<ReturnType<typeof yoRadioCustomProps>>>;
export type YoRadioGroupProps = AntRadioGroupProps & Partial<ExtractPropTypes<ReturnType<typeof yoRadioCustomProps>>>;
export type YoRadioButtonProps = YoRadioProps;
export type YoRadioComponent = DefineComponent<YoRadioProps>;
export type YoRadioGroupComponent = DefineComponent<YoRadioGroupProps>;
export type YoRadioButtonComponent = DefineComponent<YoRadioButtonProps>;

function useRadioClass(blockName: string) {
  const yoConfigProvider = useYoConfigProvider();
  const themeClass = computed(() => `${blockName}--${yoConfigProvider.value.themeMode}`);

  return themeClass;
}

const Radio = defineComponent({
  name: 'YoRadio',
  inheritAttrs: false,
  props: yoRadioProps(),
  setup(props, { attrs, slots }) {
    const themeClass = useRadioClass('yo-radio');
    const forwardedProps = computed(() => omitProps(props, yoRadioCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ARadio
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-radio',
            themeClass.value,
            getDisabledVariantClass('yo-radio', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const RadioGroup = defineComponent({
  name: 'YoRadioGroup',
  inheritAttrs: false,
  props: yoRadioProps(),
  setup(props, { attrs, slots }) {
    const themeClass = useRadioClass('yo-radio-group');
    const forwardedProps = computed(() => omitProps(props, yoRadioCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ARadio.Group
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-radio-group',
            themeClass.value,
            getDisabledVariantClass('yo-radio-group', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const RadioButton = defineComponent({
  name: 'YoRadioButton',
  inheritAttrs: false,
  props: yoRadioProps(),
  setup(props, { attrs, slots }) {
    const themeClass = useRadioClass('yo-radio-button');
    const forwardedProps = computed(() => omitProps(props, yoRadioCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ARadio.Button
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-radio-button',
            themeClass.value,
            getDisabledVariantClass('yo-radio-button', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoRadioGroup: WithInstall<typeof ARadio.Group & YoRadioGroupComponent> = withInstall(
  RadioGroup as typeof ARadio.Group & YoRadioGroupComponent,
);

export const YoRadioButton: WithInstall<typeof ARadio.Button & YoRadioButtonComponent> = withInstall(
  RadioButton as typeof ARadio.Button & YoRadioButtonComponent,
);

Object.assign(Radio, {
  Group: YoRadioGroup,
  Button: YoRadioButton,
});

export const YoRadio: WithInstall<typeof ARadio & YoRadioComponent> = withInstall(
  Radio as typeof ARadio & YoRadioComponent,
);

export default YoRadio;
