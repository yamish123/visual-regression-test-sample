import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";

import {
  NotificationContextProvider,
  useNotificationContext,
} from "../hooks/useNotification";

import { App } from "./App";

const meta = {
  title: "Example/App",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof App>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const AppWithNotifcationBar: React.FC = () => {
  const { setNotification } = useNotificationContext();

  useEffect(() => {
    setNotification({
      type: "success",
      bold: true,
      message: "処理に成功しました。",
    });
  }, [setNotification]);

  return <App />;
};

export const WithNotificationBar: Story = {
  render: () => <AppWithNotifcationBar />,
};
