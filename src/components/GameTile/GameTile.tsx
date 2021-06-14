import * as React from "react";
import * as models from "api/models";
import { CartStorage } from "core/CartStorage";
import { Button } from "ui-kit/Button/Button";
import { Stars } from "ui-kit/Stars";
import css from "./GameTile.module.css";
import { usePrice } from "core/usePrice";
import { NumberSwitcher } from "ui-kit/NumberSwitcher";

export interface GameTileProps {
  game: models.Game;
}

export function GameTile(props: GameTileProps) {
  const cart = React.useContext(CartStorage);
  const price = usePrice();
  const cartItem = cart.items[props.game.id];

  return (
    <div className={css.gameTile} data-testid="game-tile">
      <div className={css.highlights}>
        <img src={props.game.artworkUrl} alt="artwork" className={css.avatar} />
        <Stars stars={props.game.rating} />
      </div>

      <div>
        <h2 className={css.gameName}>{props.game.name}</h2>
        <div className={css.meta}>
          <div>Price: {price.format(props.game.price)}</div>
          <div>Release date: {props.game.releaseDate}</div>
          <div>Tags: {props.game.tags.join(", ")}</div>
        </div>

        <div className={css.addCart}>
          {cartItem === undefined || cartItem === 0 ? (
            <Button
              variant="secondary"
              color="secondary"
              icon="Cart"
              onClick={() => cart.addItem(props.game)}
            >
              Add to cart
            </Button>
          ) : (
            <NumberSwitcher
              value={cartItem}
              onChange={(v) =>
                v === "increase"
                  ? cart.addItem(props.game)
                  : cart.removeItem(props.game)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
