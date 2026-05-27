import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@yo-star/yostar-design': resolve(__dirname, '../../packages/yostar-design/src/index.ts'),
      '@yo-star/yostar-design/style.css': resolve(__dirname, '../../packages/yostar-design/src/style/index.less'),
    },
  },
  server: {
    host: true,
  },
});
