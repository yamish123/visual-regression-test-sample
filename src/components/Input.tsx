import React from "react";

interface Props {
  value: string;
  disabled?: boolean;
  width?: string;
  handleChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  value,
  disabled,
  width = "100px",
  handleChange,
}) => {
  return (
    <input
      style={{ padding: "4px", width }}
      type="text"
      value={value}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
