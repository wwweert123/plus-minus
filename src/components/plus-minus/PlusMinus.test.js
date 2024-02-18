import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import PlusMinus from "./PlusMinus";

// test block
test("click add", async () => {
    // render the test component
    render(<PlusMinus />);

    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);

    await new Promise((r) => setTimeout(r, 2000));

    const result = await waitFor(() => screen.findByTestId("result"));

    expect(result).toHaveTextContent("Calculated Result: 0");
});

test("click subtract", async () => {
    // render the test component
    render(<PlusMinus />);

    const subtractBtn = screen.getByTestId("subtractBtn");
    fireEvent.click(subtractBtn);

    await new Promise((r) => setTimeout(r, 2000));

    const result = await waitFor(() => screen.findByTestId("result"));

    expect(result).toHaveTextContent("Calculated Result: 0");
});
