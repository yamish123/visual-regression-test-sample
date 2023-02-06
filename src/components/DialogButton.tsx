import React, { useRef, useState } from "react";
import { Button, MessageDialog } from "smarthr-ui";

export const DialogButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const portalParentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={portalParentRef}>
      <Button onClick={openDialog}>ダイアログを開く</Button>
      <MessageDialog
        portalParent={portalParentRef.current || undefined}
        title="サンプルダイアログ"
        description="これはサンプルのダイアログです。"
        isOpen={isOpen}
        onClickClose={closeDialog}
      />
    </div>
  );
};
