import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ShowsPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ShowsPage })),
);
const ShowDetailPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.ShowDetailPage,
  })),
);
const EpisodeDetailPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.EpisodeDetailPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function App() {
  return (
    <Suspense fallback={<div>Loading Content</div>}>
      <Routes>
        <Route path="/" element={<ShowsPage />} />
        <Route path="/shows/:showId" element={<ShowDetailPage />} />
        <Route path="/episodes/:episodeId" element={<EpisodeDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
