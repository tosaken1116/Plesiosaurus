import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Checkbox } from ".";

describe("ui/Checkbox", () => {
  it("title is exist", () => {
    render(<Checkbox />);

    const title = screen.getByText(/this is ui of Checkbox/);

    expect(title).toBeInTheDocument();
  });
});