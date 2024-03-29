export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    'ant-design-vue/dist/antd.css',
  ],
  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', 'storeToRefs'] },
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
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
