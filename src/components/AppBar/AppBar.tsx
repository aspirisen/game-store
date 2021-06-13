import Select from "./../Select/Select";
import React, { memo, FC } from "react";
import Button from "./../Button/Button";
import { useHistory } from "react-router-dom";
import { ReactComponent as Cart } from "./../../assets/icons/cart.svg";
import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow-back.svg";
import "./styles.css";

export type AppBarProps = {
  title: string;
  backButton?: {
    onClick: () => void;
    text: string;
  };
};

const AppBar: FC<AppBarProps> = memo(({ title, backButton }) => {
  const history = useHistory();
  const handleOnChangeCurrency = console.log;

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
          </Button>
        </div>

        <div className="AppBar-Actions-Item-container">
          <Select
            value="usd"
            onChange={handleOnChangeCurrency}
            options={[
              {
                label: "USD ($)",
                value: "USD",
              },
              {
                label: "EUR (€)",
                value: "EUR",
              },
              {
                label: "GBP (£)",
                value: "GBP",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
});

export default memo(AppBar);
