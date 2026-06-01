import { Checkbox as ACheckbox } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { CheckboxGroupProps as AntCheckboxGroupProps, CheckboxProps as AntCheckboxProps } from 'ant-design-vue/es/checkbox';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoCheckboxDisabledVariant = YoDisabledVariant;

export const yoCheckboxCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoCheckboxCustomPropKeys = Object.keys(yoCheckboxCustomProps());

export const yoCheckboxProps = () => ({
  ...yoCheckboxCustomProps(),
});

export type YoCheckboxProps = AntCheckboxProps & Partial<ExtractPropTypes<ReturnType<typeof yoCheckboxCustomProps>>>;
export type YoCheckboxGroupProps = AntCheckboxGroupProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoCheckboxCustomProps>>>;
export type YoCheckboxComponent = DefineComponent<YoCheckboxProps>;
export type YoCheckboxGroupComponent = DefineComponent<YoCheckboxGroupProps>;

function useCheckboxClass(blockName: string) {
  const yoConfigProvider = useYoConfigProvider();
  const themeClass = computed(() => `${blockName}--${yoConfigProvider.value.themeMode}`);

  return themeClass;
}

const Checkbox = defineComponent({
  name: 'YoCheckbox',
  inheritAttrs: false,
  props: yoCheckboxProps(),
  setup(props, { attrs, slots }) {
    const themeClass = useCheckboxClass('yo-checkbox');
    const forwardedProps = computed(() => omitProps(props, yoCheckboxCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ACheckbox
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-checkbox',
            themeClass.value,
            getDisabledVariantClass('yo-checkbox', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

const CheckboxGroup = defineComponent({
  name: 'YoCheckboxGroup',
  inheritAttrs: false,
  props: yoCheckboxProps(),
  setup(props, { attrs, slots }) {
    const themeClass = useCheckboxClass('yo-checkbox-group');
    const forwardedProps = computed(() => omitProps(props, yoCheckboxCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ACheckbox.Group
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-checkbox-group',
            themeClass.value,
            getDisabledVariantClass('yo-checkbox-group', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

export const YoCheckboxGroup: WithInstall<typeof ACheckbox.Group & YoCheckboxGroupComponent> = withInstall(
  CheckboxGroup as typeof ACheckbox.Group & YoCheckboxGroupComponent,
);

Object.assign(Checkbox, {
  Group: YoCheckboxGroup,
});

export const YoCheckbox: WithInstall<typeof ACheckbox & YoCheckboxComponent> = withInstall(
  Checkbox as typeof ACheckbox & YoCheckboxComponent,
);

export default YoCheckbox;
