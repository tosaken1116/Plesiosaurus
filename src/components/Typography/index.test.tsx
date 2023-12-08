import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Typography } from ".";

describe("ui/Typography", () => {
  it("title is exist", () => {
    render(<Typography />);

    const title = screen.getByText(/this is ui of Typography/);

    expect(title).toBeInTheDocument();
  });
});