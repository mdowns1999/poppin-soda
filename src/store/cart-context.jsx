import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0.0,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  clearCart: () => {},
});

export default CartContext;
