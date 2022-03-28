import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      "@kamiapp/component": "/packages/component/src/kami-component.ts"
    }
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