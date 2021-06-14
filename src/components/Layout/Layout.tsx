import * as React from "react";
import { AppBar, AppBarProps } from "./../AppBar/AppBar";
import "./styles.css";

export interface LayoutProps {
  title: string;
  backButton?: AppBarProps["backButton"];
}

export function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="Layout-container">
      <AppBar title={props.title} backButton={props.backButton} />
      <div className="Layout-Children-container">{props.children}</div>
    </div>
  );
}
