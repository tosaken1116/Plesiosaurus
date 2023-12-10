import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Grid } from ".";

describe("ui/Grid", () => {
  it("title is exist", () => {
    render(<Grid />);

    const title = screen.getByText(/this is ui of Grid/);

    expect(title).toBeInTheDocument();
  });
});