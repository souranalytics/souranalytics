const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    '../../packages/shared/components/**/*.tsx',
    '../../packages/shared/layouts/**/*.tsx',
    'pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald
      }
    },
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Satoshi', 'sans-serif']
    }
  },
  plugins: []
}
