import * as models from "./models";

export interface GamesResponse {
  games: models.Game[];
}

export function queryGames() {
  return fetch("/api/games")
    .then<GamesResponse>((v) => v.json())
    .then((v) => v.games);
}

export function queryCurrencyRates() {
  return fetch("/api/rates")
    .then<Record<string, number>>((v) => v.json())
    .then<models.Currency[]>((v) =>
      Object.entries(v).map(([name, rate]) => ({
        name,
        symbol: ratesSymbols[name] ?? "",
        rate,
      }))
    );
}

const ratesSymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};
