import { Meta, StoryContext, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { DialogButton } from "./DialogButton";

const meta = {
  title: "Example/DialogButton",
  component: DialogButton,
} satisfies Meta<typeof DialogButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("ダイアログを開く");

    await userEvent.click(button);
  },
};
