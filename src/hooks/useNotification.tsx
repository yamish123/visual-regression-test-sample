import React, {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { NotificationBar } from "smarthr-ui";

type NotificationProps = ComponentProps<typeof NotificationBar> | null;

type NotificationContext = {
  notification: NotificationProps;
  setNotification: React.Dispatch<React.SetStateAction<NotificationProps>>;
};

const defaultContext: NotificationContext = {
  notification: null,
  setNotification: (t) => t,
};

const notificationContext = createContext<NotificationContext>(defaultContext);

export const NotificationContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<NotificationProps>(null);

  return (
    <notificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </notificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(notificationContext);
