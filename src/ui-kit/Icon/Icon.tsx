import * as list from "./list";

export interface IconProps {
  name: keyof typeof list;
  className?: string;
}

export function Icon(props: IconProps) {
  const Component = list[props.name];
  return <Component {...props} />;
}
