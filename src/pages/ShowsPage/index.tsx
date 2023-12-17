import React, { Suspense } from "react";
import { ErrorBoundary } from "src/components/errorBoundary/errorBoundary";
import { ShowsList } from "src/features/shows/components/showsList";

export const ShowsPage = () => {
  return (
    <ErrorBoundary fallback="Something went wrong">
      <Suspense fallback="loading.....">
        <ShowsList />
      </Suspense>
    </ErrorBoundary>
  );
};
