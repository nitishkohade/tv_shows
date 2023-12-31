import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "src/components/header";
import { ShowProps } from "src/models/show";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { useFetch } from "src/hooks/useFetch";
import { setShows } from "./showsSlice";
import { ShowCard } from "./components";
import { Loader } from "src/components/loader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export const Shows: React.FC = () => {
  const shows = useSelector((state: RootState) => state.shows.shows);
  const dispatch = useDispatch();
  const shouldFetch = shows?.length === 0;
  const { data, loading } = useFetch<ShowProps[]>("shows", shouldFetch);

  useEffect(() => {
    if (data) {
      dispatch(setShows(data || []));
    }
  }, [data, dispatch]);

  return (
    <Loader loading={loading}>
      <Container>
        <Header text="SHOWS" />
        {shows?.map((show) => <ShowCard key={show.id} show={show} />)}
      </Container>
    </Loader>
  );
};
