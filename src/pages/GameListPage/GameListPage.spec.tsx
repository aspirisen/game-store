import { render } from "@testing-library/react";
import { CartStorageProvider } from "core/CartStorage";
import { GameListPage } from "./GameListPage";

describe("GameListPage", () => {
  it("Should work", async () => {
    const { findByTestId } = render(<GameListPage />, {
      wrapper: CartStorageProvider,
    });

    expect(await findByTestId("games-list")).toBeInTheDocument();
  });

  it("Should have list of games", async () => {
    const { findAllByTestId } = render(<GameListPage />, {
      wrapper: CartStorageProvider,
    });

    const tiles = await findAllByTestId("game-tile");

    expect(tiles.length).toEqual(43);
  });
});
