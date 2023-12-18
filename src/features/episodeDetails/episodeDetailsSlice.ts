import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodeProps } from "src/models/episode";

interface EpisodeDetailsState {
  episode: EpisodeProps | {};
}

const initialState: EpisodeDetailsState = {
  episode: {},
};

const episodeDetailsSlice = createSlice({
  name: "episodeDetails",
  initialState,
  reducers: {
    setEpisode: (state, action: PayloadAction<EpisodeProps>) => {
      state.episode = action.payload;
    },
  },
});

export const { setEpisode } = episodeDetailsSlice.actions;

export default episodeDetailsSlice.reducer;
