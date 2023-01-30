import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "hoge",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "hoge",
  disabled: true,
};
