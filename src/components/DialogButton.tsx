import React, { useState } from "react";
import { Button, MessageDialog } from "smarthr-ui";

export const DialogButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openDialog}>ダイアログを開く</Button>
      <MessageDialog
        title="サンプルダイアログ"
        description="これはサンプルのダイアログです。"
        isOpen={isOpen}
        onClickClose={closeDialog}
      />
    </div>
  );
};
