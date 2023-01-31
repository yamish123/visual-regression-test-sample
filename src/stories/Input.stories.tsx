import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

export const Default = {
  args: {
    value: "hoge",
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
