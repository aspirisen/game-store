import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "ui-kit/Button/Button";
import { CartStorage } from "core/CartStorage";
import { useRequest } from "core/useRequest";
import { Layout } from "components/Layout/Layout";
import { queryGames } from "api/requests";
import { usePrice } from "core/usePrice";
import { CheckoutGame } from "./CheckoutGame";
import "./styles.css";

export function CheckoutPage() {
  const [games] = useRequest(queryGames);
  const cart = React.useContext(CartStorage);
  const price = usePrice();
  const history = useHistory();

  const totalItems = Object.values(cart.items).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const orderValue = Object.entries(cart.items).reduce(
    (total, [id, quantity]) =>
      total + (games?.find((g) => g.id === id)?.price ?? 0) * quantity,
    0
  );

  return (
    <Layout
      title="Checkout"
      backButton={{
        text: "Go back to overview page",
        onClick: () => history.push("/list"),
      }}
    >
      <div className="CheckoutPage-container">
        <div className="CheckoutPage-GameList-container">
          {Object.entries(cart.items).map(([id]) => (
            <CheckoutGame games={games} id={id} />
          ))}
        </div>

        <div className="CheckoutPage-Overview-container">
          <div>Total items: {totalItems}</div>
          <div>Order value: {price.format(orderValue)}</div>

          <hr className="CheckoutPage-Divider" />

          <Button
            variant="link"
            color="secondary"
            fullWidth
            onClick={() => history.push("/")}
          >
            Back to overview
          </Button>
        </div>
      </div>
    </Layout>
  );
}
