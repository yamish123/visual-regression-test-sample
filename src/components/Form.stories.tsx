import { Meta, StoryContext, StoryObj } from "@storybook/react";
import React from "react";

import { Form } from "./Form";

const meta = {
  title: "Example/Form",
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
