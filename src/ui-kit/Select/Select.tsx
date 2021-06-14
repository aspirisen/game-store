import * as React from "react";
import "./styles.css";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps<T extends Option> {
  selected?: string;
  onChange: (option: T) => void;
  options: T[];
}

export function Select<T extends Option>(props: SelectProps<T>) {
  const onChange = React.useCallback<
    Exclude<
      React.SelectHTMLAttributes<HTMLSelectElement>["onChange"],
      undefined
    >
  >(
    (e) => {
      const option = props.options.find(
        (o) => o.value === e.currentTarget.value
      );

      if (option) {
        props.onChange(option);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onChange, props.options]
  );

  return (
    <select
      className="Select-container"
      value={props.selected}
      onChange={onChange}
    >
      {props.options.map((option, index) => (
        <option key={option.value + index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
