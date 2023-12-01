/** @format */

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Button } from ".";

describe("ui/Button", () => {
    it("If Primary Button is correctly rendered.", () => {
        render(<Button state="primary">Label</Button>);
        const button = screen.getByRole("button");
        const title = button.textContent;
        expect(title).toBe("Label");
    });
});
