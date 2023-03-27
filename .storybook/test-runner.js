const { injectAxe, getViolations } = require('axe-playwright');

module.exports = {
  setup() {
    // カスタムマッチャを独自に定義
    expect.extend({
      toValidA11y(violations) {
        if (violations.length === 0) {
          return { pass: true };
        }

        return {
          message: () =>
            'アクセシビリティのエラーが見つかりました。\n' +
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
    // 作成したカスタムマッチャでエラーをレポート
    expect(violations).toValidA11y();
  },
};
