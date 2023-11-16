import { fireEvent, render, screen } from "@testing-library/react";
import CustomSodaForm from "./CustomSodaForm";
import { BrowserRouter } from "react-router-dom";

describe("CustomSodaForm Component", () => {
  test("See if Radio Buttons for Syrups and Sodas Render", () => {
    //Set up
    let syrupList = [{ id: 1, name: "Syrup 1", price: 1.0 }];
    let sodaList = [{ id: 10, name: "Soda 1", price: 10.0 }];
    render(
      <BrowserRouter>
        <CustomSodaForm syrupList={syrupList} sodaList={sodaList} />
      </BrowserRouter>
    );

    //Exercise
    //...None

    // //Assert
    let soda = screen.getByText("Soda 1", { exact: false });
    expect(soda).toBeInTheDocument();
    let syrup = screen.getByText("Syrup 1", { exact: false });
    expect(syrup).toBeInTheDocument();
  });

  test("See if The Custom Form Quanitiy works", () => {
    //Set up
    let syrupList = [{ id: 1, name: "Syrup 1", price: 1.0 }];
    let sodaList = [{ id: 10, name: "Soda 1", price: 10.0 }];
    render(
      <BrowserRouter>
        <CustomSodaForm syrupList={syrupList} sodaList={sodaList} />
      </BrowserRouter>
    );

    //Exercise
    const input = screen.getByLabelText("Quantity:");
    fireEvent.change(input, { target: { value: "1" } });

    // //Assert
    expect(input.value).toBe("1");
  });
});
