import React from "react";
import Greeting from "../components/Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello world as a text", () => {
    //arrange
    render(<Greeting />);
    //act
    //..nothing
    //assert
    const helloWorld = screen.getByText("hello world", {
      exact: false,
    });
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders good to see you if button not clicked", () => {
    //arrange
    render(<Greeting />);
    //act
    //..nothing
    //assert
    const outputElement = screen.getByText("it good", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'it is nice to see you' if button clicked", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("it is nice to see you");
    expect(outputElement).toBeInTheDocument();
  });

  test("doed not render 'it good' if the button was clicked", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText("it good");
    expect(outputElement).toBeNull();
  });
});
