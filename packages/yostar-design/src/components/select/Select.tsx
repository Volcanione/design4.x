import { Select as ASelect } from 'ant-design-vue';
import { computed, defineComponent, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { SelectProps as AntSelectProps } from 'ant-design-vue/es/select';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoSelectDisabledVariant = YoDisabledVariant;

export const yoSelectCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoSelectCustomPropKeys = Object.keys(yoSelectCustomProps());

export const yoSelectProps = () => ({
  ...yoSelectCustomProps(),
});

export type YoSelectProps = AntSelectProps & Partial<ExtractPropTypes<ReturnType<typeof yoSelectCustomProps>>>;
export type YoSelectComponent = DefineComponent<YoSelectProps>;

const Select = defineComponent({
  name: 'YoSelect',
  inheritAttrs: false,
  props: yoSelectProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-select--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoSelectCustomPropKeys));

    return () => {
      const { class: customClass, ...restAttrs } = attrs;

      return (
        <ASelect
          {...forwardedProps.value}
          {...restAttrs}
          class={[
            'yo-select',
            themeClass.value,
            getDisabledVariantClass('yo-select', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

Object.assign(Select, {
  Option: ASelect.Option,
  OptGroup: ASelect.OptGroup,
});

export const YoSelect: WithInstall<typeof ASelect & YoSelectComponent> = withInstall(
  Select as typeof ASelect & YoSelectComponent,
);
export default YoSelect;
