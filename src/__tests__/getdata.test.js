import React from "react";
import GetData from "../components/GetData";

import { render, screen } from "@testing-library/react";

describe("GetData", () => {
  test("renders posts if request succeeds ", async () => {
    //mock function to overwrite actual functions
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First post",
        },
      ],
    });
    render(<GetData />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
