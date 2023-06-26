import { GENRES } from "@/constants/genres";

export type IGenre = keyof typeof GENRES;

export interface IMovieInfo {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: IGenre;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface IReview {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ICinema {
  id: string;
  name: string;
  movieIds: string[];
}

export interface IFilter {
  name: string;
  genre: string;
  cinema: string;
}
