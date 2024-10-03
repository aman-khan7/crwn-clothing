import { useContext } from "react";
import { ReactComponent as ShopingIcon } from "../../assets/home/crown.svg";
import { CartContext } from "../contexts/cart.context";

import {
  CartIconContainer,
  ShopingIcon,
  ItemCounter,
} from "./card-icon.styles";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
