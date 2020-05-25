module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs/react/preset'],
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
