import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";

const mockStore = configureMockStore();
const store = mockStore({}) as unknown as Store;

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

  const loadedElement = await screen.findByText(/Try again/i);
  expect(loadedElement).toBeInTheDocument();
});
