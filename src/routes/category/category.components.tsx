import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../components/contexts/categories.context";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.components";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(
    categoriesMap[category as keyof typeof categoriesMap]
  );
  console.log("in category");

  useEffect(() => {
    setProducts(categoriesMap[category as keyof typeof categoriesMap]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <div className="category-title">{category?.toUpperCase()}</div>
      <div className="category-container">
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
