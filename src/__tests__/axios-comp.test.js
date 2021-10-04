import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AxiosComp from "../components/AxiosComp";

//overwrites axios
jest.mock("axios");

describe("<AxiosComp/>", () => {
  test("fetches stories from an API and displays them ", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          hits: stories,
        },
      })
    );

    render(<AxiosComp />);

    await act(async () => {
      userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fetches stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<AxiosComp />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });

  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<AxiosComp />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    await act(() => promise);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
