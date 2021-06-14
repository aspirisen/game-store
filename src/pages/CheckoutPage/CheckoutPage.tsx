import * as React from "react";
import { useHistory } from "react-router-dom";
import * as models from "api/models";
import { Button } from "ui-kit/Button/Button";
import { CartStorage } from "core/CartStorage";
import { useRequest } from "core/useRequest";
import { Layout } from "components/Layout/Layout";
import { queryGames } from "api/requests";
import { usePrice } from "core/usePrice";
import { CheckoutGame } from "./CheckoutGame";
import "./styles.css";

export function CheckoutPage() {
  const [games, { isLoading }] = useRequest(queryGames);
  const cart = React.useContext(CartStorage);
  const price = usePrice();
  const history = useHistory();

  const totalQuantity = Object.values(cart.items).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const orderValue = React.useMemo(() => {
    const gameById = games?.reduce((hash, game) => {
      hash[game.id] = game;
      return hash;
    }, {} as Record<string, models.Game>);

    const result = Object.entries(cart.items).reduce(
      (total, [id, quantity]) => total + (gameById?.[id].price ?? 0) * quantity,
      0
    );

    return result;
  }, [cart.items, games]);

  return (
    <Layout
      title="Checkout"
      backButton={{
        text: "Go back to overview page",
        onClick: () => history.push("/list"),
      }}
    >
      {isLoading ? (
        "loading"
      ) : (
        <div
          className="CheckoutPage-container"
          data-testid="checkout-page-container"
        >
          <div className="CheckoutPage-GameList-container">
            {Object.entries(cart.items).map(([id]) => (
              <CheckoutGame key={id} games={games} id={id} />
            ))}
          </div>

          <div className="CheckoutPage-Overview-container">
            <div data-testid="checkout-page-container-total-items">
              Total items: {totalQuantity}
            </div>
            <div data-testid="checkout-page-container-order-value">
              Order value: {price.format(orderValue)}
            </div>

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
      )}
    </Layout>
  );
}
