import { defineConfig } from 'vite'
import { resolve, dirname  } from 'path';
import { fileURLToPath } from 'url';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import handlebars from 'vite-plugin-handlebars';
import glob from "glob";

const _dirname = dirname(fileURLToPath(import.meta.url));

export const alias = {
  "@kamiapp/media": resolve(_dirname, "./packages/media/src/index.ts"),
  "@kamiapp/pdf": resolve(_dirname, "./packages/pdf/src/index.ts"),
  "@kamiapp/search-bar": resolve(_dirname, "./packages/search-bar/src/index.ts"),
  "@kamiapp/progress-bar": resolve(_dirname, "./packages/progress-bar/src/index.ts"),
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
      input: glob.sync('./demos/**/*.html'),
    }
  },
  plugins: [
    VitePluginCustomElementsManifest({
      files: [
        './packages/media/src/index.ts',
        './packages/pdf/src/index.ts',
        './packages/search-bar/src/index.ts',
        './packages/infinite-list/src/index.ts',
        './packages/progress-bar/src/index.ts',
        './packages/flash/src/index.ts',
        './packages/changelog/src/kami-changelog.ts',
        './packages/markdown/src/kami-markdown.ts',
        './packages/theme/src/themes/kami-theme.ts',
        './packages/transition/src/kami-transition.ts'
      ],
      lit: true,
    }),
    handlebars({
      partialDirectory: resolve(_dirname, './demos/_includes'),
    })
  ]
})