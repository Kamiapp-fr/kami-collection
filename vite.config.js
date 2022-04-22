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

const mdPlugin = {
  name: 'vite-md-plugin',
  transform (code, id) {
    if (/\.md$/.test(id)) {
      const json = JSON.stringify(code)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')

      return {
        code: `export default ${json}`
      }
    }
  }
}

export default defineConfig({
  resolve: {
    alias,
  },
  root: resolve(__dirname, './demos/'),
  build: {
    outDir: resolve(__dirname, './dist/'),
    rollupOptions: {
      input: {
        home: resolve(__dirname, './demos/index.html'),
        started: resolve(__dirname, './demos/guide/index.html'),
      }
    }
  },
  plugins: [
    mdPlugin
  ]
})