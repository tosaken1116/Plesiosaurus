import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Switch } from ".";

describe("ui/Switch", () => {
  it("title is exist", () => {
    render(<Switch />);

    const title = screen.getByText(/this is ui of Switch/);

    expect(title).toBeInTheDocument();
  });
});