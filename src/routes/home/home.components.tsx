import { Outlet } from "react-router-dom";
import Directory, {
  categories,
} from "../../components/directory/directory.component";
import "./components.cateories.style.scss";
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export type Category = (typeof categories)[number];
export default Home;
