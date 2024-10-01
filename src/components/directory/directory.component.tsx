import { Category } from "../../routes/home/home.components";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }: Readonly<{ categories: Category[] }>) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
