import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0.0,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  clearCart: () => {},
})

export default CartContext
