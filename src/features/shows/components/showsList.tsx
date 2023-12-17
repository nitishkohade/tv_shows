import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "src/components/header";
import { fetchApiData } from "src/helpers/dataProvider";
import { ShowsProps } from "src/models/shows";
import { ShowCard } from "./showCard";

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
  const [shows, setShows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShows = async () => {
    setLoading(true);
    try {
      const showsList = await fetchApiData<ShowsProps[]>("shows");
      setShows((prevShows) => [...prevShows, ...showsList]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

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
