import * as React from "react";
import { CartStorage } from "./CartStorage";

export function usePrice() {
  const cart = React.useContext(CartStorage);

  const format = React.useCallback(
    (price: number) => {
      if (!cart.currency) {
        return price;
      }

      const currencyRate = cart.currency.rate;
      const finalPrice = price * currencyRate;
      return `${finalPrice.toFixed(2)} ${cart.currency.symbol}`;
    },
    [cart]
  );

  return { format };
}
