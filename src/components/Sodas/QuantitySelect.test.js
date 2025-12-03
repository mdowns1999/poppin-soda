import { createRef } from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import QuantitySelect from "./QuantitySelect"

describe("QuantitySelect Component", () => {
  test("Render input box and change quantity", () => {
    // Set up
    const mockQuantityRef = createRef() // Create a mock ref
    render(
      <form>
        <QuantitySelect quantityRef={mockQuantityRef} /> 
      </form>
    )

    // Exercise
    const input = screen.getByLabelText("Quantity:")

    fireEvent.change(input, { target: { value: "1" } })

    // Assert
    expect(input.value).toBe("1")
  })
})
