import { Timestamp } from "firebase/firestore";

export type IUsers = {
  heart: IMovieDetail[];
  user: IUser;
};

export type IUser = {
  uid: string;
  date: string;
  email: string;
  time: Timestamp;
};

export type IForm = { email: string; password: string };

export type ISlider = { title: string; req: string };

export type IMovieDetail = {
  id: string;
  title?: string;
  runtime: string;
  tagline: string;
  overview: string;
  vote_count: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  backdrop_path?: string;
  original_title: string;
  genres: { name: string }[];
  production_companies: { logo_path: string; name: string }[];
};
