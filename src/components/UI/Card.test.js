import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("See Card Renders properly", () => {
    //Set up
    render(
      <div>
        <Card>
          <p>I am a Card!</p>
        </Card>
      </div>
    );

    //Exercise
    //...None

    // //Assert
    let card = screen.getByText("I am a Card!", { exact: false });
    expect(card).toBeInTheDocument();
  });
});
