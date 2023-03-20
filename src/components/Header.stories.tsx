import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, Parameters, StoryContext, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tenants: [{ id: "1", name: "株式会社SmartHR" }],
    user: "info@example.com",
  },
  parameters: {
    chromatic: {
      viewports: [1200, 390],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  },
};
