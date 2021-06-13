import { render } from "@testing-library/react";
import GameListPage from "./GameListPage";
import React from "react";

describe("GameListPage", () => {
  it("Should work", () => {
    const { getByText } = render(<GameListPage />);

    expect(getByText("[GameListPage]")).toBeInTheDocument();
  });
});
