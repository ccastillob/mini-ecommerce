import type { CartState } from "../types";
import { initialCartState } from "./cartReducer";

// Esto podria ser una variable de entorno
const CART_STORAGE_KEY = "mini-ecommerce-cart";

export const saveCartToStorage = (state: CartState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CART_STORAGE_KEY, serializedState);
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

export const loadCartFromStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem(CART_STORAGE_KEY);

    if (serializedState === null) {
      return initialCartState;
    }

    return JSON.parse(serializedState) as CartState;
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return initialCartState;
  }
};

export const clearCartFromStorage = (): void => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing cart from localStorage:", error);
  }
};
