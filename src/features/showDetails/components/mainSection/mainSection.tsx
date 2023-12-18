import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "src/hooks/useFetch";
import { RootState } from "src/store/store";
import { setName, setShowDetails } from "../../showDetailsSlice";
import { ShowProps } from "src/models/show";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { ShowIdProps } from "../../models";
import { SanitizedHtmlDisplay } from "src/components/sanitizedHtmlDisplay";
import { roundNumberDividedByTwo } from "src/utils/mathUtils";

// Component for displaying the main details of a show
export const MainSection = ({ showId }: ShowIdProps) => {
  const dispatch = useDispatch();

  // Accessing list of shows from shows state
  const shows = useSelector((state: RootState) => state.shows.shows);

  // Accessing showDetails from showDetails state
  let showDetails = useSelector(
    (state: RootState) => state.showDetails.showDetails,
  );

  // Check if the details associated with showId from url is present or not
  const isShowDetailsPresent = String(showDetails?.id) === String(showId);

  // if show details not present then request a new one from the already stored shows in shows state
  if (!isShowDetailsPresent) {
    showDetails = shows?.find((show) => show.id === showId) || null;
    if (showDetails) {
      dispatch(setShowDetails(showDetails));
      dispatch(setName(showDetails.name));
    }
  }

  // if showDetails can't be fetched locally then call the api
  const { data: newShowDetails } = useFetch<ShowProps>(
    `shows/${showId}`,
    !showDetails,
  );

  // Saving showDetails if not present
  useEffect(() => {
    if (newShowDetails) {
      dispatch(setShowDetails(newShowDetails));
      dispatch(setName(newShowDetails.name));
    }
  }, [newShowDetails, dispatch]);

  return (
    <Card sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={showDetails?.image?.medium}
        alt={`${showDetails?.name} Show Cover`}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h5" color="text.secondary">
          {showDetails?.name}
        </Typography>
        <Rating
          sx={{ mb: 2 }}
          value={roundNumberDividedByTwo(showDetails?.rating?.average || "")}
          precision={0.1}
          readOnly
        />
        <SanitizedHtmlDisplay htmlContent={showDetails?.summary || ""} />
      </CardContent>
    </Card>
  );
};
