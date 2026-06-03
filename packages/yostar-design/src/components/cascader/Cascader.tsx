import { Cascader as ACascader } from 'ant-design-vue';
import { computed, defineComponent, normalizeClass, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { CascaderProps as AntCascaderProps } from 'ant-design-vue/es/cascader';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoCascaderDisabledVariant = YoDisabledVariant;

export const yoCascaderCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoCascaderCustomPropKeys = Object.keys(yoCascaderCustomProps());

export const yoCascaderProps = () => ({
  ...yoCascaderCustomProps(),
});

export type YoCascaderProps = AntCascaderProps & Partial<ExtractPropTypes<ReturnType<typeof yoCascaderCustomProps>>>;
export type YoCascaderComponent = DefineComponent<YoCascaderProps>;

const Cascader = defineComponent({
  name: 'YoCascader',
  inheritAttrs: false,
  props: yoCascaderProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-cascader--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoCascaderCustomPropKeys));

    return () => {
      const { class: customClass, popupClassName, dropdownClassName, ...restAttrs } = attrs;

      return (
        <ACascader
          {...forwardedProps.value}
          {...restAttrs}
          popupClassName={normalizeClass(['yo-cascader-dropdown', popupClassName, dropdownClassName])}
          class={[
            'yo-cascader',
            themeClass.value,
            getDisabledVariantClass('yo-cascader', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

Object.assign(Cascader, {
  SHOW_PARENT: ACascader.SHOW_PARENT,
  SHOW_CHILD: ACascader.SHOW_CHILD,
});

export const YoCascader: WithInstall<typeof ACascader & YoCascaderComponent> = withInstall(
  Cascader as typeof ACascader & YoCascaderComponent,
);

export default YoCascader;
