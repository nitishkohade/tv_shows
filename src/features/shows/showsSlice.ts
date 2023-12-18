import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowProps } from "src/models/show";

interface ShowsState {
  shows: ShowProps[];
}

const initialState: ShowsState = {
  shows: [],
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setShows: (state, action: PayloadAction<ShowProps[]>) => {
      state.shows = action.payload;
    },
  },
});

export const { setShows } = showsSlice.actions;

export default showsSlice.reducer;
