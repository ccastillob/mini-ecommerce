export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export const CartActionType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
} as const;

export interface AddToCartAction {
  type: typeof CartActionType.ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: typeof CartActionType.REMOVE_FROM_CART;
  payload: number;
}

export interface UpdateQuantityAction {
  type: typeof CartActionType.UPDATE_QUANTITY;
  payload: {
    id: number;
    quantity: number;
  };
}

export interface ClearCartAction {
  type: typeof CartActionType.CLEAR_CART;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateQuantityAction
  | ClearCartAction;
