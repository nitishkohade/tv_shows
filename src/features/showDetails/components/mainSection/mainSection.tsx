import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "src/hooks/useFetch";
import { RootState } from "src/store/store";
import { setName, setShowDetails } from "../../showDetailsSlice";
import { ShowProps } from "src/models/show";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ShowIdProps } from "../../models";
import { SanitizedHtmlDisplay } from "src/components/sanitizedHtmlDisplay";

export const MainSection = ({ showId }: ShowIdProps) => {
  const dispatch = useDispatch();

  const shows = useSelector((state: RootState) => state.shows.shows);

  let showDetailsFromStore = useSelector(
    (state: RootState) => state.showDetails.showDetails,
  );

  showDetailsFromStore =
    String(showDetailsFromStore?.id) !== showId ? null : showDetailsFromStore;

  if (!showDetailsFromStore) {
    showDetailsFromStore = shows?.find((show) => show.id === showId) || null;
    if (showDetailsFromStore) {
      dispatch(setShowDetails(showDetailsFromStore));
      dispatch(setName(showDetailsFromStore.name));
    }
  }

  const { data: showDetailFromApi } = useFetch<ShowProps>(
    `shows/${showId}`,
    !showDetailsFromStore,
  );

  // Saving showDetails if not present
  useEffect(() => {
    if (showDetailFromApi) {
      dispatch(setShowDetails(showDetailFromApi));
      dispatch(setName(showDetailFromApi.name));
    }
  }, [showDetailFromApi, dispatch]);

  return (
    <Card
      sx={{ p: 0, display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={showDetailsFromStore?.image?.medium}
        alt={`${showDetailsFromStore?.name} Show Cover`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <SanitizedHtmlDisplay
            htmlContent={showDetailsFromStore?.summary || ""}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};
