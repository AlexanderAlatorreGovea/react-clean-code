import React from "react";
import { Counter } from "../components/Counter";
import { render, screen, act, fireEvent } from "@testing-library/react";

it('renders "Current Count: 0"', () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
});

it("defaults=0 and + clicked ", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
  expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
});

it("defaults=0 and + clicked ", () => {
  render(<Counter defaultCount={0} description="My Counter" />);
  fireEvent.click(screen.getByRole("button", { name: "Subtract from Counter" }));
  expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
});
