import React, { Suspense, lazy } from "react";
import { Header } from "src/components/header";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "src/components/tabPanel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { ErrorBoundary } from "react-error-boundary";
import { MyErrorFallback } from "src/components/errorFallBack";

// Lazy load sections for better performance
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

// Tab configurations
const tabsConfig = [
  { label: "Main", Component: MainSection },
  { label: "Episodes", Component: EpisodesSection },
];

export const ShowDetails: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { showId } = useParams();

  let showName = useSelector((state: RootState) => state.showDetails.name);

  const handleChangeTabs = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box p={1}>
      <Box mb={1}>
        <Header text={showName} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={selectedTab} onChange={handleChangeTabs}>
            {tabsConfig.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          {tabsConfig.map((tab, index) => (
            <TabPanel key={index} value={selectedTab} index={index}>
              <ErrorBoundary FallbackComponent={MyErrorFallback}>
                <tab.Component showId={showId} />
              </ErrorBoundary>
            </TabPanel>
          ))}
        </Suspense>
      </Box>
    </Box>
  );
};
