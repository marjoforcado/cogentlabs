import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CommentCard } from "../ui/components";

const renderCommentCard = (isLoading = false) =>
  render(<CommentCard isLoading={isLoading}>This is a comment</CommentCard>);

describe("Comment Card", () => {
  it("should render Comment Card", () => {
    renderCommentCard();
    expect(screen.getByText("This is a comment")).toBeInTheDocument();
  });

  it("should render loading", () => {
    const { getByTestId } = renderCommentCard(true);

    expect(getByTestId("card")).toHaveClass("card--is-loading");
    expect(getByTestId("loader")).toHaveClass("card__loaders");
  });
});
