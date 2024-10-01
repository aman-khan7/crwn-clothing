import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export interface CategoriesMapType {
  hats?: Product[];
  jackets?: Product[];
  mens?: Product[];
  sneakers?: Product[];
  womens?: Product[];
}
export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export const CategoriesContext = createContext<{
  categoriesMap: CategoriesMapType;
}>({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }: PropsWithChildren) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
