import { queryGames } from "api/requests";
import { useRequest } from "core/useRequest";
import { Layout } from "components/Layout/Layout";
import { GameTile } from "components/GameTile";

export function GameListPage() {
  const [games, { isLoading }] = useRequest(queryGames);

  return (
    <Layout title="Games">
      {isLoading ? (
        "loading"
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {games?.map((game) => (
            <div key={game.id} style={{ padding: 5 }}>
              <GameTile key={game.id} game={game} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
