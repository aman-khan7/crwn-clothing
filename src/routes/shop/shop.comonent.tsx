import { UserContext } from "../../components/contexts/user.context";
import { ProductsContext } from "../../components/contexts/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.components";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
