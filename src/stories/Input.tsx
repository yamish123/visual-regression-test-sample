import React from "react";

interface Props {
  value: string;
  disabled?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({ value, disabled, handleChange }) => {
  return (
    <input
      style={{ padding: "4px" }}
      type="text"
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};
