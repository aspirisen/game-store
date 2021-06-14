import { Button } from "ui-kit/Button";
import css from "./NumberSwitcher.module.css";

export type Direction = "increase" | "decrease";

export interface NumberSwitcherProps {
  value: number;
  onChange: (direction: Direction) => void;
}

export function NumberSwitcher(props: NumberSwitcherProps) {
  return (
    <span className={css.numberSwitcher}>
      <Button
        icon="Subtract"
        variant="secondary"
        color="secondary"
        onClick={() => props.onChange("decrease")}
      />
      <span>{props.value}</span>
      <Button
        icon="Plus"
        variant="secondary"
        color="secondary"
        onClick={() => props.onChange("increase")}
      />
    </span>
  );
}
