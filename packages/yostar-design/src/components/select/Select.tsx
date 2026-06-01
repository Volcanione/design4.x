import { Select as ASelect } from 'ant-design-vue';
import {
  computed,
  defineComponent,
  h,
  normalizeClass,
  ref,
  type App,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  watchPostEffect,
} from 'vue';
import type { SelectProps as AntSelectProps } from 'ant-design-vue/es/select';
import { getDisabledVariantClass, yoDisabledVariantProps, type YoDisabledVariant } from '../../_utils/disabled';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoSelectDisabledVariant = YoDisabledVariant;
export type YoSelectVariant = 'default' | 'filter';

export const yoSelectCustomProps = () => ({
  ...yoDisabledVariantProps(),
  variant: {
    type: String as PropType<YoSelectVariant>,
    default: 'default',
  },
  label: [String, Number],
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
    const filterRef = ref<HTMLElement>();
    const filterLabelRef = ref<HTMLElement>();
    const filterDropdownWidth = ref<number>();
    const filterLabelWidth = ref(0);

    const themeClass = computed(() => `yo-select--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoSelectCustomPropKeys));

    const updateFilterDropdownWidth = () => {
      const width = filterRef.value?.getBoundingClientRect().width ?? 0;
      const labelWidth = filterLabelRef.value?.getBoundingClientRect().width ?? 0;
      filterDropdownWidth.value = width > 0 ? Math.ceil(width) : undefined;
      filterLabelWidth.value = labelWidth > 0 ? Math.ceil(labelWidth) : 0;
    };

    watchPostEffect(onCleanup => {
      const filterElement = filterRef.value;
      const filterLabelElement = filterLabelRef.value;

      if (!filterElement) {
        filterDropdownWidth.value = undefined;
        filterLabelWidth.value = 0;
        return;
      }

      updateFilterDropdownWidth();

      if (typeof ResizeObserver === 'undefined') {
        return;
      }

      const resizeObserver = new ResizeObserver(updateFilterDropdownWidth);
      resizeObserver.observe(filterElement);
      if (filterLabelElement) {
        resizeObserver.observe(filterLabelElement);
      }
      onCleanup(() => resizeObserver.disconnect());
    });

    return () => {
      const {
        class: customClass,
        style: customStyle,
        popupClassName,
        dropdownClassName,
        dropdownAlign,
        dropdownMatchSelectWidth,
        ...restAttrs
      } = attrs;
      const { label: labelSlot, ...selectSlots } = slots;
      const isFilter = props.variant === 'filter' || props.label !== undefined || Boolean(slots.label);
      const hasCustomDropdownWidth = dropdownMatchSelectWidth !== undefined;
      const matchedDropdownWidth = isFilter
        ? hasCustomDropdownWidth
          ? (dropdownMatchSelectWidth as AntSelectProps['dropdownMatchSelectWidth'])
          : filterDropdownWidth.value
        : (dropdownMatchSelectWidth as AntSelectProps['dropdownMatchSelectWidth']);
      const userDropdownAlign = dropdownAlign as AntSelectProps['dropdownAlign'];
      const userDropdownOffset = userDropdownAlign?.offset;
      const matchedDropdownAlign =
        isFilter && filterLabelWidth.value > 0
          ? {
              ...userDropdownAlign,
              offset: [
                Number(userDropdownOffset?.[0] ?? 0) - filterLabelWidth.value,
                Number(userDropdownOffset?.[1] ?? 0),
              ],
            }
          : userDropdownAlign;
      const selectNode = (
        <ASelect
          {...forwardedProps.value}
          {...restAttrs}
          popupClassName={normalizeClass(['yo-select-dropdown', popupClassName, dropdownClassName])}
          dropdownAlign={matchedDropdownAlign}
          dropdownMatchSelectWidth={matchedDropdownWidth}
          class={[
            'yo-select',
            themeClass.value,
            isFilter && 'yo-select--filter',
            getDisabledVariantClass('yo-select', restAttrs.disabled, props.disabledVariant),
            !isFilter && customClass,
          ]}
          v-slots={selectSlots}
        />
      );

      if (isFilter) {
        const labelNode =
          labelSlot || props.label !== undefined
            ? h('span', { ref: filterLabelRef, class: 'yo-select-filter__label' }, labelSlot?.() ?? props.label)
            : null;

        return h(
          'span',
          {
            ref: filterRef,
            class: ['yo-select-filter', `yo-select-filter--${yoConfigProvider.value.themeMode}`, customClass],
            style: customStyle,
          },
          [labelNode, selectNode],
        );
      }

      return selectNode;
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

export const YoSelectOption = Object.assign(ASelect.Option, {
  install(app: App) {
    app.component('YoSelectOption', ASelect.Option);
  },
});

export default YoSelect;
