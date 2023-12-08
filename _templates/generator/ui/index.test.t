---
to: src/components/<%= name %>/index.test.tsx
---
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

import { <%= name %> } from ".";

describe("ui/<%= name %>", () => {
  test("title is exist", () => {
    render(<<%= name %> />);

    const title = screen.getByText(/this is ui of <%= name %>/);

    expect(title).toBeInTheDocument();
  });
});