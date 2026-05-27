import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'YostarDesign',
      fileName: format => `yostar-design.${format === 'es' ? 'es.js' : 'umd.cjs'}`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', '@ant-design/icons-vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'antd',
          '@ant-design/icons-vue': 'AntDesignIconsVue',
        },
      },
    },
  },
});
