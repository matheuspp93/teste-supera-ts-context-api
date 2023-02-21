import { createContext, useState, useEffect } from "react";
import { allProducts } from "../constants/endpoints";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { iProductProps, iProductProvider, iResponseProduct } from "../types";

export const AuthContext = createContext<iProductProvider>(
  {} as iProductProvider
);

const AuthProvider = ({ children }: iProductProps) => {
  const [products, setProducts] = useState<iResponseProduct[]>([]);
  const [currentSale, setCurrentSale] = useState<iResponseProduct[]>([]);
  const [filter, setFilter] = useState<iResponseProduct[]>([]);

  useEffect(() => {
    api
      .get<iResponseProduct[]>(allProducts)
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (productId: number) => {
    const verification = currentSale.some(
      (elemento) => elemento.id === productId
    );
    const product = products.filter(
      (item: iResponseProduct) => item.id === productId
    );

    if (verification === true) {
      toast.error("Item já existe no carrinho");
    } else {
      setCurrentSale([...currentSale, ...product]);
      toast.success("Produto adicionado com sucesso");
    }
  };

  const search = (value: string) => {
    const productFilterd = products.filter((element) =>
      element.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilter(productFilterd);
  };

  return (
    <AuthContext.Provider
      value={{
        products,
        setProducts,
        handleClick,
        setCurrentSale,
        currentSale,
        filter,
        setFilter,
        search,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
