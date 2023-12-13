import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Badge } from ".";

describe("ui/Badge", () => {
  it("title is exist", () => {
    render(<Badge />);

    const title = screen.getByText(/this is ui of Badge/);

    expect(title).toBeInTheDocument();
  });
});