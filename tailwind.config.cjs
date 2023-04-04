const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(({ addUtilities }) => {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden',
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts',
    './error.vue',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        light: '#f1f3f5',
        DEFAULT: '#b6c5d2',
      },
      blue: {
        light: '#184368',
        DEFAULT: '#133654',
      },
      red: {
        light: '#b30022',
        DEFAULT: '#89001a',
      },
      success: '#04d65c',
      warning: '#ffb131',
    },
  },
  plugins: [backfaceVisibility, require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
