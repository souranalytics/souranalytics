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
        primary: colors.teal
      }
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif']
    }
  },
  plugins: []
}
