import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-transition.ts'),
      name: 'KamiTransition',
      fileName: (format) => `kami-transition.${format}.js`
    },
  },
  plugins: [dts()]
})