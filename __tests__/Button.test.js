import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "../ui/components";

const renderButton = (isDiabled = false) =>
  render(<Button disabled={isDiabled}>Click me</Button>);

describe("Button", () => {
  it("should render correct text", () => {
    const { getByRole } = renderButton();
    expect(getByRole("button")).toHaveTextContent("Click me");
  });

  it("should be disabled", () => {
    const { getByRole } = renderButton(true);
    expect(getByRole("button")).toHaveProperty("disabled", true);
  });
});
