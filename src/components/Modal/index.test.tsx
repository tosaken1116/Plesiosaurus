import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Modal } from ".";

describe("ui/Modal", () => {
  it("title is exist", () => {
    render(<Modal />);

    const title = screen.getByText(/this is ui of Modal/);

    expect(title).toBeInTheDocument();
  });
});