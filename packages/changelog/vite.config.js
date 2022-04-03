import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-changelog.ts'),
      name: 'KamiChangelog',
      fileName: (format) => `kami-changelog.${format}.js`
    },
  },
  plugins: [dts()]
})