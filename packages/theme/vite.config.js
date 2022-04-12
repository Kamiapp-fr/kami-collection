import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KamiTheme',
      fileName: (format) => `kami-theme.${format}.js`
    },
  },
  plugins: [dts()]
})