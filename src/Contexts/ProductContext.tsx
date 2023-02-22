import { createContext, useState, useEffect } from "react";
import { allProducts } from "../constants/endpoints";
import { api } from "../services/api";
import { toast } from "react-toastify";
import {
  iProductProps,
  iProductProvider,
  iResponseCart,
  iResponseProduct,
} from "../types";
import products from "../database/products.json";

export const AuthContext = createContext<iProductProvider>(
  {} as iProductProvider
);

const AuthProvider = ({ children }: iProductProps) => {
  const [currentSale, setCurrentSale] = useState<iResponseCart[]>([]);
  const [filter, setFilter] = useState<iResponseProduct[]>([]);

  const handleClick = (productId: number) => {
    const product = currentSale.find((elemento) => elemento.id === productId);

    if (product) {
      const newProducts = currentSale.map((elemento) => {
        if (elemento.id === productId) {
          elemento.amount += 1;
        }
        return elemento;
      });
      setCurrentSale(newProducts);
      toast.success("Produto adicionado com sucesso");
    } else {
      const product = products.filter((item) => item.id === productId);
      console.log(products);
      const currentProduct = { ...product[0], amount: 1 };
      setCurrentSale([...currentSale, currentProduct]);
      toast.success("Produto adicionado com sucesso");
    }
  };

  const quantity = (productId: number, input: number) => {
    const product = currentSale.map((elemento) => {
      if (elemento.id === productId) {
        elemento.amount = input;
      }
      return elemento;
    });
    setCurrentSale(product);
  };

  const searchGame = (value: string) => {
    const productFilterd = products.filter((element) =>
      element.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilter(productFilterd);
  };

  return (
    <AuthContext.Provider
      value={{
        handleClick,
        quantity,
        setCurrentSale,
        currentSale,
        filter,
        setFilter,
        searchGame,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
