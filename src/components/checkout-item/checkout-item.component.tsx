import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import { CartItem as CartItemType } from "../contexts/cart.context";

const CheckoutItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <span className="price">{price}</span>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
