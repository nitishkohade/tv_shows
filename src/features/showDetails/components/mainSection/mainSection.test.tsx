import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MainSection } from "./mainSection";
import { ShowIdProps } from "../../models";
import * as useFetchModule from "src/hooks/useFetch";

const mockStore = configureMockStore();
const initialState = {
  shows: {
    shows: [
      {
        id: "1",
        name: "Test Show",
        image: { medium: "test.jpg" },
        summary: "<p>Test Summary</p>",
      },
    ],
  },
  showDetails: {
    showDetails: null,
  },
};

describe("MainSection", () => {
  beforeEach(() => {
    jest
      .spyOn(useFetchModule, "useFetch")
      .mockReturnValue({ data: null } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders without crashing", () => {
    const store: any = mockStore(initialState);
    const showIdProps: ShowIdProps = { showId: "1" };

    render(
      <Provider store={store}>
        <MainSection {...showIdProps} />
      </Provider>,
    );
    expect(screen.getByText(/Test Summary/)).toBeInTheDocument();
  });
});
