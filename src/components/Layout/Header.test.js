import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"


describe("General Layout Components Tests", () => {
  test("Check if the header image has the right alt tag", () => {
    //Set up
    // Create a mock function for the onClick prop
    const mockOnClick = jest.fn()
    render(
       <BrowserRouter><Header onShowCart={mockOnClick}/></BrowserRouter>
    )

    //Exercise
    //...NONE

    //Assert
    let logo = screen.getByAltText("Poppin Soda Shop Logo")
   
    expect(logo.alt).toBe("Poppin Soda Shop Logo")
    //Tear Down
  })

  test("Header (with Navigation) renders correctly", () => {
    //Set up
    // Create a mock function for the onClick prop
    const mockOnClick = jest.fn()
    //console.log(cartCtx.items)
    render(
        <BrowserRouter><Header onShowCart={mockOnClick}/></BrowserRouter>
     )

    //Exercise
  
    //Assert
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '/products')
    expect(screen.getByRole('link', { name: 'Reviews' })).toHaveAttribute('href', '/reviews')
    //Tear Down
  })

  test("Header displays different when on a new page", () => {
    //Set up
    const OLD_LOCATION = window.location
    // Create a mock function for the onClick prop
    const mockOnClick = jest.fn()
  Object.defineProperty(window, 'location', {
    value: new URL(OLD_LOCATION + "reviews/add"),
    writable: true,
  })

    //console.log(cartCtx.items)
    render(
        <BrowserRouter><Header onShowCart={mockOnClick}/></BrowserRouter>
     )

    //Exercise
   
    //Assert
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '/products')
    expect(screen.getByRole('link', { name: 'Reviews' })).toHaveAttribute('href', '/reviews')
    expect(screen.getByRole("button", {name: "Cart 0"})).toBeInTheDocument()
    //Tear Down
    Object.defineProperty(window, 'location', {
        value: OLD_LOCATION,
        writable: true,
      })
  })
})
