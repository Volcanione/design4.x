import type { PropType } from 'vue';

export type YoDisabledVariant = 'default' | 'strong';

export const yoDisabledVariantProps = () => ({
  disabledVariant: {
    type: String as PropType<YoDisabledVariant>,
    default: 'default',
  },
});

export function isDisabledAttr(value: unknown) {
  return value === true || value === '' || value === 'true';
}

export function getDisabledVariantClass(
  blockName: string,
  disabled: unknown,
  disabledVariant: YoDisabledVariant,
) {
  return {
    [`${blockName}--disabled-strong`]: isDisabledAttr(disabled) && disabledVariant === 'strong',
  };
}
