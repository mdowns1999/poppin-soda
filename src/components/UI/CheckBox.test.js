import React from 'react';
import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

//Global test variables we will use over and over.
const testItem = {
  label: "Soda",
  id: '1',
  name: "Test Soda",
  index: 1,
};


describe("Card Component", () => {
  test("See the Check Box Renders properly", () => {
    //Set up
    render(
      <div>
        <CheckBox
          id={testItem.id}
          name={testItem.name}
          index={testItem.index}
          handleOnChange={jest.fn}
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

});
