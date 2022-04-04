import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-markdown.ts'),
      name: 'KamiMarkdown',
      fileName: (format) => `kami-markdown.${format}.js`
    },
  },
  plugins: [dts()]
})