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
import { roundNumberDividedByTwo } from "src/utils/mathUtils";

export const EpisodeDetails: React.FC = () => {
  const { episodeId } = useParams();

  const dispatch = useDispatch();

  const episodes = useSelector(
    (state: RootState) => state.showDetails.episodes,
  );

  let episodeDetailsFromStore = useSelector(
    (state: RootState) => state.episodeDetails.episodeDetails,
  );

  episodeDetailsFromStore =
    String(episodeDetailsFromStore?.id) !== String(episodeId)
      ? null
      : episodeDetailsFromStore;

  if (!episodeDetailsFromStore) {
    episodeDetailsFromStore =
      episodes?.find((episode) => String(episode.id) === String(episodeId)) ||
      null;
    if (episodeDetailsFromStore) {
      dispatch(setEpisodeDetails(episodeDetailsFromStore));
    }
  }

  const { data: episodeDetailFromApi } = useFetch<EpisodeProps>(
    `episodes/${episodeId}`,
    !episodeDetailsFromStore,
  );

  // Saving episodeDetails if not present
  useEffect(() => {
    if (episodeDetailFromApi) {
      dispatch(setEpisodeDetails(episodeDetailFromApi));
    }
  }, [episodeDetailFromApi, dispatch]);

  return (
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
            image={episodeDetailsFromStore?.image?.original}
            alt={`${episodeDetailsFromStore?.name} Show Cover`}
          />
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="h5" color="text.secondary">
              {episodeDetailsFromStore?.name}
            </Typography>
            <Rating
              sx={{ mb: 2 }}
              value={roundNumberDividedByTwo(
                episodeDetailsFromStore?.rating.average || "",
              )}
              precision={0.1}
              readOnly
            />
            <SanitizedHtmlDisplay
              htmlContent={episodeDetailsFromStore?.summary || ""}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
