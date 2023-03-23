const { injectAxe, getViolations } = require('axe-playwright');

module.exports = {
  setup() {
    // カスタムマッチャを独自に定義
    expect.extend({
      toValidA11y(violations) {
        if (violations.length === 0) {
          return {
            message: () => `no errors found.`,
            pass: true,
          };
        }

        return {
          message: () =>
            JSON.stringify(
              violations.map(({ id, impact, description, help }) => ({
                id,
                impact,
                description,
                help,
              })),
              '\n',
              '  '
            ),
          pass: false,
        };
      },
    });
  },
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    const violations = await getViolations(page, '#storybook-root');
    expect(violations).toValidA11y();
  },
};
