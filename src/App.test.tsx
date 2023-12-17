import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({}) as any;

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
