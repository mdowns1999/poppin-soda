import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

//Global test variables we will use over and over.
const testItem = {
  id: 1,
  name: "Test Soda",
  price: 5.0,
  amount: 1,
  size: 8,
};

describe("CartItem Component Tests", () => {
  test("Check the Cart Item Renders to the screen", () => {
    //Set up
    let testArr = [1, 2, 3];
    //console.log(cartCtx.items)
    render(
      <CartItem
        key={testItem.id}
        name={testItem.name}
        price={testItem.price}
        amount={testItem.amount}
        size={testItem.size}
        onRemove={() => {
          testArr.pop();
        }}
        onAdd={() => {
          testArr.push(4);
        }}
        onDelete={() => {}}
      />
    );

    //Exercise
    //...NONE

    //Assert
    let name = screen.getByText("Test Soda", { exact: false });
    expect(name).toBeInTheDocument();
    let price = screen.getByText("5.00", { exact: false });
    expect(price).toBeInTheDocument();
    let addBtn = screen.getByText("+", { exact: false });
    expect(addBtn).toBeInTheDocument();
    let removeBtn = screen.getByText("−", { exact: false });
    expect(removeBtn).toBeInTheDocument();
    //Tear Down
  });

  test("Check if Cart Remove Button responds to a click", () => {
    //Set up
    let testArr = [1, 2, 3];
    //console.log(cartCtx.items)
    render(
      <CartItem
        key={testItem.id}
        name={testItem.name}
        price={testItem.price}
        amount={testItem.amount}
        size={testItem.size}
        onRemove={() => {
          testArr.pop();
        }}
        onAdd={() => {
          testArr.push(4);
        }}
        onDelete={() => {}}
      />
    );

    //Exercise
    let removeBtn = screen.getByText("−", { exact: false });
    userEvent.click(removeBtn);

    // //Assert
    expect(testArr).toHaveLength(2);
    //Tear Down
  });

  test("Check if Cart Add Button responds to a click", () => {
    //Set up
    let testArr = [1, 2, 3];
    //console.log(cartCtx.items)
    render(
      <CartItem
        key={testItem.id}
        name={testItem.name}
        price={testItem.price}
        amount={testItem.amount}
        size={testItem.size}
        onRemove={() => {
          testArr.pop();
        }}
        onAdd={() => {
          testArr.push(4);
        }}
        onDelete={() => {}}
      />
    );

    //Exercise
    let addBtn = screen.getByText("+", { exact: false });
    userEvent.click(addBtn);

    // //Assert
    expect(testArr).toHaveLength(4);
    //Tear Down
  });
});
