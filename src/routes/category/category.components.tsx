import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.components";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(
    categoriesMap[category as keyof typeof categoriesMap]
  );

  useEffect(() => {
    setProducts(categoriesMap[category as keyof typeof categoriesMap]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <div className="category-title">{category?.toUpperCase()}</div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
