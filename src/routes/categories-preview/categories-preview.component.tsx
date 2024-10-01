import { CategoriesContext } from "../../components/contexts/categories.context";
import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import "./categories-preview.styles.scss";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title as keyof typeof categoriesMap];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products || []}
          />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
