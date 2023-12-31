import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "src/store/store";
import { ShowProps } from "src/models/show";
import { Shows } from "./shows";

jest.mock("src/hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

jest.mock("src/components/header", () => ({
  Header: () => <div>Header</div>,
}));

jest.mock("./components", () => ({
  ShowCard: ({ show }: { show: ShowProps }) => <div>{show.name}</div>,
}));

describe("Shows", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading message when data is being fetched", () => {
    require("src/hooks/useFetch").useFetch.mockReturnValue({
      data: null,
      loading: true,
    });
    render(
      <Provider store={store}>
        <Shows />
      </Provider>,
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders shows when data is fetched", () => {
    const mockShows = [
      { id: "1", name: "Show 1" },
      { id: "2", name: "Show 2" },
    ];
    require("src/hooks/useFetch").useFetch.mockReturnValue({
      data: mockShows,
      loading: false,
    });
    render(
      <Provider store={store}>
        <Shows />
      </Provider>,
    );
    expect(screen.getByText("Show 1")).toBeInTheDocument();
    expect(screen.getByText("Show 2")).toBeInTheDocument();
  });
});
