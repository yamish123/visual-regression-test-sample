import { StoryContext, StoryObj } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
} as StoryContext;

export const Default: StoryObj<typeof Input> = {
  args: {
    value: "hoge",
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};

export const Width: StoryObj<typeof Input> = {
  args: {
    width: "100%",
  },
};
