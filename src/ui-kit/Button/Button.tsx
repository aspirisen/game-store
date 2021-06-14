import * as React from "react";
import { Icon, IconProps } from "ui-kit/Icon";
import "./styles.css";

export interface ButtonProps {
  onClick: () => void;
  variant: "link" | "secondary" | "primary";
  color: "secondary" | "primary";
  fullWidth?: boolean;
  icon?: IconProps["name"];
}

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  const classNames = ["Button-base"];

  if (props.variant === "link") {
    classNames.push("Button-link");
  } else if (props.variant === "secondary") {
    classNames.push("Button-secondary");
  } else {
    classNames.push("Button-primary");
  }

  if (props.color === "secondary") {
    classNames.push("Button-colorSecondary");
  } else {
    classNames.push("Button-colorPrimary");
  }

  if (!!props.fullWidth) {
    classNames.push("Button-fullWidth");
  }

  return (
    <button className={classNames.join(" ")} onClick={props.onClick}>
      {props.icon && <Icon className="Button-icon" name={props.icon} />}
      {props.children}
    </button>
  );
}
