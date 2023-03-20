const { injectAxe, getViolations } = require('axe-playwright');

module.exports = {
  setup() {
    // アクセシビリティテスト用のカスタムマッチャを独自に定義
    expect.extend({
      toValidA11y(violations) {
        if (violations.length === 0) {
          return {
            message: () => `アクセシビリティのエラーは見つかりませんでした。`,
            pass: true,
          };
        }

        const violationsMessage = JSON.stringify(
          violations.map(({ id, impact, description, help }) => ({
            id,
            impact,
            description,
            help,
          })),
          '\n',
          '  '
        );

        return {
          message: () =>
            `アクセシビリティのエラーが見つかりました。\n\n${violationsMessage}`,
          pass: false,
        };
      },
    });
  },
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    // アクセシビリティのエラー一覧を取得
    const violations = await getViolations(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    // エラーをレポートする
    expect(violations).toValidA11y();
  },
};
