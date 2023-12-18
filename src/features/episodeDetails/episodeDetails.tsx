import React, { lazy } from "react";
import { Header } from "src/components/header";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "src/components/tabPanel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { ErrorBoundary } from "react-error-boundary";
import { MyErrorFallback } from "src/components/errorFallBack";

export const EpisodeDetails: React.FC = () => {
  const { episodeId } = useParams();

  let showName = useSelector((state: RootState) => state.showDetails.name);

  return (
    <Box p={1}>
      <Box mb={1}>
        <Header text={showName} />
      </Box>
      <Box sx={{ width: "100%" }}></Box>
    </Box>
  );
};
