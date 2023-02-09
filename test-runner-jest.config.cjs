const { getJestConfig } = require('@storybook/test-runner');

module.exports = {
  ...getJestConfig(),
  testPathIgnorePatterns: [
    // TODO: アクセシビリティの改善対応時にリストから除外する
    'CountriesCombobox',
    'DialogButton',
    'Header',
  ],
};
