import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Label } from "../ui/components";

const renderLabel = () => render(<Label>This is a label</Label>);

describe("Icon", () => {
  it("should render correct content", () => {
    const { getByTestId } = renderLabel();
    expect(getByTestId("label")).toHaveTextContent("This is a label");
  });
});
