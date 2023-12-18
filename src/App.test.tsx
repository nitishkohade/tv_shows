import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import showsReducer from "src/features/shows/showsSlice";
import showDetailsReducer from "src/features/showDetails/showDetailsSlice";

const mockStore = configureMockStore();
const initialState = {
  shows: showsReducer,
  showDetails: showDetailsReducer,
};

const store: any = mockStore(initialState);

jest.mock("react-error-boundary", () => ({
  useErrorBoundary: () => ({
    showBoundary: jest.fn(),
  }),
}));

test("renders loading content", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
  });

  const loadedElement = await screen.findByText(/SHOWS/i);
  expect(loadedElement).toBeInTheDocument();
});
