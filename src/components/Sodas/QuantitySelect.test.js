import { fireEvent, render, screen } from "@testing-library/react";
import QuantitySelect from "./QuantitySelect";

describe("SizeSelect Component", () => {
  test("Render input box with no input", () => {
    //Set up
    render(
      <form>
        <QuantitySelect />
      </form>
    );

    //Exercise
    const input = screen.getByLabelText("Quantity:");

    fireEvent.change(input, { target: { value: "1" } });

    // //Assert
    expect(input.value).toBe("1");
  });
});
