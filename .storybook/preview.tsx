import { Decorator } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import React from "react";

import { NotificationContextProvider } from "../src/hooks/useNotification";

// Initialize MSW
initialize();

const contextDecorator: Decorator = (Story) => {
  return (
    <NotificationContextProvider>
      <Story />
    </NotificationContextProvider>
  );
};

export const decorators = [mswDecorator, contextDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
