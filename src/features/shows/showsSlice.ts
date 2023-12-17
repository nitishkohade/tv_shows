import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowsProps } from "src/models/shows";

interface ShowsState {
  shows: ShowsProps[];
}

const initialState: ShowsState = {
  shows: [],
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setShows: (state, action: PayloadAction<ShowsProps[]>) => {
      state.shows = action.payload;
    },
  },
});

export const { setShows } = showsSlice.actions;

export default showsSlice.reducer;
