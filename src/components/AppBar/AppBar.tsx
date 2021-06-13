import Select, { SelectProps } from "./../Select/Select";
import React, { memo, FC } from "react";
import Button from "./../Button/Button";
import { CartStorage } from "core/CartStorage";
import { useHistory } from "react-router-dom";
import { ReactComponent as Cart } from "./../../assets/icons/cart.svg";
import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow-back.svg";
import "./styles.css";
import { useRequest } from "core/useRequest";
import { queryCurrencyRates } from "api/requests";

export type AppBarProps = {
  title: string;
  backButton?: {
    onClick: () => void;
    text: string;
  };
};

const AppBar: FC<AppBarProps> = memo(({ title, backButton }) => {
  const cart = React.useContext(CartStorage);
  const [rates] = useRequest(queryCurrencyRates);
  const history = useHistory();

  const handleOnChangeCurrency = React.useCallback<
    Exclude<SelectProps["onChange"], undefined>
  >(
    (e) => {
      const rate = rates?.find((r) => r.name === e.currentTarget.value);
      cart.setCurrency(rate);
    },
    [cart, rates]
  );

  React.useEffect(() => {
    if (cart.currency === undefined) {
      cart.setCurrency(rates?.[0]);
    }
  }, [cart, rates]);

  return (
    <div className="AppBar-container">
      <div className="AppBar-Title-contianer">
        <div className="AppBar-Title-label">{title}</div>

        {!!backButton && (
          <div className="AppBar-BackButton-label" onClick={backButton.onClick}>
            <ArrowBack className="AppBar-BackButton-icon" />

            {backButton.text}
          </div>
        )}
      </div>

      <div className="AppBar-Actions-container">
        <div className="AppBar-Actions-Item-container">
          <Button
            variant="link"
            color="secondary"
            icon={<Cart />}
            onClick={() => history.push("/checkout")}
          >
            CHECKOUT
            {cart.totalItems > 0 && <span>{cart.totalItems}</span>}
          </Button>
        </div>

        <div className="AppBar-Actions-Item-container">
          <Select
            value={cart.currency?.name}
            onChange={handleOnChangeCurrency}
            options={
              rates?.map((v) => ({
                label: `${v.name} (${v.symbol})`,
                value: v.name,
              })) ?? []
            }
          />
        </div>
      </div>
    </div>
  );
});

export default memo(AppBar);
