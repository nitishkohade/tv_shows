import { ShowsProps } from "src/models/shows";
import showsReducer, { setShows } from "./showsSlice";

describe("showsSlice", () => {
  const initialState = { shows: [] };
  const mockShows: Partial<ShowsProps>[] = [
    { id: 1, name: "Show 1" },
    { id: 2, name: "Show 2" },
  ];

  it("should return the initial state", () => {
    expect(showsReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle setShows", () => {
    const previousState = { shows: [] };
    expect(
      showsReducer(previousState, setShows(mockShows as ShowsProps[])),
    ).toEqual({
      shows: mockShows,
    });
  });
});
