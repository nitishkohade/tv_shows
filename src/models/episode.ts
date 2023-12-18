// the api return a lot of key values pair data in json format but it is possible

import { RatingProps } from "./common";

// to retieve what is required from the backend since I am not using all of them
export type EpisodeProps = {
  id: string;
  name: string;
  number: number;
  rating: RatingProps;
  season: number;
  summary: string;
  airdate: string;
};
