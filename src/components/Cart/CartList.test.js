import { render, screen } from "@testing-library/react";
import CartList from "./CartList";

describe("CartList Component Tests", () => {
  test("Check Cart Renders to the screen", () => {
    //Set up
    let DUMMYCONTEXT = {
        items: [
          {
            id: 1,
            name: "Test Soda",
            price: 5.0,
            amount: 1,
            size: 8,
          },
          {
            id: 2,
            name: "Soda 2",
            price: 6.0,
            amount: 1,
            size: 8,
          },
        ],
        totalAmount: 10.0,
        addItem: () => {},
        removeItem: () => {},
        deleteItem: () => {},
        clearCart: () => {},
      };
    render(<CartList cartCtx={DUMMYCONTEXT} />);

    //Exercise
    //...NONE

    //Assert
    let itemOneName = screen.getByText("Test Soda", { exact: false });
    expect(itemOneName).toBeInTheDocument();
    let itemOnePrice = screen.getByText("5.00", { exact: false });
    expect(itemOnePrice).toBeInTheDocument();
    let itemTwoName = screen.getByText("Soda 2", { exact: false });
    expect(itemTwoName).toBeInTheDocument();
    let itemTwoPrice = screen.getByText("5.00", { exact: false });
    expect(itemTwoPrice).toBeInTheDocument();
    //Tear Down
  });

  test("Check if Cart tells user if no products aare present", () => {
    //Set up
    let DUMMYCONTEXT = {
        items: [],
        totalAmount: 0.0,
        addItem: () => {},
        removeItem: () => {},
        deleteItem: () => {},
        clearCart: () => {},
      };
    render(<CartList cartCtx={DUMMYCONTEXT} />);

    //Exercise
    //...NONE

    //Assert
    let message = screen.getByText("You have no Items in the Cart", { exact: false });
    expect(message).toBeInTheDocument();
    //Tear Down
  });
});
