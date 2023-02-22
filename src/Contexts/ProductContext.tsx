import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  iProductContext,
  iProductProvider,
  iProduct,
  iCartProduct,
} from "../types";
import data from "../database/products.json";

export const AuthContext = createContext<iProductProvider>(
  {} as iProductProvider
);

const AuthProvider = ({ children }: iProductContext) => {
  const [products, setProducts] = useState<iProduct[]>([]);
  const [currentSale, setCurrentSale] = useState<iCartProduct[]>([]);
  // const [filter, setFilter] = useState<iProduct[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const addProduct = (productId: number) => {
    const product = currentSale.find((elemento) => elemento.id === productId);

    if (product) {
      const newProducts = currentSale.map((elemento) => {
        if (elemento.id === productId) {
          elemento.amount += 1;
        }
        return elemento;
      });
      setCurrentSale(newProducts);
      toast.dismiss();
      toast.success("Produto adicionado com sucesso");
    } else {
      const product = products.filter((item) => item.id === productId);
      const currentProduct = { ...product[0], amount: 1 };
      setCurrentSale([...currentSale, currentProduct]);
      toast.dismiss();
      toast.success("Produto adicionado com sucesso");
    }
  };

  const searchGame = (value: string) => {
    if (!value) {
      setProducts(data);
      return;
    }
    const productFilterd = products.filter((element) =>
      element.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(productFilterd);
  };

  return (
    <AuthContext.Provider
      value={{
        addProduct,
        setCurrentSale,
        currentSale,
        searchGame,
        products,
        setProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
