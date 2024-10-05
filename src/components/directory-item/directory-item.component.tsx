import { Category } from "../../routes/home/home.components";
import {
  BackGroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }: Readonly<{ category: Category }>) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackGroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
