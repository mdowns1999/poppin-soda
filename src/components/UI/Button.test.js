import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("CustomSodaForm Component", () => {
  test("See Button Renders properly", () => {
    //Set up
    render(
      <div>
        <Button>Click Me</Button>
      </div>
    );

    //Exercise
    //...None

    // //Assert
    let Btn = screen.getByText("Click Me", { exact: false });
    expect(Btn).toBeInTheDocument();
  });

  test("See Button's on Click Works", () => {
    //Set up
    let count = 0;
    function addOne() {
      return count++;
    }
    render(
      <div>
        <Button onClick={addOne}>Click Me</Button>
      </div>
    );

    //Exercise
    let Btn = screen.getByText("Click Me", { exact: false });
    userEvent.click(Btn);
    // //Assert
    expect(count).toBe(1);
  });
});
