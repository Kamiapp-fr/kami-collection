import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { alias } from '../../vite.config';

module.exports = defineConfig({
  resolve: {
    alias,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-collection.ts'),
      name: 'KamiCollection',
      fileName: (format) => `kami-collection.${format}.js`
    },
  },
  plugins: [dts({
    include: ['src', '../flash/src', '../infinite-list/src', '../component/src'],
  })]
})