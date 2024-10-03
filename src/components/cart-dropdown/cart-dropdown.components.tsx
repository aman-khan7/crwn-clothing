import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.components";

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItems,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.components";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessageContainer> your cart is empty</EmptyMessageContainer>
        )}
      </CartItems>

      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
