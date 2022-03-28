import { defineConfig } from 'vite'
import { resolve } from 'path';

export const alias = {
  "@kamiapp/component": "/packages/component/src/kami-component.ts",
  "@kamiapp/flash": "/packages/flash/src/index.ts"
}

export default defineConfig({
  resolve: {
    alias,
  },
  build: {
    rollupOptions: {
      input: {
        counter: resolve(__dirname, './demos/component/counter/index.html'),
        drawing: resolve(__dirname, './demos/component/drawing/index.html')
      }
    }
  }
})