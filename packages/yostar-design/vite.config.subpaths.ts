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
        'config-provider': resolve(__dirname, 'src/components/config-provider/index.ts'),
        input: resolve(__dirname, 'src/components/input/index.ts'),
        resolver: resolve(__dirname, 'src/resolver.ts'),
        select: resolve(__dirname, 'src/components/select/index.ts'),
        space: resolve(__dirname, 'src/components/space/index.ts'),
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
