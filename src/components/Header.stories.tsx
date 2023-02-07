import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Parameters, StoryContext, StoryObj } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  } as Parameters,
} as StoryContext;

export const Default: StoryObj<typeof Header> = {
  args: {
    tenants: [{ id: "1", name: "株式会社SmartHR" }],
    user: "info@example.com",
  },
};

export const Mobile: StoryObj<typeof Header> = {
  ...Default,
  parameters: {
    chromatic: {
      viewports: [390],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  },
};
