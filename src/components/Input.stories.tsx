import { Meta, StoryContext, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

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
    ...Default.args,
    disabled: true,
  },
};

export const Width: Story = {
  ...Default,
  args: {
    ...Default.args,
    width: "100%",
  },
};
