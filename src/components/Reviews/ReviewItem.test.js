import { render, screen } from "@testing-library/react";
import ReviewItem from "./ReviewItem";
import { BrowserRouter } from "react-router-dom";

//Global test variables we will use over and over.
const testReview = {
  id: 1,
  name: "John Doe",
  rating: 5.00,
  message: "A wonderful soda.",
  date: "1/1/23"
};

describe("ReviewItem Component Tests", () => {
  test("Check the Review Item Renders to the screen", () => {
    //Set up
    render(
      <BrowserRouter>
        <ReviewItem
        key={testReview._id}
        name={testReview.name}
        rating={testReview.rating}
        message={testReview.message}
        date={testReview.date}
      />
      </BrowserRouter>
    );

    //Exercise
    //...NONE

    //Assert
    let name = screen.getByText("John Doe", { exact: false });
    expect(name).toBeInTheDocument();
    let message = screen.getByText("A wonderful soda", { exact: false });
    expect(message).toBeInTheDocument();
    let date = screen.getByText("1/1/23", { exact: false });
    expect(date).toBeInTheDocument();
    //Tear Down
  });
});
