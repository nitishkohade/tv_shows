import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "src/features/shows/showsSlice";
import showDetailsReducer from "src/features/showDetails/showDetailsSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
    showDetails: showDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
