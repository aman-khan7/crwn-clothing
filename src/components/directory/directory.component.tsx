import { Category } from "../../routes/home/home.components";
import CategoryItem from "../category-item/category";

const Directory = ({ categories }: Readonly<{ categories: Category[] }>) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
