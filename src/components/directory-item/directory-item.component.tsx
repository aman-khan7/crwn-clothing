import { Category } from "../../routes/home/home.components";
import "./directory-item.style.scss";

const DirectoryItem = ({ category }: Readonly<{ category: Category }>) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
