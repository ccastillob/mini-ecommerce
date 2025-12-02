import { useReducer } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types";
import { CartContext } from "./CartContext";
import type { CartContextType } from "./CartContext";
import { cartReducer, initialCartState } from "./cartReducer";
import { CartActionType } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product: Product) => {
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (productId: number) => {
    dispatch({
      type: CartActionType.REMOVE_FROM_CART,
      payload: productId,
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({
      type: CartActionType.UPDATE_QUANTITY,
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CartActionType.CLEAR_CART,
    });
  };

  const value: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
