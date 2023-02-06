import { Parameters, StoryContext, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { rest } from "msw";
import React from "react";

import { CountriesSearchCombobox } from "./CountriesCombobox";

const fetchCountriesMock = ({ error = false, loading = false } = {}) => {
  return rest.get("/api/countries", (req, res, ctx) => {
    return res(
      ctx.status(error ? 500 : 200),
      ctx.delay(loading ? "infinite" : 0),
      ctx.json(
        error
          ? []
          : [
              { value: 1, label: "アイスランド共和国" },
              { value: 2, label: "アイルランド" },
              { value: 3, label: "アゼルバイジャン共和国" },
            ]
      )
    );
  });
};

export default {
  title: "Example/CountriesSearchCombobox",
  component: CountriesSearchCombobox,
  parameters: {
    msw: {
      handlers: [fetchCountriesMock()],
    },
  } as Parameters,
} as StoryContext;

export const Default: StoryObj<typeof CountriesSearchCombobox> = {
  render: () => (
    <div style={{ height: "200px" }}>
      <CountriesSearchCombobox />
    </div>
  ),
};

export const IsOpen: StoryObj<typeof CountriesSearchCombobox> = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox");
    await userEvent.click(textbox);
  },
};

export const IsError: StoryObj<typeof CountriesSearchCombobox> = {
  ...IsOpen,
  parameters: {
    msw: {
      handlers: [fetchCountriesMock({ error: true })],
    },
  },
};

export const IsLoading: StoryObj<typeof CountriesSearchCombobox> = {
  ...IsOpen,
  parameters: {
    msw: {
      handlers: [fetchCountriesMock({ loading: true })],
    },
  },
};
