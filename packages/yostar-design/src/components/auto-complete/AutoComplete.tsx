import { AutoComplete as AAutoComplete } from 'ant-design-vue';
import { computed, defineComponent, normalizeClass, type App, type DefineComponent, type ExtractPropTypes } from 'vue';
import type { AutoCompleteProps as AntAutoCompleteProps } from 'ant-design-vue/es/auto-complete';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoAutoCompleteDisabledVariant = YoDisabledVariant;

export const yoAutoCompleteCustomProps = () => ({
  ...yoDisabledVariantProps(),
});
const yoAutoCompleteCustomPropKeys = Object.keys(yoAutoCompleteCustomProps());

export const yoAutoCompleteProps = () => ({
  ...yoAutoCompleteCustomProps(),
});

export type YoAutoCompleteProps = AntAutoCompleteProps &
  Partial<ExtractPropTypes<ReturnType<typeof yoAutoCompleteCustomProps>>>;
export type YoAutoCompleteComponent = DefineComponent<YoAutoCompleteProps>;

const AutoComplete = defineComponent({
  name: 'YoAutoComplete',
  inheritAttrs: false,
  props: yoAutoCompleteProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-auto-complete--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoAutoCompleteCustomPropKeys));

    return () => {
      const {
        class: customClass,
        popupClassName,
        'popup-class-name': kebabPopupClassName,
        dropdownClassName,
        'dropdown-class-name': kebabDropdownClassName,
        ...restAttrs
      } = attrs;

      return (
        <AAutoComplete
          {...forwardedProps.value}
          {...restAttrs}
          popupClassName={normalizeClass([
            'yo-auto-complete-dropdown',
            popupClassName,
            kebabPopupClassName,
            dropdownClassName,
            kebabDropdownClassName,
          ])}
          class={[
            'yo-auto-complete',
            themeClass.value,
            getDisabledVariantClass('yo-auto-complete', restAttrs.disabled, props.disabledVariant),
            customClass,
          ]}
          v-slots={slots}
        />
      );
    };
  },
});

Object.assign(AutoComplete, {
  Option: AAutoComplete.Option,
  OptGroup: AAutoComplete.OptGroup,
});

export const YoAutoComplete: WithInstall<typeof AAutoComplete & YoAutoCompleteComponent> = withInstall(
  AutoComplete as typeof AAutoComplete & YoAutoCompleteComponent,
);

export const YoAutoCompleteOption = Object.assign(AAutoComplete.Option, {
  install(app: App) {
    app.component('YoAutoCompleteOption', AAutoComplete.Option);
  },
});

export const YoAutoCompleteOptGroup = Object.assign(AAutoComplete.OptGroup, {
  install(app: App) {
    app.component('YoAutoCompleteOptGroup', AAutoComplete.OptGroup);
  },
});

export default YoAutoComplete;
