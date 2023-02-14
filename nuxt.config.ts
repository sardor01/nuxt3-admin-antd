export default defineNuxtConfig({
  ssr: false,
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
