import React, { useEffect } from "react";
import { Header } from "src/components/header";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { setEpisodeDetails } from "./episodeDetailsSlice";
import { useFetch } from "src/hooks/useFetch";
import { EpisodeProps } from "src/models/episode";
import { SanitizedHtmlDisplay } from "src/components/sanitizedHtmlDisplay";
import { roundHalf } from "src/utils/mathUtils";
import { Loader } from "src/components/loader";

// Component for displaying the details of an episode
export const EpisodeDetails: React.FC = () => {
  const { episodeId } = useParams();
  const dispatch = useDispatch();

  // Accessing episodes from showDetails state
  const episodes = useSelector(
    (state: RootState) => state.showDetails.episodes,
  );
  // Accessing episodeDetails from episodeDetails state
  let episodeDetails = useSelector(
    (state: RootState) => state.episodeDetails.episodeDetails,
  );

  // Check if the details associated with episodeId from url is present or not
  const isEpisodeDetailsPresent =
    String(episodeDetails?.id) === String(episodeId);

  // if episode details not present then request a new one from the already stored episodes in showDetails state
  if (!isEpisodeDetailsPresent) {
    episodeDetails =
      episodes?.find((episode) => String(episode.id) === String(episodeId)) ||
      null;
    if (episodeDetails) {
      dispatch(setEpisodeDetails(episodeDetails));
    }
  }

  // if episodeDetails can't be fetched locally then call the api
  const { data: newEpisodeDetails, loading } = useFetch<EpisodeProps>(
    `episodes/${episodeId}`,
    !episodeDetails,
  );

  // Saving episodeDetails if not present
  useEffect(() => {
    if (newEpisodeDetails) {
      dispatch(setEpisodeDetails(newEpisodeDetails));
    }
  }, [newEpisodeDetails, dispatch]);

  return (
    <Loader loading={loading}>
      <Box p={1}>
        <Box mb={1}>
          <Header text={"EPISODE"} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Card
            sx={{
              p: 0,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 500 }}
              image={episodeDetails?.image?.original}
              alt={`${episodeDetails?.name} Show Cover`}
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="h5" color="text.secondary">
                {episodeDetails?.name}
              </Typography>
              <Rating
                sx={{ mb: 2 }}
                value={roundHalf(episodeDetails?.rating?.average || "")}
                precision={0.1}
                readOnly
              />
              <SanitizedHtmlDisplay
                htmlContent={episodeDetails?.summary || ""}
              />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Loader>
  );
};
