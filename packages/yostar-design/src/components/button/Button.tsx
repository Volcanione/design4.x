import { Button as AButton } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { ButtonProps as AntButtonProps } from 'ant-design-vue/es/button';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoButtonDisabledVariant = YoDisabledVariant;

export const yoButtonCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoButtonCustomPropKeys = Object.keys(yoButtonCustomProps());

export const yoButtonProps = () => ({
  ...yoButtonCustomProps(),
});

export type YoButtonProps = AntButtonProps & Partial<ExtractPropTypes<ReturnType<typeof yoButtonCustomProps>>>;
export type YoButtonComponent = DefineComponent<YoButtonProps>;

const Button = defineComponent({
  name: 'YoButton',
  inheritAttrs: false,
  props: yoButtonProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-button--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoButtonCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <AButton
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-button',
            themeClass.value,
            getDisabledVariantClass('yo-button', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoButton: WithInstall<typeof AButton & YoButtonComponent> = withInstall(
  Button as typeof AButton & YoButtonComponent,
);
export default YoButton;
