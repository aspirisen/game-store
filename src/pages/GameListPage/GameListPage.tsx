import { queryGames } from "api/requests";
import { useRequest } from "core/useRequest";
import { Layout } from "components/Layout/Layout";
import { GameTile } from "components/GameTile";
import css from "./GameListPage.module.css";

export function GameListPage() {
  const [games, { isLoading }] = useRequest(queryGames);

  return (
    <Layout title="Games">
      {isLoading ? (
        "loading"
      ) : (
        <div className={css.list}>
          {games?.map((game) => (
            <div key={game.id} className={css.gameTileWrapper}>
              <GameTile key={game.id} game={game} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
