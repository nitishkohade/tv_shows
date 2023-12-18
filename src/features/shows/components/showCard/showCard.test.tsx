import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowProps } from "src/models/show";
import { ShowCard } from "./showCard";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("ShowCard", () => {
  const mockShow: ShowProps = {
    name: "Show",
    id: "1",
    image: {
      medium: "",
      original: "",
    },
    rating: {
      average: 1,
    },
    summary: "",
  };

  it("renders show details correctly", () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText("Show")).toBeInTheDocument();
  });
});
