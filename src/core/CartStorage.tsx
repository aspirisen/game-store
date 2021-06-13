import * as React from "react";
import * as models from "api/models";

export type Cart = Record<string, number>;

export interface CartStorageState {
  items: Cart;
  addItem: (game: models.Game) => void;
  removeItem: (game: models.Game) => void;
}

export function CartStorageProvider(props: React.PropsWithChildren<{}>) {
  const [items, setItems] = React.useState<Cart>({});

  const addItem = React.useCallback<CartStorageState["addItem"]>((game) => {
    setItems((prevItems) => {
      const newItems = { ...prevItems };

      if (!newItems[game.id]) {
        newItems[game.id] = 0;
      }

      newItems[game.id]++;

      return newItems;
    });
  }, []);

  const removeItem = React.useCallback<CartStorageState["removeItem"]>(
    (game) => {
      setItems((prevItems) => {
        const newItems = { ...prevItems };

        if (!newItems[game.id] || --newItems[game.id] <= 0) {
          delete newItems[game.id];
        }

        return newItems;
      });
    },
    []
  );

  const value = React.useMemo(
    () => ({ items, addItem, removeItem }),
    [addItem, items, removeItem]
  );

  return (
    <CartStorage.Provider value={value}>{props.children}</CartStorage.Provider>
  );
}

export const CartStorage = React.createContext(
  null as unknown as CartStorageState
);
