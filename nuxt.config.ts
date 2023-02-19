import * as AntD from 'ant-design-vue'
import { addComponent } from '@nuxt/kit'

export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    'ant-design-vue/dist/antd.css',
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['acceptHMRUpdate', 'defineStore', 'storeToRefs'],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        legacy: false,
        stategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
        locales: [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'ru', name: 'Русский', file: 'ru.json' },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
    async () => {
      for (const key in AntD) {
        if (['version', 'install'].includes(key))
          continue
        await addComponent({
          filePath: 'ant-design-vue',
          name: `A${key}`,
          export: key,
        })
      }
    },
  ],
  typescript: {
    strict: true,
    typeCheck: 'build',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
