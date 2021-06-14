import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "ui-kit/Button/Button";
import { CartStorage } from "core/CartStorage";
import { useRequest } from "core/useRequest";
import { Layout } from "components/Layout/Layout";
import { GameTile } from "components/GameTile";
import { queryGames } from "api/requests";
import "./styles.css";

export function CheckoutPage() {
  const [games] = useRequest(queryGames);
  const cart = React.useContext(CartStorage);
  const history = useHistory();

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
          {Object.entries(cart.items).map(([id]) => {
            const game = games?.find((g) => g.id === id);
            return game && <GameTile key={game.id} game={game} />;
          })}
        </div>

        <div className="CheckoutPage-Overview-container">
          <div>
            Total items: {Object.values(cart.items).reduce((a, v) => a + v, 0)}
          </div>

          <div>
            Order value:{" "}
            {Object.entries(cart.items)
              .reduce(
                (a, [id, quantity]) =>
                  a + (games?.find((g) => g.id === id)?.price ?? 0) * quantity,
                0
              )
              .toFixed(2)}
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
    </Layout>
  );
}
