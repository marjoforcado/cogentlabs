import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Gallery } from "../ui/components";

const images = [
  {
    id: 1,
    url: "https://fastly.4sqi.net/img/general/original/486342_KdPbGPdzbaJ1w8foSC9w01LtSi9tRdN89bc63kDyaDo.jpg",
  },
  {
    id: 2,
    url: "https://fastly.4sqi.net/img/general/original/486342_KdPbGPdzbaJ1w8foSC9w01LtSi9tRdN89bc63kDyaDo.jpg",
  },
  {
    id: 3,
    url: "https://fastly.4sqi.net/img/general/original/486342_KdPbGPdzbaJ1w8foSC9w01LtSi9tRdN89bc63kDyaDo.jpg",
  },
  {
    id: 4,
    url: "https://fastly.4sqi.net/img/general/original/486342_KdPbGPdzbaJ1w8foSC9w01LtSi9tRdN89bc63kDyaDo.jpg",
  },
];

const renderGallery = (isLoading = false) =>
  render(<Gallery images={images} isLoading={isLoading} />);

describe("Gallery", () => {
  it("should render loading state", () => {
    const { getByTestId } = renderGallery(true);
    expect(getByTestId("gallery")).toHaveClass("gallery--is-loading");
  });
});
