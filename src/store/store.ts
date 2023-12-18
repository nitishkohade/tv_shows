import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "src/features/shows/showsSlice";
import showDetailsReducer from "src/features/showDetails/showDetailsSlice";
import episodeDetailsReducer from "src/features/episodeDetails/episodeDetailsSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
    showDetails: showDetailsReducer,
    episodeDetails: episodeDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
