import React, { lazy } from "react";
import { Header } from "src/components/header";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "src/components/tabPanel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { ErrorBoundary } from "react-error-boundary";
import { MyErrorFallback } from "src/components/errorFallBack";

const MainSection = lazy(() =>
  import("./components").then((module) => ({
    default: module.MainSection,
  })),
);

const EpisodesSection = lazy(() =>
  import("./components").then((module) => ({
    default: module.EpisodesSection,
  })),
);

export const ShowDetails: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { showId } = useParams();

  let showName = useSelector((state: RootState) => state.showDetails.name);

  const handleChangeTabs = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box p={1}>
      <Box mb={1}>
        <Header text={showName} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChangeTabs}>
            <Tab label="Main" />
            <Tab label="Episodes" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ErrorBoundary FallbackComponent={MyErrorFallback}>
            <MainSection showId={showId} />
          </ErrorBoundary>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ErrorBoundary FallbackComponent={MyErrorFallback}>
            <EpisodesSection showId={showId} />
          </ErrorBoundary>
        </TabPanel>
      </Box>
    </Box>
  );
};
