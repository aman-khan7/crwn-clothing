import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import "./components.cateories.style.scss";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

export default Home;
export type Category = (typeof categories)[number];
