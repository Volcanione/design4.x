import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    emptyOutDir: false,
    cssCodeSplit: true,
    lib: {
      entry: {
        button: resolve(__dirname, 'src/components/button/index.ts'),
        cascader: resolve(__dirname, 'src/components/cascader/index.ts'),
        checkbox: resolve(__dirname, 'src/components/checkbox/index.ts'),
        'config-provider': resolve(__dirname, 'src/components/config-provider/index.ts'),
        'date-picker': resolve(__dirname, 'src/components/date-picker/index.ts'),
        input: resolve(__dirname, 'src/components/input/index.ts'),
        'input-number': resolve(__dirname, 'src/components/input-number/index.ts'),
        radio: resolve(__dirname, 'src/components/radio/index.ts'),
        resolver: resolve(__dirname, 'src/resolver.ts'),
        select: resolve(__dirname, 'src/components/select/index.ts'),
        space: resolve(__dirname, 'src/components/space/index.ts'),
        switch: resolve(__dirname, 'src/components/switch/index.ts'),
        'time-picker': resolve(__dirname, 'src/components/time-picker/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', '@ant-design/icons-vue'],
      output: {
        entryFileNames: '[name]/index.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
