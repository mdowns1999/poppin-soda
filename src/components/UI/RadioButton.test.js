import React from 'react';
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

// Global test variables we will use over and over.
const testItem = {
  label: "Soda",
  id: '1',
  name: "Test Soda",
  price: '5.0',
  amount: 1,
  size: 8,
};

describe("Card Component", () => {
  test("See Radio Button Renders properly", () => {
    // Set up
    render(
      <div>
        <RadioButton
          key={testItem.id}
          id={testItem.id}
          name={testItem.name}
          value={testItem.price}
          setSelectedValue={() => {}} // Mock function
          label={testItem.label}
          setSodaID={() => {}} // Mock function
        />
      </div>
    );

    // Exercise
    // ...None

    // Assert
    const radio = screen.getByLabelText("Soda", { exact: false });
    expect(radio).toBeInTheDocument();
    expect(radio.value).toBe("5.0");
  });

});
