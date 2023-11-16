import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";


describe("Card Component", () => {
  test("See Card Renders properly", () => {
    //Set up
    render(
      <div>
        <ProductItem>
          <p>I am a Product Item Wrapper!</p>
        </ProductItem>
      </div>
    );

    //Exercise
    //...None

    // //Assert
    let item = screen.getByText("I am a Product Item Wrapper!", { exact: false });
    expect(item).toBeInTheDocument();
  });
});
