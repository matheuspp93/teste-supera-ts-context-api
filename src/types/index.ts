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
export interface iResponseCart {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  amount: number;
}
export interface iProductProvider {
  currentSale: iResponseCart[];
  filter: iResponseProduct[];
  quantity: (productId: number, input: number) => void;
  handleClick: (productId: number) => void;
  searchGame: (value: string) => void;
  setCurrentSale: React.Dispatch<React.SetStateAction<iResponseCart[]>>;
  setFilter: React.Dispatch<React.SetStateAction<iResponseProduct[]>>;
}
