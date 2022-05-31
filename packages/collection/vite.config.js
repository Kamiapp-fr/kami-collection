import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-collection.ts'),
      name: 'KamiCollection',
      fileName: (format) => `kami-collection.${format}.js`
    },
  },
  plugins: [dts()]
})