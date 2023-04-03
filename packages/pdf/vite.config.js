import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KamiPdf',
      fileName: (format) => `kami-pdf.${format}.js`
    },
  },
  plugins: [dts()]
})