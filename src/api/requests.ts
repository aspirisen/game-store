import * as models from "./models";

export interface GamesResponse {
  games: models.Game[];
}

export function fetchGames() {
  return fetch("/api/games")
    .then<GamesResponse>((v) => v.json())
    .then((v) => v.games);
}
