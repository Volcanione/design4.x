import type { App, Plugin } from 'vue';
import { components } from './components';
import type { YostarDesignOptions } from './types';
import './global';
import './style/index.less';

const YostarDesign: Plugin = {
  install(app: App, _options: YostarDesignOptions = {}) {
    components.forEach(component => {
      app.use(component);
    });
  },
};

export * from './components';
export * from './theme';
export type { YostarDesignOptions };
export default YostarDesign;
