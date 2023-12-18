import showDetailsReducer, {
  setName,
  setShowDetails,
  setEpisodes,
} from "./showDetailsSlice";
import { ShowProps } from "src/models/show";
import { EpisodeProps } from "src/models/episode";

describe("showDetailsSlice", () => {
  const initialState = {
    showDetails: {},
    episodes: [],
    name: "",
  };

  it("should handle initial state", () => {
    expect(showDetailsReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  it("should handle setName", () => {
    const actual = showDetailsReducer(initialState, setName("New Name"));
    expect(actual.name).toEqual("New Name");
  });

  it("should handle setShowDetails", () => {
    const testShowDetails: ShowProps = {
      id: "2",
      image: {
        medium: "",
        original: "",
      },
      name: "",
      rating: {
        average: 3,
      },
      summary: "",
    };
    const actual = showDetailsReducer(
      initialState,
      setShowDetails(testShowDetails),
    );
    expect(actual.showDetails).toEqual(testShowDetails);
  });

  it("should handle setEpisodes", () => {
    const testEpisodes: EpisodeProps[] = [];
    const actual = showDetailsReducer(initialState, setEpisodes(testEpisodes));
    expect(actual.episodes).toEqual(testEpisodes);
  });
});
