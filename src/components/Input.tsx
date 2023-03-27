import React from "react";

interface Props {
  value: string;
  disabled?: boolean;
  width?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  value,
  disabled,
  width = "100px",
  onChange,
}) => {
  return (
    <input
      style={{ padding: "8px", width }}
      type="text"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
