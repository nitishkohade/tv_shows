import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodeProps } from "src/models/episode";
import { ShowProps } from "src/models/show";

interface ShowDetailsState {
  showDetails: ShowProps | {};
  episodes: EpisodeProps[];
  name: string;
}

const initialState: ShowDetailsState = {
  showDetails: {},
  episodes: [],
  name: "",
};

const showDetailsSlice = createSlice({
  name: "showDetails",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setShowDetails: (state, action: PayloadAction<ShowProps>) => {
      state.showDetails = action.payload;
    },
    setEpisodes: (state, action: PayloadAction<EpisodeProps[]>) => {
      state.episodes = action.payload;
    },
  },
});

export const { setShowDetails, setEpisodes, setName } =
  showDetailsSlice.actions;

export default showDetailsSlice.reducer;
