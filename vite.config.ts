import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: '/mlaufer-nysed-nysds-sample/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@nysds/components/dist/icons/*.svg',
          dest: 'assets/icons',
          rename: { stripBase: true },
        },
      ],
    }),
    vue({
      template: {
        compilerOptions: {
          // allow NYS Design System custom elements
          isCustomElement: (tag) => tag.startsWith('nys-'),
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
