import React from "react";

export type CartContextObj = {
  items: any[];
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
};

const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
