import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Divider } from ".";

describe("ui/Divider", () => {
  it("title is exist", () => {
    render(<Divider />);

    const title = screen.getByText(/this is ui of Divider/);

    expect(title).toBeInTheDocument();
  });
});