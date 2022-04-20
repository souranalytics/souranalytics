module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  framework: '@storybook/react',
  stories: ['../stories/**/*.stories.tsx']
}
