import React, { memo } from "react";
import { useRequest } from "core/useRequest";
import { queryGames } from "api/requests";
import Layout from "../../components/Layout/Layout";
import { GameTile } from "components/GameTile";

const GameListPage = memo(() => {
  const [games, { isLoading }] = useRequest(queryGames);

  return (
    <Layout title="Games">
      <div>[GameListPage]</div>

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
            <div style={{ padding: 5 }}>
              <GameTile key={game.id} game={game} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
});

export default GameListPage;
