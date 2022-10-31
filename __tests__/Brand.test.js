import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Brand } from "../ui/components";

describe("Brand", () => {
  it("renders brand component", () => {
    render(<Brand />);
    expect(screen.getByText("CogentLabs")).toBeInTheDocument();
  });
});
