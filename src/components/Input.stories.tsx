import { StoryContext, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
} as StoryContext;

export const Default: StoryObj<typeof Input> = {
  render: (props) => {
    return <Input {...props} />;
  },
  args: {
    value: "hoge",
  },
};

export const Disabled: StoryObj<typeof Input> = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const Width: StoryObj<typeof Input> = {
  ...Default,
  args: {
    width: "100%",
  },
};
