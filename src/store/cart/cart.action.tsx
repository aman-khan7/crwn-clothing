import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { CartItem, Product } from "./cart.reducer";
import { CART_ACTION_TYPES } from "./cart.type";

const addCardItem = (cartItems: CartItem[], productToAdd: Product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], CartItemToClear: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== CartItemToClear.id);
// type CartState = {
//   setIsCartOpen: (isCartOpen: boolean) => void;
//   isCartOpen: boolean;
//   cartItems: CartItem[];
//   addItemToCart: (productToAdd: Product) => void;
//   removeItemToCart: (cartItemToRemove: CartItem) => void;
//   clearItemFromCart: (cartItemToClear: CartItem) => void;
//   cartCount: number;
//   cartTotal: number;
// };

export const setIsCartOpen = (isCartOpen: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

export const addItemToCart = (cartItems: CartItem[], productToAdd: Product) => {
  const newCartItems = addCardItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
