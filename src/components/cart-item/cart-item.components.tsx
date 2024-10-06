import { CartItem as CartItemType } from "../contexts/cart.context";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {" "}
          {quantity}*${price}
        </span>

        <span>{quantity}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
