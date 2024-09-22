import { PropsWithChildren, createContext, useState } from "react";
import PRODUCTS from "../../shop-data.json";

export type Product = (typeof PRODUCTS)[number];
export const ProductsContext = createContext<{ products: Product[] }>({
  products: [],
});

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
