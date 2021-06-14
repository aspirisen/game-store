import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CartStorage, CartStorageProvider } from "core/CartStorage";
import { CheckoutPage } from "./CheckoutPage";
import { queryGames } from "api/requests";

describe("CheckoutPage", () => {
  it("Should work", async () => {
    const { findByTestId } = render(<CheckoutPage />, {
      wrapper: CartStorageProvider,
    });

    expect(await findByTestId("checkout-page-container")).toBeInTheDocument();
  });

  it("Should have correct total quantity", async () => {
    const games = await queryGames();

    const CheckoutPageWrapper = () => {
      const cart = React.useContext(CartStorage);

      return (
        <div>
          <CheckoutPage />
          {games && (
            <button
              data-testid="add"
              onClick={() => {
                cart.addItem(games[0]);
                cart.addItem(games[1]);
                cart.addItem(games[3]);
                cart.addItem(games[3]);
              }}
            >
              Add
            </button>
          )}
        </div>
      );
    };

    const { findByTestId } = render(<CheckoutPageWrapper />, {
      wrapper: CartStorageProvider,
    });

    const add = await findByTestId("add");

    fireEvent.click(add);

    const totalQuantity = await findByTestId(
      "checkout-page-container-total-items"
    );

    expect(totalQuantity.innerHTML).toEqual("Total items: 4");
  });

  it("Should have correct order value", async () => {
    const games = await queryGames();

    const CheckoutPageWrapper = () => {
      const cart = React.useContext(CartStorage);

      return (
        <div>
          <CheckoutPage />
          {games && (
            <button
              data-testid="add"
              onClick={() => {
                cart.addItem(games[0]);
                cart.addItem(games[1]);
                cart.addItem(games[3]);
                cart.addItem(games[3]);
              }}
            >
              Add
            </button>
          )}
        </div>
      );
    };

    const { findByTestId } = render(<CheckoutPageWrapper />, {
      wrapper: CartStorageProvider,
    });

    const totalQuantity = await findByTestId(
      "checkout-page-container-order-value"
    );

    const add = await findByTestId("add");

    fireEvent.click(add);

    expect(totalQuantity.innerHTML).toEqual("Order value: 49.40 $");
  });
});
