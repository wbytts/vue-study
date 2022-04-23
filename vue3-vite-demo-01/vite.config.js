import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
  ],
  vueCompilerOptions: {
    isCustomElement: tag => tag === 'xxx',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@coms': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@views': path.resolve(__dirname, 'src/views'),
    }
  },
});
