type RatingProps = {
  average: number;
};

type ImageProps = {
  medium: string;
  original: string;
};

// the api return a lot of key values in json but it is possible to retieve what are required from the backend
export type ShowsProps = {
  id: string;
  name: string;
  rating: RatingProps;
  image: ImageProps;
  summary: string;
};
