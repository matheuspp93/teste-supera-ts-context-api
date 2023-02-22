import { ReactNode } from "react";

export interface iProductContext {
  children: ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}
export interface iCartProduct {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  amount: number;
}
export interface iProductProvider {
  currentSale: iCartProduct[];
  filter: iProduct[];
  addProduct: (productId: number) => void;
  searchGame: (value: string) => void;
  setCurrentSale: React.Dispatch<React.SetStateAction<iCartProduct[]>>;
  setFilter: React.Dispatch<React.SetStateAction<iProduct[]>>;
}
