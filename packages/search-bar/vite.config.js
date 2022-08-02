import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KamiSearchBar',
      fileName: (format) => `kami-search-bar.${format}.js`
    },
  },
  plugins: [dts()]
})