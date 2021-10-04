import React from "react";
import GetData from "../components/GetData";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("GetData", () => {
  test("renders posts if request succeeds ", async () => {
    render(<GetData />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
