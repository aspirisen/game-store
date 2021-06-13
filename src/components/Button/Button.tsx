import React, { memo, FC, ReactNode } from "react";
import "./styles.css";

const Button: FC<{
  onClick: () => void;
  children: any;
  variant: "link" | "secondary" | "primary";
  color: "secondary" | "primary";
  fullWidth?: boolean;
  icon?: ReactNode;
}> = ({ children, onClick, variant, color, icon, fullWidth }) => {
  const classNames = ["Button-base"];

  if (variant === "link") {
    classNames.push("Button-link");
  } else if (variant === "secondary") {
    classNames.push("Button-secondary");
  } else {
    classNames.push("Button-primary");
  }

  if (color === "secondary") {
    classNames.push("Button-colorSecondary");
  } else {
    classNames.push("Button-colorPrimary");
  }

  if (!!fullWidth) {
    classNames.push("Button-fullWidth");
  }

  return (
    <button className={classNames.join(" ")} onClick={onClick}>
      {!!icon && <div className="Button-icon">{icon}</div>}

      {children}
    </button>
  );
};

export default memo(Button);
