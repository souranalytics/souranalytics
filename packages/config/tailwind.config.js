const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    '../../packages/shared/components/**/*.tsx',
    '../../packages/shared/layouts/**/*.tsx',
    'pages/**/*.tsx'
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald
      }
    },
    fontFamily: {
      body: ['Satoshi', 'sans-serif'],
      code: ['Roboto Mono', 'monospace']
    }
  }
}
