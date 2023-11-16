import { render, screen } from "@testing-library/react";
import SodaItem from "./SodaItem";
import { BrowserRouter } from "react-router-dom";

//Global test variables we will use over and over.
const testItem = {
  id: 1,
  name: "Test Soda",
  price: 5.00,
  description: "A wonderful soda.",
};

describe("SodaItem Component Tests", () => {
  test("Check the Soda Item Renders to the screen", () => {
    //Set up
    render(
      <BrowserRouter>
        <SodaItem
          id={testItem.id}
          name={testItem.name}
          description={testItem.description}
        />
      </BrowserRouter>
    );

    //Exercise
    //...NONE

    //Assert
    let name = screen.getByText("Test Soda", { exact: false });
    expect(name).toBeInTheDocument();
    let description = screen.getByText("A wonderful soda", { exact: false });
    expect(description).toBeInTheDocument();
    //Tear Down
  });
});
