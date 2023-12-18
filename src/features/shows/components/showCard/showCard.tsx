import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowProps } from "src/models/show";
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
  cursor: pointer;
`;

const ShowImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const FallbackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
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
  show: ShowProps;
}> = ({ show }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/shows/${show.id}`)}>
      {!imageError ? (
        <ShowImage
          src={show.image?.medium}
          alt={show.name}
          onError={() => setImageError(true)}
        />
      ) : (
        <FallbackImage src="/images/dummy_show.jpg" alt={show.name} />
      )}
      <ShowContent>
        <ShowName>{show.name}</ShowName>
        <ShowRating>Rating: {show.rating?.average}</ShowRating>
      </ShowContent>
    </CardContainer>
  );
};
