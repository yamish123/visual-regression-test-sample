import { StoryContext, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { DialogButton } from "./DialogButton";

export default {
  title: "Example/DialogButton",
  component: DialogButton,
} as StoryContext;

export const Default: StoryObj<typeof DialogButton> = {};

export const IsOpen: StoryObj<typeof DialogButton> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("ダイアログを開く");

    await userEvent.click(button);
  },
};
