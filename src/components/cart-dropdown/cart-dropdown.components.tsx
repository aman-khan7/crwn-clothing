import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Button from "../button/button.components";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItems,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.components";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

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
