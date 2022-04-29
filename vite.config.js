import { defineConfig } from 'vite'
import { resolve, dirname  } from 'path';
import { fileURLToPath } from 'url';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';

const _dirname = dirname(fileURLToPath(import.meta.url));

export const alias = {
  "@kamiapp/component": resolve(_dirname, "./packages/component/src/kami-component.ts"),
  "@kamiapp/flash": resolve(_dirname, "./packages/flash/src/index.ts"),
  "@kamiapp/infinite-list": resolve(_dirname, "./packages/infinite-list/src/index.ts"),
  "@kamiapp/collection": resolve(_dirname, "./packages/collection/src/kami-collection.ts"),
  "@kamiapp/markdown": resolve(_dirname, "./packages/markdown/src/kami-markdown.ts"),
  "@kamiapp/changelog": resolve(_dirname, "./packages/changelog/src/kami-changelog.ts"),
  "@kamiapp/theme": resolve(_dirname, "./packages/theme/src/index.ts"),
  "@kamiapp/transition": resolve(_dirname, "./packages/transition/src/kami-transition.ts"),
}

export default defineConfig({
  resolve: {
    alias,
  },
  root: resolve(_dirname, './demos/'),
  build: {
    outDir: resolve(_dirname, './dist/'),
    rollupOptions: {
      input: {
        home: resolve(_dirname, './demos/index.html'),
        started: resolve(_dirname, './demos/guide/index.html'),
      }
    }
  },
  plugins: [
    VitePluginCustomElementsManifest({
      files: [
        './packages/markdown/src/kami-markdown.ts'
      ],
      lit: true,
    })
  ]
})