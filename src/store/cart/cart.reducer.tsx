import { CART_ACTION_TYPES } from "./cart.type";
export interface CategoriesMapType {
  hats?: Product[];
  jackets?: Product[];
  mens?: Product[];
  sneakers?: Product[];
  womens?: Product[];
}
export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}
export type CartItem = Product & { quantity: number };

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: { type?: string; payload?: any } = {}
): CartState => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
