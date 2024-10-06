import ProductCard from "../product-card/product-card.components";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }: any) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_: any, idx: any) => idx < 4)
          .map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
