import * as React from "react";
import * as models from "api/models";
import { CartStorage } from "core/CartStorage";
import { Button } from "components/Button/Button";
import { ReactComponent as Cart } from "assets/icons/cart.svg";

export interface GameTileProps {
  game: models.Game;
}

export function GameTile(props: GameTileProps) {
  const cart = React.useContext(CartStorage);
  const price = props.game.price * (cart.currency?.rate ?? 1);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#1e2131",
        width: 400,
      }}
    >
      <div>
        <img
          src={props.game.artworkUrl}
          alt="artwork"
          style={{ width: 100, maxHeight: 100, padding: 5 }}
        />
        <div>{props.game.rating}</div>
      </div>

      <div>
        <h2 style={{ fontSize: 12 }}>{props.game.name}</h2>
        <div>
          Price: {price.toFixed(2)} {cart.currency?.symbol}
        </div>
        <div>{props.game.releaseDate}</div>
        <div>{props.game.tags.join()}</div>

        <Button
          variant="secondary"
          color="secondary"
          icon={<Cart />}
          onClick={() => cart.addItem(props.game)}
        >
          Add to cart{" "}
          {cart.items[props.game.id] !== undefined
            ? cart.items[props.game.id]
            : undefined}
        </Button>

        <Button
          variant="secondary"
          color="secondary"
          icon={<Cart />}
          onClick={() => cart.removeItem(props.game)}
        >
          Remove from cart
        </Button>
      </div>
    </div>
  );
}
