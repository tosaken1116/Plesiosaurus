import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { RadioButton } from ".";

describe("ui/RadioButton", () => {
  it("title is exist", () => {
    render(<RadioButton />);

    const title = screen.getByText(/this is ui of RadioButton/);

    expect(title).toBeInTheDocument();
  });
});