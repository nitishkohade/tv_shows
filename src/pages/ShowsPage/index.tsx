import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MyErrorFallback } from "src/components/errorFallBack";
import { ShowsList } from "src/features/shows/components/showsList";

export const ShowsPage = () => {
  return (
    <ErrorBoundary FallbackComponent={MyErrorFallback}>
      <ShowsList />
    </ErrorBoundary>
  );
};
