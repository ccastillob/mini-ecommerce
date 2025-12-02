import type { CartState, CartAction, CartItem } from "../types";
import { CartActionType } from "../types";

const calculateTotals = (items: CartItem[]): Pick<CartState, "totalItems" | "totalPrice"> => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return { totalItems, totalPrice };
};

export const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      let updatedItems: CartItem[];

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }

      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case CartActionType.REMOVE_FROM_CART: {
      const productId = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== productId);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case CartActionType.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        const updatedItems = state.items.filter((item) => item.id !== id);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);

        return {
          items: updatedItems,
          totalItems,
          totalPrice,
        };
      }

      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case CartActionType.CLEAR_CART: {
      return initialCartState;
    }

    default:
      return state;
  }
};
