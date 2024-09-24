import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.components";
import { Product } from "../contexts/products.context";
import "./product-card.styles.scss";

const ProductCard = ({ product }: { product: Product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
