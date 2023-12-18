import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "src/hooks/useFetch";
import { RootState } from "src/store/store";
import { setEpisodes } from "../../showDetailsSlice";
import { ShowIdProps } from "../../models";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { formatDate, convertNumberToFloat } from "../../utils";
import { useNavigate } from "react-router-dom";

export const EpisodesSection = ({ showId }: ShowIdProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let episodesFromStore = useSelector(
    (state: RootState) => state.showDetails.episodes,
  );
  const shouldFetchEpisodes = episodesFromStore.length === 0;

  const { data: episodesFromApi } = useFetch<[]>(
    `shows/${showId}/episodes`,
    shouldFetchEpisodes,
  );

  //Saving Episodes
  useEffect(() => {
    if (episodesFromApi) {
      dispatch(setEpisodes(episodesFromApi));
    }
  }, [episodesFromApi, dispatch]);

  const groupedEpisodes = useMemo(() => {
    return episodesFromStore.reduce((acc: Record<string, any[]>, episode) => {
      const season = episode.season;
      if (!acc[season]) {
        acc[season] = [];
      }
      acc[season].push({
        id: episode.id,
        number: episode.number,
        date: formatDate(episode.airdate),
        name: episode.name,
        score: convertNumberToFloat(episode?.rating?.average),
        season: episode.season,
      });
      return acc;
    }, {});
  }, [episodesFromStore]);

  return (
    <>
      {Object.entries(groupedEpisodes).map(([season, episodes]) => (
        <TableContainer
          component={Paper}
          key={season}
          sx={{
            mb: 4,
            maxWidth: { md: "80%" },
            width: "100%",
            mx: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "& .MuiTableCell-root": {
              py: 1.5,
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: "0.9rem",
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            },
            "& .MuiTableHead-root": {
              backgroundColor: "#e3f2fd",
              "& .MuiTableCell-root": {
                fontWeight: "bold",
                color: "#1976d2",
              },
            },
            "& .MuiTableRow-root:hover": {
              backgroundColor: "rgba(237, 245, 251, 1)",
            },
            "& .MuiRating-root": {
              color: "#ffa726",
            },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              p: 2,
              textAlign: "center",
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            Season {season}
          </Typography>
          <Table sx={{ minWidth: 300 }} aria-label={`Season ${season} table`}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes.map((episode, index) => (
                <TableRow
                  key={`${season}-${index}`}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/episodes/${episode.id}`);
                  }}
                >
                  <TableCell component="th" scope="row">
                    {episode.number}
                  </TableCell>
                  <TableCell>{episode.date}</TableCell>
                  <TableCell>{episode.name}</TableCell>
                  <TableCell align="right">{episode.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
};
