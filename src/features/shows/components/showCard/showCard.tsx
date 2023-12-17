// src/features/Shows/components/ShowCard.tsx
import React, { useState } from "react";
import { ShowsProps } from "src/models/shows";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  flex-grow: 1;
`;

const ShowImage = styled.img<{ showError: boolean }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  display: ${({ showError }) => (showError ? "none" : "block")};
`;

const FallbackImage = styled.img<{ showError: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: ${({ showError }) => (showError ? "block" : "none")};
`;

const ShowContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
`;

const ShowName = styled.h3`
  margin: 0;
  font-size: 18px;
  background-color: rgba(240, 240, 240, 0.6);
  padding: 8px;
  border-radius: 4px;
  text-align: center;
`;

const ShowRating = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  background-color: rgba(240, 240, 240, 0.6);
  padding: 8px;
  border-radius: 4px;
`;

export const ShowCard: React.FC<{
  show: ShowsProps;
}> = ({ show }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <CardContainer>
      <ShowImage
        src={show.image?.medium}
        alt={show.name}
        showError={imageError}
        onError={() => setImageError(true)}
      />
      <FallbackImage
        src="/images/dummy_show.jpg" /* Replace with the path to your dummy image */
        alt={show.name}
        showError={imageError}
      />
      <ShowContent>
        <ShowName>{show.name}</ShowName>
        <ShowRating>Rating: {show.rating?.average}</ShowRating>
      </ShowContent>
    </CardContainer>
  );
};
