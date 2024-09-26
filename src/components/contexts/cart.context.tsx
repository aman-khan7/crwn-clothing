import { PropsWithChildren, createContext, useEffect, useState } from "react";
import CartItem from "../cart-item/cart-item.components";
import { Product } from "./products.context";

export type CartItem = Product & { quantity: number };

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

export const CartContext = createContext<{
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemToCart: (cartItemToRemove: CartItem) => void;
  clearItemFromCart: (cartItemToClear: CartItem) => void;
  cartCount: number;
  cartTotal: number;
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartItems: [],

  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCardItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove: CartItem) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: CartItem) =>
    setCartItems(clearCartItem(cartItems, cartItemToClear));

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
