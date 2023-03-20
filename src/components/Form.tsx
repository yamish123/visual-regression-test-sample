import React, { useState } from "react";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setName(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = () => {
    // 送信完了時の処理
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          名前
          <input name="name" value={name} onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          メールアドレス
          <input name="email" value="example@example.com" />
        </label>
      </div>
      <button>送信</button>
    </form>
  );
};
