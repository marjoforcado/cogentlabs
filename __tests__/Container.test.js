import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Container } from "../ui/components";

const renderContainer = (centerContent = false) =>
  render(
    <Container centerContent={centerContent}>This is a container</Container>
  );

describe("Container", () => {
  it("shound render correct content", () => {
    const { getByTestId } = renderContainer();
    expect(getByTestId("container")).toHaveTextContent("This is a container");
  });

  it("should center content", () => {
    const { getByTestId } = renderContainer(true);
    expect(getByTestId("container")).toHaveClass("app-container--is-center");
  });
});
