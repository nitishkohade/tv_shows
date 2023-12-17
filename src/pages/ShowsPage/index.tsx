import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MyErrorFallback } from "src/components/errorFallBack";
import { Shows } from "src/features/shows";

export const ShowsPage = () => {
  return (
    <ErrorBoundary FallbackComponent={MyErrorFallback}>
      <Shows />
    </ErrorBoundary>
  );
};
