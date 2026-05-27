import { Space as ASpace } from 'ant-design-vue';
import { defineComponent, type DefineComponent, type ExtractPropTypes, type PropType } from 'vue';
import type { SpaceProps as AntSpaceProps } from 'ant-design-vue/es/space';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';

export const yoSpaceCustomProps = () => ({});
const yoSpaceCustomPropKeys = Object.keys(yoSpaceCustomProps());

export const yoSpaceProps = () => ({
  prefixCls: String,
  size: [String, Number, Array] as PropType<AntSpaceProps['size']>,
  direction: String as PropType<AntSpaceProps['direction']>,
  align: String as PropType<AntSpaceProps['align']>,
  wrap: Boolean,
  ...yoSpaceCustomProps(),
});

export type YoSpaceProps = AntSpaceProps & Partial<ExtractPropTypes<ReturnType<typeof yoSpaceCustomProps>>>;
export type YoSpaceComponent = DefineComponent<YoSpaceProps>;

const Space = defineComponent({
  name: 'YoSpace',
  inheritAttrs: false,
  props: yoSpaceProps(),
  setup(props, { attrs, slots }) {
    return () => <ASpace {...omitProps(props, yoSpaceCustomPropKeys)} {...attrs} v-slots={slots} />;
  },
});

export const YoSpace: WithInstall<typeof ASpace & YoSpaceComponent> = withInstall(
  Space as typeof ASpace & YoSpaceComponent,
);
export default YoSpace;
