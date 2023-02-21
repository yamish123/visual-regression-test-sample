import { Meta, StoryContext, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (props) => {
    return (
      <label>
        テキストボックス
        <Input {...props} />
      </label>
    );
  },
  args: {
    value: "hoge",
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const Width: Story = {
  ...Default,
  args: {
    width: "100%",
  },
};
