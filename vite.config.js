import { defineConfig } from 'vite'
import { resolve } from 'path';

export const alias = {
  "@kamiapp/component": resolve(__dirname, "./packages/component/src/kami-component.ts"),
  "@kamiapp/flash": resolve(__dirname, "./packages/flash/src/index.ts"),
  "@kamiapp/infinite-list": resolve(__dirname, "./packages/infinite-list/src/index.ts"),
  "@kamiapp/collection": resolve(__dirname, "./packages/collection/src/kami-collection.ts")
}

export default defineConfig({
  resolve: {
    alias,
  },
  build: {
    rollupOptions: {
      input: {
        counter: resolve(__dirname, './demos/component/counter/index.html'),
        drawing: resolve(__dirname, './demos/component/drawing/index.html'),
        flash: resolve(__dirname, './demos/flash/index.html'),
        flex: resolve(__dirname, './demos/infinite-list/flex/index.html'),
        nested: resolve(__dirname, './demos/infinite-list/nested/index.html'),
        issues: resolve(__dirname, './demos/infinite-list/issues/index.html'),
        simple: resolve(__dirname, './demos/infinite-list/simple/index.html'),
      }
    }
  }
})