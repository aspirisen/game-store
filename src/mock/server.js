import { Server } from "miragejs";
import { games } from "./games";

let server = new Server();

server.get("/api/games", { games });

games.forEach((game) => {
  server.get(`/api/games/${game.id}`, game);
});

server.get("/api/rates", {
  USD: 1,
  EUR: 0.8738967054,
  GBP: 0.7869876781,
});
