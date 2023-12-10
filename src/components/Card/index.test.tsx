import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Card } from ".";

describe("ui/Card", () => {
  it("title is exist", () => {
    render(<Card />);

    const title = screen.getByText(/this is ui of Card/);

    expect(title).toBeInTheDocument();
  });
});