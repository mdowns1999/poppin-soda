import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";

//Global test variables we will use over and over.
const testItem = {
  label: "Soda",
  id: 1,
  name: "Test Soda",
  index: 1,
};

let change = 0;

function handleOnChangeTest(index) {
  change = index + 1;
}

describe("Card Component", () => {
  test("See the Check Box Renders properly", () => {
    //Set up
    render(
      <div>
        <CheckBox
          id={testItem.id}
          name={testItem.name}
          index={testItem.index}
          handleOnChange={handleOnChangeTest}
        />
      </div>
    );

    //Exercise
    //...None

    // //Assert
    let check = screen.getByLabelText("Test Soda", {
      exact: false,
    });
    expect(check).toBeInTheDocument();
    expect(check.value).toBe("Test Soda");
  });

  test("See Check Box takes function pointers correctly", () => {
    //Set up
    render(
      <div>
        <CheckBox
          id={testItem.id}
          name={testItem.name}
          index={testItem.index}
          handleOnChange={handleOnChangeTest}
        />
      </div>
    );

    //Exercise
    let check = screen.getByLabelText("Test Soda", {
      exact: false,
    });
    userEvent.click(check);
    //Assert;

    expect(change).toEqual(2);
  });
});
