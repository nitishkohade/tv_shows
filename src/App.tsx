import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ShowsPage,
  ShowDetailPage,
  EpisodeDetailPage,
  NotFoundPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowsPage />} />
      <Route path="/show/:showId">
        <Route index element={<ShowDetailPage />} />
        <Route path="episode/:episodeId" element={<EpisodeDetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
