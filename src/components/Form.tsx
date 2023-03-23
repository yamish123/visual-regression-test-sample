import React, { useState } from "react";

export const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = () => {
    // 送信完了時の処理
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        メールアドレス
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button>送信</button>
    </form>
  );
};
