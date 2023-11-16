import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";
import userEvent from "@testing-library/user-event";

//Global test variables we will use over and over.
const testItem = {
    label: "Soda",
    id: 1,
    name: "Test Soda",
    price: 5.0,
    amount: 1,
    size: 8,
  };
let value = false;
let sodaID = false;

function testSelectedValue(){
    return value = true;
}

function testSodaID(){
    return sodaID = true;
}

describe("Card Component", () => {
  test("See Radio Button Renders properly", () => {
    //Set up
    render(
      <div>
        <RadioButton
                key={testItem.id}
                id={testItem.id}
                name={testItem.name}
                value={testItem.price}
                setSelectedValue={testSelectedValue}
                label={testItem.label}
                setSodaID={testSodaID}
              />
      </div>
    );

    //Exercise
    //...None

    // //Assert
    let radio = screen.getByLabelText("Soda", {
      exact: false,
    });
    expect(radio).toBeInTheDocument();
    expect(radio.value).toBe("5");
  });

  test("See Radio Button takes function pointers correctly", () => {
    //Set up
    render(
      <div>
        <RadioButton
                key={testItem.id}
                id={testItem.id}
                name={testItem.name}
                value={testItem.price}
                setSelectedValue={testSelectedValue}
                label={testItem.name}
                setSodaID={testSodaID}
              />
      </div>
    );

    //Exercise
    let radio = screen.getByLabelText("Soda", {
        exact: false,
      })
      userEvent.click(radio);
    // //Assert;
    
    expect(value).toEqual(true);
    expect(sodaID).toEqual(true);
  });
});
