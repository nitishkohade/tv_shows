import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "src/components/header";
import { ShowsProps } from "src/models/shows";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { useFetch } from "src/hooks/useFetch";
import { setShows } from "../../showsSlice";
import { ShowCard } from "..";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const LoadingMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`;

export const ShowsList: React.FC = () => {
  const shows = useSelector((state: RootState) => state.shows.shows);
  const { data, loading } = useFetch<ShowsProps[]>("shows");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShows(data || []));
  }, [data, dispatch]);

  return (
    <Container>
      <Header text="SHOWS" />
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
    </Container>
  );
};
