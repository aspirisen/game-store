import * as models from "api/models";
import { GameTile } from "components/GameTile";
import css from "./CheckoutPage.module.css";

export interface GameProps {
  id: string;
  games: models.Game[] | undefined;
}

export function CheckoutGame(props: GameProps) {
  const game = props.games?.find((g) => g.id === props.id);

  return game ? (
    <div className={css.game}>
      <GameTile key={game.id} game={game} />
    </div>
  ) : null;
}
