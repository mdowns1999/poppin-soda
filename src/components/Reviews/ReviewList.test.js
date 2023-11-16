import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReviewList from "./ReviewList";

describe("ReviewList Component Tests", () => {
  test("Check the Review List Renders to the screen", () => {
    //Set up
    let reviews = [{
        id: 1,
        name: "John Doe",
        rating: 5.00,
        message: "A wonderful soda.",
        date: "1/1/23"
      },{
        id: 2,
        name: "Jain Doe",
        rating: 5.00,
        message: "A terrible soda.",
        date: "12/12/23"
      }]
    render(
      <BrowserRouter>
        <ReviewList reviews={reviews}/> 
      </BrowserRouter>
    );

    //Exercise
    //...NONE

    //Assert
    let nameOne = screen.getByText("John Doe", { exact: false });
    expect(nameOne).toBeInTheDocument();
    let messageOne = screen.getByText("A wonderful soda", { exact: false });
    expect(messageOne).toBeInTheDocument();
    let dateOne = screen.getByText("1/1/23", { exact: false });
    expect(dateOne).toBeInTheDocument();
    let nameTwo = screen.getByText("Jain Doe", { exact: false });
    expect(nameTwo).toBeInTheDocument();
    let messageTwo = screen.getByText("A terrible soda", { exact: false });
    expect(messageTwo).toBeInTheDocument();
    let dateTwo = screen.getByText("12/12/23", { exact: false });
    expect(dateTwo).toBeInTheDocument();
    //Tear Down
  });
});
