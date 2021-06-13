import React, { FC, memo } from "react";
import "./styles.css";

export interface SelectProps {
  value: any;
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  options: {
    label: string;
    value: any;
  }[];
}

const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  return (
    <select className="Select-container" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={option.value + index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
