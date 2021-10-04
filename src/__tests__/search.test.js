import React from "react";
import SeachComp, { Search } from "../components/Search";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SeachComp", () => {
  test("renders SeachComp component", async () => {
    render(<SeachComp />);

    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    //async code tests if it find signed in as
    //code that isn't there just yet
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  it("fires the onChange method with the value", async () => {
    render(<SeachComp />);

    await act(async () => {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: "JavaScript" },
      });
    });

    expect(screen.getByText(/Searches for JavaScript/i)).toBeInTheDocument();
  });

  it("fires after we bet the textbook with the role javascript", async () => {
    render(<SeachComp />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});

describe("<Search />", () => {
  test("calls the onChange callback handler", () => {
    const onChange = jest.fn();

    render(<Search value="" onChange={onChange}>Search:</Search>);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
