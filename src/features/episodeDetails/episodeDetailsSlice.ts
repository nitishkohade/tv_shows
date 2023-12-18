import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodeProps } from "src/models/episode";

interface EpisodeDetailsState {
  episodeDetails: EpisodeProps | null;
}

const initialState: EpisodeDetailsState = {
  episodeDetails: null,
};

const episodeDetailsSlice = createSlice({
  name: "episodeDetails",
  initialState,
  reducers: {
    setEpisodeDetails: (state, action: PayloadAction<EpisodeProps>) => {
      state.episodeDetails = action.payload;
    },
  },
});

export const { setEpisodeDetails } = episodeDetailsSlice.actions;

export default episodeDetailsSlice.reducer;
