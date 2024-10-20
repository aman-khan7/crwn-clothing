import { createSelector } from "reselect";
import { RootState } from "../store";
const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartSlice) =>
    cartSlice.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartSlice) =>
    cartSlice.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
