import { PropsWithChildren, createContext, useReducer } from "react";
import { Product } from "./categories.context";
import { createAction } from "../utils/firebase/reducer/reducer.utils";
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
type CartState = {
  setIsCartOpen: (isCartOpen: boolean) => void;
  isCartOpen: boolean;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemToCart: (cartItemToRemove: CartItem) => void;
  clearItemFromCart: (cartItemToClear: CartItem) => void;
  cartCount: number;
  cartTotal: number;
};

export const CartContext = createContext<CartState>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});
const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (
  state: CartState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  const updateCartItemsReducer = (newCartItems: CartItem[]) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  //   );
  //

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (bool: boolean) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const removeItemToCart = (cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

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
