import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ShowDetails } from "./showDetails";

jest.mock("react-router", () => ({
  useParams: () => ({ showId: "1" }),
}));

jest.mock("src/store/store", () => ({
  useSelector: jest.fn(),
}));

jest.mock("src/components/header", () => ({
  Header: () => <div>Header Mock</div>,
}));
jest.mock("src/components/tabPanel", () => ({
  TabPanel: ({ index }: any) => <div>TabPanel {index}</div>,
}));
jest.mock("src/components/errorFallBack", () => ({
  MyErrorFallback: () => <div>ErrorFallback Mock</div>,
}));

const mockStore = configureMockStore();
const initialState = {
  showDetails: {
    name: "Test Show",
  },
};

describe("ShowDetails", () => {
  it("renders tab panels correctly", () => {
    const store: any = mockStore(initialState);
    render(
      <Provider store={store}>
        <ShowDetails />
      </Provider>,
    );
    const tabPanels = screen.getAllByText(/TabPanel/);
    expect(tabPanels).toHaveLength(2);
    expect(tabPanels[0]).toHaveTextContent("TabPanel 0");
    expect(tabPanels[1]).toHaveTextContent("TabPanel 1");
  });

  it("switches tabs and shows correct content", () => {
    const store: any = mockStore(initialState);
    render(
      <Provider store={store}>
        <ShowDetails />
      </Provider>,
    );

    const mainTab = screen.getByText("Main");
    const episodesTab = screen.getByText("Episodes");
    expect(screen.getByText("TabPanel 0")).toBeInTheDocument();

    fireEvent.click(episodesTab);

    expect(screen.getByText("Episodes")).toBeInTheDocument();

    fireEvent.click(mainTab);

    expect(screen.getByText("Main")).toBeInTheDocument();
  });
});
