import { Icon } from "ui-kit/Icon";
import css from "./Stars.module.css";

export type StarsQuantity = 1 | 2 | 3 | 4 | 5;

export interface StarsProps {
  stars: StarsQuantity;
}

export function Stars(props: StarsProps) {
  const starsQuantity: StarsQuantity = 5;

  return (
    <div className={css.stars}>
      {Array.from({ length: starsQuantity }).map((_, star) => (
        <Icon
          key={star}
          name="Star"
          className={star <= props.stars ? css.active : ""}
        />
      ))}
    </div>
  );
}
