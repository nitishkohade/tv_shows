import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { EpisodeDetails } from "./episodeDetails";
import * as useFetchModule from "src/hooks/useFetch";

jest.mock("react-router", () => ({
  useParams: () => ({
    episodeId: 1,
  }),
}));

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
    showDetails: {
      id: "1",
      name: "Test Show",
      image: { medium: "test.jpg" },
      summary: "<p>Test Summary</p>",
    },
    name: "show",
    episodes: [
      {
        id: "1",
        name: "Test episode",
        image: { medium: "test.jpg" },
        rating: { average: 5 },
        summary: "<p>Test Summary</p>",
      },
    ],
  },
  episodeDetails: {
    episodeDetails: {
      id: "1",
      name: "Test episode",
      image: { medium: "test.jpg" },
      rating: { average: 5 },
      summary: "<p>Test Summary</p>",
    },
  },
};

describe("EpisodeDetails", () => {
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

    render(
      <Provider store={store}>
        <EpisodeDetails />
      </Provider>,
    );
    expect(screen.getByText(/episode/)).toBeInTheDocument();
  });
});
