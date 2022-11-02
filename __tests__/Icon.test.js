import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Icon } from "../ui/components";

const renderIcon = (icon) => render(<Icon icon={icon} />);

describe("Icon", () => {
  it("should render correct icon", () => {
    const { getByTestId } = renderIcon("magnify");
    expect(getByTestId("magnify")).toBeInTheDocument();
  });
});
