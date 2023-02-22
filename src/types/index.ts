import { ReactNode } from "react";

export interface iProductProps {
  children: ReactNode;
}

export interface iResponseProduct {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}
export interface iProductProvider {
  products: iResponseProduct[];
  currentSale: iResponseProduct[];
  filter: iResponseProduct[];
  handleClick: (productId: number) => void;
  search: (value: string) => void;
  setProducts: React.Dispatch<React.SetStateAction<iResponseProduct[]>>;
  setCurrentSale: React.Dispatch<React.SetStateAction<iResponseProduct[]>>;
  setFilter: React.Dispatch<React.SetStateAction<iResponseProduct[]>>;
}
