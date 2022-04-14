import { defineConfig } from 'vite'
import { resolve } from 'path';

export const alias = {
  "@kamiapp/component": resolve(__dirname, "./packages/component/src/kami-component.ts"),
  "@kamiapp/flash": resolve(__dirname, "./packages/flash/src/index.ts"),
  "@kamiapp/infinite-list": resolve(__dirname, "./packages/infinite-list/src/index.ts"),
  "@kamiapp/collection": resolve(__dirname, "./packages/collection/src/kami-collection.ts"),
  "@kamiapp/markdown": resolve(__dirname, "./packages/markdown/src/kami-markdown.ts"),
  "@kamiapp/changelog": resolve(__dirname, "./packages/changelog/src/kami-changelog.ts"),
  "@kamiapp/theme": resolve(__dirname, "./packages/theme/src/index.ts"),
  "@kamiapp/transition": resolve(__dirname, "./packages/transition/src/kami-transition.ts"),
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
        changelog: resolve(__dirname, './demos/changelog/index.html'),
        markdown: resolve(__dirname, './demos/markdown/index.html'),
        transition: resolve(__dirname, './demos/transition/index.html')
      }
    }
  }
})