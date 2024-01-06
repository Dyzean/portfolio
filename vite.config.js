import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  define: {
    __APP_VERSION__: process.env.NODE_ENV === 'production' ? process.env.VITE_APP_VERSION : JSON.stringify(process.env.VITE_APP_VERSION),
  },

  plugins: [
    Vue(),

    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    Components({
      directoryAsNamespace: true,
      dts: false,
    }),

    UnoCSS(),
  ],
})
