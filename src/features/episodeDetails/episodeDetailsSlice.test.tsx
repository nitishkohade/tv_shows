import episodeDetailsReducer, {
  setEpisodeDetails,
} from "./episodeDetailsSlice";

describe("episodeDetailsReducer", () => {
  const initialState = {
    episodeDetails: null,
  };

  it("should handle initial state", () => {
    expect(episodeDetailsReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  it("should handle setEpisodeDetails", () => {
    const testEpisodeDetails: any = {};
    const actual = episodeDetailsReducer(
      initialState,
      setEpisodeDetails(testEpisodeDetails),
    );
    expect(actual.episodeDetails).toEqual(testEpisodeDetails);
  });

  it("setEpisodeDetails should create an action to update episode details", () => {
    const testEpisodeDetails: any = {};
    const expectedAction = {
      type: "episodeDetails/setEpisodeDetails",
      payload: testEpisodeDetails,
    };
    expect(setEpisodeDetails(testEpisodeDetails)).toEqual(expectedAction);
  });
});
