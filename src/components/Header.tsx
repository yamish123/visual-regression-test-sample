import React, { ComponentProps } from "react";
import {
  Button,
  FaQuestionCircleIcon,
  HeaderDropdownMenuButton,
  HeaderLink,
  Header as ShrHeader,
  Text,
} from "smarthr-ui";

type Props = {
  tenants: ComponentProps<typeof ShrHeader>["tenants"];
  user: string;
};

export const Header: React.FC<Props> = ({ tenants, user }) => {
  return (
    <ShrHeader tenants={tenants}>
      <HeaderLink
        href="https://support.smarthr.jp/"
        prefix={<FaQuestionCircleIcon />}
      >
        ヘルプ
      </HeaderLink>
      <HeaderDropdownMenuButton label={user}>
        <Button>ログアウト</Button>
      </HeaderDropdownMenuButton>
    </ShrHeader>
  );
};
