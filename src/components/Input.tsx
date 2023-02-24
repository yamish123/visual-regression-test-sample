import React from "react";

interface Props {
  value: string;
  disabled?: boolean;
  width?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({
  value,
  disabled,
  width = "100px",
  handleChange,
}) => {
  console.log(value);
  return (
    <input
      style={{ padding: "4px", width }}
      type="text"
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};
