import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/kami-component.ts'),
      name: 'KamiComponent',
      fileName: (format) => `kami-component.${format}.js`
    },
  },
  plugins: [dts()]
})