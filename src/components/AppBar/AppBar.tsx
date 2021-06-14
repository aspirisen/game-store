import * as React from "react";
import { Select, SelectProps } from "ui-kit/Select/Select";
import { Button } from "ui-kit/Button/Button";
import { Icon } from "ui-kit/Icon";
import { CartStorage } from "core/CartStorage";
import { useHistory } from "react-router-dom";
import "./styles.css";

export interface BackButton {
  onClick: () => void;
  text: string;
}

export interface AppBarProps {
  title: string;
  backButton?: BackButton;
}

export function AppBar(props: AppBarProps) {
  const cart = React.useContext(CartStorage);

  const history = useHistory();

  const currencyOptions = React.useMemo(
    () =>
      cart.currencies.map((v) => ({
        label: `${v.name} (${v.symbol})`,
        value: v.name,
      })) ?? [],
    [cart]
  );

  const handleOnChangeCurrency = React.useCallback<
    SelectProps<typeof currencyOptions[number]>["onChange"]
  >(
    (option) => {
      const rate = cart.currencies.find((r) => r.name === option.value);
      cart.setCurrency(rate);
    },
    [cart]
  );

  return (
    <div className="AppBar-container">
      <div className="AppBar-Title-contianer">
        <div className="AppBar-Title-label">{props.title}</div>

        {!!props.backButton && (
          <div
            className="AppBar-BackButton-label"
            onClick={props.backButton.onClick}
          >
            <Icon className="AppBar-BackButton-icon" name="ArrowBack" />

            {props.backButton.text}
          </div>
        )}
      </div>

      <div className="AppBar-Actions-container">
        <div className="AppBar-Actions-Item-container">
          <Button
            variant="link"
            color="secondary"
            icon="Cart"
            onClick={() => history.push("/checkout")}
          >
            CHECKOUT
            {cart.totalItems > 0 && <span>{cart.totalItems}</span>}
          </Button>
        </div>

        <div className="AppBar-Actions-Item-container">
          <Select
            selected={cart.currency?.name}
            onChange={handleOnChangeCurrency}
            options={currencyOptions}
          />
        </div>
      </div>
    </div>
  );
}
