const { injectAxe, getViolations } = require('axe-playwright');

expect.extend({
  toValidA11y(violations) {
    if (violations.length === 0) {
      return {
        message: () => `No accessibility violations detected!`,
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
        `Accessibility violations detected.\n\n${violationsMessage}`,
      pass: false,
    };
  },
});

module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    const violations = await getViolations(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    expect(violations).toValidA11y();
  },
};
