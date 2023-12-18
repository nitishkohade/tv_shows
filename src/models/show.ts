import { ImageProps, RatingProps } from "./common";

// the api return a lot of key values pair data in json format but it is possible
// to retieve what is required from the backend since I am not using all of them
export type ShowProps = {
  id: string;
  name: string;
  rating: RatingProps;
  image: ImageProps;
  summary: string;
};
