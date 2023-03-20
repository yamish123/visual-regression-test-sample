import React from "react";
import { Header, NotificationBar, Stack } from "smarthr-ui";

import { useNotificationContext } from "../hooks/useNotification";

export const App: React.FC = () => {
  const { notification } = useNotificationContext();

  return (
    <Stack gap={0}>
      <Header />
      {notification && <NotificationBar {...notification} />}
    </Stack>
  );
};
