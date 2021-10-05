import React from "react";
import { Counter } from "../components/Counter";
import { render, screen, act, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

describe('initialize with default count =0 and description = "My Counter', () => {
  //beforeEach will run before each of the tests so we are not repeating ourselves
  beforeEach(() => {
    render(<Counter defaultCount={0} description="My Counter" />);
  });
  it('renders "Current Count: 0"', () => {
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  });

  it("defaults=0 and + clicked ", () => {
    fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });

  it("defaults=0 and + clicked ", () => {
    fireEvent.click(
      screen.getByRole("button", { name: "Subtract from Counter" })
    );
    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
  });

  describe('when the incrementor changes to 5 and "+" button is clicked', () => {
    beforeEach(() => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}15");
      user.click(screen.getByRole("button", { name: "Add to Counter" }));
    });

    it('renders "Current Count: 15"', () => {
      expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
    });
  });

  describe('when the incrementor changes to 25 and "-" button is clicked', () => {
    beforeEach(() => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
      user.click(screen.getByRole("button", { name: "Subtract from Counter" }));
    });

    it('renders "Current Count: -25"', () => {
      expect(screen.getByText("Current Count: -25")).toBeInTheDocument();
    });
  });
});
