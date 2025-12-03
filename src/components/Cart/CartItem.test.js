import React, { useState } from "react"
import { render, screen } from "@testing-library/react"
import CartItem from "./CartItem"

// Global test variables we will use over and over.
const testItem = {
  id: 1,
  name: "Test Soda",
  price: 5.0,
  amount: 1,
  size: 8,
}

describe("CartItem Component Tests", () => {
  const MockCart = () => {
    // State to simulate the cart items
    const [cartItems, setCartItems] = useState([testItem])

    const handleRemove = (id) => {
      setCartItems((prevItems) =>
        prevItems.map(item =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        ).filter(item => item.amount > 0) // Remove item if amount is 0
      )
    }

    const handleAdd = (id) => {
      setCartItems((prevItems) =>
        prevItems.map(item =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      )
    }

    return (
      <CartItem
        key={testItem.id}
        name={testItem.name}
        price={testItem.price}
        amount={cartItems[0].amount} // Use the amount from the state
        size={testItem.size}
        onRemove={() => handleRemove(testItem.id)}
        onAdd={() => handleAdd(testItem.id)}
        onDelete={() => {}}
      />
    )
  }

  test("Check the Cart Item Renders to the screen", () => {
    render(<MockCart />)

    // Assert that the CartItem is rendered with the correct details
    expect(screen.getByText(/Test Soda/)).toBeInTheDocument()
    expect(screen.getByText(/5.00/)).toBeInTheDocument()
    expect(screen.getByText(/1/)).toBeInTheDocument() // Check the initial amount
    expect(screen.getByTestId("remove-button")).toBeInTheDocument()
    expect(screen.getByTestId("add-button")).toBeInTheDocument()
  })
})
